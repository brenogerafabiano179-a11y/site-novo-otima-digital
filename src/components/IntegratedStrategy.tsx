"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Blocks, MapPin, Megaphone, MessageCircle, Monitor, Sparkles } from "lucide-react";
import { integratedNodes } from "@/lib/site";
import { Reveal } from "./ui/Reveal";

const nodeIcons = {
  anuncios: Megaphone,
  local: MapPin,
  site: Monitor,
  conteudo: Sparkles,
  contato: MessageCircle,
  sistemas: Blocks,
} as const;

// posições em % no diagrama (sentido horário, começando no topo)
const positions = integratedNodes.map((_, i) => {
  const angle = (-90 + i * 60) * (Math.PI / 180);
  return { x: 50 + Math.cos(angle) * 40, y: 50 + Math.sin(angle) * 40 };
});

export function IntegratedStrategy() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % integratedNodes.length), 2800);
    return () => window.clearInterval(id);
  }, [reduce, paused]);

  const current = integratedNodes[active];

  return (
    <section id="integrado" aria-labelledby="integrado-title" className="relative overflow-hidden bg-paper py-24 text-ink sm:py-32">
      <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="signature-line w-28" aria-hidden="true" />
            <p className="eyebrow mt-5 text-blue-ink">O diferencial integrado</p>
            <h2 id="integrado-title" className="display mt-4 text-[clamp(1.9rem,4.2vw,3.3rem)] text-ink">
              Seus canais não precisam trabalhar sozinhos.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-body-light">
              Um anúncio pode gerar a visita. O site pode transmitir confiança. O Google pode facilitar a descoberta. O
              conteúdo pode fortalecer a marca. E uma boa experiência de contato pode aproximar a decisão de compra.
            </p>
            <p className="mt-5 text-[0.98rem] leading-relaxed text-body-light">
              Nenhum canal sozinho garante vendas. Trabalhando juntos, eles criam melhores condições para atrair
              oportunidades e acompanhar cada uma delas.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {/* diagrama circular (tablet e desktop) */}
          <div className="relative mx-auto hidden aspect-square w-full max-w-[600px] sm:block">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#16204A" strokeOpacity="0.08" strokeWidth="0.3" />
              <circle cx="50" cy="50" r="28" fill="none" stroke="#2F86E8" strokeOpacity="0.15" strokeWidth="0.25" strokeDasharray="0.6 1.6" />
              {positions.map((p, i) => (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={p.x}
                  y2={p.y}
                  stroke={i === active ? "url(#lineGrad)" : "#16204A"}
                  strokeOpacity={i === active ? 1 : 0.1}
                  strokeWidth={i === active ? 0.55 : 0.3}
                  style={{ transition: "stroke-opacity .4s ease, stroke-width .4s ease" }}
                />
              ))}
              {positions.map((p, i) => {
                const n = positions[(i + 1) % positions.length];
                return (
                  <line key={`r${i}`} x1={p.x} y1={p.y} x2={n.x} y2={n.y} stroke="#16204A" strokeOpacity="0.07" strokeWidth="0.25" />
                );
              })}
              <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#3FD5F0" />
                  <stop offset="1" stopColor="#2F86E8" />
                </linearGradient>
              </defs>
            </svg>

            {/* centro */}
            <div className="absolute left-1/2 top-1/2 flex size-[34%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-night text-center shadow-[0_30px_60px_-20px_rgba(6,14,34,0.6)]">
              <span aria-hidden="true" className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_30%,rgba(63,213,240,0.35),transparent_60%)]" />
              <Image src="/logo-otima-3d.webp" alt="" width={72} height={75} className="relative w-[34%]" />
              <span className="relative mt-2 px-3 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted-dark sm:text-[0.7rem]">
                Uma estratégia
              </span>
            </div>

            {integratedNodes.map((node, i) => {
              const Icon = nodeIcons[node.id];
              const isActive = i === active;
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => {
                    setActive(i);
                    setPaused(true);
                  }}
                  onFocus={() => {
                    setActive(i);
                    setPaused(true);
                  }}
                  aria-pressed={isActive}
                  className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
                  style={{ left: `${positions[i].x}%`, top: `${positions[i].y}%` }}
                >
                  <span
                    className={`grid size-14 place-items-center rounded-2xl transition-all duration-300 md:size-16 ${
                      isActive
                        ? "scale-110 bg-gradient-to-br from-[#1FB8E6] to-[#2563EB] text-white shadow-[0_16px_34px_-10px_rgba(37,99,235,0.75)]"
                        : "bg-white text-blue shadow-[0_10px_26px_-16px_rgba(22,32,74,0.5)] group-hover:-translate-y-1"
                    }`}
                  >
                    <Icon className="size-6" aria-hidden="true" strokeWidth={1.8} />
                  </span>
                  <span className={`whitespace-nowrap text-[0.8rem] font-bold md:text-sm ${isActive ? "text-ink" : "text-body-light"}`}>
                    {node.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* lista (celular) */}
          <div className="grid grid-cols-2 gap-2.5 sm:hidden">
            {integratedNodes.map((node, i) => {
              const Icon = nodeIcons[node.id];
              const isActive = i === active;
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => {
                    setActive(i);
                    setPaused(true);
                  }}
                  aria-pressed={isActive}
                  className={`flex min-h-[52px] items-center gap-2.5 rounded-2xl px-3.5 py-3 text-left text-sm font-bold transition-colors ${
                    isActive ? "bg-ink text-white" : "bg-ice text-ink"
                  }`}
                >
                  <Icon className={`size-[18px] shrink-0 ${isActive ? "text-cyan" : "text-blue"}`} aria-hidden="true" />
                  {node.label}
                </button>
              );
            })}
          </div>

          <div className="mx-auto mt-6 min-h-[92px] max-w-[600px] rounded-[22px] bg-ice px-6 py-5 sm:mt-2" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.p
                key={current.id}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="text-[1.02rem] leading-relaxed text-ink"
              >
                <span className="font-extrabold text-blue-ink">{current.label}: </span>
                {current.role}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
