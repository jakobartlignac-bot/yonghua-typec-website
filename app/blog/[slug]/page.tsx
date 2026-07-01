import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { articles, getArticleBySlug } from "@/data/articles";

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
    author: {
      "@type": "Organization",
      name: "Guangdong Yonghua Technology Co., Ltd.",
    },
  };

  return (
    <article className="bg-white">
      <JsonLd data={articleJsonLd} />
      <JsonLd data={faqJsonLd} />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
            {article.category}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
            {article.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{article.excerpt}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {article.targetKeywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
              >
                {keyword}
              </span>
            ))}
          </div>

          <div className="mt-10 border-t border-slate-200 pt-8">
            <p className="text-base leading-8 text-slate-700">{article.content}</p>
            {article.sections.map((section) => (
              <section key={section.heading} className="mt-8">
                <h2 className="text-2xl font-bold text-slate-950">{section.heading}</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">{section.body}</p>
              </section>
            ))}
          </div>

          <FaqSection faqs={article.faqs} />
        </div>

        <aside className="h-fit rounded-lg border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
            Buyer Action
          </p>
          <h2 className="mt-3 text-xl font-bold text-slate-950">Need connector matching?</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Send your application, drawing, pin count, mounting type, current rating, and target
            quantity for RFQ support.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex rounded-md bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800"
          >
            Send RFQ
          </Link>
        </aside>
      </div>
    </article>
  );
}
