import Container from "@/layout/Container";
import React from "react";
import { GrFormCheckmark } from "react-icons/gr";

let lists = [
  { id: 1, text: "Food Donation" },
  { id: 2, text: "Money Donation" },
  { id: 3, text: "Dress Donation" },
  { id: 4, text: "Education Donation" },
  { id: 5, text: "Toy Donation" },
  { id: 6, text: "Water Support" },
];

type Props = {};

const about = (props: Props) => {
  return (
    <>
      <Container>
        <div className="justify-between py-16 text-gray-500 theme-container lg:flex">
          <div className="lg:w-[50%] flex flex-col gap-4">
            <span className="text-red-700 text-[14px] font-serif ">
              About Us
            </span>
            <h2 className="font-serif text-2xl text-black">
              Help People, Our Main Goals
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam ipsum, voluptas ex blanditiis perferendis consectetur
              ipsa tempora ducimus beatae cupiditate tempore veniam ipsam
              assumenda sint. Quaerat nisi beatae quam dignissimos!
            </p>
            <button className="px-6 py-2 text-white rounded-full bg-theme_orange max-w-max">
              More About
            </button>
          </div>
          <div className="p-4 bg-green-100">
            <div className="grid grid-cols-2 gap-4 pt-8">
              {lists.map((li) => (
                <div key={li.id} className="flex items-center gap-2 ">
                  <GrFormCheckmark className="items-center w-4 h-4 bg-green-300 rounded-full " />
                  <span>{li.text}</span>
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
                <h3>Collection - $5M</h3>
                <h3>Goal - $10M</h3>
              </div>
              <button className="px-6 py-2 text-black bg-white border-2 rounded-full max-w-max ">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default about;
