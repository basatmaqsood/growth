import React, { useState } from "react";
import { AiOutlineMenu as Menu, AiOutlineClose as Close } from "react-icons/ai";

export const Navbar = () => {
  const [navClosed, setNavclose] = useState(false);
  function handleNav() {
    setNavclose(!navClosed);
  }
  return (
    <div className="text-white flex justify-around items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="text-green w-full text-3xl font-bold">Growth.</h1>
      <ul className="md:flex hidden">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={() => handleNav()} className="block md:hidden">
        {navClosed ? <Menu size={20} /> : <Close size={20} />}
      </div>
      <div
        className={
          !navClosed
            ? "fixed top-0 left-0 w-[60%] h-full border-r border-r-gray bg-bgc ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-green w-full text-3xl font-bold m-4">Growth.</h1>
        <ul className="pt-12 uppercase p-2">
          <li className="p-4 border-b border-gray">Home</li>
          <li className="p-4 border-b border-gray">Company</li>
          <li className="p-4 border-b border-gray">Resources</li>
          <li className="p-4 border-b border-gray">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};
