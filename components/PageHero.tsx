type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-slate-800 bg-[var(--deep-navy)] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8 lg:py-16">
        <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{description}</p>
        </div>
        <div className="hidden rounded-lg border border-slate-700 bg-slate-900 p-5 lg:block">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-300">
            Factory RFQ Focus
          </p>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between gap-4 border-b border-slate-800 pb-3">
              <dt className="text-slate-400">Products</dt>
              <dd className="font-semibold text-white">6Pin / 16Pin / 24Pin</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-slate-800 pb-3">
              <dt className="text-slate-400">Support</dt>
              <dd className="font-semibold text-white">Drawing + Samples</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-400">Buyer Files</dt>
              <dd className="font-semibold text-white">PCB Footprint</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
