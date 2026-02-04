---
# Page metadata
id: # page-slug-url
title: # Full Page Title
description: # Short description of the page content
sidebar_label: # Optional shortened version of title for the TOC
sidebar_position: # Numerical value for TOC placement.
pagination_prev: null # Disables page nav arrows
pagination_next: null # Disables page nav arrows
---

# General Topic Template

This topic includes various markdown formatting examples to help contributors create content.

## Subheaders

Subheaders should not skip sequence. In other words, do not skip from an `## H2` to an `#### H4` without using an `### H3` first. Generally, a single topic should not nest content deeper than an `## H2` or `### H3`.

## Notes

Notes syntax varies throughout Markdown implementations, and Docusaurus is no exception by using colons `:::`.

:::note
All note blocks are wrapped with three colons `:::`.

:::tip
Note types include tips for helping users identify best practices or advice targeted to a specific persona.
:::

:::important
Important notes highlight caution about important actions or consequences of an action.
:::

## Tables

Docusaurus supports standard markdown tables. For advanced formatting, see the Docusaurus documentation and test locally. Teradata recommends keeping tables simple and scannable. Use tables for reference-heavy content. Avoid long paragraphs and nesting other block-level elements within tables.

| Header 1     | Header 2     | Header 3     |
| ------------ | ------------ | ------------ |
| Row 1, Col 1 | Row 1, Col 2 | Row 1, Col 3 |
| Row 2, Col 1 | Row 2, Col 2 | Row 2, Col 3 |
| Row 3, Col 1 | Row 3, Col 2 | Row 3, Col 3 |

## Lists

Use unordered lists to organize content and make it scannable. You can use `-` or `*` but Teradata recommends `-`.

- List item
- List item

Use ordered lists for steps within a task or describing things that happen in a sequence. Use `1.` for each item and let the markdown processing dynamically render the number at build time.

1. Step one.
1. Step two.

Each list item in a given list should be written the same way (e.g., paralellism).

## Code blocks

Code blocks follow standard markdown syntax. Wrap the codeblock in three ticks and a language designation.

Here's the example page metadata that uses a yaml header.

```yaml
---
id: general-topic-template
title: General Topic Template
description: A template page with structure and markdown help for contributors
sidebar_label: General Template
sidebar_position: 1
pagination_prev: null 
pagination_next: null 
---
```

Other common languages may include python, JSON, and bash.

## Links

Links use standard markdown syntax: `[Text](PATH)`

| Link type | Syntax                                             | Notes                                                              |
| --------- | -------------------------------------------------- | ------------------------------------------------------------------ |
| External  | [Teradata Documentation](http://docs.teradata.com) | Use for any link to public content not on developers.teradata.com  |
| Internal  | [README](../README.md)                          | Use relative links for all references to content within this repo. |

## In-line Syntax

Use **bold** for any UI elements that users interact with, such as buttons that users click or windows and panes that users can open and see. Avoid using it just for emphasis.

Use `code` in-line code snippets, example text and variables, and CLI utility names and references.