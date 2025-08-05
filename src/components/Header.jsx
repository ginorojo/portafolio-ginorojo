import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandGmail,
} from "@tabler/icons-react";
import { TextRevealCard } from "./ui/text-reveal-card.jsx";
import { title } from "motion/react-client";
import Navbar from "./Navbar.jsx";

export default function Header() {
  const links = [
    {
      title: "Contact",
      icon: (
        <IconBrandGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/ginorojo",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/gino-rojo-jorquera-72aba1148/",
    },
  ];

  return (
    <div className="font-sans antialiased" id="home">
      <BackgroundBeams />
      <div className="flex flex-col items-center justify-center md:h-screen h-[500px] w-full] text-white gap-4">
        <Navbar />

        <div className="flex flex-col gap-5 md:flex-row md:items-start items-center justify-center">
          <div className="flex flex-col justify-center items-center relative">
            <h1 className="font-wide md:text-[80px] text-[50px] pt-20 md:pt-0 bg-gradient-to-r from-[#18CCFC] via-[#6344F5] to-[#AE48FF] bg-clip-text text-transparent hover:bg-gradient-to-l transition-colors">
              Portfolio
            </h1>

            <h4 className="font-wide md:text-[40px]  text-[25px] text-center ">
              Hello world, my name is{" "}
            </h4>

            <h4 className="font-wide text-[40px] flex ">
              Gino Rojo <p className="bg-gradient-to-r from-[#18CCFC] via-[#6344F5] to-[#AE48FF] bg-clip-text text-transparent hover:bg-gradient-to-l transition-colors font-bold">.</p>
            </h4>

            <FloatingDock
              items={links}
              desktopClassName="absolute top-130  md:top-70 left-1/2 -translate-x-1/2 z-50 "
            />
          </div>

          <img
            className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] "
            src="/redonda.webp"
            alt=""
          />
        </div>
        {/* <TextRevealCard
          className="text-lg flex items-center justify-center"
          text="Frontend Developer"
          revealText="Frontend Developer"
        /> */}
      </div>
    </div>
  );
}
