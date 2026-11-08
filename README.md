# quantumdesign.dev

Personal site for **Gabriel Manukyan** — senior full-stack engineer working in TypeScript, React, Next.js, and AI products. Built for hiring managers and recruiters; ecommerce is background, not the headline.

Live domain: [quantumdesign.dev](https://quantumdesign.dev)

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS v4
- Static export (`output: "export"`) — `next build` writes HTML/CSS/JS to `out/`
- Deployed as the existing Cloudflare Worker **`quantumdesign-site`** (serves [quantumdesign.dev](https://quantumdesign.dev))

No server runtime is required.

## Local development

Node 20+ is required.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
```

The production build is static HTML, CSS, and JS in `out/`. Preview it with any static file server, for example:

```bash
npx serve out
```

## Deploy

Production is the existing Worker **`quantumdesign-site`**, via **Cloudflare Workers Builds** (Git integration) — not Pages, and not a new Worker.

### Existing D1 binding

`wrangler.jsonc` declares binding `DB` → database `quantumdesign-contact` (`eec71935-4764-49b0-a97f-a3e0609d930f`) so `wrangler deploy` does not drop it. Wrangler treats this file as the source of truth for bindings; omitting `d1_databases` would delete `DB`.

Do not run D1 migrations from this repo. The site does not query the database. Routes and the `quantumdesign.dev` custom domain stay in the dashboard (`wrangler.jsonc` does not set `routes`).

### Cloudflare Workers Builds (Settings → Build → Connect repo)

Connect this repository to the **existing** Worker named `quantumdesign-site` (the Worker name in `wrangler.jsonc` must match).

| Setting | Value |
| --- | --- |
| Git repository | `gabrielmanukyan/quantumdesign` |
| Git branch | `main` (after this PR is merged) |
| Root directory | *(leave empty — repo root)* |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Preview command | `npx wrangler preview` *(default)* |

Optional build variable: `NODE_VERSION` = `22`.

Workers Builds installs npm dependencies, runs the build command (writes `out/`), then runs the deploy command. `wrangler.jsonc` points `assets.directory` at `./out` with `not_found_handling: "404-page"` (serves `out/404.html`). There is no Worker script (`main` is unset).

Local deploy:

```bash
npm run deploy   # next build && wrangler deploy
```

### Vercel (optional)

The static export also works on Vercel: import the repo, Next.js preset, `npm run build`. Production for this project is Cloudflare.

## Content you may want to swap

| File | Purpose |
| --- | --- |
| `public/gabriel-manukyan-resume.pdf` | Resume download (hero CTA) |
| `public/products/wiit-debate-1.png` | WIIT card, main image — live debate (AI code sign-off). |
| `public/products/wiit-debate-2.png` | WIIT card, secondary image — live debate (four-day week). |
| `public/products/pingstay-dashboard.png` | PingStay card, main image — staff operations dashboard (demo data). |
| `public/products/pingstay-guest.png` | PingStay card, phone inset — guest mobile app (demo data). |
| `public/products/pingstay-ticket.png` | PingStay card, receipt inset — printed kitchen ticket (demo data). |
| `public/products/afterbounce-gameplay.png` | Afterbounce in-game screenshot (main image). |
| `public/products/afterbounce-title.png` | Afterbounce title / main menu (secondary image). Keep nearest-neighbor / `image-rendering: pixelated` if you rescale. |
| `lib/site.ts` | Names, links, product copy, experience, selected work. |

Do not add a phone number to the site.

## SEO

- Metadata in `app/layout.tsx` (`metadataBase` is `https://quantumdesign.dev`)
- Open Graph / Twitter image generated at build time via `next/og` (`app/opengraph-image.tsx`, `app/twitter-image.tsx`)
- `app/sitemap.ts` and `app/robots.ts`
- Favicon and Apple icon generated in `app/icon.tsx` / `app/apple-icon.tsx`
- JSON-LD `Person` schema

## License

MIT. See `LICENSE`.

Inter is used under the [SIL Open Font License](https://github.com/rsms/inter/blob/master/LICENSE.txt). TTF files in `assets/fonts/` are for OG image generation at build time.
