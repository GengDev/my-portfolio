"use client";

import { useLanguage } from "@/context/LanguageContext";

const skillCategories = {
  "Backend": [
    "Node.js (Express)",
    "PHP (Laravel)",
    "PHP (CodeIgniter)"
  ],
  "Frontend": [
    "Vue.js (Nuxt.js)",
    "React (Next.js)",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Bootstrap"
  ],
  "Database": [
    "MySQL",
    "Microsoft SQL Server"
  ],
  "Specialization": [
    "Performance Optimization",
    "WebP, Lazy Loading, Infinite Scroll",
    "API Design",
    "Clean Code Architecture"
  ],
  "Tools": [
    "Git",
    "Postman",
    "Sourcetree"
  ]
};

export function Skills() {
  const { t } = useLanguage();
  return (
    <section id="skills" className="py-24 cosmic-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Cosmic Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent cosmic-glow font-orbitron">
              {t.skills.title}
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div
              key={category}
              className="group"
            >
              <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50 hover:border-indigo-400/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/10 cosmic-glow">
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {category.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300 font-orbitron">
                    {/* Map category key to translated category name */}
                    {t.skills.categories[category.toLowerCase() as keyof typeof t.skills.categories] || category}
                  </h3>
                </div>
                {/* Skills Tags */}
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className="group flex items-center justify-center px-4 py-3 bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 hover:border-indigo-400/30 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/10 cursor-default"
                    >
                      <span className="text-gray-300 group-hover:text-indigo-300 font-medium text-sm transition-colors duration-300">
                        {skill}
                      </span>
                      <div className="ml-2 w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
