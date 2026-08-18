# Dark theme: black background, orange + white type

Move the whole site from the cream/orange look to a black canvas with white body text and orange as the single accent — applied globally so every page (Home, Work, Case Study, About, Contact, 404, Style Guide) changes at once.

## Look and feel

- Background: near-black (#0D0D0D-ish), same tone as the current hero so the hero stops being an odd dark island.
- Primary text: warm white for headings and body copy.
- Secondary text: muted grey-white for supporting paragraphs and metadata.
- Accent: the existing orange, used for rotating headline text, links, metric values, eyebrows, and the primary button.
- Borders: subtle white-at-low-opacity hairlines instead of light beige.

## How it's done

1. `src/index.css` — rewrite the color tokens in `@theme` and the `body` rule:
   - `--color-background` → near-black, `--color-foreground` → warm white
   - `--color-muted-foreground` → mid grey, `--color-border` → white at low opacity
   - `--color-primary` stays orange, `--color-primary-foreground` → near-black (so orange buttons read correctly)
   - `--color-card` / `--color-popover` → slightly lifted black, with white foregrounds
   - `--color-secondary`, `--color-accent`, `--color-input`, `--color-ring` retuned for dark
2. `src/components/sections/HeaderSection.tsx` — drop the hardcoded `bg-[#141414]` / `text-[oklch(...)]` and the `text-white/80`, `text-white/60`, `border-white/20` overrides in favor of semantic tokens (`bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`), keeping the avatar backdrop matched to the new page background.
3. Sweep the remaining hardcoded light-theme leftovers in components (e.g. the credential badge's `bg-background text-foreground`, hover states like `hover:bg-foreground hover:text-background`) so buttons and hovers stay legible on black — buttons become orange fill or white outline with orange hover.
4. Verify contrast on each route in the browser and confirm no white-on-white or black-on-black states remain.

No content, data, or layout changes.
