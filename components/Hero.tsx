"use client";

import { motion } from "framer-motion";
import WolfSilhouette from "@/components/WolfSilhouette";
import { whatsappUrl } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-wolf-black pb-16 pt-28 sm:items-center sm:pb-0 sm:pt-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[42%] h-[70vw] w-[70vw] max-h-[720px] max-w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(242,166,61,0.12)_0%,transparent_62%)]" />
        <WolfSilhouette className="absolute left-1/2 top-[46%] h-[78%] w-auto max-w-[min(92vw,640px)] -translate-x-1/2 -translate-y-1/2 opacity-80 sm:top-1/2" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-5"
        >
          Academia + CT de lutas
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="display-title max-w-5xl text-[14vw] sm:text-7xl md:text-8xl lg:text-9xl"
        >
          Vem ser
          <br />
          sua melhor
          <br />
          <span className="text-wolf-gold">versão</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-6 max-w-xl font-body text-base leading-relaxed text-wolf-silver/85 sm:text-lg"
        >
          Musculação, funcional, boxe e muay thai — em Caldas Novas. Treino
          sério, comunidade de verdade.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a href="#planos" className="btn-gold">
            Ver planos
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Falar no WhatsApp
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#manifesto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        aria-label="Rolar para o manifesto"
      >
        <span className="font-oswald text-[10px] uppercase tracking-[0.35em] text-wolf-silver/70">
          Scroll
        </span>
        <span className="relative h-10 w-px bg-wolf-silver/30">
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-wolf-gold animate-scroll-dot" />
        </span>
      </motion.a>
    </section>
  );
}
