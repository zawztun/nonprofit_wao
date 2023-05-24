import { defineField, defineType } from "sanity";

export default defineType({
  name: "homeAbout",
  title: "homeAbout",
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
      name: "donateBtn",
      title: "Donate",
      type: "link",
    }),

    defineField({
      name: "collection",
      title: "collection",
      type: "number",
    }),
    defineField({
      name: "goal",
      title: "goal",
      type: "number",
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
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
