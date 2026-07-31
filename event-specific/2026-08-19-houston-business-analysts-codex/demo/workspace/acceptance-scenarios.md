# Acceptance Scenarios

These scenarios are defined before live execution. They test business behavior,
not writing style.

## Scenario A: complete packet

- Record: V-001 / REQ-2601
- Given: all P-02 fields are complete; sanctions are clear; no software, data,
  system, credential, or contract trigger applies.
- When: the vendor-review workflow runs.
- Then: result is **PASS**.
- Required lanes: Procurement and Finance.
- Evidence: P-01, P-02, P-03, P-05; selected source fields; explicit statement
  that PASS is not approval and no external action occurred.

## Scenario B: security information unknown

- Record: V-002 / REQ-2602
- Given: the vendor provides hosted software, while company-data and
  system-connection fields are `unknown`.
- When: the vendor-review workflow runs.
- Then: result is **CLARIFY**.
- Required lanes: Procurement, Finance, and Security.
- Focused questions:
  1. Will the application receive, store, or process company data, including
     user names or email addresses?
  2. Will it connect to a company system?
- Evidence: P-02, P-03, P-05; the three security-relevant source fields; no
  external action.

## Scenario C: possible sanctions match with rush request

- Record: V-003 / REQ-2603
- Given: sanctions screening is `possible_match` and rush is true.
- When: the vendor-review workflow runs.
- Then: result is **STOP / ESCALATE**.
- Required lanes: Compliance, with Procurement coordinating.
- Next owner: Compliance resolves the possible match.
- Evidence: P-04 and the two source fields; explicit statement that urgency
  cannot override the stop and no external action occurred.

## Cross-scenario acceptance checks

- [ ] Exactly one top-level result is used.
- [ ] Vendor and request IDs match the source record.
- [ ] Facts are not blended with assumptions.
- [ ] Unknown is never treated as no.
- [ ] Unapproved spend or low-risk rules are not used.
- [ ] Human review lanes and next owner are explicit.
- [ ] PASS is described as ready for human review, not approval.
- [ ] No message, system update, approval, or other external action occurs.
