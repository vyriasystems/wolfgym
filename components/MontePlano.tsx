"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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

function RadioMark({ active }: { active: boolean }) {
  return (
    <span
      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
        active ? "border-wolf-gold bg-wolf-gold" : "border-wolf-silver/40"
      }`}
      aria-hidden
    >
      {active ? <span className="h-2 w-2 rounded-full bg-wolf-black" /> : null}
    </span>
  );
}

export default function MontePlano() {
  const [modalityId, setModalityId] = useState<ModalityId | null>(null);
  const [planId, setPlanId] = useState<string | null>(null);
  const stepTwoRef = useRef<HTMLDivElement>(null);

  const selectedModality = planModalities.find((m) => m.id === modalityId);
  const plans = modalityId ? plansByModality[modalityId] : [];
  const selectedPlan = useMemo(
    () => plans.find((p) => p.id === planId) ?? null,
    [plans, planId]
  );

  const step = selectedPlan ? 3 : modalityId ? 2 : 1;

  function selectModality(id: ModalityId) {
    setModalityId(id);
    setPlanId(null);
  }

  useEffect(() => {
    if (!modalityId || typeof window === "undefined") return;
    const isMobile = window.matchMedia("(max-width: 1023px)").matches;
    if (!isMobile) return;
    stepTwoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [modalityId]);

  return (
    <section id="planos" className="bg-wolf-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="eyebrow">Monte seu plano</p>
        <h2 className="display-title mt-4 max-w-4xl text-4xl sm:text-6xl md:text-7xl">
          Qual alcateia você vai treinar com a gente?
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-wolf-silver/85">
          Dois cliques e o preço aparece. Primeiro a modalidade, depois o plano.
          A matrícula fecha no WhatsApp.
        </p>

        <ol className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
          {[
            { n: 1, label: "Clique na modalidade" },
            { n: 2, label: "Clique no plano" },
            { n: 3, label: "Veja o valor" },
          ].map((item, i, arr) => {
            const done = step > item.n;
            const current = step === item.n;
            return (
              <li key={item.n} className="flex items-center gap-3">
                <span
                  className={`flex h-8 w-8 items-center justify-center font-display text-sm ${
                    done || current
                      ? "bg-wolf-gold text-wolf-black"
                      : "border border-wolf-silver/25 text-wolf-silver/50"
                  }`}
                >
                  {done ? "✓" : item.n}
                </span>
                <span
                  className={`font-oswald text-xs uppercase tracking-[0.18em] ${
                    current ? "text-wolf-gold" : "text-wolf-silver/70"
                  }`}
                >
                  {item.label}
                </span>
                {i < arr.length - 1 ? (
                  <span className="hidden h-px w-8 bg-wolf-silver/20 sm:block" />
                ) : null}
              </li>
            );
          })}
        </ol>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-10">
            <div>
              <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-2xl text-wolf-gold">01</span>
                  <h3 className="font-oswald text-sm uppercase tracking-[0.22em] text-wolf-white">
                    Clique na modalidade
                  </h3>
                </div>
                <p className="text-xs text-wolf-silver/60">Toque em uma opção</p>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {planModalities.map((item) => {
                  const active = item.id === modalityId;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => selectModality(item.id)}
                      className={`flex items-start gap-3 border px-4 py-4 text-left transition-colors ${
                        active
                          ? "border-wolf-gold bg-wolf-gold/10"
                          : "border-wolf-silver/15 bg-wolf-charcoal hover:border-wolf-gold/60"
                      }`}
                    >
                      <RadioMark active={active} />
                      <span className="min-w-0 flex-1">
                        <span
                          className={`block font-display text-lg uppercase tracking-wide ${
                            active ? "text-wolf-gold" : "text-wolf-white"
                          }`}
                        >
                          {item.name}
                        </span>
                        {item.note ? (
                          <span className="mt-1 block text-xs text-wolf-silver/70">
                            {item.note}
                          </span>
                        ) : (
                          <span className="mt-1 block text-xs text-wolf-silver/45">
                            {active ? "Selecionada" : "Clique para selecionar"}
                          </span>
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div ref={stepTwoRef} className="scroll-mt-28">
              <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                <div className="flex items-baseline gap-3">
                  <span
                    className={`font-display text-2xl ${
                      modalityId ? "text-wolf-gold" : "text-wolf-silver/30"
                    }`}
                  >
                    02
                  </span>
                  <h3
                    className={`font-oswald text-sm uppercase tracking-[0.22em] ${
                      modalityId ? "text-wolf-white" : "text-wolf-silver/40"
                    }`}
                  >
                    Clique no plano
                  </h3>
                </div>
                {modalityId ? (
                  <p className="text-xs text-wolf-gold">Agora escolha a frequência</p>
                ) : (
                  <p className="text-xs text-wolf-silver/40">
                    Libera depois do passo 1
                  </p>
                )}
              </div>

              <AnimatePresence mode="wait">
                {modalityId ? (
                  <motion.div
                    key={modalityId}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="grid gap-2"
                  >
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
                          <span className="flex min-w-0 items-start gap-3">
                            <RadioMark active={active} />
                            <span>
                              <span className="block font-display text-lg uppercase tracking-wide text-wolf-white">
                                {plan.label}
                              </span>
                              <span className="mt-1 block text-xs text-wolf-silver/70">
                                {plan.details.join(" · ")}
                              </span>
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
                  </motion.div>
                ) : (
                  <div className="border border-dashed border-wolf-silver/20 bg-wolf-charcoal/40 px-5 py-8 text-center">
                    <p className="font-display text-xl uppercase tracking-wide text-wolf-silver/35">
                      Ainda não dá pra escolher o plano
                    </p>
                    <p className="mt-2 text-sm text-wolf-silver/55">
                      Clique em uma modalidade no passo 1. Os planos dela
                      aparecem aqui.
                    </p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              {selectedModality && selectedPlan ? (
                <motion.aside
                  key={selectedPlan.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.28 }}
                  className="border border-wolf-gold/70 bg-wolf-charcoal p-6 sm:p-8"
                >
                  <p className="eyebrow">Pronto. Esse é o seu plano</p>
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
                  key={step}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border border-wolf-silver/20 bg-wolf-charcoal p-6 sm:p-8"
                >
                  <p className="font-oswald text-xs uppercase tracking-[0.22em] text-wolf-gold">
                    Passo {step} de 2
                  </p>
                  <p className="mt-4 font-display text-3xl uppercase leading-none tracking-wide text-wolf-white">
                    {modalityId
                      ? "Agora clique no plano"
                      : "Comece clicando numa modalidade"}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-wolf-silver/75">
                    {modalityId
                      ? `Você escolheu ${selectedModality?.name}. Toque em uma frequência na lista ao lado — o valor libera na hora.`
                      : "As caixas do passo 1 são botões. Escolhe musculação, luta, kids ou combo e o passo 2 abre."}
                  </p>
                  <div className="mt-6 h-2 overflow-hidden bg-wolf-black">
                    <div
                      className="h-full bg-wolf-gold transition-all duration-300"
                      style={{ width: modalityId ? "50%" : "8%" }}
                    />
                  </div>
                </motion.aside>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
