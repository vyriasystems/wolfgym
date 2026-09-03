"use client";

import { schedules } from "@/data/horarios";

export default function Horarios() {
  return (
    <section id="horarios" className="bg-wolf-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="eyebrow">Grade de horários</p>
        <h2 className="display-title mt-4 max-w-3xl text-4xl sm:text-6xl md:text-7xl">
          Bora encontrar seu <span className="text-wolf-gold">horário</span>
        </h2>
        <p className="mt-4 max-w-xl text-wolf-silver/75">
          Grade real das turmas. Musculação segue o funcionamento da casa —
          o resto é turma fechada, no horário certo.
        </p>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {schedules.map((block) => (
            <article
              key={block.modality}
              className="border border-wolf-silver/15 bg-wolf-black p-5 sm:p-7"
            >
              <div className="flex items-end justify-between gap-4 border-b border-wolf-silver/10 pb-4">
                <h3 className="font-display text-2xl uppercase tracking-wide text-wolf-white sm:text-3xl">
                  {block.modality}
                </h3>
                <span className="shrink-0 font-oswald text-[11px] uppercase tracking-[0.22em] text-wolf-gold">
                  {block.tag}
                </span>
              </div>
              <ul className="mt-4 divide-y divide-wolf-silver/10">
                {block.rows.map((row) => (
                  <li
                    key={`${row.label}-${row.time}`}
                    className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[0.9fr_1.2fr_auto] sm:items-center sm:gap-4"
                  >
                    <span className="font-oswald text-xs uppercase tracking-[0.18em] text-wolf-gold">
                      {row.label}
                    </span>
                    <span className="text-sm text-wolf-silver/80">{row.days}</span>
                    <span className="font-display text-lg uppercase tracking-wide text-wolf-white">
                      {row.time}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
