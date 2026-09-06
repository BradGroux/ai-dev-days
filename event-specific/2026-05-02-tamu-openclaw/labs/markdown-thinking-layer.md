# OpenClaw Dev Days Lab — Markdown Thinking Layer

## Purpose

Turn Markdown from an abstract idea into a working OpenClaw context file.

By the end of this lab, attendees should understand that Markdown is not just formatting. It is a practical thinking layer that humans can read, agents can use, GitHub can render, and Obsidian can organize.

## Timing

Use this after attendees have:

- created an OpenClaw workspace folder
- installed or confirmed Obsidian
- launched OpenClaw successfully
- received at least one response from OpenClaw

Do not run this as the first-hour Markdown/Obsidian discussion. The first-hour segment should remain screenshots and explanation only.

## Prerequisites

- OpenClaw running
- access to the attendee's OpenClaw workspace folder
- a Markdown editor, VS Code, or Obsidian
- basic understanding of the project idea or goal they want to explore

## Safety checkpoint

Before writing or sharing anything, read this out loud:

Do not put secrets, API keys, private data, client information, sensitive personal notes, or anything confidential in a public repository, shared file, screenshot, or projected prompt.

When in doubt, keep it local.

## Step 1 — Create `workshop-memory.md`

In your OpenClaw workspace, create:

```text
workshop-memory.md
```

Add this starter structure:

```markdown
# My OpenClaw Workshop Memory

## Goal
I want to build or improve: ...

## Why it matters
This is useful because: ...

## Context
- My role:
- My project or idea:
- My biggest friction point:
- My technical comfort level:

## Data I create with agents
- Prompts that worked:
- Decisions I made:
- Useful outputs worth saving:
- Things I want the agent to remember next time:

## Data I should not expose
- Secrets/API keys:
- Private data:
- Sensitive notes:
- Anything I should keep out of public repos:

## First agent instruction
- Agent name:
- Role:
- Boundaries:
- First useful task:

## Task list for the agent
- [ ] Clarify the goal
- [ ] Ask three qualifying questions
- [ ] Propose a short plan
- [ ] Identify one risk
- [ ] Suggest the next useful artifact
```

## Step 2 — Ask OpenClaw to use the file

Prompt OpenClaw:

```text
Read my workshop-memory.md file and use it as context.

Before you propose a plan, ask me three qualifying questions.

After I answer, help me create:
1. a sharper project goal,
2. one useful agent instruction,
3. a Markdown task list the agent can work from,
4. one thing I should save for future memory.
```

## Step 3 — Answer the qualifying questions

Answer in plain language. Do not overthink it.

Good answers include:

- who the work is for
- what problem you are solving
- what kind of output you need
- what data is safe to use
- what should stay private
- what “done” looks like

## Step 4 — Save the improved output

Create a second file:

```text
agent-plan.md
```

Use this structure:

```markdown
# Agent Plan

## Project goal
...

## Agent instruction
...

## Task list
- [ ] ...
- [ ] ...
- [ ] ...

## Risk to watch
...

## Memory worth saving
...
```

## Step 5 — Open it in Obsidian

Open the workspace folder or note folder in Obsidian.

Show attendees:

- Markdown source is still plain text
- headings become structure
- task lists remain useful
- notes can become connected over time
- agent outputs can become reusable knowledge instead of disposable chat

## Step 6 — Optional GitHub README connection

If the attendee is comfortable with GitHub, show how the same Markdown habits apply to project documentation.

Ask OpenClaw:

```text
Using my agent-plan.md, draft a simple README outline for this project.
Keep it public-safe and do not include private data.
```

The README outline should include:

- what the project is
- who it helps
- how to run it or explore it
- what the MVP includes
- what comes next

## Done means

- `workshop-memory.md` exists in the OpenClaw workspace
- OpenClaw used the Markdown file as context
- OpenClaw asked qualifying questions before proposing a plan
- `agent-plan.md` exists
- the attendee can explain how Markdown helped the agent produce better output
- the attendee understands what not to publish publicly

## Facilitator notes

- Keep this lab focused on structure, not Markdown trivia.
- If attendees get stuck, give them the starter template and move on.
- The win is not perfect syntax. The win is durable, reviewable context.
- Reinforce that task lists are a natural bridge from thinking into agent work.
- Reinforce that Obsidian is optional for the agent, but useful for the human.
- Reinforce that GitHub is public by default unless they know otherwise.
