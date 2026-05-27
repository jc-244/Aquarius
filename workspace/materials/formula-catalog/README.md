# Formula Catalog

Verified formula catalogs provide exact LaTeX for lesson generation when OCR math is lossy.

Each file is named `<section-id>.formulas.json`, for example `1.1-1.formulas.json`.
Only entries with `"status": "verified"` are injected into Agent A and Agent B.

Verification means the formula was manually checked against the textbook page image in
`workspace/materials/new-book-pages`.
