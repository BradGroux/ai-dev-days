# Beaver Badges - Product Requirements Document

## Overview

**Beaver Badges** is a fan-style web app that lets users track store visits, unlock achievement badges, and build a fun personal record of Texas road trip progress.

The product is intentionally lightweight for a live workshop:
- web app
- JSON-backed data
- no database required for the core build
- roadmap-friendly for future expansion

This app is the teaching vehicle for the TAMU OpenClaw workshop.

## Product Goal

Use a simple, memorable product to teach how a human orchestrator can direct a team of specialized AI agents to research, validate, plan, build, and promote a startup idea.

## Audience

Primary workshop audience:
- students
- professionals
- enthusiasts learning agentic workflows

Potential end users of the demo concept:
- Buc-ee's fans
- Texas road trippers
- collectors/completionists
- people who enjoy achievements and location tracking

## Core Product Story

A user visits locations over time and wants a fun way to track progress. Beaver Badges turns those visits into milestones, badges, and momentum.

## MVP Scope

### Must Have
- list of locations
- ability to mark locations as visited
- visited count
- badge milestones based on visit totals
- progress display toward next badge
- simple achievement UI
- JSON data source

### Nice to Have
- favorite locations
- visit notes
- date visited
- regional grouping
- simple filtering

### Roadmap
- map view
- streaks
- rankings
- road trip planner
- reviews
- photo uploads
- social sharing
- friend leaderboards
- recommendations

## User Stories

- As a user, I want to see a list of locations so I know what I can unlock.
- As a user, I want to mark locations as visited so the app reflects my progress.
- As a user, I want to unlock badges at milestones so the experience feels rewarding.
- As a user, I want to see progress toward my next badge so I know what to do next.
- As a user, I want the app to feel fast and simple so I can use it casually.

## Badge Logic

Initial milestone set:
- 1 location visited
- 5 locations visited
- 10 locations visited
- 25 locations visited

Possible badge names:
- First Stop
- Road Warrior
- Texas Traveler
- Beaver Legend

## Data Model

### Location

```json
{
  "id": "string",
  "name": "string",
  "city": "string",
  "state": "string",
  "region": "string",
  "visited": false,
  "visitedAt": "YYYY-MM-DD"
}
```

### Badge

```json
{
  "id": "string",
  "name": "string",
  "requiredVisits": 5,
  "description": "string",
  "roadmap": false
}
```

## UX Direction

- bright, playful, clean
- easy to demo in a workshop
- large progress signals
- obvious visited state changes
- friendly badge presentation
- mobile-friendly responsive layout

## Technical Direction

- React
- Vite
- Tailwind CSS
- JSON-backed seed data
- data-driven region filters
- local-only progress persistence
- reset and JSON export controls
- client-side state for workshop simplicity

## Workshop Agent Mapping

### Market Researcher
- identify comparable products and patterns
- suggest trends in gamification, travel, and community apps
- frame the market story

### Idea Validator
- test whether the concept is understandable and fun
- distinguish MVP from wishlist
- call out risks, clutter, and confusion

### Project Manager
- break the work into workshop-sized milestones
- define what must be done live versus discussed as roadmap
- sequence setup, PRD thinking, and build execution

### Coder
- scaffold the app
- implement JSON data model
- create visited state and badge logic
- style the UI

### Outreach Assistant
- create event copy
- create launch-style messaging
- propose follow-up community engagement
- turn the app into something people want to talk about

## Success Criteria

The workshop build is successful if attendees can:
- understand the product quickly
- see how agents contribute differently
- ship a working MVP with visible progress and badges
- leave with ideas for how to extend it

## Non-Goals for the Live Build

- production-grade auth
- production database
- perfect design system
- complete map experience
- enterprise architecture

This is a workshop app, not a venture-backed platform on day one.
