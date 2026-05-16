# Beaver Badges

Beaver Badges is the featured project for the TAMU OpenClaw workshop.

It is a small, playful app used to show how a team of specialized AI agents can shape a product idea, clarify an MVP, build a simple app, and improve the supporting documentation.

## Stack

- React
- Vite
- Tailwind CSS
- JSON-backed data

## Goal

Track location visits, unlock badges, and show how a small product can be shaped by a team of specialized AI agents.

## Run the app

From this folder:

```bash
cd projects/beaver-badges/app
npm ci
npm run dev
```

Then open the local URL printed by Vite.

## Build check

```bash
cd projects/beaver-badges/app
npm ci
npm run check
```

The check runs TypeScript validation and a production build. A successful check means the workshop demo app is ready enough to use.

## Visual smoke check

```bash
cd projects/beaver-badges/app
npx playwright install chromium
npm run smoke:visual
```

The smoke check starts Vite, verifies desktop and mobile rendering, checks region filtering, exercises reset/export controls, and opens the architecture showcase HTML.

## Current MVP

- JSON-backed locations with explicit regions
- region filtering
- visited-state toggles
- local-only saved progress
- visit dates
- reset and JSON export controls
- reachable badge progress for the five-stop demo route
- roadmap badge display for larger milestone ideas

## Workshop tasks

Use the agent team to improve the project in this order:

1. **Market Researcher** — identify comparable badge, travel, and gamification patterns.
2. **Idea Validator** — decide what belongs in the MVP versus the roadmap.
3. **Project Manager** — turn the MVP into a short task list.
4. **Coder** — implement or explain the next small app improvement.
5. **Outreach Assistant** — write a short public-safe launch/update post.

## README improvement exercise

Ask the agent team:

```text
Review the Beaver Badges README and improve it so a new person can quickly understand:
1. what the project is,
2. who it is for,
3. how to run it,
4. what the MVP includes,
5. what comes next.

Keep it concise and public-safe.
```

## Done means

- the app runs locally
- the MVP is easy to explain
- the README tells a newcomer what to do next
- the agent team produced at least one useful improvement
