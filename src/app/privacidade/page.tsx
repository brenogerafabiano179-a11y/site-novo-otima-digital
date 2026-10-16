import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como a Ótima Digital trata os dados pessoais recebidos pelo site e pelos canais de contato.",
  alternates: { canonical: "/privacidade/" },
};

export default function Privacidade() {
  return (
    <LegalPage title="Política de Privacidade" updated="outubro de 2026">
      <p>
        Esta política explica como a Ótima Digital trata os dados pessoais recebidos por meio deste site e dos canais
        de contato indicados nele. Ao usar o site, você concorda com as práticas descritas abaixo.
      </p>

      <h2>1. Quais dados recebemos</h2>
      <ul>
        <li>Dados que você informa no formulário de contato: nome, empresa (opcional), e-mail ou telefone, serviço de interesse e a descrição da sua necessidade.</li>
        <li>Mensagens que você envia por WhatsApp, e-mail ou Instagram ao entrar em contato com a gente.</li>
        <li>Dados técnicos básicos gerados automaticamente pela hospedagem do site (como endereço IP e tipo de navegador), usados para segurança e funcionamento.</li>
      </ul>

      <h2>2. Para que usamos os dados</h2>
      <ul>
        <li>Responder ao seu contato e entender a necessidade da sua empresa.</li>
        <li>Preparar e enviar propostas comerciais quando você solicitar.</li>
        <li>Manter a segurança e o funcionamento do site.</li>
      </ul>
      <p>Não vendemos dados pessoais e não os usamos para finalidades diferentes das informadas aqui.</p>

      <h2>3. Base legal</h2>
      <p>
        Tratamos os dados com base no seu consentimento, dado ao enviar o formulário, e nas medidas preliminares
        relacionadas a uma eventual contratação solicitada por você, conforme a legislação de proteção de dados
        aplicável, incluindo a Lei Geral de Proteção de Dados (LGPD) para titulares no Brasil.
      </p>

      <h2>4. Compartilhamento</h2>
      <p>
        Quando você escolhe falar pelo WhatsApp, a conversa acontece na plataforma do WhatsApp e segue também as
        políticas desse serviço. Os dados podem ser processados por fornecedores necessários à operação do site e do
        atendimento (como hospedagem e ferramentas de comunicação), sempre limitados ao necessário.
      </p>

      <h2>5. Cookies e rastreamento</h2>
      <p>
        Atualmente, este site não utiliza cookies de publicidade nem ferramentas de rastreamento de terceiros. Caso isso
        mude, esta política será atualizada e, quando exigido, pediremos o seu consentimento antes.
      </p>

      <h2>6. Por quanto tempo guardamos</h2>
      <p>
        Mantemos os dados pelo tempo necessário para atender à sua solicitação e cumprir obrigações legais. Depois
        disso, eles são excluídos ou anonimizados.
      </p>

      <h2>7. Seus direitos</h2>
      <p>
        Você pode solicitar acesso, correção, exclusão ou informações sobre o tratamento dos seus dados, além de revogar
        o consentimento a qualquer momento, pelo e-mail <a href={`mailto:${contact.email}`}>{contact.email}</a>.
      </p>

      <h2>8. Alterações</h2>
      <p>Esta política pode ser atualizada. A data da última atualização aparece no topo desta página.</p>

      <h2>9. Contato</h2>
      <p>
        Dúvidas sobre privacidade: <a href={`mailto:${contact.email}`}>{contact.email}</a>.
      </p>
    </LegalPage>
  );
}
