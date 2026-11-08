import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[1120px] px-6 min-[700px]:px-10">
      <Header />
      <main className="py-24 min-[700px]:py-32">
        <p className="mb-6 text-[12px] uppercase tracking-[0.14em] text-accent">
          404
        </p>
        <h1 className="mb-4 text-[40px] font-[550] tracking-[-1.8px]">
          Page not found.
        </h1>
        <p className="mb-8 max-w-md text-muted">
          That URL isn’t on this site. The work is all on the home page.
        </p>
        <Link
          className="inline-flex items-center gap-5 rounded-[6px] border border-accent bg-accent px-5 py-[11px] text-[14px] font-[550] text-primary-fg"
          href="/"
        >
          Back home <span aria-hidden="true">↗</span>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
