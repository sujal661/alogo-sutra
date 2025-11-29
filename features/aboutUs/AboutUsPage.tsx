"use client";

import React, { useEffect, useRef, useState } from 'react';
import WhatAlgosutraaDoes from './components/WhatDoesPage';
import MeetTheTeam from './components/MeetTheTeam';
import VisionPage from './components/VisionPage';

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
    <div className=" relative -z-10 pt-16 min-h-screen mb-12 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 animate-on-scroll" id="hero">
          <h1 className={`text-5xl md:text-9xl font-normal text-gray-900 mb-6 transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            About Algosutraa
          </h1>
          <p className={`text-lg mt-9 md:text-2xl font-medium text-gray-600 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Algosutraa is an educational platform created by trading professionals who are deeply 
            committed to making it simpler, clearer, and more achievable for traders at every stage. Whether you're 
            just beginning to understand systematic trading or you're ready to automate your own strategy, we 
            bring the tools, knowledge, and support to help you move forward with confidence.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-16 mt-5 animate-on-scroll" id="mission">
          <p className={`text-lg md:text-2xl font-medium text-gray-700 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible.mission ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            What began as a small initiative to explain algorithmic concepts to fellow traders has grown into a full 
            ecosystem—training, ready-made strategies, and custom-built algorithmic solutions—designed to 
            guide traders from their first steps to full automation.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Top Row - 2 images */}
          <div className="animate-on-scroll" id="img1">
            <div className={`overflow-hidden rounded-2xl shadow-2xl group transition-all duration-700 ${isVisible.img1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-200 relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>

          <div className="animate-on-scroll" id="img2">
            <div className={`relative overflow-hidden rounded-2xl shadow-2xl group transition-all duration-700 delay-200 ${isVisible.img2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
              <div className="aspect-video bg-gradient-to-br from-blue-900 to-blue-700 relative">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" 
                  alt="Trading screens" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center my-8 animate-on-scroll" id="divider">
          <div className={`flex items-center gap-2 transition-all duration-1000 ${isVisible.divider ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full" />
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
            <div className="w-24 h-1 bg-blue-500 rounded-full" />
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-blue-500 rounded-full" />
          </div>
        </div>

        {/* Bottom Row - 3 images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="animate-on-scroll" id="img3">
            <div className={`relative overflow-hidden rounded-2xl shadow-2xl group transition-all duration-700 ${isVisible.img3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="aspect-[4/3] bg-gradient-to-br from-cyan-100 to-cyan-200 relative">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=450&fit=crop" 
                  alt="Team meeting" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>

          <div className="animate-on-scroll" id="img4">
            <div className={`relative overflow-hidden rounded-2xl shadow-2xl group transition-all duration-700 delay-200 ${isVisible.img4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-50 to-amber-100 relative">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=450&fit=crop" 
                  alt="Professional thinking" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>

          <div className="animate-on-scroll" id="img5">
            <div className={`relative overflow-hidden rounded-2xl shadow-2xl group transition-all duration-700 delay-300 ${isVisible.img5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=450&fit=crop" 
                  alt="Office discussion" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>

       

        
        
      </div>

      {/* what does part */}
      <div className=' px-14'>
         <WhatAlgosutraaDoes/>
      </div>

       {/* Values Section */}
       <p className=' text-8xl font-normal text-[#606060] px-20 mt-25 '>Our Values</p>
        <div className="mt-20 px-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll" id="values">
          
          {[
            { title: 'Integrity', desc: 'We believe in openness, honesty, and explaining everything we teach or build.' },
            { title: 'Excellence', desc: 'Every strategy, training program, and service reflects a high level of craftsmanship and attention to detail.' },
            { title: 'Trader-Centric Support', desc: 'Your growth as a trader is at the center of what we do. We’re here to help you learn, improve, and trade with more precision.' }
          ].map((value, idx) => (
            <div 
              key={idx}
              className={`p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${isVisible.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <p className="text-2xl font-bold text-gray-900 mb-3">{value.title}</p>
              <p className="text-gray-600 text-2xl ">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* Meet The Team */}
        <MeetTheTeam/>

        {/* Vision Page */}
        <VisionPage/>
        
       


    </div>
  );
}
