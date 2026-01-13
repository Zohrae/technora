// ============================================
// FILE: components/Launch.tsx
// ============================================
"use client";

import React, { useRef, useEffect, useState } from "react";
import { Rocket, CalendarCheck, Star, ListCheck } from "lucide-react";

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
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

const Launch = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedIn: "",
    field: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsModalOpen(false);
  };

  return (
    <section
      id="launch"
      className="relative py-36 overflow-hidden"
      style={{ backgroundColor: "rgba(30, 10, 10, 0.85)" }}
    >
      {/* subtle textured background + orbs */}
      <div className="absolute inset-0 grid-pattern opacity-6"></div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-red-light w-96 h-96 top-12 -left-32 opacity-18"></div>
        <div className="orb orb-red-deep w-80 h-80 -bottom-24 -right-20 opacity-16"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
        <ScrollReveal>
          <div className="flex justify-center gap-8 mb-6">
            <Rocket className="w-16 h-16 text-[var(--color-blood-red-light)] animate-bounce-slow" />
            <Star className="w-16 h-16 text-[var(--color-blood-red)] animate-breathe-slow" />
            <CalendarCheck className="w-16 h-16 text-[var(--color-blood-red-light)] animate-bounce-slow" />
          </div>

          <h2
            className="text-6xl md:text-7xl font-black mb-4"
            style={{ fontFamily: "'Segoe Print', cursive, sans-serif" }}
          >
            <span className="bg-gradient-to-r from-deep-red to-blood-red bg-clip-text text-transparent">
              Coming Soon
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-xl md:text-2xl text-[var(--color-text-light)] mb-12 px-6 leading-relaxed">
            Big experiences are on the way! Stay tuned for opportunities and
            community events.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            {
              icon: Rocket,
              title: "Live Ceremony",
              desc: "Be part of the big reveal with live talks and activities.",
            },
            {
              icon: ListCheck,
              title: "Early Access",
              desc: "Secure early access and special rewards.",
            },
            {
              icon: Star,
              title: "Exclusive Sessions",
              desc: "Unlock interactive webinars made just for you.",
            },
            {
              icon: Rocket,
              title: "Community Events",
              desc: "Engage with peers and mentors in real time.",
            },
          ].map((item, idx) => (
            <ScrollReveal key={idx}>
              <div className="group relative bg-black/20 backdrop-blur-sm p-8 rounded-3xl border border-black/30 hover:border-transparent transition-all duration-500 overflow-hidden">
                <item.icon className="w-12 h-12 text-[var(--color-blood-red)] mb-3 animate-bounce transition-all duration-500 group-hover:scale-110" />
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gradient">
                  {item.title}
                </h3>
                <p className="text-[var(--color-text-light)] leading-relaxed group-hover:text-white">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-12 py-5 bg-gradient-to-r from-deep-red to-blood-red text-white font-bold text-lg rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-red-600/30"
          >
            Join Us Now
          </button>
        </ScrollReveal>
      </div>

      {/* Modal with BLURRED BACKGROUND EFFECT */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Blurred backdrop - website visible but blurred behind */}
          <div 
            className="absolute inset-0 backdrop-blur-lg"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Form container - focused and clear */}
          <div className="relative z-10 w-full max-w-lg p-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/50 animate-scale-in">
            <h3 className="text-3xl font-bold text-black text-center mb-6">
              Join Us
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-black font-medium mb-1">
                  Full Name
                </label>
                <input
                  name="fullName"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-black font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-black font-medium mb-1">
                  Phone Number
                </label>
                <input
                  name="phone"
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-black font-medium mb-1">
                  LinkedIn Profile
                </label>
                <input
                  name="linkedIn"
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-black font-medium mb-1">
                  Field / Major
                </label>
                <input
                  name="field"
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2 text-gray-700 border border-gray-400 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-gradient-to-r from-deep-red to-blood-red text-white rounded-lg hover:scale-105 transition-transform shadow-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Launch;