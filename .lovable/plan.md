

## Plan: Replace Brevo Newsletter with Iframe Embed

**What**: Remove the script-based Brevo form (dangerouslySetInnerHTML + useEffect script loader) and replace it with the provided iframe embed.

**Changes in `src/components/Footer.tsx`**:
1. Remove the `useEffect` that loads the Brevo script (`sibforms.com/forms/end-form/build/main.js`)
2. Remove the `dangerouslySetInnerHTML` block containing the inline form HTML
3. Replace with the provided `<iframe>` element, styled responsively: `width: 100%`, `max-width: 100%`, `height: 305px`, `border: none`
4. Remove the `useEffect` import since it will no longer be needed

This is a straightforward swap — the iframe handles all form rendering and submission internally, so no script loading or custom HTML is required.

