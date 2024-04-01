import React from 'react';
import Image from 'next/image';

const ConnectSection = () => {
  return (
    <section className='bg-black text-white flex items-start justify-center flex-col px-[5%] mx-auto min-h-[50vh]'>
      <h1 className='text-[160px] font-bold tracking-tight'>Lets connect</h1>

      <h6 className='self-start border-b text-2xl leading-10'>
        carefreeav09@gmail.com
      </h6>

      <div className='flex gap-4 my-4'>
        <Image src='/github.svg' width={50} height={50} alt='github' />

        <Image src='/linkedin.svg' width={50} height={50} alt='linkedin' />

        <Image src='/discord.svg' width={50} height={50} alt='discord' />
      </div>
    </section>
  );
};

export default ConnectSection;
