# Interactive harness extension plan (execute-ready)

Companion to `docs/B4_LESSON_RENDER_PLAN.md`. Grounded in a 13-agent
read-only research workflow (`whsyxjdfz`, 2026-06-26) that surveyed the
2026 UI-testing tool landscape and inventoried our current harness.

> **Status: PR-1 + PR-2 ready to ship in one AFK loop.** Both PRs are
> harness-only (no `app/` changes). They unblock B4 by adding a
> deterministic interactive-flow gate to `tools/visual-diff.js` without
> touching the 35-view set.

## Verdict: extend our own harness; do **not** adopt a framework

| Option | Why rejected |
|---|---|
| `@playwright/test` runner | Would install a 2nd Chromium under `node_modules/@playwright/test`; the 35-view baseline is AA-pinned to the current install. Plus split reports (`visual-diff-report.md` vs `playwright-report/`) and split bridge-spawn lifecycles. |
| Stagehand / browser-use / Skyvern | LLM-driven testing is ~89% reliable per 2026 comparisons. A regression harness with a 0.061% AA noise floor (workspace memory) cannot tolerate stochastic execution. Per-action LLM cost ($200–500/mo at modest volume) defeats the $0 budget. |
| Argos / Percy / Chromatic | All useful for *PR review UX* but redundant with our local `tools/visual-diff/*.png` artifacts. Optional follow-up after the local model works. |
| Status quo + 1 script per surface | Each script re-spawns the bridge, re-forks `enterGuestMode`, drifts from `test-utils.js` helpers. The reason `test-utils.js` was centralized in the first place (its L3–7 comment). |
| **Extend `tools/visual-diff.js`** | **Adopted.** Reuses pinned Chromium, MASK_CSS, `settleLesson`, per-view `STRICT_FAIL_RATIO`, bridge spawn, and report writer. |

`npx playwright codegen http://127.0.0.1:9125` is the recommended drafter
for flow scripts — emit deterministic Playwright code, hand-port into a
`FlowStep` array. Free, deterministic, no LLM in the loop.

## The `FlowStep` contract

A flow view adds an optional `flow: { steps: FlowStep[] }` to the existing
view shape. Existing 35 views keep their `{name, page, setup, failRatio?}`
verbatim.

```js
{
    name: 'click KP next',
    action: async (page) => { await page.click('#learnKpNextBtn:not([disabled])'); },
    assert: async (page) => (await page.evaluate(
        () => document.getElementById('learnBody')?.dataset.lessonPage)) === '2',
    settle: 'lesson' | 'rAF' | null,   // 'lesson' calls settleLesson; default 'rAF'
    timeoutMs: 5000,                    // default 5000; cap for assert poll
    retryClickUntilLog: /\[openLearnMode\]/, // optional: animation-swallow workaround
}
```

Determinism rules baked into `runFlow`:
- Each step: `action()` → `settle` → poll `assert()` up to `timeoutMs` →
  record `{i, name, ms, ok}`.
- `assert()` returning falsy or throwing → `runFlow` stops, returns
  `{passed:false, failedAt:i, error, stepLog}`.
- On failure, save `tools/visual-diff/<view>__step-<i>.png` for AFK debug
  (separate from the final-state baseline).
- No `page.waitForTimeout` inside steps — every wait is a `waitForFunction`
  or an `assert()` poll. The 720ms KP animation lock is handled by
  `retryClickUntilLog` (proven pattern from `test-lesson-open-no-hang.js`
  L100–107 and `test-utils.js` `openSubtopic` L142–156).

## Integration points (current line numbers, 2026-06-26)

### `tools/test-utils.js` (413 lines today)

- New exports (after `assertOrThrow` @ L275): `runFlow`, `waitForBoot`,
  `clickUntilLog`.
- Add existing `dismissIntro` (@ L87, currently un-exported) to the
  exports block @ L394.
- `waitForBoot` lifts the boot-ready pattern from `test-ui-friction-v123.js`
  L47–55 (the `__ftutorMarkCompleted` + every-chapter-has-hook gate).
- `clickUntilLog` lifts the 5-retry / 2-s-poll / `[openLearnMode]` listener
  pattern from `test-lesson-open-no-hang.js` L100–107 and the inline copy
  in `openSubtopic` L142–156.

### `tools/visual-diff.js` (1768 lines today)

- `captureView` @ L1589 — insert flow branch immediately after
  `await view.setup(page)` (L1592). On flow failure, `throw` so the
  existing catch (L1617) records `status: 'error'` + the per-step PNG
  artifact.
- Report writer @ L1727–1738 — add an optional `Steps` column populated
  only when `r.stepLog` is set; existing rows render unchanged.
- `sharedViews` @ L194 — no schema change to existing entries.

### `package.json`

- Pin `playwright` to `1.60.0` (drop the `^`). Installed version is
  already `1.60.0` per `package-lock.json`; this is purely a guard so
  `npm install` cannot drift Chromium and invalidate baselines.
- Add `node --check tools/test-utils.test.js` to the `check` script.

## PR-1 — `feat(harness): add FlowStep runner`

**Scope:** ~280 lines added across `tools/test-utils.js` +
`tools/visual-diff.js`; new `tools/test-utils.test.js`; `package.json`
pin + `check` entry. Zero changes to `app/` or `sharedViews`.

**Verification:**
1. `npm run check` clean.
2. `npm run test:visual:check` produces a `visual-diff-report.md` with
   the same 35 rows and same ratios as pre-PR `main` (no `Steps`
   column since no flow view exists yet). Run twice — if any row's
   ratio drifts >0.005 abs, abort and investigate Chromium pinning.
