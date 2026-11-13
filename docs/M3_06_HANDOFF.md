# M3-06 — Aprendizado — handoff para revisão

20/10/2026. **Implementada, aguardando revisão própria do Work. Sem staging, commit, push, merge ou deploy. M3 não concluído.**

## Entrada e fontes

Origin observado: `https://github.com/CleristonMP/portfolio-v2.git`. Entrada `feat/m3-05-profile`, HEAD `f2ea78f917021d46fa15aaa750c130911dad2e1c`, coincidente com referência local origin/feat/m3-05-profile; sem consulta remota adicional. README já sinalizado por finais de linha, com diff versionável vazio; staging vazio. Criada `feat/m3-06-learning` desse estado, preservando os arquivos. M3-05 aceita pelo Work, commit e push registrados nesta conversa; acompanhamento anterior preservado como histórico. Nenhum AGENTS.md encontrado no repositório ou nos ancestrais C:/Projects e C:/.

Lidos DEVELOPMENT_WORKFLOW.md, PROJECT_STATUS.md, MILESTONE_3_PLAN.md, PRD v2.3 §4.6 e DESIGN_TOKENS.md. Consultados os HTMLs, DESIGN.md e screen.png de ambos os exports: cópias locais em `.m2-review/m3-01/references/` conferidas byte a byte contra os seis arquivos dos ZIPs originais. Screens inspecionadas, com dimensões reduzidas: comparação qualitativa, sem equivalência pixel a pixel. Nenhum material de referência modificado.

## Arquivos e decisões

- `src/sections/LearningSection.tsx`: preservados SectionHeading, fonte courses, IDs, copy e #learning/tabIndex -1. Grade passa a lista ordenada com nome localizado já existente. Números visuais e BookOpen são decorativos, aria-hidden; ícone focusable false. Cards permanecem sem links, botões ou tab stops. Sem extração trivial de componente.
- `src/styles.css`: seletores delimitados por .learning-section, título/lead, grade e cards; regra mobile deixa de compartilhar grupo com contato, sem alterar propriedades de contato. Sem mudança de tokens, foco global, reduced motion, header, hero, projetos, competências ou perfil.
- `tests/learning.test.tsx`: dois cenários PT/EN verificam os quatro títulos/instituições literais na ordem, lista nomeada, ícones decorativos e ausência de ações. Não testam detalhes de CSS nem servem como prova de layout.
- `PROJECT_STATUS.md`: aprovação/commit de M3-05, entrada e espera de revisão M3-06, histórico e pendências.
- `docs/M3_06_HANDOFF.md`: este relatório. README continua sem diff versionável e não pertence à entrega.

## Adaptação visual

**Aprendizado não existe no HTML nem nas screens web/mobile Stitch.** Esta é uma adaptação da linguagem geral do DESIGN.md, não reprodução de um frame de cursos inexistente. Os exports mostram hierarquia Manrope/Inter, planos tonais, cards arredondados e respiro sem divisórias. Mantidos fundo surface-low canônico e tokens de cor/fonte. Cards agora surface-container, discretos, sem glass, sombras, elevação por hover, cursor de ação ou animação. Raio 20 px, gap 16 px, padding 28 px desktop/20 px mobile; não se aplicou indiscriminadamente raio de projeto nem efeitos de controles a conteúdo informativo.

Título local clamp(32px,4.2vw,52px), peso 800, line-height 1,15, tracking -0,025em e largura 18ch; adapta recomendação -0,02em do DESIGN.md ao conteúdo real, sem alterar h2 globais. Lead 16 px/1,75, máximo 34ch; cabeçalho alinhado ao topo em desktop, empilhado até 700 px. Margem inferior 40/32 px e gap 32/20 px. Padding vertical global 120/90 px preservado, sem reinterpretar escala contraditória dos exports documentada em DESIGN_TOKENS.md.

