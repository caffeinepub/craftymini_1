# Specification

## Summary
**Goal:** Fix broken gallery/category images by ensuring required generated assets exist in the public folder, update frontend image paths to those assets, and deploy Draft Version 6.

**Planned changes:**
- Verify that required user-uploaded images referenced by the UI exist under `frontend/public/assets/generated/`, and copy/move missing files from the repository root upload directory into that folder.
- Update frontend image `src` references (including `frontend/src/components/CategoryGrid.tsx`) to use the correct public paths under `/assets/generated/...` and remove/replace any references to missing files.
- Update `frontend/public/draft-version.txt` to `Draft Version 6` and deploy Draft Version 6 after verifying images load correctly.

**User-visible outcome:** The deployed site (Draft Version 6) shows the category grid/gallery images correctly (no broken images), including Baby Booties and Hair Crochet Clips, with no image-load 404s.
