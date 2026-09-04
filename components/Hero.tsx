"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { whatsappUrl } from "@/lib/site";

function prepareInlineVideo(video: HTMLVideoElement) {
  video.muted = true;
  video.defaultMuted = true;
  video.volume = 0;
  video.playsInline = true;
  video.autoplay = true;
  video.loop = true;
  video.setAttribute("muted", "");
  video.setAttribute("autoplay", "");
  video.setAttribute("playsinline", "true");
  video.setAttribute("webkit-playsinline", "true");
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    let cancelled = false;
    let resumeTimer = 0;

    const tryPlay = () => {
      if (cancelled || !video || document.hidden) return;
      prepareInlineVideo(video);
      const play = video.play();
      if (play) play.catch(() => undefined);
    };

    const restartLoop = () => {
      if (cancelled || !video) return;
      video.currentTime = 0;
      tryPlay();
    };

    const onPause = () => {
      if (cancelled || document.hidden) return;
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(tryPlay, 80);
    };

    if (video) {
      prepareInlineVideo(video);
      video.src = "/hero-mobile.mp4?v=2";
      video.load();
      tryPlay();
      video.addEventListener("loadeddata", tryPlay);
      video.addEventListener("canplay", tryPlay);
      video.addEventListener("ended", restartLoop);
      video.addEventListener("pause", onPause);
    }

    document.addEventListener("visibilitychange", tryPlay);
    window.addEventListener("pageshow", tryPlay);
    window.addEventListener("touchstart", tryPlay, { passive: true });
    window.addEventListener("click", tryPlay);

    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let ctx: gsap.Context | undefined;
    if (section && !reduceMotion) {
      ctx = gsap.context(() => {
        gsap.to(overlayRef.current, {
          opacity: 0.72,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(contentRef.current, {
          y: -48,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "75% top",
            scrub: true,
          },
        });
      }, sectionRef);
    }

    return () => {
      cancelled = true;
      window.clearTimeout(resumeTimer);
      ctx?.revert();
      if (video) {
        video.removeEventListener("loadeddata", tryPlay);
        video.removeEventListener("canplay", tryPlay);
        video.removeEventListener("ended", restartLoop);
        video.removeEventListener("pause", onPause);
      }
      document.removeEventListener("visibilitychange", tryPlay);
      window.removeEventListener("pageshow", tryPlay);
      window.removeEventListener("touchstart", tryPlay);
      window.removeEventListener("click", tryPlay);
    };
  }, []);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-wolf-black pb-16 pt-28 sm:items-center sm:pb-0 sm:pt-20"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover contrast-[1.1] saturate-[1.12] brightness-[1.06]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          aria-hidden="true"
        >
          <source src="/hero-mobile.mp4?v=2" type="video/mp4" />
        </video>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-wolf-black/22 via-wolf-black/8 to-wolf-black/42" />
      <div
        ref={overlayRef}
        className="pointer-events-none absolute inset-0 bg-wolf-black opacity-0"
      />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6"
      >
        <p className="eyebrow mb-5">Academia + CT de lutas</p>

        <h1 className="display-title max-w-5xl text-[14vw] sm:text-7xl md:text-8xl lg:text-9xl">
          Vem ser
          <br />
          sua melhor
          <br />
          <span className="text-wolf-gold">versão</span>
        </h1>

        <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-wolf-silver/85 sm:text-lg">
          Musculação, funcional, boxe e muay thai — em Caldas Novas. Treino
          sério, comunidade de verdade.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href="#planos" className="btn-gold">
            Ver planos
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost bg-wolf-black/40"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>

      <a
        href="#manifesto"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        aria-label="Rolar para o manifesto"
      >
        <span className="font-oswald text-[10px] uppercase tracking-[0.35em] text-wolf-silver/70">
          Scroll
        </span>
        <span className="relative h-10 w-px bg-wolf-silver/30">
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-wolf-gold animate-scroll-dot" />
        </span>
      </a>
    </section>
  );
}
