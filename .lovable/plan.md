

## Plan: Embed Brevo Newsletter Form in Footer

### Approach

The best approach is to use an **iframe embed** from Brevo rather than injecting raw Brevo HTML/JS (which often conflicts with React's DOM management and brings its own heavy styling). This keeps the footer clean and avoids style clashes.

However, if you have a **Brevo embedded form HTML snippet**, we can also inject it using `dangerouslySetInnerHTML` inside a container div, with CSS overrides scoped to that container to match the footer's dark theme (white text, transparent/dark backgrounds, teal accent button).

### Recommended option: Brevo iframe embed

1. In Brevo, when creating your form, choose the **iframe** share option — this gives a self-contained `<iframe>` URL.
2. We replace the current custom newsletter form with an `<iframe>` pointing to your Brevo form, styled to fit seamlessly (no border, matching width, transparent background if Brevo supports it).

### Alternative: Raw HTML embed with style overrides

1. Replace the current form with a `div` that renders the Brevo HTML snippet via `dangerouslySetInnerHTML` + a `useEffect` to load any required Brevo scripts.
2. Add scoped CSS overrides in `index.css` targeting Brevo's form classes to force dark-theme styling (white text, dark inputs, teal submit button).

### Implementation steps

1. **Remove Supabase newsletter logic** from `Footer.tsx` — delete the `useState`, `handleNewsletterSubmit`, supabase import, toast import, and Loader2 import.
2. **Add Brevo embed** — replace the `<form>` block (lines 163-172) with either an iframe or a raw HTML container, depending on which embed type you provide.
3. **Style overrides** — if using raw HTML, add CSS in `index.css` to override Brevo's default form styles to match the footer (dark bg, white text, teal button).

### What I need from you

Please share your Brevo embed code (either the iframe snippet or the HTML snippet). I'll integrate it and apply style overrides to match the footer's look.

