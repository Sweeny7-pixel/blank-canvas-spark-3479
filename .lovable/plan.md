## Remove the avatar arch in the hero

In `src/components/sections/HeaderSection.tsx`, the profile image is shaped like a rounded-top silhouette/arch via `rounded-t-[160px]`. Remove that rounded-top shape so the image is a plain rectangle sitting flat on the `#141414` hero background.

1. In the hero `<img>` className, drop `rounded-t-[160px]` (keep `bg-[#141414]`, sizing, and aspect ratio).
2. Optionally add a small `rounded-lg` (or none) if a fully square corner is too harsh — default to no rounding unless you prefer a subtle one.

No data, layout, or other section changes.
