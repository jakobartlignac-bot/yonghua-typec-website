import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { ProductComparisonTable } from "@/components/ProductComparisonTable";
import { ProductSpecTable } from "@/components/ProductSpecTable";
import { getProductBySlug, getProductCategory, products } from "@/data/products";

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.seoTitle,
    description: product.seoDescription,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const category = getProductCategory(product.category);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.seoDescription,
    category: category?.label ?? product.pinCount,
    brand: {
      "@type": "Brand",
      name: "Guangdong Yonghua Technology",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Guangdong Yonghua Technology Co., Ltd.",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={productJsonLd} />
      <JsonLd data={faqJsonLd} />
      <article>
        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="flex aspect-[4/3] items-center justify-center rounded-lg bg-slate-100 p-8">
              <img src={product.image} alt={product.name} className="h-full max-h-80 w-auto" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                {category?.label ?? product.pinCount} / {product.productLine}
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
                {product.name}
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">{product.description}</p>
              <dl className="mt-6 grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 text-sm sm:grid-cols-3">
                <div className="bg-white p-4">
                  <dt className="text-slate-500">Sample Lead Time</dt>
                  <dd className="mt-1 font-semibold text-slate-950">{product.sampleLeadTime}</dd>
                </div>
                <div className="bg-white p-4">
                  <dt className="text-slate-500">MOQ</dt>
                  <dd className="mt-1 font-semibold text-slate-950">{product.moq}</dd>
                </div>
                <div className="bg-white p-4">
                  <dt className="text-slate-500">Mounting</dt>
                  <dd className="mt-1 font-semibold text-slate-950">{product.mountingType}</dd>
                </div>
              </dl>
              <div className="mt-8">
                <ProductSpecTable parameters={product.parameters} />
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-md bg-teal-700 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800"
                >
                  Request Quotation
                </Link>
                <Link
                  href="/products"
                  className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100"
                >
                  Back to Products
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
              Buyer Applications
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">Application Scenarios</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Scenario copy is stored inside each mock product record so it can be mapped from a
              CMS field group later without changing this page.
            </p>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {product.applicationScenarios.map((scenario) => (
              <div key={scenario.title} className="rounded-lg border border-slate-200 bg-white p-5">
                <p className="font-semibold text-slate-950">{scenario.title}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{scenario.description}</p>
              </div>
            ))}
          </div>

          <ProductComparisonTable
            title={product.comparisonTitle}
            productName={product.name}
            alternativeName={product.comparisonAlternative}
            rows={product.comparisonRows}
          />

          <FaqSection faqs={product.faqs} />
        </section>
      </article>
      <CtaBand
        title={`Need pricing for ${product.name}?`}
        description="Send your drawing, PCB footprint, current rating, application, and estimated quantity."
      />
    </>
  );
}
