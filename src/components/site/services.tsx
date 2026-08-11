"use client";

import { FadeIn, Stagger, StaggerItem } from "@/components/ui/fade-in";

const SERVICES = [
  {
    title: "Peinture Professionnelle",
    desc: "Peinture intérieure et extérieure avec finitions haut de gamme. Techniques modernes et matériaux premium pour des résultats durables.",
  },
  {
    title: "Traitements Anti-Humidité",
    desc: "Diagnostic complet et solutions durables contre l'humidité. Injection de résine, enduits hydrofuges pour une protection optimale.",
  },
  {
    title: "Décoration Intérieure",
    desc: "Aménagement sur mesure d'espaces professionnels. Design moderne et fonctionnel adapté à votre image de marque.",
  },
  {
    title: "Conseils et Accompagnement",
    desc: "Expertise couleurs et finitions personnalisées. Échantillons, tests couleurs et devis gratuits avec suivi complet.",
  },
];

export function SiteServices() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <FadeIn className="mb-14 max-w-2xl">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Nos expertises
        </h2>
        <p className="mt-4 text-muted-foreground">
          De la préparation à la finition, nous maîtrisons chaque étape pour
          garantir des résultats à la hauteur de vos exigences.
        </p>
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

function ServiceCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
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
