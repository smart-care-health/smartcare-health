
## Plan: Smartcare Labs — "How It Works" enterprise deep-dive page

### New file: `src/pages/SmartcareLabsHowItWorks.tsx`

Route: `/solutions/smartcare-labs/how-it-works`

Same shell as existing solution pages (`Header`, `Footer`, `container mx-auto px-6`, `py-20`, `font-heading`, `Card border-0 bg-white/50 backdrop-blur-sm`, gradient `variant="hero"` buttons). Slightly more technical/architectural tone than the overview page.

Sections:

1. **Hero** — centered, more enterprise/architectural feel than overview hero (no logo block; instead an abstract systems/workflow visual built with CSS — concentric/node diagram using Tailwind shapes + lucide icons, no new asset required).
   - H1: "How Smartcare Labs Works"
   - Subtitle: "A deeper look at the platform behind AI-powered lab interpretation"
   - Body copy as supplied (Smartcare-led, BloodGPT as interpretation tech).
   - CTAs:
     - Primary `variant="hero"` → "Talk to Smartcare" → `/?inquiry=labs#contact`
     - Secondary `variant="outline"` → "Request Access" → `/?inquiry=labs#contact`
     - Tertiary text link (`variant="link"`) → "← Back to Smartcare Labs Overview" → `/solutions/smartcare-labs`

2. **What Smartcare Labs Does** — 5 feature cards (icons: `FileBarChart`, `MessageSquare`, `Stethoscope`, `Repeat`, `Sparkles`).

3. **How the Platform Works** — 4-step workflow rendered as a connected architecture diagram. Desktop: horizontal nodes with connector lines between cards (absolutely positioned thin gradient line + arrow icons). Mobile: vertical stack with vertical connectors. Icons: `Inbox`, `Database`, `Brain`, `Send`. Each card numbered 01–04 with title + descriptive paragraph as supplied.

4. **Why This Matters for Enterprise Labs** — 4 benefit blocks in 2-col grid. Icons: `FileCheck2`, `Users`, `TrendingUp`, `Award`.

5. **Deployment and Integration Options** — 4 cards. Icons: `Layout`, `Plug`, `ServerCog`, `GitBranch`.

6. **Data Flow, Privacy, and Control** — two-column layout: left = body copy; right = supporting bullet list with check icons. Muted background.

7. **Smartcare-Led Deployment in Africa** — emphasis section using gradient accent border / left-aligned narrative + bulleted leadership responsibilities. Closing line clarifies BloodGPT as interpretation tech, Smartcare leads regional initiative. Visually distinct background panel (`bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl`).

8. **Who This Page Is For** — 6-item audience grid (3 cols on desktop, 2 on tablet, 1 on mobile). Icons from lucide (`FlaskConical`, `Network`, `Hospital`, `Building2`, `Layers`, `Handshake`).

9. **Closing CTA banner** — same gradient banner pattern as overview page bottom CTA, with three buttons: "Talk to Smartcare", "Request Access", "Partner With Us" — all → `/?inquiry=labs#contact`. Headline + body as supplied.

### Edits

**`src/App.tsx`** — add route:
```tsx
<Route path="/solutions/smartcare-labs/how-it-works" element={<SmartcareLabsHowItWorks />} />
```
(import added)

**`src/pages/SmartcareLabs.tsx`** — add new tertiary CTA in hero, beneath the existing two buttons:
- Render below the `flex-col sm:flex-row gap-4` button row, as a small centered `variant="link"` (or ghost) button with arrow icon: "See how Smartcare Labs Works" → `/solutions/smartcare-labs/how-it-works`. Visually subordinate (muted color, no gradient, smaller text).

### Positioning & tone guardrails
- Smartcare Health Solutions framed as the lead throughout; BloodGPT only mentioned as interpretation technology in hero body + Section 6.
- No mention of pilot anywhere.
- Measured language in Section 5 (no regulatory overstatement).
- Copy used verbatim from the user's spec.

### Design notes
- Reuse existing tokens; no new colors, no new fonts, no new image assets.
- Workflow diagram (Section 2) built with Tailwind + lucide — gradient connector lines via `bg-gradient-to-r from-primary to-accent h-px` with chevron icons at junctions; on mobile collapses to vertical stack with `Plus`/`ArrowDown` connectors.
- Section 6 uses an asymmetric two-column layout to feel different from the overview page's symmetric grids.
- All grids mobile-first, collapsing to single column.

### No changes to
`Contact.tsx`, `Header.tsx`, `Solutions.tsx`, routing logic. `?inquiry=labs` is already wired to preselect the labs option.
