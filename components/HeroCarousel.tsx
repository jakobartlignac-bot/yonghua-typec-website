import Image from "next/image";
import Link from "next/link";

type IconName = "shield" | "award" | "factory" | "leaf" | "chart" | "zap" | "gear" | "document";

type Certificate = {
  icon: IconName;
  image: string;
  title: string;
  detail: string;
};

type Stat = {
  icon: IconName;
  value: string;
  unit?: string;
  label: string;
};

type FactoryImage = {
  title: string;
  src: string;
};

type HeroSlide = {
  years: string;
  titleLines: string[];
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  certificates: Certificate[];
  stats: Stat[];
  images: FactoryImage[];
};

const slides: HeroSlide[] = [
  {
    years: "15",
    titleLines: ["Years Focused on", "Connector R&D"],
    description:
      "One-stop service from product design and metal stamping to injection molding, assembly and testing.",
    primaryCta: {
      label: "Explore Factory",
      href: "/factory",
    },
    secondaryCta: {
      label: "Request Quote",
      href: "/contact",
    },
    certificates: [
      { icon: "shield", image: "/images/certifications/rohs-v2.png", title: "RoHS", detail: "Compliant" },
      { icon: "award", image: "/images/certifications/member-v2.png", title: "Member", detail: "Certificate" },
      { icon: "factory", image: "/images/certifications/iso-9001-v2.png", title: "ISO 9001", detail: "Quality Management" },
      { icon: "leaf", image: "/images/certifications/iso-14001-v2.png", title: "ISO 14001", detail: "Environmental Management" },
    ],
    stats: [
      { icon: "chart", value: "7000", unit: "m²", label: "Factory Area" },
      { icon: "zap", value: "40M+", label: "Annual Output" },
      { icon: "gear", value: "120+", label: "Production Equipment" },
      { icon: "document", value: "20+", label: "Patents" },
    ],
    images: [
      { title: "Factory Campus", src: "/images/factory/factory-campus-real.png" },
      { title: "Production Line", src: "/images/factory/production-line-real.png" },
      { title: "Workshop", src: "/images/factory/workshop-real.png" },
      { title: "Testing Lab", src: "/images/factory/testing-lab-real.png" },
    ],
  },
];

