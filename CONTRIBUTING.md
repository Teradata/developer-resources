## Contributor Guidelines


### Tool Requirements

- Familiarity Markdown
- Familarity with GitHub and simple git branching principles. Teradata recommends installing [GitHub Desktop](https://desktop.github.com/download/) to help manage branch activity and to clone the repository.
- Teradata recommends using [VS Code](https://code.visualstudio.com/) with these extensions:
  - [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)


## Authoring Workflow

Content in this repository is published to Teradata's documentation portal, which
runs on **Fluid Topics**. Fluid Topics uses a Markdown flavor that differs from the
Docusaurus/MDX syntax previously used on the developer site — follow the conventions
below so your topic renders correctly.

A complete, copy-pasteable example of every convention lives in **[template.md](template.md)**.

### 1. Adding and Editing Topics

Topics live under `quickstarts/<section>/`, for example
`quickstarts/manage-data/my-topic.md`.

**To add a new topic:**

1. Copy [template.md](template.md) into the appropriate section folder and rename it. Use a descriptive, hyphenated filename (e.g. `load-data-with-airbyte.md`).
1. Fill in the frontmatter (see [Required Metadata](#2-required-metadata)) and write the body starting with a single H1.
1. Place any images in the nearest `images/` folder (e.g. `quickstarts/manage-data/images/`, or the shared `quickstarts/images/`) and reference them with a relative path.
1. Add the file to `quickstarts/toc.yml` so it publishes (see [Add a Topic to the Table of Contents](#4-add-a-topic-to-the-table-of-contents)).

**To edit an existing topic:** edit the file in place and update the `ft:lastEdition`
date in its frontmatter.

> **Important:** A topic is only published if it is listed in `quickstarts/toc.yml`.
> Files that aren't in the TOC remain in the repository but are skipped at build time —
> so you can keep drafts and not-yet-ready guides in the tree without publishing them.

### 2. Required Metadata

Every topic begins with a YAML frontmatter block delimited by `---`:

```yaml
---
id: my-topic-id
author: Jane Doe
email: jane.doe@teradata.com
ft:lastEdition: "2026-07-30"
ft:description: One-sentence summary of the topic. Used for search results and link previews.
keywords: [teradata, vantage, object storage, elt]
---
```

| Field | Required | Notes |
| --- | --- | --- |
| `ft:lastEdition` | **Yes** | Fluid Topics-specific. ISO `YYYY-MM-DD`, **double-quoted**. Replaces Docusaurus `page_last_update`. |
| `description` | **Yes** | One sentence; appears in search results and previews. |
| `id` | Recommended | Stable slug for the topic. |
| `author` / `email` | Recommended | Contributor attribution. |
| `keywords` | Recommended | YAML list; improves search. |

Immediately after the frontmatter, the body must begin with **exactly one H1**
(`# Title`). More than one H1, or none, will fail validation.

### 3. Common Syntax Formatting (Fluid Topics rules)

These conventions differ from Docusaurus/MDX. See [template.md](template.md) for live
examples of each.

**Admonitions** — use `!!! <type>`, not `:::note`. Indent the body 4 spaces.
Supported types: `note`, `info`, `tip`, `warning`.

```markdown
!!! note
    Body text, indented four spaces.
```

**Tabbed content** — use `=== "Label"`, not `<Tabs>`/`<TabItem>`. Leave a blank line
after each tab header and indent the body 4 spaces.

```markdown
=== "Windows"

    Content indented four spaces.

=== "macOS / Linux"

    Content indented four spaces.
```

**Code blocks** — use plain fenced blocks with a language tag. Do **not** add
Docusaurus attributes like `id=`, `role=`, or `title=`; the Fluid Topics connector
rejects them.

- Good: <code>```bash</code>
- Bad: <code>``` bash , id="install", role="content-editable"</code>

**Images** — relative paths to an `images/` folder. The target file must exist (the
build fails on missing images), and do not URL-encode slashes (`%2F`).

```markdown
![Descriptive alt text](images/example.png)
```

**Headings** — exactly one H1 (`#`) per file; use `##` and `###` for sections.

**Links**
- Internal links must include the `.md` extension and the correct relative path, e.g. `[NOS](../manage-data/nos.md)`. The target must also be published (listed in `toc.yml`) or the link will not resolve.
- External links use standard Markdown: `[Teradata Docs](https://docs.teradata.com)`.

**Reusable content (partials)** — shared snippets live in `_partials/`. Import the
partial and drop its component tag where the content belongs; the build inlines it.

```markdown
import TrialDocsNote from '../_partials/teradata_trial.mdx'

<TrialDocsNote/>
```

### 4. Add a Topic to the Table of Contents

`quickstarts/toc.yml` controls the left-hand navigation — both the order and the
hierarchy — and determines what gets published. **A topic must be listed here to appear.**

Each section is a folder represented by an `_index.md` container page, with its topics
nested underneath as `children`. To add a topic, insert a `- filepath:` line under the
correct parent's `children:`, in the position where you want it to appear:

```yaml
  - filepath: "manage-data/_index.md"
    children:
      - filepath: "manage-data/nos.md"
      - filepath: "manage-data/my-new-topic.md"   # <- your new topic
      - filepath: "manage-data/airflow.md"
```

- Paths are relative to `quickstarts/`.
- To add a **new section**, create the folder, add an `_index.md` (a short container page with a single H1 and a one-line intro), and add a container entry with its own `children:`.

### 5. Validate Your Changes Locally

Before opening a pull request, run the build in dry-run mode. This resolves partials,
prunes files that aren't in the TOC, and runs the Markdown and TOC validation checks —
without uploading anything:

```bash
python .github/scripts/build.py --dry-run
```

Fix anything it reports (broken TOC references, missing images, multiple H1s,
unsupported code-fence attributes, etc.) before submitting.

### 6. Submit Your Contribution for Review

1. Create a branch for your change.
1. Commit your new/edited topic, any images, and the `toc.yml` update together.
1. Open a pull request against `main` and fill in the description.
1. Address review feedback, then a maintainer will merge and publish.

## How to Avoid Duplicating Content

To avoid duplicating content, follow these guidelines:

1. Search the repository to check if the content already exists.
1. If similar content exists, consider updating the existing content instead of creating new content.
1. Coordinate with other contributors to ensure consistency and avoid duplication.
1. Link to and cite related content on [docs.teradata.com](https://docs.teradata.com).

## Best Practices

To ensure high-quality contributions and maintain consistency across the project, please follow these best practices:

1. **Use Clear and Concise Language**: Write clearly and concisely to make the documentation easy to understand.
1. **Follow Markdown Standards**: Use standard Markdown syntax and conventions to ensure consistency across all documents.
1. **Keep It Simple**: Avoid overly complex explanations and technical jargon where possible. Aim to make the documentation accessible to a wide audience.
1. **Use Proper Formatting**: Use headings, lists, and code blocks appropriately to organize content and improve readability.
1. **Provide Examples**: Include examples and code snippets to illustrate concepts and make the documentation more practical.
1. **Review and Edit**: Before submitting a pull request, review your changes for accuracy, clarity, and completeness. Edit as needed to ensure high quality.
1. **Collaborate and Communicate**: Engage with other contributors and maintainers through comments, discussions, and reviews to ensure alignment and address any issues.


---

## Table of Contents

New topics must be added to `quickstarts/toc.yml` to be published. See
[Add a Topic to the Table of Contents](#4-add-a-topic-to-the-table-of-contents)
in the Authoring Workflow above for the format and an example.
