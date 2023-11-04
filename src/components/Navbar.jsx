import React, { useState } from "react";
import { AiOutlineMenu as Menu, AiOutlineClose as Close } from "react-icons/ai";
import MobileMenu from "./MobileMenu";

export const Navbar = () => {
  const [navClosed, setNavclose] = useState(false);
  function handleNav() {
    setNavclose(!navClosed);
  }
  return (
    <div className="text-white flex justify-around items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="text-green w-full text-3xl font-bold">Growth.</h1>
      <ul className="hidden md:flex cursor-pointer font-semibold text-lg ">
        <li className="p-4 hover:text-green">Home</li>
        <li className="p-4 hover:text-green">Company</li>
        <li className="p-4 hover:text-green">Resources</li>
        <li className="p-4 hover:text-green">About</li>
        <li className="p-4 hover:text-green">Contact</li>
      </ul>
      <div onClick={() => handleNav()} className="block md:hidden">
        {!navClosed ? <Menu size={20} /> : <Close size={20} />}
      </div>
      <MobileMenu navClosed={navClosed} />
    </div>
  );
};
