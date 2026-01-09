// Shared TypeScript types and interfaces

// Common component props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Section data types
export interface ProjectData {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
}

export interface ExperienceData {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface SkillData {
  name: string;
  level: number;
}

// Animation and UI types
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
}

export interface ThemeConfig {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
}

