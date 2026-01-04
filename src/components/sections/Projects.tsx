import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    title: "E-commerce Platform (Advice & iStore)",
    description: "Full-stack e-commerce applications serving nationwide users with high availability and scalability requirements.",
    technologies: ["Node.js", "PHP", "Vue.js", "MySQL", "Performance Optimization"],
    githubUrl: "#",
    liveUrl: "#",
    highlights: [
      "Developed complex Pre-order, Promotion, and Lucky Draw systems with real-time stock integration",
      "Implemented performance optimizations including Image Optimization, Lazy Loading, and Infinite Scrolling",
      "Ensured high availability and scalability for nationwide user base",
      "Managed transaction logic during high-traffic product launches"
    ]
  },
  {
    title: "Admin Dashboard & Reporting System",
    description: "Comprehensive admin dashboard with automated reporting systems providing data-driven insights for product and operations management.",
    technologies: ["Vue.js", "Node.js", "PHP", "MySQL", "Data Analytics"],
    githubUrl: "#",
    liveUrl: "#",
    highlights: [
      "Designed robust admin dashboards for product management",
      "Implemented automated reporting systems for data-driven insights",
      "Integrated complex business logic for operations management",
      "Provided real-time analytics and performance monitoring"
    ]
  },
  {
    title: "Legacy System Modernization",
    description: "Refactored and enhanced legacy CodeIgniter systems, integrating modern features while improving stability and maintainability.",
    technologies: ["PHP", "CodeIgniter", "MySQL", "System Architecture", "API Integration"],
    githubUrl: "#",
    liveUrl: "#",
    highlights: [
      "Successfully modernized legacy CodeIgniter applications",
      "Integrated modern features while maintaining system stability",
      "Improved overall maintainability and code quality",
      "Enhanced system performance and user experience"
    ]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300">
            Real-world applications showcasing technical expertise and innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              style={{animationDelay: `${index * 150}ms`}}
            >
              {/* Animated Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-cyan-400/20 hover:bg-gradient-to-br hover:from-cyan-500/15 hover:to-blue-500/15 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1 hover:border-cyan-400/40">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-200 relative">
                    {project.title}
                  </h3>
                  <div className="flex space-x-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={24} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="text-gray-400 hover:text-cyan-300 transition-all duration-300 hover:scale-125 hover:rotate-12 hover:shadow-lg hover:shadow-cyan-500/50"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={24} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={`px-4 py-2 backdrop-blur-md text-cyan-100 text-sm font-semibold rounded-full border-2 transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                          techIndex % 3 === 0
                            ? 'bg-gradient-to-r from-cyan-500/60 to-blue-500/60 border-cyan-400/80 hover:border-cyan-300 hover:shadow-cyan-400/60 hover:from-cyan-400/70 hover:to-blue-400/70'
                            : techIndex % 3 === 1
                            ? 'bg-gradient-to-r from-blue-500/60 to-sky-500/60 border-blue-400/80 hover:border-blue-300 hover:shadow-blue-400/60 hover:from-blue-400/70 hover:to-sky-400/70'
                            : 'bg-gradient-to-r from-cyan-500/60 to-purple-500/60 border-purple-400/80 hover:border-purple-300 hover:shadow-purple-400/60 hover:from-cyan-400/70 hover:to-purple-400/70'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-cyan-400/0 group-hover:border-cyan-400/60 rounded-tr-md transition-all duration-300 group-hover:shadow-cyan-400/30"></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-blue-400/0 group-hover:border-blue-400/60 rounded-bl-md transition-all duration-300 group-hover:shadow-blue-400/30"></div>

                <div>
                  <h4 className="font-semibold text-white mb-4 flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mr-3"></span>
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-200 text-sm flex items-start">
                        <span className="inline-block w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2 mr-3 flex-shrink-0 shadow-sm"></span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-sm"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
