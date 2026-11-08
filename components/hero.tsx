import { site } from "@/lib/site";

export function Hero() {
  return (
    <header className="max-w-[900px] py-[73px] min-[700px]:py-[116px] min-[700px]:pb-[108px]">
      <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.14em] text-accent min-[700px]:mb-[26px] min-[700px]:text-[12px]">
        {site.eyebrow}
      </p>
      <h1 className="mb-[22px] max-w-[320px] text-[48px] font-[550] leading-[1.04] tracking-[-2.7px] min-[700px]:mb-[27px] min-[700px]:max-w-none min-[700px]:text-[76px] min-[700px]:tracking-[-4.5px]">
        {site.firstName}
        <br />
        {site.lastName}.
      </h1>
      <h2 className="mb-[22px] text-[20px] font-[450] leading-[1.5] tracking-[-0.4px] text-hero-sub min-[700px]:text-[25px] min-[700px]:leading-normal min-[700px]:tracking-[-0.65px]">
        {site.role}
      </h2>
      <p className="mb-[33px] max-w-[640px] text-[16px] leading-[1.8] text-muted min-[700px]:text-[19px] min-[700px]:leading-[1.75]">
        {site.pitch}
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          className="inline-flex items-center gap-5 rounded-[6px] border border-accent bg-accent px-4 py-2.5 text-[13px] font-[550] text-primary-fg hover:opacity-90 min-[700px]:gap-7 min-[700px]:px-5 min-[700px]:py-[11px] min-[700px]:text-[14px]"
          href={site.resumePath}
          download={site.resumeFileName}
        >
          Download resume <span aria-hidden="true">↗</span>
        </a>
        <a
          className="inline-flex items-center gap-5 rounded-[6px] border border-[#393d46] px-4 py-2.5 text-[13px] font-[550] hover:border-accent hover:text-accent min-[700px]:gap-7 min-[700px]:px-5 min-[700px]:py-[11px] min-[700px]:text-[14px]"
          href={`mailto:${site.email}`}
        >
          Email <span aria-hidden="true">↗</span>
        </a>
        <a
          className="inline-flex items-center gap-5 rounded-[6px] border border-[#393d46] px-4 py-2.5 text-[13px] font-[550] hover:border-accent hover:text-accent min-[700px]:gap-7 min-[700px]:px-5 min-[700px]:py-[11px] min-[700px]:text-[14px]"
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
        <a
          className="inline-flex items-center gap-5 rounded-[6px] border border-[#393d46] px-4 py-2.5 text-[13px] font-[550] hover:border-accent hover:text-accent min-[700px]:gap-7 min-[700px]:px-5 min-[700px]:py-[11px] min-[700px]:text-[14px]"
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
      </div>
      <p className="mt-[23px] text-[12px] text-muted">
        <span
          className="mr-[9px] inline-block h-1.5 w-1.5 rounded-full bg-accent"
          aria-hidden="true"
        />
        {site.availability}
      </p>
    </header>
  );
}
