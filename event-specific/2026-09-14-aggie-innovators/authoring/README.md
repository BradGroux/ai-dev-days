# Build and verify

The deck uses the previous Personal AI Agents palette/assets with a 1600×900 logical
canvas that scales to the display. HTML is the visual source of truth.

```sh
python3 authoring/build-deck.py
python3 authoring/build-console.py
```

The checked-in resource QR encodes the existing AI Dev Days repository root. Keep
the attendee gift QR separate and private until its redemption path is verified.

Serve the repository root on port 4178, then run `authoring/verify-browser.cjs` with
Playwright available through `NODE_PATH`. It captures 31 screenshots at 1920×1080,
checks slide overflow and script errors, and verifies the app's reservation cancellation,
persistence, handoff, and mobile layout. `AGGIE_BASE_URL` and `AGGIE_RENDER_DIR`
override the source and render location.

Use a Python environment with reportlab and pypdf:

```sh
python3 authoring/export-pdf.py /tmp/aggie-render --slides-approved
```

This assembles screenshots with HTTPS annotations. Do not use browser print-to-PDF.
Review a contact sheet and rendered PDF pages before release. Local demo links work
in HTML; only HTTPS links are annotated in the portable PDF.

## Required approval gate

Do not generate or regenerate a PDF until Brad explicitly signs off on the current
HTML slides. Brad approved the current slides on September 4, 2026; slides.pdf now
contains that approved 31-slide dark-theme export. Future content changes require
new signoff before replacing the PDF. Export hashes are in pdf-release.json.

## Theme support

Light and dark modes are required. The sun/moon control switches themes without
changing slides. The deck defaults to the system preference and remembers an
explicit selection. Verify every slide in both modes before requesting signoff.

## Canonical slide source

Edit `slides.json` for all titles, examples, bodies, and speaker notes.
`build-deck.py` supplies styling and navigation, then generates slides.html and
speaker-notes.md. Former audience_slides.py and launchpad_slides.py revision layers
are retired; the build does not import them.
