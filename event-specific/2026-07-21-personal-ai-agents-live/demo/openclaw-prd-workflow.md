# OpenClaw PRD Workflow

OpenClaw owns the planning phase.

## Inputs

- [source-corpus/company-brief.md](source-corpus/company-brief.md)
- [source-corpus/stakeholder-brief.md](source-corpus/stakeholder-brief.md)
- [source-corpus/discovery-transcript.md](source-corpus/discovery-transcript.md)
- [source-corpus/emails.md](source-corpus/emails.md)
- [source-corpus/memos.md](source-corpus/memos.md)
- [source-corpus/chats.md](source-corpus/chats.md)
- [source-corpus/people.yaml](source-corpus/people.yaml)
- [source-corpus/systems.yaml](source-corpus/systems.yaml)
- [source-corpus/signals.json](source-corpus/signals.json)

## Steps

1. Generate a small live corpus slice if time allows.
2. Load the full checked-in corpus.
3. Run `$grill-with-docs`.
4. Resolve the app users, workflow, evidence model, screens, and safety boundary.
5. Generate the PRD.
6. Mark unresolved schedule/title questions as organizer follow-up.

## Expected Grill Questions

- Who is the primary user: SOC lead, executive team, legal, or product owner?
- What is the first useful app output?
- What evidence must be linked to each escalation?
- Which actions are local-only workflow controls?
- What is the difference between risk, issue, and threat in this demo?
- What does the executive brief need to say?
- What is the minimum app that proves the workflow?
- What belongs in Codex rather than OpenClaw?

## Output

OpenClaw produces the event PRD.
Codex receives that PRD as its contract.
