import Image from "next/image";
import { whatsappLink } from "@/lib/whatsapp";
import { Reveal } from "./ui/Reveal";
import { WhatsAppIcon } from "./ui/icons";

export function Markets() {
  return (
    <section id="mercados" aria-labelledby="mercados-title" className="grain relative overflow-hidden bg-night py-24 sm:py-32">
      <div aria-hidden="true" className="absolute inset-0">
        <Image src="/nebula.webp" alt="" fill sizes="100vw" className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-night via-night/40 to-night" />
      </div>

      <div className="relative mx-auto grid max-w-[1320px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <Reveal className="relative order-2 lg:order-1 lg:col-span-6">
          <div className="relative mx-auto w-full max-w-[560px]">
            <div aria-hidden="true" className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(47,134,232,0.25),transparent_70%)] blur-2xl" />
            <Image
              src="/mapa-americas.svg"
              alt="Mapa das Américas com os Estados Unidos em turquesa e o Brasil em azul, ligados por uma linha pontilhada"
              width={900}
              height={1000}
              className="relative h-auto w-full"
            />
            <span className="absolute left-[30%] top-[16%] rounded-full border border-cyan/60 bg-night/80 px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-white backdrop-blur sm:text-xs">
              Estados Unidos
            </span>
            <span className="absolute bottom-[30%] right-[4%] rounded-full border border-blue/70 bg-night/80 px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-white backdrop-blur sm:text-xs">
              Brasil
            </span>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2 lg:col-span-6">
          <Reveal>
            <div className="signature-line w-28" aria-hidden="true" />
            <p className="eyebrow mt-5 text-cyan">Brasil e Estados Unidos</p>
            <h2 id="mercados-title" className="display mt-4 text-[clamp(1.9rem,4.2vw,3.4rem)] text-white">
              Estratégia digital em dois mercados.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-body-dark">
              A Ótima Digital atende empresas no Brasil e nos Estados Unidos com planejamento, execução e
              acompanhamento adaptados ao público, ao comportamento de busca e às características de cada mercado.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            <Reveal delay={0.05} className="rounded-[22px] border border-white/[0.08] bg-navy-card/80 p-6 backdrop-blur">
              <span className="block h-1 w-12 rounded-full bg-gradient-to-r from-[#1FB8E6] to-[#2563EB]" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-extrabold text-white">Brasil</h3>
              <p className="mt-2 text-[0.96rem] leading-relaxed text-body-dark">
                Estratégia e execução adaptadas ao mercado brasileiro.
              </p>
            </Reveal>
            <Reveal delay={0.12} className="rounded-[22px] border border-white/[0.08] bg-navy-card/80 p-6 backdrop-blur">
              <span className="block h-1 w-12 rounded-full bg-gradient-to-r from-[#2EE6C8] to-[#1FA3E0]" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-extrabold text-white">Estados Unidos</h3>
              <p className="mt-2 text-[0.96rem] leading-relaxed text-body-dark">
                Estratégia e execução adaptadas ao mercado americano.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <a href={whatsappLink("mercados")} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-9">
              <WhatsAppIcon className="size-5" />
              Falar com a Ótima Digital
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
