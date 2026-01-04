const skillCategories = {
  "Frontend": [
    "Vue.js (Nuxt.js)",
    "React (Next.js)",
    "JavaScript (ES6+)",
    "HTML5/CSS3",
    "Bootstrap"
  ],
  "Backend": [
    "Node.js (Express)",
    "PHP (Laravel)",
    "PHP (CodeIgniter)",
    "API Design",
    "REST APIs"
  ],
  "Database": [
    "MySQL",
    "Microsoft SQL Server"
  ],
  "Performance & Tools": [
    "Performance Optimization",
    "Clean Code Architecture",
    "Git",
    "Postman",
    "Sourcetree"
  ]
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 bg-clip-text text-transparent animate-pulse">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Modern technologies and tools I master to build exceptional solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <div
              key={category}
              className="group relative"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25">
                <h3 className="text-xl font-semibold text-white mb-6 text-center bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-sky-500 text-white text-sm font-medium rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 hover:rotate-3 cursor-default animate-fade-in"
                      style={{
                        animationDelay: `${(index * 100) + (skillIndex * 50)}ms`,
                        background: `linear-gradient(135deg, hsl(${(skillIndex * 45) % 240 + 180}, 70%, 60%), hsl(${((skillIndex * 45) + 45) % 240 + 180}, 70%, 60%))`
                      }}
                    >
                      {skill}
                    </span>
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
