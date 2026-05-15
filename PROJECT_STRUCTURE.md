# Project Structure

This file describes the organized project layout after the first cleanup pass on 2026-05-15.

## Runtime App

```text
app/
├── index.html
├── app.js
├── style.css
├── ws-bridge.js
├── process-python.js
├── matplotlib_gen.py
├── config.js
├── scripts/
├── src/
├── section-page-map.json
├── section-page-map-new.json
├── section-page-map-display-new.json
├── section-page-anchor-new.json
└── section-figure-map-new.json
```

`app/` is the running application. Some assets and map files still live at the UI root because the existing frontend and bridge load them from root-relative paths.

## Runtime Materials

```text
materials/
├── new-book-pages/
├── new-book-ocr/
├── new-book-figures/
├── lesson-cache/
├── build_new_section_map.py
├── generate_chapter_ocr_local.py
└── extract_new_book_figs.py
```

`materials/` contains the material files the app reads directly or expects beside the material scripts. The scripts currently rely on their location, so they remain in this directory.

## Tools

```text
tools/
└── tools/tutor_craft.py
```

`tools/` contains optional maintenance scripts. These are not the app entry point.

## Working Materials And Memory

```text
workspace/
├── memory/
├── materials/
├── app/
├── root-scripts/
└── tmp/
```

This directory is the broader workbench: project memory, mirrored materials, QA output, old workspace context, and extraction experiments. It is useful for research and recovery, but the running app primarily uses root `app/` and root `materials/`.

## Local-Only Files

```text
.local/
├── archive/2026-05-15-cleanup/
└── visual-audit-20260514/
```

`.local/` is intentionally ignored by Git. It keeps local historical files, visual audit sheets, generated images, local user data, logs, and one-off repair scripts available without making collaborators pull them.

## First Cleanup Pass

Moved into the local archive:

- `app/debug/`
- `app/generated/`
- `app/users/`
- `app/tmp-track-samples/`
- `app/backup-codex-20260505-034837/`
- `app/*.log`
- old one-off scripts such as `fix-html.py`, `fix-intro.py`, `insert_modal.py`, `pregenerate_test.js`, `test_process_python.js`, and `verify_section_visuals.py`
- root legacy notes and the old root `style.css` moved to `docs/legacy/`
- local visual audit sheets moved to `.local/visual-audit-20260514/`

Kept in place:

- running UI files
- Node bridge files
- material folders
- Chapter 2 recrops and metadata
- UI section maps
- scripts that are still location-dependent

## Before Broad Edits

1. Read `workspace/memory/MEMORY.md`.
2. Read the newest files in `workspace/memory/`.
3. Run `npm run check`.
4. Avoid deleting Chapter 2 figure crops or metadata unless Harrison explicitly asks.
