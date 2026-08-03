# SOP: Accounts Payable Exception Review

## Purpose

Turn a daily invoice packet into a reviewable exception queue without approving or paying invoices.

## Steps

1. Match each invoice to its vendor and purchase order.
2. Compare invoice amount and quantity with the authorized PO.
3. Compare billed quantity with the receipt record.
4. Search the review packet for likely duplicates by vendor, amount, service date, and reference.
5. Classify each record as `ready for review`, `hold`, or `needs evidence`.
6. Draft the smallest question required to clear each exception.
7. Run deterministic checks for arithmetic, missing fields, and duplicate signals.
8. Present the packet to an authorized AP reviewer.

## Stop Conditions

Stop if the vendor identity, PO, receipt, tax treatment, bank instruction, or approval authority is unclear. Do not send a message, change vendor data, approve an invoice, or release payment.
