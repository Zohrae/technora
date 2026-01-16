// ============================================
// FILE: components/Navbar.tsx
// ============================================
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Mission", href: "#mission" },
  { label: "What We Do", href: "#whatwedo" },
  { label: "Community", href: "#community" },
  { label: "Launch", href: "#launch" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full bg-white transition-all duration-500 ${
        scrolled ? "shadow-lg border-b border-black/5" : ""
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <Image
              src="/img/2.png"
              alt="TECHNORA Logo"
              width={60}
              height={60}
              className="object-contain"
              priority
            />

            <span
              className="text-2xl tracking-wide text-[#660000]"
              style={{
                fontFamily: "'Segoe Print', 'Comic Sans MS', cursive",
              }}
            >
              TECHNORA
            </span>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="
                  group relative cursor-pointer
                  text-sm font-semibold uppercase tracking-wider
                  text-gray-800
                  transition-all duration-300 ease-out
                  hover:text-[#dd0000]
                  hover:scale-105
                "
              >
                {link.label}

                {/* underline */}
                <span
                  className="
                    absolute -bottom-2 left-0
                    h-[2px] w-0
                    bg-gradient-to-r from-[#660000] to-[#dd0000]
                    transition-all duration-300
                    group-hover:w-full
                  "
                />
              </a>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-lg p-2 text-gray-800 transition hover:bg-gray-100"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white px-6 py-6 shadow-lg">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="
                  cursor-pointer
                  rounded-xl px-4 py-3
                  text-sm font-semibold uppercase tracking-wider
                  text-gray-800
                  transition-all duration-300
                  hover:bg-[#dd0000]/10
                  hover:text-[#dd0000]
                  hover:scale-[1.03]
                "
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
