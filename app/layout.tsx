import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Guangdong Yonghua Technology | Type-C Connector Manufacturer",
    template: "%s | Guangdong Yonghua Technology",
  },
  description:
    "Guangdong Yonghua Technology manufactures Type-C receptacles, Type-C connectors, and precision interconnect components for global electronics buyers.",
  metadataBase: new URL("https://www.yonghuatech.com"),
};

const navigation = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Knowledge" },
  { href: "/solutions", label: "Solutions" },
  { href: "/factory", label: "Factory" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/" className="flex flex-col">
              <span className="text-base font-bold tracking-wide text-slate-950">
                Yonghua Technology
              </span>
              <span className="text-xs uppercase tracking-[0.18em] text-slate-500">
                Precision Connectors
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
              className="rounded-md bg-teal-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-800"
            >
              Send Inquiry
            </Link>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
            <div>
              <p className="font-semibold text-white">Guangdong Yonghua Technology Co., Ltd.</p>
              <p className="mt-3 text-sm leading-6">
                Focused on Type-C receptacles, Type-C connectors, and precision connector solutions
                for overseas electronics supply chains.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white">SEO Content Hubs</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>Type-C Selection Guides</li>
                <li>Connector Comparisons</li>
                <li>Application Solutions</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white">Inquiry</p>
              <p className="mt-3 text-sm leading-6">
                Email: sales@yonghuatech.com
                <br />
                Response: quotation, drawing review, sample support
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
