import Link from "next/link";
import { getProductCategory, type Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const category = getProductCategory(product.category);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:border-teal-600 hover:shadow-md">
      <div className="flex aspect-[4/3] items-center justify-center border-b border-slate-200 bg-slate-50 p-6">
        <img src={product.image} alt={product.name} className="h-full max-h-36 w-auto" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded border border-teal-200 bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-800">
            {category?.label ?? product.pinCount}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
            {product.productLine}
          </span>
        </div>
        <h3 className="mt-3 text-lg font-bold leading-6 text-slate-950">
          <Link href={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{product.description}</p>
        <dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-slate-200 bg-slate-200 text-sm">
          <div className="bg-white p-3">
            <dt className="text-xs text-slate-500">Pin Count</dt>
            <dd className="font-semibold text-slate-900">{product.pinCount}</dd>
          </div>
          <div className="bg-white p-3">
            <dt className="text-xs text-slate-500">Current</dt>
            <dd className="font-semibold text-slate-900">{product.ratedCurrent}</dd>
          </div>
          <div className="bg-white p-3">
            <dt className="text-xs text-slate-500">Sample</dt>
            <dd className="font-semibold text-slate-900">{product.sampleLeadTime}</dd>
          </div>
          <div className="bg-white p-3">
            <dt className="text-xs text-slate-500">MOQ</dt>
            <dd className="font-semibold text-slate-900">{product.moq}</dd>
          </div>
        </dl>
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <Link
            href={`/products/${product.slug}`}
            className="text-sm font-semibold text-slate-800 hover:text-teal-800"
          >
            View specs
          </Link>
          <Link
            href="/contact"
            className="rounded-md bg-teal-700 px-3.5 py-2 text-sm font-semibold text-white hover:bg-teal-800"
          >
            RFQ
          </Link>
        </div>
      </div>
    </article>
  );
}
