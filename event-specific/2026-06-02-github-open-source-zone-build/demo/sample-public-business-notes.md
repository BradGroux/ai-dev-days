# Sample Public-Safe Business Notes

These are synthetic notes for a conference-floor demo. They are not from a real customer.

## Scenario

A small software team wants to test an AI-assisted support workflow for internal product questions.

## Current State

- Product questions arrive through chat, standup notes, and GitHub issues.
- Answers are inconsistent because context is spread across docs, issue comments, and team memory.
- The team wants a draft response workflow, not automatic posting.
- The operations lead wants a task board for follow-up work.
- The engineering lead wants clear approval before anything touches production systems.

## Desired First Win

Create a repeatable draft-only workflow:

1. collect sanitized question context
2. check known docs and public-safe notes
3. draft an answer
4. list assumptions and missing facts
5. create follow-up tasks for gaps
6. require human approval before sending anything

## Public-Safe Constraints

- no private customer records
- no credentials
- no private employee data
- no contract terms
- no unreleased product names
- no automatic external sends
