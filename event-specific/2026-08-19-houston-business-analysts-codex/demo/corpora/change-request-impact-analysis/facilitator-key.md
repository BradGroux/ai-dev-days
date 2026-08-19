# Facilitator Key: Change-Request Impact Analysis

- Status: prepared teaching key for a fictional corpus
- Boundary: expected analysis, not implementation or release approval

## Expected top-level results

| Record | Expected result | Core reason | Next owner |
| --- | --- | --- | --- |
| CR-101 | READY FOR IMPACT REVIEW | The outcome, scope, values, time-zone basis, affected surfaces, owners, and release target are bounded enough for estimation and review. | Named data, integration, communication, accessibility, training, and release owners |
| CR-102 | CLARIFY | “All open cases,” day semantics, contact attempts, protected cases, reopen behavior, reporting, and customer communication are unresolved. | Customer Operations Governance Council, Compliance, Data Steward, and Integration Owner |
| CR-103 | STOP / ESCALATE | Removing contact attempts, reason codes, and retained history directly conflicts with C-01 and C-03; excluding compliance and audit review cannot override C-02 or C-06. | Customer Operations Governance Council and Compliance |

READY FOR IMPACT REVIEW means ready for named human estimation and review. It
does not mean approved for development or release.

## CR-101 acceptance starters

- Normal: a customer selects `12:00-16:00 local`; the value and time-zone basis
  appear consistently in the portal, API, agent views, warehouse, and data
  dictionary.
- Exception: the address time zone cannot be resolved; intake records `no
  preference` or asks the customer instead of guessing.
- Prohibited: the preference automatically schedules or sends a contact when
  outbound delivery is out of scope.

## CR-102 clarification starters

- Does seven days mean calendar or business days?
- How do C-01 contact attempts apply before automated closure?
- Which statuses are protected by C-02, and who owns that controlled list?
- Does the existing 30-day reopen behavior remain unchanged?
- Which reports, notices, templates, training, and service measures change?

### CR-102 acceptance starters

- Normal: an ordinary case reaches the proposed threshold only after the C-01
  contact-attempt and evidence requirements are satisfied.
- Exception: a regulatory, safety, or active escalation case remains open and
  routes to its named owner regardless of inactivity.
- Prohibited: the automated job closes a protected case or silently changes
  the 30-day reopen behavior.

## CR-103 escalation evidence

- Cite C-01 for documented contact attempts and closure evidence.
- Cite C-02 for protected cases.
- Cite C-03 for retained history.
- Cite C-06 for required owner review and release authority.
- Preserve the sponsor's need for a fast exception as an elicitation topic;
  reject the proposed control bypass, not the underlying business problem.

### CR-103 acceptance starters

- Normal: a supervisor closes an eligible case using the required attempts,
  reason code, actor, timestamp, and retained history.
- Exception: an abusive or duplicate case follows a separately approved,
  auditable exception path owned by the Governance Council and Compliance.
- Prohibited: a supervisor removes contact evidence, reason codes, prior
  status, or audit history from any case.

## Quality checks

- [ ] Every conclusion cites a record field, stakeholder note, or C-01–C-07.
- [ ] Unknown impact is visible rather than treated as no impact.
- [ ] Display labels are distinguished from stored values.
- [ ] The packet names owners without inventing their decisions.
- [ ] The analyst does not approve development, release, or a policy exception.
