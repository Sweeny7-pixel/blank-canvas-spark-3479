## 1. Profile photo

Upload `Gemini_Generated_Image_...png` to Lovable Assets as `src/assets/profile.png.asset.json`, then import it in `HeaderSection.tsx` and replace `personalInfo.avatar` (`/placeholder.svg`) with the asset URL. Keeps the existing rounded-top framing and alt text.

## 2. New "What Sets Me Apart" section

New `src/components/sections/DifferentiatorsSection.tsx`, rendered in `src/pages/Index.tsx` directly after `AboutSection`.

```text
              What Sets Me Apart
   Not just another PM — a unique mix of skills and mindset.

 ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
 │ ◎            │ │ ✦            │ │ ⚡            │
 │ Outcomes     │ │ Product      │ │ 0→1          │
 │ First        │ │ Judgment     │ │ Execution    │
 │ copy…        │ │ copy…        │ │ copy…        │
 └──────────────┘ └──────────────┘ └──────────────┘
```

- Centered heading (`text-section`) + short subline, then a 3-column grid (1 col mobile, 3 on `md+`).
- Each card: lucide icon (`Target`, `Brain`, `Zap`) in a rounded tinted tile, `text-large` title, `text-body` copy.
- Styling stays in this site's light/serif design system using semantic tokens (border, muted-foreground, primary tint for icon tiles) — not the reference screenshot's dark blue theme. The screenshot is used for layout only.
- `id="differentiators"` so the scroll-spy hook keeps working; add a nav link only if you want one (say the word).

## 3. Content

Add a `differentiators` array to `src/data/portfolio-data.ts` with your three items (verbatim copy you supplied) plus an `icon` key, and a matching `Differentiator` type in `src/types/portfolio.ts`.
