import Image from "next/image";
import React from "react";
import type { HeroCommon, Project } from "@/types/home";

import { client } from "../../../sanity/lib/client";
import CommonHero from "@/components/commond/CommonHero";
import Container from "@/layout/Container";
import { urlForImage } from "../../../sanity/lib/image";

const query = `*[_type=="projectPage"][0]{
  title,
  hero,
  "projects":*[_type=="project"]{
    ...,
    "image":mainImage,
  }
}`;

interface Props {
  hero: HeroCommon;
  projects: Project[];
}

const ProjectPage = ({ hero, projects }: Props) => {
  return (
    <>
      <Container>
        <div className="flex flex-col pb-8 font-serif bg-theme_project bg-primary ">
          <CommonHero
            title={hero.title}
            description={hero.description}
            image={hero.image}
          />
          <div className="grid-cols-2 gap-4 py-16 md:grid theme-container">
            {projects.map((li) => (
              <div key={li._id} className="flex p-4 bg-theme_pj">
                <div className="flex flex-col gap-4 md:min-w-[300px] md:min-h-[300px] ">
                  <Image
                    src={urlForImage(li?.image).width(1200)?.url()}
                    alt=""
                    width={500}
                    height={350}
                    className="object-cover w-[500px] h-[350px]"
                  />
                  <div className="flex flex-col gap-4 px-4">
                    <h3 className="text-gray-600 text-2xl max-w-[200px] ">
                      {li.title}
                    </h3>
                    <div className="flex">
                      <div className="w-[50%] h-[3px] bg-red-500 "></div>
                      <div className="w-[50%] h-[3px] bg-gray-300 "></div>
                    </div>
                    <div className="flex justify-between ">
                      <button className="px-4 py-2 text-black bg-gray-300 rounded-full lg:px-6 max-w-max">
                        Donation : $5000/$12000
                      </button>
                      <button className="px-4 py-2 text-white bg-gray-700 rounded-full lg:px-6 max-w-max ">
                        Donate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProjectPage;

export async function getStaticProps() {
  const data = await client.fetch(query);
  console.log(data);
  return {
    props: {
      ...data,
    },
    revalidate: 10,
  };
}
