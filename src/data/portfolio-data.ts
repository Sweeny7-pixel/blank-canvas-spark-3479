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
  Differentiator,
  UpdateCard,
  CaseStudy,
} from "@/types/portfolio";
import profileAsset from "@/assets/profile.png.asset.json";

// ===== Portfolio Data =====

export const personalInfo: PersonalInfo = {
  name: "Sweeny Santo Silvester",
  title: "Aspiring Product Manager",
  location: { city: "Chennai, Tamil Nadu", country: "India" },
  website: "",
  email: "sweenyjobs076@gmail.com",
  phone: "+91 99620 19091",
  avatar: profileAsset.url,
  bio: "Enterprise SaaS Product Leader in Transition | 12+ Years Driving Adoption & Customer Success

Lead QA Analyst turning Product Manager—combining technical rigor with customer obsession to solve enterprise problems.

Product work & impact:

Increased Sales Cloud adoption from 30% to 65% by evaluating customer demand against engineering tradeoffs and owning feature prioritization end-to-end.

Reduced onboarding friction from 3 months to 2 weeks through product strategy that accelerated time-to-value—directly supporting $2M+ in contract renewals and expansion.

Delivered feature releases and POCs by aligning engineering, sales, and customer stakeholders around shared roadmap priorities.

Drove platform reliability improvements that reduced SLA breaches by 30% and influenced 10+ product enhancements based on customer pain points.

Built adoption strategies across 10+ US healthcare accounts—translating technical constraints into user-centric solutions.

How I think as a PM:

I lead discovery from the customer backward. My QA and technical background means I understand what customers actually struggle with—not what they say they want. I obsess over reducing friction in every workflow, connect the dots between customer problems and business outcomes, and translate ambiguity into actionable requirements. I rally engineering and customer-facing teams around a shared vision, then relentlessly own execution clarity.

What I'm targeting:

Product Manager or Senior Product Manager roles in enterprise B2B SaaS—particularly technical platforms, healthcare, or complex SaaS contexts where deep customer empathy, stakeholder alignment, and data-driven prioritization drive impact.

Proof of commitment:

Recently completed AI-First Product Management certification and earned Certified Scrum Product Owner (CSPO)—formalizing what I have been doing operationally for years.",
  skills:
    "Agile (Scrum/Kanban), Waterfall, Product Development Lifecycle, Product Strategy & Roadmapping, UX/UI Design Principles, Project Management, Data Analysis & Analytics, User Research & Customer Insights, Problem Solving & Decision Making, Stakeholder Management, Cross-Functional Team Leadership, Backlog & Sprint Management",
  eyebrow: "Lead QA Analyst → PM",
  headlinePrefix: "I build products that",
  headlinePhrases: [
    "matter to users",
    "Scale to millions",
    "Ships on time",
  ],
  tagline:
    "Lead QA Analyst turned Product Manager — turning complex AI and platform capabilities into adoption, retention, and measurable business value.",
  taglineTriplet: "Product thinker. Quality-first builder. Adoption driver.",
  credentialBadge: "CSPO",
};

