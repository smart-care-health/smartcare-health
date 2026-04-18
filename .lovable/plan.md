

## Plan: Higo Device and App solution page

### New asset
- Copy `user-uploads://higo-device.png` → `src/assets/higo-device.png` (imported as ES module for bundling).

### New file: `src/pages/HigoDevice.tsx` — `/solutions/higo-device`
Single solution page following the SmartcareLabs pattern (Header, Footer, gradient badges, `font-heading`, `container mx-auto px-6`, `py-20` spacing, Card/Button).

**Sections (exact provided copy):**
1. **Breadcrumb** — `Solutions → Remote Diagnostic Devices → Higo Device and App` (small text, top of page below Header, links to `/#solutions`)
2. **Hero** — 2-column on desktop (text left / device image right), single column on mobile (image first). Image on a soft `bg-muted/50` rounded panel with subtle shadow + generous padding so the dark device background contrasts well. Optional caption "Higo Diagnostic Device and Modular Attachments". CTAs: "Learn About the Pilot" (→ `/higo-pilot`) and "Contact Us" (→ `/#contact`).
3. **What is the Higo System** — headline + intro + 3-card grid (Device / Mobile App / Physician Platform) with icons (Stethoscope, Smartphone, Monitor).
4. **The Higo Device** — 2-column with smaller reuse of the device image on the side, bullet list of capture types (heart/lung sounds, throat/ear images, basic exam data).
5. **The Higo System in Practice** — 4-step numbered workflow (similar visual to pilot HowItWorks steps but compact).
6. **Why This Matters** — headline + bullet list of benefits with check icons.
7. **Smartcare's Role** — headline + bullet list of local implementation responsibilities.
8. **Current Deployment (Pilot Link)** — accent gradient card with headline, content, and "Learn More About the Higo Pilot" CTA → `/higo-pilot`.
9. **Final Section** — gradient banner matching SmartcareLabs final CTA style with both buttons (Learn About the Pilot, Contact Us).

Icons used: `Stethoscope`, `Smartphone`, `Monitor`, `Activity`, `CheckCircle2`, `ArrowRight`, `MapPin`, `Users` (lucide-react).

### Modified files

**`src/App.tsx`**
- Import `HigoDevice` and add route `<Route path="/solutions/higo-device" element={<HigoDevice />} />` before catch-all.

**`src/components/Solutions.tsx`**
- Update the existing "Remote Diagnostic Devices" card:
  - Change `status: "Coming Soon"` → `status: "Now Available"`
  - Add `link: "/solutions/higo-device"` so it gets the "Learn More" button (same pattern as Smartcare Labs card).
  - Optionally update description to mention Higo as the first deployed solution within the category.

### Image handling
- Hero image rendered with `aspect-auto`, `max-h-[500px]`, `object-contain`, on a `bg-gradient-to-br from-muted/40 to-muted/70` rounded-2xl container with `p-8 lg:p-12` padding, `shadow-lg` for soft elevation. Full device + attachments visible, no cropping/stretching.
- Smaller reuse in Section 3 (~`max-h-72`) on similar muted panel, right column on desktop.

### Design notes
- All CTAs to contact use `<Link to="/#contact">` (existing scroll handler in `Index.tsx` already supports this).
- All CTAs to pilot use `<Link to="/higo-pilot">`.
- Navigation header reused — no nav changes per spec.
- Mobile-first: breadcrumb wraps; hero stacks image-first; grids collapse to single column.

