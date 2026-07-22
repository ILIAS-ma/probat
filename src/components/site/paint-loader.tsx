"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const easeInOut = [0.85, 0, 0.15, 1] as const;
const easeOut = [0.22, 1, 0.36, 1] as const;
const swoosh = [0.7, 0, 0.2, 1] as const;

const PAINT = "#2563eb";
const PAINT_DARK = "#1e40af";
const PAINT_LIGHT = "#3b82f6";

const LETTERS = "DISPOBAT".split("");

/** Cubic-bezier inverse: find animation time τ (0-1) at which the eased value equals `y`. */
function bezierInverse(y: number, x1: number, y1: number, x2: number, y2: number): number {
  const evalXY = (t: number) => {
    const u = 1 - t;
    return {
      x: 3 * u * u * t * x1 + 3 * u * t * t * x2 + t * t * t,
      y: 3 * u * u * t * y1 + 3 * u * t * t * y2 + t * t * t,
    };
  };
  let lo = 0;
  let hi = 1;
  for (let i = 0; i < 30; i++) {
    const mid = (lo + hi) / 2;
    if (evalXY(mid).y < y) lo = mid;
    else hi = mid;
  }
  return evalXY((lo + hi) / 2).x;
}

/** Roller travels from -12% to 105% (span 117%). Letters occupy 0-100% of the text width. */
function letterTriggerTime(index: number, count: number): number {
  const letterCenterPct = ((index + 0.5) / count) * 100;
  const targetProgress = (letterCenterPct + 12) / 117;
  return bezierInverse(targetProgress, 0.85, 0, 0.15, 1);
}

export function PaintLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 3600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (visible) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          exit={{
            opacity: 0,
            filter: "blur(20px)",
            transition: { duration: 0.7, ease: easeOut },
          }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <BackdropSpecks />
          <PaintScene />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------- Ambient specks in the background ---------- */

function BackdropSpecks() {
  const specks = Array.from({ length: 18 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {specks.map((_, i) => {
        const delay = Math.random() * 2;
        const size = 4 + Math.random() * 10;
        const left = Math.random() * 100;
        const top = 40 + Math.random() * 55;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              backgroundColor: PAINT,
              opacity: 0.12,
            }}
            initial={{ y: -10, opacity: 0, scale: 0 }}
            animate={{
              y: [0, 60, 60],
              opacity: [0, 0.18, 0],
              scale: [0, 1, 0.4],
            }}
            transition={{
              duration: 2.5,
              delay: 1 + delay,
              ease: "easeIn",
              times: [0, 0.5, 1],
            }}
          />
        );
      })}
    </div>
  );
}

/* ---------- Paint scene: text + roller + drips ---------- */

