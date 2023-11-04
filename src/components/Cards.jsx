import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import Card from "./Card";

export default function Cards() {
  return (
    <div className="w-full py-[10rem] bg-white px-4">
      <div className="max-w-[1240px] grid md:grid-cols-3 gap-8">
        <Card img={Single} heading={'Single User'} price={'$149'} features={['500GB Storage','1 Granted User','Send upto 2GB']}/>
        <Card img={Double} heading={'Partnership'} price={'$199'} features={['1TB Storage','3 Users Allowed','Send upto 10GB']}/>
        <Card img={Triple} heading={'Group Account'} price={'$299'} features={['5TB Storage','10 Users Allowed','Send upto 20GB']}/>
      </div>
    </div>
  );
}
