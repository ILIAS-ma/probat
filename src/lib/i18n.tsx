"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "fr" | "en";

type Dict = Record<string, { fr: string; en: string }>;

export const DICT: Dict = {
  // Header nav
  "nav.about": { fr: "À propos", en: "About" },
  "nav.services": { fr: "Nos expertises", en: "Services" },
  "nav.portfolio": { fr: "Réalisations", en: "Projects" },
  "nav.faq": { fr: "FAQ", en: "FAQ" },
  "nav.contact": { fr: "Contact", en: "Contact" },

  // Hero
  "hero.badge": {
    fr: "Devis gratuit sous 24h",
    en: "Free quote within 24h",
  },
  "hero.title.prefix": { fr: "Des finitions", en: "Craftsmanship that's" },
  "hero.word.1": { fr: "soignées", en: "refined" },
  "hero.word.2": { fr: "maîtrisées", en: "mastered" },
  "hero.word.3": { fr: "durables", en: "durable" },
  "hero.title.suffix": {
    fr: "un service maîtrisé.",
    en: "a service you can trust.",
  },
  "hero.subtitle": {
    fr: "Depuis plus de 10 ans, DISPO BAT met son savoir-faire au service des professionnels pour tous leurs projets de peinture, ravalement et décoration intérieure.",
    en: "For over 10 years, DISPO BAT has been putting its expertise at the service of professionals for all their painting, renovation and interior decoration projects.",
  },
  "hero.cta.primary": {
    fr: "Demandez votre devis gratuit",
    en: "Request a free quote",
  },
  "hero.cta.secondary": { fr: "Voir plus →", en: "Learn more →" },
  "hero.stats.years": { fr: "années d'expérience", en: "years of expertise" },
  "hero.stats.projects": { fr: "chantiers livrés", en: "projects completed" },

  // About
  "about.title.1": { fr: "Des", en: "Tailored" },
  "about.title.2": { fr: "services", en: "services" },
  "about.title.3": { fr: "adaptés,", en: "," },
  "about.title.4": { fr: "une", en: "recognized" },
  "about.title.5": { fr: "expertise", en: "expertise" },
  "about.title.6": { fr: "reconnue", en: "" },
  "about.description": {
    fr: "Depuis 2012, DISPO BAT accompagne les professionnels du bâtiment avec son expertise en peinture, vitrerie et décoration intérieure. Notre équipe qualifiée vous garantit des finitions de qualité supérieure.",
    en: "Since 2012, DISPO BAT has been supporting building professionals with expertise in painting, glazing and interior decoration. Our qualified team guarantees premium-quality finishes.",
  },
  "about.stat.years": { fr: "Années d'expérience", en: "Years of expertise" },
  "about.stat.projects": { fr: "Chantiers livrés", en: "Projects delivered" },
  "about.stat.satisfaction": {
    fr: "Clients satisfaits",
    en: "Satisfied clients",
  },

  // Services
  "services.title": { fr: "Nos expertises", en: "Our expertise" },
  "services.subtitle": {
    fr: "De la préparation à la finition, nous maîtrisons chaque étape pour garantir des résultats à la hauteur de vos exigences.",
    en: "From preparation to finishing, we master every stage to deliver results that meet your highest standards.",
  },
  "services.1.title": {
    fr: "Peinture professionnelle",
    en: "Professional painting",
  },
  "services.1.desc": {
    fr: "Peinture intérieure et extérieure avec finitions haut de gamme. Techniques modernes et matériaux premium pour des résultats durables.",
    en: "Interior and exterior painting with premium finishes. Modern techniques and top-tier materials for lasting results.",
  },
  "services.2.title": {
    fr: "Traitements anti-humidité",
    en: "Damp-proofing",
  },
  "services.2.desc": {
    fr: "Diagnostic complet et solutions durables contre l'humidité. Injection de résine, enduits hydrofuges pour une protection optimale.",
    en: "Full diagnosis and long-term damp solutions. Resin injection, waterproof coatings for optimal protection.",
  },
  "services.3.title": {
    fr: "Décoration intérieure",
    en: "Interior decoration",
  },
  "services.3.desc": {
    fr: "Aménagement sur mesure d'espaces professionnels. Design moderne et fonctionnel adapté à votre image de marque.",
    en: "Tailored design for professional spaces. Modern and functional style aligned with your brand image.",
  },
  "services.4.title": {
    fr: "Conseils et accompagnement",
    en: "Advice and guidance",
  },
  "services.4.desc": {
    fr: "Expertise couleurs et finitions personnalisées. Échantillons, tests couleurs et devis gratuits avec suivi complet.",
    en: "Colour expertise and custom finishes. Samples, colour tests and free quotes with end-to-end follow-up.",
  },

  // Portfolio
  "portfolio.title": { fr: "Nos réalisations", en: "Our projects" },
  "portfolio.subtitle": {
    fr: "Quelques projets récents qui témoignent de notre savoir-faire.",
    en: "A few recent projects that speak to our craftsmanship.",
  },

  // Stats
  "stats.title": { fr: "Pourquoi nous choisir", en: "Why choose us" },
  "stats.subtitle": {
    fr: "Une expérience solide et une exigence constante sur chaque chantier.",
    en: "Solid experience and consistent excellence on every project.",
  },
  "stats.years": { fr: "Années d'expérience", en: "Years of expertise" },
  "stats.projects": { fr: "Projets réalisés", en: "Projects completed" },
  "stats.satisfaction": { fr: "Clients satisfaits", en: "Satisfied clients" },
  "stats.revenue": { fr: "CA 2025", en: "2025 revenue" },

  // Paint feature
  "feature.title.1": { fr: "Chaque", en: "Every" },
  "feature.title.2": { fr: "couche", en: "coat" },
  "feature.title.3": { fr: "compte, chaque", en: "counts, every" },
  "feature.title.4": { fr: "détail", en: "detail" },
  "feature.title.5": { fr: "aussi.", en: "too." },
  "feature.desc": {
    fr: "Nos équipes qualifiées mettent leur savoir-faire au service de votre projet — de la préparation des supports jusqu'à la finition.",
    en: "Our qualified teams put their craftsmanship at the service of your project — from surface prep to final finish.",
  },
  "feature.cta.primary": { fr: "Demander un devis", en: "Request a quote" },
  "feature.cta.secondary": {
    fr: "Découvrir nos services",
    en: "See our services",
  },
  "feature.kpi.1.value": { fr: "13+", en: "13+" },
  "feature.kpi.1.label": {
    fr: "Années d'expérience",
    en: "Years of expertise",
  },
  "feature.kpi.2.value": { fr: "24h", en: "24h" },
  "feature.kpi.2.label": { fr: "Devis sous 24h", en: "Quote within 24h" },
  "feature.kpi.3.value": { fr: "0€", en: "€0" },
  "feature.kpi.3.label": {
    fr: "Frais de déplacement",
    en: "Travel costs",
  },

  // Partners
  "partners.qualifications": {
    fr: "Nos qualifications",
    en: "Our qualifications",
  },
  "partners.trusted": { fr: "Ils nous font confiance", en: "They trust us" },

  // FAQ
  "faq.title": { fr: "Questions fréquentes", en: "Frequently asked questions" },

  // Contact
  "contact.title.1": { fr: "Parlons de", en: "Let's talk about" },
  "contact.title.2": { fr: "votre projet.", en: "your project." },
  "contact.subtitle": {
    fr: "Un devis gratuit, une réponse sous 24h. Contactez-nous par téléphone, email ou via le formulaire.",
    en: "A free quote, a reply within 24 hours. Reach us by phone, email or via the form.",
  },
  "contact.label.phone": { fr: "Téléphone", en: "Phone" },
  "contact.label.email": { fr: "Email", en: "Email" },
  "contact.label.address": { fr: "Adresse", en: "Address" },
  "contact.form.name": { fr: "Nom", en: "Name" },
  "contact.form.email": { fr: "Email", en: "Email" },
  "contact.form.message": { fr: "Message", en: "Message" },
  "contact.form.send": {
    fr: "Envoyer ma demande →",
    en: "Send my request →",
  },
  "contact.form.sending": { fr: "Envoi…", en: "Sending…" },
  "contact.success.title": { fr: "Message envoyé !", en: "Message sent!" },
  "contact.success.desc": {
    fr: "Merci ! Nous vous recontactons sous 24h ouvrées.",
    en: "Thank you! We'll get back to you within 24 business hours.",
  },
  "contact.success.again": {
    fr: "Envoyer un nouveau message →",
    en: "Send another message →",
  },

  // Footer
  "footer.tagline": {
    fr: "Votre partenaire de confiance pour tous vos projets de peinture et décoration intérieure. Plus de 10 ans d'expertise au service des professionnels.",
    en: "Your trusted partner for all painting and interior decoration projects. Over 10 years of expertise serving professionals.",
  },
  "footer.services": { fr: "Nos services", en: "Our services" },
  "footer.contact": { fr: "Contact", en: "Contact" },
  "footer.rights": {
    fr: "Tous droits réservés.",
    en: "All rights reserved.",
  },
  "footer.legal": { fr: "Mentions légales", en: "Legal notice" },
  "footer.privacy": {
    fr: "Politique de confidentialité",
    en: "Privacy policy",
  },
  "footer.terms": { fr: "CGU", en: "Terms" },
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof DICT) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const saved = (typeof window !== "undefined" &&
      (localStorage.getItem("dispobat-lang") as Lang | null)) as Lang | null;
    if (saved === "fr" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("dispobat-lang", l);
      document.documentElement.lang = l;
    }
  };

  const t = (key: keyof typeof DICT) => DICT[key]?.[lang] ?? String(key);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useT must be used within LanguageProvider");
  return ctx;
}
