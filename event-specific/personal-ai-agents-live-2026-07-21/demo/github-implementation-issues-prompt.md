# Prompt: Create GitHub Implementation Issues From The PRD

Use this from the root of the OpenClaw Dev Days repo.

```text
You are creating implementation GitHub issues for the Personal AI Agents LIVE workshop packet.

Read these files first:
- event-specific/personal-ai-agents-live-2026-07-21/PRD.md
- event-specific/personal-ai-agents-live-2026-07-21/README.md
- event-specific/personal-ai-agents-live-2026-07-21/demo/app-output-spec.md
- event-specific/personal-ai-agents-live-2026-07-21/demo/implementation-plan.md
- event-specific/personal-ai-agents-live-2026-07-21/demo/issue-artifacts.md
- event-specific/personal-ai-agents-live-2026-07-21/demo/goal-prompt.md
- event-specific/personal-ai-agents-live-2026-07-21/demo/source-corpus/company-brief.md
- event-specific/personal-ai-agents-live-2026-07-21/demo/source-corpus/stakeholder-brief.md
- event-specific/personal-ai-agents-live-2026-07-21/demo/source-corpus/signals.json

Goal:
Create real GitHub issues for implementing the static E Corp Cyber Escalation Command Center app in this repo.

Before creating issues:
1. Run `git status --short --branch`.
2. Confirm the GitHub remote with `gh repo view --json nameWithOwner,url`.
3. Check existing open issues for duplicates with `gh issue list --state open --limit 100`.
4. Draft the exact issues first.
5. Ask Brad for approval before running any `gh issue create` commands.

Issue set:
Create 8 to 10 scoped implementation issues covering:
1. static app shell under the event packet,
2. app seed data generated from the source corpus,
3. command center queue, filters, and local workflow controls,
4. evidence feed linked to emails, memos, chats, and risk signals,
5. executive brief with heatmap, top risks, blockers, and decisions,
6. fabricated repo/issues page with optional simulated commits and PRs,
7. Build Trace tab showing the artifact chain,
8. local state persistence, export, and reset,
9. workshop presentation artifacts: `slides.html`, `slides.pdf`, and `speaker-notes-45-minute.md`,
10. visual/manual smoke verification and workshop docs update if needed.

For each issue include:
- Title
- Background
- Source files
- Implementation notes
- Acceptance criteria
- Verification commands or manual checks
- Dependencies or ordering
- Suggested labels

Keep issue bodies public-safe:
- no private planning email/thread details,
- no local machine paths,
- no real personal data,
- no operational cyber instructions,
- no live account credentials or tokens.

Suggested labels if they exist:
- `event`
- `demo`
- `frontend`
- `documentation`
- `verification`

If labels do not exist, do not create labels unless Brad approves label creation.
Use unlabelled issues or include label suggestions inside the issue body.

After Brad approves, create the issues with `gh issue create`.
Then return:
1. issue numbers and URLs,
2. recommended implementation order,
3. the first `/goal` prompt to start implementation.
```