export const updates: UpdateCard[] = [
  {
    id: "update-1",
    eyebrow: "Featured Case Study",
    kicker: "Latest deep-dive",
    title: "Closing the approval-workflow gap in Sales Cloud",
    description:
      "How customer discovery surfaced a workflow gap affecting 30%+ of accounts — and how the fix lifted adoption to 60-70%.",
    linkLabel: "Read case study",
    href: "/work/iqvia-workflow-adoption",
    icon: "briefcase",
  },
  {
    id: "update-2",
    eyebrow: "Currently Building",
    kicker: "0→1 side project",
    title: "HabitifyMe — an adaptive AI fitness coach",
    description:
      "Weekly workout and diet plans that adapt to real behavior instead of resetting to zero after a missed session.",
    linkLabel: "See the build",
    href: "/work/habitifyme",
    icon: "rocket",
  },
  {
    id: "update-3",
    eyebrow: "Current Focus",
    kicker: "What's keeping me busy",
    title: "AI-first product practice",
    description:
      "Applying AI to discovery, user-story generation, and adoption analytics while completing AI-First Product Management at Airtribe.",
    linkLabel: "About me",
    href: "/about",
    icon: "compass",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "iqvia-workflow-adoption",
    title: "Closing the approval-workflow gap in Sales Cloud",
    subtitle:
      "Turning a recurring customer complaint into a prioritized release that doubled feature adoption.",
    role: "Lead QA Analyst / Product Partner, IQVIA",
    timeframe: "2019 — Present",
    summary:
      "TODO: Write a 3-4 sentence overview of the story — the account context, the gap you found, what you pitched, and the result.",
    metrics: [
      { label: "Adoption", value: "30% → 60-70%" },
      { label: "Release cycles to ship", value: "1-2" },
      { label: "Renewals influenced", value: "$2M" },
    ],
    sections: [
      {
        heading: "Context",
        body: [
          "TODO: Describe the product, the customer segment, and your role on the team.",
        ],
      },
      {
        heading: "Problem",
        body: [
          "TODO: What was breaking for users? Quantify the pain and who felt it.",
        ],
      },
      {
        heading: "Research",
        body: [
          "TODO: Discovery workshops with 5-10 enterprise and mid-market users — what you asked, what patterns emerged.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "TODO: The solution you proposed and how you framed it for product leadership.",
        ],
      },
      {
        heading: "Decisions & trade-offs",
        body: [
          "TODO: What you cut, deferred, or simplified to fit engineering effort and the release window.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "TODO: Adoption movement, retention/expansion impact, and how you measured it.",
        ],
      },
      {
        heading: "What I'd do next",
        body: [
          "TODO: The follow-on bets you'd make with more time or data.",
        ],
      },
    ],
  },
  {
    slug: "habitifyme",
    title: "HabitifyMe — an adaptive AI fitness coach",
    subtitle:
      "A 0→1 build for busy Indians: plans that adjust to missed sessions, injuries, and real progress.",
    role: "Solo product & build",
    timeframe: "2026",
    summary:
      "TODO: Write a 3-4 sentence overview — who it's for, the insight behind it, and where it stands today.",
    metrics: [
      { label: "Stage", value: "Live prototype" },
      { label: "Built with", value: "Lovable, Claude, ChatGPT" },
      { label: "Users", value: "TODO" },
    ],
    sections: [
      {
        heading: "Context",
        body: ["TODO: Why you started this and who you built it for."],
      },
      {
        heading: "Problem",
        body: ["TODO: The failure mode of static plans and what it costs users."],
      },
      {
        heading: "Research",
        body: ["TODO: Conversations, surveys, or your own behavior data."],
      },
      {
        heading: "Approach",
        body: ["TODO: How the adaptive plan engine works at a product level."],
      },
      {
        heading: "Decisions & trade-offs",
        body: ["TODO: Scope calls made to get to a usable v1."],
      },
      {
        heading: "Outcome",
        body: ["TODO: What you learned and any early usage signals."],
      },
      {
        heading: "What I'd do next",
        body: ["TODO: The next iteration you'd ship."],
      },
    ],
  },
];


export const differentiators: Differentiator[] = [
  {
    id: "diff-1",
    title: "Outcomes First",
    description:
      "Balanced customer demand against engineering effort to influence roadmap prioritization. Shipped a critical workflow enhancement within 1-2 release cycles, improving adoption from 30% to 60-70%.",
    icon: "target",
  },
  {
    id: "diff-2",
    title: "Product Judgment",
    description:
      "Lead QA Analyst-turned-PM who understands user pain points and empathy, technical constraints, and business goals. I make informed trade-offs, not compromises.",
    icon: "brain",
  },
  {
    id: "diff-3",
    title: "0→1 Execution",
    description:
      "Partnered with engineering and product leadership on effort estimation, release planning, and go-to-market for new features and POCs — taking ideas from concept to launch and adoption.",
    icon: "zap",
  },
];

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
    githubUrl: "https://github.com/Sweeny7-pixel/habitifyme-forReal",
    liveUrl: "https://habitifyme.lovable.app/",
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    institution: "Jaya Institute of Technology",
    degree: "Bachelor of Engineering",
    field: "in Electrical and Electronics",
    startYear: "2008",
    endYear: "2012",
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
