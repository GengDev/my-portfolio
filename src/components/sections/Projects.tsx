"use client";

import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useRef, useEffect } from "react";



// Local projects array removed in favor of translation data
import { useLanguage } from "@/context/LanguageContext";

export function Projects() {
  const { t } = useLanguage();
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;

    // Vanilla JS Tilt Effect
    const handleMouseMove = (e: MouseEvent, card: HTMLDivElement) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
      const rotateY = ((x - centerX) / centerX) * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = (card: HTMLDivElement) => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    cards.forEach((card) => {
      if (!card) return;
      card.addEventListener('mousemove', (e) => handleMouseMove(e, card));
      card.addEventListener('mouseleave', () => handleMouseLeave(card));
    });

    return () => {
      cards.forEach((card) => {
        if (!card) return;
        card.removeEventListener('mousemove', (e) => handleMouseMove(e, card)); // Type mismatch hack for simplicity
        card.removeEventListener('mouseleave', () => handleMouseLeave(card));
      });
    };
  }, []);

  return (
    <section id="projects" className="py-24 cosmic-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Cosmic Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent cosmic-glow font-orbitron">
              {t.projects.title}
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {t.projects.items.map((project, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Project Card */}
              <div
                ref={(el) => { cardsRef.current[index] = el }}
                className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50 hover:border-indigo-400/30 transition-transform duration-200 ease-out shadow-2xl hover:shadow-indigo-500/20 cosmic-glow"
                style={{ transformStyle: 'preserve-3d' }}
              >
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
                  <div className="absolute top-4 left-4 px-3 py-1 bg-indigo-500/20 backdrop-blur-sm text-indigo-300 text-xs font-medium rounded-full border border-indigo-400/30" style={{ transform: 'translateZ(20px)' }}>
                    Full-Stack
                  </div>
                </div>

                {/* Project Title & Links */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300 font-orbitron" style={{ transform: 'translateZ(10px)' }}>
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
                    {/* Live URL Link */}
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110 p-2 rounded-lg hover:bg-slate-700/50"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit live project: ${project.title}`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.liveUrl === "#" && (
                      <div className="text-gray-500 p-2 rounded-lg cursor-not-allowed" title="Live demo not available">
                        <ExternalLink size={20} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                {/* Technologies - Using simplified static list if not in translation or mapping hardcoded */}
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
                    {t.projects.viewProject}
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
