import Image from "next/image";
import React from "react";
import type { Projects } from "@/types/home";
import { urlForImage } from "../../../sanity/lib/image";

const Projects = ({ title, projects }: Projects) => {
  return (
    <div className="flex flex-col gap-8 py-24 font-serirf bg-primary">
      <div className="flex flex-col gap-2 theme-container lg:flex-row lg:justify-between lg:items-center">
        <div className="flex flex-col gap-2 lg:basis-[80%]">
          <span className="text-red-500 text-[11px]">Our Projects</span>
          <h2 className="text-3xl font-semibold w-[70%]">{title}</h2>
        </div>

        <button className="px-6 py-3 text-sm text-white rounded-full bg-theme_orange max-w-max max-h-12">
          More Courses
        </button>
      </div>
      <div className="  flex flex-row p-4 lg:p-0 md:ml-[15%] md:mr-[15%] lg:mr-0  gap-8 flex-wrap lg:flex-nowrap overflow-x-auto lg:gap-8 ">
        {projects.map((li) => (
          <div
            key={li._id}
            className="flex gap-8 bg-white pb-4 basis-[100%] md:basis-[45%] grow"
          >
            <div className="flex flex-col gap-4 lg:min-w-[300px] lg:min-h-[400px] w-full ">
              <Image
                src={urlForImage(li.image).width(1000).url()}
                alt=""
                width={350}
                height={550}
                className="object-cover w-full aspect-video lg:aspect-square"
              />
              <div className="flex flex-col gap-4 px-4">
                <h3 className="text-xl text-gray-600 ">{li.title}</h3>
                <div className="flex">
                  <div className="w-[50%] h-[3px] bg-red-500 "></div>
                  <div className="w-[50%] h-[3px] bg-gray-300 "></div>
                </div>
                <div className="flex justify-between gap-2 ">
                  <span>Raised - 5M</span>
                  <span className="text-red-500">Goal - $10M</span>
                </div>
                <button className="px-6 py-3 text-sm text-white bg-black rounded-full max-w-max">
                  Donate
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
