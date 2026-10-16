"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { BarChart3, Rocket, ScanSearch, Target } from "lucide-react";
import { processSteps } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";
import { Reveal } from "./ui/Reveal";

const stepIcons = [ScanSearch, Target, Rocket, BarChart3];

export function Process() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="metodo" aria-labelledby="metodo-title" className="relative overflow-hidden bg-ice py-24 text-ink sm:py-32">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <div className="signature-line w-28" aria-hidden="true" />
            <p className="eyebrow mt-5 text-blue-ink">Nosso método</p>
            <h2 id="metodo-title" className="display mt-4 text-[clamp(1.9rem,4.6vw,3.8rem)] text-ink">
              Estratégia antes da execução.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-body-light">
              Quatro etapas para que cada decisão tenha um porquê e cada ação tenha um indicador para acompanhar.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="relative mt-16">
          {/* linha do tempo: horizontal no desktop, vertical no celular */}
          <div aria-hidden="true" className="absolute left-[27px] top-0 h-full w-[2px] rounded-full bg-ink/10 lg:left-0 lg:top-[27px] lg:h-[2px] lg:w-full">
            <motion.div
              className="h-full w-full origin-top rounded-full bg-gradient-to-b from-cyan to-blue lg:origin-left lg:bg-gradient-to-r"
              style={reduce ? undefined : { scaleY: progress }}
            />
          </div>
          <motion.div
            aria-hidden="true"
            className="absolute left-0 top-[27px] hidden h-[2px] w-full origin-left rounded-full bg-gradient-to-r from-cyan to-blue lg:block"
            style={reduce ? undefined : { scaleX: progress }}
          />

          <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <li key={step.n} className="relative pl-20 lg:pl-0 lg:pt-24">
                  <Reveal delay={i * 0.1}>
                    <span className="absolute left-0 top-0 grid size-14 place-items-center rounded-2xl bg-ink text-white shadow-[0_14px_30px_-12px_rgba(22,32,74,0.6)]">
                      <Icon className="size-6 text-cyan" aria-hidden="true" strokeWidth={1.8} />
                    </span>
                    <p className="font-display text-sm font-extrabold tracking-[0.12em] text-blue-ink">{step.n}</p>
                    <h3 className="mt-2 text-xl font-extrabold uppercase tracking-[0.04em] text-ink">{step.title}</h3>
                    <p className="mt-3 text-[0.98rem] leading-relaxed text-body-light">{step.text}</p>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>

        <Reveal className="mt-16 flex flex-col gap-6 rounded-[var(--radius-card)] bg-paper p-7 shadow-[0_24px_50px_-30px_rgba(22,32,74,0.35)] sm:p-9 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-2xl text-[1.12rem] font-semibold leading-snug text-ink sm:text-xl">
            Você sabe o que está sendo feito, por que está sendo feito e quais indicadores estamos acompanhando.
          </p>
          <a href={whatsappLink("metodo")} target="_blank" rel="noopener noreferrer" className="btn btn-primary shrink-0">
            Vamos conversar sobre minha empresa
          </a>
        </Reveal>
      </div>
    </section>
  );
}
