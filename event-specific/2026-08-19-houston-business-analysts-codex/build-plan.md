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

Status: first pass complete

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

Exit gate: met. `node demo/verify-demo.mjs` validates the complete local fixture
set, the checked-in workspace is the prepared output, and the attendee workbook
explains the artifact stack without requiring code.

## Phase 3: presentation packet

Status: first HTML deck and curriculum pass complete; PDF intentionally deferred

Deliverables:

- [x] `slides.html`
- [x] `speaker-notes-65-minute.md`
- [x] `curriculum-map.md`
- [x] organizer logos and QR assets
- [x] aligned `facilitator-runbook.md`
- [x] aligned `fallback-plan.md`
- [x] aligned `attendee-links.md`
- [ ] `slides.pdf` after slide approval

Deck outline:

1. title
2. host recognition
3. HOUBAs community and QR codes
4. opening poll
5. Seneca framing quote
6. the context problem
7. the business analyst as context architect
8. Markdown as the shared work surface
9. evidence and definition artifacts
10. guidance and execution artifacts
11. reuse and proof artifacts
12. vendor-onboarding demo setup
13. raw-notes audience challenge
14. current-state result
15. data contract
16. workspace guidance versus memory
17. SOP, PRD, and skill
18. pass, clarify, and stop scenarios
19. live Codex case
20. audience scenario canvas
21. five moves for Monday
22. resources and call to action
23. scenario clinic and Q&A
24. HOUBAs feedback

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
- exact wording, authentic logos, and decoded QR destinations must be preserved
- the community slide follows the host recognition near the opening
- the HOUBAs feedback slide is the final audience-facing slide
- use [organizer-slide-requirements.md](organizer-slide-requirements.md) as the content contract

Build rules:

- keep the deck dark, professional, high-contrast, and projection-safe
- prefer diagrams, filenames, and short before/after excerpts over paragraphs
- use Roboto when practical
- make the HTML deck the editable source and generate the PDF after final
  content approval
- keep presenter detail in speaker notes, not on slides
- verify all slides locally in the browser
- inspect the PDF only after it is intentionally generated

Exit gate for first pass: met. The HTML deck, notes, controls, organizer
inserts, local assets, and fallback path work locally. PDF parity remains open
until slide approval.

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
- no `slides.pdf` is added before slide approval

Deck-specific QR, route, theme, keyboard, rendering, and speaker-note checks are
part of Phase 3. PDF parity remains deferred.
