#!/usr/bin/env bash
set -euo pipefail

echo "Running publication safety scan..."

status=0

scan() {
  local label="$1"
  local pattern="$2"
  shift 2

  if git grep -lE \
    "$pattern" -- "$@" \
    ':(exclude)projects/beaver-badges/app/package-lock.json' \
    ':(exclude)scripts/publication-scan.sh'; then
    echo
    echo "Potential issue: ${label}"
    echo
    status=1
  else
    result=$?
    if [[ "$result" -ne 1 ]]; then
      echo "Publication scanner failed: ${label}" >&2
      exit "$result"
    fi
  fi
}

scan "merge conflict markers" '^(<<<<<<<|=======|>>>>>>>)' .
scan "local user paths" '/Users/|C:\\Users\\|/home/[^/[:space:]]+' .
scan "private email addresses" 'bradgroux@hotmail\.com|brad\.groux@digitalmeld\.io' .
scan "likely API/token assignments" '(api[_-]?key|token|password|secret)[[:space:]]*[:=][[:space:]]*["'\'']?[A-Za-z0-9_./+=-]{16,}' .
scan "old OpenClaw install path" 'ollama launch openclaw|setup-guides/ollama|openclaw-ollama|Ollama installed' .

command -v gitleaks >/dev/null || { echo "Required scanner unavailable: gitleaks" >&2; exit 1; }
scan_root="$(mktemp -d)"
trap 'rm -rf "$scan_root"' EXIT
while IFS= read -r -d '' public_file; do
  mkdir -p "$scan_root/$(dirname "$public_file")"
  cp "$public_file" "$scan_root/$public_file"
done < <(git ls-files -z)
gitleaks dir "$scan_root" --no-banner --redact --log-level error

if [[ "$status" -eq 0 ]]; then
  echo "Publication scan passed."
else
  echo "Publication scan found potential issues. Review matches before publishing."
fi

exit "$status"
