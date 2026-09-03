"use client";

import { SITE } from "@/lib/site";

const slots = [
  { label: "Segunda a sexta", time: "05h–22h", note: "Casa aberta pra caber no expediente, no turno e na madrugada cedo." },
  { label: "Sábado e domingo", time: "08h–12h", note: "Janela de manhã — aulão de luta e sala de peso." },
];

export default function Estrutura() {
  return (
    <section
      id="estrutura"
      className="relative overflow-hidden bg-wolf-charcoal py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute -left-24 bottom-0 font-display text-[40vw] leading-none text-wolf-white/[0.03]">
        05–22
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <p className="eyebrow">Estrutura</p>
        <h2 className="display-title mt-4 max-w-4xl text-4xl sm:text-6xl md:text-7xl">
          Aberto pra caber na sua <span className="text-wolf-gold">rotina</span>
        </h2>
        <p className="mt-4 max-w-xl text-wolf-silver/75">
          Horário geral de funcionamento da Wolf Gym em {SITE.city}.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {slots.map((slot) => (
            <article
              key={slot.label}
              className="border border-wolf-silver/15 bg-wolf-black p-8"
            >
              <p className="font-oswald text-xs uppercase tracking-[0.24em] text-wolf-gold">
                {slot.label}
              </p>
              <p className="mt-4 font-display text-6xl text-wolf-white sm:text-7xl">
                {slot.time}
              </p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-wolf-silver/75">
                {slot.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
