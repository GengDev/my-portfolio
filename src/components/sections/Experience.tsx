interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Full-Stack Developer",
    company: "Advice IT Infinite",
    period: "Jan 2025 - Present",
    description: "Engineered and maintained end-to-end web applications for Advice and iStore, ensuring high availability and scalability for nationwide users.",
    achievements: [
      "Developed complex Pre-order, Promotion, and Lucky Draw systems with real-time stock integration",
      "Implemented performance optimizations including Image Optimization, Lazy Loading, and Infinite Scrolling",
      "Designed robust Admin Dashboards and automated reporting systems for data-driven insights",
      "Refactored and modernized Legacy Systems (CodeIgniter) while maintaining stability"
    ]
  },
  {
    title: "Military Service",
    company: "Royal Thai Armed Forces",
    period: "Nov 2023 - Nov 2024",
    description: "Completed mandatory military service with honor and discipline.",
    achievements: [
      "Developed strong teamwork and leadership skills",
      "Maintained high standards of professionalism and dedication",
      "Successfully completed all required training programs"
    ]
  },
  {
    title: "Full-Stack Developer (Internship)",
    company: "Sirindhorn International Institute of Technology (SIIT)",
    period: "May 2022 - Oct 2023",
    description: "Digitized organizational workflows by developing internal full-stack applications.",
    achievements: [
      "Significantly reduced manual data processing time through workflow automation",
      "Implemented secure backend logic and integrated diverse APIs for data management",
      "Developed solutions for institutional data verification and processing"
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-300">
            A journey of growth, innovation, and delivering exceptional results
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-sky-500"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg"></div>

                  {/* Content Card */}
                  <div className="ml-16 group">
                    <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1">
                      {/* Gradient Border Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-sky-500/15 rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                            <p className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                              {exp.company}
                            </p>
                          </div>
                          <div className="mt-2 sm:mt-0 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm text-cyan-300 font-medium rounded-full text-sm border border-cyan-400/30">
                            {exp.period}
                          </div>
                        </div>

                        <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                        <div>
                          <h4 className="font-semibold text-white mb-4 flex items-center">
                            <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mr-3"></span>
                            Key Achievements
                          </h4>
                          <ul className="space-y-3">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start text-gray-300">
                                <span className="inline-block w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full blur-sm"></div>
                      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-blue-400/30 to-sky-400/30 rounded-full blur-sm"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
