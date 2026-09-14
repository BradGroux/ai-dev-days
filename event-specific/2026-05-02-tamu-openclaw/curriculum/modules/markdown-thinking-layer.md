# Module — Markdown as the Thinking Layer

## Purpose

Teach Markdown as the first practical bridge between people, models, agents, GitHub, Obsidian, and OpenClaw workspace memory.

This first-hour segment is a discussion with a few screenshots, not a live hands-on demo. The point is not formatting trivia. The point is that Markdown makes thinking legible, reusable, and easy for both humans and agents to inspect.

## First-hour framing

Use this sequence during the opening hour:

1. Models do not think like humans. They work from context.
2. Agents become useful when context is explicit, structured, and durable.
3. Markdown is plain text with enough structure to guide both people and models.
4. OpenClaw uses Markdown-style files for durable context, including persona, memory, instructions, and workspace notes.
5. GitHub uses Markdown for READMEs, issues, pull requests, and project docs.
6. Obsidian uses Markdown for personal knowledge, connected notes, and long-running memory.
7. The data people create with their agents becomes valuable only when it is captured, structured, and reusable.

## Key message

Markdown is the shared operating layer for the workshop.

- Humans can read it.
- Agents can parse it.
- GitHub can render it.
- Obsidian can organize it.
- OpenClaw can use it as durable context.

This module supports the Department of Labor AI Literacy Framework content area "Direct AI Effectively" by teaching attendees to provide context, constraints, examples, and task structure in a durable format.

## What to show in screenshots

Keep this visual and fast. Use screenshots instead of live editing during the first hour.

Suggested screenshots:

Reference checklist: `curriculum/modules/markdown-screenshot-checklist.md`.


1. A simple Markdown file rendered in GitHub.
2. The raw Markdown source for that same file.
3. OpenClaw-style Markdown context files, such as persona, memory, instructions, or workspace notes.
4. An agent instruction file with role, boundaries, and expected output.
5. A Markdown task list that becomes an agent work plan.
6. The same or similar Markdown note opened in Obsidian.

## Minimum syntax to explain

Keep this tight. Attendees only need enough syntax to understand the screenshots and later create useful structure.

```markdown
# Heading 1
## Heading 2

- Bullet item
- Another item

1. First step
2. Second step

- [ ] Task to do
- [x] Task completed

**Important note**

`inline code`

```text
A prompt, command, or example block goes here.
```

[Useful link](https://example.com)
```

## Discussion flow

1. Show a messy project note.
2. Show the same note as Markdown with headings, bullets, tasks, and a prompt block.
3. Explain that the rendered version is easier for a person to scan.
4. Explain that the raw Markdown gives an agent clearer structure.
5. Show OpenClaw context files as examples of durable agent memory and instructions.
6. Show a task list becoming an agent work plan.
7. Show Obsidian as the place where Markdown grows into a personal knowledge base.
8. Mention GitHub as the place where Markdown becomes public project documentation.

## Safety checkpoint

Before using GitHub or shared repositories, say this clearly:

Do not put secrets, API keys, private data, client information, sensitive personal notes, or anything confidential in a public repository or shared note.

When in doubt, keep it local.

This also supports the framework content area "Use AI Responsibly": the person operating the tool remains accountable for what is shared, saved, and reused.

## Later hands-on exercise

The first hands-on Markdown artifact should live in the attendee's OpenClaw workspace.

Create `workshop-memory.md`:

```markdown
# My OpenClaw Workshop Memory

## Goal
I want to build or improve: ...

## Context
- My role:
- My project or idea:
- My biggest friction point:

## Data I create with agents
- Prompts that worked:
- Decisions I made:
- Useful outputs worth saving:

## Constraints
- Time:
- Tools:
- Data I should not expose:

## First agent instruction
- Agent name:
- Role:
- Boundaries:
- First useful task:

## Task list for the agent
- [ ] Clarify the goal
- [ ] Propose a plan
- [ ] Identify one risk
```

Then ask OpenClaw:

```text
Read my workshop-memory.md file and help me turn it into a first agent instruction and task list. Ask me three questions before you propose the plan.
```

## GitHub video follow-up

Optional prep/follow-up resource:

- GitHub — Getting started with Markdown on GitHub: https://www.youtube.com/watch?v=LxeclcePg-c

Thank the GitHub team for making approachable learning material that helps new builders understand Markdown quickly.

## Facilitator notes

- Do not over-teach syntax.
- Do not run a live Markdown editing demo during the first hour; use screenshots and discussion.
- Install Obsidian during the prerequisite/setup block, not during the first-hour concept discussion.
- Treat Obsidian as proof that Markdown notes can grow into a knowledge system.
- Treat GitHub as proof that Markdown can become public project documentation.
- Keep the first created file in the OpenClaw workspace.
- Emphasize that agent-created data is valuable when captured, reviewed, and reused.
- Use task lists as the bridge from notes into agent work plans.
- Keep the first win local and safe before anything is published.
- Tie the module back to AI literacy: clear context is a core skill, not clerical cleanup.
