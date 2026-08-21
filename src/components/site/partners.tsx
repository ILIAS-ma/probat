"use client";

import { motion } from "motion/react";
import { FadeIn } from "@/components/ui/fade-in";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { useT } from "@/lib/i18n";

const easeOut = [0.22, 1, 0.36, 1] as const;

const PARTNERS = [
  { name: "FAYAT", subtitle: "BÂTIMENT", style: "serif" },
  { name: "nexity", subtitle: "", style: "round" },
  { name: "OGIC", subtitle: "une nouvelle nature de ville", style: "compact" },
  { name: "spie batignolles", subtitle: "", style: "lowercase" },
  { name: "TAKENAKA", subtitle: "", style: "wide" },
];

export function SitePartners() {
  const { t } = useT();
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <FadeIn className="text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          {t("partners.qualifications")}
        </h2>
        <p className="mt-3 text-muted-foreground">
          {t("partners.qualifications.subtitle")}
        </p>
      </FadeIn>

      <motion.div
        className="mx-auto mt-10 max-w-5xl"
        initial={{ opacity: 0, y: 32, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: easeOut }}
      >
        <BeforeAfterSlider
          className="aspect-[16/10]"
          beforeSrc="/img/imgt1before.jpg"
          afterSrc="/img/realisation-espace-public.jpg"
        />
      </motion.div>

      <FadeIn className="mt-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          {t("partners.trusted")}
        </h2>
      </FadeIn>

      <FadeIn className="relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />

        <div className="flex w-max animate-marquee gap-3 md:gap-4">
          {[...PARTNERS, ...PARTNERS].map((p, i) => (
            <div key={`${p.name}-${i}`} className="w-40 shrink-0 md:w-48">
              <PartnerLogo name={p.name} subtitle={p.subtitle} variant={p.style} />
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
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
