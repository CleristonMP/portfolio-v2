# Tokens de design — M2-04

Data: 14/10/2026. Fonte executável única: `src/styles/tokens.css`. Este documento registra valores e decisões; não gera código. M2-04 aguarda revisão própria do Work.

## Precedência e uso

PRD v2.3 §16.2 resolve os conflitos dos exports oficiais Stitch (DESIGN.md, code.html e screen.png dos dois ZIPs). Para valores não fechados pelo PRD, preservar os papéis atuais do starter e registrar os refinamentos de M3. Figma é referência histórica opcional, sem edição ou sincronização.

As cores são canais RGB sem alpha, definidos uma vez como custom properties. Exemplo: `--color-primary: 105 218 255` corresponde a #69daff. CSS consome `rgb(var(--color-primary))` ou `rgb(var(--color-primary) / 0.16)`; Tailwind usa `rgb(var(--color-primary) / <alpha-value>)`, permitindo modificadores como `bg-primary/50`. Não usar `var(--color-primary)` diretamente como uma cor: o valor contém canais, não uma função CSS completa.

`src/styles.css` importa tokens antes das diretivas Tailwind. O tema preserva os aliases existentes surface/surfaceLow/surfaceHigh/cyan/violet/ink e acrescenta nomes semânticos background/primary/secondary/primaryContainer/surfaceContainer, todos referenciando a mesma fonte. surface é o alias histórico do fundo; surfaceHigh corresponde à superfície mais elevada #22262f. Não houve conversão da interface para utilitários, geradores ou dependências novas.

## Inventário de cores e papéis

Inventário anterior: 353 declarações CSS, 36 valores de cor distintos contando transparências pelos seus canais de origem, e duas famílias tipográficas. Os sete valores canônicos já estavam corretos no starter, mas duplicados em CSS/Tailwind. #161a21 aparece também nos HTMLs como surface-container; os demais tons complementares abaixo são preservados sem promovê-los a novos valores oficiais do PRD.

| Variável | Equivalente hexadecimal | Origem / decisão |
|---|---|---|
| `--color-background` | `#0b0e14` | Canônico PRD §16.2 |
| `--color-primary` | `#69daff` | Canônico PRD §16.2 |
| `--color-secondary` | `#ac89ff` | Canônico PRD §16.2 |
| `--color-primary-container` | `#00cffc` | Canônico PRD §16.2 |
| `--color-surface-low` | `#10131a` | Canônico PRD §16.2 |
| `--color-surface-highest` | `#22262f` | Canônico PRD §16.2 |
| `--color-text-primary` | `#ecedf6` | Canônico PRD §16.2 |
| `--color-surface-container` | `#161a21` | Superfície dos HTMLs Stitch |
| `--color-text-navigation` | `#c4c6d0` | Papel específico do starter, preservado |
| `--color-border-control` | `#343842` | Papel específico do starter, preservado |
| `--color-text-control` | `#d3d8e2` | Papel específico do starter, preservado |
| `--color-text-hero` | `#abb0bf` | Papel específico do starter, preservado |
| `--color-text-on-cta` | `#042a34` | Papel específico do starter, preservado |
| `--color-text-ghost-button` | `#d9dce4` | Papel específico do starter, preservado |
| `--color-text-scroll-cue` | `#68717f` | Papel específico do starter, preservado |
| `--color-text-section-lead` | `#a4a9b7` | Papel específico do starter, preservado |
| `--color-surface-card-hover` | `#1b2029` | Papel específico do starter, preservado |
| `--color-surface-image` | `#252934` | Papel específico do starter, preservado |
| `--color-text-project` | `#adb2be` | Papel específico do starter, preservado |
| `--color-text-tag` | `#b3b8c2` | Papel específico do starter, preservado |
| `--color-text-hint` | `#777e8f` | Papel específico do starter, preservado |
| `--color-text-skills-lead` | `#a5aabb` | Papel específico do starter, preservado |
| `--color-text-skill` | `#dce0e8` | Papel específico do starter, preservado |
| `--color-surface-about` | `#0d1118` | Papel específico do starter, preservado |
| `--color-text-about` | `#d8dce6` | Papel específico do starter, preservado |
| `--color-text-method` | `#b6bec9` | Papel específico do starter, preservado |
| `--color-surface-course` | `#1a1e26` | Papel específico do starter, preservado |
| `--color-text-course` | `#a3aab8` | Papel específico do starter, preservado |
| `--color-icon-course` | `#767f8e` | Papel específico do starter, preservado |
| `--color-text-contact-lead` | `#b2b6c2` | Papel específico do starter, preservado |
| `--color-text-contact-panel` | `#bfc4d0` | Papel específico do starter, preservado |
| `--color-surface-footer` | `#090c11` | Papel específico do starter, preservado |
| `--color-text-footer` | `#737986` | Papel específico do starter, preservado |
| `--color-neutral-white` | `#ffffff` | Papel específico do starter, preservado |
| `--color-ambient-hero` | `#3d76b5` | Papel específico do starter, preservado |
| `--color-ambient-contact` | `#2a4f70` | Papel específico do starter, preservado |

