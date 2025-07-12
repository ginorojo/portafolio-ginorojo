"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

export default function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center flex-col  h-[20rem] rounded-2xl w-full">
      <TextRevealCard
      className="text-3xl flex items-center justify-center"
        text="About me"
        revealText="About me "
      ></TextRevealCard>
      <TextRevealCardDescription className=" w-[100%] md:w-[50%] flex justify-center items-center text-center text-[16px]  md:text-lg text-gray-500 dark:text-neutral-300">
        Front-End Web Developer with skills to create modern, responsive, and
        functional web interfaces. I optimize structure, style, and logic to
        improve user experience. Known for logical thinking, attention to
        detail, and a strong commitment to continuous learning.
      </TextRevealCardDescription>
    </div>
  );
}
