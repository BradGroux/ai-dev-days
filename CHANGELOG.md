# Changelog

## Unreleased

- Refined the Houston Business Analysts deck with a presenter introduction,
  simplified community slide, corrected icon alignment, explicit SOP and PRD
  definitions, scenario starters, and a combined HOUBAs feedback and Start
  Small, Think Big community close.

## 1.0.0 - 2026-08-03

- Adopted Open Framework Commons v1.0.0, initially at
  `27870fb1d57d951b9ef5a3a86f33ef068ee557da`, and refreshed the exact pin to
  `a0f0d384e9010a65d1a21a324b4c912433d5e031` after Commons republished the
  tag. AI Dev Days remains an independent learning community that owns its
  curriculum, events, community practices, examples, research, governance,
  roadmap, and releases.
- Renamed the repository and program from OpenClaw Dev Days to AI Dev Days
  while preserving OpenClaw as a tool-specific track.
- Added an AI-Native Operating Framework teaching guide for events or lessons
  that select that framework, while keeping AI Dev Days' program method and
  authority product-local.
- Added a program charter, governance, decision records, contribution SOP,
  Code of Conduct, sensitive-disclosure policy, MIT License, and citation
  metadata for the version 1.0.0 baseline.
- Added a canonical research and education method that carries source-grounded
  findings through Understand, Document, Validate, Approve, Use, and Improve.
- Added a visual program map for the research-to-learning loop and the boundary
  between Commons, AI Dev Days-owned work, and selected teaching contexts.
- Added a public-source Digital Meld operating-research synthesis with explicit
  reuse boundaries and program implications.
- Added an explicit release process and prepared version 1.0.0 release notes
  with an owner approval gate.
- Updated the Beaver Badges PostCSS development dependency to a patched release
  and added a high-severity dependency audit to the release validation gate.
- Refreshed the Beaver Badges React, React DOM, React types, Tailwind CSS,
  TypeScript, and Vite dependencies and moved the quality workflow to
  `actions/setup-node@v7`.
- Renamed all dated event folders to the `YYYY-MM-DD-<event-slug>` convention
  and updated repository navigation, metadata, embedded seed data, and links.
- Added repository and event-path migration guidance.
- Added the August 19, 2026 Houston Business Analysts first-pass event packet,
  attendee workbook, prompts, runbooks, and verified fictional vendor-onboarding
  demo workspace; added the BA-focused HTML deck, curriculum map, speaker notes,
  organizer assets, and deck verification while deferring the PDF until final
  slide approval.
- Added the June 1, 2026 GitHub Build creator demo packet with deck, prompt pack, speaker notes, fallback plan, and Discord QR asset.
- Added repository audit, external link checking, and a GitHub Actions quality workflow.
- Added Dependabot coverage for Beaver Badges app dependencies and GitHub Actions.
- Added GitHub issue templates and a pull request checklist.
- Added contributor workflow guidance in `CONTRIBUTING.md`.
- Refactored Beaver Badges into typed helpers/components with visual smoke coverage.
- Added event metadata validation and completed the audit backlog from issue tracking.
- Added a root start page for attendees, facilitators, organizers, and contributors.
- Added a root facilitator runbook.
- Added a reusable event template under `event-specific/_template/`.
- Added a research folder note clarifying that raw research is not attendee instruction.
- Added `scripts/publication-scan.sh` for lightweight publication safety checks.
- Renamed the Microsoft Foundry setup guide to `setup-guides/microsoft-foundry.md`.

## 2026-05-04

- Removed the OpenClaw install path that depended on Ollama.
- Updated Mac and Windows setup docs to use direct OpenClaw installers.
- Updated TAMU onboarding guidance to use the workshop Microsoft Foundry key.
