"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const easeOut = [0.22, 1, 0.36, 1] as const;
const WORDS = ["soignées", "maîtrisées", "durables"];

export function SiteHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60 [background:radial-gradient(circle_at_top_center,theme(colors.blue.100),transparent_55%)] dark:[background:radial-gradient(circle_at_top_center,theme(colors.blue.500/12),transparent_55%)]"
      />

      <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8 lg:py-36">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="inline-flex items-center gap-2 rounded-full bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
          </span>
          Devis gratuit sous 24h
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
          className="mt-8 text-5xl font-bold leading-tight tracking-tight md:text-7xl"
        >
          Des finitions{" "}
          <span className="relative inline-flex min-w-[6ch] justify-center align-baseline">
            <AnimatePresence mode="wait">
              <motion.span
                key={WORDS[index]}
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
                transition={{ duration: 0.45, ease: easeOut }}
                className="inline-block bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 bg-[length:200%_auto] bg-clip-text text-transparent"
                style={{ animation: "gradient-sweep 3s linear infinite" }}
              >
                {WORDS[index]}
              </motion.span>
            </AnimatePresence>
          </span>
          <span className="block">un service maîtrisé.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: easeOut }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Depuis plus de 10 ans, DISPO BAT met son savoir-faire au service des
          professionnels pour tous leurs projets de peinture, ravalement et
          décoration intérieure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: easeOut }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            href="#contact"
            className="rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
          >
            Demandez votre devis gratuit
          </Link>
          <Link href="#services" className="glass-btn">
            Voir plus →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: easeOut }}
          className="mt-14 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
        >
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              +13
            </span>
            <span>années d&apos;expérience</span>
          </div>
          <span className="hidden h-4 w-px bg-border sm:inline-block" />
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              +150
            </span>
            <span>chantiers livrés</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
