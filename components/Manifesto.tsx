"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const targets = section.querySelectorAll(".manifesto-reveal");
      const tween = gsap.fromTo(
        targets,
        { y: 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.16,
          ease: "power3.out",
          paused: true,
        }
      );

      const play = () => {
        if (!tween.isActive() && tween.progress() === 0) tween.play();
      };

      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        once: true,
        onEnter: play,
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.8) play();
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="relative overflow-hidden bg-wolf-charcoal py-24 sm:py-32"
    >
      <p className="pointer-events-none absolute -right-4 top-8 font-display text-[28vw] leading-none text-wolf-white/[0.03] sm:text-[18vw]">
        ALCATEIA
      </p>
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <p className="eyebrow manifesto-reveal">Wolf Gym</p>
        <div className="gold-rule manifesto-reveal mt-5" />
        <h2 className="display-title manifesto-reveal mt-6 text-5xl sm:text-7xl md:text-8xl">
          Não é academia.
          <br />
          É <span className="text-wolf-gold">alcateia.</span>
        </h2>
        <p className="manifesto-reveal mt-8 max-w-2xl font-body text-lg leading-relaxed text-wolf-silver/85 sm:text-xl">
          Lobo não caça sozinho. Aqui também não é sobre treinar isolado — é
          sobre entrar num grupo que te puxa pra frente nos dias que você não
          ia sozinho.
        </p>
      </div>
    </section>
  );
}
