# PRD: Business Operating Packet Demo

## Problem

Business teams often ask AI tools for an answer before giving them enough context, boundaries, or acceptance criteria. The result is fast but hard to trust.

The demo should show that OpenClaw-style workflows can make the work more useful by starting with context, defining boundaries, producing a draft artifact, and verifying the output.

## Goal

Use synthetic business notes to create a draft operating packet and Veritas-ready task map.

## User Story

As a business operator, I want an agent to turn sanitized workflow notes into a clear operating packet and task map so I can review next steps without exposing private data or triggering external actions.

## Scope

In scope:

- ask clarifying questions before planning
- summarize the objective
- identify decisions and risks
- define approval gates
- create Veritas-ready task cards
- produce a verification checklist

Out of scope:

- sending customer or employee messages
- reading private company systems
- using credentials or tokens
- publishing content
- creating real tasks in a live external system
- claiming final business decisions

## Inputs

- [sample-public-business-notes.md](sample-public-business-notes.md)
- [business-ops-memory.md](business-ops-memory.md)
- [business-ops-sop.md](business-ops-sop.md)

## Acceptance Criteria

- The agent asks clarifying questions before drafting.
- The operating packet is concise and grounded in the notes.
- Missing information is labeled as a placeholder or verification item.
- The task map has 5 to 7 Veritas-ready cards.
- Each task has acceptance criteria and evidence needed.
- Approval gates are explicit.
- Output is marked draft-only.
- No private data, credentials, or external actions are used.

## Quality Bar

The output should sound like an operator preparing real work for review, not a generic AI transformation pitch.
