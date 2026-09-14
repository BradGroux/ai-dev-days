# OpenClaw Dev Days Setup Guide - Windows

Audience: attendees using Windows PC. The workshop baseline is native PowerShell with the direct OpenClaw installer, followed by OpenClaw onboarding and model provider selection.

## Goal

By the end, you should have:

- OpenClaw installed
- OpenClaw onboarded
- Gateway running
- Dashboard open
- First model response working

## Recommended path

Use **native Windows PowerShell** as the default. Use WSL2 only as the rescue lane if native Windows has PATH, permission, daemon, or installer issues.

## Prerequisites

- Windows 10 or later
- PowerShell or Windows Terminal
- A modern browser
- A model provider key or workshop-provided credential
- Optional but recommended: Git, VS Code, Obsidian

## 1. Install basics with Winget

Open PowerShell as your normal user:

```powershell
winget install --id Git.Git -e
winget install --id Microsoft.VisualStudioCode -e
winget install --id Obsidian.Obsidian -e
winget install --id OpenJS.NodeJS.LTS -e
```

If `winget` is unavailable, use official installers:

- VS Code: <https://code.visualstudio.com/>
- Obsidian: <https://obsidian.md/>
- Git: <https://git-scm.com/download/win>
- Node.js LTS: <https://nodejs.org/>

Close and reopen PowerShell after installing.

## 2. Install OpenClaw

Run the Windows installer:

```powershell
iwr -useb https://openclaw.ai/install.ps1 | iex
```

Then open a new PowerShell window and verify:

```powershell
openclaw --version
```

## 3. Onboard OpenClaw

Run onboarding and install the local gateway daemon:

```powershell
openclaw onboard --install-daemon
```

When prompted, choose your model provider. For a generic workshop or personal setup, use whichever provider you already have access to, such as Microsoft Foundry, OpenAI, Anthropic, or another OpenClaw-supported provider.

Keep these values ready:

- provider name
- API key or login method
- endpoint URL if your provider requires one
- exact deployment or model name

## 4. Verify OpenClaw

```powershell
openclaw doctor
openclaw gateway status
openclaw dashboard
```

In the dashboard, send:

```text
I am at OpenClaw Dev Days. Confirm this setup works and give me one useful next step.
```

## 5. WSL2 fallback path

If native Windows gets stuck, use WSL2.

From PowerShell:

```powershell
wsl --install
```

Restart if prompted. Then in Ubuntu/WSL:

```bash
sudo apt update
sudo apt install -y git curl nodejs npm
curl -fsSL https://openclaw.ai/install.sh | bash
openclaw onboard --install-daemon
openclaw gateway status
openclaw dashboard
```

## Success checklist

- [ ] `openclaw --version` works
- [ ] `openclaw onboard --install-daemon` completed
- [ ] model provider is configured
- [ ] `openclaw gateway status` shows running/listening
- [ ] `openclaw dashboard` opens
- [ ] first prompt receives a response
