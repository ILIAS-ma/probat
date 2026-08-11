import Link from "next/link";
import { LanguageSwitcher } from "@/components/site/language-switcher";

export function SiteFooter() {
  return (
    <footer className="bg-muted/20">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="grid h-8 w-8 place-items-center rounded-md bg-blue-600 font-bold text-white">
                D
              </div>
              <span className="text-lg font-bold tracking-tight">
                DISPO BAT
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Votre partenaire de confiance pour tous vos projets de peinture
              et décoration intérieure. Plus de 10 ans d&apos;expertise au
              service des professionnels.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Nos services</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Peinture intérieure et extérieure</li>
              <li>Traitements anti-humidité</li>
              <li>Décoration intérieure</li>
              <li>Conseil personnalisé</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>7 rue d&apos;Epinay</li>
              <li>92700 Colombes, France</li>
              <li>
                <a
                  href="tel:+33607943129"
                  className="hover:text-foreground"
                >
                  06 07 94 31 29
                </a>
              </li>
              <li>
                <a
                  href="mailto:dispobat@yahoo.fr"
                  className="hover:text-foreground"
                >
                  dispobat@yahoo.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} DISPO BAT. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-foreground">
              Mentions légales
            </Link>
            <Link href="#" className="hover:text-foreground">
              Politique de confidentialité
            </Link>
            <Link href="#" className="hover:text-foreground">
              CGU
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}
