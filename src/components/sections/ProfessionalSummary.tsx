'use client';

import { useEffect, useState, useRef } from 'react';

import { useLanguage } from "@/context/LanguageContext";

export function ProfessionalSummary() {
  const { t } = useLanguage();
  const [counters, setCounters] = useState({ experience: 0, projects: 0, available: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start counting animation
            const countUp = (start: number, end: number, duration: number, key: string) => {
              const increment = end / (duration / 16);
              let current = start;
              const timer = setInterval(() => {
                current += increment;
                if (current >= end) {
                  current = end;
                  clearInterval(timer);
                }
                setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
              }, 16);
            };

            setTimeout(() => countUp(0, 2.5, 2000, 'experience'), 200);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section id="summary" className="py-20 md:py-24 standard-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 relative overflow-hidden">
            <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent text-glow font-orbitron">{t.summary.title}</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 mx-auto rounded-full"></div>
        </div>

        {/* Content Layout */}
        <div ref={sectionRef} className="grid lg:grid-cols-0 gap-12 items-start">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            <div className="grid gap-4 md:gap-6">
              {t.summary.points.map((point, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-4 md:p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50 hover:border-indigo-400/30 transition-all duration-300 hover:bg-slate-800/50 hover:translate-x-2"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed group-hover:text-white transition-colors duration-300 pt-1">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          {/* <div className="lg:col-span-2 grid gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-indigo-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20 text-glow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-indigo-400">{counters.experience}+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-8">{t.footer.subtitle || "Ready to build something great together?"}</p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 text-glow"
          >
            Launch Project
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
