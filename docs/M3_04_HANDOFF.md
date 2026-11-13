# M3-04 — Competências — handoff para revisão

20/10/2026. **Implementação aguardando revisão própria do Work. Sem staging, commit, push, merge ou deploy. M3 não concluído.**

## Entrada e fontes

Observado localmente: origin `https://github.com/CleristonMP/portfolio-v2.git`, branch de entrada `feat/m3-03-projects`, HEAD `5afdf3f205f9575176daa0fd7409359477c5ab0a`, coincidente com referência local origin/feat/m3-03-projects. Sem consulta remota adicional; não afirmar nova verificação de CI remota. Nenhum diff versionável/staging; README sinalizado por finais de linha, com diff vazio, preservado. Criada `feat/m3-04-skills` a partir desse estado. Main e portfólio antigo intocados. Nenhum AGENTS.md encontrado no repositório ou ancestrais C:/Projects e C:/.

M3-03 foi aceita pelo Work e commitada; aprovação verificável e push bem-sucedido registrados na conversa. Atualizado status sem reescrever os handoffs históricos anteriores. Plano M3 aprovado vigente preservado, sem duplicação ou alteração nesta entrega.

Lidos DEVELOPMENT_WORKFLOW.md, PROJECT_STATUS.md, MILESTONE_3_PLAN.md, PRD v2.3 §4.4 e DESIGN_TOKENS.md. Consultados code.html, DESIGN.md e screen.png web/mobile nas cópias `.m2-review/m3-01/references/`, novamente conferidas byte a byte contra os seis arquivos nos ZIPs originais. Referências preservadas; screens reduzidas 448×1600 e 151×1600 orientam comparação qualitativa, não equivalência pixel a pixel em 1280/390.

## Arquivos, decisões e comparação

- `src/sections/SkillsSection.tsx`: mantém o mesmo map e mapeamento de ícones existente; acrescenta classe skills-section para delimitação. Grade passa a ul/li, com role=list explícito para preservar semântica com reset de marcadores, nomeada pelo h2 existente via aria-labelledby. SVGs decorativos passam a aria-hidden=true e focusable=false. Nenhum botão, link, tabindex de item, evento de clique ou nome acessível duplicado foi introduzido. #skills e tabIndex -1 da seção preservados. Não houve benefício em extrair um componente trivial adicional.
- `src/styles.css`: apenas regras de competências e seus media queries. Seletores delimitados por .skills-section, sem alterar grupos compartilhados de h2/kicker ou outros componentes.
- `tests/skills.test.tsx`: dois cenários PT/EN verificam lista nomeada pelo título, seis itens na ordem independente esperada, texto localizado, ícones decorativos e ausência de controles/tabindex nos cards. Nenhum teste existente/asserção foi reduzido ou alterado.
- `PROJECT_STATUS.md`: desfecho aprovado/commitado M3-03, entrada/estado M3-04, limites e pendências históricas.
- `docs/M3_04_HANDOFF.md`: este relatório.

**Inventário preservado:** Java & Spring Boot; React & TypeScript; Android & apps móveis / Android & Mobile; JavaScript & Node.js; SQL & Dados / SQL & Data; Arquitetura de Software / Software Architecture. src/content/skills.ts, contratos, traduções e seis estados pending/proficiencyEvidence permanecem byte a byte inalterados. Não há novos agrupamentos, stacks, percentuais ou alegações de domínio. Ícones existentes: Server, Code2, Smartphone, Layers, Database, BookOpen; metáforas de infraestrutura/código/mobile/camadas/dados/arquitetura, sem fingir logotipos ou validação de proficiência.

**Origem visual:** web HTML apresenta seis colunas amplas, ícones text-4xl e gap-4; mobile usa duas colunas, padding/gap menores, sem títulos de grupos. Retidos os seis registros reais mesmo onde o mobile Stitch mostra apenas quatro exemplos. Não copiados Cloud Ops, SQL/NoSQL, novas tecnologias ou afirmações de experiência dos exemplos.

**Grade:** preservados breakpoints existentes de 1000 e 700 px e distribuição 6 → 3 → 2 colunas; usar quatro colunas do HTML intermediário deixaria uma linha incompleta desnecessária para os seis rótulos atuais. Tracks minmax(0,1fr), cards min-width:0, textos podem quebrar naturalmente. Gaps 16 px desktop/tablet e 12 px mobile. Altura mínima 164 px desktop / 152 px mobile, sem altura fixa nem clipping; padding 24×16 / 24×12 px e distância ícone-texto 20/16 px.

**Hierarquia e superfícies:** título Manrope usa escala local clamp(32px,4.5vw,52px), line-height 1,15 e tracking -0,025em, aproximando recomendação DESIGN -0,02em sem modificar h2 compartilhado. Descrição Inter 15px/1,8 e largura limitada; cabeçalho centralizado desktop/tablet e à esquerda no mobile como referência móvel. Espaço até a grade 48/32 px, sem interpretar níveis contraditórios 20/24 do DESIGN como escala universal. Rótulos 13px/1,6 peso 600, caixa e copy originais, em vez de uppercase/letter-spacing amplo do exemplo para preservar leitura dos nomes compostos. Ícones ciano 32 px, traço 1,5; valores/fontes canônicos já existentes.

