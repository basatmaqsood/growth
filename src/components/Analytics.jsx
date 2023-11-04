import React from "react";
import Laptop from "../assets/laptop.jpg";
import Button from "./Button";

export default function () {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="Laptop Image" />
        <div className="flex  flex-col justify-center gap-2 md:gap-3">
          <p className="text-green font-bold text-lg md:text-xl">DATA ANALYTICS DASHBOARD</p>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Manage Data Analytics Centrally</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            corrupti, eveniet itaque dolor provident ab harum omnis, eum
            repellendus quaerat a dignissimos earum adipisci, eos sint esse nemo
            et vitae!
          </p>
          <Button value={"Get Started"} styles={"bg-black text-green hover:bg-black-light hover:text-white"}/>

        </div>
      </div>
    </div>
  );
}
