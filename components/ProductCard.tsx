import Image from "next/image";
import Link from "next/link";
import { getProductCategory, type Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const category = getProductCategory(product.category);

  return (
    <article className="industrial-card flex h-full flex-col overflow-hidden rounded-lg">
      <div className="flex aspect-[4/3] items-center justify-center border-b border-slate-200 bg-slate-50 p-6">
        <Image
          src={product.image}
          alt={product.imageAlt}
          width={320}
          height={240}
          className="h-full max-h-36 w-auto"
        />
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
            <dt className="text-xs text-slate-500">Mounting</dt>
            <dd className="font-semibold text-slate-900">{product.mountingType}</dd>
          </div>
          <div className="bg-white p-3">
            <dt className="text-xs text-slate-500">Rated Current</dt>
            <dd className="font-semibold text-slate-900">{product.ratedCurrent}</dd>
          </div>
          <div className="bg-white p-3">
            <dt className="text-xs text-slate-500">Application</dt>
            <dd className="font-semibold text-slate-900">{product.applications[0]}</dd>
          </div>
        </dl>
        <div className="mt-auto flex flex-col gap-3 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href={`/products/${product.slug}`}
            className="btn-secondary px-3.5 py-2"
          >
            View Specs
          </Link>
          <Link
            href="/contact"
            className="btn-primary px-3.5 py-2"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </article>
  );
}
