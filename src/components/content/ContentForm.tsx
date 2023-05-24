import React from "react";

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 border border-gray-600 rounded-sm  p-8 ">
      <h2 className="text-white text-3xl">Become a Volunteer</h2>
      <div className="flex flex-col gap-4 w-full bg-gray-800 text-white rounded-md ">
        <input
          type="text"
          placeholder="Full Name "
          className="outline-none text-xl py-4 w-full px-2 bg-gray-800 border border-gray-600 rounded-md"
        />
        <input
          type="text"
          placeholder="Email address "
          className="outline-none text-xl py-4 w-full px-2 bg-gray-800 border border-gray-600 rounded-md"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className=" outline-none text-xl py-4 w-full px-2 bg-gray-800 border border-gray-600 rounded-md"
        />
        <textarea
          placeholder="Message"
          className=" px-2 bg-gray-800 border border-gray-600 outline-none text-xl w-full h-[200px] flex items-center justify-center rounded-md"
        />
        <button className="px-6 py-2 bg-white rounded-full max-w-max text-xl text-black border-2">
          Submit
        </button>
      </div>
    </div>
  );
};
export default ContactForm;
