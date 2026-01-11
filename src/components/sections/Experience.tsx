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

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-sky-500"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-24 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-black flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">
                        {exp.company.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
                    {/* Period Badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 text-cyan-300 font-medium rounded-full text-sm border border-cyan-400/30 mb-4">
                      {exp.period}
                    </div>

                    {/* Job Title & Company */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-cyan-400 font-medium">
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
                        <svg className="w-5 h-5 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-gray-300">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="leading-relaxed text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
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
