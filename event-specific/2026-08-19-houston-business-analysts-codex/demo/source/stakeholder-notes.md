# Stakeholder Notes: Vendor Onboarding

- Company: Northstar Field Services (fictional)
- Captured by: business analysis workshop team
- Status: raw discovery notes; not approved policy

## Procurement coordinator

- Requests arrive by email with a spreadsheet attached.
- Procurement checks whether the vendor already exists in ProcureFlow.
- Requesters often omit the business owner, expected annual spend, or legal
  name. Procurement usually emails them back.
- “Normal low-risk vendors” can move quickly, but nobody in the interview could
  define low risk consistently.
- Rush requests happen near project start dates. A rush label should not bypass
  required reviews, though the escalation path was not named.

## Finance analyst

- Finance needs a legal name, tax country, payment currency, remittance email,
  and tax-document status before setup.
- Finance does not want tax identifiers copied into general notes or projected
  demos.
- The requester estimates annual spend. Finance owns final payment terms.
- A missing tax document means the record is incomplete, not rejected.

## Security reviewer

- Security review is needed when a vendor provides software, hosts company
  data, connects to a company system, or receives credentials.
- Requesters frequently answer “no data access” even when a software tool will
  store user names and email addresses.
- The questionnaire and data classification should be known before security
  decides. The exact questionnaire version was not recorded in this meeting.

## Legal operations

- Legal review is needed for contract deviations, data-processing terms, or
  commitments above the standard approval threshold.
- The threshold amount differed between two interviewees, so it remains an
  open question.
- A possible sanctions-screening match stops onboarding until Compliance clears
  it. Urgency does not override this rule.

## Process owner

- Procurement Operations owns the onboarding workflow.
- Business requesters own the business need and initial vendor information.
- Review teams own decisions in their domains.
- ProcureFlow is the system of record after a human approves record creation.
- The proposed assistant may prepare a review packet, identify missing data,
  and recommend the next review lane. It may not create, approve, reject,
  activate, email, or modify a vendor.

## Observed current-state flow

1. Requester emails the spreadsheet to Procurement.
2. Procurement checks for a duplicate.
3. Procurement requests missing data.
4. Finance, Security, Legal, and Compliance review when their conditions apply.
5. Procurement compiles the decisions.
6. An authorized employee approves creation in ProcureFlow.

## Known gaps from discovery

- shared definition of low risk
- confirmed legal-spend threshold
- named rush escalation owner
- questionnaire version and owner
- duplicate-match tolerance and resolution owner
- service-level expectations for each review lane
