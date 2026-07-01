import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { SectionHeader } from "@/components/SectionHeader";
import { articles } from "@/data/articles";
import { factoryCapabilities } from "@/data/factory";
import {
  homeApplicationScenarios,
  homeProductCategories,
  homeRfqDetails,
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
      <section className="border-b border-slate-800 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
              Guangdong Yonghua Technology Co., Ltd.
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
              Type-C Female Socket Manufacturer for OEM Electronics Buyers
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Guangdong Yonghua Technology supplies Type-C female sockets, USB-C connectors, and
              precision connectors for overseas procurement teams, engineering projects, and
              electronics factories.
            </p>
            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              <Link href="/products" className="btn-primary">
                View Products
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/25 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
              >
                Send RFQ
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-teal-400/60 px-5 py-3 text-sm font-bold text-teal-200 hover:bg-teal-400/10"
              >
                Request Datasheet
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-slate-700 bg-slate-900 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-300">
              RFQ Information Buyers Usually Send
            </p>
            <dl className="mt-5 grid gap-px overflow-hidden rounded-md border border-slate-700 bg-slate-700 text-sm">
              {homeRfqDetails.map((item) => (
                <div key={item.label} className="grid gap-1 bg-slate-900 p-4 sm:grid-cols-[120px_1fr] sm:gap-0 sm:p-0">
                  <dt className="text-slate-400 sm:border-r sm:border-slate-700 sm:px-4 sm:py-3">
                    {item.label}
                  </dt>
                  <dd className="font-semibold text-white sm:px-4 sm:py-3">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

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

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
              Factory Capability
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Factory data overseas buyers can check before RFQ
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Yonghua supports product matching, sample review, quality documentation, and repeat
              supply for electronics manufacturing projects.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {factoryCapabilities.factoryStats.map((item) => (
              <div key={item.label} className="rounded-lg border border-slate-700 bg-slate-900 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-teal-300">
                  {item.label}
                </p>
                <p className="mt-3 text-2xl font-bold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
