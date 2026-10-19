# M3-01 — Header — handoff para revisão

Data: 19/10/2026. **Implementação aguardando revisão do Work; sem aprovação própria, commit ou push. M3 não concluído.**

## Entrada e escopo

Observado localmente: origin `https://github.com/CleristonMP/portfolio-v2.git`, branch inicial `docs/m3-interface-plan`, HEAD `6f7a8bc82437835f4ffb1df4410a763ebec348cc`, árvore limpa. Plano M3 aprovado/commitado conforme contexto do responsável e commit local. Branch dedicada criada: `feat/m3-01-header`, mesmo HEAD. Sem alteração de main, merge ou consulta remota adicional. Instruções locais AGENTS.md não encontradas no repositório nem nos ancestrais conferidos.

Fontes lidas: DEVELOPMENT_WORKFLOW.md, PROJECT_STATUS.md, plano M3, PRD v2.3 §4.1, DESIGN_TOKENS.md, handoffs M2-04 a M2-08; DESIGN.md, code.html e screen.png dos dois ZIPs Stitch. Cópias consultadas conferidas byte a byte com as entradas originais e extraídas em `.m2-review/m3-01/references/`. Materiais originais preservados.

## Arquivos e decisões

- `src/styles.css`: apenas regras do header e seus ajustes responsivos. Seletores agora delimitados por `.header`; regras compartilhadas de marca e container preservadas. Nenhum JSX, lógica, tradução, token, asset ou dependência alterado.
- `PROJECT_STATUS.md`: registra plano aprovado/commitado, entrada desta implementação e espera pela revisão, preservando histórico.
- `docs/M3_01_HANDOFF.md`: este relatório.

Comparação: web HTML usa barra horizontal de 80 px, blur-xl, slate com alpha 60%, navegação espaçada e CTA pill; mobile HTML usa marca compacta e contato outline. DESIGN.md descreve navegação glass em surface-container a 60%, blur 20 px e borda branca 5%. Aplicada a descrição semântica com tokens existentes, mantendo a precedência de cores/fontes canônicas do PRD. Screens reduzidas (448 e 151 px de largura) servem para direção visual, não para equivalência pixel a pixel em 1280/390.

Preservadas alturas existentes 80/74 px, sticky (não convertida em fixed), breakpoint 700 px e composição das demais seções. Marca oficial e cinco links de navegação + marca para #home mantidos; não copiados pseudônimo, três links nem disponibilidade fictícia dos exports. Mantidas caixa e traduções existentes, sem impor uppercase longo a PT. Contato outline aproxima o export mobile e preserva o controle existente desktop. No mobile, o CTA do header continua oculto como em M2; contato permanece no menu e no hero, enquanto idioma/menu recebem espaço e áreas de 40 px. Não foi removido controle existente visível.

Marca alinhada por inline-flex, gaps responsivos e padding lateral mobile 16 px restrito à barra; corpo continua com seu container original. Menu aberto tem links com altura mínima de 40 px, espaçamento regular, superfície quase opaca para legibilidade, borda discreta e cantos inferiores arredondados. Altura limitada ao viewport com rolagem vertical local quando necessária; nenhum overflow-x/clipping global. Hover existente recebe resposta de cor/fundo/borda, sem movimento geométrico, em 200 ms. Regra global de reduced motion continua anulando transições; foco visível original permanece.

## Evidências de navegador

Preview de desenvolvimento Vite: `http://127.0.0.1:4190/`, Node direto, iniciado com `node node_modules/vite/bin/vite.js --host 127.0.0.1 --port 4190 --strictPort`. Browser: Chromium do navegador integrado. Viewport aplicado pela capacidade documentada do navegador, altura 844 px; scrollbar vertical de 15 px presente. Não é emulação de zoom. Override restaurado ao final.

Evidências locais, ignoradas pelo Git, disponíveis na mesma árvore para Work em `.m2-review/m3-01/`:

