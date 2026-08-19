import Link from "next/link";
import { LanguageSwitcher } from "@/components/site/language-switcher";

export function SiteFooter() {
  return (
    <footer className="bg-[#0b0f19]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="grid h-8 w-8 place-items-center rounded-md bg-blue-600 font-bold text-white">
                D
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                DISPO BAT
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-white/60">
              Votre partenaire de confiance pour tous vos projets de peinture
              et décoration intérieure. Plus de 10 ans d&apos;expertise au
              service des professionnels.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Nos services</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>Peinture intérieure et extérieure</li>
              <li>Traitements anti-humidité</li>
              <li>Décoration intérieure</li>
              <li>Conseil personnalisé</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
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
          <p>© {new Date().getFullYear()} DISPO BAT. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-white">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="hover:text-white">
              Politique de confidentialité
            </Link>
            <Link href="#" className="hover:text-white">
              CGU
            </Link>
            <LanguageSwitcher className="[&>button]:bg-white/10 [&>button]:text-white [&>button]:ring-1 [&>button]:ring-white/15 [&>button]:hover:bg-white/20" />
          </div>
        </div>
      </div>
    </footer>
  );
}
