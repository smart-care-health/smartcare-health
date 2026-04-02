

## Plan: Build the Higo Pilot Microsite

This adds 6 new pages and a shared pilot navigation component to the existing Smartcare site, plus minor updates to the contact form dropdown and footer newsletter text.

### Architecture

```text
src/
├── components/
│   └── pilot/
│       ├── PilotNav.tsx          ← shared sub-navigation bar for pilot pages
│       └── PilotNewsletterCTA.tsx ← reusable newsletter signup section (reuses Footer pattern)
├── pages/
│   └── pilot/
│       ├── PilotLanding.tsx      ← /higo-pilot
│       ├── HowItWorks.tsx        ← /higo-pilot/how-it-works
│       ├── Participants.tsx      ← /higo-pilot/participants
│       ├── Partners.tsx          ← /higo-pilot/partners
│       ├── PilotUpdates.tsx      ← /higo-pilot/updates
│       └── PilotPrivacy.tsx      ← /higo-pilot/privacy
```

### New files

**1. `src/components/pilot/PilotNav.tsx`**
A compact horizontal sub-navigation component used on all pilot pages. Links: Overview, How It Works, For Participants, For Providers & Partners, Updates, Privacy Notice. Highlights the active page. Scrolls horizontally on mobile.

**2. `src/components/pilot/PilotNewsletterCTA.tsx`**
A self-contained newsletter signup section matching the existing Footer newsletter style (same Turnstile integration, honeypot field, endpoint, disclaimer text). Used on the Updates page and optionally others.

**3. `src/pages/pilot/PilotLanding.tsx`** — `/higo-pilot`
- Hero section with gradient background matching existing Hero pattern (headline, subtext, CTA buttons)
- "About the Pilot" section with descriptive text
- "Where" section with Lagos / Akwa Ibom cards + restriction note
- "Who This Is For" bullet list
- "Key Benefits" as icon cards (4 items)
- Partners note
- CTA buttons linking to How It Works, Participants, Updates, Contact (#contact on main site)
- Uses Header + Footer + PilotNav

**4. `src/pages/pilot/HowItWorks.tsx`** — `/higo-pilot/how-it-works`
- 5-step vertical timeline/step layout with numbered circles and icons
- "Why This Matters" closing section
- Header + Footer + PilotNav

**5. `src/pages/pilot/Participants.tsx`** — `/higo-pilot/participants`
- Sections: What to Expect, Is Participation Mandatory?, Who Can Participate, Types of Conditions Covered, Privacy note
- CTA button linking to /higo-pilot/privacy
- Header + Footer + PilotNav

**6. `src/pages/pilot/Partners.tsx`** — `/higo-pilot/partners`
- Overview text, engagement list, "What This Pilot Demonstrates" cards, "Opportunities for Collaboration" section
- CTA button linking to /#contact
- Header + Footer + PilotNav

**7. `src/pages/pilot/PilotUpdates.tsx`** — `/higo-pilot/updates`
- Intro text + grid of dated update cards (4 sample entries with date, title, summary, optional image placeholder)
- Easy to maintain: cards defined as a simple array at top of file
- PilotNewsletterCTA at bottom
- Header + Footer + PilotNav

**8. `src/pages/pilot/PilotPrivacy.tsx`** — `/higo-pilot/privacy`
- All sections from the spec (What We Collect, How Used, Who Has Access, Storage & Security, Your Rights, Voluntary Participation)
- Link to main /privacy-policy
- Header + Footer + PilotNav

### Modified files

**9. `src/App.tsx`**
Add 6 new routes before the catch-all:
- `/higo-pilot`
- `/higo-pilot/how-it-works`
- `/higo-pilot/participants`
- `/higo-pilot/partners`
- `/higo-pilot/updates`
- `/higo-pilot/privacy`

**10. `src/components/Contact.tsx`**
Update the Inquiry Type dropdown options to:
- Participation in the Higo Pilot (Lagos or Akwa Ibom only)
- Healthcare Provider or Facility Inquiry
- Government or Public Sector Inquiry
- Technology or Implementation Partnership
- Research or Academic Collaboration
- Investment or Strategic Partnership
- General Inquiry

**11. `src/components/Footer.tsx`**
The newsletter disclaimer text is already present. No change needed (already says "By subscribing, you agree to receive updates from Smartcare Health Solutions. You can unsubscribe at any time.").

### Design approach

- All pages use `<Header />` and `<Footer />` for consistency
- Reuse existing UI components: Card, Button, Badge, Separator
- Follow existing section patterns: gradient badges ("🏥 Higo Pilot"), gradient text headings, `container mx-auto px-6`, `py-20` section spacing
- Font families: `font-heading` (Poppins) for headings, Inter for body
- Color palette: primary (deep blue), accent (teal), muted backgrounds
- Mobile-first: single column on small screens, grid layouts on lg breakpoints
- No changes to main site navigation header per spec

