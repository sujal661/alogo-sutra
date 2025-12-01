"use client";
import React from "react";
import { Star } from "lucide-react";
import { Poppins, Caveat, Inter } from "next/font/google";

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

const ReviewCardsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rohit M.",
      role: "Retail Trader",
      rating: 5,
      text: "I'm pretty technical, but slow trading always felt too technical. Algosutraa explained it in ways I instantly made sense. Their lessons helped me understand the logic behind automation, and I could apply it immediately to my own setups.",
      avatar: "R",
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 2,
      name: "John Doe",
      role: "Intraday Trader",
      rating: 5,
      text: "I've been using these Algo strategies, and the consistency was the biggest difference for me. No overtrading, no hesitation—just clean, rule-based execution. It's the first trading style that has felt structured instead of reactive.",
      avatar: "J",
      color: "from-gray-600 to-gray-800",
    },
    {
      id: 3,
      name: "Anita Singh",
      role: "Swing Trader",
      rating: 5,
      text: "I struggled with discipline and overtrading for months. The team at Algosutraa turned it into an automated system that follows my exact rules. It trades faster and more precisely than I could on my own.",
      avatar: "A",
      color: "from-pink-400 to-pink-600",
    },
  ];

  return (
    <section className=" py-5 md:py-12 px-3.5 md:px-9  ">
      <div className=" ">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <h2
            className={`text-[38px] sm:text-[44px] md:text-[56px] ${poppins.className} font-normal text-[#606060]`}
          >
            How Traders Benefit
            <br />
            With AlgoSutraa
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="   rounded-2xl border border-gray-600  transition-all duration-500 transform hover:-translate-y-2 p-6 animate-slide-up group"
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              {/* User Info */}
              <div className="flex items-center mb-2">
                <div
                  className={`w-12 h-12 text-2xl rounded-full ${poppins.className} bg-linear-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-lg mr-3 group-hover:scale-110 transition-transform duration-300`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <p
                    className={`font-bold sm:text-[18px] text-[16px] text-gray-800 ${poppins.className} `}
                  >
                    {testimonial.name}
                  </p>
                  <p className="sm:text-[18px] text-[16px] text-[#606060] ">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 h-[25px] mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 h-[25px] w-8 text-yellow-400 animate-star-pop"
                    style={{
                      animationDelay: `${index * 0.15 + i * 0.1}s`,
                    }}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p
                key={testimonial.id}
                style={{ fontStyle: "italic" }}
                className={`text-gray-600 line-clamp-5 text-[15px] sm:text-[17px] md:text-[20px] ${inter.className} hover:line-clamp-none  leading-relaxed `}
              >
                "{testimonial.text}"
              </p>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 100 100"
                  className="text-blue-500"
                >
                  <text
                    x="50"
                    y="70"
                    fontSize="80"
                    fill="currentColor"
                    textAnchor="middle"
                    fontFamily="Georgia, serif"
                  >
                    "
                  </text>
                </svg>
              </div>
            </div>
          ))}
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

        @keyframes star-pop {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-180deg);
          }
          50% {
            transform: scale(1.2) rotate(0deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out backwards;
        }

        .animate-star-pop {
          animation: star-pop 0.5s ease-out backwards;
        }
      `}</style>
    </section>
  );
};

export default ReviewCardsPage;
