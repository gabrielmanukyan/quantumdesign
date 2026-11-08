import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Gabriel Manukyan — Senior Full-Stack Engineer",
    template: "%s — Gabriel Manukyan",
  },
  description: site.description,
  keywords: [
    "Gabriel Manukyan",
    "senior full-stack engineer",
    "TypeScript",
    "React",
    "Next.js",
    "AI products",
    "remote",
    "Quantum Design",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: "Quantum Design",
    title: "Gabriel Manukyan — Senior Full-Stack Engineer",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Manukyan — Senior Full-Stack Engineer",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Senior Full-Stack Engineer",
  description: site.description,
  url: site.url,
  email: site.email,
  sameAs: [site.github, site.linkedin],
  worksFor: {
    "@type": "Organization",
    name: site.studio,
    url: site.url,
  },
  knowsAbout: [
    "TypeScript",
    "React",
    "Next.js",
    "AI products",
    "Full-stack engineering",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-bg font-sans text-ink" id="top">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
