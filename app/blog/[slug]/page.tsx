import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { ProductCard } from "@/components/ProductCard";
import { RelatedLinks } from "@/components/RelatedLinks";
import { articles, getArticleBySlug } from "@/data/articles";
import { getProductBySlug } from "@/data/products";

type ArticleDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticleDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    keywords: article.targetKeywords,
  };
}

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedProducts = article.relatedProducts
    .map((productSlug) => getProductBySlug(productSlug))
    .filter((product) => product !== undefined);
  const relatedArticles = article.relatedArticles
    .map((articleSlug) => getArticleBySlug(articleSlug))
    .filter((relatedArticle) => relatedArticle !== undefined);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.seoDescription,
    articleSection: article.category,
    keywords: article.targetKeywords.join(", "),
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Organization",
      name: article.author,
    },
  };

  return (
    <>
      <article className="bg-white">
        <JsonLd data={articleJsonLd} />
        <JsonLd data={faqJsonLd} />
        <section className="border-b border-slate-800 bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
            <Breadcrumb
              dark
              items={[
                { label: "Home", href: "/" },
                { label: "Knowledge Hub", href: "/blog" },
                { label: article.title },
              ]}
            />
          </div>
          <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
                {article.category}
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white">{article.title}</h1>
              <p className="mt-5 text-lg leading-8 text-slate-300">{article.answerSummary}</p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.12em]">
                <span className="rounded border border-slate-700 bg-slate-900 px-2.5 py-1 text-slate-300">
                  {article.readingTime}
                </span>
                <span className="rounded border border-slate-700 bg-slate-900 px-2.5 py-1 text-slate-300">
                  Updated {article.updatedAt}
                </span>
              </div>
            </div>

            <aside className="h-fit rounded-lg border border-slate-700 bg-slate-900 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-300">
                Article Info
              </p>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-slate-400">Author</dt>
                  <dd className="font-semibold text-white">{article.author}</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Published</dt>
                  <dd className="font-semibold text-white">{article.publishedAt}</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Keywords</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {article.targetKeywords.map((keyword) => (
                      <span key={keyword} className="rounded bg-slate-800 px-2 py-1 text-xs text-slate-300">
                        {keyword}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
          <div className="max-w-3xl">
            <section className="rounded-lg border border-teal-200 bg-teal-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-800">
                Direct Answer
              </p>
              <p className="mt-3 text-lg leading-8 text-slate-900">{article.answerSummary}</p>
            </section>

            <section className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-bold text-slate-950">Table of Contents</h2>
              <ol className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
                {article.tableOfContents.map((item, index) => (
                  <li key={item}>
                    <a href={`#section-${index + 1}`} className="hover:text-teal-700">
                      {index + 1}. {item}
                    </a>
                  </li>
                ))}
              </ol>
            </section>

            <div className="mt-10 border-t border-slate-200 pt-8">
              {article.sections.map((section, index) => (
                <section key={section.heading} id={`section-${index + 1}`} className="mt-8 first:mt-0">
                  <h2 className="text-2xl font-bold text-slate-950">{section.heading}</h2>
                  <p className="mt-3 text-base leading-8 text-slate-700">{section.body}</p>
                  {section.subsections.map((subsection) => (
                    <div key={subsection.heading} className="mt-5">
                      <h3 className="text-xl font-bold text-slate-950">{subsection.heading}</h3>
                      <p className="mt-2 text-base leading-8 text-slate-700">{subsection.body}</p>
                    </div>
                  ))}
                </section>
              ))}
            </div>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-slate-950">Comparison Table</h2>
              <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 bg-white">
                <table className="min-w-[720px] w-full text-left text-sm">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Item</th>
                      <th className="px-4 py-3 font-semibold">Best For</th>
                      <th className="px-4 py-3 font-semibold">Buyer Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {article.comparisonTable.map((row) => (
                      <tr key={row.item} className="border-b border-slate-200 last:border-b-0">
                        <td className="px-4 py-3 font-semibold text-slate-950">{row.item}</td>
                        <td className="px-4 py-3 text-slate-700">{row.bestFor}</td>
                        <td className="px-4 py-3 text-slate-700">{row.buyerNote}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {relatedProducts.length > 0 ? (
              <section className="mt-12">
                <h2 className="text-2xl font-bold text-slate-950">Related Products</h2>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {relatedProducts.map((product) => (
                    <ProductCard key={product.slug} product={product} />
                  ))}
                </div>
              </section>
            ) : null}

            <RelatedLinks
              title="Related Articles"
              links={relatedArticles.map((relatedArticle) => ({
                title: relatedArticle.title,
                href: `/blog/${relatedArticle.slug}`,
                description: relatedArticle.excerpt,
                meta: relatedArticle.category,
              }))}
            />

            <FaqSection faqs={article.faqs} />
          </div>

          <aside className="h-fit rounded-lg border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
              RFQ Checklist
            </p>
            <h2 className="mt-3 text-xl font-bold text-slate-950">Prepare these details</h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
              {article.buyerChecklist.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </article>
      <CtaBand
        title="Need help choosing a Type-C connector?"
        description="Send drawings, PCB footprint, pin count, current rating, application and target quantity. Yonghua can help match a suitable connector model."
        label="Send RFQ"
      />
    </>
  );
}
