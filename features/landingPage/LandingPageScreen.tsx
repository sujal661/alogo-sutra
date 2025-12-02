"use client";
import React, { useState, useEffect, useRef } from "react";
import { Check, Menu, X } from "lucide-react";
import LearningResourceCards from "./components/LearningResourceCards";
import ReviewCardsPage from "./components/ReviewCardsPage";
import FaqPage from "./components/FaqPage";
import ContactUsCard from "./components/ContactUsCard";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroSection from "./components/HeroSection";
import { Poppins, Caveat, Inter } from "next/font/google";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ScrollAnimate from "@/components/animations/ScrollAnimate";
import DropArrow from "@/components/animations/DropArrow";
import ScrollSequence from "./components/ScrollSequence";

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

const slides = [
  {
    step: "#1",
    title: "Your Strategy is Broken Down into a Machine-Readable Algorithm",
    text: [
      "Your trading approach is first broken down into clear instructions that an algorithm can execute.",
      "This means defining:",

      "Nothing in the system is discretionary or ambiguous—every rule is defined exactly as you intend.",
    ],
    list: [
      "Precise entry and exit conditions",
      "Indicator or price-action triggers",
      "Position sizing rules",
      "Stop-loss, take-profit, and risk parameters",
    ],
    next: "#2",
  },
  {
    step: "#2",
    title: "The algorithm processes real-time market data continuously.",
    text: [
      "Once live and active, the system listens to the market and updates every parameter in milliseconds.",
      "It processes:",

      "This constant recalculation ensures the strategy reacts to the market the moment conditions align.",
    ],
    list: [
      " Tick-by-tick price data",
      "Volume and volatility metrics",
      "Real-time market correlations",
      " Order-book depth (if available)",
    ],
    next: "#3",
  },
  {
    step: "#3",
    title: "Signals are generated through condition evaluation.",
    text: [
      "The algorithm evaluates your entire logic stack on every update.",
      "A signal is produced only when all required conditions fire simultaneously, such as:",

      "This makes your strategy systematic, consistent, and free from emotional overrides.",
    ],
    list: [
      " Indicator crossovers",
      "Pattern or structure confirmations",
      "Volatility or momentum thresholds",
      "Logical AND/OR condition chains",
    ],
    next: "#4",
  },
  {
    step: "#4",
    title: "Orders are executed through precise, automated routing.",
    text: [
      "When a valid signal appears, the algorithm executes the trade instantly using your preferred order logic.",
      "Depending on the strategy, this may involve:",

      "",
    ],
    list: [
      "Market, limit, or stop-loss orders",
      "Slippage and spread checks",
      " Position sizing automation",
      "Partial exits and re-entries",
      "Bracket orders for automatic risk management",
    ],
    next: "#5",
  },
  {
    step: "#5",
    title: "Positions are managed and risk is enforced automatically.",
    text: [
      "Once in a trade, the algorithm handles the full lifecycle of the position based on your predefined rules.",
      "This includes:",

      "The system maintains discipline even during volatile conditions.",
    ],
    list: [
      "Dynamic stop-loss adjustments",
      " Profit targets and trailing mechanisms",
      " Re-entry or re-scale rules",
      " Exiting a position based on logic",
      " Portfolio-level limits and daily risk caps",
    ],
    // next: "#1",
  },
];