Tons text-* mantêm a cor exata de cada nível editorial; surface-* distingue os planos existentes; ambient-* preserva as luzes difusas. `neutral-white` mantém somente bordas translúcidas e o ícone do menu já branco, não substitui o texto principal #ecedf6. A recomendação Stitch de evitar texto branco integral continua registrada; rever a iconografia em M3, sem ajuste neste lote.

## Transparências, superfícies e gradientes

| Papel | Fonte / alpha preservado |
|---|---|
| Header glass | background / 0,8; blur 20 px; borda neutral-white / 0,055 |
| Badge de número do projeto | background / 0,75; blur 12 px |
| Contorno do CTA de contato | primary / 0,34 |
| Eyebrow | borda primary / 0,16; fundo primary / 0,05 |
| Glow do CTA | primary / 0,09; sombra 0 14px 42px |
| Borda do botão ghost | neutral-white / 0,15 |
| Luz ambiente do hero | ambient-hero / 0,13, transparente em 67%; blur 35 px |
| Luz ambiente de contato | ambient-contact / 0,14, transparente em 50% |
| CTA principal | linear-gradient(135deg, primary, primary-container): #69daff → #00cffc |
| Texto do hero | linear-gradient(115deg, primary 12%, secondary 93%); efeito próprio do starter preservado |

Fundo #0b0e14; projetos/formação #10131a; cards, skills e painel #161a21; tags/hover de skills #22262f. Sobre, cursos, hover de projeto, placeholder de imagem e footer mantêm os planos específicos inventariados. Nenhum papel visual foi trocado ou sua opacidade unificada por aproximação.

## Tipografia e carregamento

`--font-display: Manrope, sans-serif`; `--font-body: Inter, sans-serif`. Brand e títulos dos cards/cursos/seções consomem display; corpo, botões e labels herdam body. Tailwind display/body/label referencia essas mesmas variáveis. Google Fonts, preconnects, pesos e display=swap em index.html permanecem intactos; não houve migração ou download de fontes.

| Papel no starter | Tamanho / peso / tracking preservado |
|---|---|
| Hero desktop | clamp(54px, 7vw, 100px); 800; line-height 1,07; -0,07em |
| Hero mobile | clamp(43px, 10vw, 70px); 800; mesmo tracking |
| H2 de seções | clamp(35px, 4.6vw, 57px); 800; line-height 1,12; -0,055em |
| Brand | 17px desktop / 15px mobile; 800; -0,045em |
| Projeto h3 | 24px; 800; -0,04em |
| Curso h3 / índice | 17px / 21px; pesos 700 / 800 |
| Corpo hero | 17px desktop / 15px mobile; line-height 1,85 |
| Corpo sobre | 19px desktop / 17px mobile; line-height 1,85 |
| Labels | 9–12px conforme papel; eyebrow/kicker/small-label 800 e 0,23em |

Não foi aplicada uma nova escala tipográfica. Os textos menores e contrastes secundários precisam da avaliação de legibilidade/acessibilidade posterior; igualdade com a baseline não equivale a conformidade WCAG.

## Espaçamento, geometria e raios preservados

