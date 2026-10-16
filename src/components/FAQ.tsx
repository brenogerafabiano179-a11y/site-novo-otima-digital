"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { faq, contact } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";
import { Reveal } from "./ui/Reveal";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" aria-labelledby="faq-title" className="relative overflow-hidden bg-ice py-24 text-ink sm:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-14 px-5 sm:px-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <div className="signature-line w-28" aria-hidden="true" />
          <p className="eyebrow mt-5 text-blue-ink">Perguntas frequentes</p>
          <h2 id="faq-title" className="display mt-4 text-[clamp(1.8rem,3.6vw,2.9rem)] text-ink">
            Dúvidas comuns
          </h2>
          <p className="mt-6 leading-relaxed text-body-light">
            Não encontrou o que procurava? Fale com a gente pelo{" "}
            <a href={whatsappLink("geral")} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-ink underline underline-offset-4">
              WhatsApp
            </a>{" "}
            ou pelo e-mail{" "}
            <a href={`mailto:${contact.email}`} className="font-semibold text-blue-ink underline underline-offset-4 [overflow-wrap:anywhere]">
              {contact.email}
            </a>
            .
          </p>
        </Reveal>

        <div className="lg:col-span-8">
          <ul className="flex flex-col gap-3">
            {faq.map((item, i) => {
              const isOpen = open === i;
              const btnId = `${baseId}-q${i}`;
              const panelId = `${baseId}-a${i}`;
              return (
                <li key={item.q} className={`rounded-[22px] bg-paper transition-shadow duration-300 ${isOpen ? "shadow-[0_20px_44px_-28px_rgba(22,32,74,0.45)]" : ""}`}>
                  <h3>
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-5 rounded-[22px] px-6 py-5 text-left text-[1.02rem] font-bold text-ink transition-colors hover:text-blue sm:px-7 sm:text-[1.08rem]"
                    >
                      {item.q}
                      <span
                        className={`grid size-9 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                          isOpen ? "rotate-45 bg-blue text-white" : "bg-ice text-blue"
                        }`}
                        aria-hidden="true"
                      >
                        <Plus className="size-4" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    aria-hidden={!isOpen}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 leading-relaxed text-body-light sm:px-7">{item.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
