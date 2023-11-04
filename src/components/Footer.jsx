import React from "react";
import FooterIntro from "./FooterIntro";
import FooterLists from "./FooterLists";

export default function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid md:grid-cols-3 gap-8 text-gray-light">
        <FooterIntro/>
      <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 text-lg ">
        <FooterLists heading={'Solutions'} items={['Analytics','Marketing','Commerce','Insights']}/>
        <FooterLists heading={'Support'} items={['Pricing','Documentation','Guides','API Status']}/>
        <FooterLists heading={'Company'} items={['About','Blog','Jobs','Press']}/>
      </div>
    </div>
  );
}
