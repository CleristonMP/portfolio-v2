# M3-02 — Hero — handoff para revisão

19/10/2026. **Aguardando revisão própria do Work; critérios manuais aprovados posteriormente pelo responsável em 20/10/2026. Sem staging, commit ou push. M3 não concluído.**

## Entrada, fontes e arquivos

Git observado localmente: origin `https://github.com/CleristonMP/portfolio-v2.git`, branch inicial `feat/m3-01-header`, HEAD `34743627415ffa4476de92cc64fba59bb9200df6`. Nenhuma alteração versionável pendente; README aparece no status por finais de linha, mas seu diff é vazio. Staging vazio. Criada `feat/m3-02-hero` a partir desse HEAD. Nenhum AGENTS.md encontrado no repositório ou nos ancestrais C:/Projects e C:/. Sem consulta remota adicional.

M3-01 foi revisada/aprovada pelo Work e commitada; commit/push bem-sucedido da branch anterior consta da conversa. Esse desfecho supera os registros anteriores de espera preservados no handoff M3-01. Plano M3 aprovado em `6f7a8bc`; aprovação do plano e da tarefa anterior não autorizam o presente diff.

Lidos DEVELOPMENT_WORKFLOW.md, PROJECT_STATUS.md, MILESTONE_3_PLAN.md, PRD v2.3 §§3/4.2, DESIGN_TOKENS.md e M3_01_HANDOFF.md. Consultados code.html, DESIGN.md e screen.png de ambos os ZIPs Stitch: cópias em `.m2-review/m3-01/references/`, conferidas byte a byte contra os seis arquivos dos ZIPs originais. Screens web 448×1600 e mobile 151×1600 são referências qualitativas reduzidas, não equivalência pixel a pixel em 1280/390. Originais preservados.

Arquivos do diff:

- `src/styles.css`: composição do hero e seletores de seus descendentes; ajuste mobile no breakpoint existente de 700 px. Nenhuma regra do header ou de outras seções alterada.
- `PROJECT_STATUS.md`: desfecho aprovado/commitado M3-01, entrada/estado M3-02 e pendências, mantendo histórico.
- `docs/M3_02_HANDOFF.md`: esta entrega.

HeroSection.tsx, traduções, dados, contratos, tokens, configurações, dependências, fontes, assets e base path não foram alterados. Não foram criados componentes ou controles novos: a composição existente foi suficiente.

## Comparação visual e decisões

**Tracking e escala:** HTML web usa text-7xl/md:text-9xl, tracking-tighter e line-height 0,9; mobile text-5xl, tracking-tight, leading-tight. DESIGN.md recomenda -0,02em; starter usava -0,07em. Aplicados -0,035em desktop e -0,025em mobile, mantendo Manrope 800, aproximando a recomendação sem igualar escalas conflitantes. Desktop clamp(52px,7.5vw,96px), line-height 1,06; mobile clamp(40px,10vw,64px), line-height 1,12. A copy atual é mais longa que Full Stack/Developer; forçar 128 px/0,9 do export cortaria ou comprimiria a mensagem. Preservada a quebra existente entre introdução e destaque; text-wrap balance equilibra quebras naturais adicionais. Em PT mobile, destaque ocupa duas linhas; nenhuma palavra é truncada. Texto de apoio 18/16 px, line-height 1,75 e largura máxima 640 px favorecem leitura.

**Luz e superfícies:** mobile export usa halo primary/10 com blur 100 px; web usa hero-gradient e imagem técnica a 20% de opacidade. Sem introduzir/migrar mídia, a luz agora usa radiais limitadas à área do hero: ambient-hero/16% e secondary/4%, sem blur que exija clipping. Base dark e tokens canônicos intactos. Eyebrow recebe superfície container/60%, borda primary/16%, tipografia menor e espaçamento ajustado para o cargo completo caber/quebrar em 320 px. O ponto permanece estático e não representa disponibilidade; copy continua exatamente a existente, sem Available for Projects.

**Espaço negativo:** web centra a composição e usa min-h-screen; mobile usa min-height 707 e py-24. DESIGN.md mistura nomes 20/24 com medidas 7rem/8,5rem incompatíveis com utilitários dos HTMLs, conforme DESIGN_TOKENS.md. Aplicadas medidas explícitas: min-height 760/690 px, padding superior 112/88 px e inferior 48/32 px, título com margens 32/28 px desktop e 28/24 px mobile. Hero pode crescer com o conteúdo. Removido overflow hidden preexistente; cue inferior passa de absoluto para fluxo com margin-top 96/64 px e wrap. Assim não sobrepõe CTAs em telas estreitas/alturas curtas. Demais seções podem iniciar mais abaixo pela nova altura do hero; não houve mudança em suas próprias dimensões/estilos.

