# Data Contract: Vendor Review Intake

- Status: workshop-approved for the fictional fixture set
- Data owner: Procurement Operations, with domain ownership noted below

## Contract rules

- Read source values from `../source/sample-vendors.json`.
- Treat absent, empty, or `unknown` required values as missing.
- Do not coerce ambiguous free text into a controlled value.
- Do not copy tax identifiers, banking details, or credentials into the packet.
- Record only the minimum fields needed for routing and review evidence.

## Fields

| JSON field | Meaning | Type or allowed values | Owner | Required | Validation |
|---|---|---|---|---|---|
| `requestId` | Unique intake request | `REQ-` plus four digits | Procurement | Yes | non-empty and unique in fixture set |
| `vendorId` | Stable demo vendor identifier | `V-` plus three digits | Procurement | Yes | non-empty and unique in fixture set |
| `legalName` | Registered vendor name | string | Vendor, confirmed by Procurement | Yes | non-empty |
| `businessOwner` | Employee accountable for business need | string | Requesting function | Yes | non-empty |
| `serviceDescription` | Plain-language goods or services | string | Business owner | Yes | non-empty and specific enough to route |
| `expectedAnnualSpendUsd` | Requester's annual-spend estimate | non-negative number | Business owner; Finance reviews | Yes | numeric and at least 0 |
| `vendorCategory` | Intake classification | kebab-case string | Procurement | Yes | non-empty; no risk meaning inferred |
| `taxCountry` | Tax-registration country | ISO-style two-letter string | Finance | Yes | two uppercase letters |
| `paymentCurrency` | Intended payment currency | ISO-style three-letter string | Finance | Yes | three uppercase letters |
| `taxDocumentStatus` | Whether required tax document was received | `received`, `missing`, `unknown` | Finance | Yes | controlled value |
| `duplicateCheckResult` | Result of ProcureFlow duplicate search | `no_match`, `possible_match`, `confirmed_duplicate`, `unknown` | Procurement | Yes | controlled value |
| `sanctionsScreeningResult` | Compliance screening state | `clear`, `possible_match`, `confirmed_match`, `unknown` | Compliance | Yes | controlled value; non-clear invokes Compliance |
| `providesSoftware` | Vendor provides software or hosted application | `yes`, `no`, `unknown` | Business owner; Security reviews | Yes | controlled value |
| `accessesCompanyData` | Vendor receives or stores company data | `yes`, `no`, `unknown` | Business owner; Security reviews | Yes | controlled value |
| `connectsToCompanySystem` | Vendor connects to a company system | `yes`, `no`, `unknown` | Business owner; Security reviews | Yes | controlled value |
| `receivesCredentials` | Vendor receives user or service credentials | `yes`, `no`, `unknown` | Security | Yes | controlled value |
| `contractDeviation` | Proposed terms deviate from standard contract | `yes`, `no`, `unknown` | Legal | Yes | controlled value |
| `rushRequested` | Requester asked for expedited handling | boolean | Business owner | Yes | never bypasses a rule |

## Data handling

- Classification: fictional workshop data, public-safe.
- Permitted use: teaching, local validation, and reusable example adaptation.
- Prohibited use: representing a real vendor decision or mixing with live data.
- Freshness: the fixture and policy files are read together from the same commit.
- Conflict behavior: cite both values, return CLARIFY unless P-04 requires STOP,
  and name the domain owner.
- Missing-data behavior: list only the missing fields and focused questions.
