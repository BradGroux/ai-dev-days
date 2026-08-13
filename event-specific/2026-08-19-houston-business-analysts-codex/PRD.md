# PRD: From Requirements to Reliable AI

## Problem

Organizations often try to add AI before they understand the process, data,
decision rights, exceptions, or success criteria the AI is expected to support.
The result can look impressive in a demo while remaining inconsistent,
difficult to govern, and disconnected from business value.

Business analysis practitioners are well positioned to solve this problem, but many have not yet connected their existing techniques to agent workspaces, durable context, reusable skills, and verification loops.

Houston Business Analysts needs an interactive, business-outcome-focused session that makes that connection concrete without assuming the room is full of AI developers.

## Source context

The planning call established these constraints:

- the session is in person on August 19, 2026
- the workshop is expected to begin at 6:30 PM
- the audience is primarily intermediate information workers and business-technology liaisons, with some developers and system administrators
- the content should be process-forward, data-backed, and people-centered
- standard operating procedures and repeatability are central themes
- business outcomes, standardization, context, guardrails, and data quality matter more than model comparisons
- the group prefers questions, interruptions, and short scenario discussions throughout
- the room includes a projector and whiteboard
- the organizer provided a four-slide speaker template with three required audience-facing inserts
- the Improving host recognition must appear as slide 2
- the HOUBAs community slide links to the private LinkedIn group and public LinkedIn page
- the final HOUBAs feedback slide links to the provided public Google Form
- the confirmed title is "From Requirements to Reliable AI: The Business Analyst as Context Architect"

Public Houston Business Analysts materials reinforce the same audience fit. The
community serves aspiring, inquiring, and practicing business analysis
practitioners. Its recent content emphasizes current-state analysis,
requirements, data ownership, validation rules, process exceptions, and
practical workshops.

## Goal

Show business analysis practitioners how to turn business knowledge into a durable, reviewable Codex workspace that produces repeatable outcomes.

The session should make one point unmistakable:

> AI raises the value of good business analysis because every ambiguity, undocumented exception, and weak data definition becomes an execution risk.

## Learning outcomes

By the end of the core session, attendees should be able to:

1. explain why process quality and context quality matter more than chasing models
2. identify the minimum artifacts needed to make a workflow AI-ready
3. distinguish workspace guidance, memory, SOPs, PRDs, skills, and acceptance checks
4. turn a messy current-state description into a structured workflow packet
5. define data ownership, boundaries, exceptions, approvals, and evidence before automation
6. use Codex to draft, challenge, and verify artifacts without surrendering business judgment
7. name a small workflow they can prepare for AI assistance the following week

## Audience segments

| Segment | Likely question | Session answer |
|---|---|---|
| Business analyst | Where do my existing skills fit? | Elicitation, process analysis, requirements, exceptions, and traceability become the agent's operating context. |
| Data analyst | How do we prevent garbage-in, garbage-out? | Define source, format, owner, quality rules, allowed use, and verification before the workflow runs. |
| Information worker | Do I need to become a developer? | No. Start with Markdown, clear process boundaries, examples, and reviewable outputs. |
| Developer or system administrator | How does this become executable? | Put the approved artifacts in a workspace, connect only necessary tools, and verify against acceptance scenarios. |
| Manager or change leader | Where is the business value? | Standardization, shorter handoffs, visible decisions, repeatable reviews, and safer change control. |

## Messaging hierarchy

### 30-second hook

Your organization does not have an AI problem first. It has a context problem. If the process, data, exceptions, and decision rights are unclear to people, an agent will not make them clearer by magic.

### Two-minute overview

Business analysts turn ambiguity into shared understanding. Codex can help turn
that understanding into working artifacts, but it needs durable context.
Markdown makes the context inspectable. Workspace guidance defines the standing
rules. Memory helps recall useful prior context but is not policy. SOPs define
repeatable execution. PRDs define the problem, outcomes, scope, and acceptance
criteria. Skills package reusable workflows. Verification proves whether the
result actually meets the business need.

### Core thesis

The business analyst is the context architect: the person who helps people and agents agree on what is true, what is allowed, what happens next, and what evidence means the work is done.

## The artifact stack

