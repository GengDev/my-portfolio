import { Github } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  imageUrl: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    title: "E-Commerce & High-Traffic Platforms",
    description: "Scalable e-commerce solutions serving nationwide users with enterprise-grade architecture.",
    technologies: ["Node.js", "PHP", "Vue.js", "MySQL", "Performance Optimization"],
    githubUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop&q=80",
    highlights: [
      "Microservices architecture handling 10M+ monthly transactions",
      "99.9% uptime with auto-scaling and load balancing",
      "Modern UI/UX with progressive web app features",
      "Legacy system migration with zero downtime"
    ]
  },
  {
    title: "Integrated Sales Engines",
    description: "Advanced Pre-order and Marketing Campaign systems with real-time inventory management.",
    technologies: ["Node.js", "Vue.js", "Real-time Systems", "Inventory Management"],
    githubUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop&q=80",
    highlights: [
      "Real-time stock synchronization across multiple warehouses",
      "Advanced analytics dashboard for campaign performance",
      "High-throughput transaction processing (1000+ TPS)",
      "Automated promotional rules engine with A/B testing"
    ]
  },
  {
    title: "BI & Operations Dashboards",
    description: "Intelligent reporting platforms with real-time analytics and operational insights.",
    technologies: ["Vue.js", "Data Analytics", "Reporting Systems", "Business Intelligence"],
    githubUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop&q=80",
    highlights: [
      "Real-time KPI dashboards with predictive analytics",
      "Advanced filtering and drill-down capabilities",
      "Automated report generation and email scheduling",
      "Custom metrics tracking with alert notifications"
    ]
  },
  {
    title: "Internal Process Digitalization",
    description: "Comprehensive workflow automation and data management systems for academic institutions.",
    technologies: ["Full-Stack Development", "API Integration", "Data Management", "Workflow Automation"],
    githubUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop&q=80",
    highlights: [
      "AI-powered document processing and verification",
      "Automated approval workflows reducing processing time by 80%",
      "End-to-end encryption with role-based access control",
      "Mobile-responsive interface for remote access"
    ]
  },
  {
    title: "Personal Portfolio Website",
    description: "Modern, responsive portfolio website built with cutting-edge web technologies and stunning animations.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/GengDev/my-portfolio.git",
    imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=450&fit=crop&q=80",
    highlights: [
      "Responsive design with dark cyberpunk theme",
      "Smooth animations and interactive elements",
      "SEO optimized with structured data",
      "Performance-focused with modern web standards"
    ]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 cosmic-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Cosmic Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent cosmic-glow">
              Featured Projects
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Professional projects showcasing expertise in full-stack development and modern web technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Project Card */}
              <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50 hover:border-indigo-400/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/10 cosmic-glow">
                {/* Project Image */}
                <div className="relative mb-6 overflow-hidden rounded-2xl border border-slate-600/50">
                  <div className="aspect-video relative">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                  {/* Project Type Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-indigo-500/20 backdrop-blur-sm text-indigo-300 text-xs font-medium rounded-full border border-indigo-400/30">
                    Full-Stack
                  </div>
                </div>

                {/* Project Title & Links */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex space-x-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 hover:scale-110 p-2 rounded-lg hover:bg-slate-700/50"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.githubUrl === "#" && (
                      <div className="text-gray-500 p-2 rounded-lg" title="Proprietary company project - code not available">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-indigo-500/10 text-indigo-300 text-xs font-medium rounded-lg border border-indigo-400/20 hover:bg-indigo-500/20 hover:border-indigo-400/40 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-300 text-sm leading-relaxed flex items-start">
                        <span className="inline-block w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* View Project Button */}
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 flex items-center justify-center cosmic-glow">
                    Explore Project
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
