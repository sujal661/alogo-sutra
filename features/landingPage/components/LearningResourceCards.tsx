"use client"

// import { Button } from '@/components/ui/button';
// import React, { useState } from 'react';

// const LearningResourceCards = () => {
//   const [activeFilter, setActiveFilter] = useState('Beginner');

//   const filters = ['Beginner', 'Experienced', 'Advanced'];

//   const articles = [
//     {
//       id: 1,
//       title: 'Manual vs Algo Trading: What Changes and What Stays the Same?',
//       description: 'Understanding how algorithmic execution builds on your existing trading approach without ...',
//       level: 'Beginner'
//     },
//     {
//       id: 2,
//       title: 'What Actually Happens Inside an Algorithmic Trade?',
//       description: 'A clear walkthrough of the decision-making, signal checks, and execution steps behind every automated trade.',
//       level: 'Beginner'
//     },
//     {
//       id: 3,
//       title: 'How MT5 Executes Algorithmic Strategies',
//       description: 'A practical introduction to how MT5 handles data, runs Expert Advisors, and executes algorithmic trades behind the scenes.',
//       level: 'Beginner'
//     }
//   ];

//   const filteredArticles = articles.filter(article => article.level === activeFilter);

//   return (
//     <section className="py-16 px-10 sm:px-6 lg:px-8 ">
//       <div className=" mx-auto">
//         {/* Header */}
//         <div className="mb-10 animate-fade-in">
//           <h2 className="text-3xl sm:text-4xl md:text-8xl font-normal text-gray-800 mb-6">
//             Explore the Algosutraa<br />
//             Learning Resources
//           </h2>

//           {/* Filter Tabs */}
//           <div className="flex flex-wrap mt-16 gap-3">
//             {filters.map((filter, index) => (
//               <button
//                 key={filter}
//                 onClick={() => setActiveFilter(filter)}
//                 className={`px-6 py-2.5 text-2xl rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
//                   activeFilter === filter
//                     ? 'bg-blue-500 text-white shadow-lg'
//                     : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-300'
//                 }`}
//                 style={{
//                   animation: `slide-in 0.5s ease-out ${index * 0.1}s backwards`
//                 }}
//               >
//                 {filter}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mb-20">
//           {filteredArticles.map((article, index) => (
//             <div
//               key={article.id}
//               className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group animate-slide-up"
//               style={{
//                 animationDelay: `${index * 0.15}s`
//               }}
//             >
//               {/* Card Image Placeholder */}
//               <div className="h-[40vh] bg-gradient-to-br from-gray-100 to-gray-200  overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-20 h-20 border-4 border-gray-300 rounded-lg transform rotate-12 group-hover:rotate-45 group-hover:scale-110 transition-all duration-500"></div>
//                 </div>
//               </div>

//               {/* Card Content */}
//               <div className="p-6">
//                 <h3 className="text-[30px]  font-400 text-[#606060] mb-3 min-h-[3.5rem] leading-tight">
//                   {article.title}
//                 </h3>
//                 <p className="text-[#161616] font-400 text-[20px] mb-6 min-h-[3rem] leading-relaxed">
//                   {article.description}
//                 </p>

//                 {/* Read Article Button */}
//                 <button className="w-full py-3 px-6 border-3 border-black text-black font-600 text-[20px] rounded-full font-medium hover:bg-gray-800 hover:text-white transition-all duration-300 transform group-hover:scale-105">
//                   Read Article
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Explore Complete Library Button */}
//         <div className="text-center mt-7 animate-fade-in-delayed">
//           {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
//             Explore Complete Library
//           </button> */}
//           <Button className='w-[35%] p-8 text-2xl rounded-full'>
//              Explore Complete Library 
//           </Button>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes slide-in {
//           from {
//             opacity: 0;
//             transform: translateX(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes slide-up {
//           from {
//             opacity: 0;
//             transform: translateY(40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fade-in-delayed {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         .animate-fade-in {
//           animation: fade-in 0.8s ease-out;
//         }

//         .animate-slide-up {
//           animation: slide-up 0.6s ease-out backwards;
//         }

//         .animate-fade-in-delayed {
//           animation: fade-in-delayed 1s ease-out 0.5s backwards;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default LearningResourceCards;


import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

const LearningResourceCards = () => {
  const [activeFilter, setActiveFilter] = useState('Beginner');

  const filters = ['Beginner', 'Experienced', 'Advanced'];

  const articles = [
    {
      id: 1,
      title: 'Manual vs Algo Trading: What Changes and What Stays the Same?',
      description: 'Understanding how algorithmic execution builds on your existing trading approach without ...',
      level: 'Beginner'
    },
    {
      id: 2,
      title: 'What Actually Happens Inside an Algorithmic Trade?',
      description: 'A clear walkthrough of the decision-making, signal checks, and execution steps behind every automated trade.',
      level: 'Beginner'
    },
    {
      id: 3,
      title: 'How MT5 Executes Algorithmic Strategies',
      description: 'A practical introduction to how MT5 handles data, runs Expert Advisors, and executes algorithmic trades behind the scenes.',
      level: 'Beginner'
    }
  ];

  const filteredArticles = articles.filter(article => article.level === activeFilter);

  return (
    <section className="py-16 px-10 sm:px-6 lg:px-8">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-10 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-8xl font-normal text-gray-800 mb-6">
            Explore the Algosutraa<br />
            Learning Resources
          </h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap mt-16 gap-3">
            {filters.map((filter, index) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 text-2xl rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === filter
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-300'
                }`}
                style={{
                  animation: `slide-in 0.5s ease-out ${index * 0.1}s backwards`
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mb-20">
          {filteredArticles.map((article, index) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group animate-slide-up"
              style={{
                animationDelay: `${index * 0.15}s`
              }}
            >
              {/* Card Image Placeholder - FIXED: Added 'relative' */}
              <div className="relative h-[40vh] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 border-4 border-gray-300 rounded-lg transform rotate-12 group-hover:rotate-45 group-hover:scale-110 transition-all duration-500"></div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-[30px] font-400 text-[#606060] mb-3 min-h-[3.5rem] leading-tight">
                  {article.title}
                </h3>
                <p className="text-[#161616] font-400 text-[20px] mb-6 min-h-[3rem] leading-relaxed">
                  {article.description}
                </p>

                {/* Read Article Button */}
                <button className="w-full py-3 px-6 border-3 border-black text-black font-600 text-[20px] rounded-full font-medium hover:bg-gray-800 hover:text-white transition-all duration-300 transform group-hover:scale-105">
                  Read Article
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Complete Library Button */}
        <div className="text-center mt-7 animate-fade-in-delayed">
          <Button className='w-[35%] p-8 text-2xl rounded-full'>
             Explore Complete Library 
          </Button>
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

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
          animation: fade-in-delayed 1s ease-out 0.5s backwards;
        }
      `}</style>
    </section>
  );
};

export default LearningResourceCards;