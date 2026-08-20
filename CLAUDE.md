# Susana's Website — Project Control Center

**Strategy (decided by Dan, 2026-08-19): we are EXITING Wix.** The site will be rebuilt
as code that Claude fully controls, hosted on modern free infrastructure. The current
Wix site stays live untouched until the new site is approved and the domain is switched
over — zero downtime, nothing burned.

This folder is the project root on **two computers**, kept in sync as a **private git
repo**. The human on machine 2 does not code — they describe what they want in plain
language (Spanish or English) and Claude does everything. If you are Claude Code reading
this: this file is your operating manual. Read [CHANGES.md](CHANGES.md) before working.

## What the site must do

1. Present Susana's business beautifully (full design freedom — this is why we left Wix).
2. **Sell courses.**
3. **Payment links** for easy charging.
4. **Contact form** so people can reach out.

## Stack (CONFIRMED and scaffolded 2026-08-19 — see HANDOFF.md for build state)

| Layer | Choice | Why |
|---|---|---|
| Site | **Astro + Tailwind** (repo = this folder) | Content-first, fast, easy for Claude to edit; content lives in markdown files a non-coder can review |
| Hosting | **Vercel** (free tier), auto-deploys from GitHub | Push = live in ~1 min; every branch gets a **preview URL** for approval before merge |
| Contact form | Astro API endpoint + **Resend** (free email API), or Formspree if we want zero backend | Submissions emailed to Susana + stored |
| Payments | **Stripe Payment Links** (works in Mexico: cards, OXXO, MSI) — alternative: **Mercado Pago** links if Susana prefers | Claude manages products/links via API with a restricted key; no checkout code to maintain |
| Courses | Start: sell via payment links + email delivery. If real course UX is needed (student logins, video hosting, progress): **Hotmart** (LatAm standard) or Teachable, linked from the site | Keeps auth/video/refunds off our plate — critical for a non-coder owner |
| Domain | Susana's existing domain, DNS pointed to Vercel at cutover | Wix plan can be cancelled after cutover is verified |

## Enablement status (update as items complete)

- [x] GitHub auth on machine 1 (`dannurko`, repo scope) — 2026-08-19
- [x] Private GitHub repo created and pushed: https://github.com/dannurko/susana-website
- [ ] GitHub access on machine 2 (`gh auth login`, collaborator or same account)
- [ ] Vercel account (sign in with GitHub, one click) + repo connected
- [x] Site scraped: susanabasanez.com → `content/scrape/site-content.md` + `content/images/`
- [ ] Domain: registrar + who holds DNS access (Dan believes it's registered AT Wix — verify in the Wix dashboard at cutover time)
- [ ] Payments: Stripe or Mercado Pago account + **restricted** API key in the secrets file
- [ ] Course delivery decision (payment links only vs Hotmart/Teachable)

## Workflow rules (non-negotiable)

- **Before the domain points here:** work directly on `main`; the Vercel URL is the
  shared preview.
- **After the site is live:** never push user-visible changes straight to `main`.
  Branch → push → share the Vercel **preview URL** → Dan or Susana approves in chat →
  merge (= live). This replaces Wix's "publish" button as the safety gate.
- **Log every change** to [CHANGES.md](CHANGES.md): date, what, why, who asked,
  shipped-to (preview vs live). Both machines share this ledger — read it first.
- **Keep this file updated**: stack decisions, repo/Vercel URLs, learned quirks.
- **Secrets live only in `~/.config/susana-site/env`** (chmod 600, outside the repo):
  payment API keys, Resend key, etc. Never in the repo, chat, or this file. Use
  restricted/scoped keys wherever the provider offers them (Stripe does).
- **Money boundaries:** Claude may create/edit products and payment links, but never
  issues refunds, transfers, or payouts — those are owner actions in the provider
  dashboard.
- Site content is likely **Spanish** — match the site's language, spelling, and accents.
  Ask before switching tone or translating.

## Migration plan (in order)

1. Dan provides the current Wix site URL → Claude scrapes all public content
   (text, images, structure) into `content/` as the raw material.
2. Scaffold the stack above; push to the private repo; connect Vercel.
3. Rebuild and **redesign** — this is the "make it awesome" step; iterate with
   Dan/Susana over preview URLs.
4. Wire contact form; create payment products/links; wire course sales flow.
5. Final approval on the Vercel URL.
6. Cut over DNS (Claude prepares exact records; whoever holds registrar access applies
   them, or grants Claude access). If the domain is registered at Wix, transfer it out
   (or point nameservers) before cancelling anything.
7. Verify live + SSL + forms + payment links, then downgrade/cancel the Wix plan.
   Only after step 7 may anything Wix-side be touched.

## Machine 2 bring-up

1. Install Claude Code (desktop app is friendliest) + `git`, `node` (v20+), `gh`.
2. `gh auth login`, then:
   `git clone https://github.com/dannurko/susana-website.git && cd susana-website && npm install`
3. Read this file, then **[HANDOFF.md](HANDOFF.md)** — it has the exact build state and
   next steps. From then on the person just types requests like "cambia la foto de
   portada" or "agrega un curso de $500 MXN" and Claude handles code, previews, and
   asks for approval before anything goes live.

## Legacy

`legacy-wix/` holds the Wix REST API scaffolding from the brief keep-Wix phase
(2026-08-19, same day). Unused — no API key was ever created. The empty secrets
template at `~/.config/wix-susana/env` is orphaned. Delete both after migration
completes.
