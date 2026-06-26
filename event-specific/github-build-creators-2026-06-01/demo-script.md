# Demo Script

This is the presenter runbook for the live portion of the GitHub Build creator pre-day OpenClaw demo.

## Recommended Scenario

Creator conference recap to reusable content pack.

The scenario is safe for a technical creator audience because it is concrete, easy to understand, and does not require private data.

Optional variant: use [`business-use-case-quick-demo.md`](business-use-case-quick-demo.md)
if the room is more interested in founder/operator follow-up than creator
content.

## Universal Demo Pattern

Use the same pattern from the prior InfraGard deck, shortened for the 10-minute slot:

1. **Memory Builder:** create sanitized Markdown context.
2. **Content Planner:** map the desired output set.
3. **Safety Reviewer:** define what must not be exposed or automated.
4. **Drafting Role:** create one useful draft artifact.
5. **Verification Reviewer:** challenge assumptions and list human checks.

## Setup

Open a clean demo workspace with no private files. Use the checked-in demo files:

- [`demo/sample-public-notes.md`](demo/sample-public-notes.md)
- [`demo/creator-content-pack-memory.md`](demo/creator-content-pack-memory.md)
- [`demo/creator-content-pack-prd.md`](demo/creator-content-pack-prd.md)
- [`demo/creator-content-pack-sop.md`](demo/creator-content-pack-sop.md)
- [`demo/expected-output.md`](demo/expected-output.md)

Use a sanitized example:

- event: Microsoft Build week
- topic: OpenClaw and practical agent workflows
- audience: technical creators and builders
- desired artifact: short recap post plus video segment outline
- data boundary: no private DMs, sponsor terms, attendee contact data, unreleased announcements, credentials, or customer information

## 10-Minute Run Sequence

1. Show [`demo/creator-content-pack-memory.md`](demo/creator-content-pack-memory.md).
2. Show the PRD acceptance criteria in [`demo/creator-content-pack-prd.md`](demo/creator-content-pack-prd.md).
3. Show the safety method in [`demo/creator-content-pack-sop.md`](demo/creator-content-pack-sop.md).
4. Run [1. Clarify Before Drafting](prompt-pack.md#1-clarify-before-drafting).
5. Answer with simple generic choices:
   - Output: recap post and 3-minute video outline.
   - Tone: practical, technical, not hype-heavy.
   - Boundary: use only public-safe notes.
6. Run [2. Content Planner](prompt-pack.md#2-content-planner).
7. Run [3. Safety Reviewer](prompt-pack.md#3-safety-reviewer).
8. Run [4. Draft One Artifact](prompt-pack.md#4-draft-one-artifact).
9. Run [5. Verification Reviewer](prompt-pack.md#5-verification-reviewer).

## Presenter Talking Points While Output Streams

- The model is not the whole product. The workflow matters.
- Markdown gives both the human and the agent a shared memory layer.
- Roles make output less generic.
- Boundaries keep the agent from asking for unsafe data.
- Verification is part of the job, not cleanup after the fact.

## Expected Output

- Clarifying questions before content generation.
- A small output plan with audience, channels, and artifact list.
- A safety boundary that rejects private or unreleased information.
- One draft recap or video outline.
- A verification checklist for facts, links, names, claims, and missing context.

## Fallback If Live Generation Is Slow

Say:

> The exact words matter less than the operating pattern: context, role, boundary, artifact, verification.

Then narrate the expected output using the bullets above.

If you want a concrete fallback artifact, open [`demo/expected-output.md`](demo/expected-output.md).

## Do Not Demo

- connecting a live social account
- sending a message
- scraping private DMs
- using private sponsor terms
- exposing API keys, customer data, or unreleased Build announcements
- editing production content without review
