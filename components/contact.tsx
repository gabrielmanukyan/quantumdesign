import { site } from "@/lib/site";

export function Contact() {
  return (
    <section
      className="border-t border-line py-[51px] min-[700px]:py-[76px] min-[700px]:pb-20"
      id="contact"
    >
      <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.14em] text-accent min-[700px]:mb-[26px] min-[700px]:text-[12px]">
        Let’s build something useful
      </p>
      <h2 className="mb-[19px] text-[36px] font-medium leading-[1.2] tracking-[-1.8px] min-[700px]:text-[44px]">
        Your next engineer?
      </h2>
      <p className="mb-[27px] max-w-[600px] text-[15px] text-muted min-[700px]:text-base">
        I’m open to senior full-stack, frontend and AI product engineering roles
        on thoughtful remote teams.
      </p>
      <a
        className="inline-block border-b border-[#445783] pb-1 text-[19px] tracking-[-0.5px] text-accent hover:border-accent min-[700px]:text-[23px]"
        href={`mailto:${site.email}`}
      >
        {site.email} ↗
      </a>
      <div className="mt-8 flex flex-wrap gap-7 text-[13px] text-muted">
        <a
          className="hover:text-accent"
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn ↗
        </a>
        <a
          className="hover:text-accent"
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
        <a className="hover:text-accent" href={site.resumePath} download={site.resumeFileName}>
          Resume ↗
        </a>
      </div>
    </section>
  );
}
