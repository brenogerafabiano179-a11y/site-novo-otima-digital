# DESIGN.md — Ótima Digital

## Direção
Tecnológica, premium e espacial. O universo é a linguagem estética; a estratégia digital é o assunto. Seções escuras cinematográficas alternam com seções claras de leitura confortável.

## Cores (papéis)
| Papel | Hex |
|---|---|
| Fundo principal escuro | #050C1C |
| Fundo escuro secundário | #060E22 |
| Cartão escuro | #0A1630 |
| Fundo claro | #ECEEF1 |
| Cartão claro | #FBFCFE |
| Destaque principal | #2F86E8 |
| Destaque vivo | #3A8EF0 |
| Ciano | #3FD5F0 |
| Degradê EUA | #2EE6C8 → #1FA3E0 |
| Degradê Brasil | #1FB8E6 → #2563EB |
| Título em fundo claro | #16204A |
| Título alternativo | #22256B |
| Texto em fundo claro | #5B6472 |
| Texto em fundo escuro | #C8D4E6 |
| Texto secundário escuro | #8FB0DA |
| Etiquetas (contorno) | #FF8A5B, #F062A8, #FFC24B |

Linha-assinatura (3 px, com moderação): #3B35D9 → #8E3CF2 → #FF6B6B → #FFC24B → #3FD5F0 → transparente.

## Tipografia
- Montserrat 800/900, caixa alta: marca e grandes títulos (`.display`).
- Montserrat 300–800: todo o resto. Rótulos em 300, caixa alta, espaçamento 0.32em (`.eyebrow`).
- Corpo 17px, entrelinha 1.6.

## Forma
- Cartões: raio 28px; destaques 22px; botões em pílula.
- Sombras só em elementos que flutuam (cartões, modais, notificações).

## Movimento
- Entradas: opacidade + 24px, uma vez, ao entrar na tela.
- Assinatura: cristal com órbitas e inclinação pelo cursor, campo de estrelas com paralaxe.
- Só `transform` e `opacity`. `prefers-reduced-motion` desliga deriva, órbitas e entradas.

## Não fazer
Fotos de pessoas ou equipes; depoimentos, números ou logos de clientes inventados; neon excessivo; texto sobre imagem sem véu.
