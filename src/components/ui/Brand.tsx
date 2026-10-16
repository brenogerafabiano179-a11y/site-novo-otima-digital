import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/site";

/**
 * Assinatura da marca: símbolo 3D oficial + "ÓTIMA" + "SOLUÇÕES EMPRESARIAIS DIGITAIS".
 * Ponto único para trocar a logo no futuro.
 */
export function BrandMark({
  size = "md",
  showSignature = true,
  tone = "light",
}: {
  size?: "sm" | "md" | "lg";
  showSignature?: boolean;
  tone?: "light" | "dark";
}) {
  const icon = size === "lg" ? 64 : size === "md" ? 40 : 32;
  const word = size === "lg" ? "text-4xl" : size === "md" ? "text-[1.35rem]" : "text-lg";
  return (
    <span className="inline-flex items-center gap-3">
      <Image
        src={size === "lg" ? "/logo-otima-3d.webp" : "/logo-otima-sm.webp"}
        alt=""
        width={icon}
        height={Math.round(icon * 1.037)}
        className="shrink-0 drop-shadow-[0_6px_18px_rgba(63,213,240,0.35)]"
        priority={size !== "lg"}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-black tracking-[0.02em] ${word} ${tone === "light" ? "text-white" : "text-ink"}`}
        >
          {brand.mark}
        </span>
        {showSignature && (
          <span
            className={`mt-1 text-[0.52rem] font-medium tracking-[0.26em] ${tone === "light" ? "text-muted-dark" : "text-body-light"}`}
          >
            {brand.signature}
          </span>
        )}
      </span>
    </span>
  );
}

export function BrandLink(props: Parameters<typeof BrandMark>[0] & { home?: string }) {
  return (
    <Link href={props.home ?? "#inicio"} aria-label="Ótima Digital — voltar ao início" className="rounded-lg">
      <BrandMark size={props.size} showSignature={props.showSignature} tone={props.tone} />
    </Link>
  );
}
