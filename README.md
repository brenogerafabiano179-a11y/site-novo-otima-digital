# Ótima Digital — site institucional

Site da **Ótima Digital** (Ótima Soluções Empresariais Digitais): estratégia digital, tráfego pago, sites, lojas virtuais e sistemas sob medida para empresas no Brasil e nos Estados Unidos.

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript (modo estrito)
- Tailwind CSS 4 (tokens da marca em `src/app/globals.css`)
- Motion (`motion/react`) para animações
- lucide-react para ícones
- Fontes locais em `src/fonts` (Montserrat 300–900, licença OFL) carregadas com `next/font/local`, sem chamada ao Google Fonts

Sem backend, banco de dados ou autenticação: não são necessários para um site institucional.

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run build && npm start
```

Versão estática (pasta `out/`, para hospedagem simples):

```bash
STATIC_EXPORT=1 npm run build
```

## Estrutura

```
src/
  app/
    layout.tsx          metadados, Open Graph, JSON-LD, fontes
    page.tsx            página inicial (seções na ordem)
    privacidade/        Política de Privacidade
    termos/             Termos de Uso
    sitemap.ts, robots.ts, icon.png, apple-icon.png
  components/
    Header, Hero, SearchJourney, Services, IntegratedStrategy,
    Markets, Process, CustomSolutions, Values, FAQ, ContactCTA,
    ContactForm, Footer, WhatsAppButton, LegalPage
    ui/ Brand (logo), Reveal, SectionHeading, icons
  lib/
    site.ts             marca, contatos, navegação, serviços, FAQ, mensagens de WhatsApp
    whatsapp.ts         gerador de links wa.me com mensagem codificada
public/
  logo-otima-3d.webp    símbolo 3D (recortado do material da marca)
  mapa-americas.svg     mapa vetorial leve das Américas
  hero/                 primeira dobra: mapa das Américas (mapa-americas-hero.webp)
                        e fotos dos cartões de negócios (*.webp)
  nebula.webp, horizonte.webp, og.jpg
```

Todo texto institucional, contato e mensagem de WhatsApp fica em `src/lib/site.ts`.

## Formulário de contato

- **Sem configuração:** ao enviar, o formulário valida os campos e abre o WhatsApp (+1 407 403-7903) com a mensagem preenchida. Nada é simulado: o site informa que abriu o WhatsApp.
- **Com envio direto:** defina `NEXT_PUBLIC_FORM_ENDPOINT` (veja `.env.example`) com um endpoint que aceite POST JSON (ex.: Formspree, função serverless, webhook de CRM). O formulário passa a enviar os dados e só mostra "Mensagem enviada" se a resposta for de sucesso.

Campos enviados: `nome`, `empresa`, `contato`, `servico`, `mensagem`, `consentimento`, `origem`.

## Deploy na Vercel

1. Suba o projeto para um repositório no GitHub.
2. Na Vercel: **Add New → Project**, importe o repositório (framework detectado: Next.js).
3. Opcional: em **Settings → Environment Variables**, adicione `NEXT_PUBLIC_FORM_ENDPOINT`.
4. Em **Domains**, conecte `otimadigitalagencia.com` e `www.otimadigitalagencia.com`.

## Pendências e conteúdo oficial

- **Fotos dos cartões do mapa (primeira dobra):** os seis cartões usam as fotos enviadas pelo cliente, em `public/hero/`. Para trocar uma foto, salve-a em `public/hero/` e troque o campo `img` de cada item em `businesses`, no início de `src/components/Hero.tsx`. Proporção recomendada 3:2, cerca de 600×400 px.

- **Logo:** `public/logo-otima-3d.webp` foi recortada da apresentação da marca. Se houver o arquivo original (PNG/SVG em alta), substitua mantendo o nome; o componente `src/components/ui/Brand.tsx` centraliza o uso.
- **Formulário:** sem `NEXT_PUBLIC_FORM_ENDPOINT`, o envio é pelo WhatsApp.
- **Analytics/pixels:** não instalados. Se forem adicionados, é preciso um banner de consentimento e atualizar a Política de Privacidade.
- **Textos legais:** Política de Privacidade e Termos são modelos responsáveis, sem CNPJ ou endereço. Revise com um profissional jurídico antes de publicar.
- **Dependências:** `npm audit` aponta avisos no `postcss` interno do Next 15 (ferramenta de build) cuja correção exige Next 16. Não afetam o site publicado; avalie a atualização no próximo ciclo.
