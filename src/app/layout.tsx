import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { brand, contact } from "@/lib/site";

/* Fontes locais (OFL), com pré-carregamento e fallback ajustado pelo Next */
const montserrat = localFont({
  src: [
    { path: "../fonts/montserrat-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "../fonts/montserrat-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/montserrat-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/montserrat-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/montserrat-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "../fonts/montserrat-latin-800-normal.woff2", weight: "800", style: "normal" },
    { path: "../fonts/montserrat-latin-900-normal.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: "Ótima Digital | Marketing, Tráfego Pago e Soluções Digitais",
    template: "%s | Ótima Digital",
  },
  description: brand.description,
  applicationName: brand.name,
  alternates: { canonical: "/" },
  keywords: [
    "agência de marketing digital",
    "tráfego pago",
    "Google Ads",
    "Meta Ads",
    "criação de sites",
    "loja virtual",
    "Google Business Profile",
    "Google Local Services",
    "social media",
    "sistemas sob medida",
    "CRM personalizado",
    "Brasil",
    "Estados Unidos",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: brand.url,
    siteName: brand.name,
    title: "Ótima Digital | Marketing, Tráfego Pago e Soluções Digitais",
    description: brand.description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Ótima Digital — Seu cliente já está procurando." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ótima Digital | Marketing, Tráfego Pago e Soluções Digitais",
    description: brand.description,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050c1c",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: brand.name,
  alternateName: brand.legalName,
  url: brand.url,
  logo: `${brand.url}/logo-otima-3d.webp`,
  image: `${brand.url}/og.jpg`,
  description: brand.description,
  email: contact.email,
  telephone: "+1-407-403-7903",
  areaServed: [
    { "@type": "Country", name: "Brasil" },
    { "@type": "Country", name: "Estados Unidos" },
  ],
  sameAs: [contact.instagramUrl],
  knowsAbout: [
    "Marketing digital",
    "Gestão de tráfego pago",
    "Criação de sites",
    "Lojas virtuais",
    "Google Business Profile",
    "Social media",
    "Desenvolvimento de sistemas sob medida",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <head>
        <noscript>
          <style>{`[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:font-semibold focus:text-ink"
        >
          Pular para o conteúdo
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
