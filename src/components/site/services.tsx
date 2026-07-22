"use client";

import Image from "next/image";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/fade-in";

const SERVICES = [
  {
    title: "ENERGIES RENOUVELABLES",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
    alt: "Panneaux solaires sur toiture au coucher de soleil",
  },
  {
    title: "GESTION TECHNIQUE DU BÂTIMENT",
    img: "https://images.unsplash.com/photo-1581092335397-9fa73b09f9c4?auto=format&fit=crop&w=900&q=80",
    alt: "Technicien en gestion technique du bâtiment",
  },
  {
    title: "ISOLATION",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80",
    alt: "Matériaux d'isolation thermique",
  },
  {
    title: "ECLAIRAGE",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
    alt: "Éclairage intérieur design",
  },
];

export function SiteServices() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <FadeIn className="mb-14">
        <h2 className="text-5xl font-black uppercase tracking-tight md:text-6xl lg:text-7xl">
          Rentabilisez vos rénovations
        </h2>
        <p className="mt-6 max-w-4xl text-base text-blue-600 md:text-lg">
          Nous accompagnons les foncières, les collectivités et les entreprises
          dans la réduction de leurs consommations, la valorisation de leurs
          économies et l&apos;accélération de la décarbonation de leurs actifs.
        </p>
      </FadeIn>

      <Stagger
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        stagger={0.1}
      >
        {SERVICES.map((s) => (
          <StaggerItem key={s.title}>
            <div className="group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer">
              <Image
                src={s.img}
                alt={s.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/95" />
              <div className="absolute inset-0 border-2 border-transparent transition-colors duration-500 group-hover:border-blue-500/60" />
              <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-lg font-bold uppercase tracking-wide text-white md:text-xl">
                  {s.title}
                </h3>
                <div className="mt-3 h-0.5 w-8 origin-left scale-x-0 bg-blue-500 transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
