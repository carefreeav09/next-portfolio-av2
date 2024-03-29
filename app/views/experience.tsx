import React from 'react';

const ExperienceItem = () => {
  return (
    <li className='flex justify-between items-center py-8 border-b '>
      <div className='flex flex-col gap-y-8'>
        <h1 className='text-4xl tracking-tight'>Software Engineer</h1>
        <h3 className='text-3xl tracking-tight font-light'>Kotuko</h3>
      </div>

      <div className='flex flex-col gap-y-8'>
        <h3 className='text-3xl tracking-tight font-light'>
          January 2020 - Current
        </h3>
        <h3 className='text-3xl tracking-tight font-light'>Hybrid</h3>
      </div>
    </li>
  );
};

const ExperienceSection = () => {
  return (
    <section className='bg-black px-[5%] text-white'>
      <h1 className='text-[160px] font-bold tracking-tight'>Experience</h1>

      <ul>
        <ExperienceItem />

        <ExperienceItem />

        <ExperienceItem />
      </ul>

      <div className='flex justify-center items-center'>
        <button className='rounded-full bg-white text-3xl my-10 text-black p-8 '>
          View Resume
        </button>
      </div>
    </section>
  );
};

export default ExperienceSection;
