"use client";

// ============================================================================
// Imports
// ============================================================================

import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { IntroOverlay } from "@/components/layout/IntroOverlay";
import { Hero } from "@/components/sections/Hero";
import { ProfessionalSummary } from "@/components/sections/ProfessionalSummary";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { WorkExperienceHighlights } from "@/components/sections/WorkExperienceHighlights";
import { Contact } from "@/components/sections/Contact";

// ============================================================================
// Constants
// ============================================================================

// Data moved to translation files

// ============================================================================
// Component
// ============================================================================

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  // Prevent scrolling when intro is active
  useEffect(() => {
    if (showIntro) {
      document.body.classList.add('overflow-hidden-important');
    } else {
      document.body.classList.remove('overflow-hidden-important');
    }
    return () => document.body.classList.remove('overflow-hidden-important');
  }, [showIntro]);

  return (
    <div className="min-h-screen bg-white page-fade-in relative">
      {/* Intro Overlay */}
      {showIntro && <IntroOverlay onEnter={() => setShowIntro(false)} />}

      <Header />

      <main>
        <div className="section-fade-in">
          <Hero />
        </div>
        <div className="section-fade-in">
          <ProfessionalSummary />
        </div>
        <div className="section-fade-in">
          <About />
        </div>
        <div className="section-fade-in">
          <Experience />
        </div>
        <div className="section-fade-in">
          <WorkExperienceHighlights />
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
