import { experience } from "@/lib/site";

export function Experience() {
  return (
    <section
      className="border-t border-line py-[43px] min-[700px]:py-16 min-[700px]:pb-[70px]"
      id="experience"
    >
      <div className="mb-[26px] min-[700px]:mb-8 min-[700px]:flex min-[700px]:items-baseline min-[700px]:justify-between min-[700px]:gap-5">
        <h2 className="text-[25px] font-medium leading-[1.3] tracking-[-1px] min-[700px]:text-[28px]">
          Experience
        </h2>
        <span className="mt-2 block text-[12px] text-muted min-[700px]:mt-0 min-[700px]:text-[13px]">
          Hands-on engineering, end to end.
        </span>
      </div>
      {experience.map((row) => (
        <div
          key={row.company}
          className="grid grid-cols-1 gap-2 border-t border-line py-[23px] min-[700px]:grid-cols-[200px_1fr] min-[700px]:gap-[25px]"
        >
          <p className="pt-0 text-[12px] text-muted min-[700px]:pt-[3px] min-[700px]:text-[13px]">
            {row.dates}
          </p>
          <div>
            <h3 className="mb-1 text-[17px] font-medium">{row.company}</h3>
            <p className="m-0 text-[14px] text-[#c4c8d0]">{row.role}</p>
            <p className="mt-1.5 m-0 text-[14px] text-muted">{row.summary}</p>
            <p className="mt-1.5 m-0 text-[14px] text-muted">{row.detail}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
