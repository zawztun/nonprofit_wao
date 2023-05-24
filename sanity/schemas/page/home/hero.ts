import { defineField, defineType } from "sanity";

export default defineType({
  name: "homeHero",
  title: "Hero",
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
      name: "tag",
      title: "Tag",
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

    defineField({
      name: "discoverBtn",
      title: "Discover",
      type: "link",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title,
        subtitle: subtitle, // YYYY-MM-DD --> YYYY
      };
    },
  },
});
