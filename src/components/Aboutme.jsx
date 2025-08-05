"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

export default function TextRevealCardPreview() {
  return (
    
      <div className="flex justify-center">
        <TextRevealCardDescription className=" md:text-center w-[100%] md:w-[40%] flex justify-center items-center  text-[16px]  md:text-lg text-neutral-300">
        Hi, I am Gino Rojo, from La Serena Chile, I am a front-End Web Developer with skills to create modern, responsive, and
        functional web interfaces. I optimize structure, style, and logic to
        improve user experience. Known for logical thinking, attention to
        detail, and a strong commitment to continuous learning.
      </TextRevealCardDescription>
      
    </div>
  );
}
