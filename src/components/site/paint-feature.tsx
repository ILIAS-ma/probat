"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "motion/react";
import { FadeIn } from "@/components/ui/fade-in";
import { useT } from "@/lib/i18n";

const easeOut = [0.22, 1, 0.36, 1] as const;
const PAINT = "#60a5fa";

export function SitePaintFeature() {
  const { t } = useT();

  const KPIS = [
    { value: t("feature.kpi.1.value"), label: t("feature.kpi.1.label") },
    { value: t("feature.kpi.2.value"), label: t("feature.kpi.2.label") },
    { value: t("feature.kpi.3.value"), label: t("feature.kpi.3.label") },
  ];

  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      {/* Photo backdrop — same recipe as the hero, for a matching dark moment */}
      <div aria-hidden className="absolute inset-0 -z-30">
        <Image
          src="https://images.pexels.com/photos/5583116/pexels-photo-5583116.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-gradient-to-b from-black/80 via-black/70 to-black/85"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-blue-950/25 mix-blend-multiply" />
      <AmbientPaint />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl md:grid-cols-2 md:p-14 lg:p-16">
          {/* LEFT — Content */}
          <div className="flex flex-col justify-center">
            <FadeIn delay={0.1}>
              <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
                {t("feature.title.1")}{" "}
                <PaintHighlight>{t("feature.title.2")}</PaintHighlight>{" "}
                {t("feature.title.3")}{" "}
                <PaintHighlight delay={0.6}>
                  {t("feature.title.4")}
                </PaintHighlight>{" "}
                {t("feature.title.5")}
              </h2>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="mt-6 max-w-lg text-base text-white/70 md:text-lg">
                {t("feature.desc")}
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <PaintSplashButton href="#contact" primary>
                  {t("feature.cta.primary")}
                </PaintSplashButton>
                <Link
                  href="#services"
                  className="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
                >
                  {t("feature.cta.secondary")}
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT — Glass KPI stack */}
          <div className="flex flex-col justify-center gap-4">
            {KPIS.map((k, i) => (
              <FadeIn key={k.label} delay={0.2 + i * 0.08} direction="left">
                <KpiGlassCard value={k.value} label={k.label} />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Brush-stroke highlight ---------- */

function PaintHighlight({
  children,
  delay = 0.3,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <span ref={ref} className="relative inline-block whitespace-nowrap">
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-x-[-4%] top-[35%] h-[75%] w-[108%]"
        viewBox="0 0 300 60"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <filter id={`brushRough-${delay}`} x="-5%" y="-20%" width="110%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.02 0.6" numOctaves="2" seed="7" />
            <feDisplacementMap in="SourceGraphic" scale="4" />
          </filter>
        </defs>
        <motion.path
          d="M8 34 Q42 20 78 30 T148 32 T214 28 T286 34"
          stroke={PAINT}
          strokeWidth="30"
          strokeLinecap="round"
          fill="none"
          filter={`url(#brushRough-${delay})`}
          opacity={0.55}
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.1, delay, ease: easeOut }}
        />
      </svg>
      <span className="relative text-white">{children}</span>
    </span>
  );
}

/* ---------- Glass KPI card ---------- */

function KpiGlassCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="group relative flex items-center justify-between gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-white/[0.09] md:p-7">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-400/0 via-blue-400/5 to-blue-400/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative z-10">
        <div className="text-4xl font-bold tracking-tight text-blue-400 transition-transform duration-500 group-hover:scale-105 md:text-5xl">
          {value}
        </div>
        <div className="mt-1 text-sm text-white/70">{label}</div>
      </div>
    </div>
  );
}

/* ---------- Ambient background paint ---------- */

function AmbientPaint() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0">
      <div className="absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-blue-300/15 blur-3xl" />
    </div>
  );
}

/* ---------- CTA button with paint splash on hover ---------- */

function PaintSplashButton({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  const [hover, setHover] = useState(false);
  const splashes = [
    { x: -30, y: -18, size: 5 },
    { x: 35, y: -14, size: 6 },
    { x: -42, y: 8, size: 4 },
    { x: 46, y: 10, size: 7 },
    { x: -16, y: 22, size: 4 },
    { x: 26, y: 20, size: 5 },
    { x: 0, y: -28, size: 4 },
  ];

  return (
    <Link
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={
        primary
          ? "group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/40"
          : "glass-btn group relative inline-flex items-center gap-2"
      }
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 origin-left scale-x-0 rounded-full bg-white/15 transition-transform duration-500 ease-out group-hover:scale-x-100"
      />

      <span className="relative z-10">{children}</span>
      <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>

      <AnimatePresence>
        {hover &&
          splashes.map((s, i) => (
            <motion.span
              key={i}
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 rounded-full"
              style={{
                width: s.size,
                height: s.size,
                backgroundColor: PAINT,
                boxShadow: `0 0 8px ${PAINT}80`,
              }}
              initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
              animate={{
                x: s.x,
                y: s.y,
                opacity: [0, 1, 0],
                scale: [0, 1, 0.4],
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.7,
                delay: i * 0.03,
                ease: easeOut,
                times: [0, 0.35, 1],
              }}
            />
          ))}
      </AnimatePresence>
    </Link>
  );
}
