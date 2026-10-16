import type { NextConfig } from "next";

/**
 * STATIC_EXPORT=1 gera uma versão 100% estática em /out (útil para prévias ou hospedagem simples).
 * Na Vercel, o build padrão já funciona sem essa variável.
 */
const isStatic = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  images: { unoptimized: isStatic },
  ...(isStatic ? { output: "export" as const } : {}),
};

export default nextConfig;
