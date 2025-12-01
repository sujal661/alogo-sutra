"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface SlideContent {
  title?: string;
  number?: string;
  highlight?: string;
  subtitle?: string;
  description?: string;
  cta?: string;
  image?: string;
}

interface Slide {
  type: "title" | "learners" | "traders" | "builders" | "everyone";
  content: SlideContent;
}

export default function ScrollSequence() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const slides: Slide[] = [
    { type: "title", content: { title: "How Does AlgoSutraa Help You?" } },
    {
      type: "learners",
      content: {
        number: "#1",
        title: "Multiple Training Programs Designed for",
        highlight: "Beginner, Experienced and Advanced Traders",
        subtitle: "to Help Them Learn Algo Trading",
        description:
          "Our training programs guide traders at every level through the principles of algorithmic trading, helping you understand key concepts, build practical skills, and confidently apply structured, rule-based strategies in real market conditions.",
        cta: "Explore Training Programs",
        image: "/img/horse.png",
      },
    },
    {
      type: "traders",
      content: {
        number: "#2",
        title: "Expert-Built Algorithmic Strategies",
        subtitle: "Engineered to Elevate Your Trading Approach",
        description:
          "Our expert-built algorithmic strategies are engineered to bring structure, precision, and consistency to your trading. Each strategy is developed using proven logic, thoroughly backtested, and optimized for real market behavior. With transparent rules and disciplined execution, they help you reduce noise, follow your plan, and trade with greater confidence and control.",
        cta: "Discover Our Algorithms",
        image: "/img/graphicCard.png",
      },
    },
    {
      type: "builders",
      content: {
        number: "#3",
        title: "Custom-Built Algorithmic Systems",
        highlight: "Automate Your Trading Ideas",
        description:
          "We convert your trading concepts into a structured algorithmic framework with precise rules, custom risk controls, and optimized execution logic. The result is an automated system that mirrors your strategy, adapts to your preferences, and performs reliably across market conditions.",
        cta: "Request a Custom Build",
        image: "/img/builderblock.png",
      },
    },
    {
      type: "everyone",
      content: { title: "AlgoSutraa Helps ", subtitle: "Everyone" },
    },
  ];

  // --------------------------
  // SCROLL HANDLER LIKE INSPIRATION CODE
  // --------------------------
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const progress =
        (scrollY - sectionTop) / (sectionHeight - viewportHeight);

      const i = Math.min(
        slides.length - 1,
        Math.max(0, Math.floor(progress * slides.length))
      );

      setIndex(i);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // --------------------------
  // SLIDE COMPONENTS
  // --------------------------

  const TitleSlide = ({ content }: { content: SlideContent }) => (
    <div className="h-screen flex items-center  px-10 animate-slide-up">
      <h1 className="text-6xl text-gray-600 font-semibold">{content.title}</h1>
    </div>
  );

  const RegularSlide = ({ content, label }: any) => (
    <div className="h-screen flex flex-col justify-center px-10">
      <h3 className="text-5xl md:text-6xl my-12 text-start">
        {"AlgoSutraa Helps "}
        <span className="bg-linear-to-r from-[#1A73E8] to-[#14A5FF] bg-clip-text text-transparent font-poppins italic">
          {label}
        </span>
      </h3>

      <div>
        <div className="w-full flex flex-col lg:flex-row gap-8">
          <div className="bg-white rounded-3xl shadow-lg p-8 flex-1 animate-slide-left">
            <div className="text-4xl text-[#606060] mb-6">{content.number}</div>

            <h3 className="text-3xl text-gray-700 mb-4">
              {content.title}{" "}
              {content.highlight && (
                <span className="text-blue-500">{content.highlight}</span>
              )}
              {content.subtitle && (
                <span className="text-gray-700 ml-2">{content.subtitle}</span>
              )}
            </h3>

            <p className="text-[#161616] text-lg">{content.description}</p>

            {content.cta && (
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl animate-fade-in-delayed">
                {content.cta}
              </button>
            )}
          </div>

          <div className="flex-1 flex justify-center items-center animate-slide-up">
            {content.image && (
              <Image
                src={content.image}
                alt="slide image"
                width={380}
                height={380}
                className="object-contain"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
  const RegularSlideTraders = ({ content, label }: any) => (
    <div className="h-screen flex flex-col justify-center px-10">
      <h3 className="text-5xl md:text-6xl my-12 text-start">
        {"AlgoSutraa Helps "}
        <span className="bg-linear-to-r from-[#1A73E8] to-[#14A5FF] bg-clip-text text-transparent font-poppins italic">
          {label}
        </span>
      </h3>

      <div>
        <div className="w-full flex flex-col lg:flex-row gap-8">
          <div className="bg-white rounded-3xl shadow-lg p-8 flex-1 animate-slide-left">
            <div className="text-4xl text-[#606060] mb-6">{content.number}</div>

            <h3 className="text-3xl text-blue-500 mb-4">
              {content.title}{" "}
              {content.highlight && (
                <span className="text-blue-500">{content.highlight}</span>
              )}
              {content.subtitle && (
                <span className="text-gray-700 ml-2">{content.subtitle}</span>
              )}
            </h3>

            <p className="text-[#161616] text-lg">{content.description}</p>

            {content.cta && (
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl animate-fade-in-delayed">
                {content.cta}
              </button>
            )}
          </div>

          <div className="flex-1 flex justify-center items-center animate-slide-up">
            {content.image && (
              <Image
                src={content.image}
                alt="slide image"
                width={380}
                height={380}
                className="object-contain"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const EveryoneSlide = ({ content }: { content: SlideContent }) => (
    <div className="h-screen flex items-center  px-10 animate-slide-up">
      <h1 className="text-5xl md:text-6xl text-gray-700 font-semibold">
        {content.title}{" "}
        <span className="text-blue-600 italic">{content.subtitle}</span>
      </h1>
    </div>
  );

  // --------------------------
  // RENDER STARTS
  // --------------------------

  return (
    <div
      ref={sectionRef}
      style={{ height: `${slides.length * 100}vh` }}
      className="relative"
    >
      {/* Sticky viewport like inspiration */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <div
          className="flex w-full"
          style={{
            width: `${slides.length * 100}vw`,
            transform: `translateX(-${index * 100}vw)`,
            transition: "transform 0.6s ease",
          }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="w-screen shrink-0">
              {slide.type === "title" && <TitleSlide content={slide.content} />}
              {slide.type === "learners" && (
                <RegularSlide content={slide.content} label="Learners" />
              )}
              {slide.type === "traders" && (
                <RegularSlideTraders content={slide.content} label="Traders" />
              )}
              {slide.type === "builders" && (
                <RegularSlide content={slide.content} label="Builders" />
              )}
              {slide.type === "everyone" && (
                <EveryoneSlide content={slide.content} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* animations */}
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

        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        .animate-slide-up {
          animation: slide-up 0.8s ease-out both;
        }

        .animate-slide-left {
          animation: slide-left 0.9s ease-out both;
        }

        .animate-fade-in-delayed {
          animation: fade-in-delayed 1.1s ease-out both;
        }
      `}</style>
    </div>
  );
}
