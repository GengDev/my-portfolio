"use client";

import { useLanguage } from "@/context/LanguageContext";

export function Education() {
  const { t } = useLanguage();
  return (
    <section id="education" className="py-24 cosmic-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent cosmic-glow font-orbitron">
              {t.education.title}
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.education.subtitle}
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {t.education.items.map((edu, index) => (
            <div key={index} className="relative">
              <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
                {/* Timeline Dot */}
                <div className={`absolute -left-4 top-8 w-8 h-8 bg-gradient-to-r ${index === 0 ? 'from-blue-500 to-cyan-500' : 'from-sky-500 to-cyan-500'} rounded-full border-4 border-black flex items-center justify-center`}>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <div className="flex items-center gap-4 mb-2">
                      <div className={`w-16 h-16 bg-gradient-to-r ${index === 0 ? 'from-blue-500 to-cyan-500' : 'from-sky-500 to-cyan-500'} rounded-2xl flex items-center justify-center`}>
                        <span className="text-white font-bold text-xl">{edu.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-white font-orbitron">{edu.degree}</h3>
                        <p className={`${index === 0 ? 'text-cyan-400' : 'text-sky-400'} font-semibold`}>{edu.school}</p>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm">{edu.year}</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <span className="inline-flex items-center px-4 py-2 bg-sky-500/20 text-sky-300 rounded-full text-sm font-medium border border-sky-400/30">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {edu.status}
                    </span>
                    {edu.grade && (
                      <span className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-400/30">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        {edu.grade}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
