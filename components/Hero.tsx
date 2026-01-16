// ============================================
// FILE: components/Hero.tsx
// ============================================
"use client";

import React from "react";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {

    const scrollToLaunch = () => {
    const section = document.getElementById("launch");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      
      {/* BACKGROUND ORBS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-red-deep w-96 h-96 -top-40 -left-40"></div>
        <div className="orb orb-red-light w-72 h-72 top-1/4 right-12"></div>
        <div className="orb orb-red-deep w-80 h-80 -bottom-48 -right-28"></div>
      </div>

      {/* GRID OVERLAY */}
      <div className="absolute inset-0 grid-pattern opacity-15"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-28 text-center z-10">
        
        {/* LAUNCH BADGE */}
        <div className="inline-block mb-10 animate-float cursor-pointer">
          <div
            className="px-6 py-2 rounded-full backdrop-blur-glass border transition hover:scale-105"
            style={{
              borderColor: "rgba(221,0,0,0.25)",
              background: "rgba(0,0,0,0.35)",
            }}
          >
            <p className="text-sm font-semibold flex items-center gap-3 text-[var(--color-text-light)]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#dd0000]/60"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#dd0000]"></span>
              </span>
              Official Launch — June 6, 2026
            </p>
          </div>
        </div>

        {/* MAIN TITLE */}
        <h1 className="mb-8 leading-tight">
          <span className="block text-5xl md:text-7xl lg:text-8xl font-extrabold italic text-gradient animate-slideUp">
            Building the
          </span>
          <span className="block text-4xl md:text-6xl lg:text-7xl font-extrabold italic text-gradient animate-slideUp delay-200">
            Next Tech Generation
          </span>
        </h1>

        {/* SUBTITLE */}
        <p className="text-base md:text-lg text-[var(--color-text-light)] max-w-2xl mx-auto mb-12 animate-fadeIn">
          TECHNORA is a youth-driven tech community helping students and young professionals
          learn, connect, and confidently enter the tech world through events, mentorship,
          and real conversations.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
          
          <button
            onClick={scrollToLaunch}
            className="
              cursor-pointer
              flex items-center gap-3
              px-9 py-4 rounded-full
              font-bold text-lg
              transition-all duration-300
              hover:scale-110 hover:-translate-y-1
              animate-glow
            "
            style={{
              background: "linear-gradient(90deg, var(--color-deep-red), var(--color-blood-red))",
              boxShadow: "0 10px 35px rgba(221,0,0,0.2)",
            }}
          >
            <span>Join the Community</span>
            <ArrowRight size={18} />
          </button>

          <button
            className="
              cursor-pointer
              flex items-center gap-3
              px-9 py-4 rounded-full
              font-semibold text-lg
              transition-all duration-300
              hover:scale-105 hover:bg-white/5
              gradient-border
            "
            style={{ background: "rgba(0,0,0,1)" }}
          >
            <Play size={18} />
            <span className="text-[var(--color-text-light)]">First Webinar</span>
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl mx-auto">
          {[
            { value: "15K+", label: "Target Members" },
            { value: "100%", label: "Free Community" },
            { value: "MENA", label: "Region Focus" },
            { value: "24+", label: "Events / Year" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="
                cursor-pointer
                group
                rounded-2xl
                px-6 py-6
                transition-all duration-300
                hover:scale-110 hover:-translate-y-1
                hover:bg-white/5
              "
            >
              <div className="text-3xl md:text-4xl font-black text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[var(--color-text-light)] opacity-80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
