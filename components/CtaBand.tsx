import Link from "next/link";

type CtaBandProps = {
  title: string;
  description: string;
  href?: string;
  label?: string;
};

export function CtaBand({
  title,
  description,
  href = "/contact",
  label = "Request a Quote",
}: CtaBandProps) {
  return (
    <section className="border-y border-slate-800 bg-[var(--deep-navy)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 text-white sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-300">
            Fast RFQ Response
          </p>
          <h2 className="mt-2 text-3xl font-bold">{title}</h2>
          <p className="mt-3 max-w-3xl text-slate-300">{description}</p>
        </div>
        <Link
          href={href}
          className="btn-primary w-full sm:w-auto"
        >
          {label}
        </Link>
      </div>
    </section>
  );
}
