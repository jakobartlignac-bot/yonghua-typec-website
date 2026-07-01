import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  dark?: boolean;
};

export function Breadcrumb({ items, dark = false }: BreadcrumbProps) {
  const textClass = dark ? "text-slate-400" : "text-slate-500";
  const linkClass = dark ? "hover:text-white" : "hover:text-teal-700";
  const currentClass = dark ? "text-slate-200" : "text-slate-900";

  return (
    <nav className={`flex flex-wrap items-center gap-2 text-sm ${textClass}`} aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={`${item.label}-${index}`} className="flex items-center gap-2">
            {item.href && !isLast ? (
              <Link href={item.href} className={linkClass}>
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? currentClass : undefined}>{item.label}</span>
            )}
            {!isLast ? <span>/</span> : null}
          </span>
        );
      })}
    </nav>
  );
}
