"use client";

import { FadeIn, Stagger, StaggerItem } from "@/components/ui/fade-in";
import { useT } from "@/lib/i18n";

export function SiteServices() {
  const { t } = useT();

  const SERVICES = [
    { title: t("services.1.title"), desc: t("services.1.desc") },
    { title: t("services.2.title"), desc: t("services.2.desc") },
    { title: t("services.3.title"), desc: t("services.3.desc") },
    { title: t("services.4.title"), desc: t("services.4.desc") },
  ];

  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <FadeIn className="mb-14 max-w-2xl">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          {t("services.title")}
        </h2>
        <p className="mt-4 text-muted-foreground">{t("services.subtitle")}</p>
      </FadeIn>

      <Stagger
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        stagger={0.08}
      >
        {SERVICES.map((s) => (
          <StaggerItem key={s.title}>
            <ServiceCard title={s.title} desc={s.desc} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group glass relative flex h-full flex-col p-6 transition-all duration-500 hover:-translate-y-1 hover:ring-blue-500/30 md:p-7">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <h3 className="relative z-10 text-lg font-semibold tracking-tight">
        {title}
      </h3>
      <p className="relative z-10 mt-3 text-sm leading-relaxed text-muted-foreground">
        {desc}
      </p>
      <div className="relative z-10 mt-6 h-px w-8 origin-left scale-x-0 bg-blue-500 transition-transform duration-500 group-hover:scale-x-100" />
    </div>
  );
}
