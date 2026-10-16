"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { services, contact } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";

type Fields = { nome: string; empresa: string; contato: string; servico: string; mensagem: string; consentimento: boolean };
type Errors = Partial<Record<keyof Fields, string>>;
type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "whatsapp"; href: string } | { kind: "error"; message: string };

/**
 * Endpoint opcional (ex.: Formspree, função serverless, CRM).
 * Sem endpoint configurado, o formulário monta a mensagem e abre o WhatsApp — nada é simulado.
 */
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

const initial: Fields = { nome: "", empresa: "", contato: "", servico: "", mensagem: "", consentimento: false };

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.nome.trim().length < 2) e.nome = "Informe seu nome.";
  const c = f.contato.trim();
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(c);
  const digits = c.replace(/\D/g, "");
  if (!c) e.contato = "Informe um e-mail ou telefone para retorno.";
  else if (!isEmail && digits.length < 8) e.contato = "Esse contato parece incompleto. Use um e-mail ou telefone com DDD.";
  if (!f.servico) e.servico = "Escolha o serviço de interesse.";
  if (f.mensagem.trim().length < 10) e.mensagem = "Conte um pouco mais sobre sua necessidade (mínimo de 10 caracteres).";
  if (!f.consentimento) e.consentimento = "Precisamos da sua autorização para entrar em contato.";
  return e;
}

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const formRef = useRef<HTMLFormElement>(null);

  const set = <K extends keyof Fields>(k: K, v: Fields[K]) => {
    const next = { ...fields, [k]: v };
    setFields(next);
    if (touched[k]) setErrors(validate(next));
  };

  const blur = (k: keyof Fields) => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors(validate(fields));
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate(fields);
    setErrors(e);
    setTouched({ nome: true, contato: true, servico: true, mensagem: true, consentimento: true });
    if (Object.keys(e).length) {
      const first = Object.keys(e)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    const serviceLabel = services.find((s) => s.id === fields.servico)?.title ?? "Outro / ainda não sei";

    if (FORM_ENDPOINT) {
      setStatus({ kind: "sending" });
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...fields, servico: serviceLabel, origem: "site" }),
        });
        if (!res.ok) throw new Error(String(res.status));
        setStatus({ kind: "sent" });
        setFields(initial);
        setTouched({});
      } catch {
        setStatus({
          kind: "error",
          message: "Não conseguimos enviar agora. Tente novamente ou fale com a gente pelo WhatsApp.",
        });
      }
      return;
    }

    // Sem backend: abre o WhatsApp com a mensagem já preenchida
    const text = [
      "Olá! Vim pelo site da Ótima Digital.",
      `Nome: ${fields.nome.trim()}`,
      fields.empresa.trim() ? `Empresa: ${fields.empresa.trim()}` : null,
      `Contato: ${fields.contato.trim()}`,
      `Serviço de interesse: ${serviceLabel}`,
      `Necessidade: ${fields.mensagem.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");
    const href = whatsappLink({ text });
    window.open(href, "_blank", "noopener,noreferrer");
    setStatus({ kind: "whatsapp", href });
  };

  const fieldCls = (k: keyof Fields) =>
    `w-full rounded-2xl border bg-[rgba(5,12,28,0.55)] px-4 py-3.5 text-[1rem] text-white placeholder:text-muted-dark/70 outline-none transition-[border-color,box-shadow] duration-200 focus:border-cyan focus:shadow-[0_0_0_4px_rgba(63,213,240,0.15)] ${
      errors[k] && touched[k] ? "border-[#ff8a8a]" : "border-white/15"
    }`;

  const err = (k: keyof Fields) =>
    errors[k] && touched[k] ? (
      <p id={`${k}-erro`} className="mt-1.5 flex items-center gap-1.5 text-sm text-[#ffb3b3]">
        <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
        {errors[k]}
      </p>
    ) : null;

  const describedBy = (k: keyof Fields) => (errors[k] && touched[k] ? `${k}-erro` : undefined);

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="grid gap-5" aria-describedby="form-info">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="mb-2 block text-sm font-semibold text-white">Nome</label>
          <input id="nome" name="nome" type="text" autoComplete="name" value={fields.nome}
            onChange={(e) => set("nome", e.target.value)} onBlur={() => blur("nome")}
            aria-invalid={!!(errors.nome && touched.nome)} aria-describedby={describedBy("nome")}
            className={fieldCls("nome")} placeholder="Seu nome" />
          {err("nome")}
        </div>
        <div>
          <label htmlFor="empresa" className="mb-2 block text-sm font-semibold text-white">
            Empresa <span className="font-normal text-muted-dark">(opcional)</span>
          </label>
          <input id="empresa" name="empresa" type="text" autoComplete="organization" value={fields.empresa}
            onChange={(e) => set("empresa", e.target.value)}
            className={fieldCls("empresa")} placeholder="Nome da empresa" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="campo-contato" className="mb-2 block text-sm font-semibold text-white">E-mail ou telefone</label>
          <input id="campo-contato" name="contato" type="text" autoComplete="email" inputMode="email" value={fields.contato}
            onChange={(e) => set("contato", e.target.value)} onBlur={() => blur("contato")}
            aria-invalid={!!(errors.contato && touched.contato)} aria-describedby={describedBy("contato")}
            className={fieldCls("contato")} placeholder="voce@empresa.com" />
          {err("contato")}
        </div>
        <div>
          <label htmlFor="servico" className="mb-2 block text-sm font-semibold text-white">Serviço de interesse</label>
          <select id="servico" name="servico" value={fields.servico}
            onChange={(e) => set("servico", e.target.value)} onBlur={() => blur("servico")}
            aria-invalid={!!(errors.servico && touched.servico)} aria-describedby={describedBy("servico")}
            className={`${fieldCls("servico")} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='none' stroke='%238FB0DA' stroke-width='2'%3E%3Cpath d='M3 5l4 4 4-4'/%3E%3C/svg%3E")] bg-[position:right_1rem_center] bg-no-repeat pr-10 [&>option]:bg-night [&>option]:text-white`}>
            <option value="">Selecione</option>
            {services.map((s) => (
              <option key={s.id} value={s.id}>{s.title}</option>
            ))}
            <option value="outro">Outro / ainda não sei</option>
          </select>
          {err("servico")}
        </div>
      </div>

      <div>
        <label htmlFor="mensagem" className="mb-2 block text-sm font-semibold text-white">Conte sua necessidade</label>
        <textarea id="mensagem" name="mensagem" rows={4} value={fields.mensagem}
          onChange={(e) => set("mensagem", e.target.value)} onBlur={() => blur("mensagem")}
          aria-invalid={!!(errors.mensagem && touched.mensagem)} aria-describedby={describedBy("mensagem")}
          className={`${fieldCls("mensagem")} resize-y`} placeholder="Ex.: quero atrair mais clientes na minha região e não sei por onde começar." />
        {err("mensagem")}
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-body-dark">
          <input type="checkbox" name="consentimento" checked={fields.consentimento}
            onChange={(e) => set("consentimento", e.target.checked)} onBlur={() => blur("consentimento")}
            aria-invalid={!!(errors.consentimento && touched.consentimento)} aria-describedby={describedBy("consentimento")}
            className="mt-0.5 size-5 shrink-0 accent-[#2F86E8]" />
          <span>
            Autorizo a Ótima Digital a usar estes dados para entrar em contato sobre minha solicitação, conforme a{" "}
            <a href="/privacidade/" className="font-semibold text-white underline underline-offset-4">Política de Privacidade</a>.
          </span>
        </label>
        {err("consentimento")}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" disabled={status.kind === "sending"} className="btn btn-primary w-full shrink-0 whitespace-nowrap disabled:cursor-wait disabled:opacity-80 sm:w-auto">
          {status.kind === "sending" ? (
            <>
              <Loader2 className="size-5 animate-spin" aria-hidden="true" /> Enviando…
            </>
          ) : FORM_ENDPOINT ? (
            "Enviar mensagem"
          ) : (
            "Enviar pelo WhatsApp"
          )}
        </button>
        <p id="form-info" className="text-xs leading-relaxed text-muted-dark">
          {FORM_ENDPOINT
            ? "Responderemos pelo contato informado."
            : "Ao enviar, o WhatsApp abre com sua mensagem preenchida para você confirmar."}
        </p>
      </div>

      <div aria-live="polite" role="status">
        <AnimatePresence>
          {status.kind === "sent" && (
            <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="flex items-center gap-2 rounded-2xl bg-[rgba(46,230,200,0.12)] px-4 py-3 text-sm font-semibold text-[#8ff3e2]">
              <CheckCircle2 className="size-5" aria-hidden="true" /> Mensagem enviada. Em breve entraremos em contato.
            </motion.p>
          )}
          {status.kind === "whatsapp" && (
            <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="rounded-2xl bg-white/[0.06] px-4 py-3 text-sm text-body-dark">
              Abrimos o WhatsApp com sua mensagem. Se ele não abriu,{" "}
              <a href={status.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-cyan underline underline-offset-4">
                toque aqui para continuar
              </a>{" "}
              ou escreva para <a href={`mailto:${contact.email}`} className="font-semibold text-white underline underline-offset-4">{contact.email}</a>.
            </motion.p>
          )}
          {status.kind === "error" && (
            <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="flex items-center gap-2 rounded-2xl bg-[rgba(255,107,107,0.12)] px-4 py-3 text-sm font-semibold text-[#ffb3b3]">
              <AlertCircle className="size-5" aria-hidden="true" /> {status.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
