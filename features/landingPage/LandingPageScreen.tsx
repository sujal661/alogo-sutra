"use client"
import React, { useState, useEffect } from 'react';
import { Check, Menu, X } from 'lucide-react';
import LearningResourceCards from './components/LearningResourceCards';
import ReviewCardsPage from './components/ReviewCardsPage';
import FaqPage from './components/FaqPage';
import ContactUsCard from './components/ContactUsCard';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import HeroSection from './components/HeroSection';

const LandingPageScreen = () => {
 

  return (
    <div className=" w-full min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
      {/* Navigation */}
     

      {/* Hero Section */}
    <HeroSection/>

      {/* Why Algo Trading Section */}
      <section className=" px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#606060] mb-8 animate-slide-up">
            Why Algo Trading?
          </h2>
          <p className="text-base sm:text-lg text-[#161616]  leading-relaxed animate-fade-in">
            Manual trading, no matter how skilled you are, is naturally limited by emotion, timing pressure,
            and the challenge of staying consistent. Algorithmic trading removes these constraints by turning
            your trading logic into a precise and repeatable system. It gives you the ability to test strategies
            across historical data, execute orders with speed and accuracy, and monitor markets without fatigue.
            With automation handling execution, you gain the freedom to focus on strategy, improvement, and
            long-term performance while your algorithms operate with discipline and reliability.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full  py-20 px-4 sm:px-6 lg:px-8">
        <div className=" mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-normal text-[#606060] mb-16 animate-slide-up">
            How Does Algorithmic<br />Trading Function
          </h2>

          <div className=" flex flex-row gap-4 lg:gap-12">
            {/* Step 1 */}
            <div className="w-[70%] text-3xl bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up">
              <div className="flex items-start mb-4">
                <span className="text-5xl font-bold text-gray-300 mr-4">#1</span>
              </div>
              <h3 className="text-xl sm:text-5xl font-medium text-gray-800 mb-4">
                Your Strategy is Broken Down into a{' '}
                <span className="text-blue-600">Machine-Readable</span> Algorithm
              </h3>
              <p className="text-gray-600 mb-6">
                Your trading approach is first broken down into clear instructions that an algorithm can execute.
              </p>
              <p className="text-gray-700 font-medium mb-3">This means defining:</p>
              <ul className="space-y-2">
                {[
                  'Precise entry and exit conditions',
                  'Indicator or price-action triggers',
                  'Position sizing rules',
                  'Stop-loss, take-profit, and risk constraints'
                ].map((item, index) => (
                  <li key={index} className="flex items-center ">
                    {/* <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span> */}
                    <div className=' rounded-full bg-blue-500 p-0.5 mr-4' ><Check color='white' /></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 mt-4 text-2xl">
                Nothing in the system is discretionary or ambiguous — every rule is defined exactly as you intend.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-br w-[30%] from-gray-700 to-gray-900 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-4">Next Step</p>
                <span className="text-8xl sm:text-9xl font-bold text-white">#2</span>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* algosutra text */}
      <section className="w-full h-[50vh] flex items-center py-20 px-4 sm:px-6 lg:px-8">

        <p className=' text-7xl text-[#606060]'>AlgoSutraa Helps <span className='text-[#14A5FF]'>Everyone</span> </p>

      </section>


        
     

        {/* <LearningResourceCards/> */}
          <LearningResourceCards/>
     

       {/* Review Section */}
   

        <ReviewCardsPage/>

   

      {/* FAQ Section */}
      
        <FaqPage/>
      


      {/* ContactUs Card */}
    
        <ContactUsCard/>
    


      {/* Footer Section
      <section>
        <Footer/>
      </section> */}



      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-delayed {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes finger-point {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
        }

        @keyframes finger-point-reverse {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-5px);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delayed {
          animation: fade-in-delayed 1.2s ease-out 0.3s backwards;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-finger-point {
          animation: finger-point 2s ease-in-out infinite;
        }

        .animate-finger-point-reverse {
          animation: finger-point-reverse 2s ease-in-out infinite;
        }
      `}</style>


    </div>
  );
};

export default LandingPageScreen;
