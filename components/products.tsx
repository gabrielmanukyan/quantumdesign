import Image from "next/image";
import { products, type Product, type ProductInset } from "@/lib/site";

function Inset({ inset }: { inset: ProductInset }) {
  if (inset.kind === "phone") {
    return (
      <div className="h-[150px] w-[70px] rounded-[13px] border border-[#4a5568] bg-[#0a0a0c] p-[3px] shadow-[0_12px_22px_#000a]">
        <div className="relative h-full w-full overflow-hidden rounded-[10px]">
          <Image
            src={inset.src}
            alt={inset.alt}
            width={780}
            height={1688}
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>
    );
  }

  if (inset.kind === "ticket") {
    return (
      <div className="mb-0.5 h-[118px] w-[68px] overflow-hidden rounded-[2px] border border-[#3a3228] bg-[#14110e] shadow-[0_12px_20px_#000a]">
        <Image
          src={inset.src}
          alt={inset.alt}
          width={520}
          height={820}
          className="h-full w-full object-contain"
        />
      </div>
    );
  }

  return (
    <div className="w-[44%] overflow-hidden rounded-md border border-[#3b455a] bg-black shadow-[0_12px_24px_#0008]">
      <Image
        src={inset.src}
        alt={inset.alt}
        width={1600}
        height={1000}
        className="h-auto w-full"
      />
    </div>
  );
}

function Preview({ product }: { product: Product }) {
  return (
    <div className="relative h-[205px] overflow-hidden rounded-lg border border-preview-line bg-[linear-gradient(145deg,#1e2637,#16191f)] min-[700px]:h-[208px]">
      <span className="absolute left-2.5 top-2 z-10 rounded bg-black/55 px-1.5 py-0.5 text-[9px] uppercase tracking-[0.1em] text-[#c5d0e4]">
        {product.previewLabel}
      </span>
      <Image
        src={product.image}
        alt={product.imageAlt}
        fill
        sizes="(max-width: 700px) 100vw, 33vw"
        className={`object-cover object-center ${product.pixelated ? "pixelated" : ""}`}
      />
      {product.placeholder ? (
        <span className="sr-only">Screenshot placeholder — replace the file in public/products to update.</span>
      ) : null}
      {product.insets && product.insets.length > 0 ? (
        <div className="absolute right-2.5 bottom-2.5 z-10 flex items-end gap-1.5">
          {product.insets.map((inset) => (
            <Inset key={inset.src} inset={inset} />
          ))}
        </div>
      ) : product.secondaryImage ? (
        <div className="absolute right-3 bottom-3 z-10 w-[44%] overflow-hidden rounded-md border border-[#3b455a] bg-black shadow-[0_12px_24px_#0008]">
          <Image
            src={product.secondaryImage}
            alt={product.secondaryImageAlt ?? ""}
            width={1600}
            height={1000}
            className={`h-auto w-full ${product.pixelated ? "pixelated" : ""}`}
          />
        </div>
      ) : null}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const title = product.href ? (
    <a
      href={product.href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-accent"
    >
      {product.name}
    </a>
  ) : (
    product.name
  );

  return (
    <article className="min-w-0">
      <Preview product={product} />
      <h3 className="mt-4 mb-2 flex items-center justify-between text-[20px] font-[550] tracking-[-0.5px] min-[700px]:mt-[21px] min-[700px]:mb-2">
        {title}
        {product.href ? (
          <span className="text-[17px] text-muted" aria-hidden="true">
            ↗
          </span>
        ) : null}
      </h3>
      <p className="mb-3 text-[14px] leading-[1.7] text-muted min-[700px]:mb-4">
        {product.description}
      </p>
      <p className="text-[11px] leading-[1.9] text-muted">
        {product.role}
        <br />
        {product.stack}
      </p>
      <p className="mt-2 text-[11px] text-accent">{product.status}</p>
    </article>
  );
}

export function Products() {
  return (
    <section className="border-t border-line py-[43px] min-[700px]:py-16 min-[700px]:pb-[70px]" id="work">
      <div className="mb-[26px] min-[700px]:mb-8 min-[700px]:flex min-[700px]:items-baseline min-[700px]:justify-between min-[700px]:gap-5">
        <h2 className="text-[25px] font-medium leading-[1.3] tracking-[-1px] min-[700px]:text-[28px]">
          Products I’m building
        </h2>
        <span className="mt-2 block text-[12px] text-muted min-[700px]:mt-0 min-[700px]:text-[13px]">
          From architecture to the last interaction.
        </span>
      </div>
      <div className="grid grid-cols-1 gap-[35px] min-[700px]:grid-cols-3 min-[700px]:gap-5">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
}
