// ============================================
// FILE: components/Community.tsx
// ============================================
"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  Video,
  Codepen,
  Users,
  MessageCircle,
} from "lucide-react";

/**
 * Scroll reveal helper
 */
const ScrollReveal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
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
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </div>
  );
};

const Community = () => {
  const activities = [
    {
      title: "Live Webinars",
      desc: "Bi-weekly sessions on career paths, tech skills, and industry insights",
      icon: Video,
    },
    {
      title: "Hands-on Workshops",
      desc: "Interactive coding, portfolio building, and professional skills",
      icon: Codepen,
    },
    {
      title: "Peer Community",
      desc: "Connect with peers, share feedback and grow together",
      icon: Users,
    },
    {
      title: "Open Discussions",
      desc: "Safe space for questions, ideas, and support",
      icon: MessageCircle,
    },
  ];

  return (
    <section
      id="community"
      className="relative py-32 overflow-hidden"
      style={{ backgroundColor: "rgba(102,0,0,0.58)" }}
    >
      {/* Subtle Grid & Orbs */}
      <div className="absolute inset-0 grid-pattern opacity-8"></div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-red-light w-96 h-96 -top-32 -left-24 opacity-18"></div>
        <div className="orb orb-red-deep w-80 h-80 bottom-12 -right-32 opacity-16"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gradient mb-6">
            Join Our <span className="text-gradient">Community</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-deep-red to-blood-red mx-auto mb-8 opacity-30"></div>
          <p className="text-xl md:text-2xl text-[var(--color-text-light)] max-w-3xl mx-auto">
            Connect, learn, and grow with peers and professionals
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {activities.map((item, idx) => (
            <ScrollReveal key={idx}>
              <div className="group relative bg-black/20 backdrop-blur-sm p-10 rounded-3xl border border-black/30 hover:border-transparent transition-all duration-500 overflow-hidden">
                {/* Soft Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-deep-red/20 to-blood-red/10 opacity-0 group-hover:opacity-25 transition-opacity duration-500 rounded-3xl"></div>

                <div className="relative z-10 text-center flex flex-col items-center gap-4">
                  {/* Animated Icon */}
                  <item.icon
                    className="w-14 h-14 text-white animate-bounce-slow group-hover:rotate-6 transition-all duration-500"
                    strokeWidth={2.2}
                  />

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-gradient transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-text-light)] text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>

                {/* Glow Border on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-deep-red to-blood-red opacity-0 group-hover:opacity-15 blur-3xl transition-opacity duration-500"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>

         {/* Bottom CTA */}
        <ScrollReveal>
          <div className="text-center mt-20">
            <p className="text-2xl md:text-3xl text-white font-bold mb-4">
              Ready to be part of something amazing?
            </p>
            <p className="text-xl text-[var(--color-text-light)]">
              Join our community and start your journey today
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Community;
