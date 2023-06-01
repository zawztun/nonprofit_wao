import React from "react";
import type { PostDetails } from "@/types/home";
import CommonHero from "./CommonHero";
import Cards from "./Cards";

import Image from "next/image";

type Props = { data: PostDetails };

const ProjectDetails = ({ data }: Props) => {
  console.log(data);
  return (
    <div className="mb-9">
      <CommonHero image={data.image} title={data.title} />
      <div className="flex flex-col w-full mx-auto border border-red-500">
        <div className="relative pt-24 border ">
          <Image
            src="/Image.png"
            alt=""
            width={800}
            height={400}
            className="lg:w-[50%] mx-auto aspect-video object-cover "
          />
          <div className="w-full border border-red-500 lg:translate-y-1/2 lg:absolute lg:bottom-0 ">
            <Cards />
          </div>
        </div>

        {/* block conetnt */}
        <div className="mx-auto theme-container w-[70%] mt-12 lg:mt-32">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          aliquam, at consequatur assumenda dolorem mollitia consequuntur!
          Accusantium at corporis quas assumenda quisquam tempora unde, vero,
          tenetur provident explicabo sint omnis.
        </div>
      </div>
    </div>
  );
};
export default ProjectDetails;
