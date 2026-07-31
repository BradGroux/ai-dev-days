# PRD: Accounts Payable Exception Agent

## Problem

AP reviewers spend time assembling evidence before they can decide whether an invoice is safe to approve.

## Goal

Create a draft exception packet that groups clean matches, holds, missing evidence, and reviewer questions.

## Users

- AP specialist
- Purchasing owner
- Receiving lead
- Finance approver

## Inputs

- invoice register
- purchase orders
- receipt records
- prior invoice queue
- approval policy

## Output

A Markdown and on-screen review packet with status, evidence, reason, next question, and required approver.

## Boundaries

- No bank data access or display
- No vendor-master changes
- No external messages
- No invoice approval
- No payment release

## Acceptance Criteria

- Every invoice maps to its source evidence.
- Quantity and amount conflicts are explicit.
- Likely duplicates are held, not silently removed.
- Clean records are labeled ready for human approval, never approved.
- Missing information creates a stop condition.
