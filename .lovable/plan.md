# Don't bullet lead-in lines in case studies

In the HabitifyMe "Approach" section, the line "Built in three shipped phases:" is a lead-in sentence, but it currently gets an orange bullet dot like the items that follow it.

## What changes

- When a multi-line block's first line ends with a colon, it renders as a normal intro paragraph instead of a bullet item.
- The remaining lines still render as orange-dotted bullets.
- Applies to every case study section; no content changes in the data file.

Result:

```text
Built in three shipped phases:

•  V1 — 10-field onboarding, ...
•  V2 — prompt-driven custom plans, ...
•  V3 (Habit Formation Engine) — ...
```

## Technical detail

In `src/pages/CaseStudy.tsx`, inside the sections map: after splitting the paragraph on blank lines, if the first item ends with `:` and more items follow, render that first item in a `<p className="text-body leading-relaxed text-muted-foreground">` and build the `<ul>` from the remaining items. Everything else keeps the current behaviour.
