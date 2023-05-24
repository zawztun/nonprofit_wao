import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-full pt-16 bg-theme_primary  min-h-[400px] ">
      <div className="flex flex-col gap-4 pt-8 mx-auto text-white theme-container lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-2 lg:basis-[35%] ">
          <div className="flex gap-2 text-xl ">
            <span>logo</span>
            <h1>Huminity</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            libero. Sapiente, a quia suscipit alias deleniti tenetur! Molestias
            cupiditate, officia maxime esse pariatur dolor doloremque aliquam.
          </p>
          <div className="flex gap-4 ">
            <span>logo1</span>
            <span>logo2</span>
            <span>logo3</span>
            <span>logo4</span>
          </div>
        </div>
        <div className="flex items-center flex-grow gap-4 p-8 text-sm bg-theme_footer">
          <div className="flex flex-col gap-4 list-none  basis-[33%] ">
            <h1 className="text-xl ">Involve</h1>
            <div className="flex flex-col gap-2 text-sm list-none ">
              <li>About US</li>
              <li>Volunteer</li>
              <li>Causes</li>
              <li>Projects</li>
              <li>Team</li>
            </div>
          </div>
          <div className="flex flex-col gap-4 list-none  basis-[33%]">
            <h1 className="text-xl">Utility</h1>
            <div className="flex flex-col gap-2 text-sm list-none ">
              <li>Style Guide</li>
              <li>Licences</li>
              <li>Password</li>
              <li>404 Page</li>
              <li>Changelog</li>
            </div>
          </div>
          <div className="flex flex-col gap-4 list-none  basis-[33%]">
            <h1 className="text-xl">Contact</h1>
            <div className="flex flex-col gap-2 text-sm list-none ">
              <li>About US</li>
              <li>Volunteer</li>
              <li>Causes</li>
              <li>Projects</li>
              <li>Team</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
