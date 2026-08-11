"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function SiteAbout() {
  return (
    <section id="a-propos" className="relative overflow-hidden py-28 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
      >
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <FadeIn>
          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            <span className="text-blue-800 dark:text-blue-300">Des </span>
            <span className="text-blue-500">services</span>
            <span className="text-blue-800 dark:text-blue-300"> adaptés,</span>
            <br />
            <span className="text-blue-800 dark:text-blue-300">une </span>
            <span className="text-blue-500">expertise</span>
            <span className="text-blue-800 dark:text-blue-300"> reconnue</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Depuis <span className="font-semibold text-foreground">2012</span>,{" "}
            <span className="font-semibold text-foreground">Dispobat</span>{" "}
            accompagne les professionnels du bâtiment avec son expertise en
            peinture, vitrerie et décoration intérieure. Notre équipe qualifiée
            vous garantit des finitions de qualité supérieure.
          </p>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <MiniStat value="12+" label="Années d'expérience" />
            <MiniStat value="500+" label="Chantiers livrés" />
            <MiniStat value="98%" label="Clients satisfaits" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass group flex items-baseline justify-center gap-3 p-6 transition-all duration-500 hover:-translate-y-0.5 hover:ring-blue-500/30">
      <span className="text-3xl font-bold text-blue-800 dark:text-blue-300 md:text-4xl">
        {value}
      </span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}