const LandingPageScreen = () => {
  const [index, setIndex] = useState(0);
  // const sliderRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Check if section is in viewport
      if (sectionTop <= 0 && sectionTop + sectionHeight >= windowHeight) {
        // Calculate progress through the section
        const scrollProgress =
          Math.abs(sectionTop) / (sectionHeight - windowHeight);

        // Calculate which slide should be shown
        const newIndex = Math.min(
          Math.floor(scrollProgress * slides.length),
          slides.length - 1
        );

        if (newIndex !== index) {
          setIndex(newIndex);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [index]);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setIndex((prev) => prev + 1);
  //   }, 3500);
  //   return () => clearInterval(timer);
  // }, []);

  // useEffect(() => {
  //   const slider = sliderRef.current;
  //   if (!slider) return;

  //   if (index === slides.length) {
  //     setTimeout(() => {
  //       slider.style.transition = "none";
  //       setIndex(0);
  //     }, 500);

  //     setTimeout(() => {
  //       slider.style.transition = "transform 0.5s ease";
  //     }, 550);
  //   }
  // }, [index]);

  return (
    <div className="  w-full min-h-screen bg-[#F0F0F0]">
      {/* Hero Section */}
      <HeroSection />

      {/* Why Algo Trading Section */}
      <ScrollAnimate>
        <section className=" px-3.5 md:px-9  ">
          <div className="max-w-4xl mx-auto text-center">
            <p
              className={`text-3xl sm:text-4xl mb-0 md:text-[32px] ${poppins.className} font-medium text-[#606060] mb-3 sm:mb-6 animate-slide-up`}
            >
              Why Algo Trading?
            </p>
            <p
              className={`text-base sm:text-[18px] font-normal text-[#161616] ${inter.className} leading-relaxed animate-fade-in`}
            >
              Manual trading, no matter how skilled you are, is naturally
              limited by emotion, timing pressure, and the challenge of staying
              consistent. Algorithmic trading removes these constraints by
              turning your trading logic into a precise and repeatable system.
              It gives you the ability to test strategies across historical
              data, execute orders with speed and accuracy, and monitor markets
              without fatigue. With automation handling execution, you gain the
              freedom to focus on strategy, improvement, and long-term
              performance while your algorithms operate with discipline and
              reliability.
            </p>
          </div>
        </section>
      </ScrollAnimate>

      {/* How It Works Section */}

      <div
        ref={sectionRef}
        style={{ height: `${slides.length * 100}vh` }}
        className="relative"
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <section className="w-full px-3.5 md:px-9">
            <div>
              <p className="text-[38px] sm:text-4xl md:text-[56px] font-normal text-[#606060] mb-9 animate-slide-up">
                How Does Algorithmic
                <br />
                Trading Function
              </p>

              <div
                // ref={sliderRef}
                className="flex w-full"
                style={{
                  transition: "transform 0.5s ease",
                  transform: `translateX(-${index * 100}vw)`,
                }}
              >
                {slides.map((d, i) => (
                  <div
                    key={i}
                    className="flex shrink-0 w-screen sm:flex-row flex-col sm:mr-0 sm:px-0"
                  >
                    <div
                      className={`flex  gap-4 lg:gap-12 ${
                        d.next ? "sm:flex-row w-full" : "sm:flex-col w-screen"
                      }     flex-col  `}
                    >
                      {/* Step Card */}
                      <div className="w-[80%] sm:w-[60%] text-3xl bg-white rounded-2xl px-6 py-6 sm:p-8 transition-all duration-300 transform animate-slide-up">
                        <div className="flex w-full items-start mb-4">
                          <span className="text-[32px] font-semibold text-[#606060] mr-4">
                            {d.step}
                          </span>
                        </div>
                        <p className="text-[27px] sm:text-[32px] font-normal text-[#606060] mb-4">
                          {d.title}
                        </p>
                        <p className="text-[#161616] mb-6 font-normal text-[17px] sm:text-[18px]">
                          {d.text[0]}
                        </p>
                        <p className="text-[#161616] mb-6 font-normal text-[18px]">
                          {d.text[1]}
                        </p>
                        <ul className="space-y-2">
                          {d.list.map((item, index) => (
                            <div key={index} className="flex items-start mb-0">
                              <div className="h-5 w-5 rounded-full bg-[#14A5FF] p-0.5 mr-3">
                                <Check color="white" size={15} />
                              </div>
                              <span className="text-[#161616] mb-3 font-normal text-[18px]">
                                {item}
                              </span>
                            </div>
                          ))}
                        </ul>
                        <p className="text-[#161616] font-normal w-full text-[16px] sm:text-[18px]">
                          {d.text[2]}
                        </p>
                      </div>

                      {/* Next Step Card */}
                      {d.next && (
                        <div className="bg-[#14A5FF] w-[80%] sm:w-[30%] rounded-2xl p-8 sm:p-8 duration-300 animate-slide-up flex items-center justify-center">
                          <div className="text-center">
                            <p className="text-[16px] font-medium text-white text-sm mb-4">
                              Next Step
                            </p>
                            <span className="text-8xl sm:text-[80px] font-medium text-white">
                              {d.next}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* algosutra text */}
      <ScrollSequence />

      {/* <LearningResourceCards/> */}

      <LearningResourceCards />

      {/* Review Section */}

      <ScrollAnimate>
        <ReviewCardsPage />
      </ScrollAnimate>

      {/* FAQ Section */}
      <ScrollAnimate>
        <FaqPage />
      </ScrollAnimate>

      {/* ContactUs Card */}
      <ScrollAnimate>
        <ContactUsCard />
      </ScrollAnimate>

      <div className=" absolute top-0 h-screen flex  flex-col z-50  items-baseline justify-end w-full  ">
        <svg className="arrows">
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>

        {/* <div className="  w-full pb-6 md:pb-30 flex justify-end px-10 md:px-20">
          <Image
            className=" h-15 w-15 md:w-18 md:h-18 "
            width={80}
            height={80}
            src={"/img/whtsapp.png"}
            alt={""}
          />
        </div> */}
      </div>

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
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes finger-point {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
        }

        @keyframes finger-point-reverse {
          0%,
          100% {
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
