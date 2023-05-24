import React from "react";
import Link from "next/link";
import Image from "next/image";
type Props = {};

export default function Hero({}: Props) {
  return (
    <div>
      <div className="bg-gray-200 text-black flex justify-between items-center theme-container py-4">
        {/* desktop */}
        <ul className="flex gap-4 md:gap-12 items-center">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* mobile */}
        <button className="hidden">MENU</button>
      </div>
      <header className="bg-black text-white flex justify-between items-center px-4 py-6 md:px-[15%] ">
        <Link href="">LOGO</Link>
        {/* desktop */}
        <ul className="hidden md:flex gap-12 items-center">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Home</li>
          <li>About</li>
          <li className="px-4 py-2 bg-red">Donate</li>
        </ul>
        {/* mobile */}
        <button className="hidden">MENU</button>
      </header>

      <main className="w-full theme-container text-white relative py-20 md:min-h-[60vh] md:flex items-center">
        <Image
          src="/Banner_one.png"
          alt="kids"
          width={1200}
          height={600}
          className=" absolute top-0 left-0 w-full h-full object-cover -z-20"
        />

        <div className="bg-black opacity-30 absolute top-0 left-0 w-full h-full -z-10"></div>

        <div className="flex flex-col gap-4 z-10 lg:w-[50%]">
          <span className="text-sm">Need help</span>
          <h1 className="text-4xl lg:text-6xl">Being Life Saver For Someone</h1>
          <div className="flex gap-4 items-center">
            <button className="px-4 py-2 bg-red">Donate</button>
            <button className="px-4 py-2 bg-blue">Discover</button>
          </div>
        </div>
      </main>
    </div>
  );
}
