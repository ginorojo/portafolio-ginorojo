import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState } from "react";

export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className="mx-auto max-w-sm px-4  font-sans antialiased md:max-w-4xl md:px-8 lg:px-6">
      <div className="relative grid grid-cols-1 gap-6 md:gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center border-4 border-[#a748fe] animate-glow"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col gap-3 items start ">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <div className="flex gap-4 md:pt-12 justify-center md:hidden ">
              <button
                onClick={handlePrev}
                className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-[#18CCFC] via-[#6344F5] to-[#AE48FF] cursor-pointer"
              >
                <IconArrowLeft className=" h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-100" />
              </button>
              <button
                onClick={handleNext}
                className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-[#18CCFC] via-[#6344F5] to-[#AE48FF] cursor-pointer"
              >
                <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-100" />
              </button>
            </div>
            <h3 className="pt-6 md:pt-0  md:text-2xl text-lg font-bold text-black dark:text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-sm mt-2 text-gray-500 dark:text-neutral-500">
              {testimonials[active].designation}
            </p>

            {testimonials[active].technologies && (
              <div className="flex gap-2 flex-wrap items-start pt-3 pb-2 md:pb-0 ">
                {testimonials[active].technologies.map((tech, index) => (
                  
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-6 h-6 md:w-6 md:h-6 object-contain"
                    />
                ))}
              </div>
            )}

            <motion.p className="md:mt-4 mt-2 md:text-lg text-gray-500 dark:text-neutral-300">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

         
          <div className=" flex items-start justify-between gap-5 pt-3 ">
            <div className="flex items-start gap-4">
              <a
              href={testimonials[active].github}
              target="_blank"
              className="cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="hover:scale-120 transition-transform duration-300"
              >
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
  3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
  0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.729.084-.729 
  1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.495.998.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.334-5.466-5.93 
  0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
  0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 2.045.138 3 
  .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 
  1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.102.81 
  2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 
  22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
            </a>
            <a
              href={testimonials[active].link}
              target="_blank"
              className="cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#ffff"
                className="hover:scale-120 transition-transform duration-300"
              >
                <path
                  d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 
              33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"
                />
              </svg>
            </a>
            </div>
             


            
          </div>

          <div className=" md:block hidden ">
            <div className="flex gap-4 md:pt-4 justify start ">
              <button
                onClick={handlePrev}
                className="hover:scale-110 transition-transform duration-300 group/button flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-[#18CCFC] via-[#6344F5] to-[#AE48FF] cursor-pointer"
              >
                <IconArrowLeft className=" h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-100" />
              </button>
              <button
                onClick={handleNext}
                className="hover:scale-110 transition-transform duration-300 group/button flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-[#18CCFC] via-[#6344F5] to-[#AE48FF] cursor-pointer"
              >
                <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-100 " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
