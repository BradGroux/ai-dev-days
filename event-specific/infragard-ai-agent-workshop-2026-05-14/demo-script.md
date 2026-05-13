# Demo Script

This script supports a live or simulated workflow demo. Use one sanitized scenario from [`scenario-cards.md`](scenario-cards.md).

Recommended default: **Field Report To Customer Summary**.

## Demo Goal

Show the repeatable pattern:

1. capture context in Markdown
2. assign agent roles
3. set data boundaries
4. produce one useful artifact
5. review and verify the output

## Setup

Open:

- [`prompt-pack.md`](prompt-pack.md)
- [`scenario-cards.md`](scenario-cards.md)
- a blank Markdown file named `infragard-demo-memory.md`
- your AI assistant of choice

Use this sanitized workflow:

```markdown
# InfraGard Demo Memory

## Workflow

Field technicians collect site observations and measurements. A coordinator turns those notes into a customer-safe summary. Today the process is manual and inconsistent.

## Current pain

- notes arrive in different formats
- missing data is found late
- reports take too long to produce
- customer-facing summaries vary by person

## Data boundary

Use mock site names and mock measurements only. Do not use customer names, exact locations, photos, regulated data, credentials, or internal systems.

## Desired first output

A field-report checklist and a short customer-summary template.
```

## Step 1 - Ask For Clarifying Questions

Prompt:

```text
Read this Markdown memory. Before proposing a solution, ask me three clarifying questions that would help you map the workflow safely.
```

Teaching point:

- Good agents should ask before assuming.
- The clarifying questions reveal missing process context.

## Step 2 - Process Mapper

Use the Process Mapper prompt from [`prompt-pack.md`](prompt-pack.md).

Expected output:

- steps
- inputs
- outputs
- handoffs
- missing data
- bottlenecks

Teaching point:

- Agents are useful when the role is narrow.
- The output should be reviewed like work from a junior analyst.

## Step 3 - Security Reviewer

Use the Security Reviewer prompt.

Expected output:

- safe data
- unsafe data
- approval gates
- logging/audit needs
- human review points

Teaching point:

- Guardrails come before automation.
- The agent should identify what not to automate.

## Step 4 - Documentation Writer

Use the Documentation Writer prompt.

Expected output:

- field report checklist
- customer summary template
- escalation path
- verification checks

Teaching point:

- The artifact is a draft.
- Improve it live by rejecting vague language or unsafe assumptions.

## Step 5 - Implementation Planner

Use the Implementation Planner prompt.

Expected output:

- first low-risk experiment
- tasks
- verification gates
- stop conditions

Teaching point:

- The safest first automation is usually draft-only or read-only.
- Production changes require stronger controls.

## Step 6 - Verification Reviewer

Use the Verification Reviewer prompt.

Ask:

```text
Review this output skeptically. What assumptions should I verify before using it?
```

Teaching point:

- Verification is part of the workflow, not an afterthought.
- Cross-checking with another role or model is useful for higher-risk work.

## If Live Generation Is Slow

Switch to narration:

> The exact words are less important than the pattern: role, context, boundary, output, verification.

Then walk through a saved or expected output.

## Close The Demo

Summarize:

- We did not need sensitive data.
- We did not hand the agent production control.
- We got a practical artifact.
- We identified review points.
- We now have a repeatable next step.
