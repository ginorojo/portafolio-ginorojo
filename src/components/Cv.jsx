"use client";

import { link } from "motion/react-client";
import  Carousel from "./ui/carousel";
export default function CarouselDemo() {
  const slideData = [
    {
      title: "CV English",
      button: "Explore Component",
      src: "/cv-ing.png",
      link:"https://drive.google.com/file/d/1hgTWtoe1hzu0GKAxpkyVPc7D3U4-4tm0/view?usp=drive_link"
    },
    {
      title: "CV Spanish",
      button: "Explore Component",
      src: "/cv-esp.png",
      link:"https://drive.google.com/file/d/1z3TmlzX3VQmu4HjTx_N1HkbhV_gUCAqn/view?usp=drive_link"
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
