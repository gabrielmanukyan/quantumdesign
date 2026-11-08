import { selectedWork } from "@/lib/site";

export function SelectedWork() {
  return (
    <section className="border-t border-line py-[43px] min-[700px]:py-16 min-[700px]:pb-[70px]">
      <div className="mb-[26px] min-[700px]:mb-8 min-[700px]:flex min-[700px]:items-baseline min-[700px]:justify-between min-[700px]:gap-5">
        <h2 className="text-[25px] font-medium leading-[1.3] tracking-[-1px] min-[700px]:text-[28px]">
          Selected engineering work
        </h2>
        <span className="mt-2 block text-[12px] text-muted min-[700px]:mt-0 min-[700px]:text-[13px]">
          Real constraints. Practical solutions.
        </span>
      </div>
      <div className="grid grid-cols-1 min-[700px]:grid-cols-2 min-[700px]:gap-x-[42px]">
        {selectedWork.map((item) => (
          <article
            key={item.title}
            className="border-t border-line py-[23px] min-[700px]:py-6"
          >
            <p className="mb-2 text-[10px] uppercase tracking-[0.1em] text-accent">
              {item.tag}
            </p>
            <h3 className="mb-2 text-[17px] font-medium tracking-[-0.25px]">
              {item.title}
            </h3>
            <p className="m-0 text-[14px] text-muted">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
