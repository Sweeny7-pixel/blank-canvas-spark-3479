/**
 * Portfolio Data
 * Single source of truth for all portfolio content
 */

import type {
  PersonalInfo,
  Experience,
  Project,
  Education,
  Certification,
  SocialLink,
} from "@/types/portfolio";

// ===== Portfolio Data =====

export const personalInfo: PersonalInfo = {
  name: "Sweeny Santo Silvester",
  title: "Product Manager",
  location: { city: "Chennai, Tamil Nadu", country: "India" },
  website: "",
  email: "sweenyjobs076@gmail.com",
  phone: "+91 99620 19091",
  avatar: "/placeholder.svg",
  bio: "Ex-Salesforce Senior Technical Lead and Consultant transitioning into Product Management, backed by Scrum Master and AI Product Management certifications and end-to-end platform transformations for enterprise healthcare accounts.\n\nI translate complex AI and technical capabilities into business value, build customer adoption roadmaps, and steer cross-functional Agile delivery. Over 12 years of experience managing global teams of 5-20 people and partnering with C-suite executives.\n\nI've led discovery workshops and executive engagements across US healthcare accounts, driving measurable platform adoption, customer retention, and expansion.",
  skills:
    "Agile (Scrum/Kanban), Waterfall, Product Development Lifecycle, Product Strategy & Roadmapping, UX/UI Design Principles, Project Management, Data Analysis & Analytics, User Research & Customer Insights, Problem Solving & Decision Making, Stakeholder Management, Cross-Functional Team Leadership, Backlog & Sprint Management",
  eyebrow: "Lead QA Analyst → PM",
  headlinePrefix: "I build products that",
  headlinePhrases: [
    "matter to users",
    "solve real problems",
    "ship on time",
    "scale to millions",
  ],
  tagline:
    "Product Manager and ex-Salesforce Senior Technical Lead with 12+ years across enterprise healthcare platforms. I turn complex technical capabilities into business value — outcomes over output, trade-offs over features.",
};

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "IQVIA",
    role: "Lead QA Analyst",
    location: "Bangalore, India",
    startDate: "2019-04",
    endDate: null,
    description:
      "Conducted customer discovery workshops with 5-10 enterprise and mid-market Sales Cloud users that identified a critical workflow and approval process gap affecting 30%+ of the customer base and blocking faster time-to-value. Pitched the workflow enhancement to product leadership, balancing customer demand against engineering effort, and influenced roadmap prioritization that shipped the feature within 1-2 release cycles, improving adoption from 30% to 60-70%. Managed enterprise account relationships, surfacing underutilized features and expansion opportunities through QBRs and discovery workshops that drove adoption roadmaps and $2M in contract renewals. Partnered with engineering and product leadership on effort estimations, release plans, and go-to-market for Sales Cloud releases and POCs. Managed a team of 3 and established SLA tracking and quality governance, while serving as primary L3 escalation for complex platform issues.",
    current: true,
  },
  {
    id: "exp-2",
    company: "CGI India Pvt Ltd",
    role: "Senior Test Engineer",
    location: "Bangalore, India",
    startDate: "2013-05",
    endDate: "2019-04",
    description:
      "Led quality assurance for Salesforce modules (Leads, Opportunities, Quotes), ensuring end-to-end test coverage across complex sales flows. Collaborated with development teams to validate IAM workflows and database integrations using Oracle SQL for secure provisioning and access control. Performed API testing via Postman to verify seamless data exchange across dealer management integrations. Managed regression suites in HP ALM in line with continuous delivery standards, and delivered an e-commerce initiative using Salesforce CPQ to launch new home security products to customers.",
    current: false,
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    name: "HabitifyMe",
    description:
      "An AI fitness coach that tells busy Indians exactly what to do this week and adapts when life gets in the way. It creates adaptive weekly workout and diet plans that adjust to real behavior - missed sessions, real progress, injuries, allergies - instead of static plans that reset to zero.",
    techStack: ["Lovable", "GitHub", "Claude", "ChatGPT"],
    status: "active",
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    institution: "Jaya Institute of Technology",
    degree: "Bachelor of Engineering",
    field: "in Electrical and Electronics",
    startYear: "",
    endYear: "",
    location: "Chennai, India",
  },
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    name: "AI-First Product Management",
    issuer: "Airtribe",
    year: "2026",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    username: "sweenysweakin",
    url: "https://linkedin.com/in/sweenysweakin",
  },
];
