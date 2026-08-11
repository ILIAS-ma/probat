"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/fade-in";

const FAQ = [
  {
    q: "Comment obtenir un devis ?",
    a: "Contactez-nous par téléphone, email ou via le formulaire du site. Nous nous déplaçons gratuitement pour évaluer votre projet et vous remettons un devis détaillé sous 24 à 48h ouvrées.",
  },
  {
    q: "Le déplacement pour l'estimation est-il payant ?",
    a: "Non. Le déplacement et l'estimation sont totalement gratuits et sans engagement, quel que soit votre secteur en Île-de-France.",
  },
  {
    q: "Quels types de projets réalisez-vous ?",
    a: "Nous intervenons sur tout type de bâtiments tertiaires : hôtels, bureaux, immeubles, commerces. Peinture intérieure/extérieure, ravalement, revêtements muraux, décoration et traitements anti-humidité.",
  },
  {
    q: "Quels sont vos délais d'intervention ?",
    a: "Selon la disponibilité de nos équipes et l'ampleur du chantier, nous pouvons intervenir sous 2 à 4 semaines. Pour les urgences, contactez-nous directement.",
  },
  {
    q: "Utilisez-vous des matériaux écologiques ?",
    a: "Oui. Sur demande, nous proposons des peintures écolabellisées à faible émission de COV et des matériaux respectueux de l'environnement.",
  },
  {
    q: "Proposez-vous une garantie sur vos travaux ?",
    a: "Toutes nos réalisations bénéficient de la garantie décennale ainsi que de notre engagement qualité. Nous restons à votre disposition pour tout suivi post-chantier.",
  },
];

export function SiteFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <FadeIn className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
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
