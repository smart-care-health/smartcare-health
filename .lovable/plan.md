

## Plan: Fix cross-page navigation

### Issue 1 — Header nav doesn't work on sub-pages

In `src/components/Header.tsx`, both desktop and mobile nav items currently use anchor links with `e.preventDefault()` + `document.querySelector` to scroll. On `/solutions/smartcare-labs` and `/higo-pilot/*` pages, those section IDs don't exist, so clicks do nothing.

**Fix**: Make the nav items route-aware using `useLocation` + `useNavigate`:
- If the user is on `/`, keep current smooth-scroll behavior.
- If the user is on any other route, navigate to `/` with the section hash (e.g. `/#solutions`), then scroll once the homepage mounts.

Apply the same logic to both the desktop nav loop and the mobile menu loop.

### Issue 2 — Extend Index.tsx scroll handler to all hashes

`src/pages/Index.tsx` currently only scrolls when the hash is `#contact`. Generalise it so any hash (`#home`, `#solutions`, `#partnerships`, `#vision`, `#contact`) triggers a smooth scroll to the matching element on mount.

### Issue 3 — Sub-pages don't start at the top

When navigating from the homepage Solutions card to `/solutions/smartcare-labs` (or any pilot page), React Router preserves the previous scroll position, so the new page opens partway down.

**Fix**: Add a tiny `ScrollToTop` helper component in `src/App.tsx` that listens to `pathname` changes and calls `window.scrollTo(0, 0)` — but only when there is no hash (so hash-based scrolls on `/` still work).

```text
src/
├── App.tsx               ← add <ScrollToTop /> inside <BrowserRouter>
├── pages/Index.tsx       ← generalise hash scroll for all sections
└── components/Header.tsx ← route-aware nav links (desktop + mobile)
```

### Files modified
- `src/App.tsx` — add small `ScrollToTop` component mounted inside the router
- `src/components/Header.tsx` — route-aware navigation for desktop + mobile menus
- `src/pages/Index.tsx` — handle any section hash, not just `#contact`

No design, layout, or styling changes.

