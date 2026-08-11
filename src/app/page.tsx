import { SiteHeader } from "@/components/site/header";
import { SiteHero } from "@/components/site/hero";
import { SiteAbout } from "@/components/site/about";
import { SiteServices } from "@/components/site/services";
import { SitePortfolio } from "@/components/site/portfolio";
import { SiteStats } from "@/components/site/stats";
import { SitePaintFeature } from "@/components/site/paint-feature";
import { SitePartners } from "@/components/site/partners";
import { SiteFaq } from "@/components/site/faq";
import { SiteContact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* 1. Grab attention */}
        <SiteHero />

        {/* 2. Who we are — quick intro */}
        <SiteAbout />

        {/* 3. What we do */}
        <SiteServices />

        {/* 4. Proof of work */}
        <SitePortfolio />

        {/* 5. Numbers / credibility */}
        <SiteStats />

        {/* 6. Unique value + CTA */}
        <SitePaintFeature />

        {/* 7. Trust — partners & qualifications */}
        <SitePartners />

        {/* 8. Objection handling */}
        <SiteFaq />

        {/* 9. Conversion */}
        <SiteContact />
      </main>
      <SiteFooter />
    </>
  );
}
