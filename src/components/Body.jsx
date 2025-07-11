import React from 'react'
import Tecnologias from './Tecnologias.jsx'
import TecnologiasGrupal from './TecnologiasGrupal.jsx'
import TechCarousel from './Carrusel.jsx'
import Education from './Education.jsx'
import Cv from './Cv.jsx'
export default function Body() {
  return (
    <div className='font-array flex flex-col items-center justify-center bg-gradient-to-b from-[#242424] to-[#3f3a75] h-full w-full text-white md:p-8 px-8 pt-0'
    >
        <TechCarousel/>   
        <h2 className='font-array  text-4xl  text-center  pt-30 text-transparent bg-clip-text bg-gradient-to-r from-[#18CCFC] via-[#6344F5] to-[#AE48FF]'>Personal Projects</h2>    
        <Tecnologias/>
        <h2 className='font-array  text-4xl text-center md:pt-15 text-transparent bg-clip-text bg-gradient-to-r from-[#18CCFC] via-[#6344F5] to-[#AE48FF]'>Team Projects</h2>
        <TecnologiasGrupal/>
        <h2 className='font-array  text-4xl  text-center md:pt-15 pb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#18CCFC] via-[#6344F5] to-[#AE48FF]'>Education</h2>
        <Education/>
         <h2 className='font-array  text-4xl  text-center md:pt-15 text-transparent bg-clip-text bg-gradient-to-r from-[#18CCFC] via-[#6344F5] to-[#AE48FF]'>Resume</h2>
        <Cv/>

      

      
    </div>
  )
}
 