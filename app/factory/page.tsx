import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { factoryCapabilities } from "@/data/factory";

export const metadata: Metadata = {
  title: "Type-C Connector Factory Capabilities",
  description:
    "Production lines, equipment, certification process, capacity, and quality control information for Type-C connector sourcing.",
};

export default function FactoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Factory Capability"
        title="Production capability for Type-C connector sourcing"
        description="Factory capability pages support buyer trust after SEO content and product pages bring qualified overseas traffic."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {factoryCapabilities.capacity.map((item) => (
            <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
                {item.label}
              </p>
              <p className="mt-3 text-xl font-bold text-slate-950">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <section className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-slate-950">Production Lines</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              {factoryCapabilities.productionLines.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-slate-950">Equipment</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              {factoryCapabilities.equipment.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-slate-950">Certification and QC</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              {factoryCapabilities.certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-10 rounded-lg bg-teal-700 p-8 text-white">
          <h2 className="text-2xl font-bold">Request factory and product documents</h2>
          <p className="mt-3 text-teal-50">
            Buyers can request drawings, sample support, production details, and quality inspection
            information.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-md bg-white px-5 py-3 text-sm font-semibold text-teal-800 hover:bg-slate-100"
          >
            Contact Factory
          </Link>
        </div>
      </section>
    </>
  );
}
