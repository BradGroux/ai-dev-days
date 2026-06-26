# Demo Script

This is the maintainer runbook for live demos at the Open Source Zone.

## Demo Rule

Show the workflow pattern, not a fragile integration stunt.

Use synthetic files, draft-only outputs, and explicit review gates. Do not connect live messaging accounts or take external actions.

## Demo Files

- [demo/sample-public-business-notes.md](demo/sample-public-business-notes.md)
- [demo/business-ops-memory.md](demo/business-ops-memory.md)
- [demo/business-ops-prd.md](demo/business-ops-prd.md)
- [demo/business-ops-sop.md](demo/business-ops-sop.md)
- [demo/expected-output.md](demo/expected-output.md)
- [prompt-pack.md](prompt-pack.md)

## Primary Demo: Business Intake To Execution Plan

Best for founders, operators, PMs, consultants, and technical leaders.

### Scenario

A small team has scattered public-safe notes about launching an internal AI support workflow. They need a clear operating packet:

- objective
- decisions
- risks
- task map
- Veritas-ready cards
- human review checklist

### Setup

Open:

1. [demo/business-ops-memory.md](demo/business-ops-memory.md)
2. [demo/business-ops-prd.md](demo/business-ops-prd.md)
3. [demo/business-ops-sop.md](demo/business-ops-sop.md)
4. the prompt pack

Say:

> The demo uses synthetic notes. In a real business workflow, you sanitize context first and keep private records, secrets, customer data, and contracts out of public tools.

### 5-Minute Run Sequence

1. Show the memory file.
2. Show the PRD acceptance criteria.
3. Show the SOP safety boundary.
4. Run prompt 1: Clarify The Business Workflow.
5. Answer with:
   - first output: operating packet and Veritas-ready task map
   - audience: founder, operations lead, engineering lead
   - boundary: synthetic notes only, no private customer or employee data
6. Run prompt 2: Business Workflow Architect.
7. Run prompt 3: Veritas Task Mapper.
8. Run prompt 4: Safety And Approval Reviewer.

### Expected Output

- clarifying questions before planning
- concise operating packet
- task map with owners or owner placeholders
- Veritas-ready card list
- risks and approval gates
- draft-only marker

If generation is slow, open [demo/expected-output.md](demo/expected-output.md).

## Secondary Demo: Maintainer Triage

Best for open source maintainers, GitHub-heavy engineers, and DevRel.

### Scenario

A maintainer has several synthetic issue summaries and wants a safe triage queue.

### Talk Track

> A maintainer workflow is a business workflow too: intake, classification, risk, next action, and review.

### Run Sequence

Use prompt 5: Maintainer Triage Planner.

Ask for:

- likely duplicates
- issue type
- severity
- missing reproduction details
- safe next maintainer action
- what not to post without review

Do not use live private issues, private tokens, or real contributor contact data.

## Architecture Walkthrough

Best for engineers and security-minded attendees.

Use the architecture slide and say:

1. Clients and channels are entry points.
2. Gateway is the control plane.
3. Runtime assembles context and talks to models.
4. Tools and nodes are how work happens.
5. Sessions and memory keep work durable.
6. Approval and verification keep risky actions human-controlled.

## Veritas Kanban Walkthrough

Best when someone asks how plans become real work.

Say:

> OpenClaw can help produce the plan. Veritas Kanban is an example of how that plan becomes tracked execution: tasks, owners, states, workflow gates, and evidence.

Show Veritas live only if the local instance is clean and synthetic. Otherwise, keep it as a talking point.

## Do Not Demo

- live channel pairing
- private DMs or email
- private GitHub issues
- private customer notes
- real attendee contact records
- sponsor terms
- unreleased announcements
- API keys or credentials
- posting comments
- sending messages
- creating PRs
- merging code
- deleting data
- rotating credentials
