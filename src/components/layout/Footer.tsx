"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-black/95 backdrop-blur-3xl border-t border-blue-500/20 relative overflow-hidden">
      {/* Footer Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-blue-950/50 to-cyan-950/30"></div>

      {/* Animated star field */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(30,64,175,0.4)_1px,transparent_1px),radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.3)_1px,transparent_1px),radial-gradient(circle_at_40%_80%,rgba(148,163,184,0.3)_1px,transparent_1px)] bg-[size:120px_120px] animate-pulse"></div>
      </div>

      {/* Footer border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400 via-cyan-400 to-transparent animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center mb-12">
          {/* Footer Title */}
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-slate-300 bg-clip-text text-transparent mb-4 font-orbitron">
            {t.footer.title}
          </h3>
          {t.footer.subtitle && (
            <p className="text-white/70 max-w-md mx-auto">
              {t.footer.subtitle}
            </p>
          )}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <p className="text-white/60 text-sm font-medium">
              © {new Date().getFullYear()} {t.footer.copyright}
            </p>
            <p className="text-cyan-400/70 text-xs mt-1">
              🚀 {t.footer.builtWith}
            </p>
          </div>

          <div className="flex space-x-4">
            {SOCIAL_LINKS.map((link, index) => {
              const Icon = link.iconName === 'Github' ? Github : link.iconName === 'Linkedin' ? Linkedin : Mail;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative p-4 text-white/60 hover:text-white transition-all duration-500 rounded-2xl hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 border border-white/10 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-125"
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                  style={{ animationDelay: `${index * 200}ms` }}
                  aria-label={`${link.name} - ${link.name === 'Email' ? 'Send email' : 'Open in new tab'}`}
                >
                  {/* Multiple glow layers */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 transition-all duration-500 blur-md"></div>
                  <div className="absolute inset-0 rounded-2xl border border-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <Icon size={24} className="relative z-10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
                  <span className="sr-only">{link.name}</span>

                  {/* Floating particles */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                  <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse"></div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Final Decorative Line */}
        <div className="mt-16 relative">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-pulse"></div>

          {/* Center decorative emblem */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
