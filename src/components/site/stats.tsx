"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/fade-in";
import { useT } from "@/lib/i18n";

export function SiteStats() {
  const { t } = useT();

  const STATS = [
    { value: 13, suffix: "", label: t("stats.years") },
    { value: 150, suffix: "", label: t("stats.projects") },
    { value: 100, suffix: "%", label: t("stats.satisfaction") },
    { value: 2.9, suffix: " M€", label: t("stats.revenue"), decimals: 1 },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <FadeIn className="mb-12 max-w-2xl">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          {t("stats.title")}
        </h2>
        <p className="mt-4 text-muted-foreground">{t("stats.subtitle")}</p>
      </FadeIn>

      <Stagger
        className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
        stagger={0.08}
      >
        {STATS.map((s) => (
          <StaggerItem key={s.label}>
            <StatCard
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              decimals={s.decimals}
            />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function StatCard({
  value,
  suffix,
  label,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(eased * value);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  const formatted = decimals
    ? display.toLocaleString("fr-FR", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })
    : Math.round(display).toLocaleString("fr-FR");

  return (
    <div
      ref={ref}
      className="group glass p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:ring-blue-500/30"
    >
      <div className="text-4xl font-bold tracking-tight text-blue-600 transition-transform duration-500 group-hover:scale-110 md:text-5xl">
        {formatted}
        {suffix}
      </div>
      <div className="mt-3 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
