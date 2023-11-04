import React from 'react'
import Button from './Button'

export default function Card({img,heading,price,features}) {
  return (
    <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
    <img
      className="w-20 mx-auto mt-[-3rem] bg-white"
      src={img}
      alt="single card "
    />
    <h2 className="text-xl font-bold text-center py-8">{heading}</h2>
    <p className="text-center font-bold text-3xl">{price}</p>
    <div className="text-center font-medium">
      <p className="py-2 border-b mx-8 mt-8">{features[0]}</p>
      <p className="py-2 border-b mx-8 ">{features[1]}</p>
      <p className="py-2 border-b mx-8 ">{features[2]}</p>
    </div>
    <Button value={"Start Trial"} styles={"mx-auto bg-green mt-2 px-5"} />
  </div>
  )
}