3. `node tools/test-utils.test.js` exits 0 against a trivial 2-step
   flow (open guest → assert `#navSyllabusBtn` present).
4. `tools/.harness-state/feedback-board.backup.json` not stranded after
   the smoke run.

## PR-2 — `feat(harness): seed B4 flow views`

**Scope:** 5 new view entries appended to `sharedViews` + 5 new PNG
baselines. `failRatio: 0.005` placeholder per owner choice; calibrate
per-view after first 3 baseline runs measure the noise floor + 50%
margin (matches the empirical method from `feedback-input outline
cascade` memory).

| View | Page | Steps | Why |
|---|---|---|---|
| `26-kp-pager-advance` | A | open subtopic → click next twice → assert `dataset.lessonPage === '3'` | B4 §11 page-turn block + KP-state mutation |
| `27-focus-mode-modal-open` | A | open subtopic → click focus-mode trigger → assert `#focusModeDialog:not(.hidden)` | B4 §3 `enhanceVisualMetadataUI` |
| `28-focus-mode-modal-decoration` | A | (27) + assert `[data-lecture-decorated="1"]` count > 0 | B4 §2 `decorateLectureContent` |
| `29-recent-conversations-restore` | A | open subtopic → save session → reload → click recent entry → assert lesson body restored | B4 §10 `setLearnLessonContent` + cross-module `renderLearnPages` caller |
| `30-chapter-overview-kp-writeback` | A | open chapter overview → assert `learnKnowledgePoints.length > 0` via `page.evaluate` | B4 must-stay state: confirms KP-state lets stay writable from non-engine code |

**Verification:**
1. All 5 flow views pass against the current `main` (pre-B4) — proves
   they bound the refactor.
2. Generate baselines via `npm run test:visual:baseline`.
3. Run `npm run test:visual:check` 3× consecutively against unchanged
   `main`; record per-view ratios; calibrate each `failRatio` to
   measured-noise × 1.5.
4. No Windows-illegal characters in any new filename (CLAUDE.md
   constraint).
5. `[openLearnMode]` log string still present in `app/app.js` — add
   a grep guard to `check-harness-exports.js` so a B4 rename surfaces
   immediately, not silently in red flow views.

## Red flags carried forward to execution

1. **Playwright pin (PR-1):** `^1.60.0 → 1.60.0` is the actual safety
   move. `npm install` between PR-1 and PR-2 could otherwise drift
   Chromium minor and invalidate the 35-view AA-noise-floor baselines
   recorded in `reference-visual-diff-baseline-noise`.
2. **Animation-swallow flake:** `[openLearnMode]` is the load-bearing
   console log for the retry pattern. If B4 renames it, every flow view
   fails silently. Grep guard in `check-harness-exports.js` is mandatory.
3. **Marginal-value if B4 is the only consumer:** the runner pays off
   only if more flow views land later (focus-mode states, KP edge cases,
   recent-conv variants, etc.). If only the 5 B4 views ever exist, the
   E-path (1 script per surface) would have been cheaper. Owner accepts
   on the bet that B4 surfaces more flow needs.
4. **No CI today, no LLM key tomorrow:** the runner is fully
   deterministic and needs no model access. Do not introduce an
   OPENROUTER_API_KEY secret for the harness even if we wire CI later —
   the temptation appears once `npx playwright codegen` output looks
   close to "AI testing".
5. **Calibration sample size:** `failRatio: 0.005` placeholder is loose.
   3 baseline runs is the minimum for noise calibration; ratios stabilize
   around N≥5 per `reference-visual-diff-baseline-noise`. Calibrate, then
   re-run once before merging PR-2.

## Out of scope (interesting, defer)

- **Argos Hobby tier** — $0 / 5k shots/mo. Would give PR-comment diff
  UI without changing local model. Defer to a separate PR-3 after PR-2
  proves stable.
- **Playwright MCP server** — would let Claude drive the live UI
  during AFK sessions without per-feature glue. Genuinely useful but
  it's a DX upgrade, not a regression-gate upgrade.
- **Playwright Trace Viewer** — can be gated on `TUTOR_VDIFF_TRACE=1`
  inside `captureView` and dump `trace.zip` into
  `tools/.harness-state/`. Add only if `__step-<i>.png` artifacts prove
  insufficient for AFK debug.
- **Vercel Sandbox** ([docs](https://vercel.com/docs/sandbox)) — useful
  the day AFK loops need to fire from an iPad. Not today.

## Source

Workflow `whsyxjdfz` (2026-06-26):
- 3 inventory agents (visual-diff.js / test-utils+css-probe / existing
  interactive tests + CLAUDE.md constraints).
- 5 external-research agents (Playwright Test 2026 / AI-driven testing /
  visual-regression tools / codegen+recorders / Vercel-native).
- 4 adversarial-skeptic agents (Stagehand / Playwright Test bolt-on /
  extend-visual-diff / framework-needed?).
- 1 synthesis agent.

Full report archived at the workflow transcript; key citations:
- `https://playwright.dev/docs/codegen`
- `https://playwright.dev/docs/test-fixtures`
- `https://www.nxcode.io/resources/news/stagehand-vs-browser-use-vs-playwright-ai-browser-automation-2026`
- `https://www.browserbase.com/blog/stagehand-caching`
- `https://argos-ci.com/pricing`
