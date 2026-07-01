import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { articles, getArticleCategories } from "@/data/articles";

export const metadata: Metadata = {
  title: "Type-C Connector Knowledge Hub",
  description:
    "GEO SEO articles for overseas buyers sourcing USB Type-C connectors: industry knowledge, selection guides, comparisons, and application content.",
};

export default function BlogPage() {
  const categories = getArticleCategories();

  return (
    <>
      <PageHero
        eyebrow="Knowledge Hub"
        title="Type-C connector SEO content for overseas buyers"
        description="Industry knowledge, selection guides, comparison articles, and application pages built around real procurement questions."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {categories.map((category) => (
            <div key={category} className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-teal-700">{category}</p>
              <p className="mt-2 text-sm text-slate-600">Search intent content cluster</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <article key={article.slug} className="rounded-lg border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
                {article.category}
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                <Link href={`/blog/${article.slug}`}>{article.title}</Link>
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{article.excerpt}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {article.targetKeywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <Link
                href={`/blog/${article.slug}`}
                className="mt-5 inline-flex text-sm font-semibold text-teal-700 hover:text-teal-900"
              >
                Read SEO article
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
