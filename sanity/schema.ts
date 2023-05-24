import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import link from "./schemas/common/link";
import homePage from "./schemas/page/home/homePage";
import homeHero from "./schemas/page/home/hero";
import activity from "./schemas/common/activity";
import homeActivities from "./schemas/page/home/activities";
import project from "./schemas/project";
import about from "./schemas/page/home/about";
import projects from "./schemas/page/home/projects";
import content from "./schemas/page/home/content";
import commonHero from "./schemas/common/commonHero";
import projectPage from "./schemas/page/projects/projectPage";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContent,
    homePage,
    homeHero,
    link,
    activity,
    homeActivities,
    project,
    about,
    projects,
    content,
    projectPage,
    commonHero,
  ],
};
