# SOP: Build A Public-Safe Business Follow-Up Packet

## Purpose

Turn public-safe business conversation notes into a draft follow-up packet without exposing sensitive information, inventing commitments, or taking external action.

## Prerequisites

- Clean demo workspace.
- Public-safe notes in Markdown.
- PRD defining target output and boundaries.
- No private DMs, credentials, contact records, pricing, contracts, customer data, unreleased announcements, or private operational details in the source notes.

## Steps

1. Open [`business-followup-memory.md`](business-followup-memory.md).
2. Open [`business-followup-prd.md`](business-followup-prd.md).
3. Open [`sample-public-business-followup-notes.md`](sample-public-business-followup-notes.md).
4. Ask the agent to clarify before drafting.
5. Ask for the smallest useful packet: follow-up email, internal checklist, assumptions, exclusions, approval checks.
6. Ask a Verification Reviewer to challenge the packet before any send.
7. Review manually before using anything externally.

## Stop Conditions

Stop the run if the agent:

- asks for private or sensitive information
- invents names, dates, prices, commitments, features, or outcomes
- suggests sending, scheduling, posting, or changing external systems automatically
- includes private contact details
- ignores the PRD or data boundary
- turns the packet into a hype-heavy sales pitch

## Verification Checklist

- Source notes support every claim.
- No real names, contact details, pricing, contracts, credentials, customer data, or unreleased information appear.
- No delivery promises or unsupported capability claims appear.
- Tone is concise, practical, and not salesy.
- The output is clearly draft-only.
- A human has approved the packet before sending.

## Handoff

Save useful output back into the workspace as Markdown only after review. Do not send externally from the live demo.
