import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Yonghua Technology | Type-C Connector Supplier",
  description:
    "Learn about Guangdong Yonghua Technology, a Type-C connector supplier supporting overseas OEM buyers with samples, drawings, and factory-direct RFQ communication.",
};

const capabilities = [
  "6Pin, 16Pin, and 24Pin Type-C connector supply",
  "Sample support for overseas buyers",
  "Drawing and PCB footprint communication",
  "Connector selection for OEM electronics projects",
  "Stable supply for repeat export orders",
  "Application support for consumer and industrial devices",
];

const buyerValues = [
  {
    title: "Clear technical communication",
    description:
      "Buyers can send drawings, product photos, PCB requirements, or reference models for connector matching.",
  },
  {
    title: "Factory-direct sourcing",
    description:
      "Direct communication helps reduce model confusion, sample delay, and quotation gaps during early sourcing.",
  },
  {
    title: "Export RFQ mindset",
    description:
      "Quotation discussions include quantity, packing, sample schedule, lead time, and target application.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Guangdong Yonghua Technology Co., Ltd."
        description="A Type-C connector supplier supporting overseas electronics buyers with product selection, samples, drawings, quality checks, and repeat order communication."
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
            Factory Profile
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950">Connector supply for export projects</h2>
          <p className="mt-5 leading-8 text-slate-600">
            Guangdong Yonghua Technology focuses on practical connector supply for electronics
            manufacturers, procurement teams, engineers, and cross-border product companies. The
            product range includes Type-C female sockets, Type-C connectors, waterproof Type-C
            options, and compact interconnect components.
          </p>
          <p className="mt-5 leading-8 text-slate-600">
            The website is structured around real buyer questions: which pin count to choose, what
            drawing to confirm, how to request samples, and what information is needed for an RFQ.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {capabilities.map((capability) => (
            <div key={capability} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <p className="font-semibold text-slate-950">{capability}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-100">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
          {buyerValues.map((item) => (
            <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-bold text-slate-950">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
