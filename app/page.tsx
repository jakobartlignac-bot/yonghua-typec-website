import type { Metadata } from "next";
import Link from "next/link";
import { AboutYonghua } from "@/components/AboutYonghua";
import { CtaBand } from "@/components/CtaBand";
import { HeroCarousel } from "@/components/HeroCarousel";
import { SectionHeader } from "@/components/SectionHeader";
import { articles } from "@/data/articles";
import {
  homeApplicationScenarios,
  homeProductCategories,
  homeSelectionGuide,
} from "@/data/home";

export const metadata: Metadata = {
  title: "Type-C Female Socket Manufacturer | USB-C Connector Factory",
  description:
    "Guangdong Yonghua Technology supplies Type-C female sockets, USB-C connectors, and precision connectors for overseas buyers, OEM electronics, and engineering teams.",
};

const popularGuides = articles.slice(0, 4);

export default function Home() {
  return (
    <>
      <HeroCarousel />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="Product Categories"
              title="Type-C connector categories for export sourcing"
              description="Start with pin count, mounting type, rated current, and waterproof demand before requesting samples."
            />
            <Link href="/products" className="text-sm font-semibold text-teal-700 hover:text-teal-900">
              View all product models
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {homeProductCategories.map((category) => (
              <Link
                href={category.href}
                key={category.title}
                className="industrial-card rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-slate-950">{category.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{category.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.specs.map((spec) => (
                    <span key={spec} className="rounded border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700">
                      {spec}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Product Selection Guide"
            title="How to select the right Type-C connector"
            description="Procurement and engineering teams can reduce sample mistakes by confirming application, pin count, mounting type, and rated current first."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {homeSelectionGuide.map((item) => (
              <div key={item.title} className="industrial-card rounded-lg p-6">
                <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutYonghua />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="Popular Guides"
              title="Connector sourcing guides for buyers and engineers"
              description="Read practical answers about Type-C socket selection, 16Pin vs 24Pin comparison, applications, and factory sourcing checks."
            />
            <Link href="/blog" className="text-sm font-semibold text-teal-700 hover:text-teal-900">
              Go to Knowledge Hub
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {popularGuides.map((article) => (
              <Link
                href={`/blog/${article.slug}`}
                key={article.slug}
                className="industrial-card rounded-lg p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
                  {article.category}
                </p>
                <h3 className="mt-3 text-lg font-bold leading-6 text-slate-950">{article.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Applications"
            title="Application scenarios for Type-C female sockets and USB-C connectors"
            description="Different end products need different connector structures, pin counts, soldering methods, and quality checks."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {homeApplicationScenarios.map((item) => (
              <div key={item.title} className="industrial-card rounded-lg p-6">
                <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Need a suitable Type-C connector for your project?"
        description="Send drawings, PCB footprint, pin count, current rating and target quantity. Yonghua can help confirm connector model, sample availability and quotation details."
        label="Send RFQ"
      />
    </>
  );
}
