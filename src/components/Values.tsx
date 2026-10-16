import { Compass, Handshake, Lightbulb, TrendingUp } from "lucide-react";
import { values } from "@/lib/site";
import { Reveal } from "./ui/Reveal";

const valueIcons = { compass: Compass, lightbulb: Lightbulb, "line-chart": TrendingUp, handshake: Handshake } as const;

export function Values() {
  return (
    <section id="pilares" aria-labelledby="pilares-title" className="relative overflow-hidden bg-paper py-24 text-ink sm:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-14 px-5 sm:px-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-5 lg:pt-4">
          <div className="signature-line w-28" aria-hidden="true" />
          <p className="eyebrow mt-5 text-blue-ink">Pilares da Ótima Digital</p>
          <h2 id="pilares-title" className="display mt-4 text-[clamp(1.8rem,3.8vw,3.1rem)] text-ink">
            Tecnologia com propósito. Estratégia com clareza.
          </h2>
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
          {values.map((v, i) => {
            const Icon = valueIcons[v.icon];
            const dark = i === 3;
            return (
              <li key={v.title} className="flex">
                <Reveal
                  delay={i * 0.08}
                  className={`group flex w-full flex-col rounded-[var(--radius-card)] p-8 transition-transform duration-300 hover:-translate-y-1 ${
                    dark
                      ? "bg-ink text-white shadow-[0_30px_60px_-30px_rgba(22,32,74,0.7)]"
                      : "bg-ice shadow-[0_24px_50px_-34px_rgba(22,32,74,0.45)]"
                  }`}
                >
                  <Icon className={`size-9 ${dark ? "text-cyan" : "text-blue"}`} aria-hidden="true" strokeWidth={1.5} />
                  <h3 className={`mt-6 text-xl font-extrabold leading-tight ${dark ? "text-white" : "text-ink"}`}>{v.title}</h3>
                  <p className={`mt-3 leading-relaxed ${dark ? "text-body-dark" : "text-body-light"}`}>{v.text}</p>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
