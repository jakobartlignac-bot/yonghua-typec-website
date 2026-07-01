import type { FaqItem } from "@/data/articles";

type FaqSectionProps = {
  faqs: FaqItem[];
};

export function FaqSection({ faqs }: FaqSectionProps) {
  return (
    <section className="mt-12 border-t border-slate-200 pt-10">
      <h2 className="text-2xl font-bold text-slate-950">FAQ</h2>
      <div className="mt-6 space-y-4">
        {faqs.map((faq) => (
          <div key={faq.question} className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-950">{faq.question}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
