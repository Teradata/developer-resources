// tina/config.jsx
import { defineConfig } from "tinacms";

// src/theme/template.jsx
import React from "react";

// util.js
import title from "title";
var slugify = (text) => {
  return text.toString().toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "_").replace(/^-+|-+$/g, "");
};

// src/theme/template.jsx
var AdmonitionTemplate = {
  name: "Admonition",
  ui: {
    defaultItem: {
      type: "note",
      title: "Note"
    },
    itemProps: (item) => {
      return { label: item?.title };
    }
  },
  fields: [
    {
      name: "type",
      label: "Type",
      type: "string",
      options: [
        {
          label: "Note",
          value: "note"
        },
        {
          label: "Tip",
          value: "tip"
        },
        {
          label: "Info",
          value: "info"
        },
        {
          label: "Caution",
          value: "caution"
        },
        {
          label: "Danger",
          value: "danger"
        }
      ]
    },
    {
      name: "title",
      label: "Title",
      type: "string",
      isTitle: true,
      required: true
    },
    {
      name: "children",
      label: "Content",
      type: "rich-text"
    }
  ]
};
var DetailsTemplate = {
  name: "Details",
  fields: [
    {
      name: "summary",
      label: "Summary",
      type: "string",
      isTitle: true,
      required: true
    },
    {
      name: "children",
      label: "Details",
      type: "rich-text"
    }
  ]
};
var CodeBlockTemplate = {
  name: "CodeBlock",
  label: "Code Block",
  fields: [
    {
      name: "title",
      label: "Filename",
      type: "string"
    },
    {
      name: "language",
      label: "Language",
      type: "string"
    },
    {
      name: "children",
      label: "Code",
      type: "rich-text",
      required: true
    }
  ]
};
var TabsTemplate = {
  name: "Tabs",
  fields: [
    {
      name: "children",
      label: "Tabs",
      type: "rich-text",
      templates: [
        {
          name: "TabItem",
          label: "Tab",
          ui: {
            defaultItem: {
              label: "Tab",
              value: "tab"
            }
          },
          fields: [
            {
              name: "label",
              label: "Label",
              type: "string",
              isTitle: true,
              required: true
            },
            {
              name: "value",
              type: "string",
              ui: {
                component: ({ input, tinaForm }) => {
                  React.useEffect(() => {
                    input.onChange(slugify(tinaForm.values.label));
                  }, [JSON.stringify(tinaForm.values)]);
                  return React.createElement(
                    "input",
                    {
                      type: "text",
                      id: input.name,
                      className: "hidden",
                      ...input
                    }
                  );
                }
              }
            },
            {
              name: "children",
              label: "Content",
              type: "string",
              ui: {
                component: "textarea"
              }
            }
          ]
        }
      ]
    }
  ]
};
var DocCardListTemplate = {
  name: "DocCardList",
  label: "Doc Card List",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string"
    }
  ]
};
var MDXTemplates = [
  AdmonitionTemplate,
  DetailsTemplate,
  CodeBlockTemplate,
  TabsTemplate,
  DocCardListTemplate
];

// tina/config.jsx
var branch = process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var DocsCollection = {
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
      required: true
    },
    {
      type: "string",
      name: "description",
      label: "Description"
    },
    {
      type: "string",
      name: "sidebar_label",
      label: "Sidebar label"
    },
    {
      type: "number",
      name: "sidebar_position",
      label: "Sidebar position"
    },
    {
      type: "string",
      name: "displayed_sidebar",
      label: "Displayed sidebar"
    },
    {
      type: "string",
      name: "pagination_prev",
      label: "Pagination prev"
    },
    {
      type: "string",
      name: "pagination_next",
      label: "Pagination next"
    },
    {
      label: "Tags",
      name: "tags",
      type: "string",
      list: true,
      ui: {
        component: "tags"
      }
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
      templates: [...MDXTemplates]
    }
  ]
};
var QuickstartsCollection = {
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
      required: true
    },
    {
      type: "string",
      name: "description",
      label: "Description"
    },
    {
      type: "string",
      name: "sidebar_label",
      label: "Sidebar label"
    },
    {
      type: "number",
      name: "sidebar_position",
      label: "Sidebar position"
    },
    {
      type: "string",
      name: "displayed_sidebar",
      label: "Displayed sidebar"
    },
    {
      type: "string",
      name: "pagination_prev",
      label: "Pagination prev"
    },
    {
      type: "string",
      name: "pagination_next",
      label: "Pagination next"
    },
    {
      label: "Tags",
      name: "tags",
      type: "string",
      list: true,
      ui: {
        component: "tags"
      }
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
      templates: [...MDXTemplates]
    }
  ]
};
var config_default = defineConfig({
  branch,
  clientId: "hello",
  // Get this from tina.io
  token: "xyz",
  // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "static"
  },
  media: {
    tina: {
      mediaRoot: "img",
      publicFolder: "static"
    }
  },
  schema: {
    collections: [
      DocsCollection,
      QuickstartsCollection
    ]
  }
});
export {
  config_default as default
};
