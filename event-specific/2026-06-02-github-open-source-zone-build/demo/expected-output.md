# Expected Output

Use this if live generation is slow or unavailable.

## Draft Operating Packet

Status: Draft only. Human review required before use.

### Objective

Create a safe first version of an AI-assisted internal support workflow that turns sanitized product questions into draft responses and follow-up tasks.

### Audience

- operations lead
- engineering lead
- support owner
- product owner

### Assumptions

- The first version is draft-only.
- No customer records, private employee data, credentials, contract terms, or unreleased details are used.
- A human approves every response before it is sent.
- The team wants trackable follow-up work, not autonomous external action.

### Decisions Needed

1. Which docs are approved source material?
2. Who reviews draft answers?
3. What questions should be rejected or escalated?
4. Where should follow-up tasks live?
5. What evidence proves the workflow is safe enough to expand?

### Workflow Stages

1. Intake sanitized question.
2. Load approved context.
3. Draft answer with assumptions.
4. Identify missing facts.
5. Create follow-up task map.
6. Human review.
7. Approved send or discard.

### Risks

- private data accidentally enters the prompt
- agent invents unsupported product claims
- response is treated as approved when it is only a draft
- follow-up tasks lack owners or evidence
- external sends happen without approval

### Approval Gates

- Source context approval before first demo.
- Human review before any draft response is sent.
- Engineering review before production system access.
- Operations review before task creation in a live tracker.

## Veritas-Ready Task Cards

### 1. Define Approved Source Material

- Type: documentation
- Priority: high
- Owner: product owner placeholder
- Status: todo
- Acceptance criteria: approved docs list exists and excludes private records
- Evidence needed: source list and review note

### 2. Draft Support Workflow SOP

- Type: operations
- Priority: high
- Owner: operations lead placeholder
- Status: todo
- Acceptance criteria: SOP includes intake, draft, review, send, and reject paths
- Evidence needed: reviewed SOP

### 3. Create Safety Boundary Checklist

- Type: security
- Priority: high
- Owner: engineering lead placeholder
- Status: todo
- Acceptance criteria: checklist blocks secrets, credentials, customer records, private employee data, and automatic sends
- Evidence needed: checklist signed off by reviewer

### 4. Build Draft Response Prompt

- Type: agent-workflow
- Priority: medium
- Owner: AI workflow owner placeholder
- Status: todo
- Acceptance criteria: prompt asks for assumptions, missing facts, and draft-only output
- Evidence needed: sample output against synthetic notes

### 5. Define Human Approval Gate

- Type: governance
- Priority: high
- Owner: operations lead placeholder
- Status: todo
- Acceptance criteria: workflow cannot send externally without named approver
- Evidence needed: approval rule and test case

### 6. Run Synthetic Dry Run

- Type: test
- Priority: medium
- Owner: support owner placeholder
- Status: todo
- Acceptance criteria: three synthetic questions produce draft answers and follow-up tasks without private data
- Evidence needed: dry-run transcript and review notes

## Verification Checklist

- Confirm all source notes are synthetic or approved for use.
- Confirm no private customer or employee data appears in output.
- Confirm no credentials, tokens, API keys, or secrets appear in output.
- Confirm every external action is draft-only or approval-gated.
- Confirm task owners are placeholders until assigned by a human.
- Confirm product claims are backed by approved docs.
- Confirm the first live test uses sanitized inputs only.
