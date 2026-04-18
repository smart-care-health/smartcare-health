

## Plan: Remote Diagnostic Devices category page

### New file: `src/pages/RemoteDiagnosticDevices.tsx` — `/solutions/remote-diagnostic-devices`

A concise category-level gateway page following the same design pattern as `HigoDevice.tsx` and `SmartcareLabs.tsx` (Header, Footer, gradient badge, `font-heading`, `container mx-auto px-6`, `py-20` spacing, Card/Button).

**Sections (exact provided copy):**

1. **Breadcrumb** — `Solutions → Remote Diagnostic Devices`
2. **Hero** — gradient badge "🩺 Remote Diagnostic Devices", title, subtitle, body paragraphs. Single CTA: "Explore Higo Device and App" → `/solutions/higo-device`.
3. **What We Do** — headline + intro + 4-item bullet list (data capture, remote review, workflow efficiency, expertise access) with accent dots. Optional small icon row (Activity, Stethoscope, Network, Users).
4. **Our Current Deployment** — featured Card highlighting Higo Device and App, with a "Now Available" badge, brief description, and the CTA "Explore Higo Device and App" → `/solutions/higo-device`.
5. **Looking Ahead** — headline + content. 3-card grid teasing future categories (Imaging, Laboratory Diagnostics, Point-of-Care Tools) with subtle "Coming Soon" treatment using icons (Scan, FlaskConical, Activity).
6. **Final CTA banner** — gradient banner matching existing patterns with closing line and two CTAs: "Explore Higo Device and App" (`/solutions/higo-device`) and "Contact Us" (`/#contact`).

### Routing note
The user's brief shows `/higo-device-and-app`, but the existing Higo page lives at `/solutions/higo-device`. All "Explore Higo" CTAs will use `/solutions/higo-device` to keep links consistent and avoid breakage.

### Modified files

**`src/App.tsx`**
- Import `RemoteDiagnosticDevices`
- Add `<Route path="/solutions/remote-diagnostic-devices" element={<RemoteDiagnosticDevices />} />` before catch-all.

**`src/components/Solutions.tsx`**
- Update the existing "Remote Diagnostic Devices" card so its "Learn More" link points to `/solutions/remote-diagnostic-devices` (the new category page) instead of jumping straight to the Higo product page. The Higo card remains accessible from the category page and from the header dropdown.

**`src/components/Header.tsx`**
- Add a new entry in the Solutions dropdown (desktop + mobile sub-items) for "Remote Diagnostic Devices" → `/solutions/remote-diagnostic-devices`, placed above the Higo Device sub-link to reflect category → product hierarchy. Icon: `Stethoscope` (Higo can shift to `Activity` or keep Stethoscope; will pick distinct icons to avoid duplication — Stethoscope for the category, `Smartphone` or `HeartPulse` for Higo).

### Design notes
- Mobile-first; grids collapse to single column.
- Reuse `Card` with `border-0 bg-white/50 backdrop-blur-sm` and gradient buttons via `variant="hero"`.
- Future-deployment cards rendered with muted styling + "Coming Soon" pill, consistent with existing solution status badges.
- No new assets required.

