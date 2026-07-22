"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

type BuildingType = "residentiel" | "tertiaire" | "industriel" | "collectivite";
type Priority = "economies" | "confort" | "obligation" | "image";
type Work =
  | "isolation"
  | "pac"
  | "solaire"
  | "led"
  | "gtb"
  | "autre";

interface FormData {
  building: BuildingType | null;
  works: Work[];
  surface: string;
  priorities: Priority[];
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

const BUILDINGS: { id: BuildingType; label: string; desc: string }[] = [
  { id: "residentiel", label: "Résidentiel", desc: "Maison, immeuble, copropriété" },
  { id: "tertiaire", label: "Tertiaire", desc: "Bureaux, commerces, hôtels" },
  { id: "industriel", label: "Industriel", desc: "Usines, entrepôts, logistique" },
  { id: "collectivite", label: "Collectivité", desc: "Écoles, hôpitaux, mairies" },
];

const WORKS: { id: Work; label: string }[] = [
  { id: "isolation", label: "Isolation thermique" },
  { id: "pac", label: "Pompe à chaleur" },
  { id: "solaire", label: "Panneaux solaires" },
  { id: "led", label: "Éclairage LED" },
  { id: "gtb", label: "GTB / Pilotage" },
  { id: "autre", label: "Autres travaux" },
];

const PRIORITIES: { id: Priority; label: string; desc: string }[] = [
  { id: "economies", label: "Économies d'énergie", desc: "Réduire les factures" },
  { id: "confort", label: "Confort thermique", desc: "Améliorer le bien-être" },
  { id: "obligation", label: "Obligation légale", desc: "Décret tertiaire, DPE" },
  { id: "image", label: "Image RSE", desc: "Démarche écoresponsable" },
];

const STEPS = ["Bâtiment", "Travaux", "Surface", "Enjeux", "Contact"] as const;

export function SiteContact() {
  const [step, setStep] = useState(0);
  const [state, setState] = useState<"idle" | "loading" | "success">("idle");
  const [data, setData] = useState<FormData>({
    building: null,
    works: [],
    surface: "",
    priorities: [],
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const total = STEPS.length;
  const progress = ((step + 1) / total) * 100;

  const canNext = () => {
    switch (step) {
      case 0:
        return data.building !== null;
      case 1:
        return data.works.length > 0;
      case 2:
        return data.surface.trim() !== "" && Number(data.surface) > 0;
      case 3:
        return data.priorities.length > 0;
      case 4:
        return (
          data.name.trim() !== "" &&
          data.email.trim() !== "" &&
          data.phone.trim() !== ""
        );
      default:
        return false;
    }
  };

  const next = () => {
    if (!canNext()) return;
    if (step < total - 1) setStep(step + 1);
    else submit();
  };

  const back = () => step > 0 && setStep(step - 1);

  const submit = () => {
    setState("loading");
    setTimeout(() => setState("success"), 1000);
  };

  const reset = () => {
    setState("idle");
    setStep(0);
    setData({
      building: null,
      works: [],
      surface: "",
      priorities: [],
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const toggleWork = (w: Work) => {
    setData((d) => ({
      ...d,
      works: d.works.includes(w)
        ? d.works.filter((x) => x !== w)
        : [...d.works, w],
    }));
  };

  const togglePriority = (p: Priority) => {
    setData((d) => ({
      ...d,
      priorities: d.priorities.includes(p)
        ? d.priorities.filter((x) => x !== p)
        : [...d.priorities, p],
    }));
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <FadeIn className="mb-10 text-center">
          <h2 className="animated-gradient-text text-4xl font-bold tracking-tight md:text-5xl">
            Estimez vos primes en 2 min
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            5 questions rapides pour évaluer votre éligibilité et recevoir une
            estimation personnalisée sous 24h.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-muted/30 shadow-sm">
            <div className="h-1 bg-muted">
              <motion.div
                className="h-full bg-blue-600"
                initial={{ width: 0 }}
                animate={{ width: state === "success" ? "100%" : `${progress}%` }}
                transition={{ duration: 0.5, ease: easeOut }}
              />
            </div>

            {state !== "success" && (
              <div className="flex items-center justify-between px-6 py-4 sm:px-10">
                <div className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                  Étape {step + 1} / {total}
                </div>
                <div className="hidden gap-1 sm:flex">
                  {STEPS.map((label, i) => (
                    <div
                      key={label}
                      className={cn(
                        "text-xs font-medium transition-colors",
                        i === step
                          ? "text-foreground"
                          : i < step
                            ? "text-blue-600"
                            : "text-muted-foreground/50"
                      )}
                    >
                      {label}
                      {i < STEPS.length - 1 && (
                        <span className="mx-2 text-muted-foreground/30">·</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="px-6 py-8 sm:px-10 sm:py-10">
              <AnimatePresence mode="wait">
                {state === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: easeOut }}
                    className="flex flex-col items-center justify-center py-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.15, duration: 0.5, ease: easeOut }}
                      className="grid h-14 w-14 place-items-center rounded-full bg-blue-600 text-2xl font-bold text-white shadow-lg shadow-blue-500/30"
                    >
                      ✓
                    </motion.div>
                    <h3 className="mt-6 text-2xl font-bold">Demande envoyée !</h3>
                    <p className="mt-3 max-w-md text-sm text-muted-foreground">
                      Merci {data.name.split(" ")[0] || ""} ! Un expert Dispobat
                      analyse votre projet et vous recontactera sous 24h ouvrées
                      au {data.phone} ou par email.
                    </p>
                    <button
                      onClick={reset}
                      className="mt-8 text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Faire une nouvelle simulation →
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 32 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -32 }}
                    transition={{ duration: 0.35, ease: easeOut }}
                  >
                    {step === 0 && (
                      <StepBuilding
                        value={data.building}
                        onChange={(v) => setData({ ...data, building: v })}
                      />
                    )}
                    {step === 1 && (
                      <StepWorks value={data.works} onToggle={toggleWork} />
                    )}
                    {step === 2 && (
                      <StepSurface
                        value={data.surface}
                        onChange={(v) => setData({ ...data, surface: v })}
                      />
                    )}
                    {step === 3 && (
                      <StepPriorities
                        value={data.priorities}
                        onToggle={togglePriority}
                      />
                    )}
                    {step === 4 && (
                      <StepContact data={data} setData={setData} />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {state !== "success" && (
              <div className="flex items-center justify-between gap-3 px-6 py-5 sm:px-10">
                <button
                  onClick={back}
                  disabled={step === 0}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300",
                    step === 0
                      ? "cursor-not-allowed text-muted-foreground/40"
                      : "text-foreground hover:bg-background"
                  )}
                >
                  ← Retour
                </button>

                <button
                  onClick={next}
                  disabled={!canNext() || state === "loading"}
                  className={cn(
                    "rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300",
                    !canNext() || state === "loading"
                      ? "cursor-not-allowed opacity-50"
                      : "hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
                  )}
                >
                  {state === "loading"
                    ? "Envoi…"
                    : step === total - 1
                      ? "Envoyer ma demande →"
                      : "Suivant →"}
                </button>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------- Steps ---------- */

function StepBuilding({
  value,
  onChange,
}: {
  value: BuildingType | null;
  onChange: (v: BuildingType) => void;
}) {
  return (
    <>
      <StepHeader
        title="Quel type de bâtiment ?"
        subtitle="Sélectionnez la catégorie qui correspond à votre projet."
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {BUILDINGS.map((b) => (
          <OptionCard
            key={b.id}
            selected={value === b.id}
            onClick={() => onChange(b.id)}
            title={b.label}
            desc={b.desc}
          />
        ))}
      </div>
    </>
  );
}

function StepWorks({
  value,
  onToggle,
}: {
  value: Work[];
  onToggle: (w: Work) => void;
}) {
  return (
    <>
      <StepHeader
        title="Quels travaux envisagez-vous ?"
        subtitle="Plusieurs choix possibles."
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {WORKS.map((w) => (
          <OptionCard
            key={w.id}
            compact
            selected={value.includes(w.id)}
            onClick={() => onToggle(w.id)}
            title={w.label}
          />
        ))}
      </div>
    </>
  );
}

function StepSurface({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const presets = ["100", "500", "1000", "5000", "10000"];
  return (
    <>
      <StepHeader
        title="Quelle est la surface concernée ?"
        subtitle="En mètres carrés (m²). Une estimation suffit."
      />
      <div className="mx-auto max-w-md">
        <div className="relative">
          <input
            type="number"
            min="0"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Ex : 1200"
            className="input-base pr-12 text-center text-2xl font-bold"
            autoFocus
          />
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-muted-foreground">
            m²
          </span>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {presets.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => onChange(p)}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200",
                value === p
                  ? "bg-blue-600 text-white"
                  : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {Number(p).toLocaleString("fr-FR")} m²
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

function StepPriorities({
  value,
  onToggle,
}: {
  value: Priority[];
  onToggle: (p: Priority) => void;
}) {
  return (
    <>
      <StepHeader
        title="Quels sont vos enjeux principaux ?"
        subtitle="Plusieurs choix possibles."
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {PRIORITIES.map((p) => (
          <OptionCard
            key={p.id}
            selected={value.includes(p.id)}
            onClick={() => onToggle(p.id)}
            title={p.label}
            desc={p.desc}
          />
        ))}
      </div>
    </>
  );
}

function StepContact({
  data,
  setData,
}: {
  data: FormData;
  setData: React.Dispatch<React.SetStateAction<FormData>>;
}) {
  return (
    <>
      <StepHeader
        title="Vos coordonnées"
        subtitle="Un expert vous rappelle sous 24h avec votre estimation."
      />
      <div className="mx-auto max-w-lg space-y-4">
        <Field label="Nom complet" required>
          <input
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            placeholder="Jean Dupont"
            className="input-base"
          />
        </Field>
        <Field label="Entreprise">
          <input
            type="text"
            value={data.company}
            onChange={(e) => setData({ ...data, company: e.target.value })}
            placeholder="Ma Société SAS"
            className="input-base"
          />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Email" required>
            <input
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="jean@exemple.com"
              className="input-base"
            />
          </Field>
          <Field label="Téléphone" required>
            <input
              type="tel"
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
              placeholder="+33 6 12 34 56 78"
              className="input-base"
            />
          </Field>
        </div>
        <Field label="Message (facultatif)">
          <textarea
            rows={3}
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
            placeholder="Précisions, contraintes, échéance…"
            className="input-base resize-none"
          />
        </Field>
      </div>
    </>
  );
}

/* ---------- Sub-parts ---------- */

function StepHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-8 text-center">
      <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
    </div>
  );
}

function OptionCard({
  selected,
  onClick,
  title,
  desc,
  compact = false,
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
  desc?: string;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-2xl p-5 text-left transition-all duration-300",
        selected
          ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
          : "bg-background/60 hover:-translate-y-0.5 hover:bg-muted",
        compact && "py-4"
      )}
    >
      <div className={cn("font-semibold", compact && "text-sm")}>{title}</div>
      {desc && (
        <div
          className={cn(
            "mt-1 text-xs",
            selected ? "text-white/80" : "text-muted-foreground"
          )}
        >
          {desc}
        </div>
      )}
    </button>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
        {required && <span className="text-blue-600">*</span>}
      </span>
      {children}
    </label>
  );
}
