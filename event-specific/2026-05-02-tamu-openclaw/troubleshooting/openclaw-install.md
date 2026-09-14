# OpenClaw Install Troubleshooting

## `openclaw: command not found`

Close and reopen your terminal first. If the command is still unavailable, rerun the direct installer for your platform.

macOS/Linux:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

Windows PowerShell:

```powershell
iwr -useb https://openclaw.ai/install.ps1 | iex
```

Then verify:

```bash
openclaw --version
```

## Gateway not running

Run onboarding and install the local daemon:

```bash
openclaw onboard --install-daemon
openclaw gateway status
```

If status still fails:

```bash
openclaw doctor
```

## Model provider not configured

Rerun onboarding:

```bash
openclaw onboard --install-daemon
```

Choose the provider you plan to use and enter the required key, endpoint, deployment, or model values.

For TAMU, use the instructor-provided Microsoft Foundry values:

- API key
- endpoint URL
- exact deployment name

Model reference format:

```text
microsoft-foundry/<workshop-gpt-5-5-deployment-name>
```

## Microsoft Foundry model not found

- Use the deployment name, not just the marketing model name.
- Confirm the endpoint belongs to the resource that owns the deployment.
- Confirm the deployment status is active.
- Confirm the OpenClaw model reference uses `microsoft-foundry/<deployment-name>`.

## Dashboard does not open

Check gateway status first:

```bash
openclaw gateway status
```

Then try:

```bash
openclaw dashboard
```

If the browser still does not open, copy the dashboard URL shown by the command into your browser.

## Workshop rescue rule

If you are not green after 10 minutes, move to the helper/rescue lane. The goal is one working OpenClaw loop, not perfect local debugging during teaching time.
