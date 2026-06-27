# Fourier Tutor Agent — Refactor Plan

Owner: FlyM1ss
Started: 2026-06-19
Last refreshed: 2026-06-27 — Phase 3.6 partially merged to main (#105/#106/#118); Workstream B (app.js split) COMPLETE (#116). Canonical current status: `docs/REFACTOR_DONE.md`. (The 2026-06-25 "Phase 3.6 execution status" callout in Forward outlook is a frozen branch-era snapshot — see its reconciliation note.)
Status:

- **Phase 0** merged (#15).
- **Phase 1** complete (#17, #20–29).
- **Phase 2** — **ALL 8 items merged.** #18 (interactive demos subsystem)
  shipped 2026-06-22 in PR #60 + #61 (Step G.1 + G.2; −1,042 lines from
  app.js across two new files: dispatcher.js 584L + chapter-one.js 473L).
  **#19 (Glass + chapter-overview CSS) shipped 2026-06-22 in PRs #63-#68**
  (Step G.3 sub-PRs G.3.1 lesson-page -146 / G.3.2 feedback-board -121 /
  G.3.3 preference/mistake/page-num -46 / G.3.5 Key Takeaways -47 /
  G.3.4a Home-Ask DEBUG+INTERACTION -131 / G.3.4b Home-Ask SIZE RESTORE -29
  = **-518 lines cumulative**). Plan target was 16,402 lines (1.17%
  realized); structural ceiling matches Steps B/C/D pattern (~14% of
  candidate lines actually deletable due to specificity-graded defenses,
  state-variant rules deferred, banner-rewrite-required clusters).
- **Phase 3 Pass 1** complete on 2026-06-21..22 — 6 PRs merged:
  - #38 (PR #21) hydrateInteractiveDemos split into 19 family modules.
  - 589be97 visual-diff baseline refresh + 3 lesson-chrome views.
  - #39 (PR #22) runtime inject*Styles → static `runtime-collapsed.css`.
  - #40 / #41 / #42 (PR #20a/b/c Pass 1) orphan-selector strips.
  - #43 (PR #23) dispatcher arms → `INTERACTIVE_DEMO_FAMILY_RENDERERS`
    lookup table.
- **Phase 3.5** (visual-diff harness expansion v1) shipped 2026-06-22
  in PR #44 (f28055b after review fixes). Harness grew from 9 → 18
  views across 3 page topologies (A/B/C), covering 2 of 13 dispatcher
  family keys (`convolution_lab`, `pole_zero_roc_lab`), Home Ask
  `:focus-within` + mode-menu `.show`, preference + course-tracker +
  feedback-board resting states, and `chapter-overview-active` /
  `chapter-overview-split-active` lesson chrome class flips. Roadmap
  steps B–F are **partially** unblocked — see the matrix below.
- **Phase 3.5 v2** (Glass-coverage expansion) shipped 2026-06-22 in
  PR #62 (89a6e4c). Harness grew from 18 → 25 views with a new Page D
  bootstrap (`enterLoginView`). 7 new views close every Glass banner
  cluster that gated Step G.3: login (L43321+), collapsed sidebar
  (L43241+), Key Takeaways (L39295+), Quick Check (L39494+), textbook-
  focus (L42981+), answer workspace (L41934+), quick-setup modal
  (L40258+). #19 (Glass + chapter-overview CSS) is now unblocked.
- **Phase 3.5 v3** (state-variant + populated-data coverage, 2 of 3
  shipped 2026-06-23):
  - PR #69 (d0bd19a) — view 14b-feedback-board-populated. Seeds a
    2-thread + 6-reply fixture covering tone-0..5, is-left + is-right
    lanes, `.feedback-reply-context` (both lanes), `.feedback-reply.is-target`
    + `.feedback-thread-body.is-target`. Adds safety-contract helpers
    (content-comparison restore, signal-cleanup, TZ pinning via
    `chromium.newContext({timezoneId, locale})`) hardened against
    review findings #1/#9/#10/#11/#12/#16/#20. Harness 25 → 26.
  - PR #70 (9c2329b) — view 03b-mistake-notebook-open-case. Seeds
    `localStorage[aquariusMistakeNotebook.v1]` fixture; covers
    `.mistake-workspace` + `.mistake-note-columns` (PR #65 deletions).
    The third PR #65 delete (`.mistake-ai-instruction`) was verified
    ORPHAN (no DOM match). Diagnostic instrumentation found view 04's
    `#mistakeNotebookCloseBtn` click is hidden via `display:none
    !important` doubled-ID rule at style.css L34394 — silently fails
    since harness creation, view 04 captures mistake-notebook (not
    welcomeScreen). View 03b scheduled at END of Page A to avoid
    populated-state leak into view 04. Harness 26 → 27.
  - REMAINING: §9c gap 2 (narrow-viewport `@media (max-width: ...)`
    coverage at L36230 / L38335 / L36240). Documentation-only close
    or separate harness sweep — see deferred-doc §9c gap 2.
- **Phase 3 §3a.i** (feedback-tones cascade collapse) shipped 2026-06-23
  in PR #71 (bc03542) — **−95 lines** from `app/style.css`. Per-property
  cascade walk via dispatched workflow (109 agents, 1080 declarations
  tagged); 23 delete blocks survived adversarial verification. Initial
  delete list (-103 lines) was partially reverted after medium-effort
  code-review (9 angles → 1-vote verify → sweep) caught a (1,4,0)→(1,3,0)
  cascade fall-through on `.feedback-reply.is-{left,right}[class*="tone-"]
  .feedback-reply-context` — the cascade-analysis workflow had treated
  L34742-L34748 as a duplicate of L34825-L34829 at the rule-body level
  but missed that the deleted rule carried TWO (1,4,0) selectors that
  the duplicate did NOT carry. Border-color flipped from
  `rgba(var(--author-rgb),0.22)` (tone-tinted) to `rgba(52,211,153,0.34)`
  (lane green) / `rgba(244,114,182,0.32)` (lane pink). Fix in commit
  8d8bce6 restores the 3-selector rule with a DO-NOT-DELETE comment.
  **The visual-diff harness did NOT catch the regression** — see
  `docs/visual-diff-harness-gap.md` for the property-specific
  blindspot and the direct-probe workaround required for future
  #feedbackView cascade work.
- **Phase 3 Pass 2** is the active frontier — see §"Roadmap from
  here". Deferred punch-list lives in `docs/phase3_deferred.md`.

Cumulative deltas through 2026-06-24 (post §3c.i pass 8 D3 ceiling):

| File | Original | Now | Δ |
|---|---|---|---|
| `app/app.js` | 20,250 | **8,339** | **−58.8%** (−11,911) |
| `app/style.css` | 47,865 | **42,991** | **−10.2%** (−4,874) |
| `app/ws-bridge.js` | 6,868 | **5,348** | **−22.1%** (−1,520) |
| `app/index.html` | 3,147 | **1,655** | **−47.4%** (−1,492) |

21 focused modules extracted under `app/`: `markdown-engine`, `llm-client`,
`lesson-cache`, `ragflow-client`, `search-helpers`, `static-routes`,
`user-memory`, `login-cosmos`, `mistake-notebook`, `attachments`,
`clerk-auth`, `preference-profile`, `recent-conversations`, plus
`app/data/*` (course-metadata / preferences / quiz-questions / syllabus-data)
and `app/css/*` (inline-styles / runtime-collapsed / ui-friction-v123). The
interactive-demos engine adds 19 family modules + `dispatcher.js` +
`chapter-one.js` + `helpers.js` under `app/interactive-demos/`.

This is the single source of truth for the multi-phase refactor of the
Fourier Tutor Agent repo. It is the canonical document — `workspace/memory/`
holds the source map and session logs, but the plan you act on lives here.
The forward-looking sequence is the "Roadmap from here" section near the
bottom; phase tables above it record what has already shipped.

## Rules

These rules from FlyM1ss govern every phase. They are stricter than usual
refactor heuristics; do not relax them without an explicit instruction.

0. **Lean aggressive.** When in doubt between conservative-and-safe and
   aggressive-and-correct, pick aggressive — but verify with grep first.
1. **Unused code is dead code; delete directly.** If a function, file, or
   selector is not referenced by the running app or any committed test,
   delete it. Recover from git history if a future task needs it.
2. **Running, active code is the sole source of truth.** Documentation that
   disagrees with code gets updated to match the code, not the other way
   around. Exception: rule #4.
3. **User data belongs in a database.** Filesystem JSON in `app/users/` is
   tolerated only until the DB design conversation. Deferred until after
   Phase 3.
4. **Keep legacy documentation.** `docs/legacy/` is read-only — never edit
   or delete files there even when their content is wrong.
5. **Keep existing plans.** Plans live as long as they describe intent. Mark
   them done; do not delete them.

## Hard Invariants

Every commit in this refactor must preserve these. They are not negotiable.

- **No Windows-illegal filenames.** Never write paths containing
  `:` `|` `?` `*` `<` `>` `"`. Repo is used from Windows + WSL.
- **`aquarius_visual_latex_v2`** is the lesson-cache key suffix. Renaming
  invalidates every cached lesson.
- **`AQUARIUS_CONFIG`** is the deployed frontend config global. Renaming
  invalidates every deployed frontend.
- **Sonnet 4.6 is Agent B.** The Renderer model choice is a cost/quality
  decision; do not silently upgrade to Opus.
- **`ws-bridge.js` uses Node built-ins only.** No Express, no extra HTTP
  framework, no body-parser.
- **Materials resolution.** Bridge prefers `workspace/materials/` over root
  `materials/`. Both trees must stay in sync per `docs/sync-policy.md`.
- **Root-relative JSON maps.** `section-page-map-new.json`,
  `section-page-map-display-new.json`, `section-page-anchor-new.json`,
  `section-figure-map-new.json` are loaded by root-relative paths.
  Do not move them into subfolders.
- **Chapter 2 figure recrops** (`materials/new-book-figures/page-*-figure_2_*.png`
  + their meta JSONs, mirrored in `workspace/`) must not be deleted or replaced
  unless explicitly asked.
- **Teaching design rules** in `workspace/memory/MEMORY.md` (exam-oriented
  brevity, progress visibility, every concept gets an example, visual-first
  hierarchy) apply to all lesson-generation prompt changes.

## Phase 0 — Doc-vs-code conflicts + aggressive purge + 2nd-Ed retire

**Status: in PR (`cleanup/aggressive-purge-2026-06-19`, 6 commits).**

Goal: clear noise so structural work has clean ground. No module
extractions yet; only deletions, bug fixes, and the 2nd Edition retire.

Landed:

- `e3e47d2` — sync-policy.md, WINDOWS_RAG_HANDOFF.md, PROJECT_STRUCTURE.md
  brought into sync with code (workspace-preferred materials,
  RAGFLOW_* env vars, retrieveFromRagFlow function name).
- `96c6880` — duplicate `/generated/` route in ws-bridge.js deleted.
- `1d31351` — duplicate Clerk `addListener` in initClerk fixed.
- `96740c3` — aggressive cleanup + 2nd Edition retire:
  - 8 orphan ws-bridge.js helpers (~336 lines)
  - 19 orphan app.js functions (~224 lines)
  - 50 unreferenced `.homework-*` CSS selectors (~1,740 lines)
  - 10 misc dead CSS selector families (~630 lines)
  - `pptxgenjs` + `ws` npm deps (no callers)
  - `app/users/guest_qh2romk1.json` (0-byte residue)
  - 2nd Edition data + routes + book switcher
    (`syllabusDataOld`, `SECTION_PREVIEWS`, `setBook`, `OCR_DIR_OLD`,
    `BOOK_INDEX_OLD`, `SECTION_PAGE_MAP`, `/old-pages` route)
  - Cross-boundary near-duplicates documented as
    `KNOWN DIVERGENCE` (sortSourcesByType differs intentionally)
- `6ec6eab` — canonical codebase structural map persisted to
  `workspace/memory/codebase-map-2026-06-19.md`.
- `63b1a8f` — release bump v1.2.4 → v1.2.5 with cache-buster query params.

Net: 379 files changed, 964 insertions, 12,995 deletions (~-12 k LOC).
`npm run check` green throughout.

## Phase 1 — Tier 1 extractions (low risk, immediate wins)

**Status: not started. Run after Phase 0 merges.**

Goal: extract self-contained modules with clean boundaries and low blast
radius. Ordered by dependency — extract #1 first because four Phase 2
candidates depend on `markdownToHtml`.

| # | Extraction | Location | Lines | Notes |
|---|---|---|---|---|
| 1 | Markdown engine (`markdownToHtml`, `inlineFormat`, `parseMdTable`, `decodeHtmlEntities`) | `app/app.js` L15310–15600 | 290 | **Merged in #17.** Leverage move — unlocks Phase 2 #12-14, #17. |
| 2 | Static-data islands (`DEFAULT_PREFERENCE_PROFILE`, `SECTION_PREVIEWS_NEW`, `syllabusDataNew`, `QUIZ_QUESTIONS`, course tables) | `app/app.js` (scattered) | ~1,250 | **In PR.** Plan's original ~4,500 estimate counted surrounding render functions; islands themselves are ~1,250 lines of pure read-only data. Extracted as classic-script JS data modules under `app/data/` instead of JSON because consumers run on the initial-render path; async JSON loading would force gating across ~30 read sites and push the PR out of Tier 1. Hard invariant "root-relative" interpretation: data files live at `app/data/`, served at `/data/*`. |
| 3 | UI Friction Fix Pack v1.2.3 CSS | `app/style.css` L45288–45494 (was L47659–47865 before Phase 0/1 deletions) | 207 | **Merged in #21.** Extracted to `app/css/ui-friction-v123.css`, loaded after `style.css` to preserve cascade order. `test-ui-friction-v123.js` re-verified the pager rule + Quick-Check `kc-option-btn` override resolve from the new file. |
| 4 | RAGFlow client | `app/ws-bridge.js` L112-129 (env consts) + L3120-3279 (functions) | 178 | **In PR.** Extracted to `app/ragflow-client.js` as a factory module — bridge injects `compactWhitespace` / `normalizeUrl` / `httpRequestJson` to avoid a premature shared-utils module. **Pattern precedent for #5+**: when an extracted module needs ws-bridge utilities, prefer dep-injection via a factory over re-defining the utility or pulling it from a not-yet-extracted utils module. Plan's original L3054–3215 estimate was off by ~70 lines due to Phase 0 deletions; functions actually sat at L3120-3279 with the env constants at L112-129. |
| 5 | User memory + feedback + sessions IO | `app/ws-bridge.js` L1387-1800 | 414 | **In PR.** Extracted to `app/user-memory.js` as a factory module (same pattern as #4). Co-extracted the per-uid sessions interface added in PR #18, since `persistSessionTurn` and `readSessionFile` are part of the same on-disk JSON layout under `USERS_DIR`. Scope grew from the plan's 314 lines because the sessions interface (~150 lines) and the `USERS_DIR`/`FEEDBACK_BOARD_PATH`/`SESSIONS_DIR` constants weren't part of the original count. Pre-positions Phase 4 DB swap. |
| 6 | LLM client wrappers (`callOpenRouterChat`, `callOpenAIChat`, JSON repair) | `app/ws-bridge.js` L109-118 (URLs + key getters) + L1744-1937 (4 functions) | 204 | **In PR.** Extracted to `app/llm-client.js` as a factory module. `tryParseJsonLoose` and the private `repairJsonLatexEscapes` helper move together because the LaTeX-escape repair is only meaningful for model JSON output. ws-bridge llm-client require is placed BEFORE the user-memory require so the latter's destructure of `callOpenRouterChat` sees a defined `const` binding (function-decl hoisting no longer covers it). |
| 7 | Lesson cache reader/writer + filename hygiene | `app/ws-bridge.js` L1093-1098 (constants) + L1152-1375 (8 functions, interleaved) | ~165 | **In PR.** Extracted to `app/lesson-cache.js` as a factory module. **Owns the `aquarius_visual_latex_v2` LESSON_CACHE_VERSION string** — the Hard Invariant. Lesson-format helpers (`prepareLessonForCache`, `collectLessonFormatIssues`, `assertLessonFormatClean`) stay in ws-bridge.js and are injected as deps, because they're also called outside the cache path (live generation, pregen). `FORMULA_CATALOG_DIR` and `BLUEPRINT_DIR` constants stay in ws-bridge.js — different concern. |
| 8 | Static-file route handlers | `app/ws-bridge.js` L1234-1268 (helpers) + L5538-5615 (routes) | ~110 | **In PR.** Extracted to `app/static-routes.js`. Module exposes a single `handleStaticRoute(req, res, pathname) → bool` consolidator; the bridge's request handler now calls it once near the end of the chain instead of inlining 5 if-blocks. `serveStaticFile` / `serveStaticFromDir` stay private to the module (no external callers after the consolidation). Plan's original 278-line estimate counted surrounding handler context that hadn't yet been factored out of the request handler. |
| 9 | Search helpers (DuckDuckGo + Wikipedia + Wikimedia) | `app/ws-bridge.js` L1811-2029 (4 search wrappers + 3 helpers) | ~140 | **In PR.** Extracted to `app/search-helpers.js`. 4 public wrappers: `duckDuckGoSearch`, `wikipediaSearch`, `wikimediaCommonsImageSearch`, `wikipediaPageImageSearch`. `extractDuckDuckGoResults`, `normalizeWikiImageCandidate`, `WIKIMEDIA_HEADERS` stay private. `scoreReferenceImageCandidate` and `filterReferenceCandidatesForQuery` stay in ws-bridge.js — they carry tutor-domain knowledge (matrix/identity heuristics, particle-physics blocklist), not pure search-wrapper logic. |
| 10 | Login cosmos Three.js scene (narrowed scope) | `app/app.js` L451-590 (`createLoginCosmos`) | 140 | **In PR.** Extracted to `app/login-cosmos.js` as a classic-script IIFE that publishes `window.createLoginCosmos`. The existing call site in `openLoginView()` (`if (!loginScene && window.THREE) loginScene = createLoginCosmos();`) is unchanged. The original plan's broader "Login intro + landing + auth overlay" scope is tightly coupled to Clerk auth and DOM lifecycle — defer to Phase 2 #16 (Clerk auth + return-intent). Cache-busters bumped on app.js + new login-cosmos.js to `?v=1334`. |
| 11 | Inline `<style>` block in `index.html` | `app/index.html` L74–1601 | 1,526 | **In PR.** Extracted to `app/css/inline-styles.css`, loaded by a single `<link>` at the same document position the inline `<style>` block occupied (after `style.css` and `css/ui-friction-v123.css`) so cascade order is byte-for-byte preserved. index.html drops from 3153 to 1627 lines (-48%); per CLAUDE.md, the global JSON map filenames at `app/` root remain untouched. |

Plus 4 small items (section-preview helpers ~76 lines, splash/loading UI
~41 lines, web-sources rendering ~143 lines, build orchestration in
`package.json` scripts).

**Per-extraction checklist:** (1) write the module, (2) replace inline
copies with imports, (3) `npm run check`, (4) manual smoke test of the
affected feature, (5) commit. One PR per extraction unless two are
trivially small.

## Phase 2 — Tier 2 extractions (few-PRs, medium risk)

**Status: 6 of 8 merged; #18 and #19 unblocked but deferred.**

Big payoff per item but each owns state, persistence, or runtime DOM.
One-PR-per-item; 2-3 review rounds per.

| # | Extraction | Location | Lines | Status |
|---|---|---|---|---|
| 12 | Mistake Notebook subsystem | `app/app.js` L1779–2270 + index.html view | 491 | **Merged #30.** |
| 13 | ~~Homework subsystem~~ — DOM already removed in Phase 0; JS subsystem + `/api/homework` + `/homework-assets/*` + 441 lines of CSS were dead code. Net diff −1,096. | — | — | **Deleted in #36** (owner ratified aggressive delete). |
| 14 | Preference profile subsystem | `app/app.js` L1007–1152, L2271–2399 | 274 | **Merged #31.** |
| 15 | Attachments pipeline (parse + preview + DOCX) | `app/app.js` L3216–3760 | 545 | **Merged #32.** |
| 16 | Clerk auth + return-intent state machine | `app/app.js` L147–855 | 700 | **Merged #33.** |
| 17 | Recent-conversations storage | `app/app.js` L18653–19200 | 547 | **Merged #34.** |
| 18 | Interactive demos subsystem (split per family) | `app/app.js` (post-#21 supporting infra only) | 1,042 | **Shipped 2026-06-22 in PR #60 (G.1, dispatcher + spec helpers + lab-shell + Laplace) + PR #61 (G.2, chapter-one renderer).** Original estimate ~1,500 was conservative — actual app.js delta was 1,042 lines. The remaining "supporting infrastructure" (demo registration, state stores, control wiring) turned out to live entirely inside the family modules' own closures + the dispatcher; no separate registration layer to extract. |
| 19 | Glass + chapter-overview CSS blocks | `app/style.css` L31257–47658 | 16,402 | **Deferred.** Needs harness coverage beyond current 9 views; schedule after #20 Pass 2 proves the override-collapse technique. |

## Phase 3 — Tier 3 (Pass 1 complete, Pass 2 = active frontier)

**Status: Pass 1 complete (PR #38, #39, #40, #41, #42, #43).
Pass 2 outstanding (~5,400 CSS lines + helpers consolidation).**

Largest cleanups. Detailed PR-by-PR plan lives in
`docs/PHASE3_PLAN.md`; this section tracks status and points forward.

| # | Extraction | Location (current) | Pass 1 result | Pass 2 outstanding |
|---|---|---|---|---|
| 20 | Home Ask EOF cluster consolidation | `app/style.css` L33181–44680 | −165 lines (orphan strips across #20a/b/c) | Override-chain collapse, ~5,400 lines target. Per-property timeline mandatory. Needs harness expansion first. |
| 21 | `hydrateInteractiveDemos` dispatcher split | `app/app.js` (was L3652–4891) | 19 family modules under `app/interactive-demos/`; app.js −2,894; dispatcher lookup table (#43) −43 more | Shared helpers module `app/interactive-demos/helpers.js` (~600 lines net delete; reconciles `drawArrow` / `sizeCanvas` signature drift). |
| 22 | `inject*Styles` runtime CSS collapse | (deleted) | 6 sites → `app/css/runtime-collapsed.css`; app.js −2,111 | None (self-review came back clean). |

### Phase 3.5 — Visual-diff harness expansion (gating prereq for #20 Pass 2)

**Status: Shipped in PR #44 (f28055b after review fixes), 2026-06-22.**

Harness grew from 9 → 18 views across 3 page topologies (Page A / B / C
with lazy bootstrap). Coverage delivered:

- **2 of 13 dispatcher family keys** — `convolution_lab` (view 17 via
  Chapter 3 §3.8-1; candidate fallback list [3.8-1, 3.8-2, 3.8-3,
  3.11-4]) and `pole_zero_roc_lab` (view 18 via Chapter 4 §4.11-1).
  Family routing is hard-asserted by walking every KP page and checking
  for hydrated `.kc-interactive-demo` with a `<canvas>`/`<svg>` child;
  brief-fallback hydration does not count.
- **2 of top-4 #20c selectors in override-active state** — view 10 fires
  `:focus-within` on `#searchBox.home-ask-composer`; view 11 forces
  `#homeModeMenu.home-mode-menu.show` via classList + aria-expanded.
- **#20b resting-state surfaces** — views 12/13/14 cover preference,
  course-tracker, and feedback-board.
- **#20a lesson-chrome class flips** — views 15/16 toggle
  `learnBody.chapter-overview-active` and `chapter-overview-split-active`
  to exercise the 30+ `:not(.chapter-overview-active)` negations.
- **Shared test utilities** — `tools/test-utils.js` now owns
  `enterGuestMode`, `openSubtopic`, `MASK_CSS`, `settleLesson`,
  `resetHomeChromeState`, `resetLessonChromeState`,
  `resolveLessonCachePath`, `assertOrThrow`, `waitForHealth`. Both
  `visual-diff.js` and `smoke.js` consume from it.
- **MASK_CSS** moved to BrowserContext-level via `addInitScript` so all
  pages inherit the mask before first paint.

What's still NOT covered (recorded in `docs/phase3_deferred.md` §"Phase
3.5 follow-ups"): 11 remaining family-table keys, state-variant
(`:hover`/`:active`/`:focus`) coverage on the #20b/#20c top selectors,
`#webSearchToggleBtnMain.home-ask-web-toggle` overrides, login/intro
surfaces. The "Roadmap from here" matrix below records the partial
unblock status per dependent PR.

Original §Phase 3.5 motivation (preserved for audit): the 9-view
baseline used to exercise only one lesson (Background §1 "Signal
Energy"), short-circuiting at `isChapterOneDemo` before the #21 family
lookup. None of the 13 lookup-table keys were regression-covered until
PR #44 added views 17–18. The spec doc that drove the PR is
`docs/superpowers/specs/2026-06-22-harness-expansion-design.md`.

## Phase 4 — Deferred

Out of scope until after Phase 3 + the harness-unblocked items.

- **Database for user data** (rule #3). Currently filesystem JSON in
  `app/users/`. Render free-tier ephemeral filesystem already breaks the
  multi-user case. Schedule the design conversation after the harness +
  Pass 2 + #18 + #19 land.

## Roadmap from here

The "main refactor" finishes when items A–G below land. Deferred
follow-ups (`docs/phase3_deferred.md`) are then addressed in order, then
Phase 4 (DB) opens.

| Step | Work item | Source of truth | Gating prereq |
|---|---|---|---|
| **A** | **Visual-diff harness expansion** (Phase 3.5 above) | this plan §"Phase 3.5" | **Shipped in PR #44 (f28055b), 2026-06-22.** |
| **B** | **PR #20a Pass 2** — lesson + lecture override-chain collapse. **Partially shipped 2026-06-22 across PRs #46/#47/#48/#49/#50/#51 (~169 lines).** S5 feedback-tones + B25 remaining cluster-G findings deferred — `docs/phase3_deferred.md` §3a.i / §3a.ii. Original ~1,200-line target rescoped — see §3a structural-ceiling note. | `docs/PHASE3_PLAN.md` §6 + `docs/phase3_deferred.md` §3a | A **partially unblocked**: views 06/07/15/16 cover layout + `chapter-overview-active` / `split-active` class flips; pager `:active`/`:focus-visible` state variants still uncovered. #20a top selectors are layout-mostly and `:hover` is covered by view 07, so cascade-collapse risk is reduced but not eliminated. |
| **C** | **PR #20b Pass 2** — preference + MN + course-tracker + feedback-board collapse. **Partially shipped 2026-06-22 across PRs #52/#53/#54/#55 (−123 lines).** State-variant collapses + feedback tripled-duplications + course-tracker .overview/.grid bundle + MN doubled-ID patterns deferred — see `docs/phase3_deferred.md` §3b.i–§3b.iv. Original ~900-line target rescoped — structural-ceiling note in §3b. | `docs/PHASE3_PLAN.md` §6 + `docs/phase3_deferred.md` §3b | A **partially unblocked**: views 03/12/13/14 cover resting state only — `:hover`/`:disabled`/`:focus` variants on `.feedback-board-card` (27×), `.preference-profile-preview` (18×), `.preference-preview-card` (14×), `.preference-primary-btn` (10×) intentionally untouched. |
| **D** | **PR #20c Pass 2** — Home Ask + answer-workspace + login + intro collapse. **Partially shipped 2026-06-22 across PRs #56/#57/#58 (−147 lines).** S3 (login + intro) verified at 0 deletable lines — plan §6.1 inverted-preference assumption wrong against current file state, see `docs/phase3_deferred.md` §3c.ii. S4 RUNTIME-INJECTED banners also verified 0 — see row E below. Remaining home-Ask state-variant candidates (~145 lines, safe-on-cascade but harness can't pixel-verify) deferred — see `docs/phase3_deferred.md` §3c.i. Original ~3,500-line target rescoped — structural-ceiling note in §3c. | `docs/PHASE3_PLAN.md` §6 + `docs/phase3_deferred.md` §3c | A **partially unblocked**: views 10/11 cover composer `:focus-within` + mode-menu `.show` cascade. State variants on `#webSearchToggleBtnMain.home-ask-web-toggle` (21× — single most-duplicated #20c selector) NOT covered. login/intro NOT covered. |
| **E** | **PR #20c RUNTIME-INJECTED CSS OVERRIDE banner deletion** (L33490 + L42594). **Shipped 2026-06-22 inside Step D evaluation: VERIFIED LOAD-BEARING — neither banner deleted.** Plan §3d entry-point check confirmed style.css banners win on doubled-/tripled-ID specificity vs `runtime-collapsed.css` rules that set DIFFERENT values on the same properties. See `docs/phase3_deferred.md` §3d for the per-banner per-property analysis. | `docs/phase3_deferred.md` §3d | D evaluated; banners stay. |
| **F** | **PR #21 Pass 2** — shared `app/interactive-demos/helpers.js`. **Shipped 2026-06-22 in PR #59 (82d4ade).** Extracted `applyCanvasDpr`, `drawCanvasArrow`, `coalesceFrames` across complex-plane / sinusoid-phasor / phasor + the chapter-one demo rerender in app.js. Net repo delta **−18 lines**, well below the deferred-doc §1a "~600 lines" aspirational estimate — see `docs/phase3_deferred.md` §1a for the plan-inventory correction. | `docs/phase3_deferred.md` §1a + `PHASE3_PLAN.md` §4.4 | F shipped. |
| **G** | **Phase 2 #18 + #19** — interactive demos subsystem + Glass/chapter-overview CSS. **#18 shipped 2026-06-22 across PRs #60 (G.1) and #61 (G.2) — net app.js delta −1,042 lines.** G.1 extracted the dispatcher + spec helpers + lab-shell + Laplace flow renderer (584 lines to `app/interactive-demos/dispatcher.js`). G.2 extracted `hydrateChapterOneDemo` (473 lines to `app/interactive-demos/chapter-one.js`) and consolidated its local helpers against helpers.js + dispatcher.js. **G.3 (#19 Glass + chapter-overview CSS, 16,402 lines) NOW UNBLOCKED** — Phase 3.5 v2 harness expansion (PR #62, 89a6e4c) added 7 Glass-coverage views (login / collapsed sidebar / Key Takeaways / Quick Check / textbook focus / answer workspace / quick-setup modal) bringing the harness to 25 views. The Glass surface gap that gated this step is closed; Step G.3 can ship without banner-by-banner hand-walking. | this plan Phase 2 table | #18 done; #19 unblocked — ready for extraction. |

**Then** address the deferred punch-list (`docs/phase3_deferred.md`):

- §1c — PR #21 carry-forward bugs in `sinusoid-phasor.js` and `phasor.js`
  (Sev-2/3, batch one PR per family module).
- §4 — Plan-inventory corrections (false-orphan flags for
  `.preference-signal-card`, `.mistake-note-image-empty`, etc.) — folded
  into the relevant #20b/c Pass 2 PR if not already.

**Then** open Phase 4 (DB migration).

## Sequence Rules

These dependencies are baked into the order above; do not reorder without
re-checking them.

- **Phase 1 #1** (markdown engine) was a prereq for Phase 2 #12-14 and
  #17. Honored.
- **Phase 1 #2** (static data) was a prereq for Phase 1 #11 and syllabus
  helpers. Honored.
- **Phase 2 #18** (interactive demos) depends on Phase 3 #21 (Pass 1)
  landing first. Honored — #18 scope shrank to ~1,500 lines after #21.
- **Phase 3 Pass 2 #20a/b/c** all gate on Phase 3.5 harness expansion
  (A above). The current 9-view harness does not exercise the
  override-sensitive surfaces #20 touches.
- **Phase 2 #19** (glass + overview CSS) must respect cascade order —
  each split file keeps its `<link>` slot in the same position.
- Every extraction preserves the **Hard Invariants** section above.

## Forward outlook — should we split the remaining monoliths?

Recorded 2026-06-24 in response to the question "when can we split the
couple monoliths into smaller files, or should we?".

### Phase 3.6 execution status (2026-06-25) — key findings first

> **🔄 RECONCILED 2026-06-27:** the text below is a frozen 2026-06-25 branch-era
> snapshot (it describes #105 as "open on branch" and CT/preference/§3d as future).
> Since then **#106** (`6593c19`) stripped `!important` on FOUR isolated views
> (CT/pref/settings/MN, −598) and **#118** (`2d7a757`) did a partial feedback+sidebar
> strip — both merged to `origin/main`; Workstream B is COMPLETE (#116). Authoritative
> current status: **`docs/REFACTOR_DONE.md`** + `docs/PHASE3.6_SPEC.md` top STATUS
> block. Read the snapshot below for the technique/findings, not the status.

Step 3 below ("the big CSS structural attack") is **PR #105 on branch
`refactor/phase3.6-css-collapse`** (open for review). Cumulative, every commit
gated by css-probe (byte-identical computed styles) + visual-diff (35/35) +
(for the redeclaration collapse) a parser-level winner-preservation differential:

- `app/style.css` **42,991 → 33,521 (−9,470)**; `runtime-collapsed.css`
  **2,102 → 1,616 (−486)** = **−9,956 lines**.
- `!important` (style.css) **15,140 → 10,554 (−4,586, −30.3%)**; doubled-IDs
  **608 → 408 (−32.9%)**.

**2026-06-25 pass 2 — the redeclaration-pileup lever was executed + self-reviewed.**
The hardened parser (`tools/find-dead-redeclarations.js`) corrected the earlier
"0 top-level" finding (a never-pop `@`-context artifact): the dead pileup is
**~98% top-level**, not media-gated. Swept the top-level slice + the empty
`sel { }` husks it left behind. An xhigh self-review of PR #105 then caught the
detector **over-deleting 48 decls** in a nesting context (style.css has an
accidentally-unclosed `.learn-followup-bar {` that nesting-aware browsers scope
the following typography overrides under); fixed by grouping on the full nesting
chain and re-running the collapse. Verified render-neutral: winner-preservation
16,610/16,610 (style) + 887/887 (rcc), 0 winning values changed; css-probe 9
states byte-identical; visual-diff 35/35 pass. The media-gated slice (78 style +
6 rcc) stays D2 (harness blindspot). See `docs/phase3_deferred.md` §14.

**What worked:** the dominant lever was deleting **renamed-away dead rules/
orphans** — the residue of the "FINAL/EOF/LOCK" redesign passes (e.g. the
`.lecture-overlay-btn-*` family, renamed to `.turner-content`; the
`.learn-explain-toggle-btn` pileup). Doubled-ID de-doubling is ~0 net lines by
design; the bytes come from dead-rule deletion. **This vein is now exhausted**
for the lecture/learn-chrome surfaces.

**The biggest lever — EXECUTED 2026-06-25 (top-level slice).** The
redeclaration-pileup pattern (same selector + same property + same context, only
the last wins). A media-*unaware* throwaway detector had over-reported 4,422 dead
(**3,726 were responsive/theme overrides that would have broken if deleted** —
proof the lever is a trap without context-aware verification) AND mislabeled the
real dead decls as media-gated (a never-pop `@`-context bug). The hardened parser
corrected this: **~98% of dead decls are top-level**, swept this session
(style.css −2,844 `!important` / −3,631 dead + 509 empty husks; rcc −68 + 12 husks;
all verified render-neutral, after a self-review fix for a nesting over-deletion).
The 78 (+6 rcc) media-gated decls remain D2 (harness blindspot). Full record:
`docs/phase3_deferred.md` §14.

**Remaining buckets — all cascade-changing / risk-gated (need a FlyM1ss decision):**
(1) the **media-gated redeclaration slice** (78 decls) — D2, needs css-probe
narrow-probe expansion to the home-ask/feedback/login/MN/chapter-overview families
+ a `@container` panel-width driver + a ≤560 state (marginal ~78-line reward);
(2) **`!important`-stripping on DOM-isolated views** (`#courseTrackerView` 74.9%
NOCOMP, `#preferenceView` 69.8%) — line-neutral but *cascade-changing*, needs an
explicit risk decision; (3) **§3d composer chain** — hardest, cross-file lockstep;
(4) **doubled-ID `#X#X` de-specificity** (~413 remain) — a specificity rewrite, not
dead-code deletion, so cascade-changing. Strategy detail in
`docs/PHASE3.6_SPEC.md`.

### Where we are

The JS monolith story is largely solved: `app/app.js` is down 58.8% (20,250
→ 8,339) and `app/ws-bridge.js` is down 22.1%. The remaining headline
problem is CSS — `app/style.css` is down only 10.2% and still carries
~15,594 `!important` declarations, ~104 named `FINAL` / `EOF` / `_LOCK`
override blocks, and ~452 `#learnView#learnView` doubled-ID specificity
hacks (the structural debt numbers from `reference-codebase-map`; verify
with a fresh `grep -c` before quoting in a PR).

The realized/planned ratio across the four big Phase 3 CSS steps has been
consistent: Step B 14%, Step C 14%, Step D 4.2%, Step G.3 3.2% — mean ~9%
of plan-target lines actually deletable per session. The §3c.i pass 8
zero-candidate finding (commit c45b205, "D3 ceiling") confirms the
home-Ask shadowed-banner vein is mined out under the current verification
discipline.

### Recommendation: split `app.js` further; do NOT split `style.css` yet

**`app.js` at 8,339 lines — keep extracting.** Natural seams that remain:

- Lesson-rendering pipeline (around `parseLessonKnowledgePoints` /
  `runLearnPageTurn`).
- Syllabus / pagination subsystem.
- Feedback-board UI controller (`setFeedbackReplyTarget` etc.).
- Quick-Check / Key-Takeaways KP rendering (separate KP pages, see
  Phase 3.5 v2 finding #1).

Each subsystem is internally cohesive, has well-defined entry points
already, and would not touch the CSS cascade. Sequence them one PR each
with the existing 35-view visual-diff harness as the regression net.

**`style.css` at 42,991 lines — don't split.** The cascade is the value.
Splitting a single cascade-ordered file into per-feature files would
either (a) require `@import` (preserves order but hides it across files),
or (b) re-bundle in a build step (we have none, and adding one for
ordering alone is overkill). Either way the one debugging affordance the
current setup offers — "search for the selector, read down the file, the
last rule wins" — gets lost. Step G.3 finding #5 (Home-Ask redesign
chain is 10 banners deep at the same specificity) was only tractable
because all 10 banners live physically adjacent in one file. Split first
and you're chasing specificity through 10 files instead of one.

### The right sequence from here

1. ~~**Finish the cheap §3c.i / §3b tail.**~~ **DONE** — confirmed at the
   D3 zero-candidate ceiling (commit c45b205, pass 8); the home-Ask
   shadowed-banner vein is mined out under current verification discipline.
2. ~~**Expand the visual-diff harness for state variants.**~~ **DONE** — shipped
   the computed-style `tools/css-probe.js` harness (PR #101, desktop states
   S2/S3/S12) + the 35-view pixel harness, **then added the narrow-viewport tier**
   (states N1@1160/N2@890/N3@740/N4@700, sentinel-gated literal probes,
   negative-control-proven). The viewport-gated half of the 620-`!important` pileup
   sweep is now verifiable; the remaining gap is non-viewport (chapter-overview /
   lecture-overlay / `@container` — recorded in §14).
3. **The big CSS structural attack — SAFE PORTION DONE, PR #105 open.** On branch
   `refactor/phase3.6-css-collapse` (see the execution-status callout above for
   live numbers). Designed as `docs/PHASE3.6_SPEC.md`. The free-deletion vein is
   now exhausted: renamed-away dead rules/orphans (earlier passes) + the top-level
   redeclaration pileup + empty husks (this session) = **−9,956 lines, −4,586
   `!important` (−30.3%)**, every commit verified render-neutral (and self-reviewed
   — a nesting over-deletion was caught and fixed before merge). **What remains is
   all cascade-changing and needs a FlyM1ss risk decision** (media-gated slice D2,
   `!important`-stripping on isolated views, §3d composer, doubled-ID
   de-specificity) — see the "Remaining buckets" list above. No more free deletion.
4. **JS module splits can run in parallel** with any of the above —
   they don't touch CSS.

### Realistic finish line

- `app/app.js`: reachable target is **~5 K lines** with 2–3 more
  extraction PRs (≈1 dev day each).
- `app/style.css` under ~38 K: requires the `!important` / doubled-ID
  structural attack, which is a multi-session project (~4–6 dev days,
  with the state-variant harness expansion as a prerequisite).
- `app/ws-bridge.js` at 5,348 lines: no extraction pressure remaining.
  Next change here is Phase 4 (DB swap), not refactor.
- `app/index.html` at 1,655 lines: already extracted as far as the
  inline-style block allowed. No further structural target.

The "main refactor" finish line (Steps A–G in the Roadmap matrix) is
already crossed except for the harness-blocked state-variant tail. The
Phase 3.6 `!important`-collapse work and the JS extractions above are
the natural follow-ons; both are scoped enough to plan as separate spec
docs rather than expansions of `phase3_plan.md`.

## References

- `docs/PHASE3_PLAN.md` — detailed PR-by-PR plan for Phase 3 (Pass 1 +
  Pass 2). Line numbers post-Phase-2; Pass 1 dispatcher ranges are now
  stale but the override-collapse strategy in §6 is the live spec.
- `docs/PHASE3_PREP.md` — `inject*Styles` inventory + dispatcher map
  used for Pass 1 planning. Historical reference.
- `docs/phase3_deferred.md` — live deferred punch-list. The companion
  document to this plan.
- `workspace/memory/codebase-map-2026-06-19.md` — full source map with
  per-candidate effort/risk/payoff scores and `mustNotBreak` checklists.
  Also refreshed at `workspace/memory/codebase-map-2026-06-20.md`.
- `workspace/memory/2026-06-19.md` — Phase 0 session log.
- `docs/sync-policy.md` — workspace ↔ root materials sync rules.
- `docs/WINDOWS_RAG_HANDOFF.md` — RAGFlow sidecar handoff.
- `PROJECT_STRUCTURE.md` — runtime layout snapshot.
- `knowledge/gated-timebox-protocol.md` (central DB) — Sev-1/2/3 triage.
