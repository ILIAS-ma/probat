"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const easeInOut = [0.85, 0, 0.15, 1] as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export function PaintLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(t);
  }, []);

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
          {/* Background rising panel */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 1.3,
              delay: 1.2,
              ease: easeInOut,
            }}
            className="absolute inset-0 bg-blue-600"
          />

          {/* Brand text — always contrasts via mix-blend-difference */}
          <motion.span
            initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
            className="relative z-10 select-none text-6xl font-black lowercase tracking-tight text-white sm:text-7xl md:text-8xl"
            style={{ mixBlendMode: "difference" }}
          >
            dispobat
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
