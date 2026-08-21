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
  bio: "Enterprise SaaS Product Leader in Transition | 12+ Years Driving Adoption & Customer Success\n\nLead QA Analyst turning Product Manager—combining technical rigor with customer obsession to solve enterprise problems.\n\nProduct work & impact:\n\nIncreased Sales Cloud adoption from 30% to 65% by evaluating customer demand against engineering tradeoffs and owning feature prioritization end-to-end.\n\nReduced onboarding friction from 3 months to 2 weeks through product strategy that accelerated time-to-value—directly supporting $2M+ in contract renewals and expansion.\n\nDelivered feature releases and POCs by aligning engineering, sales, and customer stakeholders around shared roadmap priorities.\n\nDrove platform reliability improvements that reduced SLA breaches by 30% and influenced 10+ product enhancements based on customer pain points.\n\nBuilt adoption strategies across 10+ US healthcare accounts—translating technical constraints into user-centric solutions.\n\nHow I think as a PM:\n\nI lead discovery from the customer backward. My QA and technical background means I understand what customers actually struggle with—not what they say they want. I obsess over reducing friction in every workflow, connect the dots between customer problems and business outcomes, and translate ambiguity into actionable requirements. I rally engineering and customer-facing teams around a shared vision, then relentlessly own execution clarity.\n\nWhat I'm targeting:\n\nProduct Manager or Senior Product Manager roles in enterprise B2B SaaS—particularly technical platforms, healthcare, or complex SaaS contexts where deep customer empathy, stakeholder alignment, and data-driven prioritization drive impact.\n\nProof of commitment:\n\nRecently completed AI-First Product Management certification and earned Certified Scrum Product Owner (CSPO)—formalizing what I have been doing operationally for years.",
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
      "Redesigned client onboarding for a global Healthcare/Life Sciences Salesforce Sales Cloud deployment (5,000+ users), cutting time-to-go-live from 8–10 weeks to 1 week (89% faster) by building a reusable, standard-platform accelerator for the speaker-event management lifecycle. One build now serves 4 client engagements, recovering ~32 weeks of consulting capacity and an estimated $2.68M+ in annual adoption ROI.",
    metrics: [
      { label: "Adoption", value: "30% → 60-70%" },
      { label: "Release cycles to ship", value: "1-2" },
      { label: "Renewals influenced", value: "$2M" },
    ],
    sections: [
      {
        heading: "Context",
        body: [
          "A leading Healthcare/Life Sciences org had Salesforce as its platform of record across 5,000+ global users. Their core commercial process — managing speaker events, from scheduling and engagement through honoraria payment and expense settlement — sat on this platform, but every new client onboarding meant rebuilding the same configuration from scratch.",
        ],
      },
      {
        heading: "Problem",
        body: [
          "Each client engagement required 8–10 weeks of setup before reps could work in the system. That cost ~40 weeks of senior consulting time per year, with a 0% reuse rate across engagements. Financial settlements (honoraria, reimbursements) were handled manually in spreadsheets outside Salesforce — creating compliance risk and no audit trail. Poor UX led reps to abandon the platform for manual workarounds.",
        ],
      },
      {
        heading: "Research",
        body: [
          "Root-cause analysis surfaced four compounding issues: no standard, repeatable workflow existed for the event lifecycle; the out-of-box platform didn't match how commercial teams actually worked, so reps avoided it; financial processes lived off-platform in spreadsheets; and nothing built for one client was ever captured or reused for the next.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "Designed and delivered two end-to-end business process flows entirely within standard Salesforce capabilities — no custom development, no technical debt: \n\n Process 1 (Event Creation → Submission): event initiation, speaker engagement, budget approval workflow, compliance sign-off, real-time stakeholder visibility. \n\n Process 2 (Event Closure → Financial Settlement): outcome capture, in-platform honoraria calculation and invoicing, digital expense submission, payment tracking, closed audit record.",
        ],
      },
      {
        heading: "Decisions & trade-offs",
        body: [
          "Deliberately constrained the build to standard/declarative Salesforce features rather than custom code — trading some flexibility for zero technical debt and immediate reusability across future clients. This made the accelerator a durable commercial asset rather than a one-off client build.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "Onboarding time: 8–10 weeks → 1 week (89% faster) \n\n Reuse: 1 build → 4 client deployments (4×) \n\n Capacity recovered: ~32 weeks/year of senior consulting time \n\n Financial settlements: 100% moved on-platform (from fully manual) \n\n Modeled adoption ROI: ~$2.68M/year in rep productivity recovered + $108K/year in payment-processing savings across 4 clients, plus elimination of Sunshine Act compliance exposure from unaudited speaker payments",
        ],
      },
      {
        heading: "What I'd do next",
        body: [
          "Extend the accelerator into a formal reusable framework (versioned baseline + configuration guide) so clients can self-serve further customization without specialist dependency, and instrument usage analytics to quantify adoption depth per client, not just deployment count — turning '4 clients onboarded' into a measurable adoption curve.",
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
      "HabitifyMe is an AI fitness coach for busy Indian professionals (22–35) who've joined a gym before but repeatedly quit or restarted. It generates adaptive weekly workout and Indian-diet plans that adjust to real behavior — missed sessions, injuries, allergies — instead of static plans that reset to zero. Shipped through V1–V3 (onboarding, adaptive planning, India-friendly diet, and a Habit Formation Engine with XP/streaks/achievements), with a defined V4 roadmap and a GTM plan targeting local gyms and fitness communities.",
    metrics: [
      { label: "Stage", value: "Live prototype" },
      { label: "Built with", value: "Lovable, Claude, ChatGPT" },
      { label: "Users", value: "30+" },
    ],
    sections: [
      {
        heading: "Context",
        body: ["Target user: young Indian professionals who've restarted their gym routine 3+ times, relying on YouTube, friends, or generic fitness apps for guidance. Persona: Arjun, 26, Bengaluru IT professional — high intent, low consistency, quits after 3–4 weeks when work piles up."],
      },
      {
        heading: "Problem",
        body: ["Existing fitness apps fail this user for four reasons: they're too complicated (excessive tracking/logging), plans don't reflect Indian eating habits, plans don't adapt when users skip workouts, and key features sit behind paywalls. The core pattern: users need consistency, not more information, and current tools don't help them build the habit."],
      },
      {
        heading: "Research",
        body: ["13 user interviews surfaced three key insights: the "foreign food" problem (11 of 13 eat roti/dal/curd, not whey shakes) kills diet adherence faster than workout difficulty; gap detection — resuming vs. resetting after a missed day — is the core retention mechanic, not a nice-to-have, since users explicitly quit apps whose plans don't react to skipped days; and form anxiety is silent but near-universal (9 of 13 admitted copying others at the gym while unsure of correct form), making demo videos an affordable substitute for a personal trainer."],
      },
      {
        heading: "Approach",
        body: ["Built in three shipped phases: \n\n V1 — 10-field onboarding, a pre-filtered real exercise catalog (equipment/level/injury-mapped before the LLM sees anything, capped at 120 exercises), and a home dashboard with weekly review driving adaptive next-week generation. \n\n V2 — prompt-driven custom plans with a no-fabrication rule, 5-tab mobile navigation, a combined calendar view, 7-day India-friendly diet, and allergy-aware substitution. \n\n V3 (Habit Formation Engine) — a Trigger → Action → Reward → Investment → Repeat loop: one-tap check-in decoupled from full logging, a weekly (not global) streak count, an XP/level system with visible earn-rules, diet-logging XP, and a 12-badge achievement grid shown greyed-out rather than hidden."],
      },
      {
        heading: "Decisions & trade-offs",
        body: ["Several deliberate constraints: exercises are limited to a pre-filtered, verified catalog rather than open LLM generation, trading creative variety for guaranteed images/instructions and injury safety. Check-in was decoupled from full workout logging so low-effort days still feed the reward loop — rejecting the stricter 'only count a full log' option because it would punish exactly the low-motivation days the habit loop exists to rescue. Achievement badges are always visible (locked/greyed) rather than hidden-until-earned, trading surprise for a clear goal ladder suited to a beginner-heavy, restart-prone audience. Notification failures are surfaced explicitly rather than failing silently, since a silent block quietly breaks the entire trigger mechanism. Diet plans are generated weekly, not daily, trading some freshness for lower cost/latency and predictability."],
      },
      {
        heading: "Outcome",
        body: ["V1–V3 features are shipped and live (habitifyme.lovable.app), including the full check-in/XP/achievement loop. Several V3 habit-engine components remain partial — Habit Score composite, automated user segmentation/tier unlocks, Sunday Planning prompts, recovery flow for inactivity, and confirmed surprise-reward animations are defined but not yet wired to the UI. GTM is still at the validation stage, with a hypothesis (≥50% of signups from local/apartment gyms and fitness WhatsApp groups complete activation) and projected — not actual — funnel targets (100 gym members reached → 10 active after 7 days)."],
      },
      {
        heading: "What I'd do next",
        body: ["Close the partial V3 scope first — specifically the Habit Score and automated segmentation, since those are what turn XP data into a proactive retention signal rather than a passive display. Then validate the GTM hypothesis with real pilot data before investing in V4 (offline support, per-user timezone push scheduling, social/streak sharing). Longer-term, address the stated lowest-confidence risk: layering trainer-reviewed workout templates on top of AI-generated plans to catch mobility limitations and injury severity the AI can't fully assess alone."],
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
    name: "Certified Scrum Product Owner®",
    issuer: "Scrum Alliance",
    year: "2026",
    liveUrl: "https://certification.scrumalliance.org/accounts/1843190-sweeny-santo/certifications/2209942-cspo",
  },
  {
    id: "cert-2",
    name: "AI-First Product Management",
    issuer: "Airtribe",
    year: "2026",
    liveUrl:"https://www.airtribe.live/product-management/certificate/H8GKO5V0CMTC",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    username: "sweenysweakin",
    url: "https://linkedin.com/in/sweenysweakin",
  },
];
