import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { factoryCapabilities } from "@/data/factory";

export const metadata: Metadata = {
  title: "Type-C Connector Factory Capability and Quality Control",
  description:
    "Review Yonghua Type-C connector factory capability, sample support, production workflow, inspection process, and export order support.",
};

export default function FactoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Factory Capability"
        title="Type-C connector factory support for overseas sourcing"
        description="Review production workflow, sample coordination, quality checks, and export order support before sending a connector RFQ."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {factoryCapabilities.trustSignals.map((item) => (
            <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
                {item.label}
              </p>
              <p className="mt-3 font-semibold leading-6 text-slate-950">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <section className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-slate-950">Production Workflow</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              {factoryCapabilities.productionLines.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-slate-950">Equipment</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              {factoryCapabilities.equipment.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-slate-950">Quality Control</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              {factoryCapabilities.certifications.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {factoryCapabilities.capacity.map((item) => (
            <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
                {item.label}
              </p>
              <p className="mt-3 text-xl font-bold text-slate-950">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-slate-800 bg-slate-950 p-8 text-white">
          <h2 className="text-2xl font-bold">Request factory and product documents</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            Buyers can request connector drawings, sample support, model matching, production
            details, and quality inspection information before bulk order confirmation.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-md bg-teal-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-teal-400"
          >
            Contact Factory
          </Link>
        </div>
      </section>
    </>
  );
}
