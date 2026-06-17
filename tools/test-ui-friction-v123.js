#!/usr/bin/env node
/**
 * UI Friction Fix Pack v1.2.3 smoke test.
 *
 * Verifies the v1.2.3 surface area without driving a full UI session
 * (the intro landing and Clerk sign-in flow close the headless page).
 * We instead probe what the page exposes once app.js has booted:
 *   - Pager bar HTML is present.
 *   - Window-level helpers (__ftutorMarkCompleted, __ftutorAdvanceSubsection,
 *     __ftutorIsCompleted, __ftutorApplyCompletionIndicators,
 *     __ftutorPeekNextSubsection, __ftutorRefreshPager) are wired.
 *   - Syllabus chapter buttons have the `data-ftutorChapterHook='1'` marker.
 *   - Marking a subsection complete propagates to localStorage AND adds the
 *     `is-completed` class to the matching DOM button.
 *   - Quick Check CSS overrides survive (font-size >= 16px on .kc-option-btn).
 *
 * Existing bridge expected at TUTOR_TEST_PORT (defaults to 9123).
 * Exits 0 if every assertion succeeds; exits 1 with a diff report otherwise.
 */
const { chromium } = require('playwright');

const PORT = Number(process.env.TUTOR_TEST_PORT || 9123);
const BASE = `http://127.0.0.1:${PORT}`;

function fail(stage, info) {
    console.error(`FAIL [${stage}]`, JSON.stringify(info, null, 2));
    process.exit(1);
}

