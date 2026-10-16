/**
 * Configuração central da marca, contatos, navegação e conteúdo.
 * Todo texto institucional do site sai daqui.
 */

export const brand = {
  name: "Ótima Digital",
  mark: "ÓTIMA",
  signature: "SOLUÇÕES EMPRESARIAIS DIGITAIS",
  legalName: "Ótima Soluções Empresariais Digitais",
  url: "https://www.otimadigitalagencia.com",
  tagline: "Seu cliente já está procurando. A questão é quem ele encontra primeiro.",
  description:
    "Estratégia digital, gestão de tráfego pago, sites, lojas virtuais e sistemas personalizados para empresas no Brasil e nos Estados Unidos.",
  markets: ["Brasil", "Estados Unidos"],
} as const;

export const contact = {
  whatsappDisplay: "+1 (407) 403-7903",
  whatsappNumber: "14074037903",
  email: "contato@otimadigitalagencia.com",
  instagramHandle: "@otimadigital.agencia",
  instagramUrl: "https://www.instagram.com/otimadigital.agencia/",
  site: "https://www.otimadigitalagencia.com",
} as const;

export const nav = [
  { href: "#jornada", label: "Jornada" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#metodo", label: "Método" },
  { href: "#sob-medida", label: "Sob medida" },
  { href: "#faq", label: "Dúvidas" },
] as const;

/** Mensagens iniciais de WhatsApp por contexto */
export const whatsappMessages = {
  geral: "Olá! Conheci a Ótima Digital pelo site e gostaria de conversar sobre soluções digitais para minha empresa.",
  hero: "Olá! Vim pelo site da Ótima Digital e quero atrair mais clientes para minha empresa. Podemos conversar?",
  presenca: "Olá! Vim pelo site da Ótima Digital e quero melhorar a presença digital da minha empresa.",
  trafego: "Olá! Vim pelo site da Ótima Digital e tenho interesse em gestão de tráfego pago (Google Ads e Meta Ads).",
  sites: "Olá! Vim pelo site da Ótima Digital e tenho interesse em um site profissional para minha empresa.",
  loja: "Olá! Vim pelo site da Ótima Digital e tenho interesse em criar uma loja virtual.",
  gbp: "Olá! Vim pelo site da Ótima Digital e quero melhorar a presença da minha empresa no Google (Google Business Profile).",
  gls: "Olá! Vim pelo site da Ótima Digital e gostaria de saber se o Google Local Services está disponível para minha empresa.",
  social: "Olá! Vim pelo site da Ótima Digital e tenho interesse em social media e conteúdo estratégico.",
  sistemas: "Olá! Vim pelo site da Ótima Digital e gostaria de conversar sobre o desenvolvimento de um sistema, SaaS ou CRM sob medida.",
  projeto: "Olá! Vim pelo site da Ótima Digital e gostaria de descrever um projeto e entender como vocês podem ajudar.",
  mercados: "Olá! Vim pelo site da Ótima Digital e gostaria de falar sobre estratégia digital para minha empresa.",
  metodo: "Olá! Vim pelo site da Ótima Digital e quero conversar sobre o momento da minha empresa.",
  final: "Olá! Vim pelo site da Ótima Digital e gostaria de conversar sobre as oportunidades digitais para o meu negócio.",
} as const;

export type WhatsAppKey = keyof typeof whatsappMessages;

export type Service = {
  id: string;
  icon: "megaphone" | "monitor" | "map-pin" | "badge-check" | "sparkles" | "blocks";
  title: string;
  description: string;
  deliveries: string[];
  cta: string;
  whatsapp: WhatsAppKey;
};

export const services: Service[] = [
  {
    id: "trafego-pago",
    icon: "megaphone",
    title: "Gestão de tráfego pago",
    description:
      "Coloque sua empresa diante de pessoas com maior potencial de se tornarem clientes. Planejamos campanhas, acompanhamos os investimentos e otimizamos os anúncios com base nos dados.",
    deliveries: [
      "Google Ads: Pesquisa, Display e YouTube, conforme a estratégia",
      "Meta Ads: Instagram e Facebook",
      "Segmentação de público",
      "Monitoramento e otimização contínua",
      "Relatórios claros de investimento e desempenho",
    ],
    cta: "Quero anunciar com estratégia",
    whatsapp: "trafego",
  },
  {
    id: "sites",
    icon: "monitor",
    title: "Criação e otimização de sites",
    description:
      "Seu site deve trabalhar pela sua empresa 24 horas por dia. Desenvolvemos experiências digitais rápidas, responsivas, personalizadas e pensadas para transformar visitas em contatos.",
    deliveries: [
      "Landing pages",
      "Sites institucionais personalizados",
      "Lojas virtuais e e-commerce",
      "Design responsivo",
      "SEO técnico e otimização para mecanismos de busca",
      "Integração com WhatsApp e redes sociais",
      "Manutenção e suporte, conforme o projeto contratado",
    ],
    cta: "Quero um site profissional",
    whatsapp: "sites",
  },
  {
    id: "google-business-profile",
    icon: "map-pin",
    title: "Google Business Profile",
    description:
      "Ajude as pessoas a encontrarem sua empresa quando procuram produtos e serviços na sua região.",
    deliveries: [
      "Configuração e otimização do perfil",
      "Organização de informações e categorias",
      "Orientação para fotos e vídeos",
      "Publicações e atualizações periódicas",
      "Gestão de avaliações e reputação",
    ],
    cta: "Quero melhorar minha presença no Google",
    whatsapp: "gbp",
  },
  {
    id: "google-local-services",
    icon: "badge-check",
    title: "Google Local Services",
    description:
      "Estruture sua presença nos serviços locais do Google para alcançar pessoas que procuram atendimento na sua região, quando essa modalidade estiver disponível para sua categoria e localidade.",
    deliveries: [
      "Análise de elegibilidade",
      "Configuração e verificação da conta, quando aplicável",
      "Organização dos serviços e do perfil",
      "Orientação para acompanhamento de contatos e oportunidades",
    ],
    cta: "Consultar disponibilidade para minha empresa",
    whatsapp: "gls",
  },
  {
    id: "social-media",
    icon: "sparkles",
    title: "Social media e conteúdo estratégico",
    description:
      "Publicar por publicar não basta. Planejamos conteúdos que fortalecem a marca, aproximam a empresa do público e ajudam a construir autoridade.",
    deliveries: [
      "Planejamento editorial",
      "Criação de artes e vídeos",
      "Gestão de redes sociais",
      "Interação com o público, conforme o escopo contratado",
      "Monitoramento e análise de desempenho",
    ],
    cta: "Quero fortalecer minha marca",
    whatsapp: "social",
  },
  {
    id: "sistemas-sob-medida",
    icon: "blocks",
    title: "Sistemas e soluções digitais sob medida",
    description:
      "Quando as ferramentas prontas não atendem às necessidades da sua empresa, desenvolvemos soluções digitais personalizadas para seus processos e objetivos.",
    deliveries: [
      "Sistemas web personalizados",
      "Plataformas e produtos SaaS",
      "CRMs personalizados",
      "Ferramentas para gestão de processos",
      "Lojas e experiências digitais integradas",
      "Integrações e automações conforme os requisitos do projeto",
    ],
    cta: "Quero desenvolver uma solução",
    whatsapp: "sistemas",
  },
];

export const journeySteps = [
  { id: "busca", app: "Google", time: "agora", title: "Pesquisa no Google", text: "Pesquisou pelo serviço que precisa" },
  { id: "mapa", app: "Google Maps", time: "há 1 min", title: "Empresa encontrada no mapa", text: "Comparou as empresas da região" },
  { id: "avaliacoes", app: "Avaliações", time: "há 2 min", title: "Avaliações consultadas", text: "Leu o que outras pessoas dizem" },
  { id: "social", app: "Instagram", time: "há 3 min", title: "Perfil social visitado", text: "Conferiu o perfil da empresa" },
  { id: "site", app: "Site", time: "há 4 min", title: "Site acessado", text: "Procurou um site que transmita confiança" },
  { id: "contato", app: "WhatsApp", time: "há 5 min", title: "Contato iniciado", text: "Mandou a primeira mensagem" },
] as const;

export const integratedNodes = [
  { id: "anuncios", label: "Anúncios", role: "Um anúncio pode gerar a visita de quem tem mais chance de comprar." },
  { id: "local", label: "Pesquisa local", role: "O Google pode facilitar a descoberta por quem procura na sua região." },
  { id: "site", label: "Site", role: "O site pode transmitir confiança e conduzir o visitante até o contato." },
  { id: "conteudo", label: "Conteúdo", role: "O conteúdo pode fortalecer a marca e construir autoridade." },
  { id: "contato", label: "Contato comercial", role: "Uma boa experiência de contato pode aproximar a decisão de compra." },
  { id: "sistemas", label: "Sistemas", role: "Quando necessário, sistemas personalizados organizam e acompanham as oportunidades." },
] as const;

export const processSteps = [
  {
    n: "01",
    title: "Diagnóstico",
    text: "Analisamos como sua empresa aparece no Google, nas redes sociais e no site. Também observamos o cenário competitivo e as oportunidades de melhoria.",
  },
  {
    n: "02",
    title: "Estratégia",
    text: "Definimos prioridades, público, canais, objetivos e indicadores que ajudarão a orientar as decisões.",
  },
  {
    n: "03",
    title: "Execução",
    text: "Colocamos as ações planejadas em prática, integrando campanhas, perfis, site e conteúdo de acordo com as necessidades do negócio.",
  },
  {
    n: "04",
    title: "Acompanhamento",
    text: "Monitoramos os indicadores, apresentamos relatórios claros e ajustamos a estratégia com base nos dados observados.",
  },
] as const;

export const values = [
  { icon: "compass", title: "Planejamento estratégico", text: "Nenhuma ação começa sem um objetivo definido." },
  { icon: "lightbulb", title: "Criatividade com propósito", text: "Cada peça, campanha ou experiência precisa cumprir uma função." },
  { icon: "line-chart", title: "Foco em resultado", text: "Acompanhamos os números, identificamos oportunidades e ajustamos o que for necessário." },
  { icon: "handshake", title: "Parceria de verdade", text: "Você acompanha o trabalho e entende as decisões tomadas ao longo do projeto." },
] as const;

export const faq = [
  {
    q: "Quais serviços a Ótima Digital oferece?",
    a: "Gestão de tráfego pago (Google Ads e Meta Ads), criação e otimização de sites e lojas virtuais, Google Business Profile, Google Local Services, social media e conteúdo estratégico, além de sistemas, plataformas SaaS e CRMs sob medida. Os serviços podem ser contratados de forma combinada ou separada, conforme as necessidades e o escopo de cada empresa.",
  },
  {
    q: "A Ótima Digital atende empresas no Brasil e nos Estados Unidos?",
    a: "Sim. Atendemos empresas nos dois países, com planejamento, execução e acompanhamento adaptados ao público, ao comportamento de busca e às características de cada mercado.",
  },
  {
    q: "Como funciona a gestão de tráfego pago?",
    a: "Começamos entendendo o negócio, o público e os objetivos. Em seguida planejamos as campanhas, configuramos os anúncios nas plataformas adequadas e acompanhamos os resultados de perto, ajustando segmentação, anúncios e investimento com base nos dados. Você recebe relatórios claros do que foi investido e de como as campanhas estão performando.",
  },
  {
    q: "Preciso ter um site para anunciar?",
    a: "Nem sempre. Algumas campanhas podem levar o público diretamente para o WhatsApp, para o perfil da empresa ou para uma landing page. Na maioria dos casos, porém, um site ou uma página bem estruturada ajuda a transmitir confiança e a aproveitar melhor o investimento. Avaliamos isso juntos no diagnóstico.",
  },
  {
    q: "A Ótima Digital cria sites personalizados?",
    a: "Sim. Desenvolvemos landing pages, sites institucionais e lojas virtuais personalizados, responsivos e preparados para mecanismos de busca, com integração com WhatsApp e redes sociais.",
  },
  {
    q: "Vocês desenvolvem sistemas, SaaS e CRMs?",
    a: "Sim. Quando as ferramentas prontas não atendem, desenvolvemos sistemas web, plataformas SaaS, CRMs e ferramentas de gestão sob medida, de acordo com os processos e objetivos de cada projeto.",
  },
  {
    q: "Como funciona o início de um projeto?",
    a: "Cada projeto começa com uma conversa para entender o momento da empresa e as necessidades. A partir disso definimos juntos um escopo e uma proposta. Só depois disso começa a execução.",
  },
  {
    q: "Como são acompanhados os resultados?",
    a: "Definimos os indicadores na etapa de estratégia e acompanhamos esses números ao longo do projeto, com relatórios claros e reuniões de alinhamento. Os resultados dependem de fatores como mercado, oferta, investimento e execução, por isso ajustamos a estratégia com base no que os dados mostram.",
  },
  {
    q: "O investimento em anúncios está incluído no serviço?",
    a: "Em geral, não. O orçamento de mídia (o valor pago diretamente às plataformas, como Google e Meta) é separado da remuneração pelo serviço da agência, salvo quando uma proposta estabelecer outra condição.",
  },
  {
    q: "Como posso solicitar uma proposta?",
    a: "Fale com a gente pelo WhatsApp, pelo formulário desta página ou pelo e-mail contato@otimadigitalagencia.com. Vamos entender o que sua empresa precisa e preparar uma proposta de acordo com o escopo.",
  },
] as const;
