import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SearchJourney } from "@/components/SearchJourney";
import { Services } from "@/components/Services";
import { IntegratedStrategy } from "@/components/IntegratedStrategy";
import { Markets } from "@/components/Markets";
import { Process } from "@/components/Process";
import { CustomSolutions } from "@/components/CustomSolutions";
import { Values } from "@/components/Values";
import { FAQ } from "@/components/FAQ";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { faq } from "@/lib/site";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <SearchJourney />
        <Services />
        <IntegratedStrategy />
        <Markets />
        <Process />
        <CustomSolutions />
        <Values />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
