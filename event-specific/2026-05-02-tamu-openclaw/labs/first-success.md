# OpenClaw Dev Days Lab — First Success

## Purpose

Get every attendee to one visible OpenClaw win before adding channels, agents, or app-building complexity.

## Done means

- OpenClaw installed
- Gateway running
- Dashboard open
- Model responds to one prompt
- Attendee knows the next step

## Step 1 — Confirm commands

Mac/Linux:

```bash
openclaw --version
```

Windows PowerShell:

```powershell
openclaw --version
```

If either command fails, move to helper lane.

## Step 2 — Confirm onboarding and provider

```bash
openclaw models status
```

If no provider is configured, rerun onboarding:

```bash
openclaw onboard --install-daemon
```

## Step 3 — Confirm OpenClaw gateway

```bash
openclaw gateway status
```

If not running, try:

```bash
openclaw onboard --install-daemon
openclaw gateway status
```

## Step 4 — Open dashboard

```bash
openclaw dashboard
```

## Step 5 — Send first prompt

Use this exact prompt:

```text
I am at OpenClaw Dev Days. Confirm my setup works, summarize what is working in three bullets, and give me one next step.
```

## Checkpoint card

Mark your status:

- Green: dashboard open + response received
- Yellow: command works but model/gateway/dashboard stuck
- Red: install or command missing

## Rescue rule

If you are not green after 10 minutes, move to helper/rescue lane. Do not burn the whole workshop on local setup.

## Next step

For TAMU, this lab uses the workshop-provided Chat GPT 5.5 Microsoft Foundry key during onboarding. Do not start WhatsApp/mobile setup during the live lab; keep that as a facilitator demo after dashboard success.
