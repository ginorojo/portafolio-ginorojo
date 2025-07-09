import React from 'react'
import Tecnologias from './Tecnologias.jsx'
import TecnologiasGrupal from './TecnologiasGrupal.jsx'
import TechCarousel from './Carrusel.jsx'

export default function Body() {
  return (
    <div className='ont-sans antialiased flex flex-col items-center justify-center bg-gradient-to-b from-[#242424] to-[#473c91] h-full w-full text-white md:p-8 px-8 pt-0'>
        <TechCarousel/>   
        <h2 className='text-3xl font-semibold text-center  pt-30 text-transparent bg-clip-text bg-gradient-to-r from-[#18CCFC] via-[#6344F5] to-[#AE48FF]'>Personal Projects</h2>    
        <Tecnologias/>
        <h2 className='text-3xl font-semibold text-center md:pt-15 text-transparent bg-clip-text bg-gradient-to-r from-[#18CCFC] via-[#6344F5] to-[#AE48FF]'>Team Projects</h2>
        <TecnologiasGrupal/>
        

      
    </div>
  )
}
 