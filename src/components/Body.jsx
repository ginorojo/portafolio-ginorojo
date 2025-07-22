import React from "react";
import Tecnologias from "./Tecnologias.jsx";
import TecnologiasGrupal from "./TecnologiasGrupal.jsx";
import TechCarousel from "./Carrusel.jsx";
import Education from "./Education.jsx";
import Cv from "./Cv.jsx";
import Aboutme from "./Aboutme.jsx";
import { TextRevealCard } from "./ui/text-reveal-card.jsx";
import ContactForm from "./Contact.jsx";
import GitHubCalendarSection from "./GitHubCalendarSection.jsx";

export default function Body() {
  return (
    <div className="font-array flex flex-col items-center justify-center bg-gradient-to-b from-[#242424] to-[#3f3a75] h-full w-full text-white  px-8 pt-0 ">
      <TechCarousel />
      <Aboutme />

      {/* Personal Projects */}
      <div id="personal-projects">
        <TextRevealCard
          className="md:pt-40 pt-50  flex items-center justify-center  "
          text="</> Personal Projects"
          revealText="</> Personal Projects"
        />
        <Tecnologias />
      </div>

      {/* Team Projects */}
      <div id="team-projects">
        <TextRevealCard
          className="md:pt-30 pt-20 flex items-center justify-center"
          text="</> Team Projects"
          revealText="</> Team Projects"
        />
        <TecnologiasGrupal />
      </div>

       <div id="GitHub-Activity" className="w-full">
        <TextRevealCard
          className="md:pt-30 pt-20 flex items-center justify-center w-full text-center "
          text="</> GitHub Activity"
          revealText="</> GitHub Activity"
        />
       <GitHubCalendarSection/>
      </div>
        

      {/* Education */}
      <div id="education">
        <TextRevealCard
          className="md:pt-30 pt-20 flex items-center justify-center"
          text="</> Education"
          revealText="</> Education"
        />
        <Education />
      </div>

      {/* Resume */}
      <div id="resume">
        <TextRevealCard
          className="md:pt-30 pt-15 md:pb-15 flex items-center justify-center"
          text="</> Resume"
          revealText="</> Resume"
        />
        <Cv />
      </div>
      <div
        id="contact"
        className="w-full flex flex-col items-center justify-center"
      >
        <TextRevealCard
          className="md:pt-30 pt-15  flex items-center justify-center"
          text="</> Contact Me"
          revealText="</> Contact Me"
        />
        <ContactForm />
      </div>

      <a href="#home" className="hover:scale-150 transition-transform duration-300 mb-4 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="50px"
          viewBox="0 -960 960 960"
          width="50px"
          fill="#ffff"
        >
          <path d="m296-224-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Z" />
        </svg>
      </a>
    </div>
  );
}
