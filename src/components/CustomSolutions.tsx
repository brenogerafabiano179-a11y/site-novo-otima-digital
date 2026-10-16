import { AppWindow, Boxes, Workflow } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import { Reveal } from "./ui/Reveal";

const categories = [
  { Icon: AppWindow, title: "Presença digital", text: "Sites e lojas virtuais." },
  { Icon: Workflow, title: "Operação digital", text: "Sistemas web e automações." },
  { Icon: Boxes, title: "Produtos de software", text: "SaaS e CRMs personalizados." },
];

/** Composição abstrata: janelas, módulos e conexões (sem dados ou telas reais). */
function AbstractInterfaces() {
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-[600px]" aria-hidden="true">
      <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(47,134,232,0.3),transparent_68%)] blur-2xl" />

      {/* janela principal */}
      <div className="absolute left-[4%] top-[6%] w-[72%] rounded-2xl border border-white/10 bg-[rgba(10,22,48,0.85)] p-3 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur [animation:float-y_9s_ease-in-out_infinite] motion-reduce:animate-none">
        <div className="flex items-center gap-1.5 px-1 pb-3">
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
          <span className="ml-3 h-2 flex-1 rounded-full bg-white/[0.07]" />
        </div>
        <div className="grid grid-cols-[28%_1fr] gap-2.5">
          <div className="space-y-2 rounded-xl bg-white/[0.04] p-2.5">
            <span className="block h-2 w-3/4 rounded-full bg-cyan/60" />
            <span className="block h-2 w-full rounded-full bg-white/10" />
            <span className="block h-2 w-5/6 rounded-full bg-white/10" />
            <span className="block h-2 w-2/3 rounded-full bg-white/10" />
            <span className="block h-2 w-4/5 rounded-full bg-white/10" />
          </div>
          <div className="space-y-2.5">
            <div className="relative h-20 overflow-hidden rounded-xl bg-gradient-to-br from-[#1FB8E6]/70 to-[#2563EB]/70">
              <span className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent [animation:shimmer_3.6s_ease-in-out_infinite] motion-reduce:hidden" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <span className="h-12 rounded-lg bg-white/[0.06]" />
              <span className="h-12 rounded-lg bg-white/[0.06]" />
              <span className="h-12 rounded-lg bg-white/[0.06]" />
            </div>
            <span className="block h-2 w-2/3 rounded-full bg-white/10" />
          </div>
        </div>
      </div>

      {/* módulo flutuante */}
      <div className="absolute bottom-[8%] right-[2%] w-[46%] rounded-2xl bg-paper p-4 shadow-[0_40px_70px_-30px_rgba(0,0,0,0.85)] [animation:float-y_7s_ease-in-out_infinite_1s] motion-reduce:animate-none">
        <div className="flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-lg bg-gradient-to-br from-[#2EE6C8] to-[#1FA3E0]" />
          <span className="h-2 w-1/2 rounded-full bg-ink/15" />
        </div>
        <div className="mt-3 space-y-2">
          <span className="block h-2 w-full rounded-full bg-ink/10" />
          <span className="block h-2 w-4/5 rounded-full bg-ink/10" />
        </div>
        <div className="mt-3 flex gap-2">
          <span className="h-6 flex-1 rounded-md bg-blue/90" />
          <span className="h-6 w-10 rounded-md bg-ink/10" />
        </div>
      </div>

      {/* nós e conexões */}
      <svg viewBox="0 0 600 480" className="absolute inset-0 h-full w-full overflow-visible">
        <path d="M430 70 C 520 90, 560 170, 520 250" fill="none" stroke="#3FD5F0" strokeOpacity=".6" strokeWidth="1.5" strokeDasharray="4 8" className="[animation:dash_7s_linear_infinite] motion-reduce:animate-none" />
        <path d="M80 380 C 120 440, 220 450, 300 420" fill="none" stroke="#2F86E8" strokeOpacity=".55" strokeWidth="1.5" strokeDasharray="4 8" className="[animation:dash_9s_linear_infinite] motion-reduce:animate-none" />
        <circle cx="430" cy="70" r="6" fill="#3FD5F0" />
        <circle cx="520" cy="250" r="6" fill="#3FD5F0" />
        <circle cx="80" cy="380" r="6" fill="#2F86E8" />
      </svg>
      <div className="absolute right-[4%] top-[4%] grid size-16 place-items-center rounded-2xl border border-white/10 bg-[rgba(10,22,48,0.8)] backdrop-blur">
        <Boxes className="size-7 text-cyan" strokeWidth={1.6} />
      </div>
      <div className="absolute bottom-[14%] left-[2%] grid size-14 place-items-center rounded-2xl border border-white/10 bg-[rgba(10,22,48,0.8)] backdrop-blur">
        <Workflow className="size-6 text-blue-bright" strokeWidth={1.6} />
      </div>
    </div>
  );
}

export function CustomSolutions() {
  return (
    <section id="sob-medida" aria-labelledby="sob-medida-title" className="grain relative overflow-hidden bg-navy py-24 sm:py-32">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_30%,rgba(47,134,232,0.22),transparent_50%)]" />
      <div className="relative mx-auto grid max-w-[1320px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="signature-line w-28" aria-hidden="true" />
            <p className="eyebrow mt-5 text-cyan">Desenvolvimento sob medida</p>
            <h2 id="sob-medida-title" className="display mt-4 text-[clamp(1.7rem,3.3vw,2.7rem)] text-white">
              Sua empresa não precisa se adaptar a uma solução genérica.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-body-dark">
              Cada negócio possui processos, desafios e objetivos próprios. Por isso, desenvolvemos sites, lojas
              virtuais, sistemas, plataformas SaaS e CRMs personalizados de acordo com as necessidades de cada projeto.
            </p>
          </Reveal>

          <ul className="mt-10 divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {categories.map(({ Icon, title, text }, i) => (
              <li key={title}>
                <Reveal delay={i * 0.08} className="group flex items-center gap-5 py-5">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white/[0.06] text-cyan transition-colors duration-300 group-hover:bg-cyan group-hover:text-night">
                    <Icon className="size-[22px]" aria-hidden="true" strokeWidth={1.8} />
                  </span>
                  <span>
                    <span className="block text-lg font-extrabold text-white">{title}</span>
                    <span className="block text-body-dark">{text}</span>
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal delay={0.1}>
            <a href={whatsappLink("projeto")} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-10">
              Descrever meu projeto
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-6">
          <AbstractInterfaces />
        </Reveal>
      </div>
    </section>
  );
}
