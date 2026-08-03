# PRD: Creator Content Pack Demo

## Problem

Creators often leave events with scattered notes, rough ideas, and no durable workflow for turning those notes into useful content.
A generic prompt can produce words quickly, but it does not preserve context, enforce boundaries, or make review easy.

## Goal

Use OpenClaw to turn public-safe event notes into a small, reviewable creator content pack.

## Audience

- technical creators
- developer advocates
- podcast hosts
- newsletter writers
- builders documenting what they learn during Microsoft Build week

## User Story

As a technical creator, I want to turn public-safe event notes into a recap and short video outline so I can publish useful content without exposing private information or inventing details.

## Scope

In scope:

- summarize public-safe event notes
- create a short recap post
- create a 3-minute video segment outline
- create a verification checklist
- include a follow-up path to the SSTB Discord

Out of scope:

- publishing directly to social media
- reading private DMs
- using sponsor terms or private business agreements
- using attendee contact data
- using unreleased announcements
- generating claims that are not grounded in the source notes

## Inputs

- [`sample-public-notes.md`](sample-public-notes.md)
- [`creator-content-pack-memory.md`](creator-content-pack-memory.md)
- [`creator-content-pack-sop.md`](creator-content-pack-sop.md)

## Acceptance Criteria

- The agent asks clarifying questions before drafting.
- The recap is under 180 words.
- The video outline fits a 3-minute segment.
- The draft does not include private or unreleased information.
- The draft mentions context, access, connectivity, and verification.
- The verification checklist names facts, links, and claims to check before publishing.
- The final output is clearly marked as draft-only.

## Quality Bar

The content should sound like a practical technical creator, not a generic product announcement.
