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

Status: intentionally deferred at Brad's request

Planned deliverables:

- `slides.html`
- `slides.pdf`
- `speaker-notes-65-minute.md`
- final `facilitator-runbook.md`
- final `fallback-plan.md`
- final `attendee-links.md`

Deck outline:

1. title
2. host recognition
3. HOUBAs community and QR codes
4. the context problem
5. people, process, and data before AI
6. the business analyst as context architect
7. the AI-ready artifact stack
8. Markdown as the shared work surface
9. demo-one setup
10. demo-one result
11. demo-two operating packet
12. memory is recall, not policy
13. guardrails and verification
14. audience scenario canvas
15. five moves for Monday
16. resources
17. HOUBAs feedback

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
- make the HTML deck the editable source and regenerate the PDF after every material change
- keep presenter detail in speaker notes, not on slides
- verify all slides locally in the browser and inspect the PDF

Exit gate: the deck, PDF, notes, and fallback path work from a clean local checkout.

## Phase 4: rehearsal and organizer review

- run a 65-minute timed rehearsal with interruptions simulated
- run the demo once online and once from the offline fallback
- verify font sizes and contrast on a projector-sized viewport
- send Terrence the public event packet link for title and content feedback
- integrate the three organizer inserts
- confirm venue, display connection, parking, Wi-Fi, whiteboard, and final timing
- freeze the demo inputs 72 hours before the event

Exit gate: Brad can deliver the complete session from the checked-in packet with Wi-Fi disabled.

## First-pass verification

Run from the repository root:

```bash
node event-specific/houston-business-analysts-codex-2026-08-19/demo/verify-demo.mjs
./scripts/publication-scan.sh
node scripts/audit-repo.mjs
node scripts/check-external-links.mjs
```

Also verify:

- every attendee link is public or explicitly marked pending
- no transcript, private message, local path, secret, or real business record appears
- the demo has a prepared output and a short verbal fallback
- no slide, PDF, or speaker-note deck artifact is added in this first pass

Deck-specific QR, rendering, PDF parity, and speaker-note checks move to Phase 3.
