import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">404</p>
      <h1 className="mt-4 text-3xl font-bold text-slate-950">Page not found</h1>
      <p className="mt-4 text-slate-600">
        The page may have moved, or the product/article slug is not available.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-md bg-teal-700 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800"
      >
        Back to Home
      </Link>
    </section>
  );
}
