# Presentation Production SOP

Use this procedure when creating or revising an event deck. The
[Aggie Innovators authoring workflow](2026-09-14-aggie-innovators/authoring/README.md)
and [H.U.G. Motivational Monday workflow](2026-10-12-hug-motivational-monday/authoring/README.md)
are working references, not templates to copy without reviewing the audience.

## 1. Establish the content and source

- Confirm audience, duration, takeaway, demo needs, and approval authority.
- Inspect the actual prior deck HTML, assets, and social-link markup before
  reusing branding. Do not reconstruct Brad's social block from memory.
- Keep slide copy, bodies, and speaker notes in one canonical authoring source
  such as `authoring/slides.json`. Put styling and navigation in the builder.
  Regenerate outputs instead of maintaining stacked revision scripts.
- Keep the storyboard, notes, event metadata, and attendee entrypoint consistent.
  When adding slides, update counts, pacing, and navigation.
- Examples need a recognizable problem, a concrete action, a small test, and
  an observable outcome. A catchy heading cannot rescue an unclear use case.
  Label fictional examples and distinguish measured results from proposals.
- For paired demos, keep inputs, prompts, models, settings, and scoring constant
  across isolated conditions. Test meaningful exceptions and fresh-session
  handoffs before claiming the framework improved results.

## 2. Build with the existing visual identity

- Use a fixed 16:9 logical stage that scales to the display. Support both dark
  and light themes, visible focus, keyboard navigation, and a theme control
  that preserves the current slide.
- Use the existing logo and palette. Highlighted heading text uses the brand
  gradient left-to-right, starting pink, then blue, then teal. Leave enough
  line-box and background-clip space for descenders such as `g`.
- Keep the footer to the event name when the logo already identifies Digital
  Meld. Use Brad's approved role wording rather than old bios.
- Reuse the opening/closing Follow and Visit block. Platform icons and regular
  weight handles share consistent row heights and spacing with website links.
  Check all rows, including `sstb.ai`, and keep both slides' URLs identical.
- Add relevant icons or diagrams where they help explain the content. Use
  consistent icon size, stroke, and palette order across comparable slides.
  Vertically center icons with their text labels, not with separate numbers.
- Align table titles, authors, and takeaways on the same row. Widen labels or
  revise copy to avoid accidental wrapping before reducing type size.
- Center diagram labels in the available region, not blindly at the geometric
  center. Venn labels belong in the exclusive circle regions and use matching
  text baselines. Keep text inside the boundaries. Draw clean arrowheads with
  no shaft protruding beyond the tip. Use SVG or a high-resolution canvas to
  avoid jagged text and strokes.
- Use actual quote blocks with attribution. Sources open expanded by default
  and must not collide with the quote, footer, or main content. Give complete
  book titles and author names with Goodreads links. Link speakers' official
  sites and the specific source video. Avoid duplicate citations.

## 3. Prepare attendee gifts safely

- Reuse the proven gift-slide layout, but confirm this event's eligibility,
  membership duration, payment-card requirement, redemption deadline and time
  zone, and approved-email requirements. Never copy another event's code or
  dates without checking them.
- Create and read back an event-specific `go.sstb.ai` tracking shortlink before
  generating the gift QR. Check the redirect destination.
- Encode that shortlink, show it as a clickable fallback, and keep resource
  and gift QRs separate. Decode the generated image and the QR from a rendered
  PDF page. Keep adequate contrast and a quiet zone.
- Test redemption with the relevant eligible role before distributing the
  offer. An active redirect and scannable QR do not prove entitlement works.
  Record unresolved eligibility or redemption checks in the event setup notes.

## 4. Review HTML before requesting approval

- Serve the repository with a persistent local server. Wait for fonts and
  images before screenshots. Inspect the first candidate before extending its
  layout to the rest of the deck.
- Render every slide at 1920x1080 in both themes. Check stage bounds, clipping,
  wrapping, icon alignment, social rows, source visibility, diagram labels,
  browser errors, keyboard controls, links, and theme switching.
- Review contact sheets plus full-size slides with dense content or diagrams.
  A passing overflow check alone does not establish visual quality.
- Run relevant local demo checks, the repository audit, and publication scan.
  Keep unrelated dirty or untracked work out of the change.

## 5. Export only after approval

- Brad must explicitly approve the current HTML deck before creating or
  replacing the PDF. Content or layout changes after approval need new signoff.
- Export one dark-theme screenshot per slide. Do not use browser print-to-PDF.
  For high-quality delivery, use a 1920x1080 viewport at device scale 2 to
  capture 3840x2160 images. The H.U.G. checker supports `HUG_RENDER_SCALE=2`.
- Assemble the images into 16:9 PDF pages using the existing ReportLab exporter.
  Preserve visible HTTPS links as annotations using CSS viewport coordinates,
  not doubled screenshot pixel coordinates. Local demo URLs remain HTML-only.
- Read back page count, page geometry, link annotations, and image resolution.
  Render PDF pages and inspect them against the approved HTML, including the
  gift QR. Record output hashes when maintaining a release manifest.
- Update the event README with the approved PDF, verification, and remaining
  readiness limits. Deliver the actual file, not just a generation log.

## 6. Publish and verify

- Inspect applicable automation triggers before pushing, creating a PR, or
  merging. GitHub CI is prohibited. If publication would trigger it, stop and
  request explicit authority for the necessary repository-control change.
- Use authenticated `gh` as `BradGroux`, task-only commits, the noreply identity,
  local verification evidence, and destination readback after merge.
- Distinguish locally saved, merged, deployed, and attendee-ready states.
  Merge does not authorize deployment or prove a live demo or gift redemption.
