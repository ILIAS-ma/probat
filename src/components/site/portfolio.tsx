"use client";

import { FadeIn, Stagger, StaggerItem } from "@/components/ui/fade-in";

const PROJECTS = [
  {
    name: "Hotel NH — Paris 10e",
    desc: "Réhabilitation d'un hôtel de 12 000 m² sur 8 étages. Peintures, papiers peints, Vescom et habillages muraux.",
    location: "Paris 10e",
    year: "2024",
    duration: "En cours",
    span: "md:col-span-2 md:row-span-2",
    gradient: "from-blue-500 via-blue-600 to-blue-800",
  },
  {
    name: "Hotel NH — Paris 8e",
    desc: "Réhabilitation d'un hôtel de 7 500 m² sur 5 niveaux. Peintures, papiers peints, Vescom et traitement anti-humidité.",
    location: "Paris 8e",
    year: "2024",
    duration: "En cours",
    span: "",
    gradient: "from-zinc-700 to-zinc-900",
  },
  {
    name: "Lacepede",
    desc: "Travaux de revêtements muraux sur 20 000 m² sur 7 niveaux. Hôtel 4 étoiles.",
    location: "Paris 5e",
    year: "2024",
    duration: "6 mois",
    span: "",
    gradient: "from-sky-500 to-indigo-700",
  },
  {
    name: "HILIGHT",
    desc: "Travaux de peinture sur 42 000 m² — Immeuble de 15 niveaux.",
    location: "Courbevoie",
    year: "2021",
    duration: "18 mois",
    span: "md:col-span-2",
    gradient: "from-slate-600 to-slate-900",
  },
  {
    name: "Equilis",
    desc: "Travaux de peinture et revêtements muraux — Surface de 23 000 m² sur 8 niveaux.",
    location: "Issy-Les-Moulineaux",
    year: "2024",
    duration: "En cours",
    span: "md:col-span-2 md:row-span-2",
    gradient: "from-blue-700 via-indigo-700 to-blue-900",
  },
  {
    name: "Hémicycle",
    desc: "Travaux de peinture sur 4 000 m² sur 5 niveaux.",
    location: "Saint-Ouen",
    year: "2019",
    duration: "4 mois",
    span: "",
    gradient: "from-zinc-600 to-zinc-800",
  },
  {
    name: "Village Nature",
    desc: "Travaux de revêtements muraux — Surface de 50 000 m².",
    location: "Bailly-Romainvilliers",
    year: "2017",
    duration: "24 mois",
    span: "",
    gradient: "from-blue-500 to-cyan-700",
  },
];

export function SitePortfolio() {
  return (
    <section id="references" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <FadeIn className="mb-12 max-w-2xl">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Nos réalisations
        </h2>
        <p className="mt-4 text-muted-foreground">
          Quelques projets récents qui témoignent de notre savoir-faire.
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/95" />
              <div className="absolute inset-x-0 bottom-0 p-5 transition-transform duration-500 group-hover:-translate-y-1">
                <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-widest text-white/70">
                  <span>{p.location}</span>
                  <span className="opacity-40">·</span>
                  <span>{p.year}</span>
                  <span className="opacity-40">·</span>
                  <span>{p.duration}</span>
                </div>
                <div className="mt-2 text-lg font-semibold text-white md:text-xl">
                  {p.name}
                </div>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:text-sm">
                  {p.desc}
                </p>
                <div className="mt-3 h-px w-6 origin-left scale-x-0 bg-white transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