function HeroIcon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  const paths = {
    shield: (
      <>
        <path d="M12 3.5 18.5 6v5.2c0 4.2-2.7 7.9-6.5 9.3-3.8-1.4-6.5-5.1-6.5-9.3V6L12 3.5Z" />
        <path d="m9.4 12 1.7 1.7 3.7-4" />
      </>
    ),
    award: (
      <>
        <path d="M12 14.5a5.2 5.2 0 1 0 0-10.4 5.2 5.2 0 0 0 0 10.4Z" />
        <path d="m8.8 13.3-1.1 6.2 4.3-2.4 4.3 2.4-1.1-6.2" />
      </>
    ),
    factory: (
      <>
        <path d="M3.8 20.2V9.5l5.2 3.2V9.5l5.2 3.2V6.2h5.9v14" />
        <path d="M2.8 20.2h18.4" />
        <path d="M7 16.2h2.1M12 16.2h2.1M17 16.2h2.1" />
      </>
    ),
    leaf: (
      <>
        <path d="M5.5 19.2c7.4-.2 13-5.8 13-13.4-7.6.1-13.1 5.8-13 13.4Z" />
        <path d="M5.8 19c1.1-3.7 3.5-6.7 7.3-9" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19.5h16" />
        <path d="M6.5 16.5v-4M12 16.5V8M17.5 16.5V5.5" />
        <path d="m6.5 10.5 5.5-4 5.5-2.5" />
      </>
    ),
    zap: <path d="M13.2 2.8 5 13.2h6.2l-.5 8 8.3-11h-6.4l.6-7.4Z" />,
    gear: (
      <>
        <path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z" />
        <path d="M18.7 13.2c.1-.4.1-.8.1-1.2s0-.8-.1-1.2l2-1.5-2-3.4-2.4 1a8.2 8.2 0 0 0-2-1.2L14 3h-4l-.4 2.7c-.7.3-1.4.7-2 1.2l-2.4-1-2 3.4 2 1.5c-.1.4-.1.8-.1 1.2s0 .8.1 1.2l-2 1.5 2 3.4 2.4-1c.6.5 1.3.9 2 1.2L10 21h4l.4-2.7c.7-.3 1.4-.7 2-1.2l2.4 1 2-3.4-2.1-1.5Z" />
      </>
    ),
    document: (
      <>
        <path d="M7 3.8h7l3.5 3.7v12.7H7V3.8Z" />
        <path d="M14 3.8v4h3.5" />
        <path d="M9.8 12h4.7M9.8 15.5h6" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}

export function HeroCarousel() {
  const slide = slides[0];

  return (
    <section className="relative isolate overflow-hidden bg-[#020817] text-white">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(20,184,166,0.13),transparent_35%),linear-gradient(135deg,#020617_0%,#061226_48%,#071827_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-35 [background-image:linear-gradient(rgba(34,211,238,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.045)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute bottom-[-130px] right-[-80px] -z-10 h-[280px] w-[820px] rounded-full border-t border-cyan-300/35 bg-cyan-400/18 blur-3xl" />
      <div className="absolute bottom-[-42px] right-[-140px] -z-10 h-[160px] w-[920px] rotate-[-8deg] rounded-[100%] border-t border-cyan-300/45 opacity-80" />
      <div className="absolute bottom-[-8px] right-[-160px] -z-10 h-[120px] w-[760px] rotate-[-7deg] rounded-[100%] border-t border-teal-300/25" />
      <div className="absolute -left-36 top-24 -z-10 h-72 w-96 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="mx-auto grid min-h-[620px] max-w-[1280px] grid-cols-1 items-center gap-11 px-6 py-8 lg:grid-cols-[0.47fr_0.53fr] lg:px-8 xl:px-8">
        <div className="min-w-0">
          <div className="grid max-w-[525px] grid-cols-2 overflow-hidden rounded-xl border border-cyan-300/35 bg-slate-950/48 shadow-[0_0_32px_rgba(34,211,238,0.12)] backdrop-blur sm:grid-cols-4">
            {slide.certificates.map((item, index) => (
              <div
                key={`${item.title}-${item.detail}`}
                className={`flex flex-col items-center justify-center border-cyan-300/20 px-3 py-3 text-center ${
                  index < slide.certificates.length - 1 ? "sm:border-r" : ""
                } ${index < 2 ? "border-b sm:border-b-0" : ""}`}
              >
                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-cyan-300/55 bg-cyan-300/10 shadow-[0_0_18px_rgba(34,211,238,0.18)]">
                  <Image
                    src={item.image}
                    alt={`${item.title} ${item.detail}`}
                    width={42}
                    height={42}
                    className="h-10 w-10 object-contain"
                  />
                </span>
                <span className="mt-2">
                  <span className="block text-sm font-bold leading-tight text-white">{item.title}</span>
                  <span className="mt-1 block text-[10px] leading-4 text-slate-300">{item.detail}</span>
                </span>
              </div>
            ))}
          </div>

          <div className="mt-7 flex items-center gap-7">
            <div className="shrink-0 text-[116px] font-black leading-none tracking-[-0.12em] text-cyan-300 drop-shadow-[0_0_30px_rgba(34,211,238,0.42)] lg:text-[132px] xl:text-[138px]">
              {slide.years}
            </div>
            <h1 className="max-w-none text-[40px] font-black leading-[1.16] tracking-[-0.035em] text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.3)] lg:text-[42px] xl:text-[44px]">
              {slide.titleLines.map((line) => (
                <span key={line} className="block whitespace-nowrap">
                  {line}
                </span>
              ))}
            </h1>
          </div>

          <p className="mt-4 max-w-[500px] text-lg leading-8 text-slate-300">{slide.description}</p>

          <div className="mt-5 grid max-w-[532px] grid-cols-2 overflow-hidden rounded-xl border border-cyan-300/30 bg-slate-950/48 shadow-[0_0_28px_rgba(34,211,238,0.10)] backdrop-blur sm:grid-cols-4">
            {slide.stats.map((item, index) => (
              <div
                key={item.label}
                className={`p-4 text-center transition hover:bg-cyan-300/5 ${
                  index < slide.stats.length - 1 ? "sm:border-r sm:border-cyan-300/20" : ""
                } ${index < 2 ? "border-b border-cyan-300/20 sm:border-b-0" : ""}`}
              >
                <span className="mx-auto flex h-8 w-8 shrink-0 items-center justify-center text-cyan-200">
                  <HeroIcon name={item.icon} />
                </span>
                <div className="mt-3 text-[24px] font-black leading-none text-cyan-300">
                  {item.value}
                  {item.unit ? <span className="ml-1 text-base text-white">{item.unit}</span> : null}
                </div>
                <div className="mt-3 text-[10px] font-medium text-slate-300">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-4">
            <Link
              href={slide.primaryCta.href}
              className="inline-flex h-[54px] min-w-[214px] items-center justify-center gap-3 rounded-lg border border-cyan-200/30 bg-gradient-to-r from-cyan-500 to-teal-500 px-7 text-base font-bold text-white shadow-[0_0_34px_rgba(45,212,191,0.34)] transition hover:-translate-y-0.5 hover:shadow-[0_0_46px_rgba(45,212,191,0.48)]"
            >
              <HeroIcon name="factory" className="h-5 w-5" />
              {slide.primaryCta.label}
              <span className="text-xl leading-none">&gt;</span>
            </Link>
            <Link
              href={slide.secondaryCta.href}
              className="inline-flex h-[54px] min-w-[206px] items-center justify-center gap-3 rounded-lg border border-cyan-300/45 bg-slate-950/35 px-7 text-base font-bold text-white transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-300/10"
            >
              <HeroIcon name="document" className="h-5 w-5" />
              {slide.secondaryCta.label}
              <span className="text-xl leading-none text-cyan-300">&gt;</span>
            </Link>
          </div>
        </div>

        <div className="relative lg:-mt-2">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-cyan-300/5 shadow-[0_0_70px_rgba(34,211,238,0.10)] blur-sm" />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-3.5">
            {slide.images.map((image, index) => (
              <article
                key={image.title}
                className="group relative aspect-[1.34/1] overflow-hidden rounded-xl border border-cyan-300/35 bg-slate-900/50 shadow-[0_0_38px_rgba(34,211,238,0.16)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/70"
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(min-width: 1280px) 310px, (min-width: 1024px) 28vw, 50vw"
                  priority={index === 0}
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/88 via-slate-950/35 to-transparent p-4">
                  <div className="flex items-center gap-3">
                    <span className="h-7 w-1 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                    <span className="text-base font-semibold text-white">{image.title}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
