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
| 0:00-0:06 | Welcome, host recognition, and opening poll | Organizer insert plus show of hands | Establish the room as conversational and surface shared pain. |
| 0:06-0:14 | The real AI problem is context | Short talk with one visual | Connect people, process, data, and business value before discussing tools. |
| 0:14-0:25 | The AI-ready artifact stack | Slides plus file walkthrough | Explain Markdown, `AGENTS.md`, memory, SOP, PRD, skill, and acceptance checks by the business question each answers. |
| 0:25-0:40 | Demo one: messy notes to current-state clarity | Live Codex demonstration | Expose assumptions, actors, data, exceptions, missing owners, and elicitation questions. |
| 0:40-0:52 | Demo two: current state to operating packet | Live Codex demonstration with prepared fallback | Create the SOP, PRD, workspace guidance, reusable skill, and verification scenarios. |
| 0:52-1:02 | Audience scenario: make a workflow AI-ready | Whiteboard exercise | Map people, process, data, guardrails, and proof for one audience-supplied process. |
| 1:02-1:05 | Five moves for Monday | Closing slide and resource QR | Give attendees a concrete next step and release the room into the extension block. |

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
| 1:05-1:15 | Scenario clinic | Take one additional audience process and identify the minimum AI-ready artifact set. |
| 1:15-1:25 | Q&A by concern | Group questions under adoption, governance, data, team workflow, and technical implementation. |
| 1:25-1:30 | Feedback and follow-up | Show the HOUBAs feedback QR and the attendee resource page. |

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
