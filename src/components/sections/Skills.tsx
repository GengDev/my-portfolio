"use client";

import { useLanguage } from "@/context/LanguageContext";

// Unique SVG icon + gradient per category key
const categoryConfig: Record<string, { icon: React.ReactNode; gradient: string; iconBg: string }> = {
  frontend: {
    gradient: "hover:border-blue-400/40 hover:shadow-blue-500/10",
    iconBg: "from-blue-500 to-cyan-500",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  backend: {
    gradient: "hover:border-violet-400/40 hover:shadow-violet-500/10",
    iconBg: "from-violet-500 to-purple-600",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  apiAndSystem: {
    gradient: "hover:border-cyan-400/40 hover:shadow-cyan-500/10",
    iconBg: "from-cyan-500 to-teal-500",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  database: {
    gradient: "hover:border-emerald-400/40 hover:shadow-emerald-500/10",
    iconBg: "from-emerald-500 to-green-600",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
  devops: {
    gradient: "hover:border-sky-400/40 hover:shadow-sky-500/10",
    iconBg: "from-sky-500 to-blue-600",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  qualityTools: {
    gradient: "hover:border-amber-400/40 hover:shadow-amber-500/10",
    iconBg: "from-amber-500 to-orange-500",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
};

export function Skills() {
  const { t } = useLanguage();
  const categories = t.skills.categories;
  const skillLists = t.skills.lists;

  return (
    <section id="skills" className="py-20 md:py-24 standard-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent text-glow font-orbitron">
              {t.skills.title}
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 mx-auto rounded-full mb-6" />
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {Object.entries(skillLists).map(([key, skills]) => {
            const config = categoryConfig[key] ?? {
              gradient: "hover:border-indigo-400/40 hover:shadow-indigo-500/10",
              iconBg: "from-indigo-500 to-blue-500",
              icon: <span className="text-white font-bold">{key.charAt(0).toUpperCase()}</span>,
            };

            return (
              <div key={key} className="group">
                <div className={`h-full bg-slate-800/50 rounded-3xl p-6 md:p-8 border border-slate-700/50 ${config.gradient} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}>
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${config.iconBg} rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      {config.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300 font-orbitron">
                      {categories[key as keyof typeof categories]}
                    </h3>
                  </div>
                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 hover:border-indigo-400/30 rounded-xl transition-all duration-300 hover:scale-105 cursor-default"
                      >
                        <span className="text-gray-300 hover:text-indigo-300 font-medium text-[11px] md:text-sm transition-colors duration-300">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
