import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.defaultSeoTitle,
    template: `%s | ${siteConfig.companyName}`,
  },
  description: siteConfig.defaultSeoDescription,
  metadataBase: new URL(siteConfig.siteUrl),
};

const navigation = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Knowledge" },
  { href: "/solutions", label: "Solutions" },
  { href: "/factory", label: "Factory" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:flex-nowrap lg:px-8">
            <Link href="/" className="min-w-0 flex-1 lg:flex-none">
              <span className="block truncate text-base font-bold tracking-wide text-slate-950">
                Yonghua Technology
              </span>
              <span className="block truncate text-xs uppercase tracking-[0.12em] text-slate-500 sm:tracking-[0.18em]">
                USB Type-C Connectors
              </span>
            </Link>
            <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 md:flex">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-teal-700">
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/contact"
              className="btn-primary min-h-10 px-3 py-2 text-xs sm:px-4 sm:text-sm"
            >
              RFQ
            </Link>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
            <div>
              <p className="font-semibold text-white">{siteConfig.companyName}</p>
              <p className="mt-3 text-sm leading-6">
                Factory-direct USB Type-C connector supply for overseas OEM electronics projects,
                charging accessories, wearables, industrial handhelds, and compact PCB assemblies.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white">Products</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>6Pin Type-C sockets</li>
                <li>16Pin Type-C female sockets</li>
                <li>24Pin Type-C connectors</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white">Buyer Support</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>Drawing review</li>
                <li>Sample coordination</li>
                <li>Application matching</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white">RFQ</p>
              <p className="mt-3 text-sm leading-6">
                Email: {siteConfig.email}
                <br />
                Send: drawing, pin count, current rating, application, quantity
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
