## Plan: Update Contact Form to Submit via Cloudflare Worker

### Changes — single file: `src/components/Contact.tsx`

1. **Remove Supabase import**, replace with Turnstile setup (reusing the same pattern from `Footer.tsx`):
  - Add `useEffect`, `useRef`, `useCallback` imports
  - Add Turnstile script loading + widget rendering with site key `0x4AAAAAACnuw5pi2ptqYO_p`
  - Add `turnstileToken` state, `turnstileRef`, `widgetIdRef`
2. **Add honeypot field** (`website`) — hidden input with `position: absolute; left: -5000px`, same pattern as Footer
3. **Update `onSubmit**` to:
  - Check for Turnstile token before submitting
  - POST to `https://smartcare-site-api.royal-union-6758.workers.dev/api/contact`
  - Send JSON body: `{ firstName, lastName, email, organization, inquiryType, message, website, turnstileToken }`
  - On success toast: "Thank you — your message has been received. We will respond shortly."
  - On error toast: "Message submission failed. Please try again."
  - Reset form + Turnstile widget on success
4. **Add Turnstile widget container** in the form, just before the submit button
5. **No layout/styling changes** — everything else stays identical