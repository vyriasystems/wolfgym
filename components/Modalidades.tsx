"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { modalities } from "@/data/plans";

export default function Modalidades() {
  return (
    <section id="modalidades" className="bg-wolf-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="eyebrow">Modalidades</p>
        <h2 className="display-title mt-4 text-4xl sm:text-6xl md:text-7xl">
          Escolha sua <span className="text-wolf-gold">arma</span>
        </h2>
        <p className="mt-4 max-w-xl text-wolf-silver/75">
          Seis caminhos. Um só padrão: treino sério.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modalities.map((item, index) => (
            <motion.article
              key={item.id}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className="group relative overflow-hidden border border-wolf-silver/15 bg-wolf-charcoal transition-colors hover:border-wolf-gold"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wolf-charcoal via-wolf-black/20 to-transparent" />
                <span className="absolute left-4 top-4 font-oswald text-[11px] tracking-[0.3em] text-wolf-gold">
                  0{index + 1}
                </span>
              </div>
              <div className="p-6 lg:p-7">
                <h3 className="font-display text-2xl uppercase tracking-wide text-wolf-white sm:text-3xl">
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
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
