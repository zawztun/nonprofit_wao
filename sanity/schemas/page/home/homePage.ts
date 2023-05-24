import { defineField, defineType } from "sanity";

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "sections",
      type: "array",
      of: [
        defineField({
          type: "homeHero",
          name: "hero",
        }),
        defineField({
          type: "homeActivities",
          name: "activities",
        }),
        defineField({
          type: "homeAbout",
          name: "about",
        }),
        defineField({
          type: "homeProjects",
          name: "projects",
        }),
        defineField({
          type: "homeContent",
          name: "content",
        }),
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
