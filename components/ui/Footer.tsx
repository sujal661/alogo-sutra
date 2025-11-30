"use client"
import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import Image from 'next/image';
import { Roboto,DM_Sans } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dmSans",
});

const Footer = () => {
  const menuLinks = [
    { name: 'Training Programs', href: '#training' },
    { name: 'Dr. Algo', href: '#dr-algo' },
    { name: 'Algo Subscription', href: '#subscription' }
  ];

  

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms & Conditions', href: '#terms' }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className=" text-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Footer Content */}
        <div className="sm:grid sm:grid-cols-1  items-center flex justify-center flex-col md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo Section */}
          <div className="animate-fade-in w-full  flex-col items-center ">
            <div className=' flex justify-center'>
            <Image className='  h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] md:h-[200px] md:w-[200px]' src={'/img/logo.png'} alt={''} height={180} width={180} />

            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6 justify-center">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-100 hover:bg-teal-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg group animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <social.icon size={20} className="text-gray-700 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
              
              {/* X (Twitter) Icon */}
              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-10 h-10 bg-gray-100 hover:bg-teal-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg group animate-slide-in"
                style={{ animationDelay: '0.3s' }}
              >
                <svg 
                  viewBox="0 0 24 24" 
                  width="20" 
                  height="20" 
                  className="text-gray-700 group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Menu Column */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className={` text-[18px] md:text-[20px] font-medium text-[#000000] mb-4`}>Menu</h4>
            <ul className="space-y-3">
              {menuLinks.map((link, index) => (
                <li key={link.name} className={`animate-slide-in ${roboto.className} text-[20px] font-medium `} style={{ animationDelay: `${0.15 + index * 0.05}s` }}>
                  <a
                    href={link.href}
                    className={`text-gray-600  text-[16px] md:text-[18px] hover:text-teal-500 ${roboto.className} transition-colors duration-200 hover:translate-x-1 inline-block`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Link Column */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className={`text-[18px] md:text-[20px] font-medium text-[#000000] mb-4`}>Quick Link</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name} className={`animate-slide-in ${roboto.className} text-[20px] font-medium `} style={{ animationDelay: `${0.25 + index * 0.05}s` }}>
                  <a
                    href={link.href}
                    className={`text-gray-600 text-[16px] md:text-[18px] hover:text-teal-500 ${roboto.className} transition-colors duration-200 hover:translate-x-1 inline-block`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Column (Duplicate) */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className={`text-[18px] md:text-[20px] font-medium text-[#000000] mb-4`}>Menu</h4>
            <ul className="space-y-3">
              {menuLinks.map((link, index) => (
                <li key={link.name} className={`animate-slide-in ${roboto.className} text-[20px] font-medium `} style={{ animationDelay: `${0.35 + index * 0.05}s` }}>
                  <a
                    href={link.href}
                    className={` ${roboto.className} text-[16px] md:text-[18px] text-gray-600 hover:text-teal-500 transition-colors duration-200 hover:translate-x-1 inline-block`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className=" border-gray-200 pt-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className={`text-center font-medium text-gray-600 text-[16px] md:text-[18px] ${dmSans.className} `}>
            Copyright © 2025 Algosutraa | All rights reserved.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out backwards;
        }

        .animate-slide-in {
          animation: slide-in 0.4s ease-out backwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;