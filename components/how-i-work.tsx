import { principles } from "@/lib/site";

export function HowIWork() {
  return (
    <section className="border-t border-line py-[43px] min-[700px]:py-16 min-[700px]:pb-[70px]">
      <div className="mb-[26px] min-[700px]:mb-8">
        <h2 className="text-[25px] font-medium leading-[1.3] tracking-[-1px] min-[700px]:text-[28px]">
          How I work
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-x-[22px] gap-y-[29px] min-[700px]:grid-cols-4 min-[700px]:gap-7">
        {principles.map((item) => (
          <article key={item.title}>
            <span className="text-[12px] text-accent">{item.n}</span>
            <h3 className="mt-3 mb-2 text-[15px] font-medium min-[700px]:text-base">
              {item.title}
            </h3>
            <p className="m-0 text-[13px] text-muted">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
