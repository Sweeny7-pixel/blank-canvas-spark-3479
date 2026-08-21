# Move the CSPO badge to the opposite side with rounded edges

Small presentation change to the hero photo badge.

## What changes

- The "CSPO" badge currently sits at the bottom-left of the headshot (slightly overhanging on large screens). It moves to the bottom-right, overhanging the right edge on large screens instead.
- The badge gets fully rounded (pill) edges instead of sharp corners.
- Colors, text, size, and shadow stay as they are.

## Technical detail

In `src/components/sections/HeaderSection.tsx` (line 58), the badge span classes change from
`absolute bottom-4 left-0 lg:-left-8` to `absolute bottom-4 right-0 lg:-right-8`, and `rounded-full` is added.
