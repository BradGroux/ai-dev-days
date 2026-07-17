# Vendor-Onboarding Review Workspace

This is the completed fallback workspace for the Northstar Field Services
fictional demo. It shows how small Markdown artifacts divide business context
into reviewable responsibilities.

## Artifact map

| File | Business question |
|---|---|
| [`AGENTS.md`](AGENTS.md) | What standing rules must Codex follow here? |
| [`process-brief.md`](process-brief.md) | What happens now, who owns it, and what remains unresolved? |
| [`data-contract.md`](data-contract.md) | What does each field mean and how is it validated? |
| [`glossary.md`](glossary.md) | Do people and the agent use the same language? |
| [`memory.md`](memory.md) | What useful background may help, without becoming policy? |
| [`vendor-onboarding-sop.md`](vendor-onboarding-sop.md) | How is a review performed consistently? |
| [`vendor-onboarding-assistant-prd.md`](vendor-onboarding-assistant-prd.md) | What problem is the assistant solving and what is out of scope? |
| [`.agents/skills/vendor-review/SKILL.md`](.agents/skills/vendor-review/SKILL.md) | How is the focused review workflow reused? |
| [`acceptance-scenarios.md`](acceptance-scenarios.md) | What behavior should pass, clarify, or stop? |
| [`verification-report.md`](verification-report.md) | What happened when the fixtures were checked? |

## Source precedence

1. [`../source/policy-excerpts.md`](../source/policy-excerpts.md)
2. approved workspace artifacts in this folder
3. [`../source/stakeholder-notes.md`](../source/stakeholder-notes.md)
4. [`memory.md`](memory.md) as helpful recall only

If sources conflict, preserve the conflict and ask the named owner. Do not make
the hierarchy disappear by blending contradictory statements.

## Try it

Open this folder as the Codex workspace, then use the event
[`prompt-pack.md`](../../prompt-pack.md). To validate the checked-in fixtures:

```bash
node ../verify-demo.mjs
```

The checked-in workspace is also the offline expected output. No live system or
network access is required.
