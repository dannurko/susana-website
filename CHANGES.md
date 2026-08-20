# Susana's Website — Change Log

Shared ledger between both machines. Every change to the site gets one entry:
**date · what changed · why / who asked · how far it shipped (draft vs live)**.
Read the latest entries before starting work so the two Claudes don't clobber each other.

---

## 2026-08-19
- Environment created (folder, `scripts/wix`, `scripts/setup.sh`, CLAUDE.md) targeting
  Wix REST API control. No site changes made.
- **Strategy pivot (Dan): EXIT Wix.** Requirements: full design control by Claude, sell
  courses, payment links, contact form. New plan: Astro+Tailwind site in a private
  GitHub repo, Vercel hosting with preview-URL approval flow, Stripe/Mercado Pago
  payment links, course delivery via links or Hotmart/Teachable. Wix scaffolding moved
  to `legacy-wix/` (never used — no API key was created). CLAUDE.md rewritten for the
  new strategy. Wix site remains live and untouched until cutover.
- **Scrape + scaffold (machine 1).** Full content and images pulled from
  susanabasanez.com → `content/scrape/site-content.md` + `content/images/` (services,
  prices $1,800/$2,500/$4,900, testimonios, bio, podcast, contact info). Astro 5 +
  Tailwind 4 + Vercel adapter scaffolded; curated images in `src/assets/`. No `src/`
  pages built yet. **Work handed off to machine 2 — see HANDOFF.md.** Repo:
  https://github.com/dannurko/susana-website (private).
- **Full site built (machine 2).** Installed `gh`, Node, ran `npm install`. Built all
  8 pages per the HANDOFF.md design spec: `index`, `sobre-mi`, `terapia`,
  `cursos/index` + `cursos/[slug]` (4 courses via content collection — eneagrama,
  constelaciones-familiares, dance-of-joy, yoga-kundalini), `empresas`, `podcast`,
  `contacto`. Shared `Nav` (sticky, mobile menu), `Footer`, floating WhatsApp button
  in `Layout.astro`. Tailwind v4 `@theme` tokens (crema/arena/tinta/oliva/terracota),
  Cormorant Garamond + Figtree via Google Fonts. `api/contact.ts` wired to Resend
  REST API with `RESEND_API_KEY`/`CONTACT_TO` env vars; falls back to a WhatsApp
  message (503) since no Resend account/key exists yet. `paymentLink` empty on all
  courses — "Inscríbete" falls back to a prefilled WhatsApp message until Dan
  provides Stripe/Mercado Pago links. `npm run build` clean; verified in-browser
  (desktop + mobile: hero, nav, mobile menu, all 8 pages, course detail, contact
  form fallback) via the Browser pane. Pushed to `main` (pre-domain = shared
  preview per CLAUDE.md workflow rules).
- **Vercel connected (Dan, guided by Claude).** Dan created a Vercel account
  (sign-in with GitHub as `SusanaBasanez`), granted the Vercel GitHub App access to
  `susana-website` via github.com/settings/installations, imported the repo, and
  deployed. Live at https://susana-website-psi.vercel.app — verified all pages,
  nav, cursos pricing, and the contact form render correctly. Noted along the way:
  the repo is actually **public** (CLAUDE.md previously said private — corrected).
  No env vars set yet (Resend/payments still pending), so the contact form still
  uses its WhatsApp fallback in production, as designed.
