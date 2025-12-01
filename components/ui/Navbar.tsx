"use client";
import React, { useEffect, useState } from "react";
import { LucideMicroscope, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  const navItems = [
    { name: "Learning", href: "/learning" },
    { name: "Algorithms", href: "/algorithms" },
    { name: "Contact", href: "/contactUs" },
    // { name: "Home", href: "/landingPage" },
    { name: "About", href: "/aboutUs" },

    // { name: "Products", href: "/products" },
    // { name: "Training", href: "/training" },
    // { name: "Plans", href: "/plans" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`absolute mt-5 top-0 left-0 right-0 z-70 px-3.5 md:px-9   transition-all duration-300 
        ${
          isScrolled
          // ? "backdrop-blur-sm bg-white/10 border border-white/40 shadow-2xl"
          // : "bg-transparent"
        }`}
    >
      <div className=" w-full mx-auto  ">
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <Link
            href={"/landingPage"}
            className="flex  items-center  animate-fade-in"
          >
            {/* <span className="text-xl md:text-2xl font-bold text-gray-800">
                ALGO<span className="text-teal-500">SUTRAA</span>
              </span> */}
            <Image
              className=""
              width={62}
              height={41}
              src={"/img/logo.png"}
              alt={""}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center bg-white py-[13px]  px-6  rounded-full space-x-8">
            {
              // ["Training", "Plans", "Products", "About"]
              navItems.map((item, index) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    // href={`#${item.toLowerCase()}`}
                    href={`${item.href}`}
                    className={` hover:text-teal-500 ${
                      poppins.className
                    } font-400 font-[16px]  transition-colors  duration-200  ${
                      isActive
                        ? " bg-[#1A73E8] text-white p-2 rounded-full"
                        : "text-[#000000]"
                    } `}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* {item.name} */}
                    <span>
                      {item.name}
                      {/* {item.icon ? <item.icon /> : null} */}
                    </span>
                  </Link>
                );
              })
            }
            {/* { name: "Dr Algo", href: "/dr-algo", icon: "robot" }, */}
            <Link
              href={"dr-algo"}
              className={` hover:text-teal-500 flex items-center gap-2 ${
                poppins.className
              } font-400 font-[16px]  transition-colors  duration-200   rounded-full ${
                pathname === "/dr-algo"
                  ? " bg-[#1A73E8] text-white p-2"
                  : "text-[#000000]"
              } `}
              style={{ animationDelay: `${6 * 100}ms` }}
            >
              Dr Algo
              <LucideMicroscope className="w-4 h-4" />
            </Link>
          </div>

          <Link href={"/contactUs"}>
            <button
              className={`bg-[#1A73E8] ${poppins.className}  hidden  md:block  font-500 text-3.5 md:text-[16px] h-10 md:h-[50px] px-6 py-[13px] justify-center items-center sm:flex hover:bg-blue-700 text-white  rounded-full transition-all duration-300 transform   `}
            >
              Contact Us
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-teal-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 bg-white/95 backdrop-blur-md" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-gray-700 hover:text-teal-500 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link href={"/contactUs"}>
            <button className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-full transition-all hover:bg-blue-700">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
