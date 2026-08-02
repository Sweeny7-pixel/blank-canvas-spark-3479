## Goal

Replace all sample "Sarah Martinez" content with Sweeny Santo Silvester's resume data, add Projects and Certifications sections, and a Download Resume button.

## 1. Content replacement (`src/data/portfolio-data.ts`)

**Personal info**
- Name: Sweeny Santo Silvester
- Title: Product Manager (Ex-Salesforce Senior Technical Lead)
- Location: Chennai, Tamil Nadu, India
- Email: sweenyjobs076@gmail.com, phone +91 99620-19091
- Bio: from resume summary — 12+ years, Salesforce technical lead to PM transition, enterprise healthcare, Agile delivery, global teams of 5–20, C-suite engagement
- Skills: Agile (Scrum/Kanban), Product Strategy & Roadmapping, Product Development Lifecycle, UX/UI Principles, Data Analysis & Analytics, User Research & Customer Insights, Stakeholder Management, Cross-Functional Leadership, Backlog & Sprint Management, Project Management

**Experience** (2 entries, full bullet detail from resume)
- Lead QA Analyst — IQVIA, Bangalore, Apr 2019 – Present (current)
- Senior Test Engineer — CGI India Pvt Ltd, Bangalore, May 2013 – Apr 2019

**Education**
- B.E. Electrical & Electronics — Jaya Institute of Technology

**Social links**
- LinkedIn: linkedin.com/in/sweenysweakin
- GitHub (HabitifyMe repo) — I'll use the profile link once known; otherwise link the project repo only

**Removed**
- All `writing` and `speaking` sample data plus their unused types/timeline components (`WritingTimeline.tsx`, `SpeakingTimeline.tsx`) and type entries.

## 2. New sections

**Projects** — new `ProjectsSection.tsx`, rendered after Work
- HabitifyMe: AI fitness coach for busy Indians; adaptive weekly workout and diet plans that adjust to missed sessions, progress, injuries, allergies instead of static plans
- Tech stack: Lovable, GitHub, Claude, ChatGPT
- GitHub + Live Demo links (placeholders until you share the URLs)

**Certifications** — small block appended inside the Education section
- AI-First Product Management, Airtribe, 2026 (certificate link placeholder)

**Download Resume** — button in the Contact section
- The PDF is registered as a CDN asset pointer (`src/assets/...asset.json`) and linked with `download`

## 3. Header layout

Keep the current three-column header but shift the photo right of center and pull the full name to the left: name (first + last stacked, left-aligned) occupies the left ~55%, photo the right ~45%. Placeholder image stays until you upload a real photo. Title and year keep their positions.

## 4. Metadata & nav

- `index.html`: title "Sweeny Santo Silvester — Product Manager", matching meta description, og/twitter tags
- Navigation: add Projects link, remove any Writing/Speaking entries

## Notes

Placeholders needed from you later: profile photo, HabitifyMe GitHub + live demo URLs, certificate URL. Everything else comes straight from the resume.
