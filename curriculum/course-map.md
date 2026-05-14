# OpenClaw Dev Days Course Map

## Purpose

OpenClaw Dev Days teaches people how to move from one AI assistant response to a useful, reviewable agent workflow.

The subject is not "prompting tricks." The subject is operator skill:

- define the work
- give agents durable context
- limit tools and scope
- test outputs
- repair failures
- preserve useful memory
- decide what ships

## Audience

This curriculum works for mixed rooms:

- curious beginners who need a clear first win
- operators who want personal command-center workflows
- developers who want agent-assisted coding patterns
- facilitators who need a reusable workshop kit
- teams exploring safe agent adoption

For technical rooms, lean harder into evaluation, orchestration, error correction, and deployment handoff. For beginner rooms, protect setup, Markdown memory, agent roles, and the featured project.

## Learning Outcomes

By the end, attendees should be able to:

- install and verify OpenClaw
- explain OpenClaw as a gateway, dashboard, workspace, and operator loop
- create a Markdown memory note that improves future agent work
- write a focused agent role with boundaries and expected output
- turn a project idea into an agent task list
- evaluate agent output against a simple contract
- use a runner or reviewer loop to catch failures
- distinguish live workshop scope from roadmap scope
- leave with one 30-day build goal

## Curriculum Ladder

### 1. First Success

The first win is non-negotiable:

- OpenClaw installed
- provider configured
- gateway running
- dashboard open
- first response received

Primary lab: [First success](../labs/first-success.md)

Install paths:

- [Mac OpenClaw setup](../setup-guides/openclaw-mac.md)
- [Windows OpenClaw setup](../setup-guides/openclaw-windows.md)
- [AI-assisted OpenClaw install](../setup-guides/ai-assisted-openclaw-install.md)
- [Microsoft Foundry key setup](../setup-guides/microsoft-foundry.md)

### 2. Markdown Memory

Attendees learn that agents need visible context, not vague intent.

Teach:

- Markdown source versus rendered view
- OpenClaw workspace notes
- task lists as agent plans
- public safety before sharing

Primary modules and labs:

- [Markdown thinking layer](modules/markdown-thinking-layer.md)
- [Markdown memory loop](../labs/memory-loop.md)

### 3. Agent Roles

The workshop shifts from one assistant to a small agent team.

Core roles:

- Market Researcher
- Idea Validator
- Project Manager
- Coder
- Outreach Assistant

Primary section: [Agent roles](agent-roles/README.md)

### 4. Contracts and Evaluations

Attendees learn that useful agents need output contracts and tests.

Teach:

- expected structure
- deterministic checks
- reviewer rubrics
- edge cases
- pass/fail summaries

Primary module and lab:

- [Agent contracts and evaluations](modules/agent-contracts-and-evals.md)
- [Agent contract evaluation](../labs/agent-contract-evaluation.md)

### 5. Orchestration and Repair

Attendees learn how multiple specialized agents can collaborate without giving every agent every capability.

Teach:

- human orchestration
- least-privilege roles
- runner/reviewer separation
- failure reports
- diagnosis notes
- next-iteration patch plans

Primary module and lab:

- [Orchestration and repair loops](modules/orchestration-and-repair-loops.md)
- [Orchestrated repair loop](../labs/orchestrated-repair-loop.md)

### 6. Product Build

The featured project makes the workflow concrete.

Primary project:

- [Beaver Badges](../projects/beaver-badges/README.md)

The goal is not to build a giant app. The goal is to show how agent roles produce better product decisions, cleaner documentation, and a smaller path to a working demo.

### 7. Handoff

Close with a practical continuation plan:

- what memory files to keep
- which agent role to improve first
- what contract or test to add next
- what to avoid publishing
- what to ship in 30 days

## Recommended Paths

### Half-Day Beginner Path

1. First success
2. Markdown thinking layer
3. Markdown memory loop
4. Agent roles
5. Beaver Badges README improvement
6. 30-day build goal

### One-Day Standard Path

1. First success
2. Markdown memory
3. Agent roles
4. Agent contract evaluation
5. Beaver Badges build
6. Orchestrated repair loop
7. Showcase and handoff

### Advanced Engineering Path

1. First success
2. Agent contracts and evaluations
3. Orchestration and repair loops
4. Context and cost review
5. Tool boundaries and safety
6. Deployment handoff discussion

## Facilitator Rule

When the room is behind, cut depth before cutting the first working loop.

Protect:

- first response
- Markdown memory file
- one useful agent instruction
- one evaluation or review checkpoint
- one next step

