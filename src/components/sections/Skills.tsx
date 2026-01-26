"use client";

import { useLanguage } from "@/context/LanguageContext";

export function Skills() {
  const { t } = useLanguage();

  // Get categories and lists from translation
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
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 mx-auto rounded-full mb-6"></div>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {Object.entries(skillLists).map(([key, skills]) => (
            <div
              key={key}
              className="group"
            >
              <div className="h-full bg-slate-800/50 rounded-3xl p-6 md:p-8 border border-slate-700/50 hover:border-indigo-400/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/10 text-glow">
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-base md:text-lg">
                      {key.charAt(0).toUpperCase()}
                    </span>
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
                      className="group flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 hover:border-indigo-400/30 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/10 cursor-default"
                    >
                      <span className="text-gray-300 group-hover:text-indigo-300 font-medium text-[11px] md:text-sm transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
