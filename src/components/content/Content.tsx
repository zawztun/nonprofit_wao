import React from "react";

import Image from "next/image";
import ContactForm from "./ContentForm";
type Props = {};

const Content = (props: Props) => {
  return (
    <div className="flex flex-col gap-8 px-24 py-24 font-serif bg-gray-800 lg:flex-row theme-container ">
      <div className="flex flex-col gap-4 lg:w-[50%]">
        <div className="flex flex-col gap-4 text-white">
          <span className="text-[14px] text-red-600 ">How We Help</span>
          <h2 className="text-3xl font-bold">
            Join The CommunityTo Give Education For Children
          </h2>
          <p className="font-serif text-xl text-gray-300">
            The Arakanese community actively seeks assistance to provide
            education for children in their region. They recognize the
            significance of education in shaping the lives of young individuals.
            By collaborating with organizations and individuals, they aim to
            secure resources and support to establish schools, provide learning
            materials, and train teachers. The collective effort towards helping
            the Arakanese community ensures that children have the opportunity
            to acquire knowledge and skills for a better future.
          </p>
        </div>
        <div className="w-ful h-[300px] overflow-y-hidden">
          <Image src="/pic01.png" alt="" width={1200} height={350} />
        </div>
        <button className="px-6 py-3 rounded-full bg-theme_orange max-w-max">
          Donate
        </button>
      </div>
      <div className="lg:w-[50%] ">
        <ContactForm />
      </div>
    </div>
  );
};
export default Content;
