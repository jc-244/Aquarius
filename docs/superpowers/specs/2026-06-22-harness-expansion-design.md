# Phase 3.5 — Visual-Diff Harness Expansion (design)

Date: 2026-06-22
Owner: FlyM1ss
Status: approved (brainstorming), pre-implementation
Source plan: `docs/REFACTOR_PLAN.md` §"Phase 3.5" + "Roadmap from here" §A
Companion plan section: `docs/phase3_deferred.md` §2b

## Why

The 9-view harness opens exactly one lesson (Background §1 "Signal Energy"),
which short-circuits at `isChapterOneDemo` BEFORE `INTERACTIVE_DEMO_FAMILY_RENDERERS`.
None of the 13 lookup-table keys are exercised. `#20a/b/c Pass 2` cannot land
safely without coverage of the override-sensitive surfaces in Home Ask,
preference, course-tracker, feedback-board, and hover/focus/disabled lecture
chrome — the 5,373 `!important` declarations in that range have pixel-diff as
their only safety net.

This expansion closes the dispatcher coverage gap on at least 2 of 13 family
keys, captures the top-4 `#20c` duplicated selectors, the `#20b` ancillary
surfaces, and 3 hover/focus/disabled states the existing harness misses.

## Decisions (locked)

| Decision | Choice |
|---|---|
| PR shape | **Single Phase 3.5 PR** — code + baseline refresh together. |
| Chapter 2+ family coverage | **Two views** — `convolution_lab` + `pole_zero_roc_lab`. |
| Hover/focus/disabled | **Extend** views 01–09; do not modify their captures. |
| Login automation | **None.** All 4 view groups reachable from guest mode. `showPreferenceView` / `showCourseTrackerView` / `showFeedbackView` have zero guest checks; Home Ask composer renders identically. |

## Architecture

Single `tools/visual-diff.js` runner. Add new entries to `sharedViews`. Three
additional Playwright pages so each chrome surface gets a clean bootstrap. No
new files, no new framework, no new threshold knobs unless a specific view
forces it.

- **Page A** (existing) — guest bootstrap → views 01–09 then 15–16. Views
  15–16 reuse the Chapter 1 §1.1-1 lesson already loaded by view 06; their
  setup() first resets `learnBody.dataset.panelFocus` (left in `qa-full` by
  view 09) so the pager renders in its default chrome before focus/disabled
  state is forced.
- **Page B** (new) — guest bootstrap → views 10–14 (home-ask states + sidebar
  destinations preference/course-tracker/feedback-board). Page B exists
  because the lesson view loaded on Page A is sticky: there is no reliable
  "back to home" path that preserves Home-Ask defaults.
- **Page C₂** (new) — guest bootstrap → open Chapter 3 §3.8-1 → view 17.
- **Page C₃** (new) — guest bootstrap → open Chapter 4 §4.11-1 → view 18.

Each Page B/C₂/C₃ bootstrap pays ~5s. Acceptable for an offline regression
harness; total runtime estimate ~3 minutes (was ~90s).

## View additions (9 new → 18 total)

Filenames `01-…09-…` stay byte-identical so the existing baseline PNGs do not
require renaming. New views append.

| # | Name | Page | Surface | What it locks down |
|---|------|------|---------|--------------------|
| 10 | `10-home-ask-focused` | B | `#searchBox.home-ask-composer` :focus | #20c top-4 dup (15 occ) |
| 11 | `11-home-mode-menu-open` | B | `#homeModeMenu.home-mode-menu` open | #20c top-4 dup (17 occ) |
| 12 | `12-preference-page` | B | `.preference-*` cluster | #20b coverage |
| 13 | `13-course-tracker` | B | `.course-tracker-*` cluster | #20b coverage |
| 14 | `14-feedback-board` | B | `.feedback-board-*` cluster | #20b coverage |
| 15 | `15-lesson-pager-focused` | A (post-09) | pager `:focus` (keyboard tab) | #20a override surface |
| 16 | `16-lesson-pager-disabled` | A (post-15) | pager `:disabled` via forced `disabled=true` | #20a override surface |
| 17 | `17-lesson-convolution` | C₂ | Chapter 3 §3.8-1 — `convolution_lab` | closes #43 dispatcher gap (1 of 13) |
| 18 | `18-lesson-pole-zero-roc` | C₃ | Chapter 4 §4.11-1 — `pole_zero_roc_lab` (or routed alternate) | closes 2nd dispatcher gap |

Page B view order (10 → 14): start from guest home, focus composer (10), open
mode menu (11), close menu, click `navPreferenceBtn` (12), click
`navCourseTrackerBtn` (13), click `navFeedbackBtn` (14). Each setup() leaves
the page in a state the next setup() can recover from with a single click.

Page A continuation order (15 → 16): after view 09 finishes (state =
`qa-full`), setup() of view 15 clears `learnBody.dataset.panelFocus` and
fires a resize so the default split returns, then focuses the next-button
via direct `.focus()` call (more deterministic than tabbing through unknown
DOM order). View 16 reuses the same focused next-button and sets
`disabled=true` directly. Both views capture state the existing 07 (hover)
and 08/09 (qa-wide/qa-full) miss.

Page C₂ and C₃: fresh guest bootstrap + `openSubtopic(...)` per the new
helper `openSubtopicInFreshGuest(page, sub)`.

## Family verification (load-bearing risk)

`inferInteractiveDemoFamily` (`app/app.js` L1616-L1689) decides routing from
regex on title/text — there is no stored `family` field in the cached lesson
JSON. The 3.8-1 / 4.11-1 picks are *predictions*, not guarantees.

