## Plan: Reshape Smartcare Labs hero CTA row

Edit `src/pages/SmartcareLabs.tsx` hero section only.

### New button hierarchy
1. **Primary** (`variant="hero"`, `size="lg"`): "Request Access to Smartcare Labs" → `/?inquiry=labs#contact`
2. **Secondary** (`variant="outline"`, `size="lg"`): "See How Smartcare Labs Works" → `/solutions/smartcare-labs/how-it-works` — promoted from muted text link to equal-weight outline button beside the primary, with `ArrowRight` icon.
3. **Tertiary** (`variant="link"`, muted): "Partner with Smartcare" → `/?inquiry=labs#contact` — demoted to a small centered text link below the button row.

### Markup change
Replace the current two-button `flex-col sm:flex-row` row + separate muted link block with:
- One `flex-col sm:flex-row gap-4 justify-center` row containing the new primary (hero) + secondary (outline) buttons.
- One small centered "Partner with Smartcare" link beneath it (`mt-6`, `variant="link"`, `text-muted-foreground`).

### Out of scope
No changes to the final CTA banner, other sections, the how-it-works page, or routing. Same tokens, no new assets.