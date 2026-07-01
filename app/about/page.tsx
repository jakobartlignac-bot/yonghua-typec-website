import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Guangdong Yonghua Technology",
  description:
    "Learn about Guangdong Yonghua Technology, a Type-C connector and precision interconnect component manufacturer.",
};

const capabilities = [
  "Type-C female socket and connector production",
  "Sample support for overseas buyers",
  "Drawing and specification communication",
  "Connector selection for OEM electronics projects",
  "Stable supply for cross-border sellers and factories",
  "Application support for consumer and industrial devices",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Guangdong Yonghua Technology Co., Ltd."
        description="A connector manufacturer serving global electronics projects with Type-C sockets, Type-C connectors, and precision interconnect solutions."
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-950">Factory profile</h2>
          <p className="mt-5 leading-8 text-slate-600">
            Guangdong Yonghua Technology focuses on practical connector supply for electronics
            manufacturers, procurement teams, engineers, and cross-border sellers. The website is
            structured to show product specifications clearly and collect inquiry information for
            fast quotation follow-up.
          </p>
          <p className="mt-5 leading-8 text-slate-600">
            Our product direction includes Type-C female sockets, Type-C connectors, waterproof
            Type-C connector options, and precision interconnect components for compact electronic
            products.
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
    </>
  );
}
