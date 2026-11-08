import { nav, site } from "@/lib/site";

export function Header() {
  return (
    <nav
      aria-label="Main navigation"
      className="flex h-[80px] items-center justify-between border-b border-line min-[700px]:h-[108px]"
    >
      <a
        href="#top"
        className="text-[15px] font-[650] tracking-[-0.5px] min-[700px]:text-[17px]"
      >
        {site.name}
        <span className="text-accent">.</span>
      </a>
      <div className="flex gap-5 text-[12px] text-muted min-[700px]:gap-8 min-[700px]:text-[13px]">
        {nav.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            className={`hover:text-accent ${index === 0 ? "max-[700px]:hidden" : ""}`}
          >
            {item.label}
            {item.externalStyle ? " ↗" : ""}
          </a>
        ))}
      </div>
    </nav>
  );
}
