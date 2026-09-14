# OpenClaw Dev Days Setup Guide - Mac

Audience: attendees using macOS. The workshop baseline is the direct OpenClaw installer, followed by OpenClaw onboarding and model provider selection.

## Goal

By the end, you should have:

- OpenClaw installed
- OpenClaw onboarded
- Gateway running
- Dashboard open
- First model response working

## Prerequisites

- macOS 14 Sonoma or later preferred
- Terminal access
- A modern browser
- A model provider key or workshop-provided credential
- Optional but recommended: Git, VS Code, Obsidian

## 1. Install basics

If you use Homebrew:

```bash
brew install git node
brew install --cask visual-studio-code obsidian
```

If you do not have Homebrew, install it first from <https://brew.sh>, or use the official installers:

- VS Code: <https://code.visualstudio.com/>
- Obsidian: <https://obsidian.md/>
- Git: <https://git-scm.com/download/mac>
- Node.js LTS: <https://nodejs.org/>

Open a new Terminal after installing.

## 2. Install OpenClaw

Run the macOS/Linux installer:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

Then open a new Terminal and verify:

```bash
openclaw --version
```

## 3. Onboard OpenClaw

Run onboarding and install the local gateway daemon:

```bash
openclaw onboard --install-daemon
```

When prompted, choose your model provider. For a generic workshop or personal setup, use whichever provider you already have access to, such as Microsoft Foundry, OpenAI, Anthropic, or another OpenClaw-supported provider.

Keep these values ready:

- provider name
- API key or login method
- endpoint URL if your provider requires one
- exact deployment or model name

## 4. Verify OpenClaw

```bash
openclaw doctor
openclaw gateway status
openclaw dashboard
```

In the dashboard, send:

```text
I am at OpenClaw Dev Days. Confirm this setup works and give me one useful next step.
```

## 5. If `openclaw` is not found

Check Node/npm path:

```bash
node -v
npm prefix -g
echo "$PATH"
```

Add the npm global bin path if needed:

```bash
export PATH="$(npm prefix -g)/bin:$PATH"
```

Then add the same line to `~/.zshrc` and open a new Terminal.

## Success checklist

- [ ] `openclaw --version` works
- [ ] `openclaw onboard --install-daemon` completed
- [ ] model provider is configured
- [ ] `openclaw gateway status` shows running/listening
- [ ] `openclaw dashboard` opens
- [ ] first prompt receives a response
