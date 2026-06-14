"use client";

import { useState, useRef } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";

/*
 * CONFIGURATION EMAILJS
 * ─────────────────────────────────────────────────────────────────────────────
 * Pour activer l'envoi réel :
 *
 *  1. Créer un compte sur https://www.emailjs.com (gratuit, 200 emails/mois)
 *  2. Ajouter un "Email Service" (Gmail, Outlook, SMTP…) → noter le SERVICE_ID
 *  3. Créer un "Email Template" avec ces variables :
 *       {{from_prenom}}, {{from_nom}}, {{from_societe}},
 *       {{from_email}}, {{from_tel}}, {{mission_type}},
 *       {{message}}, {{to_email}}
 *     Destination du template : contact@osaris-ingenierie.com
 *     → noter le TEMPLATE_ID
 *  4. Récupérer votre PUBLIC_KEY dans Account > API Keys
 *  5. Remplacer les trois constantes ci-dessous
 * ─────────────────────────────────────────────────────────────────────────────
 */
const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  ?? "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  ?? "YOUR_PUBLIC_KEY";

const missionTypes = [
  "Hybridation PAC Air/Eau",
  "CVC / Désenfumage",
  "Plomberie / EFS-ECS",
  "Thermique réglementaire RE2020",
  "STD / Simulation thermique dynamique",
  "Génie électrique CFO/CFA",
  "Dossier DCE / CCTP",
  "Audit / Diagnostic énergétique",
  "Froid / Chambres froides",
  "Autre / Non défini",
];

