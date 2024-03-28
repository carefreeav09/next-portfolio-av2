import { useAnimation, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

const MySkillsSection = () => {
  const controls = useAnimation();

  const listRef = useRef<HTMLUListElement>(null);

  const startAnimation = () => {
    const listWidth = listRef.current?.scrollWidth || 0;

    controls
      .start({
        x: [0, -listWidth / 2],
        transition: {
          duration: 60, // in seconds
          ease: "linear", //steady
        },
      })
      .then(() => {
        controls.set({ x: 0 });
        startAnimation();
      });
  };
  useEffect(() => {
    startAnimation();
  }, []);

  //
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];
  const duplicatedItems = [...items, ...items];

  return (
    <section className="min-h-[40vh] bg-red-400 text-white">
      <h1>my skills</h1>

      <ul
        ref={listRef}
        className="flex list-none h-[400px] w-full overflow-x-scroll px-5 mx-0 my-auto"
      >
        {duplicatedItems.map((item, index) => (
          <motion.li
            animate={controls}
            key={index}
            className="flex-[0_0_30vw] mr-5 even:bg-red-400 text-white odd:bg-slate-400 last:mr-0"
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default MySkillsSection;
