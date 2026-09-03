"use client";

import { SITE, whatsappUrl } from "@/lib/site";

export default function ContatoFinal() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-wolf-black py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(242,166,61,0.16)_0%,transparent_64%)]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="eyebrow">Contato</p>
        <h2 className="display-title mt-5 text-5xl sm:text-7xl md:text-8xl">
          Bora fazer parte da{" "}
          <span className="text-wolf-gold">alcateia?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-wolf-silver/80">
          Manda mensagem. A gente te encaixa na modalidade, no horário e no
          plano — matrícula pelo WhatsApp.
        </p>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold mt-10"
        >
          Falar no WhatsApp
        </a>
        <address className="mt-12 not-italic">
          <p className="font-oswald text-xs uppercase tracking-[0.3em] text-wolf-gold">
            Onde estamos
          </p>
          <p className="mt-3 font-display text-2xl uppercase tracking-wide text-wolf-white sm:text-3xl">
            {SITE.address}
          </p>
          <p className="mt-2 text-sm text-wolf-silver/70">
            {SITE.hours.weekdays} · {SITE.hours.weekend}
          </p>
        </address>
        <p className="mt-16 font-display text-sm uppercase tracking-[0.28em] text-wolf-silver/35">
          Wolf Gym · Caldas Novas
        </p>
      </div>
    </section>
  );
}
