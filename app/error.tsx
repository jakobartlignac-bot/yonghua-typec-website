"use client";

import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
        Application error
      </p>
      <h1 className="mt-4 text-3xl font-bold text-slate-950">Something went wrong</h1>
      <p className="mt-4 text-slate-600">
        {error.message || "Please try again or return to the home page."}
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <button
          type="button"
          onClick={reset}
          className="rounded-md bg-teal-700 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100"
        >
          Home
        </Link>
      </div>
    </section>
  );
}