- `before-{390,1280}-{pt-BR,en}.png`: quatro capturas anteriores à edição.
- `after-{390,1280}-{pt-BR,en}.png`: quatro capturas posteriores, mesmos tamanhos/idiomas.
- `before.json`, `matrix.json`: medidas, controles, metadados e seis seções.
- `smoke.json`, `additional-smoke.json`: interação/foco/hash/idioma.
- `menu-390-en.png`, `menu-320-pt-BR.png`: menu aberto com foco visível. A segunda usa altura 360 px para verificação adicional de espaço, não zoom.

| Viewport | clientWidth = scrollWidth PT | clientWidth = scrollWidth EN | Header |
| --- | --- | --- | --- |
| 320 | 305 | 305 | Sem corte/sobreposição |
| 390 | 375 | 375 | Sem corte/sobreposição |
| 768 | 753 | 753 | Sem corte/sobreposição |
| 1280 | 1265 | 1265 | Sem corte/sobreposição |
| 1920 | 1905 | 1905 | Sem corte/sobreposição |

Medidos retângulos de todos os controles visíveis, limites contra clientWidth e scrollWidth interno; nenhuma interseção entre controles. Inspeção visual das capturas de 390/1280 e menus confirmou alinhamento e leitura. Comparação dos retângulos das seis seções antes/depois em 390/1280 PT/EN: idênticos, sem deslocamento provocado pelo header. Isso não é auditoria visual completa do restante da página.

Smoke EN: primeiro Tab alcança skip link (outline solid 3 px), Enter foca main; Enter e Space abrem menu e focam primeiro link; Escape fecha e retorna ao botão; link Tecnologias/Skills fecha, mantém hash nativo e foca seção. Voltar restaura hash anterior. Menu aberto → desktop fecha e mantém foco em link visível; retorno mobile encaminha foco ao botão. Tab com menu fechado pula links ocultos; Shift+Tab retorna ao botão. PT: alternância/reload preserva idioma, menu abre com foco no primeiro link e fecha por Escape; CTA desktop e marca acionados por Enter chegam a #contact/#home com foco visível. Reload EN preserva lang, título e descrição. Ambos os metadados também registrados na matriz. A suíte existente cobre interações e traduções nos dois idiomas; jsdom não é prova de layout/histórico/zoom.

## Critérios individuais

1. Comparação HTML/DESIGN/screens e adaptações: atendido, conforme decisões acima.
2. Capturas antes/depois 390/1280 PT/EN: atendido, oito arquivos indicados.
3. Cinco larguras nos dois idiomas, sem overflow/controles cortados: atendido na matriz real de navegador, 10/10.
4. Teclado, foco, menu e transições: smoke executado conforme recorte acima + 48 testes existentes; lógica preservada. Não equivale a auditoria WCAG completa.
5. Persistência/metadados: atendido nos dois idiomas, reload e verificadores/suíte existentes.
6. Identidade dark/ciano/violeta e Manrope/Inter: mantida; apenas tokens já existentes consumidos. Nenhuma alteração nas fontes, tokens ou demais seções.
7. Zoom real 200% e reduced motion ativo: **validados manualmente e aprovados pelo responsável**, conforme registro posterior abaixo. Histórico anterior à confirmação: Tentativa de abrir preview pelo conector Edge expirou; tentativa posterior via skill Computer Use foi interrompida porque o mecanismo não conseguiu determinar a URL da janela com confiança para aplicar sua política. Nenhuma entrada nativa posterior foi feita. Navegador integrado só oferece viewport/visibilidade, sem controle documentado de zoom real ou media emulation. Não houve validação de preferência ativa nem zoom real neste diff; regra CSS e evidências manuais históricas de M2 não substituem nova validação. Requer confirmação manual no mesmo diff antes de aceite completo.

## Confirmação manual posterior — 19/10/2026

O responsável declarou nesta conversa: “considere zoom real 200% e reduced motion ativo como aprovados, feitos manualmente”. Para este diff de M3-01, ambos os critérios ficam registrados como executados manualmente e aprovados pelo responsável. A pendência relatada acima é histórica e foi superada por esta confirmação, sem alterar as evidências originais da tentativa automatizada impedida.