Cards surface-container #161a21, borda branca 5%, raio 16 px; referência desktop usa superfície highest e mobile container, escolhida container para conciliar os layouts e a continuidade com componentes existentes. Não aplica raio de cards de projeto como regra universal a skills. Sem glass/blur desnecessário, sombra, escala ou translação. Removido hover que trocava fundo e sua transição: cards informativos mantêm cursor default, aparência estática e não sugerem ação. Nenhuma dependência, token ou caminho/asset foi alterado.

## Evidências reproduzíveis

Preview Vite existente em `http://127.0.0.1:4190/`; para reproduzir: `node node_modules/vite/bin/vite.js --host 127.0.0.1 --port 4190 --strictPort`. Navegador Chromium integrado. Matriz com altura 844 px e scrollbar vertical 15 px; valores contra clientWidth, sem esconder overflow.

Evidências locais em `.m2-review/m3-04/`, fora do versionamento:

- `before.json`: medidas anteriores à edição, rótulos, área de competências e dimensões de outras seções.
- `matrix.json`: 26 combinações posteriores, rótulos, colunas, elementos/rects e larguras. `comparison.json`: rótulos idênticos antes/depois e larguras/alturas das outras seções inalteradas em 390/1280 PT/EN. Posições verticais seguintes podem acompanhar mudança de altura da seção, sem alterar seus estilos.
- `before-{390,1280}-{pt-BR,en}.png` e `after-{390,1280}-{pt-BR,en}.png`: capturas comparáveis da seção por navegação nativa a #skills; 390×1100 para enquadrar a grade completa e 1280×844. Altura maior dessas capturas não substitui a matriz 844 nem é zoom.
- `before/`: baseline fiel reconstruída de todos os src do commit 5afdf3f por git show, sem checkout/reversão de arquivos aprovados. index.html ajusta apenas o caminho local da entrada, servido em `/.m2-review/m3-04/before/index.html`. Capturas antes representam esse commit reconstruído, não são todas tomadas antes de editar.
- `initial-page-captures/` preserva tentativas iniciais que enquadraram hero em vez da seção; primeira captura fullPage falhou e recorte automático não enquadrou consistentemente o alvo. `section-proof.png` é diagnóstico intermediário. Esses arquivos não são a prova antes/depois final.
- `smoke.json`: foco/navegação/persistência/metadados e semântica observados após implementação.

| Largura | clientWidth = scrollWidth PT | clientWidth = scrollWidth EN | Colunas |
| --- | --- | --- | --- |
| 320 | 305 | 305 | 2 |
| 390 | 375 | 375 | 2 |
| 699 | 684 | 684 | 2 |
| 700 | 685 | 685 | 2 |
| 701 | 686 | 686 | 3 |
| 720 | 705 | 705 | 3 |
| 767 | 752 | 752 | 3 |
| 768 | 753 | 753 | 3 |
| 999 | 984 | 984 | 3 |
| 1000 | 985 | 985 | 3 |
| 1001 | 986 | 986 | 6 |
| 1280 | 1265 | 1265 | 6 |
| 1920 | 1905 | 1905 | 6 |

26/26 sem overflow horizontal, nomes/ícones dentro da largura útil e sem texto internamente cortado. Retângulos dos seis cards sem sobreposição; mesma ordem em todos os casos. 699/700/701 e 999/1000/1001 verificam os dois breakpoints afetados; 720/767/768 complementam o shell aprovado. Comparação de dimensões externas em 390/1280 PT/EN confirma header/hero/projetos e demais seções sem alterações nas próprias larguras/alturas.

Para repetir: aplicar larguras/idiomas pelo navegador e controle existente, medir document.documentElement.scrollWidth/clientWidth; conferir rects de #skills, h2, cards, rótulos e SVGs, ordem dos seis rótulos e número de colunas. Navegar a #skills pelo menu/desktop, conferir foco da seção e seguir com Tab: os seis itens informativos não devem se tornar paradas de foco. Inspecionar aria-hidden/focusable dos SVGs, persistência/reload/metadados. Capturar após a rolagem nativa estabilizar. Não interpretar jsdom como prova de CSS, layout ou histórico nativo.

Smoke PT/EN em 390 px: idioma persistido após reload, html lang/título/descrição coerentes; menu → #skills fecha e foca a seção, outline solid 3 px. Tab segue ao GitHub do contato e Shift+Tab retorna ao CTA do case anterior, sem parar nos seis cards. Escape devolve foco ao botão. Desktop: link de competências mantém hash/foco e Voltar restaura hash anterior. Leitura imediata no resize registrou menu=true em estado transitório; `resize-settled.json` confirma menu=false e foco no primeiro link desktop após estabilização de 700→701, sem alterar produção ou descartar o registro inicial. Semântica observada: seis itens, todos os SVGs decorativos, zero elementos acionáveis nos cards, cursor default e transição 0s. Override de viewport restaurado ao final.

