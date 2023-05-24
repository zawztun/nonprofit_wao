import { defineField, defineType } from "sanity";

export default defineType({
  name: "activity",
  title: "Activity",
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
      name: "link",
      title: "Link",
      type: "link",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
  ],

  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      return { ...selection };
    },
  },
});
