# Curriculum Map

## Curriculum promise

This session helps business analysis practitioners convert existing elicitation,
process, data, requirements, governance, and acceptance practices into durable
context for a Codex-supported workflow.

The curriculum does not ask attendees to become developers. It asks them to
make the business operating contract inspectable before automation.

## Audience starting point

Attendees are expected to know some combination of:

- stakeholder interviews and workshops
- current-state and future-state process analysis
- business or solution requirements
- data definitions and validation
- acceptance criteria, UAT, controls, or traceability
- operational handoffs and change management

No Codex installation, terminal experience, or programming experience is
required.

## Learning progression

| Stage | Business analyst question | New operating concept | Evidence of learning |
|---|---|---|---|
| 1. Purpose | What outcome are we trying to reach? | Intent before acceleration | Attendee can state an outcome and proof, not just "use AI." |
| 2. Context | What is true, allowed, next, and done? | Context as an operating contract | Attendee identifies a missing rule or decision owner. |
| 3. Foundation | Who, how, and what data? | People, process, data, and durable Markdown | Attendee maps one workflow across the foundation chain. |
| 4. Artifacts | Which document answers which business question? | Sources, process brief, data contract, glossary, guidance, memory, SOP, PRD, skill, and checks | Attendee assigns the right job and authority to each artifact. |
| 5. Challenge | What must the agent not assume? | Facts, assumptions, conflicts, and open questions | Attendee produces a focused elicitation question. |
| 6. Operation | How does approved context become repeatable work? | Standing guidance, SOP, PRD, and reusable skill | Attendee separates procedure, intent, and reuse. |
| 7. Assurance | What happens on complete, incomplete, and prohibited cases? | PASS, CLARIFY, STOP / ESCALATE | Attendee defines three acceptance scenarios. |
| 8. Adoption | What is the smallest safe next step? | One reviewable operating win | Attendee names a Monday-morning workflow and owner. |

## BA practice to Codex artifact map

| Existing BA practice | Codex workspace artifact | Important distinction |
|---|---|---|
| Elicitation notes and document analysis | Source notes | Evidence is not an approved rule until reviewed. |
| Current-state analysis | Process brief | Include workarounds, handoffs, conflicts, and exceptions. |
| Data requirements | Data contract and glossary | Define owner and missing-data behavior, not only type and format. |
| Team working agreement and governance | `AGENTS.md` | Standing rules belong close to the work they govern. |
| Institutional knowledge | Memory | Recall is useful but cannot be the only source of policy. |
| Standard operating procedure | SOP | Include stop conditions, escalation, verification, and handoff. |
| Business and solution requirements | PRD | Tie the problem and users to measurable acceptance criteria and non-goals. |
| Reusable method or center-of-excellence playbook | Skill | Package only a focused procedure stable enough to reuse. |
| Acceptance criteria, traceability, UAT, and controls | Acceptance scenarios and checks | Test pass, incomplete, and prohibited conditions. |

## Core assessments

The session uses observable checks instead of a quiz.

### Check 1 - Identify ambiguity

During slide 13, attendees identify:

- one exception
- one undefined term
- one missing decision owner

Success: the group distinguishes evidence from an inferred rule.

### Check 2 - Assign artifact responsibility

During slides 9-11, ask which artifact should hold a rule, procedure, desired
outcome, reusable method, and expected example.

Success: the group does not collapse guidance, memory, SOP, PRD, skill, and
acceptance checks into one prompt.

### Check 3 - Predict the safe outcome

Before slide 19's live run, attendees predict V-002.

Success: the group expects CLARIFY rather than a completed approval.

### Check 4 - Map a workflow

During slide 20, the room supplies at least one item for people, process, data,
guardrails, and proof.

Success: the scenario has an owner, exception, data source, stop boundary, and
verifiable outcome before anyone proposes integration.

### Check 5 - Commit to a next move

During slides 21-22, attendees privately name:

- one bounded workflow
- its accountable owner
- one exception
- one acceptance scenario

Success: the next action is a reviewable artifact, not an autonomous system.

## Misconceptions to surface

### "A longer prompt is durable context"

Response: a prompt can request work, but reviewed rules, process definitions,
data meaning, and verification deserve separate owned artifacts.

### "Memory is the source of truth"

Response: memory supports recall. Required team and business rules belong in
checked-in guidance, policy, SOPs, or code.

### "Reliable means it always finishes"

Response: a reliable workflow passes when allowed, clarifies when incomplete,
and stops when the authority or evidence is missing.

### "The business analyst hands requirements to the technical team"

Response: in an AI-supported workflow, context and acceptance evidence remain
living operating assets. Business ownership continues after the first build.

### "The demo proves production readiness"

Response: the demo proves a small fictional artifact-and-verification pattern.
Production readiness requires approved sources, owners, security, data
governance, runtime controls, and ongoing evidence in the real environment.

## Facilitation principles for this audience

- Lead with business questions, then reveal filenames.
- Use the whiteboard and audience exceptions as often as the deck.
- Show file content and evidence, not terminal mechanics.
- Treat interruptions as useful elicitation when they clarify the current idea.
- Park implementation deep dives without dismissing them.
- Ask "Who owns that decision?" whenever approval is implied.
- Ask "What happens when the data is missing?" whenever only the happy path is
  described.
- Ask "What would prove that?" whenever a claim jumps directly to automation.

## Extension routes

Choose one based on the room.

### Governance-heavy room

Explore:

- artifact ownership and approval
- source precedence
- change control when policy or data definitions change
- audit evidence and separation of duties

### Process-heavy room

Explore:

- discovering the actual current state
- shadow steps and workarounds
- exception taxonomy
- handoffs, wait states, and stop conditions

### Data-heavy room

Explore:

- glossary conflicts
- provenance and freshness
- validation and sensitivity
- missing and conflicting data behavior

### Technical room

Explore:

- nested `AGENTS.md` guidance
- repository-scoped skill structure
- deterministic helpers and verification scripts
- why external actions remain disconnected in the learning demo

## Reuse boundary

The vendor-onboarding packet is a teaching example, not a universal vendor
policy. Attendees should copy the questions and artifact pattern, then replace
the fictional content with approved, organization-specific sources and owners.
