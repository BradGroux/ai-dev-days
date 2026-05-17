# InfraGard Agent Team Project

This project is the **hands-on takeaway** from the InfraGard AI Agent Workshop on May 14, 2026.

Instead of building a consumer app, this project teaches attendees how to define a practical AI agent team for critical infrastructure, security, operations, or business-process work.

By the end of the workshop, you'll have a template you can apply to **any process** in your work: SOP improvement, log analysis, incident response, field data automation, or operational coordination.

The session is conceptual and workflow-focused; this project is your personal learning lab afterward.

## Goal

Create a small, safe, useful agent team around one real, low-risk process from your work.

## Recommended Agent Team

Start with four core roles:

1. **Process Mapper** — turns messy workflows into clear steps, decisions, inputs, outputs, and owners.
2. **Security Reviewer** — identifies data, credential, operational, and compliance risks.
3. **Documentation Writer** — creates SOPs, checklists, runbooks, and briefing notes.
4. **Implementation Planner** — turns recommendations into next steps, tasks, verification gates, and follow-up actions.

Optional fifth role:

5. **Automation Scout** — suggests low-risk automation opportunities, integrations, monitoring, or scripts.

## Starter Exercise

Use [`memory-template.md`](memory-template.md) as your starting point, or create a file called `memory.md` in this folder with:

Pick one path:

- **Choose your own adventure:** use a low-risk process from your own work.
- **Use a pre-seeded adventure:** pick one of the starter scenarios below and customize it after the session.

```markdown
# My InfraGard Agent Team

## Process

Describe one real process from work that I want to improve.

What is it? Who does it? How long does it take? What's broken or inefficient?

## Constraints

What data or systems are involved? What sensitive information is at risk? What approvals are needed?

## Agent Team

### Process Mapper
Map this process into clear steps, owners, handoffs, decision points, inputs, outputs, bottlenecks, and missing information. Ask clarifying questions before making assumptions.

### Security Reviewer
Review this process for sensitive data, credential exposure, privacy or compliance concerns, operational risk, unsafe automation, approval gates, and human review points. Return a concise guardrail checklist.

### Documentation Writer
Turn the mapped process and guardrail checklist into a practical SOP, checklist, runbook, or briefing note. Keep it plain, reviewable, and safe to share.

### Implementation Planner
Create a low-risk implementation plan with tasks, owners, milestones, verification gates, rollback or stop conditions, and a 30-day next action.

### Automation Scout (optional)
Identify read-only or low-risk automation opportunities. Rank each idea by impact, effort, and risk. Recommend the safest first experiment and what should remain human-approved.

## First Output

What is the first thing I want this team to produce? 
- A flowchart of the workflow?
- A risk/guardrail checklist?
- A draft SOP or runbook?
- An implementation plan?
- A list of automation opportunities?
```

## Pre-Seeded Adventures

Use one of these if you do not want to start from a blank page. Each adventure
maps to the full event
[scenario cards](../../event-specific/infragard-ai-agent-workshop-2026-05-14/scenario-cards.md),
[prompt pack](../../event-specific/infragard-ai-agent-workshop-2026-05-14/prompt-pack.md),
and
[demo script](../../event-specific/infragard-ai-agent-workshop-2026-05-14/demo-script.md).

### 1. Field Report To Customer Summary

**Process:** A field technician captures observations and measurements. A coordinator turns inconsistent notes into a customer-safe summary, but missing data is often caught late.

**First output:** Field report checklist and customer-summary template.

**Use when:** you want an operations example that works across energy, water, healthcare operations, infrastructure services, and field teams.

