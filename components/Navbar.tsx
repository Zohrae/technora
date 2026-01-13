// ============================================
// FILE: components/Navbar.tsx
// ============================================
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-gray-200"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <Image
              src="/img/2.png"
              alt="TECHNORA Logo"
              width={70}
              height={70}
              className="object-contain"
              priority
            />
            <span className="text-2xl font-bold tracking-tight text-[#660000]" style={{ fontFamily: "'Segoe Print', cursive, sans-serif" }}
>
              TECHNORA
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            {["Mission", "What We Do", "Community", "Launch"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "")}`}
                className="relative text-gray-700 hover:text-[#dd0000] font-medium transition-colors duration-300"
              >
                {item}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#dd0000] transition-all duration-300 hover:w-full" />
              </a>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 hover:text-[#dd0000]"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-2">
            {["Mission", "What We Do", "Community", "Launch"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "")}`}
                className="block rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#dd0000] transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
