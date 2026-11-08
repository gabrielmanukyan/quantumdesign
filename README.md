# quantumdesign.dev

Personal site for **Gabriel Manukyan** — senior full-stack engineer working in TypeScript, React, Next.js, and AI products. Built for hiring managers and recruiters; ecommerce is background, not the headline.

Live domain: [quantumdesign.dev](https://quantumdesign.dev)

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS v4
- Static export (`output: "export"`) — deployable to **Vercel** or **Cloudflare Pages**

No server runtime is required. `next build` writes a static site to `out/`.

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

### Vercel

1. Import this repository in Vercel.
2. Framework preset: Next.js. Build command `npm run build` is enough — Vercel will publish the static export.
3. Set the production domain to `quantumdesign.dev`.

### Cloudflare Pages

1. Create a Pages project from this repository.
2. Build command: `npm run build`
3. Output directory: `out`
4. Node version: 20 or later.

Because this is a static export, you do **not** need `@cloudflare/next-on-pages`.

## Content you may want to swap

| File | Purpose |
| --- | --- |
| `public/gabriel-manukyan-resume.pdf` | Resume download (hero CTA) |
| `public/products/wiit.png` | WIIT card. Currently a named placeholder — [askwiit.com](https://askwiit.com) is behind a private preview password. |
| `public/products/pingstay.png` | PingStay card placeholder. Replace with a real screenshot when you have one. |
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
