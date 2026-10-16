import { ArrowUpRight, BadgeCheck, Blocks, Check, Megaphone, MapPin, Monitor, Sparkles } from "lucide-react";
import { services, type Service } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const iconMap: Record<Service["icon"], typeof Megaphone> = {
  megaphone: Megaphone,
  monitor: Monitor,
  "map-pin": MapPin,
  "badge-check": BadgeCheck,
  sparkles: Sparkles,
  blocks: Blocks,
};

export function Services() {
  return (
    <section id="solucoes" aria-labelledby="solucoes-title" className="grain relative overflow-hidden bg-navy py-24 sm:py-32">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(47,134,232,0.22),transparent_50%),radial-gradient(ellipse_at_95%_80%,rgba(63,213,240,0.12),transparent_45%)]" />
      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8">
        <SectionHeading
          id="solucoes-title"
          label="Soluções da Ótima Digital"
          title="Uma estratégia. Diferentes pontos de contato."
          text="Da primeira pesquisa ao contato comercial, cada canal tem um papel. A gente conecta essas etapas para sua empresa crescer com mais estratégia."
        />

        <ul className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <li key={s.id} id={s.id} className="flex">
                <Reveal delay={(i % 3) * 0.08} className="flex w-full">
                  <article className="group relative flex w-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-paper p-7 text-ink shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:-translate-y-1.5 sm:p-8">
                    <span aria-hidden="true" className="signature-line absolute inset-x-0 top-0 origin-left scale-x-0 rounded-none transition-transform duration-500 group-hover:scale-x-100" />
                    <span aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[radial-gradient(circle,rgba(63,213,240,0.22),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-[1.35rem] font-extrabold leading-tight text-blue">{s.title}</h3>
                      <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#1FB8E6] to-[#2563EB] text-white shadow-[0_10px_24px_-10px_rgba(37,99,235,0.8)] transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105">
                        <Icon className="size-[22px]" aria-hidden="true" strokeWidth={1.8} />
                      </span>
                    </div>
                    <p className="mt-4 text-[0.98rem] leading-relaxed text-body-light">{s.description}</p>
                    <p className="mt-6 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-ink">Entregas</p>
                    <ul className="mt-3 space-y-2.5">
                      {s.deliveries.map((d) => (
                        <li key={d} className="flex gap-3 text-[0.94rem] leading-snug text-ink/85">
                          <Check className="mt-0.5 size-4 shrink-0 text-blue" aria-hidden="true" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-8">
                      <a
                        href={whatsappLink(s.whatsapp)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-arrow rounded-full text-blue-ink hover:text-ink"
                      >
                        {s.cta}
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      </a>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
