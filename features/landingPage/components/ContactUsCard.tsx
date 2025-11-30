import { Button } from "@/components/ui/button";
import React from "react";
import { Poppins,Caveat,Inter } from "next/font/google";

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

const ContactUsCard = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        <div className="relative bg-[#1A73E8] rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-800/30 rounded-full blur-3xl animate-float-delayed"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-2xl"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 sm:px-7 py-7 sm:py-10 text-center">
            {/* Heading */}
            <p className={`text-[38px] sm:text-4xl md:text-5xl lg:text-[56px] font-normal ${poppins.className} text-white mb-6 animate-slide-up`}>
              Ready to Talk About Your Trading Goals?
            </p>

            {/* Subheading */}
            <p className={`text-[16px] sm:text-[17px] md:text-[18px] text-blue-50 max-w-6xl ${inter.className} mx-auto mb-10 leading-relaxed animate-slide-up-delayed`}>
              Whether you want to learn algo trading, explore strategies, or
              automate your own idea, our team is happy to help you find the
              right path.
            </p>

            {/* CTA Buttons */}
            <div className="w-full gap-10  flex flex-col sm:flex-row  justify-center items-center animate-slide-up-more-delayed">
              {/* <button className="w-[80%] sm:w-auto bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl">
                Contact Us
              </button> */}
              {/* <Button className=' text-[#606060] rounded-full w-[20%] text-2xl p-7 ' variant={"secondary"}>
               Contact Us 
              </Button> */}
              <Button
                className=" h-[50px] rounded-full  font-medium px-[24px] py-[13px]   w-full                /* mobile: full width */
    sm:w-[40%]            /* small screens */
    md:w-[40%]            /* medium screens */
    lg:w-[360px]            /* large screens */ 
     text-[15px] sm:text-[15px] md:text-[16px]
    
    "
    
                variant="secondary"
              >
                Contact Us
              </Button>

              <Button
                className="
    rounded-full
    h-[50px]
    w-full                /* mobile: full width */
    sm:w-[40%]            /* small screens */
    md:w-[40%]            /* medium screens */
    lg:w-[360px]            /* large screens */
   
     text-[15px] sm:text-[15px] md:text-[16px]
    border-[2px]
  "
                variant="outline"
              >
                Explore Our Services
              </Button>

              {/* <Button className=' rounded-full w-[20%] text-2xl p-7 ' variant={"outline"}>
                Explore Our Services
              </Button> */}
              {/* <button className="w-80 sm:w-auto bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                Explore Our Services
              </button> */}
            </div>

            {/* Decorative dots pattern */}
            {/* <div className="absolute bottom-4 right-4 opacity-20">
              <div className="grid grid-cols-4 gap-2">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-white rounded-full animate-pulse"
                    style={{
                      animationDelay: `${i * 0.1}s`,
                    }}
                  ></div>
                ))}
              </div>
            </div> */}
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
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, 20px) scale(1.1);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
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
