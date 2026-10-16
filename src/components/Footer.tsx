import Link from "next/link";
import { brand, contact, nav, services } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";
import { BrandMark } from "./ui/Brand";
import { InstagramIcon, WhatsAppIcon } from "./ui/icons";

/** base = "" na página inicial (âncoras puras) e "/" nas páginas internas */
export function Footer({ base = "" }: { base?: string }) {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-night pt-20 text-body-dark">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="grid gap-12 border-b border-white/[0.07] pb-14 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <BrandMark size="md" />
            <p className="mt-6 max-w-sm text-[0.96rem] leading-relaxed">
              Estratégia digital, tráfego pago, sites, lojas virtuais e sistemas sob medida para empresas que querem ser
              encontradas por quem já está procurando.
            </p>
            <p className="eyebrow mt-6 text-[0.7rem] text-muted-dark">Atendimento no Brasil e nos Estados Unidos</p>
          </div>

          <nav aria-label="Seções" className="lg:col-span-2">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white">Site</p>
            <ul className="mt-5 space-y-3 text-[0.95rem]">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={`${base}${n.href}`} className="transition-colors hover:text-cyan">{n.label}</Link>
                </li>
              ))}
              <li><Link href={`${base}#contato`} className="transition-colors hover:text-cyan">Contato</Link></li>
            </ul>
          </nav>

          <nav aria-label="Serviços" className="lg:col-span-3">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white">Serviços</p>
            <ul className="mt-5 space-y-3 text-[0.95rem]">
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={`${base}#${s.id}`} className="transition-colors hover:text-cyan">{s.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white">Contato</p>
            <ul className="mt-5 space-y-3 text-[0.95rem]">
              <li>
                <a href={whatsappLink("geral")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-cyan">
                  <WhatsAppIcon className="size-4" /> {contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="transition-colors [overflow-wrap:anywhere] hover:text-cyan">{contact.email}</a>
              </li>
              <li>
                <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-cyan">
                  <InstagramIcon className="size-4" /> {contact.instagramHandle}
                </a>
              </li>
              <li>
                <a href={brand.url} className="transition-colors hover:text-cyan">www.otimadigitalagencia.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* assinatura em largura total */}
        <div className="relative py-12" aria-hidden="true">
          <p className="select-none bg-gradient-to-b from-white/[0.14] to-white/[0.02] bg-clip-text text-center font-display text-[22vw] font-black leading-[1.05] tracking-[0.02em] text-transparent lg:text-[17rem]">
            ÓTIMA
          </p>
          <div className="signature-line mx-auto mt-6 w-full max-w-md" />
          <p className="mt-4 text-center text-[0.62rem] font-medium tracking-[0.42em] text-muted-dark sm:text-xs">{brand.signature}</p>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/[0.07] py-8 text-sm text-muted-dark sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Ótima Digital. Todos os direitos reservados.</p>
          <ul className="flex gap-6">
            <li><Link href={`${base || "/"}privacidade/`} className="transition-colors hover:text-white">Política de Privacidade</Link></li>
            <li><Link href={`${base || "/"}termos/`} className="transition-colors hover:text-white">Termos de Uso</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
