# Presenter and Room Requirements

Attendees do not need to install Codex or bring a laptop. This is a presenter-led, interactive session.

## Presenter hardware

- laptop and charger
- primary display adapter for the venue projector
- backup HDMI adapter
- presentation clicker
- phone or secondary device for link and QR verification
- optional portable hotspot

## Presenter software and files

- current Codex desktop app with the generated discovery workspace and the
  checked-in completed workspace open separately
- local browser with `slides.html#slide1` and the attendee page open
- `speaker-notes-65-minute.md` stored locally
- terminal and editor font sizes set for projection
- complete demo inputs and expected outputs stored locally under `demo/`
- facilitator runbook and fallback plan stored locally
- no unrelated private tabs, notifications, recent files, or accounts visible
- Node.js available to prepare the live workspace, run the deterministic
  reviewer and tests, and execute `node demo/verify-demo.mjs`

## Published presentation artifact

`slides.pdf` is the portable backup for the finalized HTML deck. It contains
one dark-theme 1920x1080 screenshot per slide, assembled in slide order with
safe HTTPS link annotations. Regenerate it from screenshots rather than using
browser print-to-PDF.

## Room requirements

- projector or large display
- confirmed display connection and aspect ratio
- whiteboard, markers, and eraser
- reliable presenter Wi-Fi where possible
- table or lectern with power
- room clock or visible timer

## Organizer-provided materials

- Improving host recognition content and logo: received
- Houston Business Analysts community content, logo, and QR destinations: received
- Houston Business Analysts feedback content, logo, and QR destination: received
- public event link and final logistics

## Safety

Do not put secrets, API keys, private data, sensitive personal notes, real business records, or anything confidential in a public repository, shared file, screenshot, or projected prompt. Use the checked-in fictional demo only.
