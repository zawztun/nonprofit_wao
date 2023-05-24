import React from "react";
import { GrFormCheckmark } from "react-icons/gr";
import type { About } from "@/types/home";

const About = ({
  title,
  description,
  features,
  _key,
  collection,
  goal,
  donateBtn,
  link,
}: About) => {
  return (
    <div className="justify-between py-16 text-gray-500 theme-container lg:flex">
      <div className="lg:w-[50%] flex flex-col gap-4">
        <span className="text-red-700 text-[14px] font-serif ">About Us</span>
        <h2 className="font-serif text-2xl text-black">{title}</h2>
        <p>{description}</p>
        <button className="px-6 py-2 text-white rounded-full bg-theme_orange max-w-max">
          {link.name}
        </button>
      </div>
      <div className="p-4 bg-green-100 ">
        <div className="grid grid-cols-2 gap-4 pt-8">
          {features.map((li, idx) => (
            <div key={idx} className="flex items-center gap-2 ">
              <GrFormCheckmark className="items-center w-4 h-4 bg-green-300 rounded-full " />
              <span>{li}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="pt-8">Total Donation </h2>
          <div className="flex">
            <div className="w-[50%] h-[3px] bg-red-800"></div>
            <div className="w-[50%] h-[3px] bg-gray-400"></div>
          </div>
          <div className="flex justify-between gap-2">
            <h3>Collection - $ {collection}M</h3>
            <h3>Goal - $ {goal}M</h3>
          </div>
          <button className="px-6 py-2 text-black bg-white border-2 rounded-full max-w-max ">
            {donateBtn.name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
