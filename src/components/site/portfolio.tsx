"use client";

import { FadeIn, Stagger, StaggerItem } from "@/components/ui/fade-in";

const PROJECTS = [
  {
    name: "Arteparc Lesquin",
    type: "Parc tertiaire",
    surface: "24 000 m²",
    span: "md:col-span-2 md:row-span-2",
    gradient: "from-blue-500 via-blue-600 to-blue-800",
  },
  {
    name: "Campus Meridia",
    type: "Campus universitaire",
    surface: "18 500 m²",
    span: "",
    gradient: "from-zinc-700 to-zinc-900",
  },
  {
    name: "Sophia Antipolis",
    type: "Zone d'activités",
    surface: "42 000 m²",
    span: "",
    gradient: "from-sky-500 to-indigo-700",
  },
  {
    name: "Tour Horizon",
    type: "Bureaux",
    surface: "12 000 m²",
    span: "md:col-span-2",
    gradient: "from-slate-600 to-slate-900",
  },
  {
    name: "Résidence Belair",
    type: "Résidentiel",
    surface: "8 400 m²",
    span: "md:col-span-2 md:row-span-2",
    gradient: "from-blue-700 via-indigo-700 to-blue-900",
  },
  {
    name: "Centre Logistique",
    type: "Logistique",
    surface: "56 000 m²",
    span: "",
    gradient: "from-zinc-600 to-zinc-800",
  },
  {
    name: "Clinique du Parc",
    type: "Santé",
    surface: "9 800 m²",
    span: "",
    gradient: "from-blue-500 to-cyan-700",
  },
  {
    name: "Écoquartier Rives",
    type: "Aménagement",
    surface: "31 000 m²",
    span: "md:col-span-2",
    gradient: "from-neutral-700 to-neutral-900",
  },
];

export function SitePortfolio() {
  return (
    <section id="references" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <FadeIn className="mb-12">
        <h2 className="animated-gradient-text text-4xl font-bold tracking-tight md:text-5xl">
          Nos réalisations
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Des projets emblématiques portés par notre expertise.
        </p>
      </FadeIn>

      <Stagger
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[220px]"
        stagger={0.06}
      >
        {PROJECTS.map((p) => (
          <StaggerItem key={p.name} className={p.span}>
            <div className="group relative h-full min-h-[220px] cursor-pointer overflow-hidden rounded-2xl">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.gradient} transition-transform duration-700 ease-out group-hover:scale-110`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-500 group-hover:from-black/95" />
              <div className="absolute inset-x-0 bottom-0 p-5 transition-transform duration-500 group-hover:-translate-y-1">
                <div className="text-[10px] font-medium uppercase tracking-widest text-white/70">
                  {p.type}
                </div>
                <div className="mt-1.5 text-lg font-semibold text-white md:text-xl">
                  {p.name}
                </div>
                <div className="mt-0.5 text-xs text-white/80">{p.surface}</div>
                <div className="mt-3 h-px w-6 origin-left scale-x-0 bg-white transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
