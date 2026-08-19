# Material Build Plan

## Outcome

Produce a public, reusable event packet that lets Brad deliver the session live and lets attendees recreate the method afterward without copying a private workflow or installing OpenClaw.

## Phase 1: planning packet

Status: complete

- [x] extract and review the planning call
- [x] confirm audience, format, timing, and organizer requirements
- [x] create the event README and PRD
- [x] define the 65-minute core and 25-minute extension
- [x] create facilitator, fallback, requirements, and day-before skeletons
- [x] list organizer inputs and title options
- [x] confirm the public title: "From Requirements to Reliable AI: The Business Analyst as Context Architect"
- [x] receive and inspect the organizer's host, community, and feedback source deck
- [x] decode and validate the three QR destinations
- [x] record the Improving slide-2 requirement and organizer timing signals

Exit gate: met. Brad approved the title, and the planning call supports the
thesis, vendor-onboarding scenario, and session spine.

## Phase 2: demo and attendee workbook

Build a fictional vendor-onboarding workspace with a visible before-and-after trail.

Status: executable demo complete

Source files:

- `demo/source/stakeholder-notes.md`
- `demo/source/sample-vendors.json`
- `demo/source/policy-excerpts.md`

Working artifacts:

- `demo/workspace/README.md`
- `demo/workspace/AGENTS.md`
- `demo/workspace/process-brief.md`
- `demo/workspace/data-contract.md`
- `demo/workspace/glossary.md`
- `demo/workspace/memory.md`
- `demo/workspace/vendor-onboarding-sop.md`
- `demo/workspace/vendor-onboarding-assistant-prd.md`
- `demo/workspace/.agents/skills/vendor-review/SKILL.md`
- `demo/workspace/acceptance-scenarios.md`
- `demo/workspace/verification-report.md`

Teaching artifacts:

- `demo-script.md`
- `prompt-pack.md`
- `demo/prompts/` run-ready prompt files
- `demo/framework-guidance.md` framework-to-demo application boundary
- `demo/prepare-live-workspace.mjs` clean discovery-stage builder
- `demo/run-demo.mjs` deterministic review and framework-map CLI
- `demo/lib/vendor-review.mjs` source-grounded review behavior
- `demo/test/vendor-review.test.mjs` focused regression coverage
- `attendee-workbook.md`
- checked-in `demo/workspace/` as the expected offline output
- `reference-links.md`
- `demo/verify-demo.mjs`

Build rules:

- use fictional names, vendors, systems, and records
- make ambiguity and exceptions intentional in the source notes
- keep the completed example small enough to explain on screen
- show the artifact diff, not terminal mechanics
- include one case that passes, one that requires clarification, and one that must stop or escalate
- verify the demo without live external systems

Exit gate: met. The presenter can generate a clean discovery workspace without
the completed answers, run Codex from stage-specific prompts, switch to a
completed fallback packet, and prove PASS / CLARIFY / STOP behavior with local
code and tests. `node demo/verify-demo.mjs` validates the integrated packet.

## Phase 3: presentation packet

Status: 27-slide HTML deck, curriculum, and high-resolution PDF complete

Deliverables:

- [x] `slides.html`
- [x] `speaker-notes-65-minute.md`
- [x] `curriculum-map.md`
- [x] organizer logos and QR assets
- [x] aligned `facilitator-runbook.md`
- [x] aligned `fallback-plan.md`
- [x] aligned `attendee-links.md`
- [x] `slides.pdf` regenerated from 27 dark-theme 1920x1080 screenshots

Deck outline:

1. title
2. host recognition
3. HOUBAs community and QR codes
4. Brad introduction
5. opening poll
6. Seneca framing quote
7. the context problem
8. the business analyst as context architect
9. FDE market signal using corrected indexed-posting data
10. BA and FDE capability bridge with the technical-ownership distinction
11. Markdown as the shared work surface
12. evidence and definition artifacts
13. guidance and execution artifacts, including SOP and PRD definitions
14. reuse and proof artifacts
15. vendor-onboarding demo setup
16. raw-notes audience challenge
17. current-state result
18. data contract
19. workspace guidance versus memory
20. SOP, PRD, and skill
21. pass, clarify, and stop scenarios
22. live Codex case with starter examples
23. audience scenario canvas with starter examples
24. five moves for Monday
25. resources and call to action
26. scenario clinic and Q&A
27. HOUBAs feedback and Start Small, Think Big community call to action

### Verified framing quote

> If one does not know to what port one is sailing, no wind is favorable.
>
> — Seneca

Use this to connect defined intent and measurable outcomes to the session's
context-architecture thesis: faster execution is not useful when the business
has not agreed on the destination. The underlying passage is Seneca,
*Moral Letters to Lucilius*, 71.3; the slide labels the wording as a common
English rendering and links to the source.

Organizer integration rules:

- source slide 1 is presenter-only and must be omitted
- Improving host recognition is final slide 2
- authentic logos and decoded QR destinations must be preserved
- the community slide follows the host recognition near the opening
- the combined HOUBAs feedback and Start Small, Think Big call to action is the final audience-facing slide
- use [organizer-slide-requirements.md](organizer-slide-requirements.md) as the content contract

Build rules:

- keep the deck dark, professional, high-contrast, and projection-safe
- prefer diagrams, filenames, and short before/after excerpts over paragraphs
- use Roboto when practical
- make the HTML deck the editable source and generate the PDF after final
  content approval
- capture one dark-theme 1920x1080 screenshot per `#slideN` and assemble the
  images in slide order; do not use browser print-to-PDF
- keep presenter detail concise on the dedicated introduction slide
- verify all slides locally in the browser
- inspect every source screenshot and the rendered PDF pages after generation

Exit gate: met. The HTML deck, notes, controls, organizer inserts, local assets,
fallback path, and 27-page high-resolution PDF work locally.

## Phase 4: rehearsal and organizer review

- run a 65-minute timed rehearsal with interruptions simulated
- run the demo once online and once from the offline fallback
- verify font sizes and contrast on a projector-sized viewport
- send Terrence the public event packet link for factual and logistical review:
  names, links, timings, venue details, and organizer inserts; the title and
  subject matter remain settled
- integrate the three organizer inserts
- confirm venue, display connection, parking, Wi-Fi, whiteboard, and final timing
- freeze the demo inputs 72 hours before the event

Exit gate: Brad can deliver the complete session from the checked-in packet with Wi-Fi disabled.

## First-pass verification

Run from the repository root:

```bash
node event-specific/2026-08-19-houston-business-analysts-codex/demo/run-demo.mjs review-all --json
node --test event-specific/2026-08-19-houston-business-analysts-codex/demo/test/vendor-review.test.mjs
node event-specific/2026-08-19-houston-business-analysts-codex/demo/verify-demo.mjs
./scripts/publication-scan.sh
node scripts/audit-repo.mjs
node scripts/check-external-links.mjs
```

Also verify:

- every attendee link is public or explicitly marked pending
- no transcript, private message, local path, secret, or real business record appears
- the demo has a prepared output and a short verbal fallback
- the HTML deck and speaker notes are present
- `slides.pdf` has 27 16:9 pages, each backed by one 1920x1080 slide image
- PDF annotations are HTTPS-only and match visible links in the HTML deck

Deck-specific QR, route, theme, keyboard, rendering, PDF, and speaker-note
checks are part of Phase 3.
