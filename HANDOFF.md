# HANDOFF — continue building Susana's new site here

You are Claude Code on machine 2, taking over mid-build from machine 1 (2026-08-19).
Read [CLAUDE.md](CLAUDE.md) first for strategy, rules, and guardrails. This file tells
you exactly where the work stands and what to do next.

## State of the world

**Done:**
- Full content + assets scraped from the live Wix site → [content/scrape/site-content.md](content/scrape/site-content.md)
  (the content source of truth: all copy, prices, testimonios, contact info, bio) and
  `content/images/` (raw). Curated images already copied to `src/assets/` with semantic
  names (see mapping at the bottom of site-content.md).
- Project scaffold: `package.json` (Astro 5 + Tailwind 4 + @astrojs/vercel),
  `astro.config.mjs` (static output + vercel adapter + @tailwindcss/vite plugin),
  `tsconfig.json`, `.claude/launch.json` (dev server on :4321 via `npm run dev`).
- Repo pushed to GitHub (private). Run `npm install` after cloning.

**NOT done — this is your job:** everything in `src/` except `assets/`. No pages,
layouts, components, styles, or content collections exist yet. Nothing has been built
or verified. Build it, verify it in the browser, screenshot it for Dan.

## Design spec (agreed direction — follow it, refine freely)

**Feel:** warm, elegant, editorial. The scraped B&W photography is the visual anchor on
a warm cream ground. All content in **Spanish** (correct accents; keep Susana's voice,
fix typos from the old site).

**Palette (Tailwind v4 `@theme` tokens in `src/styles/global.css`):**
crema `#F7F3EC` (bg) · arena `#E9E2D4` (alt sections) · tinta `#262B22` (text) ·
oliva `#5F6F52` (primary) · terracota `#BC6C4F` (CTA accent). No dark mode in v1.

**Fonts (Google Fonts link in the base layout):** Cormorant Garamond (display,
400/500/600) + Figtree (body, 300–600). Headings serif, body sans.

**Logo:** use the script wordmark images — `src/assets/logo-negro.png` on light,
`logo-blanco.png` on dark — never re-typeset her name.

**Pages** (`src/pages/`), all content from `content/scrape/site-content.md`:
1. `index.astro` — hero (hero-estudio.jpg + wordmark + "Ser tú misma/o…" line + CTAs
   "Agenda tu sesión" (WhatsApp) / "Ver cursos y talleres"), 3 pillars (Terapia /
   Cursos y Talleres / Empresas), sobre-mí teaser (grupo-taller.jpg, credenciales,
   26+ años), precios cards ($1,800 consulta · $2,500 constelación · talleres desde
   $4,400), 3 testimonios, podcast banner (podcast-cover.jpg + Spotify), contacto CTA.
2. `sobre-mi.astro` — bio íntegra, maestros, certificaciones timeline, publicaciones.
3. `terapia.astro` — qué esperar, 6 técnicas, tarifas, sesion-terapia.jpg +
   sesion-online.jpg, agenda CTA.
4. `cursos/index.astro` + `cursos/[slug].astro` — cards desde la colección `cursos`.
5. `empresas.astro` — bienestar organizacional, Teambuilding / Consultoría Sistémica /
   Brain Spa, clientes (cliente-cfe.png logo + Bimbo, Daimler Chrysler, Colegio CDI en
   texto), teambuilding.jpg + capacitacion.jpg, CTA contacto.
6. `podcast.astro` — cover, descripción, botón Spotify, IG/FB @dequesetrataesto.
7. `contacto.astro` — form (nombre, email, mensaje) + tel, email, dirección, WhatsApp.
8. `api/contact.ts` — `export const prerender = false`; POST → Resend REST API
   (`fetch` a api.resend.com, sin SDK) usando `RESEND_API_KEY` + `CONTACT_TO` de env;
   si no hay key → 503 y el form muestra fallback a WhatsApp. No inventes el envío:
   sin key configurada el fallback es el camino.

**Content collection** (`src/content.config.ts`, glob loader sobre
`src/content/cursos/*.md`): schema `{ titulo, resumen, precio?, earlyBird?, duracion?,
proximaFecha? (string, default "Próximas fechas por anunciar"), lugar?, paymentLink?
(nullable), orden }`. Cuatro cursos: eneagrama ($4,900 / early $4,400, 3 días),
constelaciones-familiares ($2,500), dance-of-joy, yoga-kundalini (sábados 9:00).
Descripciones: site-content.md.

**Payment links:** `paymentLink` vacío por ahora (no hay cuenta de Stripe/Mercado Pago
aún). Botón "Inscríbete": si hay `paymentLink` → link directo; si no → WhatsApp
prefilled `https://wa.me/522299282255?text=Hola,%20quiero%20inscribirme%20a%20{curso}`.
Cuando Dan entregue los links de pago, solo se rellenan los frontmatter.

**Global:** `src/config.ts` con contacto (tel +52 229 928 2255, email
contacto@susanabasanez.com, dirección Agustín Melgar, Col. Condesa, CDMX, WhatsApp
https://wa.me/message/ENJWH4DKH3VVM1, Instagram, Spotify). Nav sticky (logo + Inicio,
Sobre mí, Terapia, Cursos, Empresas, Podcast, Contacto + botón Agenda). Footer con
contacto y sociales. Botón flotante de WhatsApp. `lang="es"`, títulos/descriptions SEO
por página, imágenes vía `astro:assets` `<Image>`.

## Your workflow

1. `npm install` → build the site per the spec → `npm run build` until clean.
2. Verify in the browser (dev server via `.claude/launch.json`, name "susana"):
   desktop + mobile, check console. Screenshot the result for Dan.
3. Commit in sensible chunks and push to `main` (pre-domain, `main` is the shared
   preview — see CLAUDE.md workflow rules). Log to CHANGES.md.
4. Then walk Dan through the pending enablement items (Vercel account → connect repo;
   payments choice; domain registrar) — list in CLAUDE.md.

Content questions → everything scraped is in site-content.md; if something is missing,
ask Dan rather than inventing facts (especially prices, dates, credentials).
