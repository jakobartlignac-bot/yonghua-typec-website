import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { CtaBand } from "@/components/CtaBand";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { articles } from "@/data/articles";
import { factoryCapabilities } from "@/data/factory";
import { products } from "@/data/products";
import { solutions } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Type-C Connector Manufacturer for Overseas Buyers",
  description:
    "Guangdong Yonghua Technology is a Type-C connector factory building SEO content, product pages, and RFQ workflows for overseas procurement teams.",
};

const contentHubs = [
  "Industry Knowledge",
  "Selection Guides",
  "Comparison Articles",
  "Application Scenarios",
];

export default function Home() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
              GEO SEO Type-C Connector Factory Website
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
              Type-C Connectors for Overseas Procurement and Engineering Teams
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Guangdong Yonghua Technology supplies Type-C female sockets, USB-C connectors, and
              precision interconnect parts with product SEO pages, application content, and RFQ
              conversion paths built for Google traffic.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/blog"
                className="rounded-md bg-teal-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-teal-400"
              >
                Explore Knowledge Hub
              </Link>
              <Link
                href="/products"
                className="rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                View Product SEO Pages
              </Link>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <div className="rounded-md border border-slate-700 bg-slate-900 p-5">
              <p className="text-sm font-semibold text-white">Content-Led Conversion Path</p>
              <div className="mt-5 space-y-3">
                {contentHubs.map((hub, index) => (
                  <div key={hub} className="flex items-center gap-3 rounded-md bg-slate-800 p-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded bg-teal-500 text-sm font-bold text-slate-950">
                      {index + 1}
                    </span>
                    <span className="font-semibold text-slate-100">{hub}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
              <div className="rounded-md bg-white p-3 text-slate-950">
                <p className="font-bold">Blog</p>
                <p className="mt-1 text-xs text-slate-500">SEO traffic</p>
              </div>
              <div className="rounded-md bg-white p-3 text-slate-950">
                <p className="font-bold">Products</p>
                <p className="mt-1 text-xs text-slate-500">Buyer intent</p>
              </div>
              <div className="rounded-md bg-white p-3 text-slate-950">
                <p className="font-bold">RFQ</p>
                <p className="mt-1 text-xs text-slate-500">Conversion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="GEO Content System"
              title="Knowledge pages built for search questions"
              description="Articles are grouped by buyer intent: selection, comparison, application, and factory sourcing questions."
            />
            <Link href="/blog" className="text-sm font-semibold text-teal-700 hover:text-teal-900">
              View all articles
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Product SEO Pages"
            title="Product pages with specs, comparisons, applications, and FAQs"
            description="Each product page is structured around high-intent search terms and RFQ decision details."
          />
          <Link href="/products" className="text-sm font-semibold text-teal-700 hover:text-teal-900">
            View products
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
              Solutions
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Industry solution hubs
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Industrial, automotive, and consumer electronics pages help match connector
              requirements to buyer applications.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {solutions.map((solution) => (
              <Link
                href="/solutions"
                key={solution.slug}
                className="rounded-lg border border-slate-700 bg-slate-800 p-5 hover:border-teal-400"
              >
                <h3 className="font-bold">{solution.industry}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{solution.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionHeader
            eyebrow="Factory Capability"
            title="Production, equipment, certification, and capacity signals"
            description="Factory pages support buyer trust after SEO content brings visitors into the site."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {factoryCapabilities.capacity.map((item) => (
              <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-teal-700">
                  {item.label}
                </p>
                <p className="mt-3 font-semibold text-slate-950">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Turn search traffic into connector RFQs"
        description="Send drawings, connector type, pin count, current rating, application, and estimated quantity."
      />
    </>
  );
}
