"use client"
import React, { useEffect, useState } from 'react';
import { Linkedin, Facebook } from 'lucide-react';

export default function MeetTheTeam() {
  const [isVisible, setIsVisible] = useState({
    title: false,
    member1: false,
    member2: false,
    member3: false,
    member4: false
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

  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO',
      bgColor: 'from-blue-500 to-blue-600',
      id: 'member1'
    },
    {
      name: 'John Doe',
      role: 'CEO',
      bgColor: 'from-yellow-400 to-yellow-500',
      id: 'member2'
    },
    {
      name: 'John Doe',
      role: 'CEO',
      bgColor: 'from-green-500 to-green-600',
      id: 'member3'
    },
    {
      name: 'John Doe',
      role: 'CEO',
      bgColor: 'from-cyan-400 to-cyan-500',
      id: 'member4'
    }
  ];

  return (
    <div className=" px-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 px-4">
      <div className="  mx-auto">
        {/* Title */}
        <div className="mb-16 animate-on-scroll" id="title">
          <h1 className={`text-4xl md:text-7xl font-normal text-[#606060] transition-all duration-1000 ${isVisible.title ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Meet The Team
          </h1>
        </div>

        {/* Team Grid */}
         <div className=' flex w-full  '>
        <div className="w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           

            
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className="animate-on-scroll" 
              id={member.id}
            >
              <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden group ${isVisible[member.id as keyof typeof isVisible] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Image Container with Colored Background */}
                <div className={`relative bg-gradient-to-br ${member.bgColor} overflow-hidden`}>
                  <div className="aspect-[3/4] relative">
                    <img 
                      src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&q=80`}
                      alt={member.name}
                      className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                    />
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-6 space-y-3">
                  <div>
                    <p className="text-2xl font-bold text-[#606060] group-hover:text-blue-600 transition-colors duration-300">
                      {member.name}
                    </p>
                    <p className="text-xl text-gray-600 font-medium">
                      {member.role}
                    </p>
                  </div>

                  {/* Social Icons */}
                  <div className="flex items-center gap-3 pt-2">
                    <a 
                      href="#" 
                      className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-125 transform"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" fill="currentColor" />
                    </a>
                    <a 
                      href="#" 
                      className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-125 transform"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5" fill="currentColor" />
                    </a>
                    <a 
                      href="#" 
                      className="text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-125 transform"
                      aria-label="X (Twitter)"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}