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
import { Poppins,Caveat,Inter } from "next/font/google";
import ScrollReveal from '@/components/animations/ScrollReveal';
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

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
});

const LandingPageScreen = () => {
 

  return (
    <div className=" w-full min-h-screen bg-[#F0F0F0]">
     
     

      {/* Hero Section */}
    <HeroSection/>

      {/* Why Algo Trading Section */}
      <ScrollAnimate>
      <section className=" px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-4xl mx-auto text-center">
          <p className={`text-3xl sm:text-4xl md:text-[32px] ${poppins.className} font-medium text-[#606060] mb-6 animate-slide-up`}>
            Why Algo Trading?
          </p>
          <p className={`text-base sm:text-[18px] font-[400] text-[#161616] ${inter.className} leading-relaxed animate-fade-in`}>
            Manual trading, no matter how skilled you are, is naturally limited by emotion, timing pressure,
            and the challenge of staying consistent. Algorithmic trading removes these constraints by turning
            your trading logic into a precise and repeatable system. It gives you the ability to test strategies
            across historical data, execute orders with speed and accuracy, and monitor markets without fatigue.
            With automation handling execution, you gain the freedom to focus on strategy, improvement, and
            long-term performance while your algorithms operate with discipline and reliability.
          </p>
        </div>
      </section>
      </ScrollAnimate>

      {/* How It Works Section */}
      <ScrollAnimate>
      <section className="w-full  py-20 px-4 sm:px-6 lg:px-8">
        <div className=" mx-auto">
          <p className={`text-[38px] sm:text-4xl md:text-[56px] ${poppins.className}  font-normal text-[#606060] mb-9 animate-slide-up`}>
            How Does Algorithmic<br />Trading Function
          </p>

          <div className=" flex sm:flex-row flex-col gap-4 lg:gap-12">
            {/* Step 1 */}
            <div className=" w-full sm:w-[75%] text-3xl bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up">
              <div className="flex items-start mb-4">
                <span className={`text-[32px] font-semibold ${poppins.className} text-[#606060] mr-4`}>#1</span>
              </div>
              <p className={`text-[27px] sm:text-[32px] font-normal text-[#606060] mb-4`}>
                Your Strategy is Broken Down into a{' '}
                <span className={`text-[25px] sm:text-[32px] font-normal text-[#14A5FF]`}>Machine-Readable</span> Algorithm
              </p>
              <p className={`text-[#161616] ${inter.className} mb-6 font-normal text-[17px] sm:text-[18px]`}>
                Your trading approach is first broken down into clear instructions that an algorithm can execute.
              </p>
              <p className={`text-[#161616] ${inter.className} mb-6 font-normal text-[18px]`}>This means defining:</p>
              <ul className="space-y-2">
                {[
                  'Precise entry and exit conditions',
                  'Indicator or price-action triggers',
                  'Position sizing rules',
                  'Stop-loss, take-profit, and risk constraints'
                ].map((item, index) => (
                  <div key={index} className="flex items-start mb-0 ">
                    {/* <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span> */}
                    <div className=' h-[20px] w-[20px] rounded-full bg-[#14A5FF] p-0.5 mr-3' ><Check color='white ' size={15} /></div>
                    <span className={`text-[#161616] ${inter.className} mb-3 font-normal  text-[18px]`}>{item}</span>
                  </div>
                ))}
              </ul>
              <p className={`text-[#161616] ${inter.className}  font-normal w-full  text-[16px]  sm:text-[18px]`}>
                Nothing in the system is discretionary or ambiguous — every rule is defined exactly as you intend.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#454545] w-full sm:w-[40%]  rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up flex items-center justify-center">
              <div className="text-center">
                <p className={`text-[16px] font-medium ${poppins.className} text-white text-sm mb-4`}>Next Step</p>
                <span className={`text-8xl sm:text-[80px] ${poppins.className} font-medium text-white`}>#2</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollAnimate>

       {/* algosutra text */}
      <ScrollAnimate duration={2} >
         <section className="w-full h-[90vh] flex items-center py-20 px-4 sm:px-6 lg:px-8">

        <p className={`text-[56px] text-[#606060] ${poppins.className} `}>AlgoSutraa Helps <span className={` text-[78px] font-[700] text-[#1A73E8] ${caveat.className} `}>Everyone</span> </p>

      </section>
      </ScrollAnimate>
       
      
      


        
     

        {/* <LearningResourceCards/> */}
        
           <LearningResourceCards/> 
       
        
        
        
          
     

       {/* Review Section */}
   
       <ScrollAnimate >
           <ReviewCardsPage/>
       </ScrollAnimate>
      
     
       

   

      {/* FAQ Section */}
      <ScrollAnimate>
         <FaqPage/>
      </ScrollAnimate>
         
     
      
      


      {/* ContactUs Card */}
        <ScrollAnimate>
            <ContactUsCard/> 
        </ScrollAnimate>
          
       
     
    


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
