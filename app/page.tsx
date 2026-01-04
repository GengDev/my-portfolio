// ============================================================================
// Imports
// ============================================================================

import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { ProfessionalSummary } from "@/components/sections/ProfessionalSummary";
import { Experience } from "@/components/sections/Experience";
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
    "Full-Stack Software Engineer with expertise in building scalable web applications and high-traffic E-commerce platforms. Proficient in Node.js, PHP, and Vue.js with a strong focus on system performance optimization and user experience.",
    "Experienced in modernizing legacy systems and translating complex business requirements into robust production-ready solutions. Skilled in developing complex sales and marketing engines, admin dashboards, and automated reporting systems.",
    "Passionate about performance optimization through techniques like Image Optimization, Lazy Loading, and Infinite Scrolling. Committed to delivering high-quality, maintainable code that drives business value."
  ]
};

// ============================================================================
// Component
// ============================================================================

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Hero {...HERO_DATA} />
        <ProfessionalSummary {...SUMMARY_DATA} />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
