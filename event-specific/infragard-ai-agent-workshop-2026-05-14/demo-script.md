# Demo Script

This is the presenter runbook for the "choose your own adventure" portion of the InfraGard AI Agent Workshop. Pick the scenario that matches the room, then use the corresponding prompts from [`prompt-pack.md`](prompt-pack.md).

## Quick Start

1. Open [`scenario-cards.md`](scenario-cards.md).
2. Pick one scenario from the [Choose Your Adventure](scenario-cards.md#choose-your-adventure) table.
3. Open the matching section in [`prompt-pack.md`](prompt-pack.md).
4. Create or open a blank Markdown file named `infragard-demo-memory.md`.
5. Run the demo path below.

## Universal Demo Pattern

Use this sequence for any scenario:

1. **Memory Builder:** create sanitized Markdown context.
2. **Process Mapper:** map steps, inputs, outputs, handoffs, and gaps.
3. **Security Reviewer:** define safe data, unsafe data, approval gates, and audit needs.
4. **Documentation Writer:** draft one useful artifact.
5. **Implementation Planner:** propose the safest first pilot.
6. **Verification Reviewer:** challenge the output before use.

## Timebox Options

- **10-minute version:** Memory Builder, Process Mapper, Security Reviewer, Verification Reviewer.
- **20-minute version:** add Documentation Writer.
- **30-minute version:** add Implementation Planner and audience Q&A.

## Fallback If Live Generation Is Slow

Say:

> The exact words are less important than the pattern: role, context, boundary, output, verification.

Then narrate the expected output using the "Expected output" bullets below.

## Demo Path 1 - Field Report To Customer Summary

Use with [Scenario Card 1](scenario-cards.md#scenario-1---field-report-to-customer-summary) and [Scenario 1 prompts](prompt-pack.md#scenario-1---field-report-to-customer-summary).

**Best room fit:** mixed audience, operations, energy, water, healthcare operations, infrastructure services.

**Presenter setup line:**

> We will use a field-report example because nearly every sector has some version of notes, measurements, missing data, and customer-safe summaries.

### Run Sequence

1. Run [1A. Memory Builder](prompt-pack.md#1a-memory-builder).
2. Answer the three clarifying questions with generic answers.
3. Run [1B. Process Mapper](prompt-pack.md#1b-process-mapper).
4. Run [1C. Security Reviewer](prompt-pack.md#1c-security-reviewer).
5. Run [1D. Documentation Writer](prompt-pack.md#1d-documentation-writer).
6. Run [1E. Implementation Planner](prompt-pack.md#1e-implementation-planner).
7. Run the [Universal Review Prompt](prompt-pack.md#universal-review-prompt).

### Expected Output

- Minimum viable field report fields.
- Capture-to-summary process map.
- Safe/use-placeholder/do-not-use data boundary.
- Field report checklist.
- Customer-safe summary template.
- Draft-only pilot plan.

### Audience Prompts

- What data would you allow this agent to see?
- What would require human approval before a customer sees it?
- What would be the first stop condition?

### Verification Talking Points

- The agent must not invent measurements.
- Customer-facing language needs human review.
- Missing data should be flagged, not filled in.
- Photos, site names, exact locations, and regulated data stay out of the demo.

## Demo Path 2 - Heavy Haul Load Status

Use with [Scenario Card 2](scenario-cards.md#scenario-2---heavy-haul-load-status) and [Scenario 2 prompts](prompt-pack.md#scenario-2---heavy-haul-load-status).

**Best room fit:** logistics, dispatch, transportation, construction, data-center supply chain, operations.

**Presenter setup line:**

> This is a dispatch visibility problem: the value is not fancy AI, it is getting status, exceptions, and customer communication into a repeatable workflow.

### Run Sequence

1. Run [2A. Memory Builder](prompt-pack.md#2a-memory-builder).
2. Answer the three clarifying questions with generic answers.
3. Run [2B. Process Mapper](prompt-pack.md#2b-process-mapper).
4. Run [2C. Security Reviewer](prompt-pack.md#2c-security-reviewer).
5. Run [2D. Documentation Writer](prompt-pack.md#2d-documentation-writer).
6. Run [2E. Implementation Planner](prompt-pack.md#2e-implementation-planner).
7. Run the [Universal Review Prompt](prompt-pack.md#universal-review-prompt).

### Expected Output

- Standard status fields.
- Dispatcher/customer/driver handoff map.
- Customer-safe update template.
- Exception escalation checklist.
- Read-only pilot plan.

### Audience Prompts

- Which status fields are safe to standardize?
- What should never be exposed in a customer update?
- Who approves an exception message before it goes out?

### Verification Talking Points

- The agent must not expose route, cargo, driver, customer, pricing, or contract details.
- Customer status updates are drafts until dispatcher-approved.
- The first safe pilot should use mock status records or sanitized historical examples.

## Demo Path 3 - Low-Severity Alert Triage

Use with [Scenario Card 3](scenario-cards.md#scenario-3---low-severity-alert-triage) and [Scenario 3 prompts](prompt-pack.md#scenario-3---low-severity-alert-triage).

**Best room fit:** SOC, IT, MSP, OT security, compliance teams.

**Presenter setup line:**

> This is where agents help organize repetitive work, but humans still own the security conclusion.

### Run Sequence

1. Run [3A. Memory Builder](prompt-pack.md#3a-memory-builder).
2. Answer the three clarifying questions with generic answers.
3. Run [3B. Process Mapper](prompt-pack.md#3b-process-mapper).
4. Run [3C. Security Reviewer](prompt-pack.md#3c-security-reviewer).
5. Run [3D. Documentation Writer](prompt-pack.md#3d-documentation-writer).
6. Run [3E. Implementation Planner](prompt-pack.md#3e-implementation-planner).
7. Run the [Universal Review Prompt](prompt-pack.md#universal-review-prompt).

### Expected Output

- Intake-to-closeout process map.
- Minimum evidence record.
- Prompt-injection and log-sensitivity guardrails.
- Triage checklist.
- Escalation criteria.
- Draft-only pilot plan.

### Audience Prompts

- What alert content could be attacker-controlled?
- What should the agent summarize versus decide?
- What must be reviewed before closeout?

### Verification Talking Points

- Do not paste live logs, IPs, usernames, vulnerabilities, or incident details.
- Agent-generated triage notes are drafts.
- Senior analyst review is required before policy or escalation changes.
- Prompt injection is a real concern when agents read alert text.

## Demo Path 4 - Compliance Evidence Packet

Use with [Scenario Card 4](scenario-cards.md#scenario-4---compliance-evidence-packet) and [Scenario 4 prompts](prompt-pack.md#scenario-4---compliance-evidence-packet).

**Best room fit:** senior leaders, GRC, audit, legal, healthcare, energy, finance, security governance.

**Presenter setup line:**

> Compliance is a strong first use case because the agent can organize and draft, while humans still certify the evidence.

### Run Sequence

1. Run [4A. Memory Builder](prompt-pack.md#4a-memory-builder).
2. Answer the three clarifying questions with generic answers.
3. Run [4B. Process Mapper](prompt-pack.md#4b-process-mapper).
4. Run [4C. Security Reviewer](prompt-pack.md#4c-security-reviewer).
5. Run [4D. Documentation Writer](prompt-pack.md#4d-documentation-writer).
6. Run [4E. Implementation Planner](prompt-pack.md#4e-implementation-planner).
7. Run the [Universal Review Prompt](prompt-pack.md#universal-review-prompt).

### Expected Output

- Evidence source and owner map.
- Placeholder evidence inventory.
- Evidence sensitivity guardrails.
- Evidence packet checklist.
- Owner request template.
- Monthly routine pilot.

### Audience Prompts

- What can an agent prepare?
- What must a control owner certify?
- What evidence should not be copied into an AI tool?

### Verification Talking Points

- Do not paste real evidence, findings, screenshots, access lists, or regulated records.
- The agent can prepare request packets and checklists.
- Humans certify evidence accuracy and control effectiveness.

## Demo Path 5 - OT/IT Change Coordination

Use with [Scenario Card 5](scenario-cards.md#scenario-5---otit-change-coordination) and [Scenario 5 prompts](prompt-pack.md#scenario-5---otit-change-coordination).

**Best room fit:** OT, utilities, manufacturing, facilities, maritime, healthcare operations, water, energy.

**Presenter setup line:**

> This is not about letting an agent touch control systems. It is about making change coordination clearer before humans approve anything.

### Run Sequence

1. Run [5A. Memory Builder](prompt-pack.md#5a-memory-builder).
2. Answer the three clarifying questions with generic answers.
3. Run [5B. Process Mapper](prompt-pack.md#5b-process-mapper).
4. Run [5C. Security Reviewer](prompt-pack.md#5c-security-reviewer).
5. Run [5D. Documentation Writer](prompt-pack.md#5d-documentation-writer).
6. Run [5E. Implementation Planner](prompt-pack.md#5e-implementation-planner).
7. Run the [Universal Review Prompt](prompt-pack.md#universal-review-prompt).

### Expected Output

- Change request process map.
- Minimum change packet.
- Safety/availability/security approval gates.
- Change coordination checklist.
- Approval matrix.
- Rollback template.

### Audience Prompts

- What should never be agent-executed?
- Which humans must approve the change packet?
- What rollback criteria must be explicit?

### Verification Talking Points

- Do not paste real topology, device details, firewall rules, credentials, or control instructions.
- Agents can draft coordination documents, not execute operational changes.
- OT owner, IT owner, and security reviewer should all approve the final packet.

## Universal Close

End any path with:

> We did not need sensitive data. We did not hand the agent production control. We got a practical artifact. We identified review points. We now have a repeatable next step.

Then run the [30-Day Challenge Prompt](prompt-pack.md#30-day-challenge-prompt) if time allows.
