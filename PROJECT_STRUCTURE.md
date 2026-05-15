# Project Structure

This file describes the organized project layout after the first cleanup pass on 2026-05-15.

## Runtime App

```text
tutor-openclaw-ui/
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

`tutor-openclaw-ui/` is the running application. Some assets and map files still live at the UI root because the existing frontend and bridge load them from root-relative paths.

## Runtime Materials

```text
tutor-materials/
├── new-book-pages/
├── new-book-ocr/
├── new-book-figures/
├── lesson-cache/
├── build_new_section_map.py
├── generate_chapter_ocr_local.py
└── extract_new_book_figs.py
```

`tutor-materials/` contains the material files the app reads directly or expects beside the material scripts. The scripts currently rely on their location, so they remain in this directory.

## Working Materials And Memory

```text
workspace_tutor_related_full/
├── project-memory/
├── tutor-materials/
├── tutor-openclaw-ui/
├── workspace-root-related/
└── tmp/
```

This directory is the broader workbench: project memory, mirrored materials, QA output, old workspace context, and extraction experiments. It is useful for research and recovery, but the running app primarily uses root `tutor-openclaw-ui/` and root `tutor-materials/`.

## Local Cleanup Archive

```text
archive/2026-05-15-cleanup/
├── debug-output/
├── generated-cache/
├── logs/
├── old-fix-scripts/
├── tmp-samples/
├── ui-backups/
└── users-local/
```

This archive is intentionally ignored by Git. It keeps local historical files available without making collaborators pull debug logs, generated images, local user data, or one-off repair scripts.

## First Cleanup Pass

Moved into the local archive:

- `tutor-openclaw-ui/debug/`
- `tutor-openclaw-ui/generated/`
- `tutor-openclaw-ui/users/`
- `tutor-openclaw-ui/tmp-track-samples/`
- `tutor-openclaw-ui/backup-codex-20260505-034837/`
- `tutor-openclaw-ui/*.log`
- old one-off scripts such as `fix-html.py`, `fix-intro.py`, `insert_modal.py`, `pregenerate_test.js`, `test_process_python.js`, and `verify_section_visuals.py`

Kept in place:

- running UI files
- Node bridge files
- material folders
- Chapter 2 recrops and metadata
- UI section maps
- scripts that are still location-dependent

## Before Broad Edits

1. Read `workspace_tutor_related_full/project-memory/MEMORY.md`.
2. Read the newest files in `workspace_tutor_related_full/project-memory/`.
3. Run `npm run check`.
4. Avoid deleting Chapter 2 figure crops or metadata unless Harrison explicitly asks.