Cards com duas colunas minmax(0,1fr), uma até 700 px, ordem natural da fonte. Títulos Manrope 18 px desktop/17 px mobile, line-height 1,5; instituição Inter 14 px/1,6 (antes 12 px). Índice reduzido a 14 px e largura 2ch, para não competir com a formação; BookOpen 22 px decorativo alinhado ao topo. Conteúdo flexível com min-width 0, sem truncamento, alturas fixas ou overflow escondido. Mobile mantém espaço para ícone e títulos longos sem comprimir a fonte. Nenhuma alegação de certificação profissional, conclusão adicional, data ou credencial foi criada; títulos próprios e instituições não são traduzidos.

## Evidências de navegador

Preview de desenvolvimento Vite: `http://127.0.0.1:4190/`. Reproduzir com `node node_modules/vite/bin/vite.js --host 127.0.0.1 --port 4190 --strictPort`. Chromium integrado, scrollbar vertical de 15 px, matriz em altura 844 px. Arquivos locais ignorados em `.m2-review/m3-06/`:

- `before-{390,1280}-{pt-BR,en}.png` e `before.json`: quatro capturas reais antes de editar a implementação.
- `after-{390,1280}-{pt-BR,en}.png` e `after.json`: quatro capturas posteriores; 390×1100 para enquadrar a seção inteira, 1280×844 desktop, mesmas dimensões antes/depois. Altura de captura não é zoom.
- `matrix.json`: rects, títulos/instituições, colunas, controles e larguras das 26 combinações.
- `comparison.json`: formações/instituições idênticas e mesmas larguras/alturas amostradas de header, home, projetos, competências, perfil, contato e footer nas quatro comparações. Posições verticais posteriores podem acompanhar a nova altura de Aprendizado.
- `smoke.json`: navegação, foco, Escape, idioma/reload/metadados e histórico.

| Viewport | clientWidth = scrollWidth PT | clientWidth = scrollWidth EN |
| --- | --- | --- |
| 320 | 305 | 305 |
| 390 | 375 | 375 |
| 699 | 684 | 684 |
| 700 | 685 | 685 |
| 701 | 686 | 686 |
| 720 | 705 | 705 |
| 767 | 752 | 752 |
| 768 | 753 | 753 |
| 999 | 984 | 984 |
| 1000 | 985 | 985 |
| 1001 | 986 | 986 |
| 1280 | 1265 | 1265 |
| 1920 | 1905 | 1905 |

26/26 sem excesso contra clientWidth ou cortes internos medidos em cabeçalho, título, lead e elementos de cards; sem interseção entre índice, texto e ícone. Quatro formações/instituições na ordem, zero imagens/controles na seção, seis âncoras na mesma sequência. Breakpoint de 700 px preservado e limites 699/700/701 exercitados. Capturas mobile PT e desktop EN inspecionadas; comparação não equivale a auditoria final de acessibilidade.

Reprodução das medidas: selecionar idioma pelo controle existente, definir cada viewport e ler document.documentElement.scrollWidth/clientWidth; conferir getBoundingClientRect e scrollWidth/clientWidth de .section-heading, h2, lead, .course, h3, p, índice e SVG. Conferir títulos/instituições completos e interseções entre os três filhos de cada card. Repetir capturas após a rolagem nativa suave estabilizar; medições de posição durante a animação são transitórias, por isso as capturas EN foram refeitas com y de #learning aproximadamente 100 px, como as anteriores. Override de viewport restaurado ao final.

Smoke próprio PT/EN: Space abre menu; Enter no link Formação/Learning fecha e foca #learning com outline ciano solid 3 px. Tab a partir da seção alcançou GitHub de contato e Shift+Tab retornou ao CTA do case anterior; cards não criam paradas. Escape fecha e devolve foco ao botão com nome localizado. Idioma sobrevive ao reload; html lang, título e description corretos em PT-BR/EN. Desktop brand → #home → Learning e Voltar restaurou hash #home, sem manipular histórico. Não se alega auditoria completa do histórico/foco do navegador.

## Critérios individuais

