import React from "react";
import Image from "next/image";
import { TbPlayerPlayFilled } from "react-icons/tb";
import type { Activities } from "@/types/home";
import { urlForImage } from "../../../sanity/lib/image";

const Cards = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row theme-container w-full lg:w-[70%] mx-auto ">
        <div className="w-full min-h-[150px] lg:h-[200px] bg-red-400 ">
          card 1
        </div>
        <div className="w-full min-h-[150px] lg:h-[200px] bg-gray-800">
          card 1
        </div>
        <div className="w-full min-h-[150px] lg:h-[200px] bg-theme_light_blue">
          card 1
        </div>
      </div>
    </>
  );
};
export default Cards;
