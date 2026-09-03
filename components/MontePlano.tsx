"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  planModalities,
  plansByModality,
  type ModalityId,
  type PlanOption,
} from "@/data/plans";
import { formatBRL, whatsappUrl } from "@/lib/site";

function planWhatsAppMessage(modalityName: string, plan: PlanOption) {
  const price = `${formatBRL(plan.price)}${plan.period}`;
  return `Olá, Wolf Gym! Quero me matricular no plano ${modalityName} — ${plan.label} (${price}).`;
}

export default function MontePlano() {
  const [modalityId, setModalityId] = useState<ModalityId | null>(null);
  const [planId, setPlanId] = useState<string | null>(null);

  const selectedModality = planModalities.find((m) => m.id === modalityId);
  const plans = modalityId ? plansByModality[modalityId] : [];
  const selectedPlan = useMemo(
    () => plans.find((p) => p.id === planId) ?? null,
    [plans, planId]
  );

  function selectModality(id: ModalityId) {
    setModalityId(id);
    setPlanId(null);
  }

  return (
    <section id="planos" className="bg-wolf-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="eyebrow">Monte seu plano</p>
        <h2 className="display-title mt-4 max-w-4xl text-4xl sm:text-6xl md:text-7xl">
          Qual alcateia você vai treinar com a gente?
        </h2>
        <p className="mt-4 max-w-2xl text-wolf-silver/75">
          Escolhe a modalidade, depois a frequência. A matrícula fecha no
          WhatsApp — a recorrência do cartão já roda no sistema da academia.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-10">
            <div>
              <div className="mb-4 flex items-baseline gap-3">
                <span className="font-display text-2xl text-wolf-gold">01</span>
                <h3 className="font-oswald text-sm uppercase tracking-[0.22em] text-wolf-silver">
                  Escolha a modalidade
                </h3>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {planModalities.map((item) => {
                  const active = item.id === modalityId;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => selectModality(item.id)}
                      className={`border px-4 py-4 text-left transition-colors ${
                        active
                          ? "border-wolf-gold bg-wolf-gold/10 text-wolf-gold"
                          : "border-wolf-silver/15 bg-wolf-charcoal text-wolf-silver hover:border-wolf-gold/60"
                      }`}
                    >
                      <span className="block font-display text-lg uppercase tracking-wide">
                        {item.name}
                      </span>
                      {item.note && (
                        <span className="mt-1 block text-xs text-wolf-silver/70">
                          {item.note}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <AnimatePresence mode="wait">
              {modalityId && (
                <motion.div
                  key={modalityId}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28 }}
                >
                  <div className="mb-4 flex items-baseline gap-3">
                    <span className="font-display text-2xl text-wolf-gold">02</span>
                    <h3 className="font-oswald text-sm uppercase tracking-[0.22em] text-wolf-silver">
                      Frequência e duração
                    </h3>
                  </div>
                  <div className="grid gap-2">
                    {plans.map((plan) => {
                      const active = plan.id === planId;
                      return (
                        <button
                          key={plan.id}
                          type="button"
                          onClick={() => setPlanId(plan.id)}
                          className={`flex items-center justify-between gap-4 border px-4 py-4 text-left transition-colors ${
                            active
                              ? "border-wolf-gold bg-wolf-gold/10"
                              : "border-wolf-silver/15 bg-wolf-charcoal hover:border-wolf-gold/60"
                          }`}
                        >
                          <span>
                            <span className="block font-display text-lg uppercase tracking-wide text-wolf-white">
                              {plan.label}
                            </span>
                            <span className="mt-1 block text-xs text-wolf-silver/70">
                              {plan.details.join(" · ")}
                            </span>
                          </span>
                          <span className="shrink-0 font-display text-xl text-wolf-gold">
                            {formatBRL(plan.price)}
                            <span className="text-sm text-wolf-silver/70">
                              {plan.period}
                            </span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              {selectedModality && selectedPlan ? (
                <motion.aside
                  key={selectedPlan.id}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="border border-wolf-gold/70 bg-wolf-charcoal p-6 sm:p-8"
                >
                  <p className="eyebrow">Seu plano</p>
                  <h3 className="mt-4 font-display text-3xl uppercase leading-none tracking-wide text-wolf-white">
                    {selectedModality.name}
                  </h3>
                  <p className="mt-2 font-oswald text-sm uppercase tracking-[0.16em] text-wolf-silver/80">
                    {selectedPlan.label}
                  </p>
                  <p className="mt-6 font-display text-5xl text-wolf-gold sm:text-6xl">
                    {formatBRL(selectedPlan.price)}
                    <span className="text-2xl text-wolf-silver/70">
                      {selectedPlan.period}
                    </span>
                  </p>
                  {selectedPlan.savingsPerMonth ? (
                    <p className="mt-3 inline-block border border-wolf-gold/40 bg-wolf-gold/10 px-3 py-1 font-oswald text-xs uppercase tracking-[0.18em] text-wolf-gold">
                      Economize {formatBRL(selectedPlan.savingsPerMonth)}/mês
                    </p>
                  ) : null}
                  <ul className="mt-6 space-y-2 text-sm text-wolf-silver/85">
                    {selectedPlan.details.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-wolf-gold" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappUrl(
                      planWhatsAppMessage(selectedModality.name, selectedPlan)
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold mt-8 w-full"
                  >
                    Falar sobre esse plano no WhatsApp
                  </a>
                </motion.aside>
              ) : (
                <motion.aside
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border border-dashed border-wolf-silver/20 p-8 text-wolf-silver/60"
                >
                  <p className="font-display text-2xl uppercase tracking-wide text-wolf-silver/40">
                    {modalityId
                      ? "Agora escolhe o plano"
                      : "Começa pela modalidade"}
                  </p>
                  <p className="mt-3 text-sm">
                    Quando os dois passos estiverem marcados, o valor e o
                    WhatsApp aparecem aqui.
                  </p>
                </motion.aside>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
