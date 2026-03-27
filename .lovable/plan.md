

## Plan: Update Pricing Card Links

### Changes in `src/components/landing/PricingSection.tsx`

1. Add a `link` property to each plan in the `plans` array:
   - Standard: `https://pay.kiwify.com.br/9ZGraEy`
   - Premium: `https://pay.kiwify.com.br/4MJ9Y3K`

2. Replace the hardcoded WhatsApp `href` in the CTA button with `plan.link`

