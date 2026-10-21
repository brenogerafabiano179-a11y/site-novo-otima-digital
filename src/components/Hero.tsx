import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ChartNoAxesColumn,
  Dumbbell,
  PhoneCall,
  Settings,
  Stethoscope,
  Users,
} from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./ui/icons";

/* Composição do mapa: posições dos cartões em % do quadro do mapa. */

type Business = {
  img: string;
  alt: string;
  label: [string, string];
  icon: LucideIcon;
  /** posição do cartão (% do quadro) */
  pos: { left: string; top: string };
  /** posição da etiqueta em relação à foto */
  tag: "right" | "below-right" | "below-end";
  /** aparece também no celular */
  mobile?: boolean;
};

const businesses: Business[] = [
  {
    img: "/hero/cidade.webp",
    alt: "Cidade iluminada ao entardecer",
    label: ["Mais visibilidade", "no seu mercado"],
    icon: ChartNoAxesColumn,
    pos: { left: "0%", top: "-2%" },
    tag: "right",
    mobile: true,
  },
  {
    img: "/hero/auto-center.webp",
    alt: "Fachada de um auto center à noite",
    label: ["Mais clientes", "locais"],
    icon: Users,
    pos: { left: "64%", top: "0%" },
    tag: "below-end",
    mobile: true,
  },
  {
    img: "/hero/equipamentos.webp",
    alt: "Condensadoras de ar-condicionado na cobertura de um prédio",
    label: ["Mais oportunidades", "de negócios"],
    icon: Settings,
    pos: { left: "69%", top: "26%" },
    tag: "below-end",
  },
  {
    img: "/hero/restaurante.webp",
    alt: "Fachada de restaurante iluminada ao entardecer",
    label: ["Mais ligações", "e agendamentos"],
    icon: PhoneCall,
    pos: { left: "3%", top: "47%" },
    tag: "below-right",
    mobile: true,
  },
  {
    img: "/hero/clinica.webp",
    alt: "Consultório odontológico",
    label: ["Mais pacientes", "na sua região"],
    icon: Stethoscope,
    pos: { left: "76%", top: "60%" },
    tag: "below-end",
  },
  {
    img: "/hero/academia.webp",
    alt: "Academia com esteiras e vista para a cidade",
    label: ["Mais vendas", "e crescimento"],
    icon: Dumbbell,
    pos: { left: "62%", top: "84%" },
    tag: "below-end",
    mobile: true,
  },
];

