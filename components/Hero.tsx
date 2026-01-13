// ============================================
// FILE: components/Hero.tsx
// ============================================
"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Animated orbs (use only brand reds defined in CSS) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-red-deep w-96 h-96 -top-40 -left-40"></div>
        <div className="orb orb-red-light w-72 h-72 top-1/4 right-12"></div>
        <div className="orb orb-red-deep w-80 h-80 -bottom-48 -right-28"></div>
      </div>

      {/* Grid pattern overlay (subtle) */}
      <div className="absolute inset-0 grid-pattern opacity-15"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-28 text-center z-10">
        {/* Launch Badge */}
        <div className="inline-block mb-8 animate-float">
          <div
            className="px-5 py-2 rounded-full backdrop-blur-glass border"
            style={{
              borderColor: "rgba(221,0,0,0.18)",
              background: "rgba(0,0,0,0.25)",
            }}
            aria-hidden={false}
          >
            <p className="text-sm font-semibold flex items-center gap-3 text-[var(--color-text-light)]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full" style={{ background: "rgba(221,0,0,0.6)" }}></span>
                <span className="relative inline-flex rounded-full h-3 w-3" style={{ background: "var(--color-blood-red)" }}></span>
              </span>
              Launching June 6, 2026
            </p>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="mb-6 leading-tight">
          <span className="block text-5xl md:text-7xl lg:text-8xl font-extrabold italic text-gradient animate-slideUp">
            Empowering Youth
          </span>
          <span className="block text-4xl md:text-6xl lg:text-7xl font-extrabold italic text-gradient animate-slideUp delay-200">
            Through Technology
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-[var(--color-text-light)] max-w-2xl mx-auto mb-10 animate-fadeIn">
          A community-driven movement bridging the gap between ambition and opportunity for students and young professionals in tech.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            className="flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transform transition-all duration-300 hover:scale-105 animate-glow"
            style={{
              background: "linear-gradient(90deg, var(--color-deep-red), var(--color-blood-red))",
              boxShadow: "0 8px 30px rgba(221,0,0,0.15)",
            }}
          >
            <span>Join the Movement</span>
            <ArrowRight size={18} />
          </button>

          <button
            className="px-8 py-4 rounded-full font-semibold text-lg gradient-border"
            style={{
              background: "linear-gradient(90deg, rgba(0,0,0,1), rgba(0,0,0,1))",
            }}
          >
            <span style={{ color: "var(--color-text-light)" }}>Learn More</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: "15K+", label: "Target Members Year 1" },
            { value: "100%", label: "Free Access" },
            { value: "MENA", label: "Focus Region" },
            { value: "24+", label: "Events Year 1" },
          ].map((stat, idx) => (
            <div key={idx} className="group transform transition-transform duration-300 hover:scale-105">
              <div className="text-3xl md:text-4xl font-black text-gradient mb-2 animate-fadeIn">
                {stat.value}
              </div>
              <div className="text-sm text-[var(--color-text-light)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
