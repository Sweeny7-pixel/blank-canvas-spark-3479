## Swap hero photo + fix image background

1. **Replace the profile asset** — upload the newly attached transparent headshot (`user-uploads://profile.png`) to Lovable Assets, overwriting `src/assets/profile.png.asset.json` with the new pointer. No other file needs to change; `portfolio-data.ts` already reads `profileAsset.url`.

2. **Fix the image backdrop** — in `src/components/sections/HeaderSection.tsx`, change the `<img>` className from `bg-muted` to `bg-[#141414]` so the transparent PNG blends into the dark hero instead of showing a light box.

No other content, layout, or data changes.
