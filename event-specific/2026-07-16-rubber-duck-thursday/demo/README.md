# Business Agent Demo Lab

This folder contains five public-safe, fictional OpenClaw business-agent demos. The demos are designed to show the workflow around the model, not pretend that an agent should own business decisions.

## Run the Lab

Open [index.html](index.html) in a browser. Choose a scenario, inspect the source records, and select **Run draft**. The lab reveals the draft output, deterministic checks, and required human approval.

## Shared Artifact Chain

Every scenario includes:

1. `source-notes.md`: fictional business context and records
2. `SOP.md`: the repeatable operating procedure
3. `PRD.md`: users, scope, outputs, boundaries, and acceptance criteria
4. `expected-output.md`: the prepared fallback result

Use [grill-with-docs-prompt.md](grill-with-docs-prompt.md) when adapting a scenario to another business workflow.

## Scenarios

- [Accounts Payable](scenarios/accounts-payable/PRD.md)
- [Marketing](scenarios/marketing/PRD.md)
- [Field Operations](scenarios/field-operations/PRD.md)
- [Lab Management](scenarios/lab-management/PRD.md)
- [Supply Chain Logistics](scenarios/supply-chain-logistics/PRD.md)

## Safety Boundary

Do not use real invoices, bank details, personal data, customer records, lab
results, shipment credentials, or private business information. Do not connect
live systems or allow the demo to send, pay, schedule, release, approve, or
modify external records.

All outputs are draft-only until reviewed by an authorized person.
