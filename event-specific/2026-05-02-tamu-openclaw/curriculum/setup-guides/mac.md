# TAMU OpenClaw Workshop - Mac Setup Guide

## Goal

Arrive with a working environment so you can spend the workshop building, not waiting on installs.

## Before You Arrive

Please create these accounts before the event if possible:
- GitHub
- OpenClaw
- Discord account and access to the Start Small, Think Big server
- Workshop-provided Chat GPT 5.5 Microsoft Foundry key, endpoint, and deployment name shared by facilitators during the event
- WhatsApp on your phone only if you want to watch the demo path after dashboard success

If you cannot finish before the event, we will help during setup, but arriving prepared will make your day much smoother.

## Required Apps

Install these before the workshop:
- Visual Studio Code
- Git
- Discord
- Obsidian
- Node.js LTS, optional because OpenClaw installer can help
- A modern browser (Chrome, Edge, or Arc recommended)

## Install with Homebrew

If you already use Homebrew, run:

```bash
brew install git node
brew install --cask visual-studio-code discord obsidian
```

If you do not have Homebrew yet, install it from:
- https://brew.sh

Then run the commands above.

## Discord Check

Open Discord in the desktop app or browser and join the Start Small, Think Big server:

- https://discord.gg/Gmfkm7QVSF

We will use Discord during the workshop for shared links, announcements, questions, and the workshop-provided API key.

Safety note: do not post personal API keys, tokens, credentials, private data, or sensitive notes in Discord.

## GitHub Check

Open Terminal and run:

```bash
git --version
```

Then confirm you can log into GitHub in your browser.

## Create Your Workshop Folder

In Terminal:

```bash
mkdir -p ~/openclaw-dev-days
cd ~/openclaw-dev-days
```

## Prepare a Memory File

Create a file called `memory.md` with three short notes:
- what you want to build
- what kind of agent would help you most
- one thing you want to learn

You can create it in Obsidian or VS Code.

## OpenClaw Install

Open Terminal and run:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

Open a new Terminal, then run:

```bash
openclaw --version
```

## Optional AI-Assisted Install Path

If you already have access to Codex CLI through ChatGPT or Claude Code through Claude/Anthropic, you can use an AI coding assistant to help with OpenClaw installation and troubleshooting.

Use the repo-level guide:

- [`../../setup-guides/ai-assisted-openclaw-install.md`](../../setup-guides/ai-assisted-openclaw-install.md)

This is optional. The main workshop path below still works without Codex or Claude Code.

## OpenClaw First Success Path

Preferred workshop path:

```bash
openclaw onboard --install-daemon
```

When prompted, choose the workshop Microsoft Foundry API key option and enter the values from the facilitator.

Verify:

```bash
openclaw --version
openclaw gateway status
openclaw dashboard
```

The default success path is dashboard-first. WhatsApp/mobile channels are removed from live setup and should only be shown as a demo after dashboard success.

## Microsoft Foundry Workshop Key Path

During OpenClaw onboarding, use the instructor-provided Chat GPT 5.5 values:
- endpoint URL
- API key
- exact deployment name

OpenClaw model ref format:

```text
microsoft-foundry/<workshop-gpt-5-5-deployment-name>
```

## Optional but Helpful

- Create a folder in Obsidian for workshop notes
- Log into GitHub in VS Code if you already know how
- Bring your charging cable
- Update macOS before the event if you are behind on security prompts or permission dialogs

## What We Will Help With Live

- Discord join/setup for the workshop server
- OpenClaw login and first-use setup
- Chat GPT 5.5 Microsoft Foundry setup for all attendees during onboarding
- WhatsApp demo only after dashboard success
- GitHub basics if you are new
- troubleshooting package install issues

## Success Check Before You Leave Home

You are in good shape if you can say yes to these:
- VS Code is installed
- Discord is installed or available in your browser
- Git works in Terminal
- Obsidian opens
- OpenClaw dashboard opens or you know you need helper lane
- GitHub account is ready
- you have joined or can join the SSTB Discord
- you have at least one Markdown note created
