#!/bin/bash

set -euo pipefail

PROJECT_DIR="${PROJECT_DIR:-tech-guides}"
TOC_FILE="$PROJECT_DIR/toc.yml"

if [[ ! -f "$TOC_FILE" ]]; then
  echo "Error: missing TOC file: $TOC_FILE" >&2
  exit 2
fi

linked_tmp="$(mktemp)"
all_md_tmp="$(mktemp)"
missing_tmp="$(mktemp)"
orphans_tmp="$(mktemp)"

cleanup() {
  rm -f "$linked_tmp" "$all_md_tmp" "$missing_tmp" "$orphans_tmp"
}
trap cleanup EXIT

# Extract all filepath entries from toc.yml.
while IFS= read -r line; do
  path="$(printf '%s\n' "$line" | sed -E "s/^[[:space:]]*-[[:space:]]*filepath:[[:space:]]*//; s/[[:space:]]+#.*$//; s/^['\"]//; s/['\"]$//")"

  if [[ -z "$path" ]]; then
    continue
  fi

  normalized_path="${path#./}"
  absolute_path="$PROJECT_DIR/$normalized_path"

  if [[ "$normalized_path" == *.md ]]; then
    printf '%s\n' "$normalized_path" >> "$linked_tmp"
  fi

  if [[ ! -f "$absolute_path" ]]; then
    printf '%s\n' "$normalized_path" >> "$missing_tmp"
  fi
done < <(grep -E '^[[:space:]]*-[[:space:]]*filepath:[[:space:]]*' "$TOC_FILE")

find "$PROJECT_DIR" -type f -name '*.md' ! -path '*/_partials/*' -print | sed "s#^$PROJECT_DIR/##" | sort -u > "$all_md_tmp"
sort -u "$linked_tmp" -o "$linked_tmp"
sort -u "$missing_tmp" -o "$missing_tmp"

comm -23 "$all_md_tmp" "$linked_tmp" > "$orphans_tmp"

missing_count="$(wc -l < "$missing_tmp" | tr -d ' ')"
orphan_count="$(wc -l < "$orphans_tmp" | tr -d ' ')"

if [[ "$missing_count" -gt 0 ]]; then
  echo "Broken TOC references (missing files):"
  cat "$missing_tmp"
else
  echo "No broken TOC references found."
fi

echo
if [[ "$orphan_count" -gt 0 ]]; then
  echo "Orphaned markdown files (not linked from toc.yml):"
  cat "$orphans_tmp"
else
  echo "No orphaned markdown files found."
fi

echo
printf 'Summary: missing=%s orphaned=%s\n' "$missing_count" "$orphan_count"

if [[ "$missing_count" -gt 0 ]]; then
  exit 1
fi