Mitigation:

1. After lesson render, harness runs:
   ```js
   await page.evaluate(() => {
     const out = [];
     document.querySelectorAll('.kc-interactive-demo').forEach(n => {
       const b64 = n.dataset.demoB64 || n.getAttribute('data-demo-b64');
       try {
         const demo = JSON.parse(atob(b64));
         out.push(window.inferInteractiveDemoFamily(demo));
       } catch (_) {}
     });
     window.__lastDemoFamilies = out;
     return out;
   });
   ```
2. Result is logged to console AND added to a new "Family routed" column in
   `visual-diff-report.md`. This is the permanent evidence the dispatcher
   table was exercised — not just inferred from a screenshot.
3. If 3.8-1 routes elsewhere (the difference-equation regex could hit first),
   the implementer swaps the candidate to the next match: 3.8-2, 3.8-3,
   3.11-4, or 3.13.
4. If no Chapter 4+ section routes to `pole_zero_roc_lab` (the bilateral
   Laplace lessons may hit `transform_rule_lab` first because the "laplace"
   keyword is in `hasTransformRuleIntent`), fall back to a section that
   routes to any *other* family-table key. The coverage goal is "two
   distinct family-table keys hit", not "these two specific keys".

`window.inferInteractiveDemoFamily` must be exposed for the eval to work.
Either (a) the function already lives on `window` (likely — checked in the
implementation step), or (b) add a one-line `window.inferInteractiveDemoFamily =
inferInteractiveDemoFamily;` near its declaration. Choice (b) is a permanent
no-op in production and makes the harness self-sufficient.

## Masking additions

Append to `MASK_CSS`:

```css
/* feedback-board author timestamps drift between runs */
.feedback-board-item time,
.feedback-board-card .timestamp { visibility: hidden !important; }
/* input caret blink in focused-composer view (10) */
* { caret-color: transparent !important; }
```

Preference and course-tracker contain no animated regions identified during
scout; revisit if first `--baseline` run shows noise.

## Threshold strategy

Keep global `FAIL_RATIO = 0.005` (0.5%). No per-view overrides in this PR. If
any new view exceeds 0.5% on the *first baseline-vs-baseline check*, treat it
as harness instability (not real diff) and either widen the relevant mask or
defer the view to a follow-up PR — do not introduce per-view threshold
machinery here.

## Rebaseline rollout

Two commits in the PR:

1. **Harness code commit** — `tools/visual-diff.js` additions, new mask rules,
   new helpers, new view entries, optional `window.inferInteractiveDemoFamily`
   export in `app/app.js` if not already exposed.
2. **Baseline refresh commit** — run `node tools/visual-diff.js --baseline`,
   commit all PNGs in `tools/visual-baseline/`. A full rebaseline (not just
   the 9 new files) is the safer choice: the new global `caret-color` mask
   could in principle nudge a pre-existing capture, and forcing the baseline
   to match the live mask set keeps cause-and-effect clean. Expect git diff
   to show 9 *new* PNGs and 0–9 *modified* PNGs; anything modified should be
   investigated before the baseline commit lands. Mirrors 589be97.

Then run `node tools/visual-diff.js --check` once more — expect all 18 views
to pass at 0.000%. Attach the resulting `tools/visual-diff-report.md` to the
PR description.

## Error handling

Each view's `setup()` is already wrapped in try/catch by the runner — errors
mark the view `error` and exit 1. No change needed. Add one new helper
`openSubtopicInFreshGuest(page, sub)` that bundles `enterGuestMode` +
`openSubtopic` for the Chapter 2+ pages.

## Failure modes the design accepts

- Chapter 2+ lesson rendering is slower (some sections need 10–15s for KaTeX
  + canvas). The existing 25s `openSubtopic` deadline covers it.
- Routing prediction risk for 3.8-1 / 4.11-1 — mitigated by family-logging
  step above.
- The remaining 11 family keys without dedicated views — recorded as deferred,
  not in scope.
- Total harness runtime grows from ~90s to ~3 min — acceptable, this is an
  offline regression tool, not CI.

## Out of scope (deferred to `docs/phase3_deferred.md` after PR lands)

- Per-view threshold overrides.
- Cross-viewport (mobile / narrow) coverage.
- Authenticated-user (Clerk) views — guest mode covers all surfaces touched
  by `#20`.
- Views for the remaining 11 family-table keys (`signal_transform`,
  `energy_power`, `sampling_quantization`, `system_property`,
  `exponential_envelope`, `matrix_locator`, `parameter_response`,
  `pointwise_multiplication`, `frequency_response_lab`, `transform_rule_lab`,
  `sequence_system_lab`). Add as needed when a future PR touches dispatcher
  logic.
- Hover/focus on Home-Ask composer chrome beyond the focus + mode-menu-open
  captures.

## What this PR unblocks

| Roadmap step | Now unblocked |
|---|---|
| B — PR #20a Pass 2 (lesson + lecture override-chain collapse, ~1,200 LOC) | yes |
| C — PR #20b Pass 2 (preference + MN + course-tracker + feedback-board, ~900 LOC) | yes |
| D — PR #20c Pass 2 (Home Ask + answer-workspace + login + intro, ~3,500 LOC) | partial — covers Home Ask; login/intro still uncovered (intentional per scope) |
| F — PR #21 Pass 2 (shared interactive-demos helpers, ~600 LOC) | yes (now visual-diff confirms `drawArrow`/`sizeCanvas` reconciliation across families) |
