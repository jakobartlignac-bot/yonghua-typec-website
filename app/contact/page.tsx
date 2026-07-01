import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "RFQ for Type-C Connectors",
  description:
    "Send an RFQ to Guangdong Yonghua Technology for Type-C female sockets, USB-C connectors, drawings, samples, and project matching.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="RFQ"
        title="Send a Type-C connector RFQ"
        description="Share your drawing, product application, pin count, mounting type, rated current, estimated quantity, and target delivery schedule."
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="space-y-6">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">RFQ Contact</h2>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="font-semibold text-slate-950">Company</dt>
                <dd className="mt-1 text-slate-600">Guangdong Yonghua Technology Co., Ltd.</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-950">Email</dt>
                <dd className="mt-1 text-slate-600">sales@yonghuatech.com</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-950">Products</dt>
                <dd className="mt-1 text-slate-600">
                  Type-C female sockets, USB-C connectors, precision interconnect components
                </dd>
              </div>
            </dl>
          </div>
          <a
            href="https://wa.me/8613800000000"
            className="block rounded-lg border border-teal-700 bg-teal-700 p-6 text-white shadow-sm hover:bg-teal-800"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-100">
              WhatsApp
            </p>
            <p className="mt-2 text-xl font-bold">Chat with sales on WhatsApp</p>
            <p className="mt-2 text-sm text-teal-50">
              Placeholder number. Replace it with the real export sales WhatsApp later.
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
            className="mt-6 rounded-md bg-teal-700 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800"
          >
            Submit RFQ
          </button>
          <p className="mt-4 text-xs leading-5 text-slate-500">
            Static form placeholder. It can be connected later to WordPress, CRM, email, or a form
            backend.
          </p>
        </form>
      </section>
    </>
  );
}
