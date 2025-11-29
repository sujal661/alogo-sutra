import { Button } from '@/components/ui/button';
import React from 'react';

const ContactUsCard = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        <div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-800/30 rounded-full blur-3xl animate-float-delayed"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-2xl"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 sm:px-12 py-12 sm:py-16 text-center">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-normal text-white mb-6 animate-slide-up">
              Ready to Talk About Your Trading Goals?
            </h2>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-2xl text-blue-50 max-w-6xl mx-auto mb-10 leading-relaxed animate-slide-up-delayed">
              Whether you want to learn algo trading, explore strategies, or automate your own idea, our team is happy to help you find the right path.
            </p>

            {/* CTA Buttons */}
            <div className="w-full gap-10  flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up-more-delayed">
              {/* <button className="w-[80%] sm:w-auto bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl">
                Contact Us
              </button> */}
              <Button className=' text-[#606060] rounded-full w-[20%] text-2xl p-7 ' variant={"secondary"}>
               Contact Us 
              </Button>
              <Button className=' rounded-full w-[20%] text-2xl p-7 ' variant={"outline"}>
                Explore Our Services
              </Button>
              {/* <button className="w-80 sm:w-auto bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                Explore Our Services
              </button> */}
            </div>

            {/* Decorative dots pattern */}
            <div className="absolute bottom-4 right-4 opacity-20">
              <div className="grid grid-cols-4 gap-2">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-white rounded-full animate-pulse"
                    style={{
                      animationDelay: `${i * 0.1}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

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

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, 20px) scale(1.1);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-20px, -20px) scale(1.05);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out 0.2s backwards;
        }

        .animate-slide-up-delayed {
          animation: slide-up 0.6s ease-out 0.4s backwards;
        }

        .animate-slide-up-more-delayed {
          animation: slide-up 0.6s ease-out 0.6s backwards;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ContactUsCard;