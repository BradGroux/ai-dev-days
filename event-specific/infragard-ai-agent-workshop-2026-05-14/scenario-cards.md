# Scenario Cards

Use these as public-safe examples during the session. They are intentionally generic and sanitized.

## Scenario 1 - Field Report To Customer Summary

**Audience fit:** energy, water, manufacturing, healthcare operations, logistics, infrastructure services.

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

**First artifact:** field report checklist.

**Verification:** human reviewer checks measurements, customer-safe language, and missing-data flags.

**Do not include:** customer names, site photos, exact locations, regulated data, private contracts, or proprietary formulas.

## Scenario 2 - Heavy Haul Load Status

**Audience fit:** logistics, transportation, energy, construction, data-center supply chain.

**Current state:**

- Dispatch status lives across calls, spreadsheets, texts, and emails.
- Customers want real-time visibility.
- Late updates cause avoidable churn.

**Agent team:**

- Process Mapper: document dispatch, driver, customer, and exception handoffs.
- Security Reviewer: define what shipment/customer data can be used.
- Documentation Writer: draft an update template and escalation checklist.
- Implementation Planner: propose a read-only pilot for status summaries.
- Automation Scout: identify status fields that could be standardized.

**First artifact:** customer-safe status update template.

**Verification:** dispatcher confirms accuracy before anything is sent.

**Do not include:** real customer names, routes, driver details, pricing, contract terms, or security-sensitive cargo details.

## Scenario 3 - Low-Severity Alert Triage

**Audience fit:** SOC, IT, MSP, OT security, compliance teams.

**Current state:**

- Analysts triage repetitive low-severity alerts.
- Notes vary by analyst.
- Escalation criteria are inconsistently documented.

**Agent team:**

- Process Mapper: map alert intake, triage, escalation, and closeout.
- Security Reviewer: define log/data boundaries and prompt-injection risks.
- Documentation Writer: draft a triage checklist.
- Implementation Planner: define a read-only pilot with analyst approval.
- Automation Scout: identify summary and evidence-gathering automation.

**First artifact:** triage checklist plus escalation criteria.

**Verification:** senior analyst reviews the checklist against current policy.

**Do not include:** live logs, internal IPs, usernames, vulnerabilities, incident details, or proprietary detection logic.

## Scenario 4 - Compliance Evidence Packet

**Audience fit:** healthcare, energy, finance, legal, government-adjacent, security governance.

**Current state:**

- Evidence collection is scattered before reviews or audits.
- Teams spend time finding screenshots, logs, approvals, and policy references.
- Review packets are inconsistent.

**Agent team:**

- Process Mapper: map evidence sources and owners.
- Security Reviewer: define what evidence is sensitive.
- Documentation Writer: draft a packet checklist.
- Implementation Planner: propose a repeatable monthly evidence routine.
- Automation Scout: identify read-only evidence reminders.

**First artifact:** evidence packet checklist.

**Verification:** control owner confirms evidence mapping and retention requirements.

**Do not include:** actual evidence files, audit findings, customer data, access lists, or regulated records.

## Scenario 5 - OT/IT Change Coordination

**Audience fit:** manufacturing, utilities, maritime, healthcare facilities, energy, water.

**Current state:**

- IT and OT teams use different language and approval paths.
- A planned change affects operational reliability.
- Risks and rollback criteria are not written clearly.

**Agent team:**

- Process Mapper: document the change path and stakeholders.
- Security Reviewer: identify safety, availability, and approval risks.
- Documentation Writer: draft a change checklist.
- Implementation Planner: define a staged rollout and rollback criteria.
- Automation Scout: identify communication templates, not control automation.

**First artifact:** change coordination checklist.

**Verification:** OT owner and IT/security owner review together.

**Do not include:** real network topology, device details, firewall rules, credentials, or production control instructions.

## Scenario Selection Guidance

Pick the scenario that best matches the room:

- Mixed audience: Field Report To Customer Summary
- Operations-heavy: Heavy Haul Load Status
- Security-heavy: Low-Severity Alert Triage
- Leadership/compliance-heavy: Compliance Evidence Packet
- OT-heavy: OT/IT Change Coordination
