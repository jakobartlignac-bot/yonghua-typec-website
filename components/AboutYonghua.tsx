import Image from "next/image";
import Link from "next/link";

type AboutStat = {
  icon: "company" | "facility" | "floors" | "team";
  value: string;
  unit?: "m2";
  label: string;
};

const aboutStats: AboutStat[] = [
  { icon: "company", value: "2001", label: "Established" },
  { icon: "facility", value: "7000", unit: "m2", label: "Factory Area" },
  { icon: "floors", value: "3", label: "Independent Factory Floors" },
  { icon: "team", value: "198", label: "Employees" },
];

function AboutIcon({
  name,
  className = "h-10 w-10",
}: {
  name: AboutStat["icon"];
  className?: string;
}) {
  const paths = {
    company: (
      <>
        <path d="M4.5 20.2V8.4l7.2-3.3 7.8 3.3v11.8" />
        <path d="M3.2 20.2h17.6" />
        <path d="M8.2 11h2.1M8.2 14.3h2.1M8.2 17.6h2.1" />
        <path d="M13.8 11h2.1M13.8 14.3h2.1M13.8 17.6h2.1" />
      </>
    ),
    facility: (
      <>
        <path d="M3.8 20.2V9.4l4.9 3.1V9.4l4.9 3.1V6h6v14.2" />
        <path d="M2.8 20.2h18.4" />
        <path d="M6.7 16.4h2.1M11.6 16.4h2.1M16.5 16.4h2.1" />
        <path d="M17.2 6V3.8h2.4V6" />
      </>
    ),
    floors: (
      <>
        <path d="M6.2 20.2V5.4h8.4v14.8" />
        <path d="M14.6 9.2h3.9v11" />
        <path d="M8.7 9h2.2M8.7 12.7h2.2M8.7 16.4h2.2" />
        <path d="M16.3 13h1.1M16.3 16.4h1.1" />
        <path d="M4 20.2h16" />
      </>
    ),
    team: (
      <>
        <path d="M9.8 11.4a3.7 3.7 0 1 0 0-7.4 3.7 3.7 0 0 0 0 7.4Z" />
        <path d="M3.8 20.2c.5-4 2.8-6.2 6-6.2s5.5 2.2 6 6.2" />
        <path d="M16 11.5a3.1 3.1 0 1 0 0-6.2" />
        <path d="M17.2 14.2c2.1.8 3.3 2.8 3.6 6" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}

export function AboutYonghua() {
  return (
    <section className="relative isolate overflow-hidden bg-[#020817] py-24 text-white">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_20%,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_85%_70%,rgba(20,184,166,0.12),transparent_34%),linear-gradient(135deg,#020617_0%,#061226_48%,#071827_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(34,211,238,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
      <div className="pointer-events-none absolute right-10 top-16 -z-10 h-72 w-72 bg-[radial-gradient(circle,rgba(34,211,238,0.35)_1px,transparent_1px)] bg-[size:18px_18px] opacity-30" />
      <div className="pointer-events-none absolute bottom-[-160px] right-[-120px] -z-10 h-[320px] w-[780px] rounded-full bg-cyan-400/15 blur-3xl" />

      <div className="relative mx-auto max-w-[1480px] px-6 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="max-w-[560px]">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-cyan-300">
              ONE-STOP CONNECTOR SOLUTIONS
            </p>
            <div className="mt-4 h-px w-16 bg-cyan-300" />
            <h2 className="mt-7 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
              About Yonghua
            </h2>
            <div className="mt-8 space-y-6 text-base leading-8 text-slate-300">
              <p>
                Yonghua is a professional manufacturer specializing in connectors, switches, and
                related products. Since our establishment in 2001, we have been committed to
                delivering reliable solutions through strong engineering capabilities, in-house
                manufacturing, and rigorous quality control.
              </p>
              <p>
                Our facility spans approximately 7,000 square meters and includes a 3-story
                independent factory building. With a skilled and dedicated team of 198 employees,
                we operate advanced production and testing equipment to ensure stable quality and
                consistent performance.
              </p>
              <p>
                From precision machining and plastic molding to assembly and testing, we implement
                a complete in-house production system. Our products are manufactured in strict
                accordance with international standards and support multiple certifications,
                including UL, CSA, VDE, CE, CQC, and RoHS.
              </p>
            </div>
            <Link
              href="/factory"
              className="mt-9 inline-flex h-14 items-center gap-4 rounded-xl border border-cyan-300/45 bg-slate-950/40 px-7 text-base font-bold text-white shadow-[0_0_28px_rgba(34,211,238,0.12)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-300/10 hover:shadow-[0_0_36px_rgba(34,211,238,0.22)]"
            >
              Explore Factory
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                aria-hidden="true"
                className="h-5 w-5 text-cyan-300"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -right-7 -top-7 -z-10 h-52 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="group relative aspect-[4/3] overflow-hidden rounded-[32px] border border-cyan-300/25 bg-white/5 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 sm:aspect-[1.42/1] lg:aspect-[1.38/1]">
              <Image
                src="/images/factory/about-campus.png"
                alt="Yonghua factory campus"
                fill
                priority={false}
                sizes="(min-width: 1280px) 58vw, (min-width: 1024px) 56vw, 100vw"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
              <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-80" />
              <div className="absolute bottom-[-28px] left-1/2 h-16 w-2/3 -translate-x-1/2 rounded-full bg-cyan-400/25 blur-2xl" />
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-12">
          <div className="grid grid-cols-1 gap-4 rounded-[28px] border border-white/10 bg-white/[0.045] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
            {aboutStats.map((item) => (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-2xl border border-cyan-300/15 bg-slate-950/45 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/[0.06]"
              >
                <div className="absolute bottom-0 left-1/2 h-px w-24 -translate-x-1/2 bg-cyan-300" />
                <div className="absolute bottom-[-24px] left-1/2 h-10 w-28 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-xl" />
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.12)]">
                  <AboutIcon name={item.icon} className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-4xl font-black leading-none tracking-[-0.03em] text-white">
                    {item.value}
                    {item.unit ? (
                      <span className="ml-1 text-lg font-semibold text-slate-200">
                        m<sup>2</sup>
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
