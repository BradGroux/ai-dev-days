# TAMU Facilitator Runbook

## Prime directive

Protect the first win. The workshop succeeds when attendees get one working OpenClaw loop, understand Markdown as durable context, and leave with a clear next step.

## Before the room opens

- Confirm projector, audio, and Wi-Fi.
- Open the repo and attendee links page.
- Have the SSTB Discord link ready: https://discord.gg/Gmfkm7QVSF
- Confirm Mac and Windows setup guides are easy to reach.
- Confirm the Beaver Badges app can run from `event-specific/2026-05-02-tamu-openclaw/projects/beaver-badges/app`.
- Prepare screenshots for the first-hour Markdown/Obsidian discussion.
- Prepare rescue/demo machine in case attendee installs stall.

## Discord prerequisite

Confirm attendees can join the Start Small, Think Big Discord during setup. Use it for shared workshop information and questions.

- Invite: https://discord.gg/Gmfkm7QVSF

Safety line to repeat if setup information is shared there:

> Do not post personal API keys, tokens, credentials, private data, or sensitive notes in Discord.

## Opening links to show

- Attendee links: `event-specific/2026-05-02-tamu-openclaw/attendee-links.md`
- SSTB Discord: https://discord.gg/Gmfkm7QVSF
- Agenda: `event-specific/2026-05-02-tamu-openclaw/curriculum/agenda/tamu-2026-05-02.md`
- First success lab: `event-specific/2026-05-02-tamu-openclaw/labs/first-success.md`
- Markdown thinking lab: `event-specific/2026-05-02-tamu-openclaw/labs/markdown-thinking-layer.md`

## Optional Codex/Claude Code support

Some attendees may arrive with Codex CLI or Claude Code access. Point them to:

- `event-specific/2026-05-02-tamu-openclaw/setup-guides/ai-assisted-openclaw-install.md`

Keep this as an optional helper path. Do not let coding-assistant setup block the main OpenClaw install flow.

## Helper lanes

### Green lane

Attendees are moving. Keep them building.

### Yellow lane

Attendees are blocked for less than 10 minutes. Triage quickly.

### Red lane

Attendees are blocked for more than 10 minutes. Move them to observe, pair, or use the rescue/demo path. Do not let one install consume the room.

## First 30-minute success metric

By the end of the setup block, most attendees should have:

- workspace folder created
- OpenClaw installed and onboarded
- Microsoft Foundry provider configured
- dashboard open
- first response received

If the room is behind, cut optional provider setup and messaging demos.

## Markdown/Obsidian first-hour segment

Keep this as screenshots and discussion only.

Show:

- raw Markdown source
- rendered Markdown
- OpenClaw-style context files
- agent instruction file
- task list becoming an agent work plan
- Obsidian note view
- GitHub README rendering

Key line:

> Markdown is how we make thinking legible to both people and agents.

## Public safety checkpoint

Say this before GitHub or public sharing:

> Do not put secrets, API keys, private data, sensitive personal notes, or anything confidential in a public repository, shared file, screenshot, or projected prompt. When in doubt, keep it local.

## Lunch triage plan

Use lunch for:

- account issues
- OpenClaw launch issues
- Microsoft Foundry smoke tests
- GitHub login questions

Do not start live WhatsApp setup during lunch unless the room is already green.

## Drop-if-behind list

Cut these first if time gets tight:

1. Messaging/mobile demo
2. Full Microsoft Foundry troubleshooting
3. Deep Git/GitHub instruction
4. Full five-agent buildout
5. Beaver Badges roadmap discussion

Protect these:

1. First OpenClaw response
2. Markdown thinking lab
3. One useful agent instruction
4. Beaver Badges concept/demo
5. Clear next step into the community

## Closing checklist

Before attendees leave, point them to:

- their `workshop-memory.md`
- their `agent-plan.md`
- Beaver Badges repo/project material
- SSTB Discord
- sstb.ai
- a 30-day build goal
