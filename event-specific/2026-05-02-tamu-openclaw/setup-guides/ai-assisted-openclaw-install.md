# AI-Assisted OpenClaw Install Guide

This guide is for attendees who already have access to an AI coding assistant and want help installing or troubleshooting OpenClaw.

Use this as an optional support path. The main workshop baseline remains:

```bash
openclaw onboard --install-daemon
```

## Who this is for

Use this guide if you have one of these:

- ChatGPT Plus, Pro, Business, Edu, or Enterprise access and want to use **Codex CLI**
- Claude Pro, Max, Team, Enterprise, or Console access and want to use **Claude Code**

If you do not already have one of those subscriptions, skip this path. You do not need Codex or Claude Code to complete the workshop.

## Safety rules

Before using any coding assistant:

- Read commands before approving them.
- Do not paste personal API keys, tokens, passwords, or private data into prompts.
- Do not ask the assistant to publish anything to GitHub unless you understand what will be published.
- Keep the first install local and simple.
- If the assistant gets stuck twice, stop and use the workshop helper lane.

## Install Codex CLI

Official repo: https://github.com/openai/codex

### macOS with Homebrew

```bash
brew install --cask codex
codex
```

Sign in with ChatGPT when prompted.

### macOS, Windows, or Linux with npm

```bash
npm install -g @openai/codex
codex
```

Sign in with ChatGPT when prompted.

## Install Claude Code

Official docs: https://code.claude.com/docs/en/setup

### macOS with native installer

```bash
curl -fsSL https://claude.ai/install.sh | bash
claude
```

### macOS with Homebrew

```bash
brew install --cask claude-code
claude
```

### Windows with WinGet

```powershell
winget install Anthropic.ClaudeCode
claude
```

### Windows PowerShell with native installer

```powershell
irm https://claude.ai/install.ps1 | iex
claude
```

Sign in with Claude when prompted.

## Use Codex to help install OpenClaw

Create a workshop folder first:

```bash
mkdir -p ~/openclaw-dev-days
cd ~/openclaw-dev-days
```

Then run:

```bash
codex
```

Use this prompt:

```text
I am attending an OpenClaw Dev Days workshop.

Help me install and verify OpenClaw on this computer.

Use the workshop baseline first:
1. Install OpenClaw with the direct installer for my platform.
2. Verify OpenClaw with: openclaw --version
3. Run: openclaw onboard --install-daemon
4. Help me choose and configure my model provider.
5. Verify the gateway with: openclaw gateway status
6. Help me open the dashboard.

Before running commands, explain what each command does. Do not ask for or store personal API keys. If installation fails twice, stop and summarize the blocker so I can ask a workshop helper.
```

## Use Claude Code to help install OpenClaw

Create a workshop folder first:

```bash
mkdir -p ~/openclaw-dev-days
cd ~/openclaw-dev-days
```

On Windows PowerShell:

```powershell
mkdir $HOME\openclaw-dev-days
cd $HOME\openclaw-dev-days
```

Then run:

```bash
claude
```

Use this prompt:

```text
I am attending an OpenClaw Dev Days workshop.

Help me install and verify OpenClaw on this computer.

Use the workshop baseline first:
1. Install OpenClaw with the direct installer for my platform.
2. Verify OpenClaw with: openclaw --version
3. Run: openclaw onboard --install-daemon
4. Help me choose and configure my model provider.
5. Verify the gateway with: openclaw gateway status
6. Help me open the dashboard.

Before running commands, explain what each command does. Do not ask for or store personal API keys. If installation fails twice, stop and summarize the blocker so I can ask a workshop helper.
```

## OpenClaw install commands

### macOS / Linux

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
openclaw onboard --install-daemon
openclaw gateway status
openclaw dashboard
```

### Windows PowerShell

```powershell
iwr -useb https://openclaw.ai/install.ps1 | iex
openclaw onboard --install-daemon
openclaw gateway status
openclaw dashboard
```

## Done means

You are ready for the main workshop when:

- `openclaw --version` works
- onboarding completes with a model provider selected
- `openclaw gateway status` works
- the dashboard opens
- you receive one OpenClaw response

If you only get partway there, that is okay. Bring the blocker to the helper lane.