| Artifact | Question it answers | Business analysis analogue | Authority level |
|---|---|---|---|
| Source notes and process brief | What do we know, and where did it come from? | Elicitation notes, current-state analysis | Evidence to review |
| Data contract | What data exists, who owns it, and what rules apply? | Data requirements and glossary | Approved definition |
| `AGENTS.md` | What standing rules must Codex follow in this workspace? | Team working agreement and governance rules | Durable workspace guidance |
| Memory | What useful prior context may help this task? | Institutional recall and lessons learned | Helpful recall, not policy |
| SOP | How is the process performed consistently? | Standard operating procedure | Approved procedure |
| PRD | Why are we doing this, for whom, and what counts as success? | Business and solution requirements | Product or change contract |
| Skill | How do we package a reusable procedure with references, scripts, or templates? | Reusable method, playbook, or center-of-excellence asset | Versioned workflow package |
| Acceptance checks | What evidence proves the result is correct and safe? | Acceptance criteria, traceability, UAT, controls | Verification gate |

## Content pillars

### 1. People: accountability does not disappear

- name the process owner, decision owner, data owner, reviewer, and escalation path
- identify who is affected by the change
- preserve human approval where judgment or external action matters
- use AI to make decisions and assumptions visible, not to hide ownership

### 2. Process: current state before future state

- document what actually happens, including workarounds and shadow steps
- separate the happy path from exceptions
- define triggers, inputs, outputs, stop conditions, and handoffs
- use an SOP only after the real process is understood

### 3. Data: meaning before movement

- define source, format, owner, freshness, validation, sensitivity, and permitted use
- use a shared glossary or schema
- keep unsupported claims and missing fields visible
- never project or publish real sensitive business data in a demo

### 4. Context: durable artifacts beat repeated prompting

- use Markdown because it is inspectable, portable, diffable, and easy for humans and agents to read
- keep required team rules in checked-in guidance and documentation
- treat memory as recall, not as the only source of truth
- package stable procedures as skills when reuse justifies it

### 5. Proof: verification is part of the workflow

- define examples and edge cases before the demo
- require source-grounded outputs
- compare results with acceptance criteria
- make review, approval, rollback, and change control explicit

## Demonstration concept

Use a fictional cross-industry **vendor onboarding** process so the room can reason about it without exposing private company details.

### Demo one: messy notes to an AI-ready process definition

Codex receives a short, intentionally incomplete set of stakeholder notes. It must:

1. identify actors, triggers, inputs, outputs, systems, and data
2. separate facts from assumptions
3. expose missing owners, rules, and exception paths
4. draft an as-is process map in Markdown
5. generate focused elicitation questions instead of inventing answers

### Demo two: process definition to a reusable operating packet

After Brad or the audience supplies the missing decisions, Codex creates:

- an approved process brief
- a data contract and glossary
- `AGENTS.md` workspace guidance
- an SOP
- a lightweight PRD for an internal assistant
- a small skill package for the repeatable review procedure
- acceptance scenarios and a verification checklist

The final live step runs one fictional vendor case through the packet and checks whether the result follows the rules.

## Interactive design

The core session includes three forms of participation:

1. opening show-of-hands questions about failed or inconsistent AI use
2. audience review of the demo's missing information, assumptions, and edge cases
3. a whiteboard exercise that maps one audience-supplied workflow across people, process, data, guardrails, and proof

The final 25 minutes can expand into a scenario clinic, Q&A, or additional thought exercises based on the room.

## Non-goals

- Do not run a Codex installation clinic.
- Do not teach software development as a prerequisite.
- Do not compare model benchmarks or recommend a model-of-the-week.
- Do not present AI as a replacement for business analysis, data governance, process ownership, or human approval.
- Do not connect live business systems or use private organizational data.
- Do not send messages, create records, approve vendors, or take external actions during the demo.
- Do not turn the session into an OpenClaw product presentation.

## Planned deliverables

### Planning packet

- README and working title
- this PRD
- timed session plan
- material build plan
- organizer input list
- organizer slide requirements and decoded QR destinations
- facilitator, fallback, requirements, attendee, and day-before files

### Demonstration and attendee workbook (first pass complete)

- fictional vendor-onboarding source notes
- process brief template
- data contract and glossary template
- `AGENTS.md` example
- memory example and authority warning
- SOP template and completed example
- PRD template and completed example
- repo-scoped skill example
- acceptance scenarios and verification checklist
- expected output and offline fallback in the checked-in `demo/workspace/`
- attendee workbook, prompt pack, demo script, and official reference links
- deterministic demo-fixture verification script

