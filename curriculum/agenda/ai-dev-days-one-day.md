# AI Dev Days One-Day Agenda

## Format

**Length:** 6-8 hours  
**Style:** hands-on workshop  
**Shared foundation:** Open Framework Commons v2026.09.05

**Selected teaching alignment:** AI-Native Operating Framework 1.0.0

**Reference tool track:** OpenClaw

**Core build:** A useful, reviewable people-and-AI operating loop plus Beaver Badges project work
**Default audience:** mixed technical and non-technical attendees

## Operating Principles

- Business purpose and accountable ownership come before technology.
- First success beats feature coverage.
- Markdown is the shared thinking layer.
- Roles beat one giant assistant.
- Contracts make agent output reviewable.
- The human remains the orchestrator.
- Sources, AI output, inference, and authoritative results remain distinct.
- Evidence, handoff, and learning are part of completion.
- AI literacy means understanding, directing, evaluating, and responsibly using AI in context.

Selected teaching alignment:
[AI-Native Operating Framework](../../docs/ai-native-operating-framework-alignment.md)
and
[U.S. Department of Labor AI Literacy Framework](../../docs/ai-literacy-framework-alignment.md).
Program method:
[AI Dev Days research and education method](../../docs/research-and-education-method.md).

## 9:00-9:45 AM - Orientation, Agents, and Operator Thinking

**Purpose:** Give attendees a working mental model before setup starts.

Cover:

- the activity's purpose, accountable owner, expected outcome, and boundaries
- what OpenClaw is
- what agents are in practical terms
- what AI can and cannot reliably do
- role, context, tools, memory, output, and review
- why models need explicit context
- why the workshop uses Markdown
- what the human orchestrator decides

Checkpoint:

- each attendee writes one project, process, or idea they want agent help with,
  the expected outcome, and who remains accountable

## 9:45-11:15 AM - Setup and First Success

**Purpose:** Get the room to a visible OpenClaw response.

Run:

- platform setup guide
- provider onboarding
- gateway check
- dashboard launch
- first prompt

Primary lab:

- [First success](../../labs/first-success.md)

Done means:

- OpenClaw command works
- provider is configured
- gateway is running
- dashboard opens
- model responds
- attendee saves a reviewable result and the next action

## 11:15 AM-12:00 PM - Markdown Memory Loop

**Purpose:** Turn the first response into reusable context.

Cover:

- Markdown source and rendered Markdown
- OpenClaw workspace notes
- memory notes
- task lists
- public safety
- how clear context helps direct AI effectively

Primary module and lab:

- [Markdown thinking layer](../modules/markdown-thinking-layer.md)
- [Markdown memory loop](../../labs/memory-loop.md)

Checkpoint:

- attendee has `workshop-memory.md`
- OpenClaw used it to produce a cleaner goal and task list

## 12:00-12:45 PM - Lunch and Helper Lane

Use this block for:

- install rescue
- provider issues
- account issues
- pairing stuck attendees with green attendees

Avoid:

- live messaging-channel setup
- deep cloud troubleshooting
- optional integration rabbit holes

## 12:45-1:45 PM - Agent Roles and Startup Team

**Purpose:** Teach specialization.

Cover:

- Market Researcher
- Idea Validator
- Project Manager
- Coder
- Outreach Assistant
- orchestrator decisions

Primary section:

- [Agent roles](../agent-roles/README.md)

Checkpoint:

- attendee has one agent role instruction and one task list

## 1:45-2:30 PM - Agent Contracts and Evaluations

**Purpose:** Make agent output testable.

Cover:

- output contracts
- deterministic checks
- rubric review
- edge cases
- pass/fail summaries
- why humans remain accountable for accepted AI outputs

Primary module and lab:

- [Agent contracts and evaluations](../modules/agent-contracts-and-evals.md)
- [Agent contract evaluation](../../labs/agent-contract-evaluation.md)

Checkpoint:

- attendee has a small contract and a review checklist for one agent output

## 2:30-3:30 PM - Beaver Badges Product Build

**Purpose:** Apply the agent team to a concrete project.

Run the roles in order:

1. Market Researcher: comparable patterns
2. Idea Validator: MVP versus roadmap
3. Project Manager: next task list
4. Coder: implementation or code review
5. Outreach Assistant: concise public-safe update

Primary project:

- [Beaver Badges](../../projects/beaver-badges/README.md)

Checkpoint:

- project goal, MVP, and next steps are clearer than before

## 3:30-4:20 PM - Orchestration and Repair Loops

**Purpose:** Show how agent workflows recover from failure.

Cover:

- least-privilege roles
- runner/reviewer separation
- failure reports
- diagnosis notes
- patch plans
- next iteration
- responsible tool and context boundaries

Primary module and lab:

- [Orchestration and repair loops](../modules/orchestration-and-repair-loops.md)
- [Orchestrated repair loop](../../labs/orchestrated-repair-loop.md)

Checkpoint:

- attendee can explain how a failed output becomes a structured repair plan

## 4:20-5:00 PM - Showcase, Safety, and 30-Day Handoff

**Purpose:** End with continuation, not just completion.

Cover:

- what attendees built
- what to keep in memory
- what not to publish
- how to keep using the agent team
- one 30-day build goal
- one AI literacy skill to practice next
- one lesson or improvement to preserve

Closing prompt:

```text
Based on my workshop-memory.md, my agent role, and what I built today, propose a 30-day build plan with one weekly milestone, one risk, and one review checkpoint per week.
```

Done means:

- attendee knows the next practical action after the workshop
