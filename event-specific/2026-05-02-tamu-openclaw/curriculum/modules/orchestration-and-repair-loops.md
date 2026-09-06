# Module - Orchestration and Repair Loops

## Purpose

Teach attendees how to coordinate multiple agents through a task without turning every agent into an all-powerful assistant.

The pattern is simple:

- one agent creates or changes something
- one agent or tool checks it
- one agent diagnoses failure
- the human decides whether to iterate

## Key Message

Orchestration is not automation for its own sake. It is a way to make work inspectable, recoverable, and safer.

This module supports the Department of Labor AI Literacy Framework content areas
"Evaluate AI Outputs" and "Use AI Responsibly." The repair loop makes failures
visible, keeps the human accountable for acceptance, and limits which agents
receive which tools or context.

## Core Roles

### Orchestrator

The human or lead workflow that decides:

- what matters
- which agent acts next
- whether the output is good enough
- when to stop

### Builder

Creates the first artifact.

Examples:

- feature brief
- README section
- small code change
- task list
- launch copy

### Runner or Reviewer

Checks the artifact.

Examples:

- run a command
- inspect the app
- review against a checklist
- compare against the output contract

### Diagnoser

Turns failure into a repair plan.

The diagnoser should produce:

```markdown
## Failure Signature
<short name for what failed>

## Root Cause
<two to four sentences>

## Evidence
- <specific observation>

## Patch Plan
- <imperative repair step>
- <imperative repair step>

## Regression Risk
<one thing to watch after the fix>
```

## Least-Privilege Teaching Point

Not every agent needs every tool.

Examples:

- a researcher does not need command execution
- a reviewer may only need read access
- a runner may execute commands but should operate in a narrow workspace
- an outreach assistant should not receive secrets or private notes

For beginner rooms, explain this as "give each agent the smallest useful job." For advanced rooms, discuss tool allowlists, workspace boundaries, credential handling, and audit logs.

Responsible AI use in this curriculum means that each agent receives only the context and capabilities needed for the current task, and the human orchestrator decides whether the result is safe enough to keep, share, or ship.

## Repair Loop

Use this loop:

1. Builder creates the artifact.
2. Reviewer checks it against the contract.
3. Reviewer writes a failure report.
4. Diagnoser creates a patch plan.
5. Builder applies the patch plan.
6. Reviewer checks again.
7. Human accepts, revises, or stops.

## Workshop Exercise

Use [Orchestrated repair loop](../../labs/orchestrated-repair-loop.md).

## Facilitator Notes

- Keep the live loop small enough to finish.
- Use Markdown artifacts before code if the room is new.
- Use code only when attendees already have a working development environment.
- Make the failure report concrete.
- Ask attendees what the human should decide before the next iteration.

## Done Means

Attendees can describe:

- who built the artifact
- who checked it
- what failed
- what the repair plan says
- what the human decided
