# OpenClaw Dev Days Helper Runbook — Install Triage

## Prime directive

Do not let install hell eat the workshop. Helpers should move people to a working path fast, then document blockers for later.

## Status lanes

### Green

- `openclaw --version` works
- model provider configured
- gateway status works
- dashboard opens
- first response received

Action: keep building.

### Yellow

- one or two pieces broken
- likely fixable within 10 minutes

Action: helper works one issue, then either green or rescue.

### Red

- managed laptop blocks installs
- PATH/env broken across multiple tools
- Windows/WSL networking issue
- no admin rights
- no account/API access

Action: move to rescue lane/demo path immediately.

## Triage order

1. Is OpenClaw installed?
2. Is onboarding complete?
3. Is a model provider configured?
4. Is the gateway running?
5. Does dashboard open?
6. Does model respond?

## Commands

Mac:

```bash
openclaw --version
openclaw doctor
openclaw gateway status
openclaw dashboard
```

Windows:

```powershell
openclaw --version
openclaw doctor
openclaw gateway status
openclaw dashboard
```

## Time-box rules

- 3 minutes: identify failure bucket
- 7 minutes: attempt one fix
- 10 minutes: green or rescue lane

No hero debugging during core teaching blocks.

## Common fixes

### Command missing

- Close/reopen terminal
- Check install completed
- Check PATH
- On Windows, reboot if installer added PATH but shell does not see it

### OpenClaw gateway not running

```bash
openclaw onboard --install-daemon
openclaw gateway status
```

### Provider unavailable

- Confirm the attendee chose the intended provider during onboarding
- Confirm key, endpoint, and deployment/model name
- Switch to rescue/demo lane if account or quota access is blocked

### Microsoft Foundry broken

- Confirm endpoint/key/deployment name
- Use deployment name in `microsoft-foundry/<workshop-gpt-5-5-deployment-name>`
- If it is not fixed in 10 minutes, move the attendee to the rescue/demo lane and return to the shared Chat GPT 5.5 key after the room is stable

## Rescue lane options

- Pair with green attendee
- Use facilitator dashboard/demo
- Use screenshots and complete memory/operator labs conceptually
- Use cloud/provider path if available
- Continue with Beaver Badges planning artifacts even without local install
