

## Plan: Replace VSL and Hero Videos

The user uploaded two .MOV files to replace the current videos:
- **IMG_7959.MOV** → VSL video (`public/videos/vsl-main.mp4`)
- **IMG_7957.MOV** → Hero video (`public/videos/hero-intro.mp4`)

### Steps

1. **Copy IMG_7959.MOV** to `public/videos/vsl-main.mp4` (replacing current VSL video)
2. **Copy IMG_7957.MOV** to `public/videos/hero-intro.mp4` (replacing current hero video)
3. **Update video source tags** in `HeroSection.tsx` and `VSLSection.tsx` to use `video/mp4` type (MOV files with H.264 codec work in browsers with mp4 source type, but if needed we'll add `video/quicktime` as fallback)

No other code changes needed — the file paths remain the same.

