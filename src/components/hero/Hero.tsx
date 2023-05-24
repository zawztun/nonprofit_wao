import Image from "next/image";
import type { Hero } from "@/types/home";
import { urlForImage } from "../../../sanity/lib/image";

const Hero = ({ title, tag, donateBtn, discoverBtn, image }: Hero) => {
  return (
    <>
      <div className="relative flex items-center w-full py-8 ">
        <Image
          src={urlForImage(image).width(1200).url()}
          alt=""
          width={1200}
          height={800}
          className="w-full absolute top-[0%] left-[0%] -z-10 object-cover h-[80vh]"
        />
        <div className="flex flex-col justify-center gap-4 py-20 text-white theme-container">
          <div className="flex flex-col gap-2">
            <span>Need Help...</span>
            <h2 className=" text-[46px] leading-16 md:w-[60%] font-semibold font-serif ">
              {title}
            </h2>
            <div className="flex items-center ">
              <div className="w-4 h-4 bg-white border rounded-full"></div>
              <div className="w-[40%] h-[1px] bg-white"></div>
              <div className="uppercase border rounded-md px-2 py-1 text-[8px]">
                {tag}
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-full bg-theme_orange">
              {donateBtn.name}
            </button>
            <button className="px-6 py-3 rounded-full bg-theme_red">
              {discoverBtn.name}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
