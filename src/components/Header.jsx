import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandGmail
} from "@tabler/icons-react";
import {TextRevealCard} from './ui/text-reveal-card.jsx'
import { title } from "motion/react-client";
import Navbar from "./Navbar.jsx";


export default function Header() {
  const links = [
     
    {
      title: "Contact",
      icon: <IconBrandGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#contact",
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
    <div className="font-sans antialiased" id="home">
     
      <BackgroundBeams />
      <div className="flex flex-col items-center justify-center md:h-screen h-[500px] w-full] text-white gap-4">
      <Navbar />
        
        <h1 className="font-wide md:text-[140px] text-6xl ">Gino Rojo</h1>
        <TextRevealCard
          className="text-lg flex items-center justify-center"
          text="Frontend Developer"
          revealText="Frontend Developer"
        />
        
        <FloatingDock
        items={links}
        desktopClassName="absolute top-90  md:top-130 left-1/2 -translate-x-1/2 z-50 "
      />
      </div>
    </div>
  );
}
