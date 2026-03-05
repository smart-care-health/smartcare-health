

## Plan: Embed Brevo Newsletter Form Natively in Footer

Now that I have the complete Brevo embed code, I can build a proper integration. The form submits to `https://27493079.sibforms.com/serve/MUIFAP...` via POST, includes an email field, opt-in checkbox, honeypot spam field, hidden locale field, and reCAPTCHA v3.

### Approach

Rather than injecting the raw Brevo HTML (which clashes with React's DOM and brings its own white-background styling), I will build a **native React form** that posts to Brevo's endpoint, styled to match the footer's dark theme perfectly.

### Changes

**1. `src/components/Footer.tsx`**
- Remove the current iframe embed
- Add a native React newsletter form component with:
  - Email input (dark-styled, white text, border matching footer)
  - Consent checkbox with privacy text
  - "Subscribe" button in teal accent color
  - Hidden honeypot field (`email_address_check`) and locale field
  - Form submits via standard POST to Brevo's sibforms URL
  - Success/error states handled via form submission response

**2. `index.html`**
- Add reCAPTCHA v3 script: `https://www.google.com/recaptcha/api.js?render=6LdTDoAsAAAAAChxrzLMFNj7Aj0enHnuVs5C04B7`
- Add Brevo's main form script: `https://sibforms.com/forms/end-form/build/main.js`
- Add Brevo's stylesheet: `https://sibforms.com/forms/end-form/build/sib-styles.css`

**3. `src/index.css`**
- Add scoped CSS overrides targeting `#sib-container` and `.sib-form` classes to force dark theme styling (transparent/dark backgrounds, white text, teal button, matching border colors)

### Technical detail

Since Brevo's `main.js` script handles form validation, reCAPTCHA token injection, and AJAX submission, the cleanest approach is to render the actual Brevo HTML structure (using `dangerouslySetInnerHTML` inside a wrapper div) and let Brevo's script manage it. The CSS overrides will restyle everything to match the dark footer. This ensures full Brevo functionality (validation messages, success/error panels, reCAPTCHA) without rebuilding their logic.

The wrapper will:
- Use `dangerouslySetInnerHTML` with the exact Brevo form HTML (minus the `<style>` and `<script>` tags, which go in `index.html`)
- Be wrapped in a container with scoped dark-theme class

