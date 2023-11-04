import React from "react";
import Typed from "react-typed";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="text-white ">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center gap-4 md:gap-3">
        <p className="text-green font-bold px-2 text-lg sm:text-2xl">Growing with Data Analytics</p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold ">Grow with Data</h1>
        <div className="text-lg sm:text-2xl md:text-3xl font-bold flex justify-center gap-2">
            <p >Fast, Flexible Financing for </p>
            <Typed className="text-gray" strings={[' BTB',' BTC',' SAAS']} loop typeSpeed={120} backSpeed={140}/>
        </div>
        <p className="pl-2 pr-2 text-lg sm:text-xl md:text-2xl font-bold text-gray">Monitor your Data Analytics to increase revenue for BTB, BTC and SAAS platforms</p>
        <Button value={"Get Started"} styles={"bg-green mx-auto text-black hover:bg-green-dark"}/>
      </div>
    </div>
  );
}