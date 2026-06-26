# Demo Script

This is the simplest hands-on OpenClaw path for the H.U.G. workshop. It is
safe to run as a live demo or use as a presenter-machine fallback.

## Outcome

Create a small reading-support research agent that turns public or sanitized
source notes into a reviewed brief for educators and nonprofit leaders.

The demo proves the process, not the model: safe sources, memory, instructions,
draft output, skeptical review, then a human decision.

## 1. Install OpenClaw

Mac:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
openclaw --version
```

Windows PowerShell:

```powershell
iwr -useb https://openclaw.ai/install.ps1 | iex
openclaw --version
```

## 2. Onboard And Choose A Model Provider

```bash
openclaw onboard --install-daemon
openclaw doctor
openclaw gateway status
openclaw dashboard
```

Use whichever model provider the attendee already has access to, or the
provider Arnold designates for the workshop.

## 3. Create A Local Workspace

```bash
mkdir hug-reading-research-agent
cd hug-reading-research-agent
mkdir memory sources output
```

## 4. Add Memory

Create `memory/hug-reading-research.md`:

```md
# H.U.G. Reading Research Agent Memory

## Purpose

Help educators and nonprofit leaders turn public reading-support research into
plain-English briefs, checklists, and workshop ideas.

## Data Boundary

Use public, fictional, or sanitized information only. Do not use private
student data, donor records, staff records, credentials, or confidential notes.

## Preferred Output

- short executive summary
- evidence table
- practical classroom or volunteer-support ideas
- risks and review notes
- next questions for a human expert
```

## 5. Add Agent Instructions

Create `AGENTS.md`:

```md
# H.U.G. Reading Research Agent

You help educators and nonprofit leaders review public reading-support
materials.

## Rules

- Use only the sources provided in this workspace or public links the user approves.
- Never ask for private student data, donor data, staff records, credentials, or confidential notes.
- Separate facts from recommendations.
- Call out assumptions and missing evidence.
- Treat all output as a draft for human review.
- Before finalizing, run a skeptical self-review.

## Output Format

Return:

1. Summary
2. Evidence
3. Practical Ideas
4. Risks And Limits
5. Human Review Checklist
```

## 6. Ask The First Agent Question

Paste into OpenClaw:

```text
Read AGENTS.md and memory/hug-reading-research.md.

Act as the H.U.G. Reading Research Agent.

Create a brief for a nonprofit reading-support team that wants to understand
how AI could help volunteers prepare tutoring materials, summarize public
research, and draft reading-support activities.

Use public or sanitized examples only.
First ask me for the source notes or public links I want you to use.
```

## 7. Review Before Trusting

Use the review prompt from [prompt-pack.md](prompt-pack.md#3-review-the-brief)
before sharing or acting on the output.

If the output would later appear in Discord, Teams, WhatsApp, Telegram, Signal,
email, or a public document, a human must approve it first.

## Stop Conditions

Stop the live demo and switch to explanation if:

- install takes longer than 10 minutes,
- provider setup fails twice,
- a prompt starts asking for private data,
- attendees are stuck on account access,
- the panel schedule is running short.
