# Prepared Verification Report

Verified against: `sample-vendors.json`, policy P-01 through P-06, SOP
NSFS-PROC-001, the acceptance scenarios in this folder, and the deterministic
reviewer in `../lib/vendor-review.mjs`.

| Record | Result | Rule trace | Required human lanes | Verification |
|---|---|---|---|---|
| V-001 / REQ-2601 | PASS | P-01, P-02, P-03, P-05 | Procurement, Finance | PASS: complete packet; ready for human review, not approval |
| V-002 / REQ-2602 | CLARIFY | P-02, P-03, P-05 | Procurement, Finance, Security | PASS: software is yes; data and system access are unknown |
| V-003 / REQ-2603 | STOP / ESCALATE | P-04, P-05 | Compliance, coordinated by Procurement | PASS: possible sanctions match overrides rush |

## Evidence details

### V-001

- All required fields are present and controlled values are valid.
- `sanctionsScreeningResult = clear`.
- All four Security trigger fields are `no`.
- `contractDeviation = no`.
- Outcome: ready for Procurement and Finance human review.

### V-002

- `providesSoftware = yes`, so Security review is required.
- `accessesCompanyData = unknown` and `connectsToCompanySystem = unknown`.
- P-02 and P-03 require clarification rather than treating unknown as no.
- Next human action: the business owner answers the two focused Security
  questions; Procurement coordinates.

### V-003

- `sanctionsScreeningResult = possible_match`.
- `rushRequested = true` does not override P-04.
- Next human action: Compliance resolves the possible match; all onboarding
  progression stops until then.

## Authority statement

No external action was taken. No vendor was approved, rejected, created,
activated, modified, contacted, or cleared. This report validates the fictional
workshop fixtures, not a production control.

## Deterministic check

Run from the event folder:

```bash
node demo/run-demo.mjs review-all --json
node --test demo/test/vendor-review.test.mjs
node demo/verify-demo.mjs
```

The focused tests prove stop precedence, unknown-data clarification, review
lanes, draft-only authority language, and unresolved duplicate handling. The
integrated verifier checks file presence, fixture structure, prompt contracts,
expected classifications, public-safe markers, deck requirements, and the
published high-resolution PDF contract.

The [AI-Native Operating Framework](../framework-guidance.md) organizes the
business completeness questions. It is not a Northstar policy source and does
not determine these outcomes.
