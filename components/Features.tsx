// ============================================
// FILE: components/Features.tsx
// ============================================
"use client";

import React, { useRef, useEffect, useState } from "react";
import { Code, Target, Users } from "lucide-react";

/**
 * Simple scroll‑reveal wrapper
 */
const ScrollReveal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Code,
      title: "Learning & Upskilling",
      desc: "Technical skills, learning strategies, and real-world projects",
    },
    {
      icon: Target,
      title: "Professional Integration",
      desc: "Career guidance, job prep, CV optimization, interview skills",
    },
    {
      icon: Users,
      title: "Soft Skills & Mindset",
      desc: "Communication, leadership, personal development, resilience",
    },
  ];

  return (
    <section
      id="whatwedo"
      className="py-32 relative overflow-hidden bg-black"
    >
      {/* Subtle Animated Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-red-deep w-96 h-96 top-16 -left-40 opacity-15"></div>
        <div className="orb orb-red-light w-80 h-80 bottom-20 -right-40 opacity-12"></div>
      </div>

      <div className="absolute inset-0 grid-pattern opacity-4"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 style={{ fontFamily: "'Segoe Print', cursive, sans-serif" }} className="text-5xl md:text-6xl font-black text-white mb-6">
            What We <span className="text-gradient">Focus On</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-deep-red to-blood-red mx-auto mb-8 opacity-30"></div>
          <p className="text-xl md:text-2xl text-[var(--color-text-light)] max-w-3xl mx-auto">
            Success in tech requires more than just technical knowledge
          </p>
        </div>

        {/* Scroll Reveal Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <ScrollReveal key={idx}>
              <div className="group relative bg-black/20 backdrop-blur-sm p-10 rounded-3xl border border-black/30 hover:border-transparent transition-all duration-500 overflow-hidden">
                {/* Soft Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-deep-red/15 to-blood-red/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl"></div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-black/30 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shadow-lg shadow-black/25">
                    <feature.icon className="w-10 h-10 text-white" strokeWidth={2} />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-gradient transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-[var(--color-text-light)] text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                    {feature.desc}
                  </p>
                </div>

                {/* Soft Glow on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-deep-red to-blood-red opacity-0 group-hover:opacity-15 blur-3xl transition-opacity duration-500"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
