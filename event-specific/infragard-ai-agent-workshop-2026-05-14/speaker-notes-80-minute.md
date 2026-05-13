# Speaker Notes - 80-Minute Brad Block

These notes assume the full meeting is 90 minutes, with about 80 minutes for Brad content and audience questions.

## Opening Thesis

The March session answered "what are agents and why should security teams care?"

This session answers "how would I actually use this safely?"

Core line:

> The technology will change. The operating model matters more.

## 0-5 Minutes - Practical Literacy

Make it clear:

- This is not a prompt-tricks session.
- This is not a vendor pitch.
- This is not a live install clinic.
- The goal is learning the repeatable workflow pattern.

Safety line:

> Use sanitized examples. Do not paste secrets, private records, network details, or operationally sensitive information into public tools.

## 5-13 Minutes - Security Frame

Carry forward from the prior talk:

- shadow AI is already happening
- attackers can use agents for recon, phishing, chaining tasks, and persistence
- defenders need hands-on literacy
- agent adoption requires guardrails

Four guardrail layers:

1. policy: what the agent is allowed to do
2. access: what data and tools it can touch
3. observability: what gets logged and reviewed
4. human intervention: what requires approval or stop conditions

Useful line:

> If you cannot reconstruct what an agent did, you cannot investigate it, govern it, or defend it.

## 13-27 Minutes - Agent Teams And Memory

Explain in plain English:

- A chatbot answers.
- An agent works toward a goal.
- An agent team splits the work into roles.
- Markdown memory makes context durable and auditable.

Role set:

- Process Mapper
- Security Reviewer
- Documentation Writer
- Implementation Planner
- Automation Scout

Key framing:

- role + context + boundary + expected output beats vague prompting
- the human is the orchestrator
- agent output is draft work until reviewed

## 27-55 Minutes - Practical Demo

Use [`demo-script.md`](demo-script.md).

Recommended scenario: field report to customer summary.

Demo beats:

1. Start with the workflow, not the tool.
2. Create a Markdown memory note.
3. Ask for clarifying questions.
4. Process Mapper maps the workflow.
5. Security Reviewer creates guardrails.
6. Documentation Writer drafts the artifact.
7. Implementation Planner proposes the safest first experiment.
8. Verification Reviewer challenges the output.

Things to point out while reviewing output:

- Did it assume facts not provided?
- Did it ask for unsafe data?
- Did it skip approval gates?
- Did it create something useful enough to revise?
- What would you verify before using it?

## 55-70 Minutes - Real-World Patterns

Use public-safe versions only.

### Heavy Haul Logistics

Pattern:

- spreadsheet/email coordination
- customer visibility demand
- structured tracking workflow
- agent-assisted planning, status language, and implementation tasks

Lesson:

> Small teams can compete when they turn operational knowledge into repeatable process.

### Field Testing / Reporting

Pattern:

- valuable data trapped in field notes, photos, spreadsheets, and email
- agent-assisted data normalization and customer-summary drafts
- human review before customer delivery

Lesson:

> The leverage is often in boring, neglected operational data.

### SOC / Compliance

Pattern:

- repetitive alert triage
- evidence collection
- policy/checklist drafting
- human certification

Lesson:

> Agents can draft and organize. Humans own the conclusion.

## 70-80 Minutes - Governance And Q&A

Adoption ladder:

1. personal literacy
2. sanitized process experiment
3. read-only or draft-only internal workflow
4. explicit access and approval gates
5. logging and review
6. enterprise identity, access, and governance
7. monitored production workflow

Questions to apply to every audience use case:

- What is the process?
- What data is involved?
- What is the agent allowed to do?
- What must a human approve?
- How will we verify the output?
- How do we stop it?

## Close

Point to:

- [`attendee-links.md`](attendee-links.md)
- [`prompt-pack.md`](prompt-pack.md)
- [`../../projects/infragard-agent-team/memory-template.md`](../../projects/infragard-agent-team/memory-template.md)
- Discord: https://discord.gg/Gmfkm7QVSF

30-day challenge:

> Pick one low-risk process. Write it down. Use an agent to map it, risk-review it, and draft one useful artifact. Verify the result. Then decide whether to repeat, improve, or stop.
