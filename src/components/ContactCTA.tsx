import Image from "next/image";
import { Mail } from "lucide-react";
import { contact } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./ui/Reveal";
import { InstagramIcon, WhatsAppIcon } from "./ui/icons";

export function ContactCTA() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="grain relative isolate overflow-hidden bg-night pb-24 pt-28 sm:pb-32 sm:pt-36">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image src="/horizonte.webp" alt="" fill sizes="100vw" className="object-cover object-bottom opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-night via-night/30 to-night/95" />
        <div className="absolute left-1/2 top-[18%] size-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(63,213,240,0.16),transparent_62%)]" />
      </div>

      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <Reveal className="mx-auto max-w-5xl text-center">
          <div className="signature-line mx-auto w-40" aria-hidden="true" />
          <h2 id="contato-title" className="display mt-8 text-[clamp(1.9rem,4.6vw,3.9rem)] text-white">
            Seu próximo cliente pode estar procurando agora.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-body-dark">
            Vamos entender o momento da sua empresa e identificar quais oportunidades digitais fazem mais sentido para o
            seu negócio.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={whatsappLink("final")} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <WhatsAppIcon className="size-5" />
              Vamos conversar
            </a>
            <a href="#solucoes" className="btn btn-ghost">Conhecer nossos serviços</a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-20 grid max-w-6xl gap-10 rounded-[32px] border border-white/10 bg-[rgba(10,22,48,0.72)] p-6 shadow-[0_50px_100px_-40px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow text-cyan">Fale com a gente</p>
            <h3 className="mt-4 text-2xl font-extrabold leading-tight text-white">Conte o que sua empresa precisa.</h3>
            <p className="mt-4 leading-relaxed text-body-dark">
              Preencha o formulário ou use um dos canais abaixo. Cada projeto começa entendendo suas necessidades e
              definindo um escopo.
            </p>
            <ul className="mt-8 space-y-4 text-[0.98rem]">
              <li>
                <a href={whatsappLink("geral")} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-white">
                  <span className="grid size-10 place-items-center rounded-xl bg-white/[0.07] text-cyan transition-colors group-hover:bg-cyan group-hover:text-night">
                    <WhatsAppIcon className="size-5" />
                  </span>
                  {contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="group flex items-center gap-3 text-white">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/[0.07] text-cyan transition-colors group-hover:bg-cyan group-hover:text-night">
                    <Mail className="size-5" aria-hidden="true" />
                  </span>
                  <span className="[overflow-wrap:anywhere]">{contact.email}</span>
                </a>
              </li>
              <li>
                <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-white">
                  <span className="grid size-10 place-items-center rounded-xl bg-white/[0.07] text-cyan transition-colors group-hover:bg-cyan group-hover:text-night">
                    <InstagramIcon className="size-5" />
                  </span>
                  {contact.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
