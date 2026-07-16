# PRD: Field Operations Dispatch Brief Agent

## Problem

Dispatchers assemble work orders, crew status, safety rules, access windows, and equipment constraints under morning time pressure.

## Goal

Draft a safe, evidence-backed dispatch brief that exposes conflicts before a human assigns work.

## Output

- proposed crew-to-work-order sequence
- safety and permit holds
- equipment and access conflicts
- questions for the dispatcher
- handoff summary for crews after approval

## Boundaries

- No crew assignment
- No customer or crew notification
- No schedule-system changes
- No bypass of safety or permit requirements

## Acceptance Criteria

- Every proposed assignment has skill coverage.
- Safety and access constraints are visible.
- Unavailable equipment blocks the affected start.
- The dispatcher owns the final assignment.
