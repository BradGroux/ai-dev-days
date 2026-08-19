# AI-Ready Workflow Workbook

Use this workbook to prepare one small, low-risk business workflow for AI
assistance. The goal is not to automate the process immediately. The goal is to
make the process understandable, reviewable, and testable.

## The context architect canvas

Start with one sentence:

> When **[trigger]** happens, **[people or roles]** use **[data]** to produce
> **[outcome]**, subject to **[guardrails]**, and we know it worked when
> **[evidence]** exists.

Then complete the five columns.

See the [completed vendor-onboarding example](ai-ready-workflow-worked-example.md)
before filling in your own canvas.

| People | Process | Data | Guardrails | Proof |
|---|---|---|---|---|
| Who owns the process? | What starts the work? | What data is required? | What must never happen? | What output is expected? |
| Who makes decisions? | What is the happy path? | Where does it come from? | When must work stop? | Who reviews it? |
| Who reviews or approves? | What are the exceptions? | Who owns each field? | What needs human approval? | What scenarios must pass? |
| Who is affected? | What are the handoffs? | What can be missing or wrong? | What data is sensitive? | What audit trail is needed? |

## Step 1: choose the right workflow

Good first candidates are frequent, bounded, reviewable, and low consequence.

- Candidate workflow:
- Current pain:
- Frequency:
- Process owner:
- Why this is low-risk enough to learn from:
- External actions that remain out of scope:

Avoid a first workflow that can independently spend money, change permissions,
make employment decisions, publish externally, approve a regulated outcome, or
operate on poorly understood sensitive data.

## Step 2: capture evidence before interpretation

List the material that describes what actually happens.

| Source | Owner | What it supports | Freshness | Approved for this use? |
|---|---|---|---|---|
|  |  |  |  |  |

Separate the notes into three buckets:

### Confirmed facts

- [Add confirmed fact and source]

### Assumptions to validate

- [Add assumption and validation owner]

### Open questions

- [Add open question and decision owner]

If a statement has no source or owner, keep it visible as an assumption. Do not
promote it to a rule because it sounds reasonable.

## Step 3: write the process brief

### Purpose

- Business outcome:
- Trigger:
- End state:
- Process owner:

### Actors and decisions

| Role | Responsibility | Decision rights | Escalation path |
|---|---|---|---|
|  |  |  |  |

### Current-state flow

1. [Add first observed step]
2. [Add next observed step]
3. [Add final observed step]

### Exceptions and failure paths

| Condition | Expected response | Owner | Evidence |
|---|---|---|---|
| Missing required data |  |  |  |
| Conflicting sources |  |  |  |
| Policy or risk flag |  |  |  |
| Deadline or rush request |  |  |  |

## Step 4: define the data contract

| Field | Meaning | Source | Owner | Required? | Validation | Sensitivity |
|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  |

Also record:

- permitted use:
- freshness requirement:
- retention rule:
- redaction rule:
- missing-data behavior:
- conflicting-data behavior:

## Step 5: define the artifact stack

Each artifact has a different job. Do not collapse them into one giant prompt.

| Artifact | Write this down | Keep it authoritative when... |
|---|---|---|
| Source notes | observations, quotations, records, and provenance | it reflects reviewed evidence |
| Process brief | actors, current state, exceptions, and open questions | the process owner confirms it |
| Data contract | field meaning, source, owner, validation, and sensitivity | data owners approve it |
| `AGENTS.md` | standing workspace rules, boundaries, and verification commands | the team requires the rule every time |
| Memory | useful background and lessons from prior work | it helps recall, but never replaces policy |
| SOP | repeatable steps, decisions, stop conditions, and escalation | the procedure owner approves it |
| PRD | problem, users, outcome, scope, and acceptance criteria | the change owner agrees what success means |
| Skill | one focused, reusable workflow and its references | the procedure is stable enough to repeat |
| Acceptance checks | examples, edge cases, and expected evidence | they can prove the workflow followed the rules |

## Step 6: write a safe operating boundary

Complete these sentences:

- The assistant may:
- The assistant must not:
- A person must approve:
- Stop and escalate when:
- Never infer:
- Never expose:
- Every conclusion must cite:
- The result is a draft until:

## Step 7: design acceptance scenarios first

Include at least one of each.

| Scenario | Input condition | Expected outcome | Required evidence |
|---|---|---|---|
| Happy path | complete, low-risk input | PASS or draft-ready | source citations and completed checklist |
| Missing information | required field absent or ambiguous | CLARIFY | missing fields and focused questions |
| Stop condition | policy, safety, or authority boundary triggered | STOP / ESCALATE | exact rule and named escalation owner |

For every scenario, ask:

1. Did the result stay within scope?
2. Did it distinguish fact from assumption?
3. Did it follow the source precedence?
4. Did it preserve human decision rights?
5. Did it produce the required evidence?

## Step 8: use a complete work request

Use this structure instead of asking for a vague outcome.

```text
Goal:
[What should change or be produced?]

Context:
[Which files, people, process, and data definitions matter?]

Constraints:
[What rules, boundaries, sources, and non-goals apply?]

Done when:
[What checks and review evidence prove completion?]
```

## Five moves for Monday

1. Pick one small workflow and name its owner.
2. Capture the current state, including one exception people usually handle
   from memory.
3. Define the minimum data, its owner, and what happens when it is missing.
4. Write the standing rules and stop conditions in reviewable Markdown.
5. Test one pass, one clarify, and one stop scenario before connecting any
   external system.

## Final readiness check

- [ ] The process owner agrees the current-state description is recognizable.
- [ ] Facts, assumptions, and open questions are separated.
- [ ] Data definitions name sources and owners.
- [ ] Required rules are stored in checked-in guidance or documentation.
- [ ] Memory is helpful context, not the only copy of a rule.
- [ ] The SOP contains exceptions and stop conditions.
- [ ] The PRD defines scope and measurable acceptance criteria.
- [ ] A reusable skill has one focused responsibility.
- [ ] Pass, clarify, and stop scenarios have expected outcomes.
- [ ] External action and high-consequence decisions remain human-controlled.
