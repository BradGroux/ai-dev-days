#!/usr/bin/env bash
set -euo pipefail

echo "Running publication safety scan..."

status=0

scan() {
  local label="$1"
  local pattern="$2"
  shift 2

  if rg -n --hidden \
    --glob '!.git' \
    --glob '!.git/**' \
    --glob '!projects/beaver-badges/app/package-lock.json' \
    --glob '!scripts/publication-scan.sh' \
    "$pattern" "$@"; then
    echo
    echo "Potential issue: ${label}"
    echo
    status=1
  fi
}

scan "merge conflict markers" '^(<<<<<<<|=======|>>>>>>>)' .
scan "local user paths" '/Users/|C:\\Users\\|/home/[^/[:space:]]+' .
scan "private email addresses" 'bradgroux@hotmail\.com|brad\.groux@digitalmeld\.io' .
scan "likely API/token assignments" '(api[_-]?key|token|password|secret)[[:space:]]*[:=][[:space:]]*["'\'']?[A-Za-z0-9_./+=-]{16,}' .
scan "old OpenClaw install path" 'ollama launch openclaw|setup-guides/ollama|openclaw-ollama|Ollama installed' .

if [[ "$status" -eq 0 ]]; then
  echo "Publication scan passed."
else
  echo "Publication scan found potential issues. Review matches before publishing."
fi

exit "$status"