Não se criou uma escala artificial para os valores específicos da composição. Estes continuam declarados nos seletores existentes; M2-04 centraliza cores/fontes e documenta a geometria.

| Papel | Desktop / mobile |
|---|---|
| Container | max-width 1240px; padding horizontal 30px / 24px |
| Header | altura 80px / 74px; scroll-padding-top 100px |
| Hero | min-height 720px / 690px |
| Seções | padding vertical 120px / 90px; contato 155px no desktop, 90px no mobile |
| Grids | projetos: gap 24px, 3 colunas → 2 até 1000px → 1 até 700px; skills: gap 16px, 6 → 3 → 2; cursos: gap 16px, 2 → 1 |
| About / contato | gap 100px / 80px no desktop; 30px no mobile |
| Cards | projeto: raio 22px, conteúdo padding 26px, imagem altura 214px; skills: raio 18px; curso: raio 16px e padding 26px / 21px; painel contato: raio 25px e padding 35px |
| Pills e controles | CTA/eyebrow raio 50px; contato 30px; idioma/número/tag 20px |
| CTA | padding 17px 26px; gap 18px; ações gap 14px e margin-top 35px |

## Movimento e foco

Preservados: navegação color 0,2s; skill background 0,2s; projeto transform/background 0,25s (ease no transform, easing padrão no fundo); hover do projeto translateY(-6px); scroll suave. Os exports apontam aproximadamente 400ms ease-out/Expo, mas aplicar isso agora mudaria a experiência. Revisar a harmonização em M3, respeitando acessibilidade.

A media query `prefers-reduced-motion: reduce` mantém scroll-behavior auto e transition/animation none !important para *, *::before e *::after. Seu bloco é idêntico à baseline e está presente no CSS compilado. Foco visível continua com outline primary solid 3px e offset 4px; observado por Tab no navegador.

## Conflitos e pendências de M3

| Divergência | Precedência aplicada neste lote |
|---|---|
| DESIGN.md §2 diz primary → primary-container; §5 diz primary-dim; HTML define primary-dim #00c0ea | PRD §16.2 fecha CTA #69daff → #00cffc a 135 graus; starter já correto, mantido. |
| DESIGN.md chama xl de 1,5rem; configuração dos HTMLs chama xl de 0,75rem; imagens internas pedidas a 0,75rem | PRD indica cards aproximadamente 1,5rem. Starter tem 22px e imagens sem raio interno independente; preservar composição e registrar ajuste fino em M3. |
| DESIGN.md recomenda tracking -0,02em; starter usa até -0,07em; HTML mistura tracking-tight/tighter | Manrope/Inter canônicas aplicadas via variável, tracking existente mantido; avaliar ajuste com conteúdo real em M3. |
| DESIGN.md descreve níveis de espaçamento 20/24 como 7rem/8,5rem; HTML usa utilitários py-24/py-32 | Não interpretar números como escala fechada coerente. Preservar 120/90/155px do starter e documentar composição. |
| Glass descrito como surface-variant 40% / surface-container 60%; HTML mistura slate/base e starter usa base 80% | Transparência, blur e contraste do starter preservados; harmonização visual posterior. |
| Movimento recomendado 400ms ease-out; HTML usa 400/500/700ms; starter 200/250ms | Preservar comportamento nesta centralização; M3 decide refinamentos. |
| DESIGN.md veta divisórias e texto branco puro; starter mantém bordas ghost e ícone menu branco | Preservar efeitos existentes; foco/contraste e legibilidade prevalecem sobre efeitos decorativos na revisão final. |

Comparação inicial em 390 e 1280 px: paleta dark/ciano/violeta, Manrope/Inter, camadas e CTA preservados. Antes/depois mantêm hero, grades e todas as seções com os mesmos estilos computados e dimensões amostrados. As prévias Stitch são reduzidas (448×1600 web, 151×1600 mobile), portanto a comparação é qualitativa, não pixel a pixel em 1280/390. Continuam as diferenças anteriores: hero/copy do starter, composição de projetos, fotos reais, cursos inexistentes nos exports, sobre sem retrato e contato sem formulário; nenhuma dessas diferenças foi alterada por M2-04. Evidências e limites detalhados em docs/M2_04_HANDOFF.md.