**CTAs:** preservados os dois destinos/copy, mesmo que cada export demonstre só uma ação. Desktop lado a lado com wrap seguro; mobile empilhados. Altura mínima 56 px, padding 16×28 px, gap 16 px e peso 700. Principal mantém gradiente canônico 135° primary → primary-container, prevalecendo sobre primary-dim do DESIGN e direção divergente do HTML mobile. Sombra reduzida para luz difusa de 40 px/4% conforme DESIGN.md, sem sombra preta. Ghost usa superfície translúcida e borda discreta. Seletores são `.hero .btn-*`; estilos compartilhados não receberam mudanças que alcancem outras seções.

**Independência de efeitos:** não há animação, transição geométrica, atraso ou ocultação de conteúdo no hero. Luz é decoração absoluta pointer-events none; textos/ações estão no fluxo, com camada própria quando necessário. Gradiente do título tem fallback ciano para navegadores sem background-clip:text. Fontes e gradiente ciano/violeta do starter mantidos; conteúdo não espera animação para aparecer. Regra global de reduced motion e foco visível original intactos. Não foi feita emulação de remoção de todos os efeitos no navegador nem nova auditoria de contraste completa.

## Evidências e procedimento reproduzível

Preview Vite de desenvolvimento `http://127.0.0.1:4190/`, iniciado com Node direto: `node node_modules/vite/bin/vite.js --host 127.0.0.1 --port 4190 --strictPort`. Browser Chromium integrado; viewport explícito com altura 844 px e scrollbar vertical de 15 px. Medidas obtidas por leitura DOM, sem mutar estilos/dados para produzir sucesso. Restaurado override de viewport ao final. Isso não equivale a zoom real.

Todos os arquivos locais estão em `.m2-review/m3-02/`, ignorados e fora do staging:

- `before-{390,1280}-{pt-BR,en}.png`, `before.json`: quatro capturas/medidas antes de editar.
- `after-{320,390,700,701,768,1280,1920}-{pt-BR,en}.png`, `matrix.json`: capturas posteriores e matriz completa. Oito capturas antes/depois de 390/1280 disponíveis.
- `comparison.json`: copy e retângulos do header idênticos antes/depois em 390/1280 PT/EN; largura/altura das demais seções e footer idênticas, apenas sua posição vertical acompanha a altura do hero.
- `focus-390-{pt-BR,en}.png`, `smoke.json`: teclado, foco, destinos, idioma, metadados e transições.
- `transition-followup.json`: observação adicional EN após estabilização dos eventos de resize; o registro inicial com leitura transitória de body continua preservado.

Para repetir: abrir preview, selecionar idioma pelo controle existente, aplicar cada viewport, conferir `document.documentElement.scrollWidth === document.documentElement.clientWidth`, retângulos de textos/CTAs e links/botões do header dentro da largura útil, sem interseções; conferir um h1. Fazer capturas sem alterar estilos. Repetir Tab/Shift+Tab/Enter nos CTAs e resize com menu aberto. Não usar jsdom como prova de layout/histórico/zoom.

| Viewport | clientWidth = scrollWidth PT-BR | clientWidth = scrollWidth EN |
| --- | --- | --- |
| 320 | 305 | 305 |
| 390 | 375 | 375 |
| 699 | 684 | 684 |
| 700 | 685 | 685 |
| 701 | 686 | 686 |
| 720 | 705 | 705 |
| 767 | 752 | 752 |
| 768 | 753 | 753 |
| 1000 | 985 | 985 |
| 1001 | 986 | 986 |
| 1280 | 1265 | 1265 |
| 1920 | 1905 | 1905 |

24/24 combinações sem overflow horizontal, sem cortes internos dos textos/CTAs e sem sobreposição entre eyebrow, h1, parágrafo, CTAs e cue. Header também medido sem sobreposição/cortes. 699/700/701 cobrem o breakpoint afetado de 700; 767/768 e 1000/1001 são verificações adicionais das transições existentes. Um único h1 em todas as medidas; cargo Full Stack & Mobile existente preservado nos dois idiomas. Capturas 320/390 PT e 1280 EN inspecionadas visualmente, sem alegar equivalência pixel a pixel.

Smoke PT e EN: idioma persistido após reload e html lang/título/meta description coerentes; skip link foca main; Tab após controles alcança CTA principal, Shift+Tab volta ao menu, próximo Tab alcança CTA secundário; outline solid 3 px visível. Enter navega nativamente a #contact/#projects com foco no destino; Back restaura hash anterior. No desktop, Tab também percorre CTAs. Em 700 px, Space abre menu e foca primeiro link, Escape fecha e retorna ao botão; Enter abre, mudança para 701 fecha mantendo link desktop focado. Retorno desktop → 700 recupera foco no botão. Primeira sequência EN leu body durante resize rápido; repetição com observação após cada resize 700 → 701 → 768 → 700 confirmou foco final em Open menu, sem alteração de produção ou descarte da evidência inicial.

