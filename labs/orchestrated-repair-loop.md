# AI Dev Days Lab - Orchestrated Repair Loop

## Purpose

Practice a small builder-reviewer-diagnoser loop using Markdown artifacts.

This lab works even when attendees are not ready to run code.

AI literacy focus: evaluate AI outputs, repair failures, and keep the human responsible for acceptance.

## Done Means

- a builder creates an artifact
- a reviewer finds at least one issue
- a diagnoser writes a patch plan
- the builder creates a second version
- the human decides whether to accept it

## Step 1 - Create the Builder Prompt

Ask OpenClaw:

```text
Act as the Coder agent for Beaver Badges, but do not write code yet. Create a concise implementation plan for a visit-streak feature. Use headings for Goal, Data Needed, UI Changes, Logic, and Risks.
```

Save the result as `visit-streak-plan-v1.md`.

## Step 2 - Create the Review Contract

Create `visit-streak-review-contract.md`:

```markdown
# Visit Streak Review Contract

The plan must include:

- a clear user goal
- the data needed to track streaks
- one UI change
- one logic rule for continuing a streak
- one logic rule for breaking a streak
- one risk
- no database requirement for the workshop MVP
- no social-sharing requirement for the workshop MVP
```

## Step 3 - Ask for a Reviewer Pass

Prompt:

```text
Act as the Reviewer. Read visit-streak-plan-v1.md and visit-streak-review-contract.md. Write visit-streak-review.md with:

## Result
PASS or FAIL

## Missing or Weak Items
- bullets

## Evidence
- quote or summarize the specific issue
```

## Step 4 - Ask for Diagnosis

If the review fails, prompt:

```text
Act as the Diagnoser. Read visit-streak-plan-v1.md and visit-streak-review.md. Write visit-streak-diagnosis.md with:

## Failure Signature
<short name>

## Root Cause
<two to four sentences>

## Patch Plan
- imperative repair step
- imperative repair step

## Regression Risk
<one thing to watch>
```

If the review passes, ask the reviewer to invent one realistic edge case and continue anyway.

## Step 5 - Ask Builder for Version 2

Prompt:

```text
Act as the Builder again. Read visit-streak-plan-v1.md, visit-streak-review.md, and visit-streak-diagnosis.md. Create visit-streak-plan-v2.md by applying the Patch Plan. Keep the workshop MVP small.
```

## Step 6 - Human Decision

Create `visit-streak-decision.md`:

```markdown
# Visit Streak Decision

## Decision
Accept / revise / defer

## Why

## What I Verified

## What I Will Not Ship Yet

## Next Action
- [ ] 
```

## Reflection

Answer:

```text
What did the repair loop catch that a single prompt might have missed?
```
