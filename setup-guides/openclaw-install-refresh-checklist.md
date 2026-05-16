# OpenClaw Install Command Refresh Checklist

Use this when OpenClaw installer behavior, provider onboarding, or upstream docs change.

## Files To Check

- `README.md`
- `START-HERE.md`
- `RUNBOOK.md`
- `setup-guides/openclaw-mac.md`
- `setup-guides/openclaw-windows.md`
- `setup-guides/ai-assisted-openclaw-install.md`
- `setup-guides/microsoft-foundry.md`
- `curriculum/setup-guides/mac.md`
- `curriculum/setup-guides/windows.md`
- `troubleshooting/openclaw-install.md`
- `event-specific/*/requirements.md`
- `event-specific/*/attendee-links.md`
- `event-specific/*/*onboarding*.md`

## Review Steps

- [ ] Confirm the Mac installer command is current.
- [ ] Confirm the Windows installer command is current.
- [ ] Confirm onboarding flags, provider names, and model names match current OpenClaw behavior.
- [ ] Keep evergreen install docs generic.
- [ ] Keep workshop-provided provider/model/API-key details inside event-specific docs.
- [ ] Check that troubleshooting docs still describe current failure modes and commands.
- [ ] Update event packets that intentionally pin a workshop provider or model.

## Verification

```bash
./scripts/publication-scan.sh
node scripts/audit-repo.mjs
```
