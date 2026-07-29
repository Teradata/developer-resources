# Markdown Syntax Migration Skill

## Purpose

Use this skill to migrate Markdown content in this repository from Docusaurus-style syntax to Fluid Topics-compatible syntax in a safe, repeatable way.

This skill is intended to support both:

- targeted updates to one file or folder
- broad migrations across the repo

Primary conversion areas:

- metadata conversion
- tabbed content syntax
- note/admonition syntax
- links

## When To Use This Skill

Use this skill when the user asks to:

- convert docs from Docusaurus formatting to Fluid Topics formatting
- migrate one syntax family (metadata, tabs, notes, links) in a file/folder/repo
- plan or execute a staged Markdown migration with validation

## When Not To Use This Skill

Do not use this skill for:

- writing brand-new docs unrelated to migration
- content rewrites (tone, structure, or technical meaning changes)
- non-Markdown files unless explicitly requested as part of migration tooling

## Inputs To Collect

Before changing files, capture:

- scope: single file, folder, or repository-wide
- categories to migrate: metadata, tabs, notes, links (one or many)
- risk tolerance: conservative (manual-first) vs broad automation
- validation expectations: spot-check only or full regression scan

## Core Workflow

1. **Discover current patterns**
	Search the requested scope for Docusaurus syntax markers relevant to the selected categories.
2. **Map source to target**
	Define explicit find/replace rules for each syntax family before editing.
3. **Choose execution mode**
	Pick scripted migration or direct Copilot edits (decision framework below).
4. **Apply migration in bounded chunks**
	Prefer incremental changes (by category or folder) over one giant rewrite.
5. **Validate output**
	Verify syntax correctness, link integrity, and absence of broken mixed formats.
6. **Report summary**
	Provide files touched, rules applied, and any remaining manual follow-up.

## Execution Mode Decision Framework

Use **scripted migration** when:

- pattern is highly repetitive and deterministic
- same transformation applies to many files
- there is a need for repeatability or reruns

Use **direct Copilot edits** when:

- syntax depends on local context or nuanced structure
- edge cases are frequent
- migration scope is small and human review is preferred

Hybrid approach is recommended for most repo-wide work:

- script deterministic conversions first
- follow with targeted manual/Copilot cleanup for edge cases

## Category Checklist

Track conversion readiness per category:

- metadata conversion
  - identify frontmatter or metadata block patterns in source docs
  - define one canonical Fluid Topics target shape
- tabbed content syntax
  - identify all Docusaurus tabs variants in use
  - normalize into one Fluid Topics tab pattern
- note syntax
  - inventory admonition types in source (note, tip, info, warning, etc.)
  - map each type to supported Fluid Topics note/admonition equivalents
- links
  - normalize internal links, anchors, and extension usage
  - confirm compatibility with Fluid Topics path and rendering behavior

## Conversion Rules: Metadata

### Rule: `page_last_update` -> `ft:lastEdition` + Date Format

In frontmatter, rename `page_last_update` to `ft:lastEdition` and convert its value to ISO date format `YYYY-MM-DD`, stored as a double-quoted string.

Examples:

- `page_last_update: January 2nd, 2024` -> `ft:lastEdition: "2024-01-02"`
- `page_last_update: Jan 2, 2024` -> `ft:lastEdition: "2024-01-02"`
- `page_last_update: 2024/1/2` -> `ft:lastEdition: "2024-01-02"`

### Scope

- apply only inside YAML frontmatter blocks
- update only the `page_last_update` key and rename it to `ft:lastEdition`
- do not change any other metadata keys

### Required Transformation Steps

1. Detect frontmatter blocks delimited by `---`.
2. Locate `page_last_update:` within frontmatter.
3. Parse date values that use month names, ordinal suffixes (`st`, `nd`, `rd`, `th`), or slash/dash separators.
4. Rename the key to `ft:lastEdition`.
5. Rewrite the value to zero-padded ISO format and wrap in double quotes: `"YYYY-MM-DD"`.

### Validation Checklist For Metadata

- no remaining `page_last_update:` keys in migrated scope
- all `ft:lastEdition` values in migrated scope match `^"\d{4}-\d{2}-\d{2}"$`
- no non-frontmatter occurrences were changed
- no other frontmatter keys were modified unintentionally

### Execution Recommendation For Metadata

Use a script for repo-wide conversion because this transformation is deterministic and easy to validate with regex checks.
If a value is ambiguous or unparsable, leave it unchanged and flag for manual review.

