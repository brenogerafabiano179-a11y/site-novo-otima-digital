"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { Globe, MapPin, MessageCircle, Search, Star, AtSign } from "lucide-react";
import { journeySteps } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";
import { Reveal } from "./ui/Reveal";

const icons = {
  busca: { Icon: Search, bg: "bg-[#E8F1FD]", fg: "text-[#2F86E8]" },
  mapa: { Icon: MapPin, bg: "bg-[#E6FAF6]", fg: "text-[#13A58C]" },
  avaliacoes: { Icon: Star, bg: "bg-[#FFF6E0]", fg: "text-[#C98A00]" },
  social: { Icon: AtSign, bg: "bg-[#FDECF5]", fg: "text-[#C8418A]" },
  site: { Icon: Globe, bg: "bg-[#EAF0FF]", fg: "text-[#2563EB]" },
  contato: { Icon: MessageCircle, bg: "bg-[#E7F8EE]", fg: "text-[#1B9E55]" },
} as const;

export function SearchJourney() {
  const reduce = useReducedMotion();
  const listRef = useRef<HTMLDivElement>(null);
  const inView = useInView(listRef, { once: true, margin: "0px 0px -20% 0px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reduce) {
      setCount(journeySteps.length);
      return;
    }
    if (!inView) return;
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= journeySteps.length) window.clearInterval(id);
    }, 650);
    return () => window.clearInterval(id);
  }, [inView, reduce]);

  return (
    <section id="jornada" aria-labelledby="jornada-title" className="relative overflow-hidden bg-ice py-24 text-ink sm:py-32">
      <div aria-hidden="true" className="absolute -right-40 top-10 size-[520px] rounded-full bg-[radial-gradient(circle,rgba(63,213,240,0.18),transparent_65%)]" />
      <div className="relative mx-auto grid max-w-[1320px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6 lg:pr-6">
          <Reveal>
            <div className="signature-line w-28" aria-hidden="true" />
            <p className="eyebrow mt-5 text-blue-ink">A jornada de busca</p>
            <h2 id="jornada-title" className="display mt-4 text-[clamp(1.9rem,4.2vw,3.4rem)] text-ink">
              Antes de escolher, seu cliente pesquisa.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-body-light">
              Ele pesquisa no Google, confere o mapa, compara avaliações, visita o Instagram e procura um site que
              transmita confiança. Em poucos minutos, começa a decidir de quem vai comprar.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 rounded-[var(--radius-card)] bg-ink p-7 text-white sm:p-9">
            <p className="text-[1.15rem] font-semibold leading-snug sm:text-xl">
              Se a sua empresa não aparece nessa jornada, ela pode perder oportunidades antes mesmo de saber que elas
              existiram.
            </p>
            <a
              href={whatsappLink("presenca")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-7 w-full sm:w-auto"
            >
              Quero melhorar minha presença digital
            </a>
          </Reveal>
        </div>

        <div ref={listRef} className="relative lg:col-span-6" aria-label="Exemplo ilustrativo da jornada de busca de um cliente">
          {/* trilho da jornada */}
          <div aria-hidden="true" className="absolute bottom-6 left-[27px] top-6 w-px bg-ink/10 sm:left-[31px]">
            <motion.div
              className="w-full origin-top bg-gradient-to-b from-cyan to-blue"
              initial={false}
              animate={{ height: `${(count / journeySteps.length) * 100}%` }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>

          <ol className="relative flex flex-col gap-4">
            {journeySteps.map((s, i) => {
              const { Icon, bg, fg } = icons[s.id];
              const visible = i < count;
              return (
                <li key={s.id} className="relative pl-16 sm:pl-20">
                  <span
                    aria-hidden="true"
                    className={`absolute left-[19px] top-1/2 grid size-[18px] -translate-y-1/2 place-items-center rounded-full border-2 transition-colors duration-500 sm:left-[23px] ${
                      visible ? "border-blue bg-white" : "border-ink/15 bg-ice"
                    }`}
                  >
                    <span className={`size-1.5 rounded-full transition-colors duration-500 ${visible ? "bg-blue" : "bg-transparent"}`} />
                  </span>
                  <AnimatePresence initial={false}>
                    <motion.div
                      initial={false}
                      animate={visible ? { x: 0, scale: 1 } : { x: 14, scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 260, damping: 26 }}
                      className={`flex items-center gap-4 rounded-[22px] p-4 pr-5 transition-[background-color,box-shadow,filter] duration-500 sm:p-5 ${
                        visible ? "bg-paper shadow-[0_18px_40px_-20px_rgba(22,32,74,0.35)]" : "bg-paper/60 grayscale"
                      } ${i === journeySteps.length - 1 && visible ? "ring-2 ring-cyan/70" : ""}`}
                    >
                      <span className={`grid size-11 shrink-0 place-items-center rounded-2xl ${bg}`}>
                        <Icon className={`size-5 ${fg}`} aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center justify-between gap-3 text-[0.78rem] text-body-light">
                          <span className="font-semibold uppercase tracking-[0.14em]">{s.app}</span>
                          <span>{s.time}</span>
                        </span>
                        <span className="mt-0.5 block font-bold text-ink">{s.title}</span>
                        <span className="block text-[0.92rem] text-body-light">{s.text}</span>
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </li>
              );
            })}
          </ol>
          <p className="mt-5 pl-16 text-xs text-body-light sm:pl-20">Ilustração da jornada de um consumidor. Não representa dados de clientes.</p>
        </div>
      </div>
    </section>
  );
}
