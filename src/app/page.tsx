import { SiteHeader } from "@/components/site/header";
import { SiteHero } from "@/components/site/hero";
import { SiteServices } from "@/components/site/services";
import { SiteStats } from "@/components/site/stats";
import { SitePortfolio } from "@/components/site/portfolio";
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
        <SiteHero />
        <SiteServices />
        <SiteStats />
        <SitePortfolio />
        <SitePaintFeature />
        <SitePartners />
        <SiteFaq />
        <SiteContact />
      </main>
      <SiteFooter />
    </>
  );
}
