import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { ProductCard } from "@/components/ProductCard";
import { ProductComparisonTable } from "@/components/ProductComparisonTable";
import { ProductSpecTable } from "@/components/ProductSpecTable";
import { RelatedLinks } from "@/components/RelatedLinks";
import { getArticleBySlug } from "@/data/articles";
import { getProductBySlug, getProductCategory, products, type ProductParameter } from "@/data/products";

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
    keywords: product.keywords,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const category = getProductCategory(product.category);
  const coreKeyword = product.keywords[0] ?? product.productLine;
  const relatedArticles = product.relatedArticles
    .map((articleSlug) => getArticleBySlug(articleSlug))
    .filter((article) => article !== undefined);
  const relatedProducts = product.relatedProducts
    .map((productSlug) => getProductBySlug(productSlug))
    .filter((relatedProduct) => relatedProduct !== undefined);

  const technicalSpecifications: ProductParameter[] = [
    ...product.parameters,
    { label: "Materials", value: product.materials },
    { label: "Plating", value: product.plating },
    { label: "Operating Temperature", value: product.operatingTemperature },
    { label: "Lifecycle", value: product.lifecycle },
    { label: "Certifications", value: product.certifications.join(", ") },
  ];

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
    additionalProperty: technicalSpecifications.map((parameter) => ({
      "@type": "PropertyValue",
      name: parameter.label,
      value: parameter.value,
    })),
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
        <section className="border-b border-slate-800 bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
            <Breadcrumb
              dark
              items={[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: product.name },
              ]}
            />
          </div>
          <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="flex aspect-[4/3] items-center justify-center rounded-lg border border-slate-700 bg-slate-900 p-8">
              <img src={product.image} alt={product.imageAlt} className="h-full max-h-80 w-auto" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
                {category?.label ?? product.pinCount} / {product.productLine}
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white">
                {product.name} | {coreKeyword}
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-300">{product.description}</p>
              <dl className="mt-6 grid gap-px overflow-hidden rounded-lg border border-slate-700 bg-slate-700 text-sm sm:grid-cols-3">
                <div className="bg-slate-900 p-4">
                  <dt className="text-slate-400">Sample Lead Time</dt>
                  <dd className="mt-1 font-semibold text-white">{product.sampleLeadTime}</dd>
                </div>
                <div className="bg-slate-900 p-4">
                  <dt className="text-slate-400">MOQ</dt>
                  <dd className="mt-1 font-semibold text-white">{product.moq}</dd>
                </div>
                <div className="bg-slate-900 p-4">
                  <dt className="text-slate-400">Rated Current</dt>
                  <dd className="mt-1 font-semibold text-white">{product.ratedCurrent}</dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Request Quotation
                </Link>
                <Link href={product.datasheetUrl} className="rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                  Request Datasheet
                </Link>
                <Link
                  href={product.drawingUrl}
                  className="rounded-md border border-teal-400/60 px-5 py-3 text-sm font-semibold text-teal-200 hover:bg-teal-400/10"
                >
                  Request Drawing
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
                Key Features
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950">Procurement-ready product points</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Review feature fit before requesting samples, drawings, or bulk quotation.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {product.features.map((feature) => (
                <div key={feature} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-sm leading-6 text-slate-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-100">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
                Technical Specifications
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950">Parameters for engineering review</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Confirm these values with the product drawing and PCB footprint before final sample approval.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {product.certifications.map((certification) => (
                  <span
                    key={certification}
                    className="rounded border border-teal-200 bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-800"
                  >
                    {certification}
                  </span>
                ))}
              </div>
            </div>
            <ProductSpecTable parameters={technicalSpecifications} />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
              Application Scenarios
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">Where buyers use this connector</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Application fit should be checked together with product structure, enclosure design, current rating, and assembly process.
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
        </section>

        <section className="border-y border-slate-200 bg-slate-100">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
                Selection Notes
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950">Before you approve samples</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Use these notes to avoid mismatched connectors, PCB rework, and late-stage housing changes.
              </p>
            </div>
            <ul className="space-y-4">
              {product.selectionNotes.map((note) => (
                <li key={note} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                  <span className="text-sm leading-6 text-slate-700">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <ProductComparisonTable
            title={product.comparisonTitle}
            productName={product.name}
            alternativeName={product.comparisonAlternative}
            rows={product.comparisonRows}
          />

          <RelatedLinks
            eyebrow="Related Articles"
            title="Guides for better connector sourcing"
            links={relatedArticles.map((article) => ({
              title: article.title,
              href: `/blog/${article.slug}`,
              description: article.excerpt,
              meta: article.category,
            }))}
          />

          {relatedProducts.length > 0 ? (
            <section className="mt-12">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
                    Related Products
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-950">Compare nearby connector options</h2>
                </div>
                <Link href="/products" className="text-sm font-semibold text-teal-700 hover:text-teal-900">
                  View all products
                </Link>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.slug} product={relatedProduct} />
                ))}
              </div>
            </section>
          ) : null}

          <FaqSection faqs={product.faqs} />
        </section>
      </article>
      <CtaBand
        title={`Get quote for ${product.name}`}
        description="Send your drawing, PCB footprint, pin count, current rating, application, target quantity, datasheet needs, and sample schedule."
        label="Get Quote"
      />
    </>
  );
}