function PaintScene() {
  const rollerDuration = 2.2;
  const rollerDelay = 0.65;

  return (
    <div className="relative">
      <SplashIntro />

      <div className="relative inline-block">
        {/* Outline text (before painting) */}
        <span className="select-none text-6xl font-black uppercase tracking-tight text-muted-foreground/30 sm:text-7xl md:text-8xl">
          DISPOBAT
        </span>

        {/* Painted text (letter-by-letter pop reveal as the roller passes) */}
        <div className="pointer-events-none absolute inset-0 flex select-none">
          {LETTERS.map((ch, i) => {
            const letterDelay =
              rollerDelay +
              letterTriggerTime(i, LETTERS.length) * rollerDuration;
            return (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 6 }}
                animate={{
                  opacity: [0, 1, 1],
                  scale: [0.8, 1.25, 1],
                  y: [6, -4, 0],
                  filter: [
                    "drop-shadow(0 0 0 rgba(37,99,235,0))",
                    "drop-shadow(0 0 18px rgba(37,99,235,0.9))",
                    "drop-shadow(0 0 0 rgba(37,99,235,0))",
                  ],
                }}
                transition={{
                  duration: 0.5,
                  delay: letterDelay,
                  times: [0, 0.4, 1],
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="text-6xl font-black uppercase tracking-tight sm:text-7xl md:text-8xl"
                style={{ color: PAINT }}
              >
                {ch}
              </motion.span>
            );
          })}
        </div>

        {/* Wet-paint shine sweep after painting is done */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{
            mixBlendMode: "overlay",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 0.8,
            delay: rollerDelay + rollerDuration + 0.05,
            times: [0, 0.4, 1],
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="absolute inset-y-0 w-1/3 -skew-x-12"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.7) 50%, transparent 100%)",
            }}
            initial={{ left: "-40%" }}
            animate={{ left: "120%" }}
            transition={{
              duration: 0.8,
              delay: rollerDelay + rollerDuration + 0.05,
              ease: easeOut,
            }}
          />
        </motion.div>

        {/* Rough painted stroke behind text */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: rollerDuration,
            delay: rollerDelay,
            ease: easeInOut,
          }}
          className="pointer-events-none absolute -bottom-3 left-0 h-2 w-full origin-left"
          style={{
            background: `linear-gradient(90deg, ${PAINT_DARK}, ${PAINT}, ${PAINT_LIGHT}, ${PAINT})`,
            borderRadius: "999px",
            filter: "url(#paintRough)",
          }}
        />

        {/* Drips that fall from underneath letters */}
        <Drips
          count={LETTERS.length}
          totalDuration={rollerDuration}
          baseDelay={rollerDelay}
        />

        {/* The roller */}
        <motion.div
          initial={{ left: "-12%", y: 0 }}
          animate={{ left: "105%", y: [0, -3, 0, -2, 0] }}
          transition={{
            left: {
              duration: rollerDuration,
              delay: rollerDelay,
              ease: easeInOut,
            },
            y: {
              duration: 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="pointer-events-none absolute top-1/2"
        >
          <div style={{ marginLeft: "-131px", marginTop: "-50px", position: "relative" }}>
            <PaintRoller />
            <RollerTrail />
          </div>
        </motion.div>

        {/* SVG filter defs */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <filter id="paintRough">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.02 0.9"
                numOctaves="2"
                seed="4"
              />
              <feDisplacementMap in="SourceGraphic" scale="6" />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Progress bar */}
      <div className="mx-auto mt-10 h-0.5 w-40 overflow-hidden rounded-full bg-muted/40">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: rollerDuration + 0.7,
            delay: rollerDelay - 0.1,
            ease: easeOut,
          }}
          className="h-full origin-left"
          style={{ backgroundColor: PAINT }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 3,
          delay: rollerDelay,
          times: [0, 0.15, 0.75, 1],
          ease: "easeInOut",
        }}
        className="mt-4 text-center text-[10px] font-semibold uppercase tracking-[0.5em] text-muted-foreground"
      >
        Chargement
      </motion.div>
    </div>
  );
}

/* ---------- Intro splash (paint drops flying) ---------- */

