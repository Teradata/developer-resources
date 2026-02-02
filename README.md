# Teradata Developer Resources

This repository is the home of all code and content for [developers.teradata.com](https://developers.teradata.com/).

Contributions are welcome! To get started, review the contributor guide information in this README.

## Project Overview

- This site is built using [Docusaurus](https://docusaurus.io/docs/) and uses markdown syntax in MDX.
- The `main` branch is the default branch and reflects what’s currently published. Committing or merging a branch into `main` automatically triggers a web site update.
- Contributors can submit simple content changes via pull request directly to the repo in [GitHub](https://github.com/Teradata/developer-resources). For larger changes, such as reformatting or adding a new page, Teradata recommends forking the repo, cloning it locally, and following the instructions on how to build the website locally before submitting a pull request.
- Each page corresponds to a Markdown file in the repository. Pages are located in the docs or quickstarts directories. Page files must have a `.md` or `.mdx` suffix if using React components.

## Content Directories

| Directory                  | Description                                        | Sidebar Configuration                  |
| -------------------------- | -------------------------------------------------- | -------------------------------------- |
| [docs](docs)               | Primary location for documentation pages main site | Metadata-driven with `index.md`        |
| [quickstarts](quickstarts) | Quickstart guides and introductory workflows       | Metadata-driven with `_category_.json` |

---

## Contributor's Guide for Docusaurus

Thank you for your interest in contributing to [developers.teradata.com](https://developers.teradata.com/) project. Your contributions help improve and expand the resources available to the community.

> **Templates:**
> See the [templates](templates) directory for page examples, markdown syntax examples, and sidebar configuration explanations.

### Contributor Requirements

- Familiarity with MDX markdown syntax. To learn more, see the [MDX](https://mdxjs.com/) web site.
- Familarity with GitHub and simple git branching principles. Teradata recommends installing [GitHub Desktop](https://desktop.github.com/download/) to help manage branch activity and to clone the repository.
- Teradata recommends using [VS Code](https://code.visualstudio.com/) with these extensions:
  - [Docusaurus MDX Previewer](https://marketplace.visualstudio.com/items?itemName=mileskies.docusaurus-mdx-previewer)
  - [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- `npm` installed for developer dependencies and building the site locally. For non-technical contributors, download and install `npm` for your operating system from the the [node.js](https://nodejs.org/en/download) web site.

### Modify an Existing Page

1. Navigate to the [docs](docs) or [quickstarts](quickstarts) folder in your project directory. Each MDX file corresponds to a page on the documentation site.
1. Open the relevant file and make edits. Docusaurus supports Markdown with JSX extensions, allowing you to easily add React components if needed.

### Add a New Page

1. Create a new Markdown file in the appropriate directory under [docs](docs) or [quickstarts](quickstarts).
1. Add the necessary content to the Markdown file. Use this helpful [guide](https://docusaurus.io/docs/create-doc) and the [Docusaurus feature reference](https://docusaurus.io/docs/markdown-features) to assist in creating a new document.

### Reusing Content

Docusaurus uses `_partials` to store snippets of markdown content for reuse.

> **Best Practice**: To maximize reusability, reusable content should be relativetly short and discrete.

1. In a `_partials` directory, create a Markdown file to store your snippet of content.
1. In the Markdown file, use the following syntax to relative reference to it:

```
  import MyPartial from '../_partials/example-partial-path.md';
```

### Add an Image or Attachment

Docusaurus uses a `static` folder where you can place static assets such as images, videos, or files. Any file placed in this folder is automatically available at the root URL.

1. Inside your Docusaurus project, navigate to the `static` folder.
1. Create a subfolder inside `static` for organization, e.g., `img` or `files`, to store your images or files.
1. Place your image or file in this folder, e.g., `static/img/my-image.png`.

Once your asset is in the `static` folder, you can reference it in your Markdown files using a relative path.

```markdown
![My Image Description](./img/my-image.png)
```

> **Tips**
>
> - Always place your images in the `static` folder to ensure Docusaurus correctly handles the image path.
> - Use relative paths to link images, starting with `/`, e.g., `/img/my-image.png`.

### Preview Your Changes Locally

1. Use the Docusaurus MDX previewer extension to preview an individual page.
1. To preview the entire site with your changes and to validate your change, run `npm start` from the repository root for a local development server. If the server is already running, the site will automatically rebuild with the updated content.

## How to Avoid Duplicating Content

To avoid duplicating content, follow these guidelines:

1. Search the repository to check if the content already exists.
1. If similar content exists, consider updating the existing content instead of creating new content.
1. Coordinate with other contributors to ensure consistency and avoid duplication.

## Serve the Website Locally

To serve the website locally, follow these steps:

1. Run the development server using `npm run start`.
1. Open your browser and navigate to `http://localhost:3000`.

## Build Documentation Locally

To build the documentation locally, follow these steps:

1. Clone the repository to your local machine.
1. Install the necessary dependencies using `npm install`.
1. Build the documentation using `npm run build`.
1. Preview the static build by running `cd build && npx http-server`.

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

## TOC Generation

Sidebar placement and TOC building is metadata-driven. Two different implementations are currently in effect between the [docs](../docs) and [quickstarts](../quickstarts) directories.

> TOCs are generally managed by Teradata content architects and repo admins, who may modify sidebar metadata of any contributor pull requests.

### docs directory

- Each sub-directory is a section.
- `index.md` is the parent page of a directory, and the `sidebar_position` in an `index.md` determines the the ordering of entire sections relative to other `index.md` files.
- All other `.md` files are nested under the `index.md` file in the same directory based on its position.
- The same principles apply to directories further nested in a directory, but nesting deeper than two levels deep in a given sidebar is not recommended.

```
docs/
├── Section A /   <-- Appears FIRST (Position 1)
│   ├── index.md                ---
│   │                           sidebar_position: 1
│   │                           ---
│   └── child_page.md
│
├── Section B /   <-- Appears SECOND (Position 2)
│   ├── index.md                ---
│   │                           sidebar_position: 2
│   │                           ---
│   └── child_page.md
│
└── Section C /   <-- Appears THIRD (Position 3)
    ├── index.md                ---
    │                           sidebar_position: 3
    │                           ---
    └── child_page.md
```

The result would look like this:

```
Section A (content of index.md)
    Child (content of position 1)
    Child (content of position 2)
Section B (content of index.md)
    Child (content of position 1)
    Child (content of position 2)
Section C (content of index.md)
    Child (content of position 1)
    Child (content of position 2)
```



### quickstart directory

The quickstarts uses the Docusaurus `_category_.json` method. In lieu of using `index.md` parent pages with content in a given sub-directory, the JSON files define the order of sub-directories relative to each other in the same way. The result is an expander title in the sidebar that does not equate to a page URL and content.

```JSON
{
    "label": "Title in Sidebar",
    "position": 1
  }
```

In each sub-directory each `.md` still includes a `sidebar_position` metadata attribute that defines order within the sub-directory.


```
docs/
├── Section A /   <-- Appears FIRST (Position 1)
│   ├── _category_.json         ---
│   │                           sidebar_position: 1
│   │                           ---
│   └── child_page.md
│
├── Section B /   <-- Appears SECOND (Position 2)
│   ├── _category_.json         ---
│   │                           sidebar_position: 2
│   │                           ---
│   └── child_page.md
│
└── Section C /   <-- Appears THIRD (Position 3)
    ├── _category_.json         ---
    │                           sidebar_position: 3
    │                           ---
    └── child_page.md
```

The result would look like this:

```
Section A (sidebar only - no content)
    Child (content of position 1)
    Child (content of position 2)
Section B (sidebar only - no content)
    Child (content of position 1)
    Child (content of position 2)
Section C (sidebar only - no content)
    Child (content of position 1)
    Child (content of position 2)
```
