import { SanityAsset } from "@sanity/image-url/lib/types/types";

export interface Hero {
  title: string;
  description: string;
  _type: "hero";
  _key: string;
  discoverBtn: Link;
  donateBtn: Link;
  tag: string;
  image: SanityAsset;
}

export interface HeroCommon {
  title?: string;
  description?: string;
  image: SanityAsset;
}

export interface Activity {
  title: string;
  link: Link;
  _key: string;
  _type?: "activity";
  description: string;
  image: SanityAsset;
}

export interface Card {
  title: string;
  _key: string;
  description: string;
  image: SanityAsset;
}

export interface PostDetails {
  title: string;
  id: string;
  type: "project";
  image: SanityAsset;
  body: string[];
}
export interface Project {
  title: string;
  link: Link;
  tag: number;
  _id: string;
  _type: "project";
  image: SanityAsset;
}

export interface Projects {
  title: string;
  _key: string;
  _type: "projects";
  projects: Project[];
}

export interface Activities {
  title: string;
  _key: string;
  _type?: "activities";
  activities: Activity[];
}
export interface Cards {
  title: string;
  _key: string;
  activities: Card[];
}
export interface About {
  title: string;
  description: string;
  features: string[];
  _type: "about";
  _key: string;
  link: Link;
  donateBtn: Link;
  collection: number;
  goal: number;
}

export interface Content {
  title: string;
  description: string;
  _key: string;
  _type: "content";
  link: Link;
  image: SanityAsset;
}

type HomePageSections = Hero | Activities | About | Projects | Content;

export interface HomePageData {
  _id: string;
  sections: HomePageSections[];
}
