import {useAnimation, motion} from 'framer-motion';
import React, {useEffect, useRef} from 'react';

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
          ease: 'linear', //steady
        },
      })
      .then(() => {
        controls.set({x: 0});
        startAnimation();
      });
  };
  useEffect(() => {
    startAnimation();
  }, []);

  //
  const skills = [
    'React',
    'React Native',
    'Typescript',
    'NodeJS',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'GraphQL',
    'REST API',
    'Firebase',
    'AWS',
    'Docker',
  ];
  const duplicatedItems = [...skills];

  return (
    <section className='min-h-[50vh] bg-appGray text-white mb-6 flex justify-center items-start flex-col'>
      <h1 className='text-[160px] font-bold tracking-tight px-[5%]'>
        Languages
      </h1>

      <ul
        ref={listRef}
        className='flex list-none w-full overflow-x-scroll px-5 mx-0'
      >
        {duplicatedItems.map((item, index) => (
          <motion.li
            animate={controls}
            key={index}
            className="gap-x-10 mr-5 text-white last:mr-0 text-6xl first:before:content-[''] before:content-['/'] before:mr-5 before:font-light"
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default MySkillsSection;