1. Quatro formações/instituições e ordem: atendido por fonte única inalterada, comparação antes/depois, matriz e testes PT/EN.
2. Legibilidade e identidade: implementação e comparação documentadas; nenhuma credencial ou alegação nova. Aceite visual cabe ao Work.
3. Responsividade: matriz real 26/26, incluindo larguras exigidas e limites, sem overflow/cortes medidos; screenshots qualitativas.
4. Capturas antes/depois: oito arquivos em 390/1280 PT/EN, com método e justificativa acima.
5. Navegação/foco/idioma/metadados/contratos/base preservados em implementação e smoke. **Pendência inicial (histórico): zoom real 200% e reduced motion ativo ainda não revalidados por Codex. Confirmação manual posterior registrada abaixo.** Navegador integrado expõe viewport/visibilidade, sem controle documentado de zoom real ou emulação da preferência. Naquele momento, nenhuma validação manual específica de M3-06 havia sido recebida; aprovações anteriores não reutilizadas. Ausência de nova animação e preservação da regra não provam preferência ativa. Não foi feita tentativa nativa nesta entrega.
6. Checks locais: resultados finais abaixo. Sem autoaprovação ou fechamento do milestone.

## Comandos e resultados

Runtime direto Node 22.16.0/npm 10.9.2; C:/Program Files/nodejs precede shim Volta somente no PATH do processo. Sem alteração global, dependência nova ou lockfile alterado.

- `npm run typecheck`: passou (inclui testes/configurações).
- `npm run lint`: passou, zero warnings.
- `npm run format`: passou; arquivos novos formatados e código existente preservado.
- `npm test`: 54 testes em 6 arquivos passaram, incluindo os dois cenários novos de Aprendizado. Nenhuma asserção existente reduzida.
- `npm run verify`: conteúdo e i18n passaram.
- `npm run build`: passou, Vite 6.4.4, 1597 módulos; CSS index-iMI8APDt.css 21,62 kB e JS index-DFCmBSfX.js 251,47 kB.
- `git diff --check`: passou.

Após a atualização deste relatório e do status, formatação documental e diff check conferidos novamente. Nenhum comando falhou na sequência final.

Sem caminhos/assets/imports de mídia alterados; build alternativo não exigido e não se alega nova matriz subpath. Testes DOM não comprovam CSS, layout, zoom real ou preferência de movimento ativa. Nenhuma CI remota executada.

## Limites e entrega

Títulos oficiais, datas e credenciais continuam pendentes em M4 no contrato original; não há novos links, imagens de certificados ou alegações. Demais gates editoriais, contato, mídia/permissões, segurança e publicação preservados. Plano, PRD, exports, dados, traduções, tokens, base path e dependências intactos. M3-07 não iniciada.

Diff completo e snapshot de implementação em `.workflow/m3-06-review.patch` e `.workflow/m3-06-implementation-snapshot.json`, para revisão da árvore fiel pelo Work. Evidências locais e .workflow ficam fora de versionamento. Snapshot não é aprovação; esta entrega requer parecer e assinatura novos. **M3-06 aguardando revisão própria do Work e nova aprovação verificável; zoom real 200% e reduced motion ativo aprovados manualmente pelo responsável conforme registro abaixo. Sem staging, commit ou push.**

Conventional Commit sugerido: `style(learning): refine responsive formation cards and hierarchy`.

## Confirmação manual posterior — 20/10/2026

O responsável declarou nesta conversa: “considere zoom real 200% e reduced motion ativo como aprovados, feitos manualmente”. Ambos os critérios ficam registrados como executados manualmente e aprovados pelo responsável para M3-06. A confirmação supera a pendência inicial acima, preservada como histórico. Codex não observou a execução; navegador, larguras, idiomas, passos e capturas adicionais não foram informados e não são inferidos. Aprovações de outras tarefas não foram reutilizadas.

Atualização somente documental, sem alterar implementação ou evidências anteriores. A confirmação desses dois critérios não substitui a revisão integral do Work nem autoriza staging, commit ou push. Diff e snapshot de implementação atualizados para nova revisão; nenhum registro de aprovação criado.
