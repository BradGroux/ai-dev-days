# SOP: Build A Public-Safe Creator Content Pack

## Purpose

Turn public-safe event notes into creator content without exposing sensitive information or publishing unreviewed output.

## Prerequisites

- A clean OpenClaw demo workspace.
- Public-safe notes in Markdown.
- A PRD that defines the target output and boundaries.
- No private DMs, credentials, sponsor terms, attendee contact data, customer records, unreleased announcements, or private operational details in the workspace.

## Steps

1. Open [`creator-content-pack-memory.md`](creator-content-pack-memory.md).
2. Open [`creator-content-pack-prd.md`](creator-content-pack-prd.md).
3. Ask the agent to clarify before drafting.
4. Ask the agent to plan against the PRD.
5. Ask the agent to apply this SOP as the safety boundary.
6. Ask for one draft artifact first, not the entire content campaign.
7. Ask the Verification Reviewer to challenge assumptions and list checks.
8. Review the output manually before using it.

## Stop Conditions

Stop the run if the agent:

- asks for private or sensitive information
- invents facts, dates, names, or links
- suggests live publishing
- expands into broad automation without approval
- ignores the PRD or data boundary

## Verification Checklist

- Source notes support the claim.
- Names, dates, locations, and links are correct.
- No private or unreleased details appear in the draft.
- Tone is practical and not hype-heavy.
- The draft is clearly marked as draft-only.
- A human has approved the content before publishing.

## Handoff

Save useful output back into the workspace as Markdown so the next agent run can reuse the context.
