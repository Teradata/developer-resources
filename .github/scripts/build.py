#!/usr/bin/env python3
"""
Pre-processing build script for Fluid Topics publishing.

Resolves MDX partial imports inline, strips .mdx files and _partials directories
from the output, then publishes via ftpub.

Usage:
    python build.py [--dry-run]
"""

import argparse
import os
import re
import shutil
import subprocess
import sys
from typing import Optional

SOURCE_DIR = "tech-guides"
BUILD_DIR = "build/tech-guides"
# Default to staging, override via environment variables in CI
FT_URL = os.environ.get("FT_URL", "https://docs-dev.teradata.com/")
API_KEY = os.environ.get("FT_API_KEY")  # Must be set via environment variable
SOURCE = "markdown"

# Matches:  import ComponentName from '../_partials/foo.mdx'
# Also handles escaped underscore: '../\_partials/foo.mdx'
IMPORT_RE = re.compile(
    r"^import\s+(\w+)\s+from\s+['\"]([^'\"]+\.mdx)['\"];?\s*$",
    re.MULTILINE,
)


# Fallback map for component tags whose import lines were already stripped.
# Maps component name -> partial filename (relative to the nearest _partials dir).
KNOWN_COMPONENTS: dict[str, str] = {
    "TrialDocsNote": "teradata_trial.mdx",
    "CommunityLink": "community_link.mdx",
    "CommunityLinkPartial": "community_link.mdx",
    "JupyterTrialsNote": "jupyter_notebook_trials_note.mdx",
    "ModelOpsBasic": "modelops-basic.mdx",
    "GettingStartedIntro": "getting-started-intro.mdx",
    "GettingStartedSummary": "getting-started-summary.mdx",
    "RunVantage": "run-vantage.mdx",
    "RunSampleQueries": "running-sample-queries.mdx",
    "RunSimpleQueries": "running-sample-queries.mdx",
    "InstallVeInPublic": "install-ve-in-public.mdx",
    "CloneRepo": "_clone-repo.mdx",
}


def find_partials_dir(start: str) -> Optional[str]:
    """Walk up from start directory looking for a _partials sibling directory."""
    current = start
    while True:
        candidate = os.path.join(current, "_partials")
        if os.path.isdir(candidate):
            return candidate
        parent = os.path.dirname(current)
        if parent == current:
            return None
        current = parent


def resolve_partial_path(import_path: str, source_file: str) -> str:
    """Resolve a relative .mdx import path to an absolute path."""
    # Unescape backslash-escaped underscores (Docusaurus artefact)
    import_path = import_path.replace("\\_", "_")
    source_dir = os.path.dirname(source_file)
    return os.path.normpath(os.path.join(source_dir, import_path))


def load_partial(path: str) -> str:
    """Read a partial file, stripping any leading/trailing whitespace."""
    with open(path, "r", encoding="utf-8") as f:
        return f.read().strip()


def resolve_content(
    content: str,
    file_path: str,
    missing: list[str],
    _seen: Optional[set] = None,
) -> str:
    """
    Recursively resolve all MDX partial imports in content.

    ``file_path`` is the path of the file (or partial) that owns this content —
    used to resolve relative import paths and to find the nearest _partials dir.
    ``missing`` accumulates warning messages for callers to report.
    ``_seen`` guards against circular partial references.

    Two-pass resolution:
    1. Explicit imports — parse 'import X from ...' lines, resolve the path,
       recursively resolve the partial's own imports, then inline the content.
    2. Fallback — any remaining known component tags with no import are resolved
       via KNOWN_COMPONENTS using the nearest _partials directory (also recursive).
    """
    if _seen is None:
        _seen = set()

    component_map: dict[str, str] = {}

    # Pass 1: explicit import lines
    for component_name, import_path in IMPORT_RE.findall(content):
        partial_path = resolve_partial_path(import_path, file_path)
        if not os.path.exists(partial_path):
            missing.append(f"  {component_name} -> {partial_path}")
            continue
        if partial_path in _seen:
            missing.append(f"  {component_name} -> circular reference: {partial_path}")
            continue
        raw = load_partial(partial_path)
        component_map[component_name] = resolve_content(
            raw, partial_path, missing, _seen | {partial_path}
        )

    # Remove all import lines
    content = IMPORT_RE.sub("", content)

    # Pass 2: fallback for known components with no import line
    partials_dir = find_partials_dir(os.path.dirname(file_path))
    for component_name, partial_filename in KNOWN_COMPONENTS.items():
        if component_name in component_map:
            continue  # already resolved via explicit import
        # Only bother if the tag actually appears in this content
        if f"<{component_name}" not in content:
            continue
        if partials_dir is None:
            missing.append(f"  {component_name} (fallback) -> no _partials dir found")
            continue
        partial_path = os.path.join(partials_dir, partial_filename)
        if not os.path.exists(partial_path):
            missing.append(f"  {component_name} (fallback) -> {partial_path}")
            continue
        if partial_path in _seen:
            missing.append(f"  {component_name} (fallback) -> circular reference: {partial_path}")
            continue
        raw = load_partial(partial_path)
        component_map[component_name] = resolve_content(
            raw, partial_path, missing, _seen | {partial_path}
        )

    # Replace each <ComponentName /> with its (fully resolved) partial content
    for component_name, partial_content in component_map.items():
        tag_re = re.compile(
            r"[ \t]*<" + re.escape(component_name) + r"\s*/?>[ \t]*",
            re.MULTILINE,
        )
        replacement = f"\n{partial_content}\n"
        content = tag_re.sub(lambda _: replacement, content)

    return content


