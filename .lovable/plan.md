

## Plan: Fix broken video references

### Problem
Two videos are broken because the code references filenames that don't exist:
- `HeroSection.tsx` → `/videos/hero-intro.mp4` (file missing)
- `VSLSection.tsx` → `/videos/vsl-main.mp4` (file missing)

The actual uploaded video files are:
- `public/videos/VSL- LANDING PAGE FINAL.mp4` (200MB) — likely the VSL
- `public/videos/Vídeo 1 -landing page (horizontal).mp4` (37MB) — likely the hero intro

### Changes

1. **HeroSection.tsx** — Update video source from `/videos/hero-intro.mp4` to `/videos/Vídeo 1 -landing page (horizontal).mp4`

2. **VSLSection.tsx** — Update video source from `/videos/vsl-main.mp4` to `/videos/VSL- LANDING PAGE FINAL.mp4`

### Note
If the file assignments above are swapped (wrong video in wrong section), they can be easily switched after testing.

