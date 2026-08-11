"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/fade-in";

const FAQ = [
  {
    q: "Suis-je éligible aux Certificats d'Économies d'Énergie ?",
    a: "La plupart des travaux d'amélioration énergétique sur les bâtiments tertiaires, industriels ou résidentiels sont éligibles. Notre audit gratuit détermine précisément votre éligibilité.",
  },
  {
    q: "Le dispositif CEE est-il complexe à monter ?",
    a: "Dispobat prend en charge l'intégralité du montage administratif. Vous n'avez rien à gérer : nous nous occupons du dossier, de la collecte des preuves et du versement de la prime.",
  },
  {
    q: "En quoi Dispobat se différencie des autres acteurs ?",
    a: "20 ans d'expertise, un accompagnement 100% intégré (audit + travaux + montage), et un réseau d'entreprises RGE certifiées sur toute la France.",
  },
  {
    q: "Quels sont les délais moyens ?",
    a: "De l'audit au versement de la prime : entre 3 et 9 mois selon la complexité du projet. Nous vous informons à chaque étape.",
  },
  {
    q: "Qui exécute les travaux ?",
    a: "Nos entreprises partenaires RGE, sélectionnées selon des critères stricts de qualité et de proximité géographique.",
  },
  {
    q: "Que faire en cas de blocage administratif ?",
    a: "Nos experts CEE gèrent l'ensemble des relations avec le Pôle National CEE et prennent en charge toute résolution de blocage.",
  },
];

export function SiteFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <FadeIn className="mb-12 text-center">
          <h2 className="animated-gradient-text text-4xl font-bold tracking-tight md:text-5xl">
            Questions fréquentes
          </h2>
        </FadeIn>

        <Stagger className="space-y-2" stagger={0.06}>
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <StaggerItem key={i}>
                <div
                  className={`glass transition-all duration-300 ${
                    isOpen ? "ring-blue-500/30" : "hover:ring-blue-500/20"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold">{item.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-blue-600"
                    >
                      <span className="text-xl leading-none">+</span>
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: {
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          opacity: { duration: 0.25, ease: "easeOut" },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
