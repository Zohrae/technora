// ============================================
// FILE: components/Mission.tsx
// ============================================
"use client";

import React, { useRef, useEffect, useState } from "react";
import { Heart, BookOpen, Users, Rocket, Lightbulb, Globe } from "lucide-react";

/**
 * Helper component that adds "visible" class when in view
 */
const ScrollReveal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </div>
  );
};

const Mission = () => {
  const values = [
    { icon: Heart, title: "Human-First", desc: "Real people, real stories, authentic connections" },
    { icon: BookOpen, title: "Open Access", desc: "Free, accessible knowledge for everyone" },
    { icon: Users, title: "Community-Driven", desc: "Built by students, for students" },
    { icon: Rocket, title: "Impact-Focused", desc: "Empowering youth to achieve their potential" },
    { icon: Lightbulb, title: "Continuous Learning", desc: "Growth mindset and lifelong development" },
    { icon: Globe, title: "Collaboration", desc: "Together we grow stronger" },
  ];

  return (
    <section
      id="mission"
      className="relative py-32 overflow-hidden"
      style={{ backgroundColor: "rgba(102,0,0,0.55)" }}
    >
      {/* Subtle Animated Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-red-deep w-72 h-72 -top-32 -left-24 opacity-20"></div>
        <div className="orb orb-red-light w-60 h-60 top-24 right-12 opacity-15"></div>
        <div className="orb orb-red-deep w-64 h-64 -bottom-28 -right-16 opacity-18"></div>
      </div>

      <div className="absolute inset-0 grid-pattern opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gradient mb-6">
            Our Mission
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-deep-red to-blood-red mx-auto mb-8 opacity-30"></div>
          <p className="text-xl md:text-2xl text-[var(--color-text-light)] max-w-4xl mx-auto leading-relaxed">
            To support the professional and personal integration of youth into the tech ecosystem by providing clear guidance, accessible knowledge, real-world insights, and strong human connections.
          </p>
        </div>

        {/* Scroll Reveal Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <ScrollReveal key={idx}>
              <div className="group relative bg-black/10 p-8 rounded-3xl border border-black/20 hover:border-transparent transition-all duration-500 overflow-hidden">
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-deep-red/20 to-blood-red/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl"></div>

                {/* Card Content */}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-black/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-black/20">
                    <value.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-[var(--color-text-light)] leading-relaxed group-hover:text-white transition-colors duration-300">
                    {value.desc}
                  </p>
                </div>

                <div className="absolute -inset-1 bg-gradient-to-r from-deep-red to-blood-red opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
