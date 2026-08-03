# Prompt Pack

Use these prompts with the repo-backed demo files under [`demo/`](demo/). Keep examples sanitized.

## Demo Files

- [`demo/sample-public-notes.md`](demo/sample-public-notes.md)
- [`demo/creator-content-pack-memory.md`](demo/creator-content-pack-memory.md)
- [`demo/creator-content-pack-prd.md`](demo/creator-content-pack-prd.md)
- [`demo/creator-content-pack-sop.md`](demo/creator-content-pack-sop.md)

## Demo Memory Starter

```markdown
# Creator Demo Memory

## Goal
Turn public-safe Microsoft Build week notes into a reusable creator content pack.

## Audience
Technical creators, builders, and operators who care about practical AI workflows.

## Source Notes
- I am giving a short OpenClaw demo at GitHub HQ.
- The message is: context, access, integrations, and verification matter.
- The output should be practical, not hype-heavy.

## Data Boundary
Use public-safe notes only.
Do not use private DMs, sponsor terms, attendee contact data, unreleased announcements, credentials, private customer information, or anything that should not be published.

## Desired Output
A short recap post and a 3-minute video segment outline.
```

## 1. Clarify Before Drafting

```text
Read the Creator Content Pack Memory, PRD, SOP, and sample public notes.

Before drafting anything, ask three clarifying questions that would help you produce useful creator content safely.

Do not ask for secrets, private DMs, sponsor terms, attendee contact data, unreleased announcements, credentials, or customer information.
```

## 2. Content Planner

```text
Act as a Content Planner.

Using the Creator Content Pack Memory, PRD, SOP, sample public notes, and my answers, map the smallest useful content plan.

Return:
1. the core audience,
2. the main point,
3. the artifact list,
4. the source notes needed,
5. the review checklist,
6. anything that should stay out of the content.

Keep it practical and concise.
```

## 3. Safety Reviewer

```text
Act as a Safety Reviewer.

Review the proposed content plan against the SOP before anything is drafted.

Return:
1. data that must stay out,
2. claims that require verification,
3. risks of overclaiming,
4. public-safe wording guidance,
5. what a human must approve before publishing.

If the plan requires private or sensitive information, reject that part and suggest a safer substitute.
```

## 4. Draft One Artifact

```text
Act as a practical technical creator.

Draft one public-safe recap post from the approved content plan.

Constraints:
- keep it under 180 words,
- no hype-heavy wording,
- no private names unless already public,
- no unreleased announcements,
- include the idea that OpenClaw makes context, access, integrations, and verification visible,
- end with a useful follow-up path to the SSTB Discord.
```

## 5. Verification Reviewer

```text
Act as a skeptical Verification Reviewer.

Review the draft and identify:
1. factual assumptions,
2. names, links, or dates to verify,
3. wording that sounds too promotional,
4. sensitive details that should be removed,
5. human approval checks before publishing.

Return a short checklist, not a rewrite.
```
