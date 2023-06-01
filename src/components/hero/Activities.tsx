import React from "react";
import Image from "next/image";
import { TbPlayerPlayFilled } from "react-icons/tb";
import type { Activities } from "@/types/home";
import { urlForImage } from "../../../sanity/lib/image";

const Activities = ({ activities }: Activities) => {
  return (
    <div className="flex flex-col lg:flex-row theme-container pt-[8%]">
      {activities.map((act, i) => {
        switch (i) {
          case 0:
            return (
              <div
                key={act._key}
                className="flex flex-col bg-theme_light_blue justify-center px-8 gap-4 min-h-[300px] min-w-[33%]"
              >
                <h2 className="text-3xl font-semibold">{act.title}</h2>
                <p>{act.description}</p>
                <button className="flex justify-start px-6 py-3 bg-white rounded-full max-w-max ">
                  {act.link.name}
                </button>
              </div>
            );
          case 1:
            return (
              <div
                key={act._key}
                className="flex flex-col bg-theme_grar_dark text-white justify-center px-8 gap-4 min-h-[300px] min-w-[33%]"
              >
                <h2 className="text-3xl font-semibold">{act.title}</h2>
                <p>{act.description}</p>
                <span className="border-b max-w-max">Join Organization</span>
              </div>
            );

          case 2:
            return (
              <div
                key={act._key}
                className="flex flex-col bg-theme_orange text-white justify-center gap-4 min-w-[33%] relative  min-h-[300px]"
              >
                <Image
                  src={urlForImage(act.image).width(1000).url()}
                  alt=""
                  width={400}
                  height={400}
                  className="object-cover w-full h-full "
                />
                <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] px-8 ">
                  <TbPlayerPlayFilled className="w-[35px] h-[35px] bg-white text-black rounded-full p-2" />
                </div>
              </div>
            );
        }
      })}
    </div>
  );
};
export default Activities;
