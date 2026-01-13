// ============================================
// FILE: components/Footer.tsx
// ============================================
"use client";

import React from "react";
import Image from "next/image";
import { Instagram, Linkedin, Users } from "lucide-react"; // valid icons

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-300 pt-16 pb-8 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-8"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 z-10">
        {/* Footer Content Grid */}
        <div className="grid md:grid-cols-5 gap-6 mb-12">
          
          {/* Brand / Logo */}
          <div className="md:col-span-1 flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/img/2.png"
                alt="Logo"
                width={96}
                height={96}
                className="object-contain"
              />
              <h1
                className="text-2xl font-bold tracking-tight text-[#944d4d]"
                style={{ fontFamily: "'Segoe Print', cursive, sans-serif" }}


              >
                TECHNORA
              </h1>
            </div>

            <p className="text-gray-400 leading-relaxed mt-1">
              Empowering youth through technology, skills, and community.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                <Users className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Tiny Spacer (very small gap) */}
          <div className="hidden md:block md:w-4"></div>

          {/* Navigation */}
          <div className="flex flex-col gap-2 md:col-span-1">
            <h4 className="text-white font-bold text-lg mb-3">Navigation</h4>
            <ul className="space-y-2">
              {["Home", "Mission", "What We Do", "Community", "Launch"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <h4 className="text-white font-bold text-lg mb-3">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <h4 className="text-white(font-bold text-lg mb-3">Contact Us</h4>
            <p>
              <a
                href="mailto:contact@technora.community"
                className="hover:text-white transition-colors duration-300"
              >
                contact@technora.community
              </a>
            </p>
            <p>
              <a
                href="mailto:partnerships@technora.community"
                className="hover:text-white transition-colors duration-300"
              >
                partnerships@technora.community
              </a>
            </p>
            <p>
              <a
                href="mailto:mentors@technora.community"
                className="hover:text-white transition-colors duration-300"
              >
                mentors@technora.community
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
            <p>© {new Date().getFullYear()} TECHNORA. All rights reserved.</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
