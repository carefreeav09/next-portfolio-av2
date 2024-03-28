import { motion, animate, useMotionValue, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const ProjectsSection = () => {
  const controls = useAnimation();
  const listRef = useRef<HTMLUListElement>(null);

  const FAST_DURATION = 60;
  const SLOW_DURATION = 100;

  const [duration, setDuration] = useState(FAST_DURATION);
  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [totalWidth, setTotalWidth] = useState(0);

  useEffect(() => {
    const ulElement = listRef.current;
    let totalWidth = 0;

    if (ulElement) {
      const liElements = ulElement.querySelectorAll("li");

      liElements.forEach((li) => {
        const style = window.getComputedStyle(li);
        totalWidth +=
          li.offsetWidth +
          parseInt(style.marginLeft) +
          parseInt(style.marginRight);
      });
      setTotalWidth(totalWidth);
    }
  }, []);

  useEffect(() => {
    let controls;
    let finalPosition = -totalWidth / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    // return controls?.stop;
  }, [rerender, xTranslation, duration, totalWidth]);

  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
  ];

  return (
    <section className="min-h-screen flex justify-start items-center flex-col bg-white w-full overflow-hidden">
      <div className="w-full px-[5%]">
        <h1 className="text-[160px] text-black font-bold">Projects</h1>

        <h4 className="text-5xl w-3/4 font-light tracking-tighter">
          Here are some of my selected work , i have worked on
        </h4>
      </div>

      <div className="relative my-10 w-full">
        <motion.ul
          className="absolute left-0 flex gap-4 h-[300px]"
          style={{ x: xTranslation }}
          ref={listRef}
          onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION);
          }}
        >
          {[...items, ...items].map((item, idx) => (
            <motion.li
              animate={controls}
              key={idx}
              className="flex-[0_0_30vw] mr-5 even:bg-red-400 text-white odd:bg-slate-400 last:mr-0"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
