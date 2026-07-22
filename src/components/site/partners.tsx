"use client";

import { FadeIn, Stagger, StaggerItem } from "@/components/ui/fade-in";

const PARTNERS = [
  { name: "FAYAT", subtitle: "BÂTIMENT", style: "serif" },
  { name: "nexity", subtitle: "", style: "round" },
  { name: "OGIC", subtitle: "une nouvelle nature de ville", style: "compact" },
  { name: "spie batignolles", subtitle: "", style: "lowercase" },
  { name: "TAKENAKA", subtitle: "", style: "wide" },
];

export function SitePartners() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <FadeIn className="text-center">
        <h2 className="animated-gradient-text text-3xl font-bold tracking-tight md:text-4xl">
          Nos Qualifications
        </h2>
      </FadeIn>

      <FadeIn className="mt-10 flex justify-center">
        <QualibatBadge />
      </FadeIn>

      <FadeIn className="mt-24 text-center">
        <h2 className="animated-gradient-text text-3xl font-bold tracking-tight md:text-4xl">
          Nos Partenaires de Confiance
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
          Ils nous font confiance depuis nos débuts.
        </p>
      </FadeIn>

      <Stagger
        className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-4"
        stagger={0.08}
      >
        {PARTNERS.map((p) => (
          <StaggerItem key={p.name}>
            <PartnerLogo name={p.name} subtitle={p.subtitle} variant={p.style} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function QualibatBadge() {
  return (
    <div className="group flex aspect-square h-32 w-32 items-center justify-center rounded-2xl bg-white shadow-md ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:ring-blue-500/30 dark:bg-white/95">
      <div className="flex flex-col items-center">
        <div
          aria-hidden
          className="h-14 w-14 rounded-md bg-gradient-to-br from-blue-500 to-blue-700 transition-transform duration-500 group-hover:scale-110"
          style={{
            clipPath: "polygon(50% 12%, 88% 88%, 12% 88%)",
          }}
        />
        <span className="mt-2 text-[10px] font-bold tracking-widest text-blue-700">
          QUALIBAT
        </span>
      </div>
    </div>
  );
}

function PartnerLogo({
  name,
  subtitle,
  variant,
}: {
  name: string;
  subtitle: string;
  variant: string;
}) {
  const styles: Record<string, string> = {
    serif:
      "font-serif text-lg font-black tracking-wider text-zinc-900 dark:text-zinc-100",
    round:
      "font-sans text-2xl font-bold lowercase italic text-zinc-900 dark:text-zinc-100",
    compact:
      "font-sans text-xl font-black tracking-tight text-zinc-900 dark:text-zinc-100",
    lowercase:
      "font-sans text-sm font-medium lowercase text-zinc-900 dark:text-zinc-100",
    wide: "font-sans text-lg font-bold tracking-[0.2em] text-zinc-900 dark:text-zinc-100",
  };

  return (
    <div className="group grid h-24 grid-rows-[1fr_auto] place-items-center rounded-2xl bg-muted/30 p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-muted/60 hover:shadow-lg md:h-28">
      <div className={`${styles[variant] || styles.compact} text-center transition-transform duration-500 group-hover:scale-105`}>
        {name}
      </div>
      {subtitle && (
        <div className="text-[9px] font-medium uppercase tracking-widest text-muted-foreground md:text-[10px]">
          {subtitle}
        </div>
      )}
    </div>
  );
}
