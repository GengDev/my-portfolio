interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Advice IT Infinite",
    period: "January 2025 – Present",
    description: "Full-Stack Development: Engineered and maintained end-to-end web applications for Advice and iStore, ensuring high availability and scalability for nationwide users.",
    achievements: [
      "Sales & Marketing Engines: Developed complex Pre-order, Promotion, and Lucky Draw systems, managing real-time stock integration and transaction logic during high-traffic product launches",
      "Performance Optimization: Improved frontend efficiency by implementing Image Optimization, Lazy Loading, and Infinite Scrolling, leading to faster page load times and enhanced user retention",
      "Business Solutions: Designed robust Admin Dashboards and automated reporting systems to provide data-driven insights for product and operations management",
      "System Modernization: Refactored and enhanced Legacy Systems (CodeIgniter), integrating modern features while improving overall stability and maintainability"
    ]
  },
  {
    title: "Mandatory Service",
    company: "Military Service",
    period: "November 2023 – November 2024",
    description: "Completed mandatory military service, demonstrating discipline and commitment to national duty.",
    achievements: [
      "Demonstrated discipline and commitment to national service",
      "Developed leadership and teamwork skills",
      "Maintained high standards of professionalism"
    ]
  },
  {
    title: "Software Developer",
    company: "Sirindhorn International Institute of Technology (SIIT)",
    period: "May 2022 – October 2023",
    description: "Workflow Automation: Digitized organizational workflows by developing internal full-stack applications, significantly reducing manual data processing time.",
    achievements: [
      "Data Management: Implemented secure backend logic and integrated diverse APIs to manage and verify institutional data efficiently",
      "Developed internal full-stack applications for workflow automation",
      "Significantly reduced manual data processing time"
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 cosmic-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Cosmic Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent cosmic-glow">
              Professional Experience
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Navigating the digital cosmos through innovative solutions and exceptional results
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50 hover:border-indigo-400/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/10 cosmic-glow">
                {/* Company Logo/Icon Placeholder */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {exp.company.charAt(0)}
                    </span>
                  </div>
                  <div className="px-4 py-2 bg-indigo-500/20 text-indigo-300 font-medium rounded-full text-sm border border-indigo-400/30">
                    {exp.period}
                  </div>
                </div>

                {/* Job Title & Company */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-gray-400 font-medium">
                    {exp.company}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-white mb-4 flex items-center">
                    <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.achievements.slice(0, 3).map((achievement, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="leading-relaxed text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect Indicator */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-indigo-400/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
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
