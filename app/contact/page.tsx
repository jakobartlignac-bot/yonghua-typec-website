import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { contactPageContent } from "@/data/contact";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `${contactPageContent.seoTitle} | ${siteConfig.companyName}`,
  description: contactPageContent.seoDescription,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={contactPageContent.hero.eyebrow}
        title={contactPageContent.hero.title}
        description={contactPageContent.hero.description}
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="space-y-6">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">RFQ Contact</h2>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="font-semibold text-slate-950">Company</dt>
                <dd className="mt-1 text-slate-600">{siteConfig.companyName}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-950">Email</dt>
                <dd className="mt-1 text-slate-600">{siteConfig.email}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-950">Products</dt>
                <dd className="mt-1 text-slate-600">
                  6Pin, 16Pin, and 24Pin USB Type-C female sockets and connectors
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-bold text-slate-950">Include these details</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              {contactPageContent.rfqChecklist.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={siteConfig.whatsapp}
            className="block rounded-lg border border-slate-800 bg-slate-950 p-6 text-white shadow-sm hover:bg-slate-900"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-300">
              WhatsApp
            </p>
            <p className="mt-2 text-xl font-bold">Chat with export sales</p>
            <p className="mt-2 text-sm text-slate-300">
              {contactPageContent.whatsappNote}
            </p>
          </a>
        </div>

        <form className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-slate-900">
              Name
              <input
                className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 font-normal outline-none focus:border-teal-700"
                placeholder="Your name"
              />
            </label>
            <label className="text-sm font-semibold text-slate-900">
              Email
              <input
                type="email"
                className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 font-normal outline-none focus:border-teal-700"
                placeholder="name@company.com"
              />
            </label>
            <label className="text-sm font-semibold text-slate-900">
              Company
              <input
                className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 font-normal outline-none focus:border-teal-700"
                placeholder="Company name"
              />
            </label>
            <label className="text-sm font-semibold text-slate-900">
              Product Type
              <input
                className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 font-normal outline-none focus:border-teal-700"
                placeholder="16 pin Type-C socket, 24 pin connector..."
              />
            </label>
            <label className="text-sm font-semibold text-slate-900">
              Estimated Quantity
              <input
                className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 font-normal outline-none focus:border-teal-700"
                placeholder="10K pcs / 50K pcs..."
              />
            </label>
            <label className="text-sm font-semibold text-slate-900">
              Target Market
              <input
                className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 font-normal outline-none focus:border-teal-700"
                placeholder="US, EU, Middle East..."
              />
            </label>
          </div>
          <label className="mt-5 block text-sm font-semibold text-slate-900">
            RFQ Details
            <textarea
              className="mt-2 min-h-40 w-full rounded-md border border-slate-300 px-3 py-2 font-normal outline-none focus:border-teal-700"
              placeholder="Include drawing link, pin count, mounting type, rated current, application, sample schedule, packaging needs, and target delivery date."
            />
          </label>
          <button
            type="button"
            className="btn-primary mt-6"
          >
            Submit RFQ
          </button>
          <p className="mt-4 text-xs leading-5 text-slate-500">
            {contactPageContent.formNote}
          </p>
        </form>
      </section>
    </>
  );
}
