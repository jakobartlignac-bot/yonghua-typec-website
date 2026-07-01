import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { getProductCategories, getProductsByCategory } from "@/data/products";

export const metadata: Metadata = {
  title: "Type-C Connector Product SEO Pages",
  description:
    "Browse Type-C female sockets, USB Type-C connectors, waterproof Type-C connectors, and precision connector SEO pages with specifications and RFQ details.",
};

export default function ProductsPage() {
  const categories = getProductCategories();

  return (
    <>
      <PageHero
        eyebrow="Product SEO Pages"
        title="Type-C connectors organized by 6Pin, 16Pin, and 24Pin categories"
        description="Each product record keeps category taxonomy, SEO title, meta description, application scenarios, specifications, and RFQ data in a CMS-ready mock structure."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <div key={category.key} className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="flex items-center justify-between gap-4">
                <p className="text-lg font-bold text-slate-950">{category.label}</p>
                <span className="rounded border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-600">
                  {category.count} models
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{category.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-14">
          {categories.map((category) => {
            const categoryProducts = getProductsByCategory(category.key);

            return (
              <section key={category.key} aria-labelledby={`${category.key}-products`}>
                <div className="flex flex-col justify-between gap-3 border-b border-slate-200 pb-4 md:flex-row md:items-end">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
                      {category.label} Product Category
                    </p>
                    <h2 id={`${category.key}-products`} className="mt-2 text-2xl font-bold text-slate-950">
                      {category.label} Type-C connector models
                    </h2>
                  </div>
                  <p className="max-w-2xl text-sm leading-6 text-slate-600">{category.description}</p>
                </div>
                <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {categoryProducts.map((product) => (
                    <ProductCard key={product.slug} product={product} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </>
  );
}
