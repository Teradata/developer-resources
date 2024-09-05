# Teradata Developer Resources

[Developer resources](https://developers.teradata.com/) documentation and tutorials for learning Teradata Vantage. The documents are formatted using markdown format. This docs site is built using [Docusaurus](https://docusaurus.io/).

Contributions are welcome :). See below how to build the documentation website locally.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/~/github.com/Teradata/developer-resources)

### General information
* The documentation written in this repository uses the Markdown syntax. If you are not familiar with Markdown, please check out this [guide](https://www.markdownguide.org/). 

* The `main` is the default branch and reflects the what's currently on the [website](https://developers.teradata.com/). Each commit made to the `main` branch will trigger a deploymenta new deployment to GitHub Pages.

* Simple changes to content can be done through a pull request directly from GitHub's website. For large changes, e.g. more sophisticated reformatting or adding a new page, we recommend that you fork the repo, clone locally and follow instructions how to build the website locally.

* Each page corresponds to an asciidoc file in the repository. Pages are located in `quickstarts` or `docs` directory. Page files must have a suffix of `.md` or `.mdx` if using React components.

* This guide explains how to run and build [Docusaurus](https://docusaurus.io/docs/installation#running-the-development-server) locally to test changes before submitting a pull request. 


# Contributor's Guide for Docusaurus

Thank you for your interest in contributing to our developer resources project. Your contributions help us improve and expand the resources available to the community. This guide will help you get started with contributing to our repository.

## General Information
We appreciate all contributions, whether they are bug reports, feature requests, or documentation improvements. Please follow the guidelines below to ensure a smooth contribution process.

## Modify an Existing Page
To modify an existing page with, follow these steps:
1. navigate to the `docs` or `quickstarts` folder in your project directory, where you'll find the markdown files corresponding to your site's pages. 
2. Open the relevant file and make the necessary edits. Docusaurus supports Markdown with JSX extensions, allowing you to easily add React components if needed. 
3. Preview your changes by running `npm start` for a local development server or if you are already running locally the site will automatically rebuild with the updated content.
4. Commit your changes to a new branch and submit a pull request.

## Add a New Page
To add a new page, follow these steps:
1. Create a new markdown file in the appropriate directory in `docs` or `quickstarts`.
2. Add the necessary content to the markdown file. use this helpful [guide](https://docusaurus.io/docs/create-doc) and [Docusaurus feature reference](https://docusaurus.io/docs/markdown-features) to aide creating a new doc.
3. Preview your changes by running `npm start` for a local development server or if you are already running locally the site will automatically rebuild with the updated content.
4. Commit your changes to a new branch and submit a pull request.

## Add an Image or Attachment
To add an image or any file attachtment, follow these steps:

#### Step 1: Place the Asset in the Static Folder

Docusaurus uses a `static` folder where you can place static assets such as images, videos, or files. Any file placed in this folder is automatically available at the root URL.

1. Inside your Docusaurus project, navigate to the `static` folder.
2. Create a subfolder inside `static` for organization, e.g., `img` or `files`, to store your images or files.
3. Place your image in this folder, e.g., `static/img/my-image.png`.

#### Step 2: Use the Asset in a Markdown File

Once your asset is in the `static` folder, you can reference it in your markdown files using a relative path.

```markdown
![My Image Description](./img/my-image.png)
```

#### Tips:
- Always place your images in the `static` folder. This ensures that Docusaurus correctly handles the image path.
- Use relative paths to the image for linking, starting with a `/`, e.g., `/img/my-image.png`.

## How to Avoid Duplicating Content
To avoid duplicating content, follow these guidelines:
1. Search the repository to check if the content already exists.
2. If similar content exists, consider updating the existing content instead of creating new content.
3. Coordinate with other contributors to ensure consistency and avoid duplication.

## Serve Website Locally
To serve the website locally, follow these steps:
1. Run the development server using `npm run start`.
2. Open your browser and navigate to `http://localhost:3000`.

## Build Documentation Locally
To build the documentation locally, follow these steps:
1. Clone the repository to your local machine.
2. Install the necessary dependencies using `npm install`.
3. Build the documentation using `npm run build`.
4. Preview the static results by running `cd build && npx http-server`

## Best Practices
To ensure high-quality contributions and maintain consistency across the project, please follow these best practices:
1. **Use Clear and Concise Language**: Write in a clear and concise manner to make the documentation easy to understand.
2. **Follow Markdown Standards**: Use standard Markdown syntax and conventions to ensure consistency across all documents.
3. **Keep It Simple**: Avoid overly complex explanations and technical jargon where possible. Aim to make the documentation accessible to a wide audience.
4. **Use Proper Formatting**: Use headings, lists, and code blocks appropriately to organize content and improve readability.
5. **Provide Examples**: Include examples and code snippets to illustrate concepts and make the documentation more practical.
6. **Review and Edit**: Before submitting a pull request, review your changes for accuracy, clarity, and completeness. Edit as needed to ensure high quality.
7. **Collaborate and Communicate**: Engage with other contributors and maintainers through comments, discussions, and reviews to ensure alignment and address any issues.



