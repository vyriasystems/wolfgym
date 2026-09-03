"use client";

import { motion } from "framer-motion";
import { modalities } from "@/data/plans";

function IconMusculacao() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden>
      <rect x="4" y="18" width="8" height="12" stroke="currentColor" strokeWidth="1.8" />
      <rect x="36" y="18" width="8" height="12" stroke="currentColor" strokeWidth="1.8" />
      <rect x="12" y="21" width="6" height="6" stroke="currentColor" strokeWidth="1.8" />
      <rect x="30" y="21" width="6" height="6" stroke="currentColor" strokeWidth="1.8" />
      <path d="M18 24h12" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function IconFuncional() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden>
      <path d="M24 6 L28 20 H38 L30 28 L34 42 L24 34 L14 42 L18 28 L10 20 H20Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="miter" />
    </svg>
  );
}

function IconBoxe() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden>
      <path d="M14 20c0-6 4-10 10-10s10 4 10 10v8c0 6-4 12-10 12s-10-6-10-12v-8z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M14 24h20M18 14c-4 2-6 6-6 10" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function IconKids() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden>
      <path d="M24 8 L28 18 H38 L30 24 L34 36 L24 30 L14 36 L18 24 L10 18 H20Z" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="24" cy="42" r="2" fill="currentColor" />
    </svg>
  );
}

function IconMuay() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden>
      <path d="M10 34 L22 14 L26 20 L38 8 L30 28 L34 32 L18 38Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="miter" />
      <path d="M18 38 L14 44" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

const icons = {
  musculacao: IconMusculacao,
  funcional: IconFuncional,
  boxe: IconBoxe,
  "muay-thai-kids": IconKids,
  "muay-thai-adulto": IconMuay,
};

export default function Modalidades() {
  return (
    <section id="modalidades" className="bg-wolf-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="eyebrow">Modalidades</p>
        <h2 className="display-title mt-4 text-4xl sm:text-6xl md:text-7xl">
          Escolha sua <span className="text-wolf-gold">arma</span>
        </h2>
        <p className="mt-4 max-w-xl text-wolf-silver/75">
          Cinco caminhos. Um só padrão: treino sério.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {modalities.map((item, index) => {
            const Icon = icons[item.id];
            return (
              <motion.article
                key={item.id}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className="group relative border border-wolf-silver/15 bg-wolf-charcoal p-6 transition-colors hover:border-wolf-gold lg:p-8"
              >
                <span className="font-oswald text-[11px] tracking-[0.3em] text-wolf-gold/80">
                  0{index + 1}
                </span>
                <div className="mt-6 text-wolf-silver transition-colors group-hover:text-wolf-gold">
                  <Icon />
                </div>
                <h3 className="mt-5 font-display text-2xl uppercase tracking-wide text-wolf-white sm:text-3xl">
                  {item.name}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-wolf-silver/80">
                  {item.hook}
                </p>
                <a
                  href="#planos"
                  className="mt-6 inline-flex font-oswald text-xs uppercase tracking-[0.22em] text-wolf-gold"
                >
                  Ver planos →
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
