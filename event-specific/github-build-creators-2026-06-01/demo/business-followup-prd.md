# PRD: Business Follow-Up Packet Demo

## Problem

Business conversations often end with scattered notes and vague next steps. A generic prompt can draft a polished email, but it may invent commitments, expose private details, or skip verification.

## Goal

Use OpenClaw to turn public-safe conversation notes into a small, reviewable follow-up packet.

## Audience

- founders
- operators
- consultants
- creator-business owners
- technical leaders
- builders explaining OpenClaw to business stakeholders

## User Story

As a founder or operator, I want to turn public-safe conference conversation notes into a follow-up email and action checklist so I can move the opportunity forward without leaking private details or overpromising.

## Scope

In scope:

- summarize public-safe notes
- draft a short follow-up email
- create an internal action checklist
- identify assumptions that need human confirmation
- identify sensitive or unsupported details to exclude
- require human review before sending

Out of scope:

- sending the email
- scheduling a meeting automatically
- using real contact details
- quoting prices or contract terms
- promising integrations, delivery dates, or outcomes not supported by the notes
- using private customer records, DMs, credentials, or unreleased announcements

## Inputs

- [`sample-public-business-followup-notes.md`](sample-public-business-followup-notes.md)
- [`business-followup-memory.md`](business-followup-memory.md)
- [`business-followup-sop.md`](business-followup-sop.md)

## Acceptance Criteria

- The agent asks clarifying questions before drafting.
- The follow-up email is under 140 words.
- The packet includes a 5-item internal action checklist.
- The packet clearly marks assumptions for human confirmation.
- The packet excludes private, unsupported, or invented details.
- The packet says human approval is required before sending.
- The output is clearly marked draft-only.

## Quality Bar

The output should feel like a practical founder/operator follow-up, not a generic sales email or product pitch.
