export const site = {
  name: "Gabriel Manukyan",
  firstName: "Gabriel",
  lastName: "Manukyan",
  url: "https://quantumdesign.dev",
  email: "gabriel@quantumdesign.dev",
  github: "https://github.com/gabrielmanukyan",
  linkedin: "https://www.linkedin.com/in/gabriel-manukyan-223bb7a4",
  resumePath: "/gabriel-manukyan-resume.pdf",
  resumeFileName: "gabriel-manukyan-resume.pdf",
  role: "Senior Full-Stack Engineer · TypeScript & AI products",
  eyebrow: "Independent mind. Product-focused engineer.",
  pitch:
    "I turn complex product problems into thoughtful interfaces and dependable systems — from the first idea to the details that make it work.",
  availability: "Open to remote roles · Overlapping EU hours",
  description:
    "Gabriel Manukyan is a senior full-stack engineer building TypeScript and AI products. Open to remote roles on overlapping EU hours.",
  studio: "Quantum Design LLC",
} as const;

export const nav = [
  { href: "#work", label: "Work", externalStyle: false },
  { href: "#experience", label: "Experience", externalStyle: false },
  { href: "#contact", label: "Contact", externalStyle: true },
] as const;

export type Product = {
  name: string;
  href?: string;
  description: string;
  role: string;
  stack: string;
  status: string;
  previewLabel: string;
  image: string;
  imageAlt: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  pixelated?: boolean;
  placeholder?: boolean;
};

export const products: Product[] = [
  {
    name: "WIIT",
    href: "https://askwiit.com",
    description:
      "Timed two-sided crowd debates with earned vote Power — room for different perspectives.",
    role: "Solo founder · since Jan 2025",
    stack: "Next.js / Supabase / OpenAI",
    status: "In active development",
    previewLabel: "WIIT / product preview",
    image: "/products/wiit-debate-1.png",
    imageAlt:
      "WIIT live debate: Should AI-written code need a human sign-off before it ships? Both sides, timer, territory board, and arguments.",
    secondaryImage: "/products/wiit-debate-2.png",
    secondaryImageAlt:
      "WIIT live debate: Is a four-day work week better for software teams? Both sides, timer, and territory board.",
  },
  {
    name: "PingStay",
    description:
      "A multi-tenant hotel concierge, one QR scan away from every guest.",
    role: "Cofounder · since Sep 2026",
    stack: "Turborepo / Next.js / Supabase / Gemini",
    status: "In active development",
    previewLabel: "PingStay / product preview",
    image: "/products/pingstay.png",
    imageAlt:
      "Placeholder preview of PingStay, a QR in-room hotel concierge. Swap this file for a real screenshot when ready.",
    placeholder: true,
  },
  {
    name: "Afterbounce",
    description:
      "A pixel-art arcade roguelike that reimagines the brick-breaker.",
    role: "Solo founder",
    stack: "Unity",
    status: "Launching March 17, 2027",
    previewLabel: "Afterbounce / game preview",
    image: "/products/afterbounce-gameplay.png",
    imageAlt:
      "Afterbounce gameplay: a pixel-art dungeon with floating brick enemies, a glowing paddle, and a ball in mid-air.",
    secondaryImage: "/products/afterbounce-title.png",
    secondaryImageAlt:
      "Afterbounce title screen with Continue, New Run, Upgrades, Codex, Settings, and Quit beside a pixel-art fireplace.",
    pixelated: true,
  },
];

export const selectedWork = [
  {
    tag: "Pricing systems",
    title: "Freight pricing, before checkout",
    body: "Live cart pricing across 10 tariff zones, bringing delivery complexity into the buying experience.",
  },
  {
    tag: "Frontend engineering",
    title: "Bundles that work at cart level",
    body: "Cart-level bundle conversion, connecting purchase intent with the underlying cart logic.",
  },
  {
    tag: "Data integrity",
    title: "Bulk pricing without blind updates",
    body: "Tiered-pricing sync for a 2,000-SKU catalogue, with a dry-run audit before changes go live.",
  },
  {
    tag: "Resilience",
    title: "A rescued lead pipeline",
    body: "A Cloudflare Worker restored a failing lead API integration, with no lost leads.",
  },
  {
    tag: "Safe delivery",
    title: "A rebrand without downtime",
    body: "A new brand experience behind a URL parameter, enabling a zero-downtime transition.",
  },
  {
    tag: "Search experience",
    title: "Predictive search, native foundations",
    body: "A responsive discovery experience built on native endpoints rather than another search dependency.",
  },
] as const;

export const experience = [
  {
    dates: "Jul 2022 — Present",
    company: "Quantum Design LLC",
    role: "Founder & Senior Software Engineer",
    summary:
      "My independent studio and primary engineering partner to emarkable B.V. (Netherlands).",
    detail:
      "I own production work end to end — interfaces, configurators, B2B ordering, filtering, cart and variant flows, and booking UX — from scoping through release, with agency stakeholders on tight timelines.",
  },
] as const;

export const principles = [
  {
    n: "01 /",
    title: "Surgical changes",
    body: "Solve the problem without disturbing what already works.",
  },
  {
    n: "02 /",
    title: "Complete files, not diffs",
    body: "Clear, usable handoffs with the full context intact.",
  },
  {
    n: "03 /",
    title: "Caveats up front",
    body: "Trade-offs and risks on the table, not buried in the delivery.",
  },
  {
    n: "04 /",
    title: "Overlapping EU hours",
    body: "Remote work with room for real-time collaboration.",
  },
] as const;

export const stack = [
  "TypeScript",
  "React / Next.js",
  "Node.js",
  "Postgres / Supabase",
  "OpenAI / Gemini",
  "Vercel / Railway",
  "Cloudflare Workers",
  "Shopify",
] as const;
