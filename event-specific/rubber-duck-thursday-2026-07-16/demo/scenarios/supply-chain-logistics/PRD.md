# PRD: Supply Chain Logistics Exception Agent

## Problem

Logistics teams lose time collecting shipment events, requirements, customer impact, and ownership before they can resolve an exception.

## Goal

Create a draft exception desk that ranks risk, shows evidence, and gives the owner a bounded next decision.

## Output

- prioritized exception queue
- evidence and business impact
- owner and approval requirement
- draft carrier or internal question
- two bounded response options when evidence supports them

## Boundaries

- No carrier or customer contact
- No rebooking or rerouting
- No purchase-order or inventory changes
- No product disposition decision

## Acceptance Criteria

- Every exception maps to shipment evidence and a requirement.
- Temperature and job-critical issues are escalated.
- Clean shipments do not create noise.
- The human owner approves every external action.
