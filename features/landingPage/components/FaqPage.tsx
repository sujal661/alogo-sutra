"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      id: 1,
      question: 'Do I need coding experience to use your algorithms?',
      answer: 'No, all our ready-made and custom-built algorithms run without requiring any programming knowledge. Everything—from logic to execution—is handled in a structured, easy-to-understand format. You only follow the steps we guide you through.'
    },
    {
      id: 2,
      question: 'Which platforms do your algorithms work on?',
      answer: 'Our algorithms are compatible with major trading platforms including MetaTrader 4, MetaTrader 5, and other popular trading systems. We provide detailed setup guides for each platform to ensure smooth integration.'
    },
    {
      id: 3,
      question: 'Will the algorithms trade automatically on my account?',
      answer: 'Yes, once configured, our algorithms can execute trades automatically based on your predefined rules and risk parameters. You maintain full control over settings, position sizes, and can pause automation at any time.'
    },
    {
      id: 4,
      question: 'How transparent are the strategies? Will I know the logic behind them?',
      answer: 'Complete transparency is our priority. Every algorithm comes with detailed documentation explaining the logic, entry/exit rules, risk management, and the reasoning behind each decision. You\'ll understand exactly how and why trades are executed.'
    },
    {
      id: 5,
      question: 'Are these algorithms guaranteed to generate profit?',
      answer: 'No trading system can guarantee profits. While our algorithms are thoroughly backtested and optimized, market conditions vary and all trading involves risk. We focus on providing disciplined, rule-based strategies that help manage risk effectively.'
    },
    {
      id: 6,
      question: 'How do I get support if I\'m stuck or confused?',
      answer: 'We offer comprehensive support through multiple channels: detailed documentation, video tutorials, email support, and live chat assistance. Our team is dedicated to helping you understand and successfully implement your trading strategies.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 ">
      <div className=" mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-normal text-[#606060]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className=" text-2xl font-bold space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden animate-slide-up"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200 group"
              >
                <span className=" sm:text-2xl font-medium text-gray-800 pr-4 group-hover:text-blue-600 transition-colors duration-200">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <ChevronDown 
                    size={24} 
                    className="text-blue-500"
                  />
                </div>
              </button>

              {/* Answer Content */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-[#606060] font-medium leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        {/* <div className="mt-12 text-center animate-fade-in-delayed">
          <p className="text-gray-600 text-2xl mb-4">
            Still have questions?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Contact Support
          </button>
        </div> */}
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
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delayed {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out backwards;
        }

        .animate-fade-in-delayed {
          animation: fade-in-delayed 1s ease-out 0.6s backwards;
        }
      `}</style>
    </section>
  );
};

export default FaqPage;