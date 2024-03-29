import React, {useRef} from 'react';

//
export const HeroSection = () => {
  const ref = useRef(null);

  return (
    <section
      className='h-screen'
      style={{
        scrollSnapAlign: 'center',
        perspective: '500px',
      }}
    >
      <div
        className='bg-black h-screen w-full flex justify-center items-start flex-col px-[5%]'
        ref={ref}
      >
        <div className='flex justify-start items-end'>
          <h1 className='text-[160px] font-bold text-white leading-[140px] flex-1'>
            Hi, I am Aabhushan
          </h1>

          <h6 className='text-2xl text-appGray font-light flex-1'>
            (full stack developer)
          </h6>
        </div>

        <h2 className='font-sans w-2/3 text-appGray text-3xl font-light mt-10 -tracking-wide leading-[30px]'>
          I develop accessible, responsive, interactive, and animated websites
          with a strong focus on performance. Also i do play lot of games in my
          free time
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
