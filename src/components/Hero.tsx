import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ChartColumnIncreasing,
  ChartNoAxesColumn,
  Dumbbell,
  MapPin,
  PhoneCall,
  Settings,
  Stethoscope,
  Users,
} from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./ui/icons";

/* ------------------------------------------------------------------
   Dados da composição do mapa.
   Coordenadas em % do quadro do mapa (largura x altura), calculadas a
   partir da projeção usada para gerar /public/hero/mapa-americas-hero.webp.
   ------------------------------------------------------------------ */

const MAP_W = 85.7; // a imagem ocupa 85,7% da largura do quadro (o resto é oceano para os cartões)
const MAP_TOP = 6; // a imagem começa 6% abaixo do topo (espaço para os cartões superiores)
const mx = (x: number) => +((x * MAP_W) / 100).toFixed(2);
const my = (y: number) => +(MAP_TOP + (y * (100 - MAP_TOP)) / 100).toFixed(2);

const pins = [
  // Estados Unidos
  { x: mx(7.13), y: my(19.27) }, // Los Angeles
  { x: mx(23.87), y: my(22.07) }, // Dallas
  { x: mx(33.01), y: my(13.23) }, // Chicago
  { x: mx(44.15), y: my(14.45) }, // Nova York
  { x: mx(37.69), y: my(27.06) }, // Orlando
  // Brasil
  { x: mx(80.69), y: my(60.99) }, // Fortaleza
  { x: mx(71.2), y: my(75.14) }, // Brasília
  { x: mx(70.85), y: my(82.83) }, // São Paulo
  { x: mx(65.36), y: my(89.32) }, // Porto Alegre
  { x: mx(60.41), y: my(62.21) }, // Manaus
];

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
    alt: "Centro de cidade iluminado ao anoitecer",
    label: ["Mais visibilidade", "no seu mercado"],
    icon: ChartNoAxesColumn,
    pos: { left: "0%", top: "-2%" },
    tag: "right",
    mobile: true,
  },
  {
    img: "/hero/auto-center.webp",
    alt: "Fachada de uma oficina mecânica",
    label: ["Mais clientes", "locais"],
    icon: Users,
    pos: { left: "55%", top: "1%" },
    tag: "below-end",
    mobile: true,
  },
  {
    img: "/hero/centro-comercial.webp",
    alt: "Prédios comerciais iluminados no centro da cidade",
    label: ["Mais oportunidades", "de negócios"],
    icon: Settings,
    pos: { left: "69%", top: "26%" },
    tag: "below-end",
  },
  {
    img: "/hero/restaurante.webp",
    alt: "Fachada de pizzaria com mesas na calçada à noite",
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
    pos: { left: "75%", top: "51%" },
    tag: "below-end",
  },
  {
    img: "/hero/academia.webp",
    alt: "Aparelhos de musculação em uma academia",
    label: ["Mais vendas", "e crescimento"],
    icon: Dumbbell,
    pos: { left: "68%", top: "76%" },
    tag: "below-end",
    mobile: true,
  },
];

const benefits: { icon: LucideIcon; text: [string, string] }[] = [
  { icon: ChartColumnIncreasing, text: ["Anúncios no", "Google e Meta"] },
  { icon: MapPin, text: ["Foco no seu", "mercado local"] },
  { icon: Users, text: ["Estratégia para", "gerar oportunidades"] },
  { icon: Settings, text: ["Acompanhamento e", "otimização contínua"] },
];

/** Somente afirmações que já constam no site (sem métricas inventadas). */
const facts: [string, string][] = [
  ["2 mercados", "Brasil e Estados Unidos"],
  ["Google e Meta", "anúncios com otimização contínua"],
  ["Estratégia", "antes de qualquer ação"],
  ["Relatórios claros", "de investimento e desempenho"],
];

