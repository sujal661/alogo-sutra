"use client"
import React, { useEffect, useState } from 'react';
import { Mail, Bell, Clock } from 'lucide-react';

export default function ComingSoon({
    days=10,
    hours=11,
    minutes=45,
    seconds=30,
  }:{ days?:number,
    hours?:number,
    minutes?:number,
    seconds?:number,}) {
  const [isVisible, setIsVisible] = useState({
    title: false,
    subtitle: false,
    form: false,
    countdown: false
  });

  const [email, setEmail] = useState('');
  const [timeLeft, setTimeLeft] = useState({
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
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

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen pb-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 py-16 relative overflow-hidden">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">
        
        {/* Icon/Logo */}
        <div className="animate-on-scroll" id="title">
          <div className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-2xl mb-8 transition-all duration-1000 ${isVisible.title ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-180'}`}>
            <Clock className="w-12 h-12 text-white animate-pulse" />
          </div>
        </div>

        {/* Main Heading */}
        <div className="animate-on-scroll" id="title">
          <h1 className={`text-5xl md:text-7xl font-bold text-gray-900 mb-6 transition-all duration-1000 delay-200 ${isVisible.title ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Something Amazing is
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Coming Soon
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="animate-on-scroll" id="subtitle">
          <p className={`text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${isVisible.subtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            We're working hard to bring you an incredible experience. Stay tuned for updates!
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="animate-on-scroll" id="countdown">
          <div className={`grid grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-600 ${isVisible.countdown ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            {[
              { value: timeLeft.days, label: 'Days' },
              { value: timeLeft.hours, label: 'Hours' },
              { value: timeLeft.minutes, label: 'Minutes' },
              { value: timeLeft.seconds, label: 'Seconds' }
            ].map((item, index) => (
              <div 
                key={item.label}
                className="bg-white rounded-2xl shadow-xl p-2 md:p-6 transform hover:scale-110 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-[20px] md:text-5xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-[13px] md:text-base text-gray-500 font-medium mt-2">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Email Subscription Form */}
        {/* <div className="animate-on-scroll" id="form">
          <div className={`max-w-md mx-auto transition-all duration-1000 delay-800 ${isVisible.form ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-2 mb-6 justify-center">
              <Bell className="w-5 h-5 text-blue-600" />
              <p className="text-gray-700 font-medium">Get notified when we launch</p>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all duration-300 shadow-lg"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 whitespace-nowrap"
              >
                Notify Me
              </button>
            </form>
          </div>
        </div> */}

        {/* Social Links or Additional Info */}
        {/* <div className={`pt-8 transition-all duration-1000 delay-1000 ${isVisible.form ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-gray-500 text-sm">
            Follow us for updates and exclusive content
          </p>
        </div> */}

      </div>
    </div>
  );
}