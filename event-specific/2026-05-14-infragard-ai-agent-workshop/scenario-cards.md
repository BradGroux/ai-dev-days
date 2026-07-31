# Scenario Cards

Use this as the "choose your own adventure" menu for the session. Each scenario is public-safe, sanitized, and mapped to a matching prompt pack and demo script.

## Choose Your Adventure

| Scenario | Best For | First Artifact | Prompt Pack | Demo Script |
|---|---|---|---|---|
| [1. Field Report To Customer Summary](#scenario-1---field-report-to-customer-summary) | Mixed operations, energy, water, healthcare operations, infrastructure services | Field report checklist + customer summary template | [Field report prompts](prompt-pack.md#scenario-1---field-report-to-customer-summary) | [Field report demo](demo-script.md#demo-path-1---field-report-to-customer-summary) |
| [2. Heavy Haul Load Status](#scenario-2---heavy-haul-load-status) | Logistics, transportation, construction, data-center supply chain | Customer-safe status update template | [Heavy haul prompts](prompt-pack.md#scenario-2---heavy-haul-load-status) | [Heavy haul demo](demo-script.md#demo-path-2---heavy-haul-load-status) |
| [3. Low-Severity Alert Triage](#scenario-3---low-severity-alert-triage) | SOC, IT, MSP, OT security, compliance teams | Triage checklist + escalation criteria | [Alert triage prompts](prompt-pack.md#scenario-3---low-severity-alert-triage) | [Alert triage demo](demo-script.md#demo-path-3---low-severity-alert-triage) |
| [4. Compliance Evidence Packet](#scenario-4---compliance-evidence-packet) | Governance, compliance, healthcare, energy, finance, legal | Evidence packet checklist | [Compliance prompts](prompt-pack.md#scenario-4---compliance-evidence-packet) | [Compliance demo](demo-script.md#demo-path-4---compliance-evidence-packet) |
| [5. OT/IT Change Coordination](#scenario-5---otit-change-coordination) | Manufacturing, utilities, maritime, healthcare facilities, water, energy | Change coordination checklist | [OT/IT prompts](prompt-pack.md#scenario-5---otit-change-coordination) | [OT/IT demo](demo-script.md#demo-path-5---otit-change-coordination) |

## Presenter Selection Guide

- **Mixed audience:** start with Scenario 1.
- **Operations-heavy audience:** choose Scenario 2.
- **Security-heavy audience:** choose Scenario 3.
- **Leadership, governance, or compliance-heavy audience:** choose Scenario 4.
- **OT/critical operations audience:** choose Scenario 5.
- **If short on time:** run only the memory prompt, process mapper prompt, security reviewer prompt, and verification prompt.

## Safety Baseline For Every Scenario

Use mock or sanitized data. Do not include:

- secrets, API keys, tokens, passwords, or private keys
- real customer, patient, employee, legal, investigative, or regulated records
- internal IP addresses, network diagrams, firewall rules, or unpatched vulnerabilities
- production control actions
- confidential contract, pricing, route, cargo, site, or operational details

The agent drafts. The human verifies and approves.

## Scenario 1 - Field Report To Customer Summary

**Audience fit:** energy, water, manufacturing, healthcare operations, logistics, infrastructure services.

**Use this when:** the room needs a cross-sector example that is easy to understand without security jargon.

**Current state:**

- Field technician captures notes, photos, or measurements.
- Data lands in email, spreadsheet, chat, or a shared folder.
- A coordinator manually turns it into a customer update.
- Missing data is often found late.

**Agent team:**

- Process Mapper: map the capture-to-report workflow.
- Security Reviewer: classify data and approval points.
- Documentation Writer: draft a field-report checklist.
- Implementation Planner: define a low-risk pilot.
- Automation Scout: identify missing-data checks.

**First artifact:** field report checklist + customer-safe summary template.

**Verification:** human reviewer checks measurements, customer-safe language, and missing-data flags.

**Do not include:** customer names, site photos, exact locations, regulated data, private contracts, or proprietary formulas.

**Good audience question:** "What data would you allow a draft-only agent to see here?"

## Scenario 2 - Heavy Haul Load Status

**Audience fit:** logistics, transportation, energy, construction, data-center supply chain.

**Use this when:** the room is operations-heavy or interested in blue-collar process leverage.

**Current state:**

- Dispatch status lives across calls, spreadsheets, texts, and emails.
- Customers want real-time visibility.
- Late updates cause avoidable churn.
- Exceptions are handled by whoever notices first.

**Agent team:**

- Process Mapper: document dispatch, driver, customer, and exception handoffs.
- Security Reviewer: define what shipment/customer data can be used.
- Documentation Writer: draft an update template and escalation checklist.
- Implementation Planner: propose a read-only pilot for status summaries.
- Automation Scout: identify status fields that could be standardized.

**First artifact:** customer-safe status update template + exception escalation checklist.

**Verification:** dispatcher confirms accuracy before anything is sent.

**Do not include:** real customer names, routes, driver details, pricing, contract terms, or security-sensitive cargo details.

**Good audience question:** "Where is the first safe read-only data source?"

## Scenario 3 - Low-Severity Alert Triage

**Audience fit:** SOC, IT, MSP, OT security, compliance teams.

**Use this when:** the room wants a security-native example.

**Current state:**

- Analysts triage repetitive low-severity alerts.
- Notes vary by analyst.
- Escalation criteria are inconsistently documented.
- Evidence collection is repetitive but still needs judgment.

**Agent team:**

- Process Mapper: map alert intake, triage, escalation, and closeout.
- Security Reviewer: define log/data boundaries and prompt-injection risks.
- Documentation Writer: draft a triage checklist.
- Implementation Planner: define a read-only pilot with analyst approval.
- Automation Scout: identify summary and evidence-gathering automation.

**First artifact:** triage checklist + escalation criteria.

**Verification:** senior analyst reviews the checklist against current policy.

**Do not include:** live logs, internal IPs, usernames, vulnerabilities, incident details, or proprietary detection logic.

**Good audience question:** "What would make this unsafe to automate?"

## Scenario 4 - Compliance Evidence Packet

**Audience fit:** healthcare, energy, finance, legal, government-adjacent, security governance.

**Use this when:** the room includes senior leaders, auditors, legal, GRC, or compliance owners.

**Current state:**

- Evidence collection is scattered before reviews or audits.
- Teams spend time finding screenshots, logs, approvals, and policy references.
- Review packets are inconsistent.
- Owners do not always know what "good evidence" looks like.

**Agent team:**

- Process Mapper: map evidence sources and owners.
- Security Reviewer: define what evidence is sensitive.
- Documentation Writer: draft a packet checklist.
- Implementation Planner: propose a repeatable monthly evidence routine.
- Automation Scout: identify read-only evidence reminders.

**First artifact:** evidence packet checklist + owner request template.

**Verification:** control owner confirms evidence mapping and retention requirements.

**Do not include:** actual evidence files, audit findings, customer data, access lists, or regulated records.

**Good audience question:** "What can an agent prepare, and what must a human certify?"

## Scenario 5 - OT/IT Change Coordination

**Audience fit:** manufacturing, utilities, maritime, healthcare facilities, energy, water.

**Use this when:** the room includes OT, industrial control, facilities, or critical operations stakeholders.

**Current state:**

- IT and OT teams use different language and approval paths.
- A planned change affects operational reliability.
- Risks and rollback criteria are not written clearly.
- Security, operations, and vendor owners may not share the same view of "safe."

**Agent team:**

- Process Mapper: document the change path and stakeholders.
- Security Reviewer: identify safety, availability, and approval risks.
- Documentation Writer: draft a change checklist.
- Implementation Planner: define a staged rollout and rollback criteria.
- Automation Scout: identify communication templates, not control automation.

**First artifact:** change coordination checklist + approval/rollback template.

**Verification:** OT owner and IT/security owner review together.

**Do not include:** real network topology, device details, firewall rules, credentials, or production control instructions.

**Good audience question:** "What should never be delegated to an agent in this workflow?"

## How To Run The Adventure Live

1. Pick the scenario that best matches the room.
2. Open the matching section in [`prompt-pack.md`](prompt-pack.md).
3. Open the matching section in [`demo-script.md`](demo-script.md).
4. Run the memory prompt first.
5. Run Process Mapper and Security Reviewer.
6. Produce one artifact.
7. Run Verification Reviewer.
8. End with a 30-day next step.
