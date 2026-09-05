# AI Dev Days Lab — Markdown Memory Loop

## Purpose

Show why OpenClaw is more than a chatbot: it can use durable Markdown context, agent instructions, and task lists to improve future work.

AI literacy focus: practice directing AI effectively with clear context, useful constraints, and a reusable memory artifact.

## Step 1 — Locate the selected workspace

Use the workspace configured for the selected OpenClaw agent, following the
[official workspace guide](https://docs.openclaw.ai/concepts/agent-workspace).
Creating a folder does not configure an agent to use it. Ask a helper to confirm
the selected workspace without projecting configuration or credentials.

If it is unavailable, create the note in a plain-text editor and paste only the
fictional exercise content into the selected chat, or use the
[offline practice](offline-practice.md). Do not broaden filesystem permissions
or change a working agent configuration just to complete the exercise.

## Step 2 — Understand why Markdown matters

Markdown is not just formatting. It is structured plain text that people can read, agents can parse, GitHub can render, and Obsidian can organize.

Use fictional or approved public-safe content only. A local note read by a cloud-backed agent can leave the machine. Never put secrets, API keys, private client data, or sensitive notes in this exercise.

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
Read my workshop-memory.md note (or the fictional note pasted below), quote its goal to confirm the input, and turn it into a cleaner project goal, a first agent instruction, a task list, and one risk I should watch. Ask me three questions before you propose the plan.
```

## Step 5 — Save the improved result

Create `workshop-goal-summary.md` with:

- cleaned project goal
- three next actions
- one risk
- one decision you made
- one thing you verified or still need to verify

## Done means

- `workshop-memory.md` exists and the input route (workspace, safe paste, or offline) is recorded
- the output refers to the supplied goal, instruction, and task list
- `workshop-goal-summary.md` exists
- attendee can describe what changed or remained uncertain
- attendee can explain what they still need to review before trusting the output

Allow 15 minutes: 5 to write, 5 to respond, 5 to review. Stop tool troubleshooting after 5 minutes and take the offline route.