## Critérios individuais e limites

1. Inventário/ordem iguais: atendido em código, comparação antes/depois e 26 medições; dados/traduções/pendências intactos.
2. Nomes/ícones/comparação Stitch: implementado, comparado qualitativamente e submetido ao aceite visual do Work; ícones decorativos não duplicam nomes. Sem aparências/roles de botão nos cards.
3. Larguras e limites de breakpoints: atendido nos 26 casos, sem cortes/sobreposição/overflow conforme dados registrados.
4. Navegação/foco/idioma/metadados/contratos/base: preservados em código e smoke descrito; componentes aprovados/contratos/caminhos inalterados, suíte existente mantida. Não equivale a auditoria WCAG completa.
5. Capturas antes/depois: oito capturas finais em 390/1280 PT/EN com método e limites acima. **Zoom real 200% e preferência reduced motion ativa realizados manualmente e aprovados pelo responsável em 20/10/2026**, conforme registro posterior abaixo. Histórico anterior à confirmação: não revalidados por Codex nesta entrega. Browser integrado oferece viewport/visibilidade, não controle documentado de zoom real/media emulation; não houve nova tentativa nativa ou confirmação manual de M3-04. As dificuldades nativas anteriores e aprovações manuais de outras tarefas são históricas, não prova deste diff. Removida uma transição de cor, sem movimento novo; regra global reduced motion intacta não é validação de preferência ativa.
6. Checks: resultados abaixo. Critérios só podem ser aceitos pelo Work após revisão; M3-04 não autoaprovada.

## Confirmação manual posterior — 20/10/2026

O responsável declarou nesta conversa: “considere zoom real 200% e reduced motion ativo como aprovados, feitos manualmente”. Ambos os critérios de M3-04 ficam registrados como executados manualmente e aprovados pelo responsável. Essa confirmação supera a pendência anterior; o registro original e as evidências existentes permanecem como histórico preservado.

Codex não executou nem observou essa validação manual. Navegador, larguras, idiomas, procedimento e capturas adicionais não foram informados e não são presumidos. Nenhum resultado automatizado novo é alegado nem aprovação de outra tarefa reutilizada. A confirmação cobre os dois critérios manuais, sem substituir a revisão do código pelo Work ou autorizar staging, commit ou push.

Diff e manifesto de implementação atualizados após este registro documental; manifesto não constitui aprovação. Código e evidências responsivas preservados. Formatação do status e git diff --check conferidos; testes/build não repetidos nesta atualização sem mudança de código. M3-04 continua aguardando revisão própria e nova aprovação verificável do Work.

## Validações

Runtime direto Node 22.16.0/npm 10.9.2 em C:\Program Files\nodejs, PATH ajustado apenas no processo por shim Volta herdado. Sem alteração global ou dependência instalada.

Primeiro teste novo PT/EN falhou por esperar nome acessível do título sem espaço junto ao ponto decorativo; DOM acessível compõe “Competências técnicas .” / “Technical arsenal .”. Consulta ajustada pelo texto do título, mantendo verificação explícita de aria-labelledby apontando ao heading e todas as asserções de inventário/ordem/não interatividade. Não houve alteração de copy ou redução de comportamento esperado. Checks finais repetidos após os ajustes.

- `npm run typecheck`: passou.
- `npm run lint`: passou, zero warnings.
- `npm run format`: passou; `npm run format:check` conferido na finalização.
- `npm test`: 5 arquivos, 52 testes (50 anteriores + dois cenários semânticos de skills) passaram.
- `npm run verify`: conteúdo e i18n passaram.
- `npm run build`: passou, Vite 6.4.4.
- `git diff --check`: passou.

Build alternativo não exigido: nenhum caminho/base/import de asset foi afetado. Não alegar reexecução da matriz de subpath de M2-08. Nenhuma CI remota, publicação ou push executado. Documentos ignorados pela configuração de Prettier continuam nesse escopo; PRD/exports não formatados.

## Entrega para Work

Diff completo `.workflow/m3-04-review.patch`; manifesto próprio `.workflow/m3-04-implementation-snapshot.json`. Manifesto de implementação não é aprovação. Revisar esta árvore ou snapshot fiel com novos arquivos e evidências; `.workflow/` e `.m2-review/` fora do staging/versionamento.

Sem alterações em src/content/skills.ts, contratos, traduções, header, hero, projetos, PRD, exports, dependências, base path, portfólio antigo ou main. Pendências de proficiência/evidências/editorial permanecem M4. M3-05 e posteriores não iniciadas. Sem staging/commit/push/merge/deploy; nova revisão e aprovação verificável obrigatórias.

Conventional Commit sugerido: `style(skills): refine responsive informational skill cards`.
