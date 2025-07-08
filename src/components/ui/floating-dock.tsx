import { cn } from "../../libs/utils";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";

export const FloatingDock = ({ items, desktopClassName }) => {
  return <FloatingDockDesktop items={items} className={desktopClassName} />;
};

const FloatingDockDesktop = ({ items, className }) => {
  const [isPointer, setIsPointer] = useState(true);
  const [touchedItem, setTouchedItem] = useState(null);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setIsPointer(mq.matches);

    const handleClickOutside = () => setTouchedItem(null);
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={isPointer ? (e) => mouseX.set(e.pageX) : undefined}
      onMouseLeave={isPointer ? () => mouseX.set(Infinity) : undefined}
      className={cn(
        "mx-auto flex h-16 items-end gap-4 rounded-2xl bg-gradient-to-r from-[#18CCFC] via-[#6344F5] to-[#AE48FF] px-4 pb-3 fixed bottom-6 left-1/2 -translate-x-1/2 z-50",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer
          key={item.title}
          {...item}
          isPointer={isPointer}
          mouseX={mouseX}
          touchedItem={touchedItem}
          setTouchedItem={setTouchedItem}
        />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  isPointer,
  title,
  icon,
  href,
  touchedItem,
  setTouchedItem,
}) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const isTouched = touchedItem === title;

  const handleClick = (e) => {
    if (!isPointer) {
      e.stopPropagation();

      if (isTouched) {
        setTimeout(() => {
          setTouchedItem(null);
          window.location.href = href;
        }, 100);
      } else {
        setTouchedItem(title);
      }
    }
  };

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const widthIconTransform = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightIconTransform = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthIconTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const heightIcon = useSpring(heightIconTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  if (!isPointer) {
    return (
      <div onClick={handleClick} className="cursor-pointer">
        <div
          ref={ref}
          className={`relative flex aspect-square items-center justify-center rounded-full transition-all duration-300 bg-gray-200 dark:bg-neutral-800 ${
            isTouched ? "w-20 h-20" : "w-12 h-12"
          }`}
        >
          {isTouched && (
            <div className="absolute -top-6 text-xs text-white whitespace-nowrap">
              {title}
            </div>
          )}
          <div
            className={`flex items-center justify-center ${
              isTouched ? "w-8 h-8" : "w-6 h-6"
            }`}
          >
            {icon}
          </div>
        </div>
      </div>
    );
  }

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800"
      >
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 2, x: "-50%" }}
            className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
          >
            {title}
          </motion.div>
        )}
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
