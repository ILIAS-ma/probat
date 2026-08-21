"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  animate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { PaintRoller } from "lucide-react";

const easeInOut = [0.85, 0, 0.15, 1] as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

const PAINT_DELAY = 0.3;
const PAINT_DURATION = 1.5;
const HOLD_MS = 700;

export function PaintLoader() {
  const [visible, setVisible] = useState(true);
  const progress = useMotionValue(0);
  const heightPct = useTransform(progress, (v) => `${v}%`);

  useEffect(() => {
    const controls = animate(progress, 100, {
      duration: PAINT_DURATION,
      delay: PAINT_DELAY,
      ease: easeInOut,
    });
    const t = setTimeout(
      () => setVisible(false),
      (PAINT_DELAY + PAINT_DURATION) * 1000 + HOLD_MS,
    );
    return () => {
      controls.stop();
      clearTimeout(t);
    };
  }, [progress]);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
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
            y: "-100%",
            transition: { duration: 0.9, ease: easeInOut },
          }}
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-background"
        >
          {/* Painted wall — grows downward like a coat of paint */}
          <motion.div
            className="absolute inset-x-0 top-0 bg-blue-600"
            style={{ height: heightPct }}
          >
            {/* drippy leading edge */}
            <svg
              className="absolute bottom-0 left-0 w-full text-blue-600"
              style={{ height: 14, transform: "translateY(55%)" }}
              viewBox="0 0 240 16"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M0,0 L0,3 C4,3 4,15 8,15 C12,15 12,4 16,4 C20,4 20,12 24,12 C28,12 28,3 32,3 C36,3 36,16 40,16 C44,16 44,4 48,4 C52,4 52,10 56,10 C60,10 60,3 64,3 C68,3 68,13 72,13 C76,13 76,3 80,3 C84,3 84,14 88,14 C92,14 92,4 96,4 C100,4 100,11 104,11 C108,11 108,3 112,3 C116,3 116,16 120,16 C124,16 124,4 128,4 C132,4 132,9 136,9 C140,9 140,3 144,3 C148,3 148,15 152,15 C156,15 156,4 160,4 C164,4 164,12 168,12 C172,12 172,3 176,3 C180,3 180,14 184,14 C188,14 188,4 192,4 C196,4 196,10 200,10 C204,10 204,3 208,3 C212,3 212,13 216,13 C220,13 220,3 224,3 L240,3 L240,0 Z"
                fill="currentColor"
              />
            </svg>
          </motion.div>

          {/* Roller riding the wet edge */}
          <motion.div
            className="absolute left-1/2 z-10"
            style={{ top: heightPct, marginTop: -26 }}
          >
            <motion.div
              animate={{ x: [-14, 14, -14] }}
              transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
              className="-translate-x-1/2"
            >
              <PaintRoller
                className="h-9 w-9 -rotate-12 text-white drop-shadow-lg sm:h-12 sm:w-12"
                strokeWidth={1.75}
              />
            </motion.div>
          </motion.div>

          {/* Brand */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            <motion.span
              initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.15, ease: easeOut }}
              className="select-none text-6xl font-black lowercase tracking-tight text-white sm:text-7xl md:text-8xl"
              style={{ mixBlendMode: "difference" }}
            >
              dispobat
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: easeOut }}
              className="select-none text-[11px] font-semibold uppercase tracking-[0.35em] text-white sm:text-xs"
              style={{ mixBlendMode: "difference" }}
            >
              Peinture · Ravalement · BTP
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