## Critérios individuais

1. Comparação tracking/escala/luz/espaço e conflitos: atendido, decisões acima.
2. Antes/depois 390/1280 PT/EN: atendido, oito capturas identificadas.
3. Matriz cinco larguras PT/EN sem overflow/corte/sobreposição: atendido; expandida para 24 casos.
4. Imediatamente antes/depois de breakpoints: atendido em 699/700/701; header adicional 767/768, 1000/1001.
5. CTAs por teclado/foco/destinos: atendido no navegador PT/EN; h1/#home/tabIndex originais preservados no componente inalterado.
6. Legibilidade sem dependência de animação e cores/fontes: atendido por implementação estática e smoke inicial; nenhum efeito temporal necessário para leitura. Limites: não foi realizada auditoria WCAG final nem emulação de supressão de todos os backgrounds.
7. Zoom real 200% e reduced motion ativo: **realizados manualmente e aprovados pelo responsável em 20/10/2026**, conforme registro posterior abaixo. Histórico anterior à confirmação: Tentativa via skill Computer Use encontrou navegador Chrome, mas acesso ao estado da janela expirou na autorização do app (`Computer Use app approval timed out`); nenhum zoom ou emulação de preferência foi aplicado. Navegador integrado oferece viewport/visibilidade, sem controle documentado desses recursos. Aprovação manual de M3-01 é histórica e não cobre M3-02. Requer validação manual própria deste diff; não substituir por viewport, regra CSS ou resultado jsdom.
8. Header aprovado preservado: atendido no escopo medido e smoke; CSS/lógica do header não alterados, retângulos anteriores idênticos e transição 700–768 validada PT/EN.

## Confirmação manual posterior — 20/10/2026

O responsável declarou nesta conversa: “considere zoom real 200% e reduced motion ativo como aprovados, feitos manualmente”. Ambos os critérios de M3-02 ficam registrados como realizados manualmente e aprovados pelo responsável para esta entrega. A pendência descrita acima foi superada por essa confirmação; o diagnóstico e as evidências da tentativa automatizada permanecem históricos, sem alteração.

Codex não executou nem observou a validação manual. Navegador, larguras, idiomas, passos e capturas adicionais não foram informados e não são presumidos. Nenhum resultado automatizado novo é alegado; as aprovações de M3-01 não foram reutilizadas. Essa confirmação cobre os dois critérios manuais, sem substituir a revisão do código pelo Work ou autorizar staging/commit/push. Diff e manifesto de implementação regenerados após esta atualização documental; não são registro de aprovação.

## Comandos/resultados

Node 22.16.0/npm 10.9.2 direto em `C:\Program Files\nodejs`; PATH ajustado só no processo para evitar shim Volta, sem alteração global. Nenhuma instalação necessária.

- `npm run typecheck`: passou.
- `npm run lint`: passou, zero warnings.
- `npm run format`: passou; README já normalizado permanece sem diff de conteúdo. `npm run format:check` também passou após a atualização documental.
- `npm test`: 3 arquivos, 48 testes passaram; nenhum teste/asserção alterado.
- `npm run verify`: conteúdo e i18n passaram, mantendo IDs/links seguros/paridade/persistência/falhas de storage/metadados.
- `npm run build`: passou, Vite 6.4.4, 1597 módulos transformados.
- `git diff --check`: passou.

Checks não comprovam zoom, layout ou preferência ativa. Build alternativo não exigido: nenhum caminho, import de asset ou base path afetado; ambos os caminhos existentes preservados, sem alegar repetição da matriz /portfolio-v2/ de M2-08. Nenhuma CI remota, publicação ou push executado.

## Revisão e limites

Diff acumulado completo: `.workflow/m3-02-review.patch`; manifesto próprio: `.workflow/m3-02-implementation-snapshot.json`. Manifesto de implementação não é aprovação. Work deve acessar esta árvore ou snapshot fiel incluindo novo handoff, com evidências locais disponíveis; `.workflow/`/`.m2-review/` não entram no commit.

M3-02 aguarda revisão própria do Work; os dois critérios manuais foram aprovados pelo responsável, sem autoaprovação integral da entrega. M3-03 e posteriores não iniciadas. Sem alterações editoriais, claims, cases, projetos, formulário, mídias, base path, dependências, PRD, exports, portfólio antigo ou main. Gates históricos de segurança/contatos/permissões/publicação permanecem.

Conventional Commit sugerido: `style(hero): refine responsive typography and ambient composition`.
