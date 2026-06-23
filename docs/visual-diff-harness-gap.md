# Visual-diff harness gap — discovered 2026-06-23 during PR #71

## Summary

The `tools/visual-diff.js` harness reports 0/1024000 pixel diff on view 14b
(populated feedback board) EVEN WHEN the rendered CSS state has clearly changed.

This was discovered while landing §3a.i (PR #71) — a regression that flipped
`.feedback-reply-context` border-color from `rgba(var(--author-rgb), 0.22)`
(tone-tinted teal/orange) to `rgba(52, 211, 153, 0.34)` / `rgba(244, 114, 182, 0.32)`
(lane-color green/pink) slipped through two `--check` runs as 0% diff.

## What works

- `display: none !important` on `#feedbackView *` → view 14-feedback-board
  reported 28888/1024000 = 2.821% diff (correctly detected).
- `body { background: red }` → no diff registered (because `.app` overlay
  covers the body — expected, not a harness bug).

## What does NOT work

Test 1 — magenta border on visible chrome:
```css
#feedbackView .feedback-reply-context {
  border: 5px solid magenta !important;
  background: yellow !important;
}
```
Result: harness reported view 14b at 0/1024000 pixels diff. The visual-current
PNG was byte-identical (MD5 match) to the baseline.

Test 2 — the actual PR #71 regression (border-color rgba(0.22) → rgba(0.34)
+ background + color all shifting):
Result: same 0/1024000.

## Diagnostic data

Independent Playwright probe (same Chromium, same bridge, same fixture,
viewport, init script, MASK_CSS) returned the EXPECTED computed-style
shift on the live page:

```
PRE-PR  .is-left.tone-2  context.border = rgba(45, 212, 191, 0.22)
POST-PR .is-left.tone-2  context.border = rgba(52, 211, 153, 0.34)
PRE-PR  .is-right.tone-3 context.border = rgba(251, 146, 60, 0.22)
POST-PR .is-right.tone-3 context.border = rgba(244, 114, 182, 0.32)
```

And re-running the magenta probe via the same path confirmed
`borderColor: rgb(255, 0, 255)` / `backgroundColor: rgb(255, 255, 0)`.

So the live page DOES render the modified CSS — Playwright's screenshot in
the harness context does NOT.

Bridge served fresh `Cache-Control: no-store, no-cache, must-revalidate`
headers on `/style.css` (verified via `curl` against the spawned bridge).
No service worker registered. No stale ws-bridge processes on :9125 between
runs.

## Pixelmatch verified working

Comparing the post-display:none view 14 visual-current PNG vs baseline
externally via pixelmatch returned `mismatch: 28888, ratio: 0.0282` —
matching the harness's own report. So pixelmatch itself is not buggy.

The bug is somewhere in **what Playwright/Chromium uses to render the page
between `page.click(...)` and `page.screenshot(...)`** — either an internal
stylesheet cache, a stale CSSOM, or something CDP-related.

## Symptom-level reproduction

```bash
echo '/* TEST */ #feedbackView .feedback-reply-context { border: 5px solid magenta !important; }' >> app/style.css
node tools/visual-diff.js --check
# View 14b reports 0/1024000 pass.
# tools/visual-diff-report.md confirms: 14b-feedback-board-populated | pass | 0/1024000 | 0.000%
git checkout HEAD -- app/style.css
```

## Workaround for active CSS-cascade refactor work

Until the harness is fixed, **direct Playwright computed-style probes**
(see `/tmp/probe_feedback_context.js` left from PR #71) are the
authoritative verification for #feedbackView cascade changes. The harness
remains useful as a regression-safety net for:
- DOM-structure changes (display:none/visibility:hidden surfaces it)
- Layout shifts (size/position changes still register)
- Total-removal failures (the empty-state probe in view 14 + assertion in
  view 14b catches setup-time fixture issues)

It is NOT safe to rely on the harness for verifying:
- border-color / background / color value changes
- box-shadow / filter / transform changes (untested but likely affected)
- Anything where pixel-level CSS-cascade equivalence matters

## Investigation TODO

- [ ] Confirm whether `require('playwright')` (full) vs `require('playwright-core')`
  (which my probe used) differ in stylesheet caching behavior.
- [ ] Try `chromium.launch({ args: ['--disable-cache', '--disable-application-cache'] })`
  in `tools/visual-diff.js:1114`.
- [ ] Try `context.route('**/style.css', (route) => route.continue({ url: route.request().url() + '?bust=' + something }))` to force fresh fetch.
- [ ] Check whether `page.reload({ waitUntil: 'networkidle' })` between `view 14` and
  `view 14b` would force a CSS refetch — though it would change every view's
  setup contract and likely produce other drift.
- [ ] Audit the Playwright version; check release notes for cache-related
  regressions.
