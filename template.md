---
ft:originId: my-topic-id
ft:lastEdition: "2026-07-30"
ft:description: One-sentence summary of the topic. Used for search results and link previews.
keywords: [teradata, vantage, example, template]
author: Jane Doe
email: jane.doe@teradata.com
---

<!--
  TEMPLATE — copy this file to start a new topic, then delete these comments.
  It demonstrates every Fluid Topics formatting convention used in this repo.
  See CONTRIBUTING.md for the full authoring workflow.
-->

# Topic Title (exactly one H1 per file)

A short introductory paragraph explaining what the reader will accomplish. The
first heading in the body must be a single `#` (H1); everything else is `##`/`###`.

## Overview

Use `##` for top-level sections and `###` for subsections. Keep prose clear and
concise.

## Prerequisites

* A running Teradata Trial instance
* Familiarity with SQL

## Admonitions (notes and callouts)

Fluid Topics uses `!!! <type>` — **not** Docusaurus `:::note`. Indent the body
by 4 spaces. Supported types: `note`, `info`, `tip`, `warning`.

!!! note
    This is a note. The body is indented four spaces and can span
    multiple lines.

!!! tip
    Tips render with a distinct style. Inline formatting like `code`,
    **bold**, and [links](https://www.teradata.com) work inside the body.

!!! warning
    Use warnings for actions that can cause data loss or incur cost.

## Tabbed content

Use `=== "Label"` — **not** `<Tabs>`/`<TabItem>`. Leave a blank line after each
tab header and indent the tab body by 4 spaces.

=== "Windows"

    ```powershell
    az vm create --name my-vm --image UbuntuLTS
    ```

=== "macOS / Linux"

    ```bash
    az vm create --name my-vm --image UbuntuLTS
    ```

## Code blocks

Use plain fenced code blocks with a language tag. Do **not** add Docusaurus
attributes such as `id=`, `role=`, or `title=` — the Fluid Topics connector
rejects them.

```sql
SELECT TOP 10 * FROM my_database.my_table;
```

## Images

Store images in the nearest `images/` folder and reference them with a relative
path. The file must exist, and do not URL-encode slashes (`%2F`).

![Descriptive alt text](images/example-screenshot.png)

## Tables

| Column | Description        |
| ------ | ------------------ |
| id     | Primary key        |
| name   | Human-readable name |

## Links

* Internal link to another published topic — include the `.md` extension and use
  the correct relative path: [Query data in object storage](../manage-data/nos.md)
* External link: [Teradata Documentation](https://docs.teradata.com)

Internal links only resolve if the target is also listed in `toc.yml`.

## Reusable content (partials)

Shared snippets live in `_partials/`. Import a partial and place its component
tag where the content should appear; the build inlines it automatically.

import TrialDocsNote from '../_partials/teradata_trial.mdx'

<TrialDocsNote/>

## Summary

Wrap up what the reader accomplished.

## Further reading

* [Teradata Documentation](https://docs.teradata.com)
