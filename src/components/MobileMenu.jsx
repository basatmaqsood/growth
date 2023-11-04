import React from "react";

export default function MobileMenu({ navClosed }) {
  return (
    <div
      className={
        navClosed
          ? "fixed top-0 left-0 w-[60%] h-full border-r border-r-gray bg-bgc ease-in-out duration-500"
          : "fixed left-[-100%]"
      }
    >
      <h1 className="text-green w-full text-3xl font-bold m-4 mt-8">Growth.</h1>
      <ul className="pt-12 uppercase p-2 font-semibold">
        <li className="p-4 border-b border-gray">Home</li>
        <li className="p-4 border-b border-gray">Company</li>
        <li className="p-4 border-b border-gray">Resources</li>
        <li className="p-4 border-b border-gray">About</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
}
