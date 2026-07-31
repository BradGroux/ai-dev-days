# Sanitized OpenClaw Config Snapshot — H.U.G. Demo

## For future VERITAS
This is a sanitized snapshot of the isolated `hug-demo` OpenClaw profile used for the H.U.G. Summer Summit 2026 demo. Secrets are intentionally redacted. Use this to reconstruct the demo environment shape, not to recover credentials.

- **Profile:** `hug-demo`
- **Config source:** `~/.openclaw-hug-demo/openclaw.json`
- **Demo workspace:** `~/OpenClaw-Demos/hug-summer-summit-2026`
- **Gateway port:** `19026`
- **Model provider/model:** `azure-foundry-openai/gpt-5.5-1`
- **Safety:** API keys, gateway tokens, and any secret-like fields are replaced with `<REDACTED>`.

```json
{
  "logging": {
    "redactSensitive": "tools"
  },
  "gateway": {
    "port": 19026,
    "mode": "local",
    "bind": "loopback",
    "controlUi": {
      "allowedOrigins": [
        "http://localhost:19026",
        "http://127.0.0.1:19026"
      ]
    },
    "auth": {
      "mode": "token",
      "token": "<REDACTED>",
      "rateLimit": {
        "maxAttempts": 10,
        "windowMs": 60000,
        "lockoutMs": 300000
      }
    },
    "tailscale": {
      "mode": "off",
      "resetOnExit": false
    }
  },
  "models": {
    "mode": "merge",
    "providers": {
      "azure-foundry-openai": {
        "baseUrl": "https://dm-openclaw-resource.services.ai.azure.com/api/projects/openclaw/openai/v1",
        "apiKey": "<REDACTED>",
        "api": "openai-completions",
        "models": [
          {
            "id": "gpt-5.5-1",
            "name": "GPT-5.5-1 (Azure Foundry)",
            "api": "openai-completions",
            "reasoning": false,
            "input": [
              "text"
            ],
            "cost": {
              "input": 0,
              "output": 0,
              "cacheRead": 0,
              "cacheWrite": 0
            },
            "contextWindow": 1000000,
            "maxTokens": "<REDACTED>"
          }
        ]
      }
    }
  },
  "agents": {
    "defaults": {
      "workspace": "~/OpenClaw-Demos/hug-summer-summit-2026",
      "model": {
        "primary": "azure-foundry-openai/gpt-5.5-1",
        "fallbacks": []
      },
      "models": {
        "azure-foundry-openai/gpt-5.5-1": {}
      },
      "userTimezone": "America/Chicago",
      "skipBootstrap": false
    }
  },
  "meta": {
    "lastTouchedVersion": "2026.6.6",
    "lastTouchedAt": "2026-06-26T17:12:42.976Z"
  }
}
```
