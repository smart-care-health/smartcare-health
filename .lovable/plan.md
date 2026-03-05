

## Plan: Embed Brevo Newsletter Form via iframe in Footer

### What changes

**`src/components/Footer.tsx`**
- Remove all Supabase newsletter logic: `useState`, `handleNewsletterSubmit`, `supabase` import, `useToast` import, `Loader2` import
- Replace the current `<form>` block inside the "Stay Updated" card with an `<iframe>` pointing to:
  ```
  https://27493079.sibforms.com/serve/MUIFAPs1FPaxIFkUM6FMMihidGY71t9STqvrauFDIzaY3mRzPoMOspnBtXVxJl3OztKC-b3XklYkkr3d1z0CUkAbgGe0EvS7OSkyhfgkL8td2Ibsl6cc2WlUpCOrGJmLvdh8s81pBg9pq0QDgJdpzM8dcPYUuLBZdQO5YRSIs7poIBzzjuv3fAE7awD8NDQwlzIsoverw5Dpp6xLbw==
  ```
- The iframe will be styled: `width: 100%`, `height: ~350px`, `frameBorder="0"`, `border: none`, with `allowFullScreen` and `scrolling="auto"`
- Keep the "Stay Updated" heading and description text above the iframe, or remove them if the Brevo form already includes its own heading (which it does based on the earlier snippet — "Stay Updated" + "Get the latest news...")

Since the Brevo form already contains its own "Stay Updated" title and description, we'll remove the duplicate heading/description from the footer card and just show the iframe inside the styled container.

### Files modified
1. **`src/components/Footer.tsx`** — Remove Supabase logic, embed iframe

