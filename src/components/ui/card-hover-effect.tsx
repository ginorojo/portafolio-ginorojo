import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { cn } from "../../libs/utils";

export default function HoverEffectManual() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:py-10 gap-4 max-w-4xl mx-auto px-1">
      {[0, 1].map((index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative group p-2 h-full w-full"
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <Card>
            {index === 0 ? (
              <>
                <h3 className="text-white font-bold text-lg mb-4">Brigham Young University</h3>
                <p className="text-sm text-neutral-100 mb-2 font-semibold">BA Software development:</p>
                <p className="text-sm text-neutral-300"> April 2024 - in progress</p>
                <p className="text-sm text-neutral-100 mt-4 mb-2 font-semibold">Certificate in computer and web development:</p>
                <p className="text-sm text-neutral-300"> April 2024 - April 2025</p>
              </>
            ) : (
              <>
                <h3 className="text-white font-bold text-lg mb-4">Funval Internacional</h3>
                <p className="text-sm text-neutral-100 mb-2 font-semibold">Certificate in Frontend Development:</p>
                <p className="text-sm text-neutral-300"> April 2025 - July 2025</p>
              </>
            )}
          </Card>
        </div>
      ))}
    </div>
  );
}

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-r from-[#18cbfc48] via-[#6544f5ed] to-[#ad48ff5c] border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50 p-4">{children}</div>
    </div>
  );
};
