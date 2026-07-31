# TAMU OpenClaw Onboarding: TAMU-gpt-5.5

Audience: TAMU OpenClaw Dev Days attendees.

Use this guide after you have joined the workshop Discord and have the API key from Brad.

Do not post API keys in Discord, GitHub, screenshots, or shared documents. If you need the key, DM Brad on Discord.

## What you will configure

- Provider: `microsoft-foundry`
- Model path: `microsoft-foundry/TAMU-gpt-5.5`
- Model id: `TAMU-gpt-5.5`
- Base URL: `https://dm-openclaw-resource.services.ai.azure.com/openai/v1`
- API key placeholder: `INSERT API KEY BRAD PROVIDED HERE - DM ON DISCORD IF NEEDED`

## 1. Install OpenClaw

### Mac

Open Terminal and paste:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

Close Terminal, open a new Terminal, then paste:

```bash
openclaw --version
```

### Windows

Open PowerShell and paste:

```powershell
iwr -useb https://openclaw.ai/install.ps1 | iex
```

Close PowerShell, open a new PowerShell window, then paste:

```powershell
openclaw --version
```

## 2. Run OpenClaw onboarding

### Mac

Paste:

```bash
openclaw onboard --install-daemon
```

### Windows

Paste:

```powershell
openclaw onboard --install-daemon
```

If onboarding asks for a provider and you see Microsoft Foundry, choose it. If you do not see it, finish onboarding with the closest available option and continue to the config step below.

## 3. Configure the TAMU-gpt-5.5 model

This step updates your local OpenClaw config file:

- Mac/Linux: `~/.openclaw/openclaw.json`
- Windows: `%USERPROFILE%\.openclaw\openclaw.json`

It also creates a backup before changing anything.

### Mac

Replace the placeholder text with the API key Brad provided, then paste the full command:

```bash
TAMU_OPENCLAW_API_KEY='INSERT API KEY BRAD PROVIDED HERE - DM ON DISCORD IF NEEDED' node <<'NODE'
const fs = require("fs");
const os = require("os");
const path = require("path");

const apiKey = process.env.TAMU_OPENCLAW_API_KEY;
if (!apiKey || apiKey.includes("INSERT API KEY")) {
  console.error("Replace the placeholder with the API key Brad provided, then run this again.");
  process.exit(1);
}

const configPath = path.join(os.homedir(), ".openclaw", "openclaw.json");
const backupPath = `${configPath}.tamu-backup-${Date.now()}`;
const config = fs.existsSync(configPath)
  ? JSON.parse(fs.readFileSync(configPath, "utf8"))
  : {};

fs.mkdirSync(path.dirname(configPath), { recursive: true });
if (fs.existsSync(configPath)) {
  fs.copyFileSync(configPath, backupPath);
  console.log(`Backup created: ${backupPath}`);
}

config.agents ??= {};
config.agents.defaults ??= {};
config.agents.defaults.model = { primary: "microsoft-foundry/TAMU-gpt-5.5" };
config.agents.defaults.models ??= {};
config.agents.defaults.models["microsoft-foundry/TAMU-gpt-5.5"] = {};
config.agents.defaults.workspace ??= path.join(os.homedir(), ".openclaw", "workspace");

config.models ??= {};
config.models.mode = "merge";
config.models.providers ??= {};
config.models.providers["microsoft-foundry"] = {
  baseUrl: "https://dm-openclaw-resource.services.ai.azure.com/openai/v1",
  api: "openai-completions",
  authHeader: false,
  apiKey,
  headers: {
    "api-key": apiKey
  },
  models: [
    {
      id: "TAMU-gpt-5.5",
      name: "gpt-5.5",
      api: "openai-completions",
      reasoning: false,
      input: ["text", "image"],
      cost: {
        input: 0,
        output: 0,
        cacheRead: 0,
        cacheWrite: 0
      },
      contextWindow: 128000,
      maxTokens: 16384,
      compat: {
        supportsStore: false,
        maxTokensField: "max_completion_tokens"
      }
    }
  ]
};

fs.writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`);
console.log("Configured OpenClaw model: microsoft-foundry/TAMU-gpt-5.5");
NODE
```

### Windows

Replace the placeholder text with the API key Brad provided, then paste the full command:

```powershell
$env:TAMU_OPENCLAW_API_KEY = "INSERT API KEY BRAD PROVIDED HERE - DM ON DISCORD IF NEEDED"
node -e @'
const fs = require("fs");
const os = require("os");
const path = require("path");

const apiKey = process.env.TAMU_OPENCLAW_API_KEY;
if (!apiKey || apiKey.includes("INSERT API KEY")) {
  console.error("Replace the placeholder with the API key Brad provided, then run this again.");
  process.exit(1);
}

