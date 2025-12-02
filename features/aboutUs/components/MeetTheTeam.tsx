import { Poppins, Inter } from "next/font/google";
import { Linkedin, Facebook } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

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

export default function MeetTheTeam() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO",
      bgColor: "from-blue-500 to-blue-600",
      id: "member1",
    },
    {
      name: "John Doe",
      role: "CEO",
      bgColor: "from-yellow-400 to-yellow-500",
      id: "member2",
    },
    {
      name: "John Doe",
      role: "CEO",
      bgColor: "from-green-500 to-green-600",
      id: "member3",
    },
    {
      name: "John Doe",
      role: "CEO",
      bgColor: "from-cyan-400 to-cyan-500",
      id: "member4",
    },
  ];

  return (
    <div className="py-16">
      <div className="mx-auto">
        {/* Title */}
        <div className="mb-8" id="title">
          <p
            className={`text-[39px] md:text-[56px] font-normal ${poppins.className} px-8 text-[#606060] mt-20`}
          >
            Meet The Team
          </p>
        </div>

        {/* Team Grid */}
        <div className="flex w-full px-6">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} id={member.id}>
                <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl overflow-hidden group">
                  {/* IMAGE */}
                  <div className="relative overflow-hidden">
                    <div className=" h-[350px] relative p-2">
                      <Image
                        src={`/img/userimg.jpg`}
                        width={200}
                        height={350}
                        alt={member.name}
                        className="w-full h-[350px] scale-135 translate-x-11  object-cover mix-blend-multiply  group-hover:scale-110 group-hover:opacity-100 transition-all duration-500"
                      />
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className="p-6 space-y-3">
                    <div>
                      <p className="text-2xl font-bold text-[#606060]">
                        {member.name}
                      </p>
                      <p className="text-xl text-gray-600 font-medium">
                        {member.role}
                      </p>
                    </div>

                    {/* SOCIAL ICONS */}
                    <div className="flex items-center gap-3 pt-2">
                      <a
                        href="#"
                        className="text-gray-700 hover:text-blue-600 hover:scale-125 transition-all"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" fill="currentColor" />
                      </a>

                      <a
                        href="#"
                        className="text-gray-700 hover:text-blue-600 hover:scale-125 transition-all"
                        aria-label="Facebook"
                      >
                        <Facebook className="w-5 h-5" fill="currentColor" />
                      </a>

                      <a
                        href="#"
                        className="text-gray-700 hover:text-gray-900 hover:scale-125 transition-all"
                        aria-label="Twitter/X"
                      >
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
