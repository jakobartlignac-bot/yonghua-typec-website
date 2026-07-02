import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { PageHero } from "@/components/PageHero";
import { articles, getArticleCategories } from "@/data/articles";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Type-C Connector Knowledge Hub | ${siteConfig.companyName}`,
  description:
    "Knowledge hub for Type-C connector buyers comparing pin count, PCB design, applications, quality tests, and China supplier selection.",
};

export default function BlogPage() {
  const categories = getArticleCategories();

  return (
    <>
      <PageHero
        eyebrow="Knowledge Hub"
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
                    <ArticleCard key={article.slug} article={article} />
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
