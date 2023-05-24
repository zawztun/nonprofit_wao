import Link from "next/link";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import Image from "next/image";

type Props = {};
let list = [1, 2, 3, 4, 5, 6];
const Navbar = (props: Props) => {
  return (
    // <div className="w-full">

    //   <div className="flex items-center justify-around bg-sky-200 ">
    //     <div className="text-sm">ph:123 333 3333</div>
    //     <div className="flex justify-center gap-4 py-2 bg-sky-200">
    //       <Link href="https://mail.google.com/">
    //         <HiOutlineMail className="w-[25px] h-[25px] text-green" />
    //       </Link>
    //       <Link href="https://www.linkedin.com/in/zaw-tun-75bb52127/">
    //         <AiOutlineLinkedin className="w-[25px] h-[25px] text-blue" />
    //       </Link>
    //       <Link href="https://github.com/zawztun">
    //         <AiFillGithub className="w-[25px] h-[25px] text-black" />
    //       </Link>
    //       <Link href="https://twitter.com">
    //         <BsTwitter className="w-[25px] h-[25px] text-sky-400" />
    //       </Link>
    //     </div>
    //   </div>
    //   <div className="items-center w-3/5 mx-auto border lg:flex lg:justify-between">
    //     <div className="flex items-center gap-2">
    //       <span>LOGO</span>
    //       <div>World Arakanese Organization</div>
    //     </div>
    //     <div className="items-center hidden gap-4 first-line:lg:flex-row lg:flex">
    //       <Link href="/home">Home</Link>
    //       <Link href="/about">About us</Link>
    //       <Link href="/activities">Activities</Link>
    //       <Link href="/projects">Projects</Link>
    //       <Link href="/contact">Contact</Link>
    //       <Link href="/donate" className="p-4 rounded-md bg-rose-500 ">
    //         Donate
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="hidden md:flex md:justify-between py-2 gap-4 md:px-[15%] text-gray-600 bg-theme_light_blue">
        <div className="flex gap-4 text-[12px]">
          <span>Phone: 123 333 3333</span>
          <span>Email: 1Arakan@gmail.com</span>
        </div>
        <ul className="flex items-center gap-4 text-[12px]">
          <Link href="https://mail.google.com/">
            <HiOutlineMail className="w-[17px] h-[17px] text-green" />
          </Link>
          <Link href="https://www.linkedin.com/in/zaw-tun-75bb52127/" />
          <AiOutlineLinkedin className="w-[17px] h-[17px] text-blue" />
          <Link href="https://twitter.com">
            <BsTwitter className="w-[17px] h-[17px] text-white-600" />
          </Link>
        </ul>
      </div>
      <div className="flex justify-between py-6 md:px-[15%] items-center px-4 ">
        <div className="flex gap-2">
          <Link href="/">
            <div className="flex items-center gap-4 font-bold border border-gray-100">
              <Image src="/wao_logo.jpeg" alt="" width={35} height={25} />
              <span className="items-center text-2xl">
                World Arakanese Organization
              </span>
            </div>
          </Link>
        </div>
        <div className="hidden md:flex md:justify-around gap-4 text-[14px]">
          <div className="flex items-center gap-4">
            <Link href="/about">About us</Link>
            <Link href="/activities">Activities</Link>
            <Link href="/project">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <button className="px-6 py-3 text-white rounded-full bg-theme_orange">
            Donate
          </button>
        </div>
        <div className="lg:hidden">Menu</div>
      </div>
    </div>
  );
};

export default Navbar;
