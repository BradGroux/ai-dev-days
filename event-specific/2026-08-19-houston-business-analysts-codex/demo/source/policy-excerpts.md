# Approved Policy Excerpts

- Company: Northstar Field Services (fictional)
- Status: approved excerpts for the workshop scenario
- Owner: Procurement Operations with Finance, Security, Legal, and Compliance

These excerpts take precedence over raw stakeholder notes when the two differ.

## P-01: human authority

The review assistant may prepare a draft packet, identify missing information,
and route work to the correct human review lane. It may not create, approve,
reject, activate, or modify a vendor, send messages, execute contracts, change
payment settings, or clear a policy flag.

## P-02: required intake data

Every review requires:

- request ID
- vendor ID
- legal vendor name
- business owner
- service description
- expected annual spend in USD
- vendor category
- tax country
- payment currency
- tax-document status
- duplicate-check result
- sanctions-screening result
- software indicator
- company-data-access indicator
- system-connection indicator
- credential-access indicator
- contract-deviation indicator

Missing required intake data produces **CLARIFY** unless a stop condition also
applies.

## P-03: review triggers

- Security review is required when software, company data access, system
  connection, or credential access is `yes` or `unknown`.
- Legal review is required when contract deviation is `yes`.
- Finance review is required for every request.
- Compliance review is required for any sanctions result other than `clear`.

The unresolved spend threshold is not an approved trigger and must not be
invented.

## P-04: stop conditions

A sanctions result of `possible_match` or `confirmed_match` produces
**STOP / ESCALATE** to Compliance. No rush request, schedule impact, or other
review result can override this stop.

## P-05: result meanings

- **PASS**: the packet is complete enough for the named human review lanes. It
  is not vendor approval.
- **CLARIFY**: required information is missing, unknown, or internally
  inconsistent. Return focused questions to the business owner.
- **STOP / ESCALATE**: a policy stop condition applies. Name the policy and the
  human escalation owner.

## P-06: evidence and privacy

Every result must cite the vendor ID and applicable policy identifiers. Do not
copy tax identifiers, banking details, credentials, or unapproved personal
information into the review packet. The workshop fixtures contain none of
those values.
