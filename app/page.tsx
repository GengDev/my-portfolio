// ============================================================================
// Imports
// ============================================================================

import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { ProfessionalSummary } from "@/components/sections/ProfessionalSummary";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

// ============================================================================
// Constants
// ============================================================================

const HERO_DATA = {
  jobTitle: "Full-Stack Software Engineer",
  valueProposition: "Building scalable web applications and high-traffic E-commerce platforms with modern technologies",
  primaryButton: {
    text: "Learn More",
    href: "#summary"
  },
  secondaryButton: {
    text: "Contact Me",
    href: "#contact"
  }
};

const SUMMARY_DATA = {
  title: "Professional Summary",
  paragraphs: [
    "Mid-level Full-Stack Software Engineer with expertise in building scalable web applications and high-traffic E-commerce platforms. Proficient in Node.js, PHP, and Vue.js with a strong focus on system performance optimization and user experience.",
    "Experienced in modernizing legacy systems and translating complex business requirements into robust production-ready solutions. Skilled in developing complex sales and marketing engines, admin dashboards, and automated reporting systems.",
    "Passionate about performance optimization through techniques like Image Optimization, Lazy Loading, and Infinite Scrolling. Committed to delivering high-quality, maintainable code that drives business value."
  ]
};

// ============================================================================
// Component
// ============================================================================

export default function Home() {
  return (
    <div className="min-h-screen bg-white page-fade-in">
      <Header />

      <main>
        <div className="section-fade-in">
          <Hero {...HERO_DATA} />
        </div>
        <div className="section-fade-in">
          <ProfessionalSummary {...SUMMARY_DATA} />
        </div>
        <div className="section-fade-in">
          <About />
        </div>
        <div className="section-fade-in">
          <Experience />
        </div>
        <div className="section-fade-in">
          <Education />
        </div>
        <div className="section-fade-in">
          <Skills />
        </div>
        <div className="section-fade-in">
          <Projects />
        </div>
        <div className="section-fade-in">
          <Contact />
        </div>
      </main>
    </div>
  );
}