## Conversion Rules: Tabs

### Source Pattern (Docusaurus MDX)

Typical source uses MDX components and theme imports:

```mdx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="Windows" label="Windows" default>
    Content
  </TabItem>
  <TabItem value="MacOS" label="MacOS">
    Content
  </TabItem>
</Tabs>
```

### Target Pattern (Fluid Topics)

```markdown
=== "Windows"

    Content

=== "MacOS"

    Content
```

### Required Transformation Steps

1. Remove MDX imports used only for tabs:
   - `import Tabs from '@theme/Tabs';`
   - `import TabItem from '@theme/TabItem';`
2. Replace `<Tabs>...</Tabs>` wrapper with sequential Fluid Topics tab sections.
3. For each `<TabItem ... label="X" ...> ... </TabItem>`:
   - emit header line `=== "X"`
   - add a blank line after the header
   - indent all tab body lines by 4 spaces
4. Preserve body markdown (code fences, lists, paragraphs, links) exactly, only adjusting indentation required by tab blocks.
5. Drop `value=` and `default` attributes (not used in Fluid Topics tab syntax).

### Search/Replace Guidance

Use detection patterns to identify candidate files:

- imports: `^import\s+Tabs\s+from\s+'@theme/Tabs';|^import\s+TabItem\s+from\s+'@theme/TabItem';`
- wrapper: `<Tabs>|</Tabs>`
- items: `<TabItem\b[^>]*label="([^"]+)"[^>]*>|</TabItem>`

Use structured transformation (parser/state machine) rather than naive global replace, because tab bodies may contain nested markdown and fenced code blocks.

### Validation Checklist For Tabs

- no remaining `@theme/Tabs` or `@theme/TabItem` imports in migrated scope
- no remaining `<Tabs>` or `<TabItem>` tags in migrated scope
- every generated tab header matches `^===\s+".+"$`
- tab body lines are indented 4 spaces
- fenced code blocks inside tabs still render correctly

### Execution Recommendation For Tabs

Use a script for repo-wide conversion.
Follow with manual/Copilot review for edge cases where tab content includes complex nested MDX or mixed HTML/Markdown.

## Conversion Rules: Notes

### Source Pattern (Docusaurus)

```markdown
:::note
Body text
:::
```

Possible variants present in this repo include:

- `:::note`, `:::info`, `:::tip`, `:::warning`, `:::danger`
- opener lines with inline title text (for example: `:::tip Installing Maven`)
- indented admonition blocks (for example inside list items: `    :::note`)

### Target Pattern (Fluid Topics)

```markdown
!!! note
  Body text
```

The body of the note must be indented by 4 spaces.

### Type Mapping

Default mapping for this repository:

- `note -> note`
- `info -> info`
- `tip -> tip`
- `warning -> warning`
- `danger -> warning`

If a source type is unknown, map to `note` and flag for manual review.

### Title Handling

If the opener has trailing title text (example: `:::tip Installing Maven`), preserve that text as the first indented line inside the block:

```markdown
!!! tip
  Installing Maven
  ...remaining original body...
```

### Required Transformation Steps

1. Replace opening `:::<type>` with `!!! <mapped-type>`.
2. Remove the closing `:::` line.
3. Preserve the original block indentation level, then indent every body line by an additional 4 spaces.
4. Preserve blank lines and inline Markdown content inside the body.

### Detection Guidance

When searching for source admonitions, match both non-indented and indented forms:

- opener: `^\s*:::(note|info|tip|warning|danger|caution|important)\b`
- closer: `^\s*:::\s*$`

### Validation Checklist For Notes

- no remaining `:::` opener/closer lines in migrated scope
- every `!!! <type>` block has indented body lines
- links and inline formatting inside note bodies remain unchanged
- no unintended indentation added outside note blocks

### Execution Recommendation For Notes

Use a script first for repo-wide conversion of standard admonition blocks, then run targeted manual/Copilot cleanup for:

- opener lines that include trailing title text
- malformed or unclosed blocks
- nested constructs that may be indentation-sensitive

## Safety Rules

- preserve document meaning; migrate syntax, not intent
- avoid unrelated formatting churn
- keep changes reviewable and scoped
- if ambiguous syntax appears, pause and ask before mass-editing

## Output Expectations

For each migration pass, provide:

- what was converted
- where it was converted (files/folders)
- what remains and why
- recommendation for next pass (script vs direct edits)
