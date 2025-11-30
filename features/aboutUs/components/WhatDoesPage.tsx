"use client"
import React, { useEffect, useState } from 'react';
import { Lightbulb, Wrench, HardHat } from 'lucide-react';
import { Caveat, Inter, Poppins } from 'next/font/google';
import Image from 'next/image';
import ScrollAnimate from '@/components/animations/ScrollAnimate';

 const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
  });
  
  const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-inter",
  });

export default function WhatAlgosutraaDoes() {
  const [isVisible, setIsVisible] = useState({
    title: false,
    service1: false,
    service2: false,
    service3: false,
    summary: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="  pt-10 pb-3 px-8">
      <div className=" mx-auto">
        {/* Title */}
        <div className="mb-6 animate-on-scroll" id="title">
          <h1 className={`text-[39px] md:text-[56px] ${poppins.className}  text-[#606060] transition-all duration-1000 ${isVisible.title ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            What Algosutraa Does
          </h1>
        </div>

        {/* Services Grid */}
        <div className="space-y-8 ">
          <ScrollAnimate type="fade-right">
            <div className=' grid grid-rows-1 md:grid-cols-2 gap-4 '>
          {/* Service 1 - We Make Algo Trading Easy */}
          <div className="animate-on-scroll" id="service1">
            <div className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden ${isVisible.service1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <div className=" flex flex-row gap-8 p-8 md:p-12 items-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#D9D9D9] flex items-center justify-center text-white font-bold">
                      1
                    </div>
                  </div>
                  <h2 className={`text-2xl md:text-[32px]  ${poppins.className} text-[#606060]`}>
                    We Make Algo Trading Easy to Understand
                  </h2>
                  <p className={`text-[#161616] text-sm md:text-[16px] ${inter.className} `}>
                    Through our Learning Hub and structured training programs, we break down' concepts like strategy logic, backtesting, signals, and execution into simple, actionable steps.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="relative group">
                   <Image src={'/img/bulb.png'} alt={''} height={300} width={200} className='transform scale-499  md:scale-399 translate-y-16 '/>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2 - We Build Reliable Algorithmic Strategies */}
           <div className="animate-on-scroll" id="service2">
            <div className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden ${isVisible.service1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <div className=" flex flex-row gap-8 p-8 md:p-12 items-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#D9D9D9] flex items-center justify-center text-white font-bold">
                      2
                    </div>
                  </div>
                  <h2 className={`text-2xl md:text-[32px]  ${poppins.className} text-[#606060]`}>
                   We Build Reliable Algorithmic Strategies
                  </h2>
                  <p className={`text-[#161616] text-sm md:text-[16px] ${inter.className} `}>
Our ready-made algorithms come with clear logic, defined rules, and real-market testing — so traders know exactly how a system behaves before using it.                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="relative group">
                   <Image src={'/img/candle.png'} alt={''} height={300} width={200} className='transform scale-599 md:scale-399 translate-y-16 '/>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          </div>
          </ScrollAnimate>
            

          {/* Service 3 & Summary Box */}
          <ScrollAnimate delay={0.3} type="fade-left">
          <div className=" flex-col  flex md:flex-row gap-8">
            {/* Service 3 - We Create Custom Algorithms */}
            <div className=" w-full md:w-[80%] " id="service3">
            <div className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden ${isVisible.service1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <div className=" grid grid-cols-2 md:flex md:flex-row gap-8 p-8 md:p-12 items-center">
                <div className="space-y-4 w-full md:w-[60%] mr-14">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#D9D9D9] flex items-center justify-center text-white font-bold">
                      1
                    </div>
                  </div>
                  <h2 className={`text-2xl md:text-[32px]  ${poppins.className} text-[#606060]`}>
                   We Create Custom Algorithms for Your Ideas
                  </h2>
                  <p className={`text-[#161616] text-sm md:text-[16px] ${inter.className} `}>
With Dr. Algo, we build your algorithm from the ground up — and also help you test it, optimize its parameters, refine its behavior, and update it as markets evolve.                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="relative group">
                   <Image src={'/img/helmet.png'} alt={''} height={300} width={200} className='transform scale-179 md:scale-190 md:-translate-y-0 '/>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

            {/* Summary Box */}
            <div className=" w-full md:w-[20%] animate-on-scroll" id="summary">
              <div className={`bg-[#14A5FF] rounded-3xl shadow-xl ${poppins.className} md:font-medium hover:shadow-2xl transition-all duration-700 h-full flex items-center md:text-[32px] justify-center p-8 md:p-6 transform hover:scale-105 ${isVisible.summary ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                <div className="text-center space-y-2">
                  <p className="text-3xl md:text-[32px] font-medium text-white leading-tight">
                    In Short,
                    <br />
                    We Support
                    <br />
                    Traders at
                    <br />
                    Every Step
                  </p>
                </div>
              </div>
            </div>
          </div>
          </ScrollAnimate>
        </div>
      </div>
    </div>
  );
}