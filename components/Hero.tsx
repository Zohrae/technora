// FILE: components/Hero.tsx
"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const scrollToLaunch = () => {
    const section = document.getElementById("launch");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black text-white">
      {/* BACKGROUND ORBS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-red-deep w-96 h-96 -top-40 -left-40"></div>
        <div className="orb orb-red-light w-72 h-72 top-1/4 right-12"></div>
        <div className="orb orb-red-deep w-80 h-80 -bottom-48 -right-28"></div>
      </div>

      {/* GRID OVERLAY */}
      <div className="absolute inset-0 grid-pattern opacity-15"></div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        {/* Two-column layout: left = text, right = image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* LEFT: Texts + CTA + Stats */}
          <div className="md:col-span-7 lg:col-span-7 order-1 md:order-1">
            {/* LAUNCH BADGE */}
            <div className="inline-block mb-8 animate-float cursor-pointer">
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
                  Official Launch — July 7, 2027 - 1
                </p>
              </div>
            </div>

            {/* MAIN TITLE */}
            <h1 className="mb-6 leading-tight text-left">
              <span className="block text-4xl md:text-6xl lg:text-7xl font-extrabold italic text-gradient animate-slideUp">
                Building the
              </span>
              <span className="block text-3xl md:text-5xl lg:text-6xl font-extrabold italic text-gradient animate-slideUp delay-200">
                Next Tech Generation
              </span>
            </h1>

            {/* SUBTITLE */}
            <p className="text-base md:text-lg text-[var(--color-text-light)] max-w-2xl mb-8">
              TECHNORA is a youth-driven tech community helping students and
              young professionals learn, connect, and confidently enter the
              tech world through events, mentorship, and real conversations.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center mb-8">
              <button
                onClick={scrollToLaunch}
                className="cursor-pointer flex items-center gap-3 px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 animate-glow"
                style={{
                  background:
                    "linear-gradient(90deg, var(--color-deep-red), var(--color-blood-red))",
                  boxShadow: "0 10px 35px rgba(221,0,0,0.2)",
                }}
              >
                <span>Join the Community</span>
                <ArrowRight size={18} />
              </button>

              <button
                className="cursor-pointer flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:bg-white/5 gradient-border"
                style={{ background: "rgba(0,0,0,1)" }}
              >
                <Play size={18} />
                <span className="text-[var(--color-text-light)]">First Webinar</span>
              </button>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
              {[
                { value: "15K+", label: "Target Members" },
                { value: "100%", label: "Free Community" },
                { value: "MENA", label: "Region Focus" },
                { value: "24+", label: "Events / Year" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl px-5 py-4 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:bg-white/5"
                >
                  <div className="text-2xl md:text-3xl font-black text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--color-text-light)] opacity-80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Circular Image */}
          <div className="md:col-span-5 lg:col-span-5 flex justify-center md:justify-end order-2 md:order-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* decorative outer ring */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none transform-gpu animate-float"
                style={{
                  boxShadow:
                    "0 30px 80px rgba(221,0,0,0.12), inset 0 0 40px rgba(255,0,120,0.06)",
                  borderRadius: "9999px",
                }}
              />

              {/* gradient halo */}
              <div
                aria-hidden
                className="absolute -inset-1 rounded-full blur-3xl opacity-30 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(255,102,179,0.14), transparent 60%)",
                }}
              />

              {/* soft pink blurred dots decor */}
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full filter blur-2xl opacity-50" style={{ background: "radial-gradient(circle, rgba(255,102,179,0.35), transparent)" }} />

              {/* image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden ring-8 ring-white/6 backdrop-blur-sm">
                <Image
                  src="/img/owners.png"
                  alt="Technora owners"
                  fill
                  sizes="(max-width: 768px) 240px, (max-width: 1200px) 320px, 384px"
                  className="object-cover rounded-full transform-gpu will-change-transform animate-[float_6s_ease-in-out_infinite]"
                  style={{
                    // subtle slow parallax-like tilt
                    transformOrigin: "50% 50%",
                  }}
                />
              </div>

              {/* small floating badge over the image */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-glass text-sm" style={{ background: "rgba(0,0,0,0.4)", borderColor: "rgba(255,255,255,0.04)" }}>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* small CSS for the custom float animation (uses Tailwind arbitrary animation if not present) */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(1deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
        .animate-[float_6s_ease-in-out_infinite] {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
