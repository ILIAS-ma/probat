"use client";

import { FadeIn, Stagger, StaggerItem } from "@/components/ui/fade-in";

const STEPS = [
  { n: "01", title: "Audit", desc: "Analyse gratuite de vos bâtiments et identification des gisements d'économies." },
  { n: "02", title: "Offres", desc: "Proposition personnalisée de travaux et estimation des primes CEE." },
  { n: "03", title: "Montage du dossier", desc: "Constitution complète du dossier administratif CEE." },
  { n: "04", title: "Travaux", desc: "Réalisation par nos entreprises partenaires RGE certifiées." },
  { n: "05", title: "Preuves", desc: "Collecte des attestations, factures et éléments de preuve." },
  { n: "06", title: "Étude", desc: "Instruction du dossier auprès du Pôle National CEE." },
  { n: "07", title: "Versement", desc: "Versement de la prime CEE directement sur votre compte." },
];

export function SiteProcess() {
  return (
    <section id="processus" className="border-y border-border bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Méthodologie
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Les 7 étapes du processus CEE
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            De l&apos;audit initial au versement de votre prime, nous prenons tout
            en charge.
          </p>
        </FadeIn>

        <Stagger
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
          stagger={0.07}
        >
          {STEPS.map((s) => (
            <StaggerItem key={s.n}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-background p-6 transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10">
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />
                <div className="relative">
                  <div className="text-3xl font-bold text-blue-600 transition-transform duration-500 group-hover:scale-110 group-hover:text-blue-500">
                    {s.n}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
