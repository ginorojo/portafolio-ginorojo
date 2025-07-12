import React from 'react'
import Tecnologias from './Tecnologias.jsx'
import TecnologiasGrupal from './TecnologiasGrupal.jsx'
import TechCarousel from './Carrusel.jsx'
import Education from './Education.jsx'
import Cv from './Cv.jsx'
import Aboutme from './Aboutme.jsx'
import {TextRevealCard} from './ui/text-reveal-card.jsx'

export default function Body() {
  return (
    <div className='font-array flex flex-col items-center justify-center bg-gradient-to-b from-[#242424] to-[#3f3a75] h-full w-full text-white  px-8 pt-0'>
      
      <TechCarousel />
      <Aboutme />

      {/* Personal Projects */}
      <TextRevealCard
        className="pt-20  flex items-center justify-center "
        text="Personal Projects"
        revealText="Personal Projects"
      />
      <Tecnologias />

      {/* Team Projects */}
      <TextRevealCard
        className="pt-20 flex items-center justify-center"
        text="Team Projects"
        revealText="Team Projects"
      />
      <TecnologiasGrupal />

      {/* Education */}
      <TextRevealCard
        className="pt-20 flex items-center justify-center"
        text="Education"
        revealText="Education"
      />
      <Education />

      {/* Resume */}
      <TextRevealCard
        className="pt-20 md:pb-15 flex items-center justify-center"
        text="Resume"
        revealText="Resume"
      />
      <Cv />
    </div>
  );
}
