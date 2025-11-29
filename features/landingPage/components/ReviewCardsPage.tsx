"use client"
import React from 'react';
import { Star } from 'lucide-react';

const ReviewCardsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rohit M.',
      role: 'Retail Trader',
      rating: 5,
      text: 'I\'m pretty technical, but slow trading always felt too technical. Algosutraa explained it in ways I instantly made sense. Their lessons helped me understand the logic behind automation, and I could apply it immediately to my own setups.',
      avatar: 'R',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 2,
      name: 'John Doe',
      role: 'Intraday Trader',
      rating: 5,
      text: 'I\'ve been using these Algo strategies, and the consistency was the biggest difference for me. No overtrading, no hesitation—just clean, rule-based execution. It\'s the first trading style that has felt structured instead of reactive.',
      avatar: 'J',
      color: 'from-gray-600 to-gray-800'
    },
    {
      id: 3,
      name: 'Anita Singh',
      role: 'Swing Trader',
      rating: 5,
      text: 'I struggled with discipline and overtrading for months. The team at Algosutraa turned it into an automated system that follows my exact rules. It trades faster and more precisely than I could on my own.',
      avatar: 'A',
      color: 'from-pink-400 to-pink-600'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 ">
      <div className=" mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-8xl font-normal text-gray-800">
            How Traders Benefit<br />
            With AlgoSutraa
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-6 animate-slide-up group"
              style={{
                animationDelay: `${index * 0.15}s`
              }}
            >
              {/* User Info */}
              <div className="flex items-center mb-4">
                <div className={`w-15 h-15 text-2xl rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-lg mr-3 group-hover:scale-110 transition-transform duration-300`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-gray-800 ">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 text-xl">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 h-8 w-8 text-yellow-400 animate-star-pop"
                    style={{
                      animationDelay: `${(index * 0.15) + (i * 0.1)}s`
                    }}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 text-2xl leading-relaxed italic">
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