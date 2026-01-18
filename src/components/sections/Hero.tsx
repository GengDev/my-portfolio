import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

// Removed interface HeroProps since we now use context

export function Hero() {
  const { t } = useLanguage();
  const [displayText, setDisplayText] = useState("");
  const fullText = t.hero.role;

  useEffect(() => {
    // Reset display text when language changes to re-trigger typing effect
    setDisplayText("");

    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section className="min-h-screen cosmic-section">
      {/* Cosmic Background Pattern - kept minimal for hero */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(99,102,241,0.6)_1px,transparent_0)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen pt-32 pb-20 lg:py-20">
          {/* Left Content */}
          <div className="space-y-8 slide-in-left">
            {/* Epic Cosmic Status Badge */}
            <div className="relative group mt-8 lg:mt-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg animate-pulse"></div>
              <div className="relative inline-flex items-center px-6 py-3 bg-black/50 backdrop-blur-xl border border-indigo-400/30 rounded-full text-sm text-indigo-300 font-semibold cosmic-glow shadow-lg shadow-indigo-500/20">
                <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full mr-3 animate-pulse shadow-lg shadow-indigo-400/50"></div>
                🚀 {t.hero.badge}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
              </div>
            </div>

            {/* Epic Cosmic Main Heading */}
            <div className="space-y-6">
              <div className="relative">
                {/* Background glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-sky-500/20 rounded-2xl opacity-0 animate-pulse blur-2xl"></div>

                <h1 className="relative text-6xl lg:text-8xl font-black text-white leading-tight tracking-tight font-orbitron">
                  {t.hero.greeting}{" "}
                  <span className="relative inline-block" data-text={t.hero.name}>
                    {/* Neon glow layers */}
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent blur-sm opacity-75 animate-pulse"></span>

                    {/* Main text with glitch effect */}
                    <span className="relative bg-gradient-to-r from-blue-400 via-cyan-400 to-slate-300 bg-clip-text text-transparent glitch-text" data-text={t.hero.name}>
                      {t.hero.name}
                    </span>
                  </span>
                </h1>

                {/* Floating particles around name */}
                <div className="absolute -top-4 -left-4 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
                <div className="absolute top-8 right-8 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-2 right-12 w-4 h-4 bg-slate-400 rounded-full animate-pulse"></div>
              </div>

              <div className="relative">
                <h2 className="text-2xl lg:text-3xl text-gray-300 font-light tracking-wide font-orbitron h-8">
                  <span className="text-blue-400 font-medium border-r-2 border-blue-400 pr-1 animate-pulse">{displayText}</span>
                </h2>
                <div className="mt-4 w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-slate-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
              {t.hero.description}
            </p>

            {/* Epic Cosmic Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <a
                href="#summary"
                className="group relative inline-flex items-center justify-center px-10 py-5 font-bold rounded-2xl transition-all duration-500 hover:scale-110 epic-entrance overflow-hidden"
                style={{ animationDelay: '1.2s' }}
              >
                {/* Multiple glow layers */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

                {/* Button content */}
                <span className="relative z-10 text-white text-lg font-bold drop-shadow-lg">
                  {t.hero.buttonPrimary}
                </span>

                {/* Animated arrow */}
                <svg className="relative z-10 w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>

                {/* Floating particles */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse"></div>
              </a>

              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-10 py-5 border-2 border-indigo-400/50 text-indigo-300 font-bold rounded-2xl transition-all duration-500 hover:scale-110 hover:bg-indigo-500/10 hover:border-indigo-300 epic-entrance"
                style={{ animationDelay: '1.4s' }}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 rounded-2xl transition-all duration-500 blur-sm"></div>

                <span className="relative z-10 text-lg drop-shadow-lg">
                  {t.hero.buttonSecondary}
                </span>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border border-blue-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </a>
            </div>

            {/* Epic Cosmic Social Links */}
            <div className="flex items-center gap-8 pt-10">
              <span className="text-indigo-300 text-sm font-medium tracking-wider">{t.common.connect}</span>
              <div className="flex gap-6">
                <a href="https://github.com/GengDev" className="group relative p-3 text-white/60 hover:text-white transition-all duration-500 rounded-2xl hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 border border-white/10 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-125" aria-label="Visit GitHub profile">
                  {/* Glow effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 rounded-2xl transition-all duration-500 blur-sm"></div>
                  <svg className="relative z-10 w-7 h-7 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  {/* Floating particle */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                </a>

                <a href="https://www.linkedin.com/in/watchara-sritonwong" className="group relative p-3 text-white/60 hover:text-white transition-all duration-500 rounded-2xl hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-sky-500/20 border border-white/10 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-125" aria-label="Visit LinkedIn profile">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-sky-500/0 group-hover:from-cyan-500/20 group-hover:to-sky-500/20 rounded-2xl transition-all duration-500 blur-sm"></div>
                  <svg className="relative z-10 w-7 h-7 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse"></div>
                </a>

                <a href="mailto:Watchara.geng.work@gmail.com" className="group relative p-3 text-white/60 hover:text-white transition-all duration-500 rounded-2xl hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-indigo-500/20 border border-white/10 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-125" aria-label="Send email">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-indigo-500/0 group-hover:from-cyan-500/20 group-hover:to-indigo-500/20 rounded-2xl transition-all duration-500 blur-sm"></div>
                  <svg className="relative z-10 w-7 h-7 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce"></div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="flex justify-center mt-12 lg:mt-0 slide-in-right">
            <div className="relative">
              {/* Profile Image */}
              <div className="relative group">
                <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-3xl border border-emerald-400/30 overflow-hidden relative shadow-2xl shadow-emerald-500/10">
                  <Image
                    src="/images/profile.jpg"
                    alt="Watchara Sritonwong - Full-Stack Developer"
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105 filter brightness-110 contrast-105 saturate-110 bounce-in"
                    style={{ animationDelay: '0.5s' }}
                    priority
                  />
                  {/* Elegant overlay gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-slate-900/10 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-cyan-400/10"></div>
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 rounded-3xl ring-1 ring-emerald-400/20 group-hover:ring-emerald-400/40 transition-all duration-300"></div>
                </div>

                {/* Floating Code Elements */}
                <div className="absolute top-8 left-8 text-emerald-400/60 text-sm font-mono z-10">
                  {'</>'}
                </div>
                <div className="absolute bottom-8 right-8 text-cyan-400/60 text-sm font-mono z-10">
                  {'{ }'}
                </div>
                <div className="absolute top-1/2 left-8 text-amber-400/60 text-sm font-mono z-10">
                  const
                </div>
                <div className="absolute bottom-1/3 right-12 text-emerald-400/60 text-sm font-mono z-10">
                  function
                </div>
              </div>

              {/* Floating Accent Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-emerald-400/15 rounded-2xl border border-emerald-400/30 flex items-center justify-center shadow-lg shadow-emerald-500/20 animate-pulse">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-cyan-400/15 rounded-2xl border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/20 animate-bounce">
                <span className="text-2xl">🚀</span>
              </div>
              <div className="absolute top-1/4 -left-8 w-16 h-16 bg-amber-400/15 rounded-xl border border-amber-400/30 flex items-center justify-center shadow-lg shadow-amber-500/20 animate-pulse" style={{ animationDelay: '1s' }}>
                <span className="text-xl">💡</span>
              </div>
              {/* Additional decorative elements */}
              <div className="absolute top-1/3 -right-4 w-12 h-12 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-1/4 -left-4 w-8 h-8 bg-gradient-to-br from-cyan-400/20 to-amber-400/20 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center text-gray-500 animate-bounce">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-emerald-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
