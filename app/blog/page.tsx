import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { articles, getArticleCategories } from "@/data/articles";

export const metadata: Metadata = {
  title: "Type-C Connector GEO Answer Hub",
  description:
    "GEO answer hub for Type-C connector buyers comparing pin count, PCB design, applications, quality tests, and China supplier selection.",
};

export default function BlogPage() {
  const categories = getArticleCategories();

  return (
    <>
      <PageHero
        eyebrow="GEO Answer Hub"
        title="Type-C connector sourcing answers for buyers and engineers"
        description="Find direct answers about Type-C female connectors, 6Pin / 16Pin / 24Pin differences, PCB selection, applications, factory sourcing, and RFQ preparation."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-5">
          {categories.map((category) => (
            <a
              key={category}
              href={`#${category.toLowerCase().replaceAll(" ", "-")}`}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm hover:border-teal-600"
            >
              <p className="text-sm font-semibold text-teal-700">{category}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {articles.filter((article) => article.category === category).length} answers
              </p>
            </a>
          ))}
        </div>

        <div className="mt-12 space-y-14">
          {categories.map((category) => {
            const categoryArticles = articles.filter((article) => article.category === category);

            return (
              <section key={category} id={category.toLowerCase().replaceAll(" ", "-")}>
                <div className="border-b border-slate-200 pb-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
                    {category}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-950">
                    {category} answers for Type-C connector sourcing
                  </h2>
                </div>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {categoryArticles.map((article) => (
                    <article
                      key={article.slug}
                      className="flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:border-teal-600"
                    >
                      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                        <span className="text-teal-700">{article.category}</span>
                        <span>{article.readingTime}</span>
                      </div>
                      <h3 className="mt-3 text-2xl font-bold text-slate-950">
                        <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{article.excerpt}</p>
                      <div className="mt-5 rounded-md border border-slate-200 bg-slate-50 p-4">
                        <p className="text-sm font-semibold text-slate-950">Direct Answer</p>
                        <p className="mt-2 text-sm leading-6 text-slate-700">{article.answerSummary}</p>
                      </div>
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
                        className="mt-auto inline-flex pt-5 text-sm font-semibold text-teal-700 hover:text-teal-900"
                      >
                        Read answer page
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </>
  );
}
