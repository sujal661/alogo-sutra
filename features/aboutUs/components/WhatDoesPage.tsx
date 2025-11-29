"use client"
import React, { useEffect, useState } from 'react';
import { Lightbulb, Wrench, HardHat } from 'lucide-react';

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
    <div className=" bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 px-4">
      <div className=" mx-auto">
        {/* Title */}
        <div className="mb-16 animate-on-scroll" id="title">
          <h1 className={`text-4xl md:text-5xl font-bold text-gray-800 transition-all duration-1000 ${isVisible.title ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            What Algosutraa Does
          </h1>
        </div>

        {/* Services Grid */}
        <div className="space-y-8 ">
            <div className=' grid grid-cols-2   gap-14'>
          {/* Service 1 - We Make Algo Trading Easy */}
          <div className="animate-on-scroll" id="service1">
            <div className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden ${isVisible.service1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
                      1
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    We Make Algo Trading Easy to Understand
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Through our Learning Hub and structured training programs, we break down' concepts like strategy logic, backtesting, signals, and execution into simple, actionable steps.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-yellow-100 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                    <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-full p-12 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <Lightbulb className="w-32 h-32 text-gray-700" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2 - We Build Reliable Algorithmic Strategies */}
          <div className="animate-on-scroll" id="service2">
            <div className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden ${isVisible.service2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
                <div className="order-2 md:order-1 flex justify-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-200 to-red-100 rounded-lg blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                    <div className="relative">
                      <div className="w-40 h-48 bg-gradient-to-b from-red-500 to-red-600 rounded-t-lg transform group-hover:scale-110 transition-all duration-500" />
                      <div className="w-40 h-4 bg-gradient-to-b from-red-600 to-red-700 rounded-b-lg" />
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
                      2
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    We Build Reliable Algorithmic Strategies
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Our ready-made algo themes come with clearly defined rules, and real-market testing — so traders know exactly how a system behaves before using it.
                  </p>
                </div>
              </div>
            </div>
          </div>

          </div>

          {/* Service 3 & Summary Box */}
          <div className=" flex flex-row gap-8">
            {/* Service 3 - We Create Custom Algorithms */}
            <div className=" w-[80%] animate-on-scroll" id="service3">
              <div className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 h-full ${isVisible.service3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                <div className="p-8 md:p-10 space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
                      3
                    </div>
                  </div>
                  <div className=' flex gap-16'>
                  <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    We Create Custom Algorithms for Your Ideas
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    When you've got your algorithm from the ground up — and also help you test it, optimize its parameters, refine its behavior, and update it as markets evolve.
                  </p>

                  </div>

                  <div className="flex justify-center pt-6">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-yellow-300 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                      <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-t-3xl w-40 h-32 transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-2xl">
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-yellow-600 rounded-full" />
                      </div>
                    </div>
                  </div>

                  </div>

                </div>
              </div>
            </div>

            {/* Summary Box */}
            <div className=" w-[20%] animate-on-scroll" id="summary">
              <div className={`bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 h-full flex items-center justify-center p-8 md:p-12 transform hover:scale-105 ${isVisible.summary ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                <div className="text-center space-y-2">
                  <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    In Short,
                    <br />
                    We Support
                    <br />
                    Traders at
                    <br />
                    Every Step
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}