const configPath = path.join(os.homedir(), ".openclaw", "openclaw.json");
const backupPath = `${configPath}.tamu-backup-${Date.now()}`;
const config = fs.existsSync(configPath)
  ? JSON.parse(fs.readFileSync(configPath, "utf8"))
  : {};

fs.mkdirSync(path.dirname(configPath), { recursive: true });
if (fs.existsSync(configPath)) {
  fs.copyFileSync(configPath, backupPath);
  console.log(`Backup created: ${backupPath}`);
}

config.agents ??= {};
config.agents.defaults ??= {};
config.agents.defaults.model = { primary: "microsoft-foundry/TAMU-gpt-5.5" };
config.agents.defaults.models ??= {};
config.agents.defaults.models["microsoft-foundry/TAMU-gpt-5.5"] = {};
config.agents.defaults.workspace ??= path.join(os.homedir(), ".openclaw", "workspace");

config.models ??= {};
config.models.mode = "merge";
config.models.providers ??= {};
config.models.providers["microsoft-foundry"] = {
  baseUrl: "https://dm-openclaw-resource.services.ai.azure.com/openai/v1",
  api: "openai-completions",
  authHeader: false,
  apiKey,
  headers: {
    "api-key": apiKey
  },
  models: [
    {
      id: "TAMU-gpt-5.5",
      name: "gpt-5.5",
      api: "openai-completions",
      reasoning: false,
      input: ["text", "image"],
      cost: {
        input: 0,
        output: 0,
        cacheRead: 0,
        cacheWrite: 0
      },
      contextWindow: 128000,
      maxTokens: 16384,
      compat: {
        supportsStore: false,
        maxTokensField: "max_completion_tokens"
      }
    }
  ]
};

fs.writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`);
console.log("Configured OpenClaw model: microsoft-foundry/TAMU-gpt-5.5");
'@
```

## 4. Confirm the config

### Mac

Paste:

```bash
node -e 'const c=require(process.env.HOME+"/.openclaw/openclaw.json"); console.log(c.agents.defaults.model.primary); console.log(c.models.providers["microsoft-foundry"].models[0].id);'
```

You should see:

```text
microsoft-foundry/TAMU-gpt-5.5
TAMU-gpt-5.5
```

### Windows

Paste:

```powershell
node -e "const path=require('path'); const c=require(path.join(process.env.USERPROFILE,'.openclaw','openclaw.json')); console.log(c.agents.defaults.model.primary); console.log(c.models.providers['microsoft-foundry'].models[0].id);"
```

You should see:

```text
microsoft-foundry/TAMU-gpt-5.5
TAMU-gpt-5.5
```

## 5. Restart and verify OpenClaw

### Mac

Paste:

```bash
openclaw doctor
openclaw gateway restart
openclaw gateway status
openclaw dashboard
```

### Windows

Paste:

```powershell
openclaw doctor
openclaw gateway restart
openclaw gateway status
openclaw dashboard
```

If `openclaw gateway restart` is not available in your installed version, paste these instead:

### Mac

```bash
openclaw gateway stop
openclaw gateway start
openclaw gateway status
openclaw dashboard
```

### Windows

```powershell
openclaw gateway stop
openclaw gateway start
openclaw gateway status
openclaw dashboard
```

## 6. Send the first test prompt

In the OpenClaw dashboard, paste:

```text
I am at TAMU OpenClaw Dev Days. Confirm that the TAMU-gpt-5.5 setup is working and give me one useful next step for today's workshop.
```

## Success checklist

- [ ] `openclaw --version` works
- [ ] `openclaw onboard --install-daemon` completed
- [ ] `~/.openclaw/openclaw.json` or `%USERPROFILE%\.openclaw\openclaw.json` has `microsoft-foundry/TAMU-gpt-5.5`
- [ ] `openclaw doctor` completes
- [ ] `openclaw gateway status` shows the gateway running
- [ ] `openclaw dashboard` opens
- [ ] The first test prompt receives a response

## Troubleshooting

### `openclaw` is not found

Close and reopen your terminal first.

On Mac, paste:

```bash
echo "$PATH"
npm prefix -g
```

On Windows, paste:

```powershell
$env:Path
npm prefix -g
```

Ask for help if the OpenClaw install location is missing from your PATH.

### The model does not respond

Check that you replaced the placeholder API key in both config fields:

- `models.providers.microsoft-foundry.apiKey`
- `models.providers.microsoft-foundry.headers.api-key`

If you do not have the API key, DM Brad on Discord.

### You need to restore your old config

The config command creates a backup named like:

```text
openclaw.json.tamu-backup-1780000000000
```

Ask for help before restoring if you are not sure which backup to use.
