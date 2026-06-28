"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const NAV_ITEMS = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-black/30 backdrop-blur-3xl border-b border-blue-500/20 z-50 shadow-2xl shadow-blue-500/30">
      {/* Animated header border */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500 via-cyan-400 to-transparent animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            {/* Portfolio Logo */}
            <Link href="/" className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
              <span className="relative text-3xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-slate-300 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-cyan-300 group-hover:to-slate-200 transition-all duration-500 drop-shadow-lg">
                Portfolio<span className="text-white">.</span>
              </span>
              {/* Floating particles around logo */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-75"></div>
              <div className="absolute top-2 -left-2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
            </Link>
          </div>

          <div className="flex items-center gap-6">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {NAV_ITEMS.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative group px-4 py-2 text-white/90 hover:text-white font-semibold transition-all duration-500 hover:scale-110"
                  style={{ animationDelay: `${index * 100}ms` }}
                  aria-label={`Navigate to ${item.name} section`}
                >
                  {/* Neon glow effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></span>
                  <span className="relative z-10">{item.name}</span>

                  {/* Animated underline */}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-500 group-hover:w-full group-hover:left-0"></span>

                  {/* Floating dot */}
                  <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <a
                href="/watchara_sritonwong_resume.pdf"
                download
                className="relative group flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 border border-cyan-400/40 hover:border-cyan-300 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/20"
                aria-label="Download CV"
              >
                <svg className="w-4 h-4 mr-2 text-cyan-300 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {t.nav.downloadCv}
              </a>
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden relative p-3 text-white/80 hover:text-white transition-all duration-500 rounded-xl hover:bg-white/5 hover:scale-110 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {isMenuOpen ? (
              <X size={24} className="relative z-10 text-blue-400 group-hover:rotate-180 transition-transform duration-500" />
            ) : (
              <Menu size={24} className="relative z-10 group-hover:rotate-90 transition-transform duration-500" />
            )}
            {/* Animated ring */}
            <div className="absolute inset-0 rounded-xl border border-blue-400/30 animate-ping opacity-0 group-hover:opacity-100"></div>
          </button>
        </div>

        {/* Blue Cyan Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-cyan-500/5 to-transparent animate-fade-in"></div>

            <nav className="relative py-6 space-y-1">
              {NAV_ITEMS.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block mx-4 px-4 py-4 text-white/80 hover:text-white font-semibold rounded-xl transition-all duration-500 hover:translate-x-3 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 group"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 150}ms` }}
                  aria-label={`Navigate to ${item.name} section`}
                >
                  <span className="relative z-10 flex items-center">
                    {item.name}
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </span>

                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-xl border border-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
              ))}

              {/* Cyberpunk decorative elements */}
              <div className="absolute top-4 right-8 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
              <div className="absolute bottom-4 left-8 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-40"></div>
              <div className="px-4 pt-4 border-t border-slate-700/50 mt-4 space-y-4">
                <a
                  href="/watchara_sritonwong_resume.pdf"
                  download
                  className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-cyan-400/40 rounded-xl text-white font-semibold text-sm transition-all duration-300"
                >
                  <svg className="w-4 h-4 mr-2 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {t.nav.downloadCv}
                </a>
                <div className="flex justify-center">
                  <LanguageSwitcher />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  );
}