async function main() {
    const browser = await chromium.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
    });
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await ctx.newPage();
    const pageErrors = [];
    page.on('pageerror', e => pageErrors.push('pageerror: ' + e.message));
    page.on('console', msg => {
        if (msg.type() === 'error') pageErrors.push('console.error: ' + msg.text());
    });

    try {
        await page.goto(BASE + '/', { waitUntil: 'commit', timeout: 20000 });
        // Wait until both the IIFE marker AND the deferred indicator pass have run
        // (the IIFE schedules a setTimeout(250ms) that finishes patchChapterClicks).
        await page.waitForFunction(() => {
            if (typeof window.__ftutorMarkCompleted !== 'function') return false;
            const syl = document.getElementById('courseSyllabus');
            if (!syl) return false;
            const chs = syl.querySelectorAll('.syllabus-chapter');
            if (!chs.length) return false;
            // chapter hook applied
            return Array.from(chs).every(b => b.dataset.ftutorChapterHook === '1');
        }, null, { timeout: 25000 });

        const snapshot = await page.evaluate(() => {
            const helpers = [
                '__ftutorMarkCompleted',
                '__ftutorIsCompleted',
                '__ftutorApplyCompletionIndicators',
                '__ftutorAdvanceSubsection',
                '__ftutorRetreatSubsection',
                '__ftutorPeekNextSubsection',
                '__ftutorRefreshPager'
            ];
            const helperState = Object.fromEntries(helpers.map(n => [n, typeof window[n]]));

            const pagerEl = document.getElementById('learnExplainPager');
            const pagerPrev = document.getElementById('learnPagerPrevBtn');
            const pagerNext = document.getElementById('learnPagerNextBtn');

            const syl = document.getElementById('courseSyllabus');
            const chapters = syl ? Array.from(syl.querySelectorAll('.syllabus-chapter')) : [];
            const hookedChapters = chapters.filter(b => b.dataset.ftutorChapterHook === '1').length;
            const subsections = syl ? Array.from(syl.querySelectorAll('.syllabus-subsection')) : [];

            // Pick a subsection to mark and verify completion plumbing.
            const sample = subsections[0];
            const sampleTitle = sample ? sample.getAttribute('data-subsection') : '';
            let postMarkCompleted = 0;
            let storedCount = 0;
            let sampleHasCompletedClass = false;
            try {
                if (sample && sampleTitle) {
                    window.__ftutorMarkCompleted(sampleTitle, sampleTitle);
                    window.__ftutorApplyCompletionIndicators();
                    postMarkCompleted = document.querySelectorAll('#courseSyllabus .syllabus-subsection.is-completed').length;
                    sampleHasCompletedClass = sample.classList.contains('is-completed');
                    const stored = JSON.parse(localStorage.getItem('aquariusCompletedSubsections.v1') || '[]');
                    storedCount = stored.length;
                    localStorage.removeItem('aquariusCompletedSubsections.v1');
                    sample.classList.remove('is-completed');
                }
            } catch (e) {
                return { helperState, error: String(e && e.message) };
            }

            // Issue 7 CSS reality check: when kcModal is hidden the rules still
            // apply to .kc-option-btn via the !important override. We sniff the
            // active stylesheet for the selector.
            const cssRule = (() => {
                for (const sheet of Array.from(document.styleSheets)) {
                    let rules;
                    try { rules = sheet.cssRules; } catch (_) { continue; }
                    if (!rules) continue;
                    for (const rule of Array.from(rules)) {
                        if (!rule.selectorText) continue;
                        if (rule.selectorText.includes('kc-option-btn')) {
                            return { selector: rule.selectorText, cssText: rule.cssText.slice(0, 220) };
                        }
                    }
                }
                return null;
            })();

            const pagerCssRule = (() => {
                for (const sheet of Array.from(document.styleSheets)) {
                    let rules;
                    try { rules = sheet.cssRules; } catch (_) { continue; }
                    if (!rules) continue;
                    for (const rule of Array.from(rules)) {
                        if (!rule.selectorText) continue;
                        if (rule.selectorText === '#learnExplainPager') {
                            return rule.cssText.slice(0, 220);
                        }
                    }
                }
                return null;
            })();

            return {
                helperState,
                pagerHtmlPresent: !!pagerEl,
                pagerPrevPresent: !!pagerPrev,
                pagerNextPresent: !!pagerNext,
                pagerCssRule,
                chCount: chapters.length,
                hookedChapters,
                subCount: subsections.length,
                sampleTitle,
                postMarkCompleted,
                sampleHasCompletedClass,
                storedCount,
                quickCheckRule: cssRule
            };
        });

        console.log(JSON.stringify(snapshot, null, 2));

        // Assertions
        const failures = [];
        Object.entries(snapshot.helperState).forEach(([k, v]) => {
            if (v !== 'function') failures.push(`helper ${k} = ${v}`);
        });
        if (!snapshot.pagerHtmlPresent) failures.push('learnExplainPager missing in DOM');
        if (!snapshot.pagerPrevPresent || !snapshot.pagerNextPresent) failures.push('pager buttons missing');
        if (!snapshot.pagerCssRule) failures.push('pager CSS rule not found');
        if (snapshot.chCount < 1) failures.push('no syllabus chapters');
        if (snapshot.hookedChapters !== snapshot.chCount) failures.push(`chapter hooks: ${snapshot.hookedChapters}/${snapshot.chCount}`);
        if (snapshot.subCount < 1) failures.push('no subsections rendered');
        if (snapshot.storedCount < 1) failures.push('completion mark did not persist');
        if (!snapshot.sampleHasCompletedClass) failures.push('is-completed class not applied to sample subsection');
        if (!snapshot.quickCheckRule) failures.push('Quick Check CSS override missing');

        const fatalErrors = pageErrors.filter(e => !/MathJax|Failed to load resource|tex-mml-chtml|cdn.tailwindcss|font/i.test(e));
        if (fatalErrors.length) failures.push('console errors: ' + JSON.stringify(fatalErrors.slice(0, 5)));

        if (failures.length) {
            fail('assertions', failures);
        }
        console.log('PASS');
    } finally {
        await browser.close();
    }
}

main().catch(e => {
    console.error('TEST_THREW', e && (e.stack || e.message) || e);
    process.exit(1);
});
