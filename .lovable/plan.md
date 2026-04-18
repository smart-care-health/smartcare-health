

## Plan: Conversion-optimized Smartcare Labs page redesign

Full rewrite of `src/pages/SmartcareLabs.tsx` to a more focused, conversion-driven layout. Brand logo added as an asset.

### New asset
- Copy `user-uploads://Smartcare_Labs_powered_by_BloodGPT_logo.jpeg` → `src/assets/smartcare-labs-logo.jpeg` (imported as ES module).

### Page structure (`src/pages/SmartcareLabs.tsx` — rewritten)

1. **Hero** (centered, soft white/gradient background)
   - Logo image centered above headline, max-width ~`360px`, on a `bg-white` rounded panel with generous padding so the logo's blue/teal renders cleanly against the page.
   - H1: "Smartcare Labs"
   - Subheadline: "AI-Powered Diagnostic Intelligence for Modern Healthcare"
   - Descriptor paragraph (powered-by-BloodGPT positioning).
   - Two CTAs above the fold:
     - Primary `variant="hero"` → "Request Access to Smartcare Labs" → `/?inquiry=labs#contact`
     - Secondary `variant="outline"` → "Partner with Smartcare" → `/?inquiry=labs#contact`

2. **Why Smartcare Labs** (5-card grid, 2-3 cols responsive)
   - Cards: BloodGPT-powered, Faster Turnaround, Diagnostic Accuracy, Scalable, Built for African Contexts.
   - Icons: `Brain`, `Zap`, `Target`, `Network`, `Globe2`.

3. **How It Works** ("From Data to Decision — In Minutes")
   - 4-step horizontal numbered flow with connecting visual on desktop, stacked on mobile.
   - Icons: `Upload`, `Cpu`, `FileText`, `Stethoscope`.

4. **What This Means for Your Organization** (5 benefit bullets with check icons in a clean two-column list).

5. **Who It's For** (5 use-case cards in responsive grid)
   - Diagnostic Labs, Hospitals & Clinics, Telemedicine Platforms, Health Insurance, Public Health Programs.
   - Icons: `FlaskConical`, `Hospital`, `Video`, `ShieldCheck`, `Building2`.

6. **Strategic Positioning** — short, centered single-paragraph statement on muted background.

7. **Final CTA banner** — gradient banner ("Ready to Transform Diagnostic Delivery?") with both CTAs (same routing as hero).

### CTA routing (already supported)
All CTAs use `<Link to="/?inquiry=labs#contact">`. `Contact.tsx` already:
- Reads `?inquiry=labs` and pre-selects the "Request Access to Smartcare Labs" dropdown option (line 99-105).
- Renders at `#contact` and `Index.tsx` smooth-scrolls to the hash.

No changes needed to `Contact.tsx`, `Index.tsx`, `Header.tsx`, or routing.

### Removed sections (vs current page)
- "A smarter way to support lab result interpretation"
- "What Smartcare Labs does"
- "Why this matters"
- "Built for practical use in our context"
- "Why partner with Smartcare"
- "Building practical, scalable health technology" final card

These are replaced by the leaner conversion-focused structure above. Tone shifts from explanatory to confident/outcome-focused. No mention of pilot or testing.

### Design notes
- Maintain existing tokens: `font-heading`, `container mx-auto px-6`, `py-20`, `Card border-0 bg-white/50 backdrop-blur-sm`, primary→accent gradient text and buttons.
- Logo: `<img>` with `alt="Smartcare Labs powered by BloodGPT"`, `loading="eager"`, sized via Tailwind (`max-w-sm w-full h-auto`), inside a clean `bg-white rounded-2xl shadow-sm p-6` container; no decorative clutter behind it.
- Subtle hover transitions on cards (already standard).
- Mobile-first; all grids collapse to single column.

