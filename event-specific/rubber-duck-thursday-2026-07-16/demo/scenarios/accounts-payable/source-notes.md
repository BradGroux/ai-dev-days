# Fictional Accounts Payable Source Notes

Company: Northstar Industrial Services
Review date: July 16, 2026
All records are fictional.

## Purchase Orders and Receipts

| PO | Vendor | Authorized total | Received | Notes |
| --- | --- | ---: | --- | --- |
| PO-4102 | Atlas Safety Supply | $4,800 | Complete | 200 safety kits received. |
| PO-4108 | Gulf Coast Equipment | $12,250 | Partial | 4 of 5 pumps received. |
| PO-4110 | Beacon Calibration | $2,100 | Complete | Calibration service accepted. |

## Invoices

| Invoice | Vendor | PO | Amount | Received date | Signal |
| --- | --- | --- | ---: | --- | --- |
| INV-8841 | Atlas Safety Supply | PO-4102 | $4,800 | Jul 14 | Exact match. |
| INV-7749 | Gulf Coast Equipment | PO-4108 | $12,250 | Jul 15 | Bills for 5 pumps; only 4 received. |
| INV-3304 | Beacon Calibration | PO-4110 | $2,100 | Jul 15 | Same amount and date as INV-3301 already queued. |

## Rules

- Never expose or change bank details in the demo.
- A clean three-way match may be marked ready for human approval.
- Quantity, price, duplicate, or vendor-identity exceptions must be held.
- The agent may draft a question but may not send it.
- Only an authorized AP reviewer may approve or release payment.
