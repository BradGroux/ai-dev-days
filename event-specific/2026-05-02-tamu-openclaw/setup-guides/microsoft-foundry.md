# OpenClaw Dev Days Setup Guide - Microsoft Foundry API Key

Audience: TAMU workshop attendees configuring OpenClaw to use the workshop-provided Microsoft Foundry / Azure OpenAI Chat GPT 5.5 API key during OpenClaw onboarding.

## Workshop decision

Use the direct OpenClaw installer as the baseline install path for both Mac and Windows. During onboarding, configure the workshop-provided **Chat GPT 5.5** Microsoft Foundry API key for TAMU attendees.

The key is shared for workshop use, so treat it like a temporary credential:

- do not paste it into repos, slides, screenshots, or chat
- distribute it through the instructor-approved private path only
- set quota/spend controls before the event
- rotate or revoke it immediately after the workshop

## What you need

- Workshop-provided Chat GPT 5.5 API key
- Workshop-provided Microsoft Foundry / Azure OpenAI endpoint URL
- Workshop-provided deployment name for Chat GPT 5.5
- OpenClaw installed with the direct platform installer

Important: OpenClaw uses the **deployment name**, not the marketing model label, in the model reference:

```text
microsoft-foundry/<deployment-name>
```

The bundled OpenClaw provider id is:

```text
microsoft-foundry
```

API-key auth method:

```text
microsoft-foundry-apikey
```

## 1. Instructor preflight: create or select the Foundry deployment

Portal path:

1. Go to <https://ai.azure.com>.
2. Sign in.
3. Create or select a Foundry project/resource.
4. Go to **Discover** → **Models**.
5. Choose the workshop model: **Chat GPT 5.5**.
6. Select **Deploy**.
7. Use **Custom settings** if you need to name the deployment explicitly.
8. Set or record the exact deployment name for the workshop Chat GPT 5.5 deployment. Example only:

```text
chat-gpt-5-5-devdays
```

9. Wait for deployment status **Succeeded**.
10. Copy:
    - endpoint URL
    - API key
    - deployment name

Classic Azure portal path:

1. Go to <https://portal.azure.com>.
2. Create or select an **Azure OpenAI** resource.
3. Create a model deployment in Azure AI Foundry or the Azure OpenAI resource UI.
4. Record endpoint, API key, and deployment name.

## 2. Attendee path: onboard OpenClaw with the workshop key

If OpenClaw has not been onboarded yet, run:

```bash
openclaw onboard --install-daemon --auth-choice microsoft-foundry-apikey
```

When prompted, provide the instructor-supplied values:

1. Workshop Chat GPT 5.5 API key
2. Endpoint URL, usually one of:

```text
https://<resource>.openai.azure.com
https://<resource>.services.ai.azure.com
```

3. Exact Chat GPT 5.5 deployment name. Use the provided deployment name exactly; do not guess from the model label. Example only:

```text
chat-gpt-5-5-devdays
```

4. Model family / request API:
   - Use **Responses API** for GPT-5, o-series, and Codex-style Azure OpenAI deployments.
   - Use **Chat Completions API** if the deployment only supports chat/completions.

If OpenClaw is already onboarded and you only need to add the provider, run:

```bash
openclaw models auth login --provider microsoft-foundry --method api-key --set-default
```

Use the same key, endpoint, deployment name, and request API guidance above.

## 3. Validate Foundry in OpenClaw

List models:

```bash
openclaw models list --provider microsoft-foundry
```

Check active model:

```bash
openclaw models status
```

Set model explicitly if needed:

```bash
openclaw models set microsoft-foundry/<workshop-gpt-5-5-deployment-name>
```

Direct smoke test:

```bash
openclaw infer model run \
  --local \
  --model microsoft-foundry/<workshop-gpt-5-5-deployment-name> \
  --prompt "Reply with exactly: foundry-ok" \
  --json
```

PowerShell:

```powershell
openclaw infer model run `
  --local `
  --model microsoft-foundry/<workshop-gpt-5-5-deployment-name> `
  --prompt "Reply with exactly: foundry-ok" `
  --json
```

## 4. Key safety rules

- Never paste real API keys into slides, repos, screenshots, or public chat.
- Use placeholders in curriculum:

```text
<WORKSHOP_GPT_5_5_API_KEY>
<WORKSHOP_AZURE_FOUNDRY_ENDPOINT>
<WORKSHOP_GPT_5_5_DEPLOYMENT_NAME>
```

- Set quota/spend controls before the event.
- Rotate or revoke the temporary workshop key immediately after the workshop.
- Do not let attendees copy keys from projected screens.

## 5. Troubleshooting

### 401 or 403

- Key does not match the endpoint/resource.
- Network restrictions block the attendee machine.
- API-key auth should use the `api-key` header; the OpenClaw flow handles this automatically.

### 404 or deployment not found

- Use the deployment name, not just model name.
- Confirm deployment status is **Succeeded**.
- Confirm endpoint belongs to the resource that owns the deployment.
- Confirm model ref is exactly:

```text
microsoft-foundry/<workshop-gpt-5-5-deployment-name>
```

### 400 Bad Request

- Wrong request API for the deployment.
- Re-run auth/onboarding and choose Chat Completions vs Responses appropriately.
- Some Azure deployments do not support all parameters.

### Quota/deployment failures

- Choose a supported model/region.
- Use a smaller deployment.
- Reallocate TPM from another deployment.
- Request quota ahead of the workshop.

## Success checklist

- [ ] Foundry/Azure OpenAI resource exists
- [ ] Chat GPT 5.5 deployment status is **Succeeded**
- [ ] Workshop endpoint, key, and exact deployment name are recorded privately
- [ ] `openclaw models list --provider microsoft-foundry` shows deployment
- [ ] `openclaw models set microsoft-foundry/<workshop-gpt-5-5-deployment-name>` succeeds
- [ ] Smoke test returns `foundry-ok`
