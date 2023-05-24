import Image from "next/image";
import type { HeroCommon } from "@/types/home";
import { urlForImage } from "../../../sanity/lib/image";

const CommonHero = ({ title, image, description }: HeroCommon) => {
  console.log(urlForImage(image).width(1200).url());
  return (
    <>
      <div className="relative flex items-center w-full py-8 min-h-[50vh]">
        <Image
          src={urlForImage(image).width(1400).url()}
          alt=""
          width={1200}
          height={800}
          className="w-full absolute top-[0%] left-[0%] object-cover h-full"
        />
        <div className="z-10 flex flex-col gap-4 py-20 mx-auto items-cente theme-container">
          <div className="flex flex-col gap-2 text-white ">
            <span className="mr-16 text-white">Donation...</span>
            <h2 className=" text-[48px] leading-12 md:w-[70%] font-semibold font-serif">
              {title}
            </h2>
            <div className="flex items-center ">
              {/* <div className="uppercase border rounded-md px-2 py-1 text-[8px]">
                {description}
              </div> */}
            </div>
          </div>
          {/* <div className="flex gap-4">
            <button className="px-6 py-3 rounded-full bg-theme_orange">
              {donateBtn.name}
            </button>
            <button className="px-6 py-3 rounded-full bg-theme_red">
              {discoverBtn.name}
            </button>
          </div> */}
        </div>
        <div className="w-full absolute top-[0%] left-[0%] object-cover h-full bg-black bg-opacity-60"></div>
      </div>
    </>
  );
};

export default CommonHero;
