# Approved Change and Case Policy Excerpts

- Company: Pine Harbor Utilities (fictional)
- Status: approved excerpts for the practice corpus
- Owner: Customer Operations Governance Council

These excerpts take precedence over stakeholder notes and change-request
descriptions.

## C-01: case closure

An ordinary customer service case may close only after two documented contact
attempts across at least three business days or after the customer confirms
resolution. A closure must retain the actor, timestamp, reason code, and prior
status.

## C-02: protected cases

Regulatory complaint, safety, and active escalation cases may not be closed by
an inactivity rule. Compliance owns the protected-case definition and any
exception.

## C-03: reopen behavior and record integrity

A case reopened within 30 calendar days retains its original case ID and full
history. No change may delete or overwrite case history required for audit.

## C-04: data and integration changes

The Customer Data Steward must approve new fields, definitions, allowed
values, retention, and reporting use. The Integration Owner must review any
change to a field or status consumed by the case API, warehouse extract,
customer portal, or mobile agent view.

## C-05: customer communication and accessibility

Customer-facing labels, notices, or templates require Customer Communications
and Accessibility review. Stored status codes may not change solely to alter a
display label.

## C-06: release authority

The change-control board approves release scope after the named business,
data, integration, compliance, communication, accessibility, training, and
release owners provide evidence for applicable impacts. An impact packet may
recommend a next step but may not approve development or release.

## C-07: readiness results

- **READY FOR IMPACT REVIEW**: the request is sufficiently bounded for named
  owners to estimate and review. It is not implementation approval.
- **CLARIFY**: material scope, rule, owner, dependency, or acceptance evidence
  is missing or inconsistent.
- **STOP / ESCALATE**: the requested behavior directly conflicts with an
  approved control or asks the analyst to bypass a decision owner.
