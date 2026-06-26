# H.U.G. Reading-Support Agent Workflow: Channel Boundary

## Safest Channel Boundary

**Use: internal document only.**

This workflow should stay in an internal, reviewable workspace document until a qualified human reviewer approves a specific draft for sharing.

## Why This Is Safest

An internal document keeps the workflow low-risk because it:

- avoids accidental public sharing,
- supports human review before use,
- creates a visible audit trail,
- reduces the chance of exposing private student, donor, staff, credential, or confidential information,
- lets reviewers check whether facts, recommendations, assumptions, and limits are clearly separated.

## Boundary Rule

Do not publish, email, message, or present generated briefs externally until a human reviewer confirms:

- the source material is public, fictional, or sanitized,
- no private student data is included,
- no donor records are included,
- no staff records are included,
- no credentials, passwords, API keys, or tokens are included,
- no confidential notes or private meeting links are included,
- facts are separated from recommendations,
- assumptions and limits are named,
- the brief is appropriate for the intended audience.

## Approval Point

**Status:** Draft only — not approved for external use.

A human reviewer should mark a draft as approved before it leaves the internal document channel.

Suggested approval note:

```md
Reviewed by: [Name or role]
Date: [YYYY-MM-DD]
Audience: [volunteers / educators / students / nonprofit leaders / other]
Decision: [approved / revise / do not use]
Notes: [brief review notes]
```

## Prompt History

The following prompt history explains how this workflow was shaped. It is included so future reviewers can see the reasoning and boundaries behind the harness.

### 1. Safety Boundary

User set the safety boundary:

> Use public, fictional, or sanitized examples only. Do not ask me for secrets, API keys, tokens, passwords, private student data, donor records, staff records, confidential notes, private meeting links, or credentials. If you need sensitive details, ask for placeholders instead. Treat all output as a draft for human review.

Assistant acknowledged the boundary and agreed to use only public, fictional, sanitized, or non-sensitive user-provided material.

### 2. Memory File Request

User asked for a Markdown memory file for a reading-support research agent that would help educators, volunteers, nonprofit leaders, and students turn public reading-support materials into plain-English briefs and practical activity ideas.

User required one clarifying question before drafting:

> Which audience matters most today: educators, students, volunteers, donors, or nonprofit leaders?

Assistant asked the required question.

### 3. Audience Selection

User answered:

> volunteers

Assistant created:

```text
memory/volunteer-reading-support-agent.md
```

The file emphasized:

- volunteers as the primary audience,
- plain-English summaries,
- practical low-cost reading activity ideas,
- public, fictional, sanitized, or non-sensitive material only,
- no private student, donor, staff, credential, or confidential data,
- all outputs as drafts for human review.

### 4. Skeptical Review Prompt

User asked the assistant to act as a skeptical reviewer and review a Kaggle whitepaper link for:

1. unsupported claims,
2. missing sources,
3. overconfident recommendations,
4. privacy or student-data risk,
5. missing human review points,
6. unclear next steps.

User instructed:

> Do not rewrite the brief yet. Return "Keep", "Revise", and "Do not use" sections.

Assistant reviewed the linked source and returned those sections, noting that the source was public but not directly relevant to reading-support guidance and should not be used as-is for volunteer literacy guidance.

### 5. AGENTS.md Request

User asked for an `AGENTS.md` file for a local H.U.G. reading-support research workspace.

The agent should:

- summarize public sources,
- produce plain-English briefs,
- separate facts from recommendations,
- flag assumptions,
- avoid private student, donor, staff, credential, or confidential data,
- require human review before use.

Assistant created:

```text
AGENTS.md
```

The file defined the agent role, data boundary, review standard, and default output format.

### 6. Second Skeptical Review

User asked to run the same skeptical review on an arXiv paper:

```text
https://arxiv.org/abs/2511.00592
```

Assistant reviewed the public arXiv source and returned:

- Keep,
- Revise,
- Do not use.

Assistant noted that the paper was public and technically focused on LLM-guided loop optimization, but it was not a reading-support or volunteer literacy source and should not be used as-is for that purpose.

### 7. Minimal Agent Harness Request

User asked:

> Design a minimal agent harness for this workflow.

Required elements:

1. source folder,
2. memory file,
3. AGENTS.md,
4. first prompt,
5. review prompt,
6. approval point,
7. recurring follow-up idea.

Assistant proposed the least structure that works:

```text
hug-reading-support/
├── AGENTS.md
├── memory/
│   └── reading-support-agent.md
├── sources/
│   └── README.md
└── output/
    └── drafts/
```

The harness included:

- source folder rules,
- memory file content,
- AGENTS.md content,
- first drafting prompt,
- skeptical review prompt,
- explicit approval checkpoint,
- monthly follow-up idea.

### 8. Channel Boundary Request

User asked:

> For this agent workflow, pick the safest channel boundary.
>
> Possible channels:
> - internal document
>
> please include the prompt history, in the document so others can see how we got to this point.

Decision:

**The safest channel boundary is internal document only.**

This document records that boundary and preserves the prompt history for review.

## Practical Use Rule

Keep drafts, reviews, and approvals in the internal document channel. If a brief may be shared externally later, create a separate approved copy only after human review.
