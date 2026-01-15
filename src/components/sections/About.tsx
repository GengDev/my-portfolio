"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 cosmic-section relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Cosmic Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent cosmic-glow font-orbitron">
              {t.about.title}
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-400 mt-6 max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">{t.about.whoIAm}</h3>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  {t.about.p1}
                </p>
                <p>
                  {t.about.p2}
                </p>
              </div>
            </div>

            {/* Cosmic Profile Picture */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                {/* Background decorative elements */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/5 to-cyan-400/5 scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20"></div>

                <div className="w-32 h-32 rounded-2xl border-2 border-indigo-400/40 overflow-hidden shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 relative">
                  <Image
                    src="/images/profile.jpg"
                    alt="Watchara Sritonwong"
                    width={128}
                    height={128}
                    className="object-cover transition-transform duration-300 group-hover:scale-110 filter brightness-105 contrast-105 saturate-105"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Online status indicator */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-slate-900 rounded-full border-2 border-slate-800 flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 bg-indigo-400 rounded-full cosmic-glow shadow-indigo-400/50"></div>
                </div>

                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-2xl border border-indigo-400/20 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                <div className="absolute inset-0 rounded-2xl border border-cyan-400/10 scale-125 opacity-0 group-hover:opacity-50 transition-all duration-500 -z-20"></div>

                {/* Floating particles */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-indigo-400/30 rounded-full blur-sm animate-ping opacity-0 group-hover:opacity-100"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyan-400/30 rounded-full blur-sm animate-pulse opacity-0 group-hover:opacity-100" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>

            {/* Cosmic Personal Details */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 hover:border-indigo-400/30 transition-all duration-300">
                <div className="text-indigo-400 text-sm font-medium mb-1">{t.about.location}</div>
                <div className="text-white">{t.about.locationValue}</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300">
                <div className="text-cyan-400 text-sm font-medium mb-1">{t.about.experience}</div>
                <div className="text-white">{t.about.experienceValue}</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300">
                <div className="text-cyan-400 text-sm font-medium mb-1">{t.about.education}</div>
                <div className="text-white">{t.about.educationValue}</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300">
                <div className="text-cyan-400 text-sm font-medium mb-1">{t.about.interests}</div>
                <div className="text-white">{t.about.interestsValue}</div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Expertise */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-orbitron">{t.about.whatIDo}</h3>

              {/* Cosmic Skills Grid */}
              <div className="grid grid-cols-1 gap-4">
                {t.about.services.map((service, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-indigo-400/30 transition-colors duration-300 hover:scale-[1.02]">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 ${index === 1 ? 'bg-cyan-500/20' : 'bg-indigo-500/20'} rounded-lg flex items-center justify-center`}>
                        {index === 0 && (
                          <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        )}
                        {index === 1 && (
                          <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        )}
                        {index === 2 && (
                          <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {/* Icon for shopping bag/cart */}
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
