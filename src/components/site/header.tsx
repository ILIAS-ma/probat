"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { LanguageSwitcher } from "@/components/site/language-switcher";
import { useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { t } = useT();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open || !isHome;

  const NAV = [
    { href: "#a-propos", label: t("nav.about") },
    { href: "#services", label: t("nav.services") },
    { href: "#references", label: t("nav.portfolio") },
    { href: "#faq", label: t("nav.faq") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-border/60 bg-background/80 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/img/logo-icon.png"
            alt="DISPO BAT"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={isHome ? item.href : `/${item.href}`}
              className={cn(
                "text-sm font-medium transition-colors duration-300",
                solid
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/85 hover:text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <LanguageSwitcher
              className={cn(
                "transition-colors duration-300",
                !solid &&
                  "[&>button]:bg-white/10 [&>button]:text-white [&>button]:ring-1 [&>button]:ring-white/20 [&>button]:hover:bg-white/20",
              )}
            />
          </div>
          <AnimatedThemeToggler
            className={cn(
              "rounded-md p-2 transition-colors duration-300",
              solid
                ? "text-foreground hover:bg-muted"
                : "text-white hover:bg-white/10",
            )}
            variant="circle"
          />
          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 lg:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1">
              <span
                className={cn(
                  "h-0.5 w-5 transition-all duration-300",
                  solid ? "bg-foreground" : "bg-white",
                  open ? "translate-y-1.5 rotate-45" : "",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-5 transition-all duration-300",
                  solid ? "bg-foreground" : "bg-white",
                  open ? "opacity-0" : "",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-5 transition-all duration-300",
                  solid ? "bg-foreground" : "bg-white",
                  open ? "-translate-y-1.5 -rotate-45" : "",
                )}
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
                href={isHome ? item.href : `/${item.href}`}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3">
              <LanguageSwitcher align="left" />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
