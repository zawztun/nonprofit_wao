import { defineField, defineType } from "sanity";

export default defineType({
  name: "homeContent",
  title: "HomeContent",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "donateBtn",
      title: "Donate",
      type: "link",
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
});
