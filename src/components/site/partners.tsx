"use client";

import { motion } from "motion/react";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/fade-in";
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
          beforeSrc="/img/avant.png"
          afterSrc="/img/apres.png"
        />
      </motion.div>

      <FadeIn className="mt-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          {t("partners.trusted")}
        </h2>
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
