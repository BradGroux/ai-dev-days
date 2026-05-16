# OpenClaw Dev Days Lab — Markdown Memory Loop

## Purpose

Show why OpenClaw is more than a chatbot: it can use durable Markdown context, agent instructions, and task lists to improve future work.

AI literacy focus: practice directing AI effectively with clear context, useful constraints, and a reusable memory artifact.

## Step 1 — Create an OpenClaw workspace folder

Mac/Linux:

```bash
mkdir -p ~/openclaw-dev-days
cd ~/openclaw-dev-days
```

Windows PowerShell:

```powershell
mkdir $HOME\openclaw-dev-days
cd $HOME\openclaw-dev-days
```

## Step 2 — Understand why Markdown matters

Markdown is not just formatting. It is structured plain text that people can read, agents can parse, GitHub can render, and Obsidian can organize.

Before publishing anything to GitHub or a shared workspace, do not include secrets, API keys, private data, client information, or sensitive personal notes.

## Step 3 — Create `workshop-memory.md`

Add:

```markdown
# Workshop Memory

## My goal
I want to build or improve: <your idea>

## My useful context
- My technical comfort level is: <beginner/intermediate/advanced>
- The kind of agent help I want most is: <research/planning/coding/outreach/project management>
- One constraint I have is: <time/tool/access/skill constraint>

## Data I create with agents
- Prompts that worked:
- Decisions I made:
- Useful outputs worth saving:

## First agent instruction
- Agent name:
- Role:
- Boundaries:
- First useful task:

## Task list for the agent
- [ ] Clarify the goal
- [ ] Propose a plan
- [ ] Identify one risk

## Today's next step
The next useful thing for me is: <one action>
```

## Step 4 — Ask OpenClaw to use it

Prompt:

```text
Read my workshop-memory.md note and turn it into a cleaner project goal, a first agent instruction, a task list, and one risk I should watch. Ask me three questions before you propose the plan.
```

## Step 5 — Save the improved result

Create `workshop-goal-summary.md` with:

- cleaned project goal
- three next actions
- one risk
- one decision you made
- one thing you verified or still need to verify

## Done means

- `workshop-memory.md` exists in the OpenClaw workspace
- OpenClaw used the memory context, agent instruction, and task list
- `workshop-goal-summary.md` exists
- attendee can explain how memory changed the answer
- attendee can explain what they still need to review before trusting the output
