## Goal

Replace the big name in the hero with an animated headline like the reference: a small "Lead QA Analyst → PM" pill, a large statement whose last phrase cycles, and a supporting paragraph. Your name stays in the sticky nav, so it isn't repeated.

## 1. Rotating headline component

New `src/components/RotatingText.tsx`:
- Cycles a list of phrases on a ~2.5s interval with a fade/slide transition (CSS transition on opacity + translate, no new dependency).
- Respects `prefers-reduced-motion` (shows the first phrase statically).
- Accessible: wrapper gets `aria-live="polite"`; the static part of the headline stays in a single `<h1>`.

## 2. HeaderSection rewrite

`src/components/sections/HeaderSection.tsx`:

```text
┌─────────────────────────────────────┬──────────────┐
│  ( ✦ Lead QA Analyst → PM )         │              │
│  I build products                   │    photo     │
│  that                               │  (rounded    │
│  matter to users     <-- rotating   │    top)      │
│                                     │              │
│  Product Manager and ex-Salesforce…  │              │
└─────────────────────────────────────┴──────────────┘
```

- Left column: pill badge, `<h1>` "I build products that" + rotating phrase, then a 2-3 line supporting line drawn from your bio.
- Right column: existing profile image, unchanged.
- Name removed from the hero; year line at the bottom kept.
- Styling uses existing semantic tokens and the current Cormorant Garamond type scale — no hardcoded colors, so it stays consistent with the rest of the site rather than copying the reference's dark/blue theme. The rotating phrase gets the accent/primary token for contrast.

## 3. Content (`src/data/portfolio-data.ts`)

Add to `personalInfo`:
- `eyebrow`: "Lead QA Analyst → PM"
- `headlinePrefix`: "I build products that"
- `headlinePhrases`: ["matter to users", "solve real problems", "ship on time", "scale to millions"]
- `tagline`: short 2-sentence version of your bio for the hero

Types updated in `src/types/portfolio.ts`.

## Notes

Tell me if you'd rather the phrases be typewriter-typed character by character (as in the video's cursor look) instead of a fade swap.