**Prompt path:** [Field report prompts](../../event-specific/infragard-ai-agent-workshop-2026-05-14/prompt-pack.md#scenario-1---field-report-to-customer-summary)

### 2. Heavy Haul Load Status

**Process:** Dispatch status lives across calls, spreadsheets, texts, and emails. Customers want reliable updates, but exceptions are handled manually by whoever notices first.

**First output:** Customer-safe status update template and exception escalation checklist.

**Use when:** you want a logistics, construction, data-center supply chain, transportation, or field-operations example.

**Prompt path:** [Heavy haul prompts](../../event-specific/infragard-ai-agent-workshop-2026-05-14/prompt-pack.md#scenario-2---heavy-haul-load-status)

### 3. Low-Severity Alert Triage

**Process:** Analysts triage repetitive low-severity alerts. Notes vary by analyst, escalation criteria are inconsistent, and evidence collection is repetitive.

**First output:** Triage checklist and escalation criteria.

**Use when:** you want a SOC, IT, MSP, OT security, or compliance example.

**Prompt path:** [Alert triage prompts](../../event-specific/infragard-ai-agent-workshop-2026-05-14/prompt-pack.md#scenario-3---low-severity-alert-triage)

### 4. Compliance Evidence Packet

**Process:** Evidence collection is scattered before audits or reviews. Screenshots, logs, approvals, policy references, and owners are inconsistent.

**First output:** Evidence packet checklist and owner request template.

**Use when:** you want a governance, audit, healthcare, energy, finance, legal, or leadership example.

**Prompt path:** [Compliance prompts](../../event-specific/infragard-ai-agent-workshop-2026-05-14/prompt-pack.md#scenario-4---compliance-evidence-packet)

### 5. OT/IT Change Coordination

**Process:** A planned change crosses IT, OT, vendor, security, and operations owners. Risks, approval paths, rollback criteria, and communication expectations are not written clearly.

**First output:** Change coordination checklist and approval/rollback template.

**Use when:** you want a manufacturing, utilities, maritime, healthcare facilities, energy, water, or critical-operations example.

**Prompt path:** [OT/IT prompts](../../event-specific/infragard-ai-agent-workshop-2026-05-14/prompt-pack.md#scenario-5---otit-change-coordination)

## Success Criteria

By the end, you should have:

- One documented workflow (what's the process?)
- One agent team design (who are the roles? what do they do?)
- One risk/guardrail checklist (what can go wrong? what should be protected?)
- One draft SOP, checklist, runbook, or implementation plan (the first output)
- One next action you can safely take after the workshop

## Security Rule

Use low-risk or sanitized examples while learning. 

**Do not:**
- Paste secrets, credentials, API keys, or tokens
- Include customer names, contract details, or regulated data
- Expose IP addresses, network topology, or unpatched vulnerabilities
- Use real health data, HIPAA-regulated info, or proprietary formulas

**Do:**
- Use mock/example data
- Describe the process in general terms
- Focus on the workflow and structure
- Verify output before using it in production

## Real-World Examples from the Workshop

### Heavy Haul Trucking

A 35-year-old company that quadrupled in size serving data center builds. They needed real-time load tracking for AWS contracts. An agent team helped them move from spreadsheets and emails to automated tracking in weeks instead of months.

**Lessons:**
- Small teams can compete with large operations if they think automation-first.
- Real-time data beats periodic manual updates.
- Trust the agents, but verify the output.

### Oilfield Water Testing

An 80-person company generating $100M/year in oilfield water testing and chemical manufacturing. They had tons of well-site data but were still using spreadsheets, emails, and WhatsApp for field reporting.

An agent team helped them:
- Automate field sample photo → lab report
- Build a customer portal instead of manual data sharing
- Speed up turnaround from days to hours

**Lessons:**
- Institutional knowledge is an asset; automation unlocks it.
- Proving value in one process opens doors for many.
- Iteration and feedback loops matter.

## Next Steps After the Workshop

1. **Build your `memory.md` file** with your process and agent roles.
2. **Test with one agent** (Process Mapper or your coding assistant) on your process.
3. **Iterate** — output will likely not be perfect. That's expected.
4. **Verify** — review the agent's work for accuracy and safety.
5. **Share** — bring results back to the community Discord or a follow-up session.
6. **Scale** — once you've proven the approach on one process, apply it to others.

## Resources

- OpenClaw Dev Days main repo: https://github.com/BradGroux/openclaw-dev-days
- OpenClaw Mac install: [`../../setup-guides/openclaw-mac.md`](../../setup-guides/openclaw-mac.md)
- OpenClaw Windows install: [`../../setup-guides/openclaw-windows.md`](../../setup-guides/openclaw-windows.md)
- AI-assisted OpenClaw install: [`../../setup-guides/ai-assisted-openclaw-install.md`](../../setup-guides/ai-assisted-openclaw-install.md)
- Workshop agenda and materials: [`../../event-specific/infragard-ai-agent-workshop-2026-05-14/`](../../event-specific/infragard-ai-agent-workshop-2026-05-14/)
- Attendee links: [`../../event-specific/infragard-ai-agent-workshop-2026-05-14/attendee-links.md`](../../event-specific/infragard-ai-agent-workshop-2026-05-14/attendee-links.md)
- Prompt pack: [`../../event-specific/infragard-ai-agent-workshop-2026-05-14/prompt-pack.md`](../../event-specific/infragard-ai-agent-workshop-2026-05-14/prompt-pack.md)
- Scenario cards: [`../../event-specific/infragard-ai-agent-workshop-2026-05-14/scenario-cards.md`](../../event-specific/infragard-ai-agent-workshop-2026-05-14/scenario-cards.md)
- Community Discord: https://discord.gg/Gmfkm7QVSF

## Questions?

- During the workshop, ask Brad, Richard, or Andrew.
- After the workshop, ask in the community Discord.
- Revisit the event packet and repeat the same process with another low-risk workflow.
