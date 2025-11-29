"use client"

import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';

export default function VisionPage() {
  const [isVisible, setIsVisible] = useState({
    vision: false,
    cta: false
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
    <div className=" px-20 min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 px-4">
      <div className=" mx-auto space-y-16">
        
        {/* Vision Section */}
        <div className="animate-on-scroll" id="vision">
          <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible.vision ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            
            {/* Image Side */}
            <div className="order-2 md:order-1">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&q=80"
                    alt="Laptop outdoors"
                    className=" w-full h-130 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                Our <span className="text-blue-600 italic">Vision</span>
              </h2>
              <p className="text-gray-600 text-2xl font-medium leading-relaxed">
                To make algorithmic trading accessible, understandable, and achievable for traders everywhere—bridging the gap between traditional discretionary trading and modern automated systems.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="animate-on-scroll" id="cta">
          <div className={`relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 ${isVisible.cta ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700" />
            
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-86 bg-white rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 right-0 w-96 h-86 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Content */}
            <div className="relative px-8 py-16 md:py-20 text-center space-y-8">
              <p className="text-3xl md:text-7xl font-bold text-white w-5xl mx-auto">
                At Algosutraa, We're Building More Than Algorithms
              </p>
              
              <p className="text-blue-50 text-lg md:text-2xl max-w-5xl mx-auto leading-relaxed">
                We're building a community of traders who embrace clarity, discipline, and modern trading practices—and who are ready to take the next step toward smarter, more structured trading.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                {/* <button className="bg-white text-blue-600 px-25 py-5 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:bg-gray-50">
                  Join Us
                </button> */}
                <Button variant={"secondary"} className=' mt-10 w-[20%] p-8 text-2xl rounded-full'>
                  Join Us
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}