import { defineDocumentType, makeSource } from "contentlayer/source-files"

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.md",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "markdown",
      required: true,
    },
    date: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: 'string' },
      required: true,
    },
    categories: {
      type: "list",
      of: { type: 'string' },
      required: true,
    },
    status: {
      type: "enum",
      options: ["draft", "published"],
      default: "draft",
      required: true,
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `./blog/${doc._raw.flattenedPath}`,
    }
  }
}));

export default makeSource({
  documentTypes: [Post],
  contentDirPath: "posts",
}); 