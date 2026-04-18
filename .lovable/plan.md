
## Plan: Add Smartcare Labs Solution Page

### New file: `src/pages/SmartcareLabs.tsx`
A single, well-structured page at route `/solutions/smartcare-labs` using the existing Smartcare design system (Header, Footer, gradient badges, `font-heading`, `container mx-auto px-6`, `py-20` spacing, Card/Button components).

**Page sections** (using exact provided copy):
1. **Hero** — gradient badge "🧪 Smartcare Labs", headline, subheadline, intro paragraphs, two CTA buttons (Request Access, Partner With Us)
2. **A smarter way to support lab result interpretation** — intro text + bullet list with accent dots
3. **What Smartcare Labs does** — descriptive text + bullet list of supported users
4. **Who Smartcare Labs is for** — 4-card grid (Laboratories, Hospitals & Clinics, Healthcare Professionals, Institutional Partners) with icons (FlaskConical, Hospital, Stethoscope, Building2)
5. **Why this matters** — narrative + benefit bullets
6. **Built for practical use in our context** — narrative + bullets, **mid-page CTA row** (Request Access, Partner With Us)
7. **Why partner with Smartcare** — narrative + bullets
8. **Final CTA section** — gradient banner (matching existing Contact CTA style) with closing paragraph and both CTA buttons

### CTA behavior
All "Request Access" and "Partner With Us" buttons use `<Link to="/#contact">` from react-router-dom. After navigation to `/`, a small `useEffect` on `Index.tsx` detects the `#contact` hash and smooth-scrolls to the contact section. "Request Access" buttons append `?inquiry=labs` so the contact form pre-selects the new dropdown option.

### Modified files

**`src/App.tsx`**
- Import `SmartcareLabs`
- Add route `<Route path="/solutions/smartcare-labs" element={<SmartcareLabs />} />` before catch-all

**`src/pages/Index.tsx`**
- Add `useEffect` reading `window.location.hash` — if `#contact`, smooth-scroll to the `#contact` element on mount

**`src/components/Contact.tsx`**
- Add new dropdown option: `<SelectItem value="smartcare-labs">Request Access to Smartcare Labs</SelectItem>` (placed appropriately within existing list, all other options unchanged)
- Add `useEffect` that reads `?inquiry=labs` from the URL search params and calls `setValue("inquiryType", "smartcare-labs")` to pre-select it

**`src/components/Solutions.tsx`**
- Add a 4th solution card for "Smartcare Labs" (icon: FlaskConical, status: "Now Available" or similar) with a "Learn More" link routing to `/solutions/smartcare-labs`. Grid changes from `lg:grid-cols-3` to `lg:grid-cols-2 xl:grid-cols-4` to fit cleanly, OR keep 3-col and add Smartcare Labs as the new card replacing/supplementing — final approach: switch to `lg:grid-cols-2` for 4 cards displayed as 2x2 on large screens for a cleaner balanced layout.

### Design notes
- Mobile-first, single-column on small screens, multi-column grids at `md:`/`lg:` breakpoints
- Reuse existing patterns: gradient text accents, Card with `border-0 bg-white/50 backdrop-blur-sm`, primary→accent gradient buttons via `variant="hero"`
- Icons from lucide-react (FlaskConical, Microscope, Building2, Stethoscope, Hospital, Users, CheckCircle2, ArrowRight)
- CTAs visible at: Hero, mid-page (after Section 5), Final section
