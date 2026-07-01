import Link from "next/link";

type RelatedLink = {
  title: string;
  href: string;
  description?: string;
  meta?: string;
};

type RelatedLinksProps = {
  eyebrow?: string;
  title: string;
  links: RelatedLink[];
};

export function RelatedLinks({ eyebrow, title, links }: RelatedLinksProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <section className="mt-12">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 text-2xl font-bold text-slate-950">{title}</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="industrial-card rounded-lg p-5">
            {link.meta ? (
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
                {link.meta}
              </p>
            ) : null}
            <h3 className="mt-2 font-bold leading-6 text-slate-950">{link.title}</h3>
            {link.description ? (
              <p className="mt-3 text-sm leading-6 text-slate-600">{link.description}</p>
            ) : null}
          </Link>
        ))}
      </div>
    </section>
  );
}
