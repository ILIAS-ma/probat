"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "motion/react";
import { FadeIn } from "@/components/ui/fade-in";

const easeOut = [0.22, 1, 0.36, 1] as const;
const PAINT = "#2563eb";
const PAINT_LIGHT = "#3b82f6";

export function SitePaintFeature() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <BackgroundDrips />
      <BrushStrokeCorners />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-600">
            Notre engagement
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mt-6 text-4xl font-bold leading-[1.15] tracking-tight md:text-6xl">
            Nous peignons vos{" "}
            <PaintHighlight>économies</PaintHighlight>{" "}
            en réalité.
          </h2>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="mx-auto mt-8 max-w-2xl text-base text-muted-foreground md:text-lg">
            Chaque projet est unique. Dispobat trace pour vous la meilleure
            voie pour maximiser vos primes CEE — de l&apos;audit initial jusqu&apos;au
            versement.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-12">
            <PaintSplashButton href="#contact">
              Estimer mes primes
            </PaintSplashButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------- Brush-stroke highlight that draws itself in ---------- */

function PaintHighlight({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <span ref={ref} className="relative inline-block whitespace-nowrap">
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-x-[-6%] top-[15%] h-[85%] w-[112%]"
        viewBox="0 0 300 60"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <filter id="brushRough" x="-5%" y="-20%" width="110%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.02 0.6" numOctaves="2" seed="7" />
            <feDisplacementMap in="SourceGraphic" scale="4" />
          </filter>
        </defs>
        <motion.path
          d="M8 34 Q42 20 78 30 T148 32 T214 28 T286 34"
          stroke={PAINT}
          strokeWidth="34"
          strokeLinecap="round"
          fill="none"
          filter="url(#brushRough)"
          opacity={0.55}
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.1, delay: 0.4, ease: easeOut }}
        />
      </svg>
      <span className="relative text-foreground">{children}</span>
    </span>
  );
}

/* ---------- Floating paint drips in background ---------- */

function BackgroundDrips() {
  const drips = [
    { left: "8%", top: "20%", size: 14, delay: 0 },
    { left: "18%", top: "60%", size: 8, delay: 0.6 },
    { left: "84%", top: "18%", size: 10, delay: 0.3 },
    { left: "78%", top: "70%", size: 16, delay: 0.9 },
    { left: "50%", top: "88%", size: 6, delay: 1.2 },
    { left: "12%", top: "85%", size: 5, delay: 0.4 },
    { left: "90%", top: "45%", size: 7, delay: 1.5 },
    { left: "6%", top: "45%", size: 5, delay: 1.8 },
    { left: "45%", top: "12%", size: 6, delay: 0.7 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0">
      {drips.map((d, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            backgroundColor: PAINT,
            filter: "blur(0.5px)",
            opacity: 0.15,
          }}
          animate={{
            y: [0, -14, 0],
            opacity: [0.15, 0.35, 0.15],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 3.5,
            delay: d.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ---------- Brush-stroke ornaments in the top corners ---------- */

function BrushStrokeCorners() {
  return (
    <>
      <svg
        aria-hidden
        className="pointer-events-none absolute -top-6 left-6 h-16 w-40 opacity-20 md:h-20 md:w-56"
        viewBox="0 0 200 40"
        fill="none"
      >
        <motion.path
          d="M4 20 Q40 10 80 22 T160 18 T196 26"
          stroke={PAINT_LIGHT}
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.3, delay: 0.2, ease: easeOut }}
        />
      </svg>
      <svg
        aria-hidden
        className="pointer-events-none absolute -bottom-6 right-6 h-16 w-40 opacity-20 md:h-20 md:w-56"
        viewBox="0 0 200 40"
        fill="none"
      >
        <motion.path
          d="M196 20 Q160 30 120 18 T40 22 T4 14"
          stroke={PAINT_LIGHT}
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.3, delay: 0.4, ease: easeOut }}
        />
      </svg>
    </>
  );
}

/* ---------- CTA button with paint splash on hover ---------- */

function PaintSplashButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [hover, setHover] = useState(false);
  const splashes = [
    { x: -35, y: -22, size: 6 },
    { x: 40, y: -18, size: 7 },
    { x: -50, y: 6, size: 5 },
    { x: 55, y: 8, size: 8 },
    { x: -20, y: 26, size: 5 },
    { x: 30, y: 24, size: 6 },
    { x: 0, y: -32, size: 4 },
  ];

  return (
    <Link
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/40"
    >
      {/* Paint fill sweep */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 origin-left scale-x-0 rounded-full bg-blue-700 transition-transform duration-500 ease-out group-hover:scale-x-100"
      />

      <span className="relative z-10">{children}</span>
      <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>

      {/* Splashes */}
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
