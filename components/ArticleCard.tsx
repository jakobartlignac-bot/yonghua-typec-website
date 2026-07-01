import Link from "next/link";
import type { Article } from "@/data/articles";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
        {article.category}
      </p>
      <h3 className="mt-3 text-xl font-bold text-slate-950">
        <Link href={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{article.excerpt}</p>
      <Link
        href={`/blog/${article.slug}`}
        className="mt-5 inline-flex text-sm font-semibold text-teal-700 hover:text-teal-900"
      >
        Read article
      </Link>
    </article>
  );
}
