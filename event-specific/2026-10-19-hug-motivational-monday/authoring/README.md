# Build and verify

`slides.json` is the canonical source for slide copy, HTML bodies, and speaker
notes. `build-deck.py` generates `../slides.html` and
`../speaker-notes-20-minute.md`.

```sh
python3 authoring/build-deck.py
```

Serve the repository root on port 4178, then run the browser check with
Playwright and Sharp available through `NODE_PATH`:

```sh
NODE_PATH=<bundled-node-modules> node authoring/verify-browser.cjs
```

The check captures all 13 slides at 1920x1080 in dark and light mode, checks
overflow and browser errors, exercises navigation and the theme control, and
creates contact sheets in `/tmp/hug-motivational-monday-render`.

## Approval gate

Do not create a PDF until Brad approves the current HTML slides. After
approval, export one 1920x1080 screenshot per slide and assemble those images
into a 16:9 PDF. Do not use browser print-to-PDF.

For the approved high-resolution export, set `HUG_RENDER_SCALE=2` and
`HUG_RENDER_DIR=/tmp/hug-pdf-4k` when running the browser check, then run:

```sh
python3 authoring/export-pdf.py --slides-approved /tmp/hug-pdf-4k
```

This produces `../slides.pdf` with 4K images and clickable HTTPS links.
Follow the [Presentation Production SOP](../../presentation-sop.md).
