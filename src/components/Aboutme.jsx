"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

export default function TextRevealCardPreview() {
  return (
    <div className="pt-30 flex items-center justify-center flex-col  h-[20rem] rounded-2xl w-full "id="about-me"  >
      <div id="about-me">
        <TextRevealCard
      className="text-3xl flex items-center justify-center pb-10"
        text="</> About me"
        revealText="</> About me "
       
      ></TextRevealCard>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 md:flex-row ">
        <img className="w-[50%] md:w-[30%] lg:w-[15%]" src="/redonda.webp" alt="" />
        <TextRevealCardDescription className="text-center md:text-left w-[100%] md:w-[40%] flex justify-center items-center  text-[16px]  md:text-lg text-gray-500 dark:text-neutral-300">
        Hi, I am Gino Rojo, from La Serena Chile, I am a front-End Web Developer with skills to create modern, responsive, and
        functional web interfaces. I optimize structure, style, and logic to
        improve user experience. Known for logical thinking, attention to
        detail, and a strong commitment to continuous learning.
      </TextRevealCardDescription>
      </div>
    </div>
  );
}