function SplashIntro() {
  const drops = [
    { x: -80, y: -30, size: 8, delay: 0 },
    { x: 90, y: -40, size: 10, delay: 0.05 },
    { x: -50, y: -55, size: 6, delay: 0.1 },
    { x: 60, y: -20, size: 12, delay: 0.02 },
    { x: -100, y: 10, size: 5, delay: 0.08 },
    { x: 110, y: 20, size: 7, delay: 0.12 },
    { x: 0, y: -70, size: 14, delay: 0 },
    { x: -30, y: -80, size: 6, delay: 0.06 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0">
      {drops.map((d, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 rounded-full"
          style={{
            width: d.size,
            height: d.size,
            backgroundColor: PAINT,
            boxShadow: `0 0 12px ${PAINT}66`,
          }}
          initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
          animate={{
            x: d.x,
            y: d.y,
            opacity: [1, 1, 0],
            scale: [0, 1, 0.7],
          }}
          transition={{
            duration: 0.55,
            delay: 0.15 + d.delay,
            ease: easeOut,
            times: [0, 0.4, 1],
          }}
        />
      ))}
    </div>
  );
}

/* ---------- Drips falling from letters ---------- */

function Drips({
  count,
  totalDuration,
  baseDelay,
}: {
  count: number;
  totalDuration: number;
  baseDelay: number;
}) {
  const positions = Array.from({ length: count })
    .map(() => Math.random())
    .map((r, i) => (i + 0.15 + r * 0.4) / count);

  return (
    <div className="pointer-events-none absolute inset-x-0 top-full">
      {positions.map((leftPct, i) => {
        const delay =
          baseDelay + (i / count) * totalDuration + 0.1 + Math.random() * 0.3;
        const dropLength = 20 + Math.random() * 40;
        const dropTail = 12 + Math.random() * 20;
        return (
          <div
            key={i}
            className="absolute -top-2"
            style={{ left: `${leftPct * 100}%` }}
          >
            <motion.div
              initial={{ height: 0, opacity: 1 }}
              animate={{
                height: [0, dropLength, dropLength],
                opacity: [1, 1, 0],
              }}
              transition={{
                duration: 1.2,
                delay,
                times: [0, 0.55, 1],
                ease: "easeIn",
              }}
              className="w-[3px] rounded-full"
              style={{
                background: `linear-gradient(180deg, ${PAINT}, ${PAINT_LIGHT})`,
              }}
            />
            <motion.div
              initial={{ opacity: 0, y: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                y: [0, dropTail, dropTail + 6],
                scale: [0, 1, 0.6],
              }}
              transition={{
                duration: 0.75,
                delay: delay + 0.55,
                ease: "easeIn",
              }}
              className="mx-auto h-2 w-2 rounded-full"
              style={{ backgroundColor: PAINT }}
            />
          </div>
        );
      })}
    </div>
  );
}

/* ---------- Trail of wet paint following the roller ---------- */

function RollerTrail() {
  return (
    <>
      <motion.div
        aria-hidden
        className="absolute h-6 w-1.5 -translate-x-1/2 rounded-full"
        style={{
          left: "131px",
          top: "92px",
          backgroundColor: PAINT,
          transformOrigin: "top",
        }}
        animate={{
          scaleY: [0.4, 1.4, 0.6, 1.2, 0.5],
          opacity: [0.6, 0.9, 0.7, 0.85, 0.5],
        }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden
        className="absolute -translate-x-1/2"
        style={{ left: "131px", top: "116px" }}
        animate={{
          y: [0, 30, 40],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 0.9,
          repeat: Infinity,
          delay: 0.35,
          ease: "easeIn",
        }}
      >
        <div
          className="h-3 w-3 rounded-full"
          style={{ backgroundColor: PAINT }}
        />
      </motion.div>
    </>
  );
}

/* ---------- The paint roller SVG ---------- */

function PaintRoller() {
  return (
    <motion.div
      initial={{ scale: 0.7, opacity: 0, rotate: -6 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ duration: 0.45, delay: 0.5, ease: swoosh }}
      className="relative"
    >
      <svg
        width="200"
        height="100"
        viewBox="0 0 200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        <defs>
          <linearGradient id="rollerBody" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor={PAINT_LIGHT} />
            <stop offset="0.5" stopColor={PAINT} />
            <stop offset="1" stopColor={PAINT_DARK} />
          </linearGradient>
          <linearGradient id="rollerShine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="white" stopOpacity="0.55" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="handleGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#374151" />
            <stop offset="1" stopColor="#6b7280" />
          </linearGradient>
          <linearGradient id="gripGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1f2937" />
            <stop offset="1" stopColor="#111827" />
          </linearGradient>
        </defs>

        {/* Grip cap on the LEFT */}
        <rect x="0" y="41" width="14" height="18" rx="4" fill="url(#gripGrad)" />
        <rect x="3" y="45" width="8" height="1.5" rx="0.75" fill="#4b5563" />
        <rect x="3" y="49" width="8" height="1.5" rx="0.75" fill="#4b5563" />
        <rect x="3" y="53" width="8" height="1.5" rx="0.75" fill="#4b5563" />

        {/* Handle (horizontal, going right from grip to frame) */}
        <rect
          x="12"
          y="45"
          width="80"
          height="10"
          rx="5"
          fill="url(#handleGrad)"
        />
        <rect
          x="12"
          y="45"
          width="80"
          height="3"
          rx="1.5"
          fill="white"
          opacity="0.25"
        />

        {/* Frame — bracket connecting handle to vertical cylinder */}
        <path
          d="M90 32 L90 68 L112 68 L112 62 L100 62 L100 38 L112 38 L112 32 Z"
          fill="#9ca3af"
        />
        <path
          d="M90 32 L112 32 L112 38 L100 38 L100 42 L94 42 L94 32 Z"
          fill="#d1d5db"
        />

        {/* Roller body (VERTICAL cylinder on the RIGHT) */}
        <rect
          x="112"
          y="8"
          width="38"
          height="84"
          rx="19"
          fill="url(#rollerBody)"
        />
        <rect
          x="112"
          y="8"
          width="14"
          height="84"
          rx="7"
          fill="url(#rollerShine)"
        />
        <rect x="112" y="8" width="38" height="5" fill={PAINT_DARK} />
        <rect x="112" y="87" width="38" height="5" fill={PAINT_DARK} />

        {/* Foam texture dots */}
        {Array.from({ length: 30 }).map((_, i) => {
          const x = 118 + (i % 15) * 2 + Math.random() * 2;
          const y = 14 + Math.floor(i / 15) * 30 + (i % 5) * 4 + Math.random() * 4;
          return (
            <circle key={i} cx={x} cy={y} r="1" fill="white" opacity="0.15" />
          );
        })}
      </svg>
    </motion.div>
  );
}
