# Stakeholder Notes: Customer Service Case Changes

- Company: Pine Harbor Utilities (fictional)
- Captured by: business analysis practice team
- Status: raw discovery notes; not approved policy

## Customer service director

- Agents lose time because customers choose an inconvenient callback window.
- Adding a preferred contact window to intake should be a small change.
- The director wants inactive cases closed after seven days instead of fourteen
  so the open-case dashboard looks more current.
- Supervisors need a way to close obvious duplicate or abusive cases quickly.

## Contact-center supervisor

- The current intake form already captures phone, email, language, and consent.
- Agents work in three time zones. “Morning” means different things to
  customers and agents.
- Reopened cases keep their original case ID today, but nobody was sure whether
  the proposed seven-day rule changes that behavior.
- Supervisors occasionally need an exception, but they should not be able to
  erase the history of who closed a case or why.

## Reporting analyst

- A nightly warehouse extract uses case status, closure reason, close date,
  reopen date, and assigned queue.
- The executive dashboard assumes one row per case ID.
- Preferred contact window does not exist in the warehouse or the published
  data dictionary.
- Changing a label may still break a report if the stored status value changes.

## Compliance partner

- Regulatory complaint cases follow separate closure rules.
- Case history and closure evidence must remain available for audits.
- The compliance partner heard “force close” and asked whether it would bypass
  contact attempts or remove the audit trail.

## Release manager

- The next standard release window is September 12, 2026.
- The mobile agent view and customer portal use the same case API as the desktop
  application.
- No technical owner has estimated these requests yet.
- Customer-facing wording and training changes need named reviewers before a
  release candidate is approved.

## Discovery gaps

- allowed values and time-zone semantics for preferred contact windows
- whether seven days means calendar days or business days
- treatment of regulatory, reopened, and pending-escalation cases
- whether “force close” is an exception path or a policy override
- interface, reporting, retention, communication, and training impacts
