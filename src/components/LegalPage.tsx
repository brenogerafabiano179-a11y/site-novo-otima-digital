import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BrandLink } from "./ui/Brand";
import { Footer } from "./Footer";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <>
      <header className="border-b border-white/[0.07] bg-night">
        <div className="mx-auto flex h-[var(--header-h)] max-w-[1320px] items-center justify-between px-5 sm:px-8">
          <BrandLink size="sm" showSignature={false} home="/" />
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-body-dark transition-colors hover:text-white">
            <ArrowLeft className="size-4" aria-hidden="true" /> Voltar ao site
          </Link>
        </div>
      </header>
      <main id="conteudo" className="bg-paper py-20 text-ink sm:py-28">
        <article className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="signature-line w-28" aria-hidden="true" />
          <h1 className="display mt-6 text-[clamp(2rem,5vw,3.2rem)] text-ink">{title}</h1>
          <p className="mt-4 text-sm text-body-light">Última atualização: {updated}</p>
          <div className="legal mt-12 space-y-6 text-[1.02rem] leading-relaxed text-body-light [&_a]:font-semibold [&_a]:text-blue-ink [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-12 [&_h2]:text-xl [&_h2]:font-extrabold [&_h2]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
            {children}
          </div>
        </article>
      </main>
      <Footer base="/" />
    </>
  );
}
