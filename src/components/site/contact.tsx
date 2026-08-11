"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function SiteContact() {
  const { t } = useT();
  const [state, setState] = useState<"idle" | "loading" | "success">("idle");
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const canSend =
    data.name.trim() !== "" &&
    data.email.trim() !== "" &&
    data.message.trim() !== "";

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSend) return;
    setState("loading");
    setTimeout(() => setState("success"), 900);
  };

  const reset = () => {
    setState("idle");
    setData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 lg:px-8">
        {/* LEFT — Brand + coordinates */}
        <FadeIn direction="right" className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
            {t("contact.title.1")}{" "}
            <span className="text-blue-600 dark:text-blue-400">
              {t("contact.title.2")}
            </span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            {t("contact.subtitle")}
          </p>

          <div className="mt-8 space-y-3">
            <ContactRow
              label={t("contact.label.phone")}
              value="06 07 94 31 29"
              href="tel:+33607943129"
            />
            <ContactRow
              label={t("contact.label.email")}
              value="dispobat@yahoo.fr"
              href="mailto:dispobat@yahoo.fr"
            />
            <ContactRow
              label={t("contact.label.address")}
              value="7 rue d'Epinay, 92700 Colombes, France"
            />
          </div>
        </FadeIn>

        {/* RIGHT — Simple form */}
        <FadeIn direction="left">
          <div className="glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-10">
            <AnimatePresence mode="wait">
              {state === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: easeOut }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.15, duration: 0.5, ease: easeOut }}
                    className="grid h-14 w-14 place-items-center rounded-full bg-blue-600 text-2xl font-bold text-white shadow-lg shadow-blue-500/30"
                  >
                    ✓
                  </motion.div>
                  <h3 className="mt-6 text-2xl font-bold">
                    {t("contact.success.title")}
                  </h3>
                  <p className="mt-3 max-w-md text-sm text-muted-foreground">
                    {t("contact.success.desc")}
                  </p>
                  <button
                    onClick={reset}
                    className="mt-8 text-sm font-semibold text-blue-600 hover:text-blue-700"
                  >
                    {t("contact.success.again")}
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={submit}
                  className="space-y-5"
                >
                  <Field label={t("contact.form.name")} required>
                    <input
                      type="text"
                      value={data.name}
                      onChange={(e) =>
                        setData({ ...data, name: e.target.value })
                      }
                      className="input-base"
                    />
                  </Field>
                  <Field label={t("contact.form.email")} required>
                    <input
                      type="email"
                      value={data.email}
                      onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                      }
                      className="input-base"
                    />
                  </Field>
                  <Field label={t("contact.form.message")} required>
                    <textarea
                      rows={6}
                      value={data.message}
                      onChange={(e) =>
                        setData({ ...data, message: e.target.value })
                      }
                      className="input-base resize-none"
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={!canSend || state === "loading"}
                    className={cn(
                      "w-full rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300",
                      !canSend || state === "loading"
                        ? "cursor-not-allowed opacity-50"
                        : "hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
                    )}
                  >
                    {state === "loading"
                      ? t("contact.form.sending")
                      : t("contact.form.send")}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="glass flex flex-col gap-1 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:ring-blue-500/30">
      <div className="text-xs text-muted-foreground">
        {label}
      </div>
      <div className="text-sm font-semibold text-foreground">{value}</div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
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
