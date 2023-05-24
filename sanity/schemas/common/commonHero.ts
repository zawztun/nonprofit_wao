import { defineField, defineType } from "sanity";

export default defineType({
  name: "commonHero",
  title: "Common Hero",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "note",
      title: "Note",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
  ],
});
