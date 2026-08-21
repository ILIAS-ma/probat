"use client";

import Image from "next/image";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/fade-in";
import { PortfolioScrollGallery, type ScrollSlide } from "@/components/site/portfolio-scroll";
import { useT } from "@/lib/i18n";

const PROJECTS = [
  {
    name: "Hotel NH — Paris 10e",
    desc: "Réhabilitation d'un hôtel de 12 000 m² sur 8 étages. Peintures, papiers peints, Vescom et habillages muraux.",
    location: "Paris 10e",
    year: "2024",
    duration: "En cours",
    span: "md:col-span-2 md:row-span-2",
    image: "/img/realisation-3.webp",
  },
  {
    name: "Hotel NH — Paris 8e",
    desc: "Réhabilitation d'un hôtel de 7 500 m² sur 5 niveaux. Peintures, papiers peints, Vescom et traitement anti-humidité.",
    location: "Paris 8e",
    year: "2024",
    duration: "En cours",
    span: "",
    image: "/img/realisation-2.webp",
  },
  {
    name: "Lacepede",
    desc: "Travaux de revêtements muraux sur 20 000 m² sur 7 niveaux. Hôtel 4 étoiles.",
    location: "Paris 5e",
    year: "2024",
    duration: "6 mois",
    span: "",
    image:
      "https://images.pexels.com/photos/31080809/pexels-photo-31080809.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "HILIGHT",
    desc: "Travaux de peinture sur 42 000 m² — Immeuble de 15 niveaux.",
    location: "Courbevoie",
    year: "2021",
    duration: "18 mois",
    span: "md:col-span-2",
    image: "/img/realisation-1.webp",
  },
  {
    name: "Equilis",
    desc: "Travaux de peinture et revêtements muraux — Surface de 23 000 m² sur 8 niveaux.",
    location: "Issy-Les-Moulineaux",
    year: "2024",
    duration: "En cours",
    span: "md:col-span-2 md:row-span-2",
    image: "/img/realisation-4.webp",
  },
  {
    name: "Hémicycle",
    desc: "Travaux de peinture sur 4 000 m² sur 5 niveaux.",
    location: "Saint-Ouen",
    year: "2019",
    duration: "4 mois",
    span: "",
    image: "/img/realisation-5.webp",
  },
  {
    name: "Village Nature",
    desc: "Travaux de revêtements muraux — Surface de 50 000 m².",
    location: "Bailly-Romainvilliers",
    year: "2017",
    duration: "24 mois",
    span: "",
    image:
      "https://images.pexels.com/photos/10119626/pexels-photo-10119626.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const EXTRA_SLIDES: ScrollSlide[] = [
  {
    name: "Immeubles de bureaux",
    desc: "Travaux de peinture et de finition sur site tertiaire, réalisés en horaires adaptés à l'activité des occupants.",
    image: "/img/realisation-bureaux-1.webp",
  },
  {
    name: "Espaces de réception",
    desc: "Finitions haut de gamme — peinture, boiseries et habillages muraux pour des espaces de vie chaleureux.",
    image: "/img/realisation-reception.webp",
  },
  {
    name: "Grands ensembles",
    desc: "Intervention sur programmes de grande envergure, en coordination avec les autres corps d'état.",
    image: "/img/realisation-grand-ensemble.webp",
  },
  {
    name: "Lounge & bar",
    desc: "Ambiances colorées et finitions soignées pour des espaces d'accueil à forte identité.",
    image: "/img/realisation-lounge.webp",
  },
  {
    name: "Halls d'accueil",
    desc: "Revêtements muraux et peinture pour des halls et espaces d'accueil haut de gamme.",
    image: "/img/realisation-hall-accueil.webp",
  },
  {
    name: "Plateaux de bureaux",
    desc: "Rénovation de plateaux ouverts — peinture, finitions techniques et remise en état.",
    image: "/img/realisation-bureaux-2.webp",
  },
  {
    name: "Salles de conférence",
    desc: "Finitions bois et peinture pour des espaces recevant du public, dans le respect des délais de chantier.",
    image: "/img/realisation-conference.webp",
  },
  {
    name: "Espaces recevant du public",
    desc: "Rénovation en environnement à fort trafic, avec délais et nuisances maîtrisés.",
    image: "/img/realisation-espace-public.jpg",
  },
];

const SLIDES: ScrollSlide[] = [
  ...PROJECTS.map((p) => ({
    name: p.name,
    desc: p.desc,
    image: p.image,
    location: p.location,
    year: p.year,
    duration: p.duration,
  })),
  ...EXTRA_SLIDES,
];

export function SitePortfolio() {
  const { t } = useT();
  return (
    <section id="references" className="py-24">
      <FadeIn className="mx-auto mb-12 max-w-2xl px-6 lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          {t("portfolio.title")}
        </h2>
        <p className="mt-4 text-muted-foreground">{t("portfolio.subtitle")}</p>
      </FadeIn>

      {/* Mobile / tablet: grid */}
      <Stagger
        className="mx-auto grid max-w-7xl grid-cols-1 gap-3 px-6 sm:grid-cols-2 md:hidden lg:px-8"
        stagger={0.06}
      >
        {SLIDES.map((p) => (
          <StaggerItem key={p.name} className="">
            <div className="group relative h-full min-h-[220px] cursor-pointer overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-lg shadow-black/5 dark:ring-white/10">
              <Image
                src={p.image}
                alt={p.location ? `${p.name} — ${p.location}` : p.name}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/95" />

              <div className="absolute inset-x-0 bottom-0 p-5 transition-transform duration-500 group-hover:-translate-y-1">
                {p.location && (
                  <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-widest text-white/70">
                    <span>{p.location}</span>
                    <span className="opacity-40">·</span>
                    <span>{p.year}</span>
                    <span className="opacity-40">·</span>
                    <span>{p.duration}</span>
                  </div>
                )}
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

      {/* Desktop: scroll-pinned gallery */}
      <PortfolioScrollGallery slides={SLIDES} />
    </section>
  );
}
