# Replace resume with the new upload

The user uploaded an updated resume: `Sweeny_Santo_Silvester_AIPM.pdf`. The "Download Resume" button on the Contact page still serves the older `Sweeny_Santo_Silvester.pdf`. Swap the file behind the button to the new one.

## Changes

1. **Replace the resume asset**
   - Upload `/mnt/user-uploads/Sweeny_Santo_Silvester_AIPM.pdf` to CDN storage and overwrite the existing pointer `src/assets/resume.pdf.asset.json`, so the contact page's link automatically serves the new PDF.
   - Delete the old `Sweeny_Santo_Silvester.pdf` from CDN storage so no stale copy lingers.

2. **Update the download filename**
   - In `src/components/sections/ContactSection.tsx`, change `download="Sweeny_Santo_Silvester.pdf"` to `download="Sweeny_Santo_Silvester_AIPM.pdf"` so the saved file matches the new resume.

No layout, styling, or content changes — the button stays exactly where it is.

## Verification

- Build passes (check build errors log).
- Click "Download Resume" in the preview and confirm the downloaded file is the new `Sweeny_Santo_Silvester_AIPM.pdf`.
