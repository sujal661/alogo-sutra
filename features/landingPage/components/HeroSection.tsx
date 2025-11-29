"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <>
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-0 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-float-slow"></div>
        </div>

        <div className="max-full mx-auto relative z-10">
          <div className="w-full text-center mb-12">
            {/* Main Heading with Staggered Animation */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-normal text-gray-900 mb-6 animate-slide-up opacity-0">
              Algorithmic Trading
            </h1>
            
            {/* Subheading with Delayed Animation */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl text-gray-600 mb-8 mt-10 animate-slide-up-delayed opacity-0">
              Made Accessible for{' '}
              <span className="text-blue-600 italic font-semibold animate-pulse-glow">
                Everyone
              </span>
            </h2>
            
            {/* Description with Fade In */}
            <p className="text-base sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 mt-5 leading-relaxed animate-fade-in-up opacity-0">
              Get clear guidance on algorithmic trading, access ready-made and fully customizable strategies,
              and automate your trades with reliable systems built for active, data-driven traders.
            </p>
            
            {/* Buttons with Scale Animation */}
            <div className="flex gap-20 mt-20 flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in opacity-0">
              <Button className='rounded-full p-8 w-full sm:w-auto px-8 text-xl sm:text-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-button-float'>
                Explore Training Programs
              </Button>
              <Button 
                variant={"outline"} 
                className='outline text-[] w-full sm:w-auto px-8 rounded-full p-8 text-xl sm:text-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-blue-50 animate-button-float-delayed'
              >
                Discover Our Algorithms
              </Button>
            </div>
          </div>

          {/* Hero Image with Zoom and Fade */}
          <div className="relative mt-16 animate-zoom-fade opacity-0">
            <div className="overflow-hidden   transform transition-all duration-700 ">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0  hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none "></div>
              
              <div className="flex flex-col md:flex-row items-center justify-between">
                <Image
                  src={'/img/hero_image.png'} 
                  alt={'Hero'} 
                  height={2000} 
                  width={3500}
                  className="object-cover w-full h-[95vh] " 
                />
              </div>
            </div>
            
            {/* Floating Particles */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-ping-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-ping-slower"></div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up-delayed {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes zoom-fade {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 1;
            text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% {
            opacity: 0.9;
            text-shadow: 0 0 30px rgba(59, 130, 246, 0.8);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(15px) translateX(-15px);
          }
          66% {
            transform: translateY(-10px) translateX(15px);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
          }
          50% {
            transform: translateY(-30px) translateX(20px) scale(1.1);
          }
        }

        @keyframes button-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.5);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 0.2;
          }
        }

        @keyframes ping-slower {
          0% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 0.2;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.2s forwards;
        }

        .animate-slide-up-delayed {
          animation: slide-up-delayed 0.8s ease-out 0.5s forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.8s forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.8s ease-out 1.1s forwards;
        }

        .animate-zoom-fade {
          animation: zoom-fade 1s ease-out 1.4s forwards;
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }

        .animate-button-float {
          animation: button-float 3s ease-in-out infinite;
        }

        .animate-button-float-delayed {
          animation: button-float 3s ease-in-out 0.5s infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-ping-slower {
          animation: ping-slower 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </>
  )
}

export default HeroSection