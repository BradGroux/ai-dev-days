# Prompt Pack

Use these prompts with OpenClaw, Codex, ChatGPT, Claude, GitHub Copilot, or
another approved AI assistant. Replace bracketed text before use.

## 1. Safety Preamble

```text
Safety boundary for this exercise:

Use public, fictional, or sanitized examples only. Do not ask me for secrets,
API keys, tokens, passwords, private student data, donor records, staff
records, confidential notes, private meeting links, or credentials.

If you need sensitive details, ask for placeholders instead.

Treat all output as a draft for human review.
```

## 2. Create The Research Agent Memory

```text
Help me create a Markdown memory file for a reading-support research agent.

The agent will help educators, volunteers, nonprofit leaders, and students
turn public reading-support materials into plain-English briefs and practical
activity ideas.

Before drafting, ask one clarifying question. Recommended question:
Which audience matters most today: educators, students, volunteers, donors, or
nonprofit leaders?

Do not ask for private student data, donor records, staff records, credentials,
or confidential notes.
```

## 3. Review The Brief

```text
Act as a skeptical reviewer.

Review the brief below for:
1. unsupported claims,
2. missing sources,
3. overconfident recommendations,
4. privacy or student-data risk,
5. missing human review points,
6. unclear next steps.

Do not rewrite the brief yet. Return "Keep", "Revise", and "Do not use"
sections.

Brief:
[paste brief]
```

## 4. Create An AGENTS.md File

```text
Create an AGENTS.md file for a local H.U.G. reading-support research workspace.

The agent should:
- summarize public sources,
- produce plain-English briefs,
- separate facts from recommendations,
- flag assumptions,
- avoid private student, donor, staff, credential, or confidential data,
- require human review before use.

Keep it short and practical.
```

## 5. Build The Agent Harness

```text
Design a minimal agent harness for this workflow.

Include:
1. source folder,
2. memory file,
3. AGENTS.md,
4. first prompt,
5. review prompt,
6. approval point,
7. recurring follow-up idea.

Use the least structure that works.
```

## 6. Pick A Channel Boundary

```text
For this agent workflow, pick the safest channel boundary.

Possible channels:
- Discord
- Microsoft Teams
- WhatsApp
- Telegram
- Signal
- email
- internal document

Return:
1. best channel for questions,
2. best channel for reviewed output,
3. what must never be sent there,
4. who approves before anything is shared.
```

## 7. Research-Agent First Run

```text
Read AGENTS.md and memory/hug-reading-research.md.

Act as the H.U.G. Reading Research Agent.

Using the public or sanitized source notes below, create a brief for a
nonprofit reading-support team.

Return:
1. Summary
2. Evidence Table
3. Practical Ideas
4. Risks And Limits
5. Human Review Checklist

Source notes:
[paste public or sanitized notes]
```

## 8. Automation Idea

```text
Suggest one safe recurring automation for this research-agent workflow.

Constraints:
- no private data,
- no sending external messages,
- no public posting,
- no production actions,
- human review required before sharing.

Return:
1. trigger,
2. input,
3. output,
4. review step,
5. stop condition.
```
