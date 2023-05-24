import { defineField, defineType } from "sanity";

export default defineType({
  name: "homeActivities",
  title: "Home Activities",
  type: "object",
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      name: "activities",
      title: "Activities",
      type: "array",
      validation: (Rule) => Rule.required().min(3).max(3),
      of: [
        {
          type: "activity",
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
