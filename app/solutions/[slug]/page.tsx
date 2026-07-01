import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { ProductCard } from "@/components/ProductCard";
import { RelatedLinks } from "@/components/RelatedLinks";
import { getArticleBySlug } from "@/data/articles";
import { getProductBySlug } from "@/data/products";
import { getSolutionBySlug, solutions } from "@/data/solutions";

type SolutionDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: SolutionDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return {
      title: "Solution Not Found",
    };
  }

  return {
    title: solution.seoTitle,
    description: solution.seoDescription,
    keywords: solution.keywords,
  };
}

export default async function SolutionDetailPage({ params }: SolutionDetailPageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  const recommendedProducts = solution.recommendedProductSlugs
    .map((productSlug) => getProductBySlug(productSlug))
    .filter((product) => product !== undefined);
  const relatedArticles = solution.relatedArticleSlugs
    .map((articleSlug) => getArticleBySlug(articleSlug))
    .filter((article) => article !== undefined);

  return (
    <>
      <article>
        <section className="border-b border-slate-800 bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
            <Breadcrumb
              dark
              items={[
                { label: "Home", href: "/" },
                { label: "Solutions", href: "/solutions" },
                { label: solution.industry },
              ]}
            />
          </div>
          <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
                Application Solution
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white">
                {solution.industry} Type-C Connector Solution
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-300">{solution.description}</p>
            </div>
            <aside className="h-fit rounded-lg border border-slate-700 bg-slate-900 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-300">
                Buyer Note
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{solution.buyerNote}</p>
            </aside>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
              Pain Points
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">Industry pain points buyers should check</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {solution.painPoints.map((point) => (
              <div key={point} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm leading-6 text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-100">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
                Connector Requirements
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950">Technical and sourcing requirements</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Confirm these requirements before requesting drawings, samples, or bulk pricing.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {solution.connectorNeeds.map((need) => (
                <div key={need} className="rounded-lg border border-slate-200 bg-white p-5">
                  <p className="font-semibold text-slate-950">{need}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
                Selection Tips
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950">How to select a connector for this application</h2>
            </div>
            <ul className="space-y-4">
              {solution.selectionTips.map((tip) => (
                <li key={tip} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                  <span className="text-sm leading-6 text-slate-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {recommendedProducts.length > 0 ? (
          <section className="border-y border-slate-200 bg-slate-100">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
                    Recommended Products
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-950">Connector models to review first</h2>
                </div>
                <Link href="/products" className="text-sm font-semibold text-teal-700 hover:text-teal-900">
                  View all products
                </Link>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {recommendedProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <RelatedLinks
            eyebrow="Related Articles"
            title="Useful guides for this application"
            links={relatedArticles.map((article) => ({
              title: article.title,
              href: `/blog/${article.slug}`,
              description: article.excerpt,
              meta: article.category,
            }))}
          />

          <FaqSection faqs={solution.faqs} />
        </section>
      </article>
      <CtaBand
        title={`Send Solution RFQ for ${solution.industry}`}
        description="Share your device application, drawing, PCB footprint, pin count, current rating, environment, target quantity, and sample schedule."
        label="Send Solution RFQ"
      />
    </>
  );
}