Codex não executou nem observou a validação manual; não foram informados navegador, larguras, idiomas, passos ou capturas adicionais. Esses detalhes não são presumidos e nenhuma evidência automatizada nova é alegada. A confirmação cobre os dois critérios manuais e não substitui a revisão do código pelo Work nem autoriza commit/push. Diff e manifesto de implementação atualizados após este registro; nova aprovação verificável continua necessária.

## Comandos e resultados

Runtime direto Node 22.16.0 / npm 10.9.2; PATH ajustado apenas no processo para `C:\Program Files\nodejs`, evitando shim Volta herdado. Sem alteração global.

- `npm run typecheck`: passou.
- `npm run lint`: passou, zero warnings.
- `npm run format`: executado com sucesso; formatou CSS. Alteração incidental de formatação no README foi revertida para o conteúdo de HEAD, com CRLF do checkout Windows, por estar fora do escopo. Status foi formatado novamente após edição.
- `npm test`: 3 arquivos, 48 testes passaram. Nenhuma asserção reduzida ou teste alterado.
- `npm run verify`: verificadores de conteúdo e i18n passaram, incluindo IDs, links opcionais/privados, paridade, falhas de storage e metadados.
- `npm run build`: passou, Vite 6.4.4.
- `git diff --check`: passou.

Build alternativo não necessário: nenhum caminho, import de asset ou base alterado. Bundle CSS validado no build padrão; esta entrega não repete a matriz dos dois caminhos de M2-08. Nenhuma instalação, CI remota, publicação ou push executado.

## Correção posterior — transição responsiva (19/10/2026)

Solicitação do Work: corrigir exclusivamente o overflow da faixa imediatamente acima do breakpoint mobile. A matriz inicial de cinco larguras não cobria 701 px; seus resultados originais continuam válidos somente para os pontos medidos e não demonstravam ausência de overflow entre eles.

Reprodução antes do ajuste, Chromium integrado, 701×844 PT-BR com scrollbar vertical: clientWidth 686 px, scrollWidth 701 px; CTA terminava em x=701,40625. Marca não retrátil, cinco links, controles e gaps somados às margens laterais de 30 px excediam a largura útil. Evidências originais preservadas em `transition/before-701-pt-BR.{json,png}`.

Correção mínima: nova media query de 701 a 767 px em `src/styles.css`, restrita a `.header`: padding lateral 16 px, gap entre grupos 12 px e gaps de navegação/ações 8 px. Fontes, textos, alturas/áreas dos controles e CTA preservados. Não há overflow-x/clipping global, ocultação de controles, quebra em segunda linha ou redução de fonte adicional. Breakpoint mobile continua 700 px tanto no CSS quanto nas três consultas matchMedia do Header e no mock de testes; não houve necessidade de alterar lógica ou asserções existentes. A nova faixa ajusta apenas composição desktop estreita.

### Matriz posterior (altura 844 px, scrollbar vertical)

| Viewport | clientWidth = scrollWidth PT-BR | clientWidth = scrollWidth EN |
| --- | --- | --- |
| 320 | 305 | 305 |
| 390 | 375 | 375 |
| 700 | 685 | 685 |
| 701 | 686 | 686 |
| 720 | 705 | 705 |
| 768 | 753 | 753 |
| 1280 | 1265 | 1265 |
| 1920 | 1905 | 1905 |

16/16 combinações sem excesso horizontal. Retângulos de todos os links/botões visíveis dentro de clientWidth, sem interseções entre controles e sem texto internamente cortado. Captura de 701 PT-BR inspecionada visualmente: CTA e idioma inteiros, alinhamento e leitura preservados. Evidências em `.m2-review/m3-01/transition/matrix.json` e `after-{320,390,700,701,720,768,1280,1920}-{pt-BR,en}.png`. As novas capturas 390/1280 complementam as capturas antes/depois originais.

