"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { whatsappUrl } from "@/lib/site";

const links = [
  { href: "#modalidades", label: "Modalidades" },
  { href: "#planos", label: "Planos" },
  { href: "#horarios", label: "Horários" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-wolf-silver/10 bg-wolf-black/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Wolf Gym">
          <Image
            src="/logo.png"
            alt="Wolf Gym"
            width={56}
            height={56}
            className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
            priority
          />
          <span className="hidden font-display text-xl tracking-wide text-wolf-silver sm:block">
            WOLF <span className="text-wolf-gold">GYM</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-oswald text-xs uppercase tracking-[0.22em] text-wolf-silver/80 transition-colors hover:text-wolf-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden bg-wolf-gold px-4 py-2 font-display text-sm uppercase tracking-wide text-wolf-black hover:bg-wolf-gold-dark sm:inline-flex"
          >
            WhatsApp
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border border-wolf-silver/20 text-wolf-silver lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-[5px]">
              <span className={`block h-[1.5px] w-5 bg-current transition ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
              <span className={`block h-[1.5px] w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-[1.5px] w-5 bg-current transition ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-wolf-silver/10 bg-wolf-black lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2 font-oswald text-sm uppercase tracking-[0.2em] text-wolf-silver"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 bg-wolf-gold px-4 py-3 text-center font-display uppercase tracking-wide text-wolf-black"
              >
                Falar no WhatsApp
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
