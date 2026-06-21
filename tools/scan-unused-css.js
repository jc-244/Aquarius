#!/usr/bin/env node
/**
 * Unused-selector scanner for Phase 3 #20 (Home Ask EOF CSS cluster).
 *
 * Pulls every distinct class (`.foo`) and id (`#bar`) selector from a line
 * range of `app/style.css`, then word-boundary-matches each against:
 *   - app/app.js
 *   - app/index.html
 *   - app/css/*.css
 *   - app/style.css OUTSIDE the range (so a class isn't marked unused just
 *     because the only consumer is a rule we plan to delete)
 *
 * A selector is "unused" iff no reference is found in any of those files.
 *
 * Usage:
 *   node tools/scan-unused-css.js [--start N] [--end M]
 *   Defaults: --start 33181, --end <EOF>
 *
 * Output: tools/unused-css-report.md
 *
 * This is a *suggestion list*, not a delete list. Selectors built at runtime
 * via string concat ("kc-" + state) won't be caught. Manual review required.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const STYLE_PATH = path.join(ROOT, 'app', 'style.css');
const REPORT_PATH = path.join(__dirname, 'unused-css-report.md');

function parseArg(name, fallback) {
    const idx = process.argv.indexOf(name);
    if (idx === -1 || idx === process.argv.length - 1) return fallback;
    const n = Number(process.argv[idx + 1]);
    return Number.isFinite(n) ? n : fallback;
}

function readdirCss(dir) {
    try {
        return fs.readdirSync(dir).filter(f => f.endsWith('.css')).map(f => path.join(dir, f));
    } catch (_) { return []; }
}

function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

// Extract every class/id token that appears on the LEFT side of any rule
// inside the range. Walks line-by-line; selectors that span multiple lines
// just contribute their tokens on each line (Set union handles it).
function collectSelectors(rangeLines, rangeStart) {
    const tokens = new Map(); // token -> Set(line numbers, 1-based)
    let inBlock = false;
    for (let i = 0; i < rangeLines.length; i++) {
        const lineNumber = rangeStart + i;
        const stripped = rangeLines[i].replace(/\/\*.*?\*\//g, '');
        let scanText = stripped;
        if (inBlock) {
            const closeIdx = stripped.indexOf('}');
            if (closeIdx === -1) continue;
            scanText = stripped.slice(closeIdx + 1);
            inBlock = false;
        }
        const openIdx = scanText.indexOf('{');
        let selectorPart = scanText;
        if (openIdx !== -1) {
            selectorPart = scanText.slice(0, openIdx);
            inBlock = scanText.indexOf('}', openIdx) === -1;
        }
        const matches = selectorPart.matchAll(/([#.])([A-Za-z_][\w-]*)/g);
        for (const m of matches) {
            const tok = m[1] + m[2];
            if (!tokens.has(tok)) tokens.set(tok, new Set());
            tokens.get(tok).add(lineNumber);
        }
    }
    return tokens;
}

function buildHaystacks(allStyleLines, rangeStart, rangeEnd, otherFiles) {
    const haystacks = {};
    const outOfRangeLabel = `app/style.css (outside L${rangeStart}-${rangeEnd})`;
    haystacks[outOfRangeLabel] =
        allStyleLines.slice(0, rangeStart - 1).join('\n') + '\n' +
        allStyleLines.slice(rangeEnd).join('\n');
    for (const file of otherFiles) {
        haystacks[path.relative(ROOT, file)] = fs.readFileSync(file, 'utf8');
    }
    return haystacks;
}

function findReferences(name, haystacks) {
    const re = new RegExp(`(?<![\\w-])${escapeRe(name)}(?![\\w-])`);
    const hits = [];
    for (const [file, hay] of Object.entries(haystacks)) {
        if (re.test(hay)) hits.push(file);
    }
    return hits;
}

// ---------- main ----------
const allLines = fs.readFileSync(STYLE_PATH, 'utf8').split(/\r?\n/);
const RANGE_START = parseArg('--start', 33181);
const RANGE_END = parseArg('--end', allLines.length);
if (RANGE_END < RANGE_START) {
    console.error(`bad range: --start ${RANGE_START} > --end ${RANGE_END}`);
    process.exit(2);
}

const rangeLines = allLines.slice(RANGE_START - 1, RANGE_END);
const selectors = collectSelectors(rangeLines, RANGE_START);
const otherFiles = [
    path.join(ROOT, 'app', 'app.js'),
    path.join(ROOT, 'app', 'index.html'),
    ...readdirCss(path.join(ROOT, 'app', 'css')),
];
const haystacks = buildHaystacks(allLines, RANGE_START, RANGE_END, otherFiles);

const rows = [];
for (const [tok, linesSet] of selectors.entries()) {
    const bare = tok.slice(1);
    const refs = findReferences(bare, haystacks);
    rows.push({
        token: tok,
        status: refs.length ? 'used' : 'unused',
        occurrences: linesSet.size,
        firstLine: Math.min(...linesSet),
        refs: refs.join(', '),
    });
}
rows.sort((a, b) => {
    if (a.status !== b.status) return a.status === 'unused' ? -1 : 1;
    return a.firstLine - b.firstLine;
});

const unused = rows.filter(r => r.status === 'unused');
const used = rows.filter(r => r.status === 'used');

const out = [
    '# Unused-CSS scan',
    '',
    `Scope: \`app/style.css\` L${RANGE_START}-${RANGE_END}.`,
    `Distinct class/id selectors in range: **${rows.length}**.`,
    `Apparently unused: **${unused.length}**. Used: **${used.length}**.`,
    '',
    '> **Suggestion list, not delete list.** Some selectors are built at runtime by string concat',
    '> in `app.js` template strings — grep won\'t find those. Manually spot-check before deleting.',
    '',
    '## Unused selectors (candidates for deletion)',
    '',
    '| Selector | First line | Occurrences in range |',
    '|---|---|---|',
    ...unused.map(r => `| \`${r.token}\` | ${r.firstLine} | ${r.occurrences} |`),
    '',
    '## Used (kept)',
    '',
    '| Selector | First line | Referenced in |',
    '|---|---|---|',
    ...used.map(r => `| \`${r.token}\` | ${r.firstLine} | ${r.refs} |`),
    '',
];
fs.writeFileSync(REPORT_PATH, out.join('\n'));
console.log(`[scan-unused-css] L${RANGE_START}-${RANGE_END}: ${unused.length} unused / ${rows.length} total → ${REPORT_PATH}`);