function Pin({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <span className="absolute" style={{ left: `${x}%`, top: `${y}%` }}>
      {/* halo no chão */}
      <span className="absolute left-0 top-0 size-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2f86e8]/35 blur-[3px] sm:size-9" />
      <span
        className="hero-pin-pulse absolute left-0 top-0 size-9 rounded-full border border-cyan/70 motion-reduce:hidden sm:size-12"
        style={{ animationDelay: `${delay}s` }}
      />
      {/* gota */}
      <svg
        viewBox="0 0 24 32"
        className="absolute bottom-0 left-0 h-[22px] w-[17px] -translate-x-1/2 drop-shadow-[0_0_8px_rgba(63,213,240,0.85)] sm:h-[30px] sm:w-[23px]"
      >
        <path d="M12 31C10 26 2 20 2 12a10 10 0 0 1 20 0c0 8-8 14-10 19Z" fill="#0b2a55" stroke="#3fd5f0" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" fill="#d4f6ff" />
      </svg>
    </span>
  );
}

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
      className="relative isolate overflow-hidden bg-night pt-[calc(var(--header-h)+28px)] lg:flex lg:min-h-[100svh] lg:flex-col lg:pt-[calc(var(--header-h)+16px)]"
    >
      {/* fundo: azul-marinho quase preto, luz turquesa discreta atrás do mapa */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_74%_42%,rgba(47,134,232,0.22),transparent_70%),radial-gradient(ellipse_40%_50%_at_8%_100%,rgba(63,213,240,0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-night" />
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

          <ul className="hero-fade relative z-20 mt-9 grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-4 sm:gap-x-4 lg:grid-cols-2 xl:w-[128%] xl:grid-cols-4" style={{ animationDelay: "0.44s" }}>
            {benefits.map(({ icon: Icon, text }) => (
              <li key={text[1]} className="flex items-start gap-2.5 whitespace-nowrap text-[0.86rem] leading-snug text-body-dark max-[380px]:whitespace-normal">
                <Icon className="mt-0.5 size-[22px] shrink-0 text-cyan" aria-hidden="true" strokeWidth={2.2} />
                <span>
                  {text[0]}
                  <br />
                  {text[1]}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------------- mapa das Américas ---------------- */}
        <div className="relative mx-auto w-full max-w-[780px] lg:max-w-none">
          <div
            role="img"
            aria-label="Mapa noturno das Américas com as luzes das cidades, Estados Unidos e Brasil em destaque, marcadores em várias cidades dos dois países e exemplos de negócios locais: cidade, oficina mecânica, centro comercial, restaurante, clínica e academia."
            className="relative aspect-[1050/860] w-full sm:w-[88%] lg:w-full"
          >
            <div
              className="hero-fade absolute bottom-0 left-0 [filter:brightness(1.18)_saturate(1.1)] [mask-image:linear-gradient(to_bottom,black_82%,transparent)]"
              style={{ width: `${MAP_W}%`, top: `${MAP_TOP}%`, animationDelay: "0.1s" }}
            >
              <Image
                src="/hero/mapa-americas-hero.webp"
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 680px"
                className="object-contain"
              />
            </div>

            {/* rótulos dos países */}
            <span
              aria-hidden="true"
              className="absolute -translate-x-1/2 text-[0.55rem] font-semibold tracking-[0.34em] text-white/90 [text-shadow:0_0_12px_rgba(63,213,240,0.9)] sm:text-[0.72rem] lg:text-[0.78rem]"
              style={{ left: `${mx(25)}%`, top: `${my(31)}%` }}
            >
              ESTADOS UNIDOS
            </span>
            <span
              aria-hidden="true"
              className="absolute -translate-x-1/2 text-[0.55rem] font-semibold tracking-[0.34em] text-white/90 [text-shadow:0_0_12px_rgba(63,213,240,0.9)] sm:text-[0.72rem] lg:text-[0.78rem]"
              style={{ left: `${mx(59)}%`, top: `${my(68.5)}%` }}
            >
              BRASIL
            </span>

            <div aria-hidden="true">
              {pins.map((p, i) => (
                <Pin key={i} x={p.x} y={p.y} delay={(i % 5) * 0.6} />
              ))}
            </div>

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

      {/* ---------------- faixa inferior ---------------- */}
      <div className="mx-auto mt-10 w-full max-w-[1440px] px-5 pb-12 sm:px-8 lg:mt-4 lg:pb-8 xl:px-12">
        <ul className="hero-fade grid grid-cols-2 rounded-2xl border border-white/10 bg-[rgba(10,22,48,0.72)] backdrop-blur-sm xl:grid-cols-4" style={{ animationDelay: "0.6s" }}>
          {facts.map(([title, text], i) => (
            <li
              key={title}
              className={`px-4 py-4 sm:px-8 sm:py-5 lg:py-6 ${i % 2 === 1 ? "border-l border-white/10" : ""} ${i >= 2 ? "border-t border-white/10 xl:border-t-0" : ""} ${i === 2 ? "xl:border-l" : ""}`}
            >
              <p className="text-[1.02rem] font-bold leading-tight text-cyan sm:text-[1.35rem]">{title}</p>
              <p className="mt-1 text-[0.8rem] leading-snug text-body-dark sm:text-[0.95rem]">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
