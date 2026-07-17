# Process Brief: Vendor Onboarding

- Status: workshop-approved interpretation of the fictional source corpus
- Process owner: Procurement Operations
- System of record: ProcureFlow after human-approved creation

## Business outcome

Prepare a complete, traceable vendor-review packet for the correct human review
lanes while preventing missing data, policy stops, and authority boundaries
from being hidden by a confident recommendation.

## Trigger and end state

- Trigger: a business requester submits a new-vendor request.
- End state for this workspace: a draft packet is classified PASS, CLARIFY, or
  STOP / ESCALATE and assigned to the next human owner.
- End state outside this workspace: an authorized employee may create a vendor
  in ProcureFlow after all required human decisions. The assistant has no role
  in that action.

## Actors and decision rights

| Actor | Responsibility | Decision rights |
|---|---|---|
| Business requester | States the business need and supplies initial vendor data | Confirms business purpose and corrects missing intake data |
| Procurement Operations | Owns intake, duplicate review, packet coordination, and workflow | Determines whether the packet is complete enough to route |
| Finance | Reviews tax-document status, currency, spend, and payment terms | Owns finance-domain decision and final payment terms |
| Security | Reviews software, data, system, and credential access | Owns security-domain decision |
| Legal | Reviews contract deviations and data-processing terms | Owns legal-domain decision |
| Compliance | Resolves possible or confirmed sanctions matches | Owns sanctions clearance |
| Authorized employee | Creates the approved record in ProcureFlow | Human-only record creation and activation |
| Review assistant | Drafts, checks, cites, and routes a packet | No approval, external action, or domain decision rights |

## Current-state flow

1. The requester emails an intake spreadsheet to Procurement.
2. Procurement checks ProcureFlow for a possible duplicate.
3. Procurement requests any required missing information.
4. Finance reviews every complete-enough packet.
5. Security, Legal, and Compliance join when approved policy triggers apply.
6. Procurement compiles the human review results.
7. An authorized employee decides whether to create the record in ProcureFlow.

## Assistant-supported future-state boundary

The assistant may standardize steps 2-5 into a draft review packet. It may:

- validate required fields
- flag unknown or conflicting values
- identify policy-triggered review lanes
- cite the rule behind each outcome
- prepare focused clarification questions

It may not perform steps 6-7, resolve domain flags, or contact anyone.

## Decision model

Apply outcomes in this order:

1. **STOP / ESCALATE** if P-04 applies.
2. **CLARIFY** if required data is missing, unknown, or inconsistent.
3. **PASS** when the packet is complete enough for all named human review lanes.

PASS does not mean approved.

## Confirmed exceptions

| Condition | Outcome | Owner |
|---|---|---|
| Possible or confirmed sanctions match | STOP / ESCALATE | Compliance |
| Missing required intake data | CLARIFY | Business requester through Procurement |
| Software, data, system, or credential indicator is `yes` or `unknown` | Include Security review lane; CLARIFY when information needed for review is unknown | Security and business requester |
| Contract deviation is `yes` | Include Legal review lane | Legal |
| Rush request | Follow the same rules; no bypass | Procurement Operations |

## Assumptions intentionally not promoted to rules

- “Low risk” has no approved definition in the source corpus.
- The legal-spend threshold is unresolved and cannot trigger a decision.
- The rush escalation owner is not named.
- The security questionnaire version and owner are not documented.
- Duplicate-match tolerance and service levels are not documented.

## Elicitation backlog

1. Which owner approves a shared definition of low risk?
2. What legal-spend threshold, if any, is approved and in which currency?
3. Who owns rush escalation, and what can the escalation change?
4. Which security questionnaire and data classification are required?
5. What qualifies as a possible duplicate and who resolves it?
6. What service levels apply to each review lane?
7. What evidence authorizes final ProcureFlow creation?
