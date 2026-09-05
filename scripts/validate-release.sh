#!/usr/bin/env bash

set -euo pipefail

repository_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

if [[ $# -ne 0 ]]; then
  echo "Usage: scripts/validate-release.sh" >&2
  exit 2
fi

cd "$repository_root"

for required_command in bash git node npm ruby gitleaks; do
  if ! command -v "$required_command" >/dev/null 2>&1; then
    echo "Required validation command is unavailable: $required_command" >&2
    exit 1
  fi
done

git diff --check

./scripts/publication-scan.sh
node scripts/check-edition.mjs
node --test scripts/check-edition.test.mjs
node scripts/audit-repo.mjs
node scripts/check-external-links.mjs

node --test event-specific/2026-08-19-houston-business-analysts-codex/demo/test/vendor-review.test.mjs
node event-specific/2026-08-19-houston-business-analysts-codex/demo/verify-demo.mjs

ruby -e \
  'require "yaml"; ARGV.each { |file| Psych.parse_file(file); puts "PASS: YAML syntax: #{file}" }' \
  CITATION.cff \
  .github/dependabot.yml \
  .github/ISSUE_TEMPLATE/bug_report.yml \
  .github/ISSUE_TEMPLATE/config.yml \
  .github/ISSUE_TEMPLATE/research-or-curriculum-proposal.yml \
  .github/ISSUE_TEMPLATE/workshop-maintenance.yml \
  .github/workflows/quality.yml

(
  cd projects/beaver-badges/app
  npm audit --audit-level=high
  node --test scripts/storage.test.mjs
  npm run check
  npm run smoke:visual
)

echo "All AI Dev Days release validation checks passed."
