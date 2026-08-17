# Multi-page portfolio, inspired by the reference site

Borrow the reference site's information architecture — routed pages, hero CTAs, an activity strip, and dedicated case studies — while keeping your existing dark `#141414` hero, serif display type, and warm palette.

## 1. Multi-page navigation

Today everything lives on one scrolling page at `/`. Split it into routes:

- `/` — Home: hero, What Sets Me Apart, "What I'm Up To" strip, short CTA into Work
- `/work` — experience timeline, projects, and a case-study index
- `/work/:slug` — individual case study pages
- `/about` — full bio, education, certifications, skills
- `/contact` — existing contact block and resume download

Navigation becomes real links (Home / Work / About / Contact) with the active page highlighted, plus a mobile menu. Every existing section component is reused as-is — only its parent page changes.

## 2. Hero upgrades

Keep the rotating headline and photo. Add:

- A tagline triplet line under the headline, e.g. "Product thinker. Quality-first builder. Adoption driver." (final wording yours)
- Two CTAs: a filled "View My Work" → `/work` and an outlined "About Me" → `/about`
- A small floating certification badge card pinned to the bottom-left of the photo: "AI-First Product Management · Airtribe"

## 3. "What I'm Up To" strip

A three-card row below the hero on Home, each card with an icon, small eyebrow label, title, one-line summary, and a link:

- Featured Case Study → newest case study
- Currently Building → HabitifyMe
- Current Focus → free text

Cards are content-driven from the data file, so they update by editing text, not layout.

## 4. Case study pages

A reusable case study layout with a section spine you fill in:

```text
Title + role + timeframe + outcome metrics strip
Context  ->  Problem  ->  Research  ->  Approach
Decisions & trade-offs  ->  Outcome  ->  What I'd do next
```

Two case studies are scaffolded with clear `TODO` placeholder copy for you to write:

- `iqvia-workflow-adoption` — the approval-workflow gap and 30% → 60-70% adoption story
- `habitifyme` — the AI fitness coach 0→1 build

The Work page lists them as cards; the Home strip features the first one.

## Technical notes

- New routes added in `src/App.tsx` above the catch-all; new page files under `src/pages/`.
- `src/components/Navigation.tsx` switches to react-router `NavLink`s with an active state; it stays fixed and keeps the name + title lockup.
- New data shapes in `src/types/portfolio.ts` (`CaseStudy`, `UpdateCard`) and content in `src/data/portfolio-data.ts`, including new `PersonalInfo` fields for the tagline triplet, CTAs, and badge.
- New components: `src/components/sections/UpdatesSection.tsx`, `src/components/CaseStudyLayout.tsx`, `src/pages/Work.tsx`, `src/pages/About.tsx`, `src/pages/Contact.tsx`, `src/pages/CaseStudy.tsx`.
- Each page sets its own `<title>` and meta description; per-page canonical links and a single H1 per page.
- Scroll resets to top on route change.
- All styling uses existing tokens and text utilities — no new colors, no hardcoded hex beyond the hero's existing `#141414`.

Not copied from the reference: its light blue/indigo gradient hero, circular avatar, and blog section.
