import { defineField, defineType } from "sanity";

export default defineType({
  name: "projectPage",
  title: "Project Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "hero",
      title: "Hero",
      type: "commonHero",
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
});
