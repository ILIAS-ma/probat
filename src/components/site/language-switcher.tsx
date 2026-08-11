"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useT, type Lang } from "@/lib/i18n";

const LANGUAGES: { code: Lang; label: string; short: string }[] = [
  { code: "fr", label: "Français", short: "FR" },
  { code: "en", label: "English", short: "EN" },
];

interface LanguageSwitcherProps {
  className?: string;
  align?: "left" | "right";
}

export function LanguageSwitcher({
  className,
  align = "right",
}: LanguageSwitcherProps) {
  const { lang, setLang } = useT();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const active = LANGUAGES.find((l) => l.code === lang)!;

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full bg-muted/50 px-3 py-1.5 text-sm font-semibold text-foreground/80 transition-all duration-300 hover:bg-muted",
          open && "bg-muted text-foreground"
        )}
      >
        <span>{active.short}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs opacity-60"
        >
          ▾
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "absolute top-full z-50 mt-2 min-w-[140px] overflow-hidden rounded-xl bg-background p-1 shadow-xl ring-1 ring-black/5 backdrop-blur-xl",
              align === "left" ? "left-0" : "right-0"
            )}
          >
            {LANGUAGES.map((l) => {
              const isActive = l.code === lang;
              return (
                <li key={l.code} role="option" aria-selected={isActive}>
                  <button
                    onClick={() => {
                      setLang(l.code);
                      setOpen(false);
                    }}
                    className={cn(
                      "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-200",
                      isActive
                        ? "bg-blue-500/10 font-semibold text-blue-700 dark:text-blue-400"
                        : "text-foreground/80 hover:bg-muted"
                    )}
                  >
                    <span>{l.label}</span>
                    <span className="text-xs opacity-60">{l.short}</span>
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
