/**
 * Portfolio Type Definitions
 * TypeScript interfaces for portfolio data structures
 */

export interface PersonalInfo {
  name: string;
  title: string;
  location: { city: string; country: string };
  website: string;
  email: string;
  phone?: string;
  avatar: string;
  bio: string;
  skills: string;
  eyebrow: string;
  headlinePrefix: string;
  headlinePhrases: string[];
  tagline: string;
  /** Short "Product thinker. Storyteller." style triplet shown under the headline */
  taglineTriplet: string;
  /** Floating credential badge pinned to the hero photo */
  credentialBadge: string;
}

export interface Differentiator {
  id: string;
  title: string;
  description: string;
  icon: "target" | "brain" | "zap";
}

export interface UpdateCard {
  id: string;
  eyebrow: string;
  kicker: string;
  title: string;
  description: string;
  linkLabel: string;
  /** Internal route (e.g. /work) or absolute URL */
  href: string;
  icon: "briefcase" | "rocket" | "compass";
}

export interface CaseStudySection {
  heading: string;
  body: string[];
}

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  timeframe: string;
  summary: string;
  metrics: CaseStudyMetric[];
  sections: CaseStudySection[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  media?: string;
  current: boolean;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  url?: string;
  /** Public verification/certificate link */
  liveUrl?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: "active" | "archived";
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
  location: string;
  details?: string;
}

export interface SocialLink {
  platform: string;
  username?: string;
  url: string;
}
