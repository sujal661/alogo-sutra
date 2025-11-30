"use client";

import React, { useEffect, useRef, useState } from 'react';
import WhatAlgosutraaDoes from './components/WhatDoesPage';
import MeetTheTeam from './components/MeetTheTeam';
import VisionPage from './components/VisionPage';
import { Caveat, Inter, Poppins } from 'next/font/google';
import ImageGrid from './components/ImageGrid';
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

export default function AboutUsPage() {
  const [isVisible, setIsVisible] = useState({
  hero: true,
  mission: false,
  img1: false,
  img2: false,
  img3:false,
  img4:false,
  img5:false,
  values:false,
  divider:true
  // ... etc
});
  const sectionRef = useRef(null);

 
  
 

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
    <div className=" relative -z-10 pt-16 min-h-screen mb-12 bg-[#F0F0F0]">
      {/* Hero Section */}
      
        
      <div className="  mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="text-center mb-5 bg-dots-wave animate-on-scroll" id="hero">
          <ScrollAnimate>
          <h1 className={`text-5xl md:text-[64px] font-normal ${poppins.className}  text-gray-900 mb-6  transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            About Algosutraa
          </h1>
          </ScrollAnimate>

          <ScrollAnimate>
          <p className={`text-lg mt-9 md:text-[18px] ${inter.className}  text-[#161616] max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Algosutraa is an educational platform created by trading professionals who are deeply 
            committed to making it simpler, clearer, and more achievable for traders at every stage. Whether you're 
            just beginning to understand systematic trading or you're ready to automate your own strategy, we 
            bring the tools, knowledge, and support to help you move forward with confidence.
          </p>
          </ScrollAnimate>
        </div>

       
        

        {/* Mission Statement */}
          <ScrollAnimate>
        <div className="text-center bg-dots-wave mb-16 mt-0 animate-on-scroll" id="mission">
          <p className={`text-lg md:text-[18px] ${inter.className}  text-[#161616] max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible.mission ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-0'}`}>
            What began as a small initiative to explain algorithmic concepts to fellow traders has grown into a full 
            ecosystem—training, ready-made strategies, and custom-built algorithmic solutions—designed to 
            guide traders from their first steps to full automation.
          </p>
        </div>
        </ScrollAnimate>

         
      
       <ImageGrid/> 
  
      

       

        
        
      </div>

      {/* what does part */}
      <div className=' '>
        
            <WhatAlgosutraaDoes/>
        
       
      </div>

       {/* Values Section */}
       <ScrollAnimate type="fade-down">
       <p className={` text-[39px] md:text-[56px] font-normal ${poppins.className} text-[#606060] px-8 mt-20 `}>Our Values</p>
        <div className="mt-5 px-8 grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll" id="values">
          
          {[
            { title: 'Integrity', desc: 'We believe in openness, honesty, and explaining everything we teach or build.' },
            { title: 'Excellence', desc: 'Every strategy, training program, and service reflects a high level of craftsmanship and attention to detail.' },
            { title: 'Trader-Centric Support', desc: 'Your growth as a trader is at the center of what we do. We’re here to help you learn, improve, and trade with more precision.' }
          ].map((value, idx) => (
          
            <div 
              key={idx}
              className={`p-6 bg-white  rounded-xl shadow-lg ${poppins.className} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${isVisible.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <p className="text-[25px] md:text-[32px]  text-[#606060] mb-3">{value.title}</p>
              <p className={`text-[#161616] text-[21px] md:text-[16px] ${inter.className} `}>{value.desc}</p>
            </div>
            
          ))}
        </div>
        </ScrollAnimate>

        {/* Meet The Team */}
       
           <MeetTheTeam/>
     
       

        {/* Vision Page */}
        <ScrollAnimate type="fade-down">
          <VisionPage/>
        </ScrollAnimate>
        
        
       


    </div>
  );
}
