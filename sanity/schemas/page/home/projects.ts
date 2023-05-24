import { defineField, defineType } from "sanity";

export default defineType({
  name: "homeProjects",
  title: "Home Projects",
  type: "object",
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),

    defineField({
      name: "projects",
      title: "Projects",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "project" },
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
});