### Presentation and curriculum packet (first pass complete)

- dark-by-default, local-first `slides.html` with a light-mode option
- direct `#slideN` routes, keyboard controls, progress, full-screen mode, and
  visible navigation
- `speaker-notes-65-minute.md` for the 65-minute core and 25-minute extension
- `curriculum-map.md` connecting BA practice, artifacts, interactions, and
  observable learning checks
- authentic organizer logos and QR destinations
- final visual integration of the prompt pack and demo script
- aligned facilitator, fallback, attendee, and requirements files
- `slides.pdf` intentionally deferred until the slides are finalized

## Success measures

### During the session

- the core message fits in 65 minutes even with normal interaction
- at least three audience contributions materially affect the example
- the live demo produces reviewable Markdown artifacts without using private data
- the audience can explain the role of at least four artifacts in the stack
- the session closes with a specific Monday-morning action plan

### After the session

- the full packet is available from one public entry point
- attendees can reuse the templates without installing the demo environment
- organizer feedback captures relevance, clarity, applicability, and desired follow-up topics
- the demo and slides work offline from the checked-in repository

## Risks and mitigations

| Risk | Mitigation |
|---|---|
| Audience interaction consumes the core session | Keep a 55-minute content spine inside the 65-minute block and use explicit drop-if-behind rules. |
| Codex or Wi-Fi fails | Use checked-in inputs, expected outputs, screenshots, and a prepared artifact diff. |
| The artifact stack feels like jargon | Introduce every artifact through the business question it answers, then show the filename. |
| The demo becomes too technical | Keep terminal commands out of the main narrative and focus on the visible Markdown outputs. |
| The room wants implementation detail | Use the final 25 minutes and checked-in references rather than derailing the core spine. |
| Attendees mistake memory for policy | Repeat that required rules belong in checked-in guidance or documentation; memory is a recall layer. |
| A real audience scenario exposes sensitive details | Ask for a generic process category and fictionalize names, data, and exceptions before using it. |
| Organizer assets are rendered incorrectly | Use the authentic extracted logos and verify every QR destination from the HTML deck. |

## Acceptance criteria

### First curriculum and deck pass

- The event README, PRD, timed plan, workbook, prompts, demo script, runbooks,
  organizer requirements, and reference links are navigable from one entry
  point.
- The complete fictional demo contains raw evidence, checked-in workspace
  guidance, memory warning, process and data definitions, SOP, PRD, repo-scoped
  skill, acceptance scenarios, and prepared verification evidence.
- V-001 passes to human review, V-002 requires clarification, and V-003 stops
  and escalates under the approved policy excerpt.
- `node demo/verify-demo.mjs` passes without network access.
- The HTML deck has 25 direct-addressable slides, defaults to dark mode, offers
  light mode, and includes keyboard, full-screen, and visible navigation.
- The deck puts Improving on slide 2, introduces Brad after the organizer
  slides, and makes HOUBAs feedback plus the Start Small, Think Big community
  call to action the final 50:50 slide.
- The speaker notes preserve a 65-minute core and 25-minute extension.
- No `slides.pdf` is added before the slides are finalized.

### Complete event package

- The session uses Codex as the demonstration harness and does not require OpenClaw.
- The core presentation is 60-70 minutes and the extension block is 20-30 minutes.
- The audience framing is process-forward, data-backed, people-centered, and business-outcome-focused.
- The content covers foundations, Markdown, workspace guidance, memory, SOPs, PRDs, skills, guardrails, and verification.
- The session includes at least one live Codex workflow and one audience-supplied scenario exercise.
- Every live source and output is fictional, public-safe, and checked into the packet.
- The final deck includes the organizer's host, community, and feedback inserts.
- The Improving host recognition is slide 2, source slide 1 is omitted, and the combined HOUBAs feedback and Start Small, Think Big call to action is the final audience-facing slide.
- The HTML deck, speaker notes, demo, prompts, and fallback outputs pass the
  repository audit and publication scan.
- The final PDF is generated and visually checked only after the deck is
  approved.

## Open inputs

See [organizer-inputs.md](organizer-inputs.md) for the exact outstanding items and recommended defaults.
