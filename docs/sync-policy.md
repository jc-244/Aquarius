# Materials Sync Policy

The project currently has two material trees:

- `materials/`
- `workspace/materials/`

Use root `materials/` as the runtime materials tree for the app. Use `workspace/materials/` as the workbench for extraction, OCR, scans, manual recrops, and recovery context.

## Current Rule

When a material change is meant to affect the app, keep both trees synchronized for the changed files:

- `new-book-figures/`
- `new-book-ocr/`
- relevant extraction scripts

When a change is only an experiment, QA artifact, or temporary extraction output, keep it under `workspace/` or local `.local/` instead of adding it to the runtime path.

## Chapter 2

The current Chapter 2 recrop work exists in both material trees. Treat these files as active project output:

- `materials/new-book-figures/page-*-figure_2_*.png`
- `workspace/materials/new-book-figures/page-*-figure_2_*.png`
- `materials/new-book-ocr/page-150.meta.json` through `page-223.meta.json`
- `workspace/materials/new-book-ocr/page-150.meta.json` through `page-223.meta.json`

The app figure map is:

- `app/section-figure-map-new.json`
- `workspace/app/section-figure-map-new.json`

## Future Cleanup

A later cleanup can remove the mirror or convert it into a documented source/output workflow. Do that only after confirming which scripts and app paths still read each tree.
