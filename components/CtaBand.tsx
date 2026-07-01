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
    <section className="bg-teal-700">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 text-white sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="mt-3 text-teal-50">{description}</p>
        </div>
        <Link
          href={href}
          className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-teal-800 hover:bg-slate-100"
        >
          {label}
        </Link>
      </div>
    </section>
  );
}
