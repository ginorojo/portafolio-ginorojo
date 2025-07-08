import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandX,
  IconBrandGithub,
  IconBrandLinkedin
} from "@tabler/icons-react";
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
    <div>
      <BackgroundBeams />
      <div className="flex flex-col items-center justify-center md:h-screen h-[500px] w-full] text-white gap-4">
        <h1 className="md:text-[90px] text-6xl font-semibold">Gino Rojo</h1>
        <p className="md:text-[40px] text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#18CCFC] via-[#6344F5] to-[#AE48FF]">
          Web Developer
        </p>
        <FloatingDock
        items={links}
        desktopClassName="absolute top-90 md:top-110 lg:top-120 left-1/2 -translate-x-1/2 z-50 "
      />
      </div>
    </div>
  );
}
