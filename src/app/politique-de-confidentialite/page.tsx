import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité & RGPD — DISPO BAT",
  description:
    "Politique de confidentialité et informations RGPD de DISPO BAT : données collectées, finalités, durée de conservation et vos droits.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border/60 py-8 first:border-t-0 first:pt-0">
      <h2 className="text-xl font-bold tracking-tight text-blue-600 dark:text-blue-400 md:text-2xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 pb-28 pt-32 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          RGPD
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          Politique de confidentialité
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <p className="mt-8 text-base leading-relaxed text-muted-foreground">
          DISPO BAT attache une grande importance à la protection de vos
          données personnelles. Cette politique explique quelles données nous
          collectons, pourquoi, comment elles sont utilisées et quels sont vos
          droits, conformément au Règlement Général sur la Protection des
          Données (RGPD — Règlement UE 2016/679) et à la loi Informatique et
          Libertés.
        </p>

        <div className="mt-10">
          <Section title="1. Responsable du traitement">
            <p>
              Le responsable du traitement des données collectées sur ce site
              est :
            </p>
            <ul className="list-inside list-disc space-y-1">
              <li>
                <span className="font-semibold text-foreground">
                  DISPO BAT
                </span>
              </li>
              <li>7 rue d&apos;Epinay, 92700 Colombes, France</li>
              <li>
                Email :{" "}
                <a
                  href="mailto:dispobat@yahoo.fr"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                >
                  dispobat@yahoo.fr
                </a>
              </li>
              <li>
                Téléphone :{" "}
                <a
                  href="tel:+33607943129"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                >
                  06 07 94 31 29
                </a>
              </li>
            </ul>
          </Section>

          <Section title="2. Données collectées">
            <p>
              Nous collectons uniquement les données que vous nous
              transmettez volontairement via le formulaire de contact de ce
              site, à savoir :
            </p>
            <ul className="list-inside list-disc space-y-1">
              <li>Votre nom</li>
              <li>Votre adresse email</li>
              <li>Le contenu de votre message</li>
            </ul>
            <p>
              Aucune donnée sensible (santé, opinions politiques,
              religieuses, etc.) n&apos;est collectée. Nous ne collectons pas
              de moyen de paiement sur ce site.
            </p>
          </Section>

          <Section title="3. Finalités du traitement">
            <p>Vos données sont utilisées exclusivement pour :</p>
            <ul className="list-inside list-disc space-y-1">
              <li>Répondre à votre demande de devis ou de renseignement,</li>
              <li>Assurer le suivi de la relation commerciale,</li>
              <li>Vous recontacter dans le cadre de votre projet.</li>
            </ul>
            <p>
              Vos données ne sont jamais utilisées à des fins de prospection
              commerciale non sollicitée, ni cédées ou vendues à des tiers.
            </p>
          </Section>

          <Section title="4. Base légale">
            <p>
              Le traitement de vos données repose sur votre consentement
              exprès, manifesté par l&apos;envoi volontaire du formulaire de
              contact, ainsi que sur l&apos;intérêt légitime de DISPO BAT à
              répondre aux demandes qui lui sont adressées.
            </p>
          </Section>

          <Section title="5. Destinataires des données">
            <p>
              Vos données sont destinées exclusivement à l&apos;équipe DISPO
              BAT. Elles peuvent être traitées par nos prestataires techniques
              (hébergement, messagerie) dans la seule mesure nécessaire au
              fonctionnement du site, et dans le respect du RGPD.
            </p>
          </Section>

          <Section title="6. Durée de conservation">
            <p>
              Vos données sont conservées pendant une durée de{" "}
              <span className="font-semibold text-foreground">
                3 ans
              </span>{" "}
              à compter de notre dernier échange, sauf obligation légale de
              conservation plus longue (comptabilité, garantie décennale) ou
              demande de suppression de votre part.
            </p>
          </Section>

          <Section title="7. Vos droits">
            <p>
              Conformément au RGPD, vous disposez des droits suivants sur vos
              données personnelles :
            </p>
            <ul className="list-inside list-disc space-y-1">
              <li>Droit d&apos;accès à vos données,</li>
              <li>Droit de rectification,</li>
              <li>Droit à l&apos;effacement (« droit à l&apos;oubli »),</li>
              <li>Droit à la limitation du traitement,</li>
              <li>Droit d&apos;opposition,</li>
              <li>Droit à la portabilité de vos données.</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à l&apos;adresse{" "}
              <a
                href="mailto:dispobat@yahoo.fr"
                className="font-medium text-blue-600 hover:underline dark:text-blue-400"
              >
                dispobat@yahoo.fr
              </a>
              . Nous nous engageons à répondre dans un délai maximum d&apos;un
              mois.
            </p>
            <p>
              Si vous estimez que vos droits ne sont pas respectés, vous
              pouvez introduire une réclamation auprès de la{" "}
              <span className="font-semibold text-foreground">
                CNIL
              </span>{" "}
              (Commission Nationale de l&apos;Informatique et des Libertés) —{" "}
              <span className="text-foreground">www.cnil.fr</span>.
            </p>
          </Section>

          <Section title="8. Cookies">
            <p>
              Ce site n&apos;utilise pas de cookies de suivi publicitaire ou
              de traceurs tiers. Seuls des cookies techniques, strictement
              nécessaires au bon fonctionnement du site (par exemple la
              mémorisation de votre préférence d&apos;affichage clair/sombre),
              peuvent être déposés. Ces cookies ne nécessitent pas de
              consentement préalable au sens du RGPD.
            </p>
          </Section>

          <Section title="9. Sécurité">
            <p>
              DISPO BAT met en œuvre les mesures techniques et
              organisationnelles raisonnables pour protéger vos données
              contre tout accès non autorisé, perte, altération ou
              divulgation.
            </p>
          </Section>

          <Section title="10. Modification de la politique">
            <p>
              Cette politique de confidentialité peut être mise à jour à tout
              moment, notamment pour se conformer à toute évolution
              réglementaire, technique ou jurisprudentielle. Nous vous
              invitons à la consulter régulièrement.
            </p>
          </Section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
