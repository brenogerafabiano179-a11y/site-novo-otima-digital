"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowDown, MapPin, Search } from "lucide-react";
import { Starfield } from "./Starfield";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./ui/icons";

const titleWords = ["SEU", "CLIENTE", "JÁ", "ESTÁ", "PROCURANDO."];

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // cursor -> luz e inclinação do cristal
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 18 });
  const sy = useSpring(my, { stiffness: 70, damping: 18 });
  const rotY = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const rotX = useTransform(sy, [-0.5, 0.5], [10, -10]);
  const shiftX = useTransform(sx, [-0.5, 0.5], [-18, 18]);
  const shiftY = useTransform(sy, [-0.5, 0.5], [-12, 12]);
  const glowX = useMotionValue(-999);
  const glowY = useMotionValue(-999);
  const gx = useSpring(glowX, { stiffness: 120, damping: 24 });
  const gy = useSpring(glowY, { stiffness: 120, damping: 24 });

  useEffect(() => {
    if (reduce) return;
    const el = sectionRef.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
      glowX.set(e.clientX - r.left);
      glowY.set(e.clientY - r.top);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [reduce, mx, my, glowX, glowY]);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      aria-labelledby="hero-title"
      className="grain relative isolate flex min-h-[100svh] items-center overflow-hidden bg-night pb-20 pt-[calc(var(--header-h)+40px)] lg:pb-16"
    >
      {/* camada 1: nebulosa + estrelas */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image src="/nebula.webp" alt="" fill priority sizes="100vw" className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_45%,rgba(47,134,232,0.28),transparent_55%),radial-gradient(ellipse_at_10%_90%,rgba(63,213,240,0.10),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-night/40 via-transparent to-night" />
        <Starfield />
        {!reduce && (
          <motion.div
            className="pointer-events-none absolute size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(63,213,240,0.13),transparent_65%)]"
            style={{ left: gx, top: gy }}
          />
        )}
      </div>

      <div className="mx-auto grid w-full max-w-[1320px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-6">
        {/* texto */}
        <div className="relative z-10 lg:col-span-7">
          <div className="hero-fade flex items-center gap-4" style={{ animationDelay: "0.05s" }}>
            <span className="signature-line block w-12" aria-hidden="true" />
            <p className="eyebrow text-[0.72rem] text-cyan sm:text-[0.8rem]">Estratégia digital • Brasil e Estados Unidos</p>
          </div>

          <h1
            id="hero-title"
            className="display mt-7 text-[clamp(2.2rem,5.1vw,4.7rem)] leading-[1] text-white"
          >
            {titleWords.map((w, i) => (
              <span key={i} className="mr-[0.22em] inline-block pb-[0.06em] align-top">
                <span className="hero-word inline-block" style={{ animationDelay: `${0.12 + i * 0.08}s` }}>
                  {w === "PROCURANDO." ? (
                    <span className="bg-gradient-to-r from-white via-[#c9f4ff] to-cyan bg-clip-text text-transparent">
                      {w}
                    </span>
                  ) : (
                    w
                  )}
                </span>
              </span>
            ))}
          </h1>

          <p
            style={{ animationDelay: "0.5s" }}
            className="hero-fade mt-6 text-[clamp(1.25rem,2.2vw,1.75rem)] font-semibold leading-snug text-white/90"
          >
            A questão é quem ele encontra primeiro.
          </p>

          <p style={{ animationDelay: "0.6s" }} className="hero-fade mt-5 max-w-xl text-[1.05rem] leading-relaxed text-body-dark sm:text-lg">
            A Ótima Digital conecta sua empresa às pessoas certas com estratégias de marketing, presença digital e
            tecnologia pensadas para transformar buscas em oportunidades reais de negócio.
          </p>

          <div style={{ animationDelay: "0.7s" }} className="hero-fade mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={whatsappLink("hero")} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <WhatsAppIcon className="size-5" />
              Quero atrair mais clientes
            </a>
            <a href="#solucoes" className="btn btn-ghost">
              Conhecer nossas soluções
            </a>
          </div>

          <div style={{ animationDelay: "0.9s" }} className="hero-fade mt-12 hidden items-center gap-3 text-sm text-muted-dark lg:flex">
            <ArrowDown className="size-4 animate-bounce motion-reduce:animate-none" aria-hidden="true" />
            Role para ver a jornada do seu cliente
          </div>
        </div>

        {/* composição visual: cristal + órbitas + descoberta */}
        <div className="relative lg:col-span-5" aria-hidden="true">
          <motion.div
            className="relative mx-auto aspect-square w-full max-w-[520px] [perspective:1000px]"
            style={reduce ? undefined : { x: shiftX, y: shiftY }}
          >
            <div className="hero-pop absolute inset-0">
            {/* brilho */}
            <div className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(63,213,240,0.35),rgba(47,134,232,0.12)_45%,transparent_70%)] blur-2xl" />

            {/* órbitas */}
            <svg viewBox="0 0 520 520" className="absolute inset-0 h-full w-full overflow-visible">
              <defs>
                <linearGradient id="orbitA" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#3FD5F0" stopOpacity="0.9" />
                  <stop offset="1" stopColor="#2F86E8" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              <g transform="rotate(-18 260 260)">
                <ellipse cx="260" cy="260" rx="250" ry="92" fill="none" stroke="url(#orbitA)" strokeWidth="1.2" />
                <ellipse cx="260" cy="260" rx="205" ry="205" fill="none" stroke="#8FB0DA" strokeOpacity="0.16" strokeDasharray="2 10" />
              </g>
              <g transform="rotate(24 260 260)">
                <ellipse cx="260" cy="260" rx="236" ry="70" fill="none" stroke="#2F86E8" strokeOpacity="0.35" strokeWidth="1" />
              </g>
            </svg>

            {/* satélites */}
            <div className="absolute inset-0 [animation:orbit_22s_linear_infinite] motion-reduce:animate-none">
              <span className="absolute left-1/2 top-[3%] size-2.5 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_18px_6px_rgba(63,213,240,0.6)]" />
            </div>
            <div className="absolute inset-[9%] [animation:orbit_34s_linear_infinite_reverse] motion-reduce:animate-none">
              <span className="absolute bottom-0 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-white shadow-[0_0_12px_4px_rgba(255,255,255,0.5)]" />
            </div>

            {/* cristal (logo oficial) */}
            <motion.div
              className="absolute inset-[19%] [transform-style:preserve-3d]"
              style={reduce ? undefined : { rotateX: rotX, rotateY: rotY }}
            >
              <div className="h-full w-full [animation:float-y_7s_ease-in-out_infinite] motion-reduce:animate-none">
                <Image
                  src="/logo-otima-3d.webp"
                  alt=""
                  width={540}
                  height={560}
                  priority
                  sizes="(max-width: 1024px) 60vw, 330px"
                  className="h-full w-full object-contain drop-shadow-[0_30px_60px_rgba(31,163,224,0.45)]"
                />
              </div>
            </motion.div>

            {/* pesquisa -> empresa encontrada */}
            <svg viewBox="0 0 520 520" className="absolute inset-0 h-full w-full overflow-visible">
              <path
                d="M70 92 C 170 120, 150 250, 260 262 S 400 360, 448 430"
                fill="none"
                stroke="#3FD5F0"
                strokeOpacity="0.55"
                strokeWidth="1.5"
                strokeDasharray="4 10"
                className="[animation:dash_6s_linear_infinite] motion-reduce:animate-none"
              />
            </svg>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="absolute left-[-2%] top-[8%] flex max-w-[78%] items-center gap-2.5 rounded-full border border-white/15 bg-[rgba(10,22,48,0.75)] py-2.5 pl-3 pr-5 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-md sm:left-[-6%]"
            >
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white/10">
                <Search className="size-3.5 text-cyan" />
              </span>
              <span className="truncate text-[0.8rem] text-white/85 sm:text-sm">empresa de confiança perto de mim</span>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="absolute bottom-[4%] right-[-2%] flex items-center gap-3 rounded-2xl bg-paper px-4 py-3 text-ink shadow-[0_24px_50px_-14px_rgba(0,0,0,0.7)] sm:right-[-4%]"
            >
              <span className="relative grid size-9 place-items-center rounded-xl bg-gradient-to-br from-[#1FB8E6] to-[#2563EB]">
                <MapPin className="size-4 text-white" />
                <span className="absolute inset-0 rounded-xl border-2 border-cyan [animation:pulse-ring_2.4s_ease-out_infinite] motion-reduce:hidden" />
              </span>
              <span className="leading-tight">
                <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-body-light">Sua empresa</span>
                <span className="block text-sm font-bold">Encontrada primeiro</span>
              </span>
            </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
