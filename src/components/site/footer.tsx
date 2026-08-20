"use client";

import Link from "next/link";
import Image from "next/image";
import { LanguageSwitcher } from "@/components/site/language-switcher";
import { useT } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useT();

  return (
    <footer className="bg-[#0b0f19]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/img/logo-icon.png"
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <Image
                src="/img/logo-text.png"
                alt="DISPO BAT"
                width={190}
                height={27}
                className="h-6 w-auto object-contain sm:h-7"
              />
            </Link>
            <p className="mt-4 max-w-md text-sm text-white/60">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">
              {t("footer.services")}
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>{t("services.1.title")}</li>
              <li>{t("services.2.title")}</li>
              <li>{t("services.3.title")}</li>
              <li>{t("services.4.title")}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">
              {t("footer.contact")}
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>7 rue d&apos;Epinay</li>
              <li>92700 Colombes, France</li>
              <li>
                <a href="tel:+33607943129" className="hover:text-white">
                  06 07 94 31 29
                </a>
              </li>
              <li>
                <a
                  href="mailto:dispobat@yahoo.fr"
                  className="hover:text-white"
                >
                  dispobat@yahoo.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} DISPO BAT. {t("footer.rights")}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="#" className="hover:text-white">
              {t("footer.legal")}
            </Link>
            <Link href="/politique-de-confidentialite" className="hover:text-white">
              {t("footer.privacy")}
            </Link>
            <Link href="#" className="hover:text-white">
              {t("footer.terms")}
            </Link>
            <LanguageSwitcher
              align="left"
              className="[&>button]:bg-white/10 [&>button]:text-white [&>button]:ring-1 [&>button]:ring-white/15 [&>button]:hover:bg-white/20"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
