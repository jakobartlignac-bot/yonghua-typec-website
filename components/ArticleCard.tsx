import Link from "next/link";
import type { Article } from "@/data/articles";
import { getProductBySlug } from "@/data/products";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  const relatedProduct = article.relatedProducts[0]
    ? getProductBySlug(article.relatedProducts[0])
    : undefined;

  return (
    <article className="industrial-card flex h-full flex-col rounded-lg p-6">
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]">
        <span className="text-teal-700">{article.category}</span>
        <span className="text-slate-400">/</span>
        <span className="text-slate-500">{article.readingTime}</span>
      </div>
      <h3 className="mt-3 text-xl font-bold text-slate-950">
        <Link href={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{article.excerpt}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {article.targetKeywords.slice(0, 2).map((keyword) => (
          <span key={keyword} className="rounded bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
            {keyword}
          </span>
        ))}
      </div>
      {relatedProduct ? (
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
          Related Product: <span className="text-slate-800">{relatedProduct.name}</span>
        </p>
      ) : null}
      <Link
        href={`/blog/${article.slug}`}
        className="mt-auto inline-flex pt-5 text-sm font-semibold text-teal-700 hover:text-teal-900"
      >
        Read buyer answer
      </Link>
    </article>
  );
}
