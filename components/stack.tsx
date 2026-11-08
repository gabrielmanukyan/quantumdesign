import { stack } from "@/lib/site";

export function Stack() {
  return (
    <section className="border-t border-line py-[43px] min-[700px]:py-16 min-[700px]:pb-[70px]">
      <div className="mb-[26px] min-[700px]:mb-8 min-[700px]:flex min-[700px]:items-baseline min-[700px]:justify-between min-[700px]:gap-5">
        <h2 className="text-[25px] font-medium leading-[1.3] tracking-[-1px] min-[700px]:text-[28px]">
          Tools, not an identity
        </h2>
        <span className="mt-2 block text-[12px] text-muted min-[700px]:mt-0 min-[700px]:text-[13px]">
          The right stack for the problem.
        </span>
      </div>
      <div className="flex flex-wrap gap-2 min-[700px]:gap-2.5">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-[5px] border border-line px-2.5 py-1.5 text-[12px] text-[#bbc0c9] min-[700px]:px-3.5 min-[700px]:py-2 min-[700px]:text-[13px]"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
