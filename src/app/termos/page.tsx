import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Condições de uso do site da Ótima Digital.",
  alternates: { canonical: "/termos/" },
};

export default function Termos() {
  return (
    <LegalPage title="Termos de Uso" updated="outubro de 2026">
      <p>
        Estes termos regulam o uso do site da Ótima Digital. Ao navegar pelo site, você concorda com as condições
        abaixo.
      </p>

      <h2>1. Finalidade do site</h2>
      <p>
        O site apresenta a Ótima Digital, seus serviços e seus canais de contato. As informações têm caráter
        informativo e não constituem proposta comercial. Condições, escopo e valores de qualquer serviço são definidos
        em proposta específica.
      </p>

      <h2>2. Resultados</h2>
      <p>
        Os resultados de ações de marketing, anúncios, sites e demais serviços dependem de fatores como mercado,
        oferta, investimento, concorrência e execução. Nada neste site representa garantia de resultados, posições em
        mecanismos de busca, aprovação em plataformas ou quantidade de contatos.
      </p>

      <h2>3. Propriedade intelectual</h2>
      <p>
        A marca, os textos, as imagens e os elementos visuais deste site pertencem à Ótima Digital ou são usados com
        autorização, e não podem ser reproduzidos sem permissão prévia.
      </p>

      <h2>4. Links externos</h2>
      <p>
        O site contém links para serviços de terceiros, como WhatsApp e Instagram. Esses serviços têm termos e políticas
        próprios, pelos quais a Ótima Digital não é responsável.
      </p>

      <h2>5. Uso adequado</h2>
      <p>
        Você se compromete a não usar o site para fins ilícitos, a não tentar comprometer sua segurança ou
        funcionamento e a fornecer informações verdadeiras ao entrar em contato.
      </p>

      <h2>6. Alterações</h2>
      <p>Estes termos podem ser atualizados a qualquer momento. A data da última atualização aparece no topo desta página.</p>

      <h2>7. Contato</h2>
      <p>
        Dúvidas sobre estes termos: <a href={`mailto:${contact.email}`}>{contact.email}</a>.
      </p>
    </LegalPage>
  );
}