Smoke posterior real de navegador, executado separadamente em PT e EN: primeiro Tab no skip link, Enter foca main; Enter/Space abrem menu em 700 px e focam primeiro link; Tab/Shift+Tab percorrem links; Escape fecha e retorna ao botão; ativação por teclado de #skills fecha e foca destino; Voltar restaura hash anterior. Menu aberto em 700 → 701 fecha e mantém primeiro link desktop focado; 701 → 720 → 768 preserva foco visível no link; retorno a 700 transfere ao botão. Menu fechado não oferece links ocultos no Tab. CTA em 701 e marca levam nativamente a #contact/#home com foco visível. aria-controls continua primary-navigation e aria-expanded acompanha o estado. Evidências `transition/smoke.json`, `menu-700-pt-BR.png`, `menu-700-en.png`. Viewport temporário restaurado.

Checks repetidos após a correção: typecheck, lint, format, 48 testes, verify (conteúdo/i18n), build e git diff --check passaram. Sem mudança de teste ou redução de asserções. Formatação incidental do README restaurada ao conteúdo de HEAD/CRLF do checkout; somente CSS, status e este handoff permanecem no diff acumulado. Não há caminhos/assets afetados, portanto build alternativo não exigido.

Confirmação manual anterior de zoom 200% e reduced motion ativo permanece registrada acima, com sua origem e seus limites; não foi executada nova validação manual nem inferida aprovação desta correção. Não há movimento novo ou alteração das regras de foco/reduced motion. Esta correção e o snapshot atualizado exigem **nova revisão obrigatória do Work**, sem autoaprovação, commit, push ou avanço M3-02.

## Normalização final do README — 19/10/2026

Após autorização explícita para incluir a normalização documental no escopo, `npm run format` foi executado novamente e terminou com código 0. Prettier normalizou `README.md` para LF, conforme `.prettierrc.json`, sem alterar seu conteúdo. Diferentemente das execuções históricas acima, esta normalização local foi mantida.

Conferência posterior: README na árvore e blob HEAD possuem exatamente os mesmos 8.756 bytes, 107 finais LF e zero CRLF. `git diff -- README.md` está vazio (zero bytes): o conteúdo já era formatado no commit, e a diferença local era apenas CRLF do checkout versus LF esperado pelo Prettier. Não foi criada alteração artificial para produzir um diff documental. Git pode ainda sinalizar README como modificado pelo estado/finais de linha locais, embora não haja delta de conteúdo versionável; a normalização está disponível na mesma árvore para revisão.

`npm run format:check` também passou para todo o projeto (código 0). `git diff --check` passou (código 0). O CSS do header foi comparado por SHA-256 com o snapshot imediatamente anterior e permaneceu idêntico. Nenhum componente, teste, regra responsiva ou evidência em `.m2-review/m3-01/transition/` foi alterado. Não foram repetidos testes/build nesta atualização exclusivamente documental; os resultados da correção responsiva acima permanecem históricos e válidos para o código inalterado.

Diff completo e manifesto de implementação regenerados após esta atualização do handoff. README sem delta de conteúdo não aparece na lista de arquivos do manifesto baseada em git diff. Nenhuma aprovação foi criada, nenhum arquivo foi staged, e não houve commit/push ou avanço M3-02. **Nova revisão obrigatória do Work continua pendente.**

## Revisão e limites

Diff completo e manifesto de implementação disponibilizados em `.workflow/m3-01-review.patch` e `.workflow/m3-01-implementation-snapshot.json`. Manifesto não é aprovação. Work deve revisar esta árvore ou snapshot fiel incluindo o novo handoff; evidências `.m2-review/` permanecem locais e fora do staging. Não reutilizar aprovações anteriores.

M3-02 e posteriores não iniciadas. Sem conteúdo editorial, formulário, cases, migração de mídia, tokens, PRD, exports, main ou portfólio antigo alterados. Permanecem gates editoriais, contatos, permissões, segurança e publicação históricos. Os dois critérios manuais foram aprovados pelo responsável; M3-01 como entrega continua aguardando revisão própria do Work.

Conventional Commit sugerido a partir do diff: `style(header): refine responsive glass navigation`.
