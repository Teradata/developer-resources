#!/bin/bash

set -euo pipefail

PROJECT_DIR="${PROJECT_DIR:-tech-guides}"

if [[ ! -d "$PROJECT_DIR" ]]; then
  echo "Error: missing project directory: $PROJECT_DIR" >&2
  exit 2
fi

h1_issues=0
h1_missing=0
fence_issues=0

while IFS= read -r file; do
  rel_file="${file#$PROJECT_DIR/}"

  # Report code fences using attribute syntax often unsupported by strict Markdown parsers.
  while IFS=: read -r line_no line_text; do
    if [[ -n "$line_no" ]]; then
      if [[ "$fence_issues" -eq 0 ]]; then
        echo "Unsupported code fence attributes (Fluid Topics Markdown connector):"
      fi
      echo "$rel_file:$line_no: $line_text"
      fence_issues=$((fence_issues + 1))
    fi
  done < <(grep -nE '^```[^`]*(role|id)=|^```\s*[A-Za-z0-9_+\-]+\s*,.*$' "$file" || true)

  # Count H1 headings outside fenced code blocks.
  h1_count="$(awk '
    BEGIN { in_code = 0; h1 = 0 }
    /^```/ { in_code = !in_code; next }
    !in_code && /^# / { h1++ }
    END { print h1 }
  ' "$file")"

  if [[ "$h1_count" -gt 1 ]]; then
    if [[ "$h1_issues" -eq 0 ]]; then
      echo
      echo "Multiple H1 headings detected (MD-0012 risk):"
    fi
    echo "$rel_file: h1_count=$h1_count"
    h1_issues=$((h1_issues + 1))
  elif [[ "$h1_count" -eq 0 ]]; then
    if [[ "$h1_missing" -eq 0 ]]; then
      echo
      echo "Missing H1 heading detected (MD-0011 risk):"
    fi
    echo "$rel_file"
    h1_missing=$((h1_missing + 1))
  fi
done < <(find "$PROJECT_DIR" -type f -name '*.md' ! -path '*/_partials/*' | sort)

echo
printf 'Markdown precheck summary: fence_issues=%s h1_issues=%s h1_missing=%s\n' "$fence_issues" "$h1_issues" "$h1_missing"

if [[ "$fence_issues" -gt 0 || "$h1_issues" -gt 0 || "$h1_missing" -gt 0 ]]; then
  exit 1
fi
