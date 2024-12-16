import { defineConfig } from "tinacms";
import { MDXTemplates } from "../src/theme/template";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

const DocsCollection = {
  name: "doc",
  label: "AI-unlimited",
  path: "docs",
  format: "mdx",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
    },
    {
      type: "string",
      name: "sidebar_label",
      label: "Sidebar label",
    },
    {
      type: "number",
      name: "sidebar_position",
      label: "Sidebar position",
    },
    {
      type: "string",
      name: "displayed_sidebar",
      label: "Displayed sidebar",
    },
    {
      type: "string",
      name: "pagination_prev",
      label: "Pagination prev",
    },
    {
      type: "string",
      name: "pagination_next",
      label: "Pagination next",
    },
    {
      label: "Tags",
      name: "tags",
      type: "string",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
      templates: [...MDXTemplates],
    },
  ],
};

const QuickstartsCollection = {
  name: "quickstarts",
  label: "Quickstarts",
  path: "quickstarts",
  format: "mdx",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
    },
    {
      type: "string",
      name: "sidebar_label",
      label: "Sidebar label",
    },
    {
      type: "number",
      name: "sidebar_position",
      label: "Sidebar position",
    },
    {
      type: "string",
      name: "displayed_sidebar",
      label: "Displayed sidebar",
    },
    {
      type: "string",
      name: "pagination_prev",
      label: "Pagination prev",
    },
    {
      type: "string",
      name: "pagination_next",
      label: "Pagination next",
    },
    {
      label: "Tags",
      name: "tags",
      type: "string",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
      templates: [...MDXTemplates],
    },
  ],
};

export default defineConfig({
  branch,
  clientId: 'hello', // Get this from tina.io
  token: 'xyz', // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "img",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      DocsCollection,
      QuickstartsCollection
    ],
  },
});