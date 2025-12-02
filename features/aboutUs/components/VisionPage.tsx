"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useRef, useState } from "react";
import { Caveat, Inter, Poppins } from "next/font/google";

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

const sliders = [
  {
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&q=80",
    title: "Vision",
    des: "To make algorithmic trading accessible, understandable, and achievable for traders everywhere—bridging the gap between traditional discretionary trading and modern automated systems.",
  },
  {
    img: "https://images.unsplash.com/photo-1622130892082-d7d9284a63e2?q=80&w=1556&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Mission",
    des: "To empower traders with the skills, tools, and support required to navigate markets confidently through structure, clarity, and disciplined automation.",
  },
  {
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Philosophy",
    des: "Markets may look random, but price always follows mathematical patterns that repeat across all timeframes and instruments.",
  },
];

export default function VisionPage() {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    if (index === sliders.length) {
      setTimeout(() => {
        slider.style.transition = "none";
        setIndex(0);
      }, 500);

      setTimeout(() => {
        slider.style.transition = "transform 0.5s ease";
      }, 550);
    }
  }, [index]);

  const [isVisible, setIsVisible] = useState({
    vision: false,
    cta: false,
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

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className=" px-8 min-h-screen  overflow-x-hidden py-16 ">
      <div className=" mx-auto space-y-16 overflow-x-hidden ">
        {/* Vision Section */}
        <div className="animate-on-scroll overflow-x-hidden" id="vision">
          <div
            ref={sliderRef}
            className="flex w-full"
            style={{
              transition: "transform 0.5s ease",
              transform: `translateX(-${index * 100}vw)`,
            }}
          >
            {sliders.map((d, i) => (
              <div
                key={i}
                className="flex shrink-0 w-screen  sm:flex-row flex-col px-0"
              >
                <div
                  className={` flex flex-col md:flex-row gap-8 items-center transition-all duration-1000 ${
                    isVisible.vision
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  }`}
                >
                  {/* Image Side */}
                  <div className="order-2 w-[30%]  sm:w-[70%]  md:order-1">
                    <div className="relative group">
                      <div className="absolute  inset-0 bg-linear-to-r from-blue-200 to-purple-200 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                      <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl">
                        <img
                          src={d.img}
                          alt="Laptop outdoors"
                          className=" w-screen sm:w-screen h-[60vh] object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>
                  </div>

                  {/* Text Side */}
                  <div className="order-1 md:order-2 space-y-6">
                    <h2
                      className={`text-[39px] md:text-[56px] ${poppins.className} text-[#606060]`}
                    >
                      Our{" "}
                      <span
                        className={`
                          bg-linear-to-tr 
                          from-[#1A73E8] 
                          to-[#14A5FF] 
                          bg-clip-text 
                          text-transparent 
                          font-bold 
                          text-[39px] md:text-[78px] 
                          ${caveat.className}
                        `}
                      >
                        {d.title}
                      </span>
                    </h2>

                    <p
                      className={`text-[#161616] ${inter.className} md:text-[18px] w-[70%] sm:max-w-3xl  leading-relaxed`}
                    >
                      {/* To make algorithmic trading accessible, understandable, and achievable for traders everywhere—bridging the gap between traditional discretionary trading and modern automated systems. */}
                      {d.des}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="animate-on-scroll" id="cta">
          <div
            className={`relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 ${
              isVisible.cta ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-blue-500 to-blue-700" />

            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-86 bg-white rounded-full blur-3xl animate-pulse" />
              <div
                className="absolute bottom-0 right-0 w-96 h-86 bg-white rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>

            {/* Content */}
            <div className="relative px-8 py-8 md:py-8  space-y-2">
              <p
                className={`text-[26px] sm:text-[32px] md:text-[40px]  lg:text-[56px] ${poppins.className} text-white text-center  mx-auto`}
              >
                At Algosutraa, We're Building More Than Algorithms
              </p>

              <p
                className={`text-blue-50 text-lg ${inter.className} text-center md:text-[18px] max-w-5xl mx-auto leading-relaxed`}
              >
                We're building a community of traders who embrace clarity,
                discipline, and modern trading practices—and who are ready to
                take the next step toward smarter, more structured trading.
              </p>

              {/* CTA Button */}
              <div className="pt-4 w-full flex justify-center  ">
                {/* <button className="bg-white text-blue-600 px-25 py-5 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:bg-gray-50">
                  Join Us
                </button> */}
                <Button
                  variant={"secondary"}
                  className=" md:h-[50px] text-[#606060]  md:w-[360px] md:px-6 md:py-[13px] rounded-full px-6 h-10 w-[60%] sm:w-[40%] text-[14px] md:text-[16px] "
                >
                  Join Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
