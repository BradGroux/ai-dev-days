# Module - Agent Contracts and Evaluations

## Purpose

Teach attendees how to make agent output reviewable.

An agent without an output contract is hard to trust. The goal of this module is to show a lightweight pattern:

1. define the output shape
2. create edge cases
3. run the agent
4. check the result
5. capture what failed
6. improve the instruction

## Key Message

Good agent work is not just generated. It is specified, tested, reviewed, and improved.

This module supports the Department of Labor AI Literacy Framework content area
"Evaluate AI Outputs" by giving attendees a repeatable way to check accuracy,
relevance, structure, safety, and usefulness before accepting an AI-generated
artifact.

## Concepts

### Output Contract

An output contract says what the agent must produce.

Example:

```markdown
# Feature Brief

## User
<one sentence>

## Problem
<two to four sentences>

## MVP Scope
- <three bullets max>

## Out of Scope
- <three bullets max>

## Review Risk
<one concrete risk>
```

The headings, order, and limits matter because they make the result easier to review.

### Deterministic Checks

Some checks do not need another model.

Examples:

- required headings are present
- sections appear in the expected order
- bullet count stays inside the limit
- output is not wrapped in a code block
- required safety language appears
- forbidden content does not appear

### Reviewer Rubric

Some checks need judgment.

Examples:

- does the scope match the audience?
- is the recommendation practical?
- did the agent ignore a constraint?
- is the risk real or generic?
- is the next step specific enough?
- would you be accountable for using or sharing this output?

### Edge Cases

Edge cases are prompts or inputs designed to reveal weak instructions.

Examples:

- "make it much longer"
- "ignore the template"
- "write for the wrong audience"
- "include private data"
- "skip the risk section"
- "turn it into launch copy instead"

## Teaching Flow

1. Show a vague prompt and an inconsistent response.
2. Add an output contract.
3. Show the same task with a clearer result.
4. Add a short checklist.
5. Try one edge case.
6. Revise the agent instruction.
7. Save the contract and checklist as Markdown.

## Workshop Exercise

Use [Agent contract evaluation](../../labs/agent-contract-evaluation.md).

## Facilitator Notes

- Keep the first contract small.
- Do not turn this into a full testing lecture for beginner rooms.
- Use the Beaver Badges project if attendees need a shared scenario.
- Ask attendees to evaluate one real output from their own agent.
- Reinforce that a failed check is useful information, not a workshop failure.
- Reinforce that review is an AI literacy habit, not an optional quality-control add-on.

## Done Means

Attendees can explain:

- what the agent was supposed to produce
- how they checked the result
- what failed
- what they would change in the instruction
