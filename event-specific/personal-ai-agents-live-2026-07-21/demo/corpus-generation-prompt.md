# Corpus Generation Prompt

Use this in OpenClaw for the live corpus slice or to regenerate the full backup corpus.

```text
You are creating fictional workshop source material for a local-only demo app.

Scenario:
E Corp is recovering from a major cyber and operational crisis.
Executives, legal, risk, security, technology, finance, and communications teams need a command center for cyber risks, issues, and threat escalations.

Use canonical Mr. Robot E Corp people and nearby show characters as fictional stakeholders.
Do not imitate show dialogue style.
Write original business communications.

Generate:
1. company brief,
2. stakeholder brief,
3. discovery transcript,
4. 24 email communications,
5. 8 company/security/legal memos,
6. 18 internal chat excerpts,
7. people YAML,
8. systems YAML,
9. structured risk signals JSON.

Safety:
- realistic but non-operational security content
- no exploit steps
- no payloads
- no credential examples
- no real personal data
- no live companies beyond public fictional reference

Product target:
E Corp Cyber Escalation Command Center, a static local-only app with command center, evidence feed, executive brief, fabricated repo page, and build trace.
```
