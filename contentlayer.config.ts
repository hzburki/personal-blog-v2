import { defineDocumentType, makeSource } from "contentlayer/source-files"

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "posts/*.{mdx,md}",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    subtitle: {
      type: "string",
      required: true,
    },
    date: {
      type: "string",
      required: true,
    },

  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    }
  }
}));

export default makeSource({
  documentTypes: [Post],
  contentDirPath: "posts",
}); 