type Status = "idle" | "sending" | "success" | "error";

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    // Validation basique
    const data = new FormData(form);
    const email = (data.get("from_email") as string)?.trim();
    const prenom = (data.get("from_prenom") as string)?.trim();
    if (!prenom || !email) {
      setErrorMsg("Merci de renseigner au minimum votre prénom et votre email.");
      setStatus("error");
      return;
    }

    // Garde : si EmailJS n'est pas configuré, bascule vers le client mail de l'utilisateur
    const isConfigured =
      EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID" &&
      EMAILJS_TEMPLATE_ID !== "YOUR_TEMPLATE_ID" &&
      EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY";

    if (!isConfigured) {
      const sujet = encodeURIComponent(
        `Demande d'étude — ${(data.get("mission_type") as string) || "projet"}`
      );
      const corps = encodeURIComponent(
        `Prénom : ${prenom}\n` +
          `Nom : ${(data.get("from_nom") as string) || ""}\n` +
          `Société : ${(data.get("from_societe") as string) || ""}\n` +
          `Email : ${email}\n` +
          `Téléphone : ${(data.get("from_tel") as string) || ""}\n` +
          `Type de mission : ${(data.get("mission_type") as string) || ""}\n\n` +
          `${(data.get("message") as string) || ""}`
      );
      window.location.href = `mailto:contact@osaris-ingenierie.com?subject=${sujet}&body=${corps}`;
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      // Chargement dynamique d'EmailJS (évite d'alourdir le bundle inutilement)
      const emailjs = await import("@emailjs/browser");
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      form.reset();
    } catch (err: unknown) {
      console.error("EmailJS error:", err);
      setErrorMsg("L'envoi a échoué. Veuillez réessayer ou nous contacter directement par email.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-orange/[0.07] blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* ── Gauche — coordonnées ── */}
          <div>
            <BlurFade delay={0} inView duration={0.5}>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="block w-5 h-[1.5px] bg-brand-orange" />
                <span className="font-mono text-xs tracking-widest uppercase text-brand-orange-dark">Contact</span>
              </div>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-night-50 mb-6 leading-tight">
                Parlons de<br />votre <span className="text-brand-orange">projet.</span>
              </h2>
              <p className="text-night-200 text-sm leading-relaxed mb-10">
                Pour toute demande d'étude ou de mission MOE, contactez-nous directement.
                Réponse garantie sous 48h.
              </p>
            </BlurFade>

            <BlurFade delay={0.1} inView duration={0.4}>
              <div className="space-y-5">
                {[
                  {
                    icon: (<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1C4.2 1 2 3.2 2 6c0 3.5 5 8 5 8s5-4.5 5-8c0-2.8-2.2-5-5-5z" stroke="currentColor" strokeWidth="1.5" /><circle cx="7" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.2" /></svg>),
                    label: "Adresse",
                    value: "OSARIS Ingénierie SAS\n18 rue Pierre Dubois, 59500 Douai",
                    isMultiline: true,
                  },
                  {
                    icon: (<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="3" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" /><path d="M1 4.5L7 8L13 4.5" stroke="currentColor" strokeWidth="1.5" /></svg>),
                    label: "Email",
                    value: "contact@osaris-ingenierie.com",
                    href: "mailto:contact@osaris-ingenierie.com",
                  },
                  {
                    icon: (<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 2.5C2 2.5 3.5 1 5 2.5L6.5 4C7.5 5 6 6 6 6C6 6 8 8 8 8C8 8 9 6.5 10 7.5L11.5 9C13 10.5 11.5 12 11.5 12C11.5 12 2 10 2 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>),
                    label: "Téléphone",
                    value: "(+33) 06 52 19 38 07",
                    href: "tel:+33652193807",
                  },
                  {
                    icon: (<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" /><path d="M7 4V7.5L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>),
                    label: "Disponibilité",
                    value: "Lun–Ven · 8h30 → 18h00",
                  },
                  {
                    icon: (<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M4 7 L6 9 L10 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>),
                    label: "Site web",
                    value: "www.osaris-ingenierie.com",
                    href: "https://www.osaris-ingenierie.com",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center border border-night-600 rounded-lg text-brand-orange bg-night-800">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-mono text-[0.65rem] tracking-widest uppercase text-night-300 mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-brand-orange-dark text-sm hover:text-brand-orange transition-colors">
                          {item.value}
                        </a>
                      ) : item.isMultiline ? (
                        <div className="text-night-200 text-sm whitespace-pre-line">{item.value}</div>
                      ) : (
                        <div className="text-night-200 text-sm">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>

          {/* ── Droite — formulaire ── */}
          <BlurFade delay={0.15} inView duration={0.5}>
            <div className="bg-night-800 border border-night-700 rounded-2xl p-7 shadow-card">
              <div className="font-mono text-xs tracking-widest uppercase text-night-200 mb-5">
                Demande d'étude ou de mission
              </div>

              {/* Message succès */}
              {status === "success" && (
                <div className="mb-5 p-4 bg-brand-orange/[0.06] border border-brand-orange/40 rounded-lg flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-brand-orange mt-0.5 flex-shrink-0">
                    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M5 8L7 10L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <div className="font-display font-bold text-sm text-night-50 mb-0.5">Message envoyé !</div>
                    <p className="text-night-200 text-xs leading-relaxed">
                      Votre demande a bien été transmise à <span className="text-brand-orange-dark font-medium">contact@osaris-ingenierie.com</span>.
                      Nous vous répondrons sous 48h.
                    </p>
                  </div>
                </div>
              )}

              {/* Message erreur */}
              {status === "error" && (
                <div className="mb-5 p-4 bg-red-50 border border-red-300 rounded-lg flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-red-500 mt-0.5 flex-shrink-0">
                    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="8" y1="5" x2="8" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="8" cy="11" r="0.75" fill="currentColor" />
                  </svg>
                  <p className="text-red-600 text-xs leading-relaxed">{errorMsg}</p>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Prénom", name: "from_prenom", type: "text" },
                      { label: "Nom",    name: "from_nom",    type: "text" },
                    ].map((f) => (
                      <div key={f.name}>
                        <label className="font-mono text-[0.62rem] tracking-widest uppercase text-night-300 block mb-1.5">
                          {f.label}
                        </label>
                        <input
                          type={f.type}
                          name={f.name}
                          className="w-full bg-night-850 border border-night-700 rounded-lg px-3 py-2.5 text-sm text-night-100 placeholder:text-night-400 focus:border-brand-orange/60 focus:outline-none transition-colors"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="font-mono text-[0.62rem] tracking-widest uppercase text-night-300 block mb-1.5">
                      Société / Organisme
                    </label>
                    <input
                      type="text"
                      name="from_societe"
                      placeholder="Bailleur social, mairie, promoteur, architecte..."
                      className="w-full bg-night-850 border border-night-700 rounded-lg px-3 py-2.5 text-sm text-night-100 placeholder:text-night-400 focus:border-brand-orange/60 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[0.62rem] tracking-widest uppercase text-night-300 block mb-1.5">
                      Email <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      required
                      className="w-full bg-night-850 border border-night-700 rounded-lg px-3 py-2.5 text-sm text-night-100 placeholder:text-night-400 focus:border-brand-orange/60 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[0.62rem] tracking-widest uppercase text-night-300 block mb-1.5">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="from_tel"
                      className="w-full bg-night-850 border border-night-700 rounded-lg px-3 py-2.5 text-sm text-night-100 placeholder:text-night-400 focus:border-brand-orange/60 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[0.62rem] tracking-widest uppercase text-night-300 block mb-1.5">
                      Type de mission
                    </label>
                    <select
                      name="mission_type"
                      className="w-full bg-night-850 border border-night-700 rounded-lg px-3 py-2.5 text-sm text-night-100 focus:border-brand-orange/60 focus:outline-none transition-colors appearance-none"
                    >
                      <option value="">Sélectionner...</option>
                      {missionTypes.map((t) => (
                        <option key={t} value={t} className="bg-night-900">{t}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-mono text-[0.62rem] tracking-widest uppercase text-night-300 block mb-1.5">
                      Description du projet
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Nature, surface, localisation, phase, contraintes particulières..."
                      className="w-full bg-night-850 border border-night-700 rounded-lg px-3 py-2.5 text-sm text-night-100 placeholder:text-night-400 focus:border-brand-orange/60 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Champ caché pour l'adresse de destination */}
                  <input type="hidden" name="to_email" value="contact@osaris-ingenierie.com" />

                  <ShimmerButton
                    shimmerColor="rgba(255,255,255,0.5)"
                    background={status === "sending" ? "rgba(204,82,0,1)" : "rgba(255,102,0,1)"}
                    borderRadius="6px"
                    className="w-full font-display font-bold tracking-wide uppercase text-sm py-3.5 justify-center"
                    type="submit"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? (
                      <>
                        <svg className="animate-spin mr-2" width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
                          <path d="M7 1.5A5.5 5.5 0 0 1 12.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        Envoi en cours…
                      </>
                    ) : (
                      <>
                        Envoyer la demande
                        <svg className="ml-2" width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>
                    )}
                  </ShimmerButton>

                  <p className="text-night-400 text-[0.65rem] font-mono text-center">
                    Réponse sous 48h
                  </p>
                </div>
              </form>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
