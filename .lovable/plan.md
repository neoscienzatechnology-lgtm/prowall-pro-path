## Plan: Update all CTA buttons to the Kiwify checkout link

### Goal
Replace every call-to-action button link on the landing page with the new Kiwify checkout URL: `https://pay.kiwify.com.br/gD2NoHl`.

### Files to edit
1. `src/components/landing/HeroSection.tsx` — main hero CTA button.
2. `src/components/landing/FloatingCTA.tsx` — mobile sticky bottom CTA.
3. `src/components/landing/WhatIsSection.tsx` — section CTA button.
4. `src/components/landing/MarketOpportunitySection.tsx` — section CTA button.
5. `src/components/landing/TransformationSection.tsx` — section CTA button.
6. `src/components/landing/TestimonialsSection.tsx` — results section CTA button.
7. `src/components/landing/FinalCTASection.tsx` — final CTA button.
8. `src/components/landing/OfferSection.tsx` — offer section CTA button.
9. `src/components/landing/PricingSection.tsx` — update the Kiwify `plan.link` from the old URL to the new URL.

### What will change
- Every button currently pointing to `https://wa.me/5521996203486?text=...` will be updated to `https://pay.kiwify.com.br/gD2NoHl`.
- The `PricingSection.tsx` plan object `link` will be updated from the old Kiwify URL to the new one.
- All `target="_blank"` and `rel="noopener noreferrer"` attributes remain unchanged.
- No other text or visual changes will be made.

### Verification
- Search the codebase for any remaining `wa.me` links inside button/CTA elements to confirm they are gone.
- Confirm the pricing link now equals `https://pay.kiwify.com.br/gD2NoHl`.
- Run a build/typecheck to ensure no syntax errors.