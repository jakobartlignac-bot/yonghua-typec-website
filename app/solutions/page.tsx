import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { solutions } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Type-C Connector Solutions by Application Industry",
  description:
    "Type-C connector application solutions for industrial electronics, automotive accessories, and consumer electronics sourcing projects.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Type-C connector solutions by device application"
        description="Match connector structure, pin count, current rating, and sealing demand with the actual product environment before confirming samples."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {solutions.map((solution) => (
            <article key={solution.slug} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
                Industry Application
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                <Link href={`/solutions/${solution.slug}`}>{solution.industry}</Link>
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{solution.description}</p>

              <div className="mt-5 rounded-md border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-950">Buyer Note</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{solution.buyerNote}</p>
              </div>

              <h3 className="mt-6 font-semibold text-slate-950">Connector Needs</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {solution.connectorNeeds.map((need) => (
                  <li key={need} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-600" />
                    <span>{need}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-6 font-semibold text-slate-950">Recommended Products</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {solution.recommendedProducts.map((product) => (
                  <li key={product}>{product}</li>
                ))}
              </ul>
              <Link
                href={`/solutions/${solution.slug}`}
                className="mt-6 inline-flex text-sm font-semibold text-teal-700 hover:text-teal-900"
              >
                View solution details
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-lg border border-slate-800 bg-slate-950 p-8 text-white">
          <h2 className="text-2xl font-bold">Need an application-specific connector review?</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            Share your industry, device structure, drawing, current rating, pin count, and target
            volume. Yonghua will help shortlist suitable Type-C connector models.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-md bg-teal-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-teal-400"
          >
            Send Solution RFQ
          </Link>
        </div>
      </section>
    </>
  );
}
