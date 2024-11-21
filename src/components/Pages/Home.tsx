'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import banner from '/public/images/profile-01.png';

const Home = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = contentRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          element.classList.add('animate-slideFromLeft');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <section
        id="home"
        className="w-full sm:h-[40vh] md:h-auto lg:h-[90vh] bg-gradient-to-r from-[#f2f2ff] to-[#ebf9ff] p-4 lg:p-8 flex flex-col lg:flex-row items-center justify-between overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row md:flex-row items-center justify-between w-full lg:w-auto mt-5">
          <div
            ref={contentRef}
            className="hidden-on-load lg:max-w-[100%] lg:pl-10 lg:text-left md:text-left text-center "
          >
            <h2 className="text-[#333] text-[2.5rem] sm:text-[2.2rem] md:text-[3rem] md:leading-[3rem] lg:text-[4rem] leading-[3rem] sm:leading-[3rem] lg:leading-[4.5rem] md:leading-[3rem] font-bold mt-3 sm:mt-5 lg:ml-1 animate-slideFromLeft max-w-[100%]">
              Hello! I Am 
              <span className="text-[#fca315] font-bold inline-block md:text-[3rem]"> Shumaila Waheed</span>
            </h2>
            <p className="mt-4 text-[1rem] sm:text-[1rem] md:text-[1.3rem] ml-[0px] lg:text-[1.3rem] md:leading-[2rem] sm:leading-[1.8rem] lg:leading-[2.2rem] text-[#333] lg:ml-1 animate-slideFromLeft max-w-[90%] mx-auto">
              I&apos;m a Web Developer with 2 years of experience, specializing in creating fully responsive websites, including backend development.
            </p>
            <button className="mt-6 sm:mt-8 sm:mt-8 lg:mt-[8%] bg-[#2e2a54] text-white w-[60%] sm:w-[70%] md:w-[40%] lg:w-[170px] lg:h-[60px] sm:h-[50px] lg:h-[70px] py-2 lg:py-4 px-4 lg:px-8 text-[1rem] sm:text-[1.2rem] lg:text-[1.4rem] font-semibold rounded-[20px] lg:rounded-[25px] border-none cursor-pointer transition-all duration-1000 hover:bg-[#fca61f] hover:translate-y-[-5px] lg:hover:translate-y-[-20px]">
              Hire Me
            </button>
          </div>
          <div className="w-full max-w-[70%] sm:max-w-[30%] md:max-w-[40%] lg:max-w-[35%] mt-6 lg:mt-0 lg:mr-[10%] flex justify-center lg:justify-end">
            <Image
              src={banner}
              alt="Shumaila's Portfolio Banner"
              className="animate-floatimg object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;