function BusinessCard({ b, i }: { b: Business; i: number }) {
  const Icon = b.icon;
  return (
    <div
      className={`hero-fade absolute w-[23%] ${b.mobile ? "" : "max-sm:hidden"}`}
      style={{ left: b.pos.left, top: b.pos.top, animationDelay: `${0.55 + i * 0.1}s` }}
    >
      <div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-white/25 bg-navy-card shadow-[0_18px_40px_-14px_rgba(0,0,0,0.85)] ring-1 ring-black/40">
        <Image src={b.img} alt={b.alt} fill sizes="(max-width: 1024px) 26vw, 170px" className="object-cover" />
        <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/25 to-transparent" />
      </div>
      {/* etiqueta branca */}
      <div
        className={`absolute z-10 flex items-center gap-2 whitespace-nowrap rounded-lg bg-white px-2.5 py-1.5 text-ink shadow-[0_12px_28px_-10px_rgba(0,0,0,0.7)] max-sm:hidden lg:gap-2.5 lg:px-3 lg:py-2 ${
          b.tag === "right" ? "left-[68%] top-[30%]" : b.tag === "below-end" ? "right-[-16%] top-[64%]" : "left-[62%] top-[64%]"
        }`}
      >
        <Icon className="size-4 shrink-0 text-blue-ink lg:size-[18px]" aria-hidden="true" strokeWidth={2.4} />
        <span className="text-[0.62rem] font-semibold leading-[1.25] lg:text-[0.7rem] xl:text-[0.74rem]">
          {b.label[0]}
          <br />
          <span className="font-medium text-body-light">{b.label[1]}</span>
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-[#0e2749] pt-[calc(var(--header-h)+28px)] lg:flex lg:min-h-[100svh] lg:flex-col lg:pt-[calc(var(--header-h)+16px)]"
    >
      {/* fundo: azul da marca, uniforme */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-[1440px] flex-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,47fr)_minmax(0,53fr)] lg:gap-4 xl:px-12">
        {/* ---------------- texto ---------------- */}
        <div className="relative z-10 py-2">
          <p className="hero-fade text-[0.7rem] font-bold uppercase tracking-[0.28em] text-cyan sm:text-[0.76rem]" style={{ animationDelay: "0.05s" }}>
            Estratégia digital <span aria-hidden="true" className="mx-1.5">•</span> Brasil e Estados Unidos
          </p>

          <h1
            id="hero-title"
            className="mt-5 text-[clamp(2rem,3.2vw,3.25rem)] font-extrabold leading-[1.06] tracking-[-0.025em] text-white"
          >
            Sua empresa conectada às pessoas certas por meio de estratégias digitais{" "}
            <span className="bg-gradient-to-r from-[#5fe0f7] to-[#3a8ef0] bg-clip-text text-transparent">alinhadas aos seus objetivos.</span>
          </h1>

          <p className="hero-fade mt-6 max-w-[34rem] text-[1.02rem] leading-relaxed text-body-dark sm:text-[1.12rem]" style={{ animationDelay: "0.24s" }}>
            Estratégia e gestão de anúncios online, presença digital e tecnologia para empresas que querem mais
            visibilidade, mais oportunidades e mais clientes no Brasil e nos Estados Unidos.
          </p>

          <div className="hero-fade mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4" style={{ animationDelay: "0.34s" }}>
            <a href={whatsappLink("hero")} target="_blank" rel="noopener noreferrer" className="btn btn-primary group whitespace-nowrap !px-6">
              <WhatsAppIcon className="size-5" />
              Quero atrair mais clientes
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a href="#solucoes" className="btn btn-ghost group whitespace-nowrap !px-6">
              Conheça nossos serviços
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>

        </div>

        {/* ---------------- mapa das Américas ---------------- */}
        <div className="relative mx-auto w-full max-w-[780px] lg:max-w-none">
          <div
            role="img"
            aria-label="Mapa noturno das Américas com as luzes das cidades e marcadores de localização e exemplos de negócios locais: cidade, auto center, climatização, restaurante, clínica e academia."
            className="relative aspect-[1050/860] w-full sm:w-[88%] lg:w-full"
          >
            <div className="hero-fade absolute inset-0 mix-blend-screen" style={{ animationDelay: "0.1s" }}>
              <Image
                src="/hero/mapa-americas-hero.webp"
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 700px"
                className="object-cover"
              />
            </div>

            {/* rótulos dos países */}
            <span
              aria-hidden="true"
              className="absolute -translate-x-1/2 text-[0.55rem] font-semibold tracking-[0.34em] text-white/90 [text-shadow:0_0_12px_rgba(63,213,240,0.9)] sm:text-[0.72rem] lg:text-[0.78rem]"
              style={{ left: "47%", top: "12.5%" }}
            >
              ESTADOS UNIDOS
            </span>
            <span
              aria-hidden="true"
              className="absolute -translate-x-1/2 text-[0.55rem] font-semibold tracking-[0.34em] text-white/90 [text-shadow:0_0_12px_rgba(63,213,240,0.9)] sm:text-[0.72rem] lg:text-[0.78rem]"
              style={{ left: "62%", top: "65.5%" }}
            >
              BRASIL
            </span>

            <div aria-hidden="true">
              {businesses.map((b, i) => (
                <BusinessCard key={b.img} b={b} i={i} />
              ))}
            </div>
          </div>

          {/* celular: etiquetas em grade abaixo do mapa (no desktop elas ficam sobre os cartões) */}
          <ul className="mt-5 grid grid-cols-2 gap-2.5 sm:hidden">
            {businesses.map(({ icon: Icon, label }) => (
              <li key={label[0]} className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-ink">
                <Icon className="size-4 shrink-0 text-blue-ink" aria-hidden="true" strokeWidth={2.4} />
                <span className="text-[0.74rem] font-semibold leading-tight">
                  {label[0]} <span className="font-medium text-body-light">{label[1]}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div aria-hidden="true" className="h-12 lg:h-10" />
    </section>
  );
}