def process_file(file_path: str) -> str:
    """
    Resolve all MDX partial imports in a markdown file and return
    the processed content with import lines removed.
    """
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    missing: list[str] = []
    content = resolve_content(content, file_path, missing, _seen={file_path})

    if missing:
        rel = os.path.relpath(file_path, BUILD_DIR)
        print(f"  WARNING: unresolved partials in {rel}:")
        for m in missing:
            print(m)

    # Collapse runs of 3+ blank lines down to 2
    content = re.sub(r"\n{3,}", "\n\n", content)

    return content


def build():
    if os.path.exists(BUILD_DIR):
        shutil.rmtree(BUILD_DIR)
    shutil.copytree(SOURCE_DIR, BUILD_DIR)

    md_files = []
    for root, dirs, files in os.walk(BUILD_DIR):
        # Skip _partials directories during walk (they'll be deleted after)
        dirs[:] = [d for d in dirs if d != "_partials"]
        for fname in files:
            if fname.endswith(".md"):
                md_files.append(os.path.join(root, fname))

    print(f"Processing {len(md_files)} markdown files...")
    for file_path in md_files:
        processed = process_file(file_path)
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(processed)

    # Remove _partials directories and .mdx files from build output
    removed_dirs = 0
    removed_files = 0
    for root, dirs, files in os.walk(BUILD_DIR, topdown=False):
        for d in dirs:
            if d == "_partials":
                shutil.rmtree(os.path.join(root, d))
                removed_dirs += 1
        for fname in files:
            if fname.endswith(".mdx"):
                os.remove(os.path.join(root, fname))
                removed_files += 1

    print(f"Removed {removed_dirs} _partials directories and {removed_files} .mdx files from build output.")


def run_checks():
    """Run the existing validation scripts against the build output."""
    env = os.environ.copy()
    # Override PROJECT_DIR so the check scripts point at the build output
    env["PROJECT_DIR"] = BUILD_DIR

    for script in [
        ".github/scripts/check-quickstarts-toc.sh",
        ".github/scripts/check-fluidtopics-markdown.sh",
    ]:
        print(f"\nRunning {script}...")
        result = subprocess.run(
            ["bash", "-c", f'PROJECT_DIR="{BUILD_DIR}" bash {script}'],
            capture_output=False,
        )
        if result.returncode != 0:
            print(f"Check failed: {script}", file=sys.stderr)
            sys.exit(result.returncode)


def publish():
    print(f"\nPublishing {BUILD_DIR} to {FT_URL}...")
    result = subprocess.run(
        ["ftpub", "collect_and_publish", BUILD_DIR, FT_URL, "-s", SOURCE, "-a", API_KEY],
    )
    if result.returncode != 0:
        sys.exit(result.returncode)


def main():
    parser = argparse.ArgumentParser(description="Build and publish tech-guides to Fluid Topics.")
    parser.add_argument("--dry-run", action="store_true", help="Build and check only, skip ftpub publish step.")
    args = parser.parse_args()

    print(f"Building from {SOURCE_DIR} -> {BUILD_DIR}")
    build()

    run_checks()

    if args.dry_run:
        print("\nDry run complete. Skipping publish.")
    else:
        publish()


if __name__ == "__main__":
    main()
