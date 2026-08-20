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
