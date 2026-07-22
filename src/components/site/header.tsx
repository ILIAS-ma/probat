"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { LanguageSwitcher } from "@/components/site/language-switcher";

const NAV = [
  { href: "#services", label: "Nos services" },
  { href: "#references", label: "Réalisations" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="grid h-8 w-8 place-items-center rounded-md bg-blue-600 font-bold text-white">
            D
          </div>
          <span className="text-lg font-bold tracking-tight">Dispobat</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>
          <AnimatedThemeToggler
            className="rounded-md p-2 text-foreground hover:bg-muted"
            variant="circle"
          />
          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 lg:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1">
              <span
                className={`h-0.5 w-5 bg-foreground transition ${open ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 w-5 bg-foreground transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-5 bg-foreground transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <nav className="bg-background lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3">
              <LanguageSwitcher />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
