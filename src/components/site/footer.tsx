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
              <span className="text-lg font-bold tracking-tight">Dispobat</span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Dispobat accompagne les entreprises et collectivités dans leurs
              projets de rénovation énergétique via les Certificats
              d&apos;Économies d&apos;Énergie (CEE).
            </p>
            <a
              href="mailto:contact@dispobat.com"
              className="mt-6 inline-block text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              contact@dispobat.com
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Navigation</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link href="#services" className="hover:text-foreground">Services</Link></li>
              <li><Link href="#references" className="hover:text-foreground">Réalisations</Link></li>
              <li><Link href="#faq" className="hover:text-foreground">FAQ</Link></li>
              <li><Link href="#contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Légal</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground">Mentions légales</Link></li>
              <li><Link href="#" className="hover:text-foreground">Politique RGPD</Link></li>
              <li><Link href="#" className="hover:text-foreground">Cookies</Link></li>
              <li><Link href="#" className="hover:text-foreground">CGV</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Dispobat. Tous droits réservés.</p>
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}
