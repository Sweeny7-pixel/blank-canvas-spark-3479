# Render case-study paragraphs as bulleted lists

The Outcome text (and similar multi-line blocks) currently renders as one paragraph with blank lines. It should render as a list with a visible bullet marker per line.

## What changes

- In case-study sections, any paragraph containing blank-line separated lines is split into individual items.
- Each item is shown as a list row with a small round bullet marker (orange primary dot) aligned to the left of the text.
- Single-line paragraphs keep rendering as normal paragraphs; no content changes in the data file.
- This applies to every case study, so Approach, Outcome, and What I'd do next all get the same treatment.

Example result for Outcome:

```text
•  Onboarding time: 8–10 weeks → 1 week (89% faster)
•  Reuse: 1 build → 4 client deployments (4×)
•  Capacity recovered: ~32 weeks/year of senior consulting time
•  Financial settlements: 100% moved on-platform (from fully manual)
•  Modeled adoption ROI: ~$2.68M/year ...
```

## Move the hero CSPO badge to the opposite side with rounded edges

- The "CSPO" badge on the headshot moves from the bottom-left to the bottom-right, overhanging the right edge on large screens.
- The badge gets fully rounded (pill) edges instead of sharp corners.
- Colors, text, size, and shadow stay as they are.

## Technical detail

In `src/pages/CaseStudy.tsx`, inside the sections map: split each `paragraph` on `\n\n`, trim the parts, and if more than one part results, render a `<ul className="space-y-3">` where each `<li>` uses a flex row with a `h-2 w-2 rounded-full bg-primary` dot (plus `shrink-0` and top margin for alignment). Otherwise keep the existing `<p>`.

In `src/components/sections/HeaderSection.tsx` (line 58), the badge span classes change from `absolute bottom-4 left-0 lg:-left-8` to `absolute bottom-4 right-0 lg:-right-8`, and `rounded-full` is added.

