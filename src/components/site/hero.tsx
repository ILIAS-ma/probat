"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useT } from "@/lib/i18n";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function SiteHero() {
  const { t } = useT();
  const [index, setIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const words = [t("hero.word.1"), t("hero.word.2"), t("hero.word.3")];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 260]);
  const glowX = useTransform(scrollYProgress, [0, 1], [0, -70]);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % 3);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={sectionRef} className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background photo — confined to the hero, rest of the site stays white */}
      <div aria-hidden className="absolute inset-0 -z-30">
        <Image
          src="/img/hero-batiment.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Legibility scrim + brand tint over the photo */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-gradient-to-b from-black/75 via-black/50 to-black/80"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-blue-950/25 mix-blend-multiply" />

      {/* Parallax foreground glow — drifts fastest, closest layer */}
      <motion.div
        aria-hidden
        style={{ y: glowY, x: glowX }}
        className="pointer-events-none absolute -right-24 top-1/4 -z-0 h-80 w-80 rounded-full bg-white/10 blur-[110px]"
      />
      <motion.div
        aria-hidden
        style={{ y: useTransform(glowY, (v) => v * 0.6), x: useTransform(glowX, (v) => v * -0.8) }}
        className="pointer-events-none absolute -left-16 bottom-10 -z-0 h-56 w-56 rounded-full bg-white/10 blur-[90px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 pt-32 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
        >
          <motion.h1
            style={{ y: titleY, opacity: titleOpacity }}
            className="mt-8 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl"
          >
            {t("hero.title.prefix")}{" "}
            <span className="relative inline-flex min-w-[6ch] justify-center align-baseline">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
                  transition={{ duration: 0.45, ease: easeOut }}
                  className="inline-block bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-[length:200%_auto] bg-clip-text text-transparent"
                  style={{ animation: "gradient-sweep 3s linear infinite" }}
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="block">{t("hero.title.suffix")}</span>
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: easeOut }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/80 md:text-xl"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: easeOut }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            href="#contact"
            className="rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/40"
          >
            {t("hero.cta.primary")}
          </Link>
          <Link
            href="#services"
            className="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
          >
            {t("hero.cta.secondary")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
