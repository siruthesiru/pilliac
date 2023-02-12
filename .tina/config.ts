import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "3170addb-2ac8-447f-8add-772f38b6d901", // Get this from tina.io
  token: "be372f4d7098a04d18885f18dd0081dbc6ba1552", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        label: "Pages",
        name: "pages",
        path: "content",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        label: "Posts",
        name: "posts",
        path: "content/posts",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "author",
            label: "author",
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "datetime",
            name: "date",
            label: "date",
          },
          {
            type: "string",
            name: "description",
            label: "description",
          },
          {
            type: "string",
            name: "tags",
            label: "tags",
            list: true,
          },
          {
            type: "string",
            name: "categories",
            label: "categories",
            list: true,
          },
          {
            type: "string",
            name: "series",
            label: "series",
            list: true,
          },
          {
            type: "string",
            name: "aliases",
            label: "aliases",
            list: true,
          },
          {
            type: "boolean",
            name: "ShowToc",
            label: "ShowToc",
          },
          {
            type: "boolean",
            name: "TocOpen",
            label: "TocOpen",
          },
        ],
      },
    ],
  },
});
