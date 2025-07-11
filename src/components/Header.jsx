import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandX,
  IconBrandGithub,
  IconBrandLinkedin
} from "@tabler/icons-react";
import {TextRevealCard} from './ui/text-reveal-card.jsx'
import { title } from "motion/react-client";

export default function Header() {
  const links = [
     
    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://twitter.com/",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://github.com/",
    },
   {
    title: "LinkedIn",
    icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "https://www.linkedin.com/in/gino-rojo-8b0ab8231/",
   }
  ];

  return (
    <div className="font-sans antialiased">
      <BackgroundBeams />
      <div className="flex flex-col items-center justify-center md:h-screen h-[500px] w-full] text-white gap-4">
        <h1 className="font-array  md:text-[120px] text-6xl ">Gino Rojo</h1>
        <TextRevealCard
          className="text-3xl flex items-center justify-center"
          text="Web Developer"
          revealText="Web Developer"
        />
        
        <FloatingDock
        items={links}
        desktopClassName="absolute top-90  md:top-130 left-1/2 -translate-x-1/2 z-50 "
      />
      </div>
    </div>
  );
}
