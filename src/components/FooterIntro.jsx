import React from 'react';
import {
    FaDribbbleSquare as Drible,
    FaFacebookSquare as Facebook,
    FaInstagramSquare as Instagram,
    FaGithubSquare as Github,
    FaTwitterSquare as Twitter,
  } from "react-icons/fa";

export default function FooterIntro() {
  return (
    <div>
    <h1 className="text-green w-full text-3xl font-bold">Growth.</h1>
    <p className="py-4">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
      reprehenderit possimus nobis laboriosam totam pariatur maiores iste
      commodi?
    </p>
    <div className="flex gap-3 text-4xl cursor-pointer">
      <Facebook />
      <Instagram />
      <Github />
      <Twitter />
      <Drible />
    </div>
  </div>
  )
}
