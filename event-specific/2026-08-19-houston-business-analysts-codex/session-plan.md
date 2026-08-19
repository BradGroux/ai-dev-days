# Session Plan

## Time envelope

- Core session: 65 minutes
- Extension: 25 minutes
- Total: 90 minutes
- Expected workshop start: 6:30 PM
- Interaction model: questions and relevant scenarios are welcome throughout

The core contains about 55 minutes of planned material and 10 minutes of interaction and recovery margin. The extension can be Q&A, a scenario clinic, or additional thought exercises based on the room.

## 65-minute core

| Time | Segment | Format | Outcome |
|---:|---|---|---|
| 0:00-0:05 | Welcome, host recognition, community, and presenter | Slides 1-4 | Recognize the host and organizers, expose the community links, and establish Brad's practitioner perspective. |
| 0:05-0:08 | Opening poll | Slide 5 plus show of hands | Surface shared AI and process friction. |
| 0:08-0:20 | The context problem, BA opportunity, and FDE bridge | Slides 6-11 | Connect intent and BA practice to a current delivery role, preserve the technical distinction, and introduce durable context. |
| 0:20-0:27 | The AI-ready artifact stack | Slides 12-14 | Explain source notes, process brief, data contract, glossary, `AGENTS.md`, memory, SOP, PRD, skill, and acceptance checks by the business question each answers. |
| 0:27-0:41 | Demo one: messy notes to current-state clarity | Slides 15-18 plus live Codex | Expose assumptions, exceptions, missing owners, elicitation questions, and data definitions. |
| 0:41-0:55 | Demo two: current state to verified operation | Slides 19-22 plus live Codex or prepared fallback | Separate guidance, memory, SOP, PRD, and skill, then verify a CLARIFY case. |
| 0:55-1:02 | Audience scenario: make a workflow AI-ready | Slide 23 plus whiteboard | Map people, process, data, guardrails, and proof for one audience-supplied process. |
| 1:02-1:05 | Five moves and resources | Slides 24-25 | Give attendees a concrete next step and release the room into the extension block. |

## Core talk track

### Opening poll

Ask:

1. Who has used an AI tool at work in the last month?
2. Who has received two different answers to what felt like the same question?
3. Who has seen a project automate a process nobody fully understood?

Opening line:

> If the process is unclear to the people doing it, AI does not remove the ambiguity. It executes inside it.

### Foundation visual

Use one simple chain:

```text
People -> Process -> Data -> Context -> Agent -> Evidence
```

The business analyst helps define every boundary to the left of the agent and every proof point to its right.

### Artifact-stack teaching order

Teach the business question first and the filename second:

1. What do we know? -> source notes and process brief
2. What does the data mean? -> data contract and glossary
3. What rules always apply here? -> `AGENTS.md`
4. What useful prior context may help? -> memory
5. How is the work performed consistently? -> SOP
6. Why are we changing it, and what is success? -> PRD
7. What procedure deserves reuse? -> skill
8. What proves the result is correct? -> acceptance checks

### Demo one checkpoints

The audience should see Codex refuse to fill important gaps silently. Pause at three points:

- Which statement is a fact, and which is an assumption?
- Which exception would break the happy path?
- Who owns the decision when the data is incomplete?

### Demo two checkpoints

Show the same business rule expressed at the correct layer:

- workspace-wide rule in `AGENTS.md`
- process sequence in the SOP
- outcome and acceptance criteria in the PRD
- reusable method in the skill
- example case in acceptance checks

Do not spend the main session teaching YAML, shell commands, or skill packaging internals. The files remain available for technical attendees afterward.

### Audience scenario canvas

Draw five columns on the whiteboard:

| People | Process | Data | Guardrails | Proof |
|---|---|---|---|---|
| owner, user, approver, affected party | trigger, steps, exceptions, stop conditions | source, owner, quality, sensitivity | allowed actions, approvals, escalation | acceptance criteria, review, audit evidence |

Ask the room for a generic workflow, then fill one item in each column before suggesting automation.

### Monday-morning close

1. Pick one repetitive, low-risk workflow.
2. Document the actual current state and exceptions.
3. Define the data, owners, boundaries, and approval points.
4. Put the context in small Markdown artifacts and let Codex challenge the gaps.
5. Test with examples before connecting tools or taking actions.

## 25-minute extension

| Time | Segment | Notes |
|---:|---|---|
| 1:05-1:28 | Scenario clinic and Q&A | Use slide 26. Take one additional audience process or group questions under adoption, governance, data, team workflow, and implementation. |
| 1:28-1:30 | Feedback and follow-up | Show slide 27 with the HOUBAs feedback and SSTB community QR codes. |

If the core has already absorbed substantial Q&A, use the extension for deeper discussion rather than repeating questions.

## Organizer timing signals

HOUBAs organizers offered two timing signals:

- halfway
- 15 minutes remaining

Brad should confirm the visual or verbal signal before the session begins. The source template contains a third empty bullet, so no additional signal is assumed.

## Drop-if-behind order

Protect the thesis, artifact map, audience exercise, and Monday close.

If 5 minutes behind:

- shorten the foundation visual to one example
- show only the changed files from demo two

If 10 minutes behind:

- use the prepared demo-one output instead of generating it live
- explain the skill at the conceptual level and defer its file anatomy

If 15 minutes behind:

- combine both demos into a before-and-after artifact walkthrough
- keep at least five minutes for the audience scenario

## Interaction guardrails

- Welcome interruptions that clarify the current concept.
- Timebox a personal scenario to three minutes during the core.
- Capture deeper scenarios on the whiteboard for the extension.
- Ask people to remove company names, customer data, and sensitive details.
- Never paste a real organizational process or data sample into the projected Codex workspace.
