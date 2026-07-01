import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { getProductCategories, getProductsByCategory } from "@/data/products";

export const metadata: Metadata = {
  title: "USB Type-C Connector Products | 6Pin 16Pin 24Pin Factory Supply",
  description:
    "Browse Yonghua Type-C connector products by 6Pin, 16Pin, and 24Pin categories with specs, applications, sample support, and RFQ information for overseas buyers.",
};

const landingPoints = [
  "Factory direct Type-C connector sourcing for OEM electronics projects.",
  "Product pages include pin count, current rating, mounting type, applications, and buyer notes.",
  "Request drawings, datasheets, samples, and quotation support before bulk order confirmation.",
];

export default function ProductsPage() {
  const categories = getProductCategories();

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="USB Type-C connector products by 6Pin, 16Pin, and 24Pin category"
        description="Use this product hub to shortlist Type-C female sockets and connectors by pin count, electrical requirement, structure, application, sample timing, and RFQ readiness."
      />
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionHeader
            eyebrow="Sourcing Overview"
            title="A product landing page for procurement decisions"
            description="Overseas buyers can compare product categories before sending drawings and quantity details for quotation."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {landingPoints.map((point) => (
              <div key={point} className="industrial-card rounded-lg bg-slate-50 p-5">
                <p className="text-sm leading-6 text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <a
              key={category.key}
              href={`#${category.key}-products`}
              className="industrial-card rounded-lg p-5"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-lg font-bold text-slate-950">{category.label}</p>
                <span className="rounded border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-600">
                  {category.count} models
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{category.description}</p>
            </a>
          ))}
        </div>

        <div className="mt-12 space-y-14">
          {categories.map((category) => {
            const categoryProducts = getProductsByCategory(category.key);

            return (
              <section key={category.key} id={`${category.key}-products`}>
                <div className="flex flex-col justify-between gap-3 border-b border-slate-200 pb-4 md:flex-row md:items-end">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
                      {category.label} Type-C Connector Category
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-slate-950">
                      {category.label} models for export sourcing
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

        <div className="mt-14 rounded-lg border border-slate-800 bg-slate-950 p-8 text-white">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold">Need help matching a connector model?</h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
                Send drawings, PCB footprint, current rating, application, expected order quantity,
                and target market. Yonghua can help check model fit before sample confirmation.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-primary"
            >
              Send Product RFQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
