# M3-03 — Projetos — handoff para revisão

20/10/2026. **Implementação aguardando revisão própria do Work. Sem staging, commit, push, merge ou deploy. M3 não concluído.**

## Entrada e decisões autorizadas

Git local: origin `https://github.com/CleristonMP/portfolio-v2.git`, branch de entrada `feat/m3-02-hero`, HEAD `5908473c238019b1e599fbae982f68c7fe14c49b`; nenhum diff versionável/staging. README sinalizado somente por finais de linha, com diff vazio, preservado. Criada `feat/m3-03-projects` a partir desse HEAD, sem alterar main. M3-02 aprovada pelo Work, commit/push registrados na conversa; acompanhamento atualizado sem modificar o handoff histórico anterior. Sem consulta remota adicional.

Fontes: DEVELOPMENT_WORKFLOW.md, PROJECT_STATUS.md, MILESTONE_3_PLAN.md, PRD v2.3 §§4.3/15/16.4, contratos/dados/componentes atuais e exports Stitch web/mobile (code.html, DESIGN.md e screen.png, consultados também na proposta de decisões imediatamente anterior). Cópias locais em `.m2-review/m3-01/references/`, já conferidas contra os ZIPs originais; originais preservados. Screens 448×1600 e 151×1600 orientam comparação qualitativa, não equivalência pixel a pixel. Nenhum AGENTS.md havia sido encontrado no repositório/ancestrais nas entregas anteriores; sem instrução local adicional identificada.

Responsável aprovou explicitamente:

- Reports Registry → Audience-Counter → Web Matrículas como vitrine principal; DS Commerce em bloco secundário educacional.
- Mesma ordem/dados desktop/mobile, sem filtros, novas páginas ou router.
- Case textual mínimo Reports Registry na mesma página por âncora, com categoria/contexto/restrição PT/EN fornecidos integralmente.
- Cards temporariamente sem imagens, sem apagar origem; sem novos links externos. Reports Registry nunca oferece GitHub.

Decisões registradas no plano e status, preservando o histórico e a sequência. Caminho para mídias futuras informado pelo responsável: `https://github.com/CleristonMP/portfolio/tree/main/public/assets`. Apenas proveniência, sem presumir permissão por ser público, sem acessar/modificar o repositório antigo. Migração, otimização, autorização específica e imagens/cases completos permanecem M4.

## Arquivos e implementação

- `src/content/projects.ts`: mantém quatro registros, IDs, descrições, natureza, status, stacks conhecidas, visibilidade, links opcionais e caminhos candidatos de mídia. Exporta grupos derivados dos mesmos registros e case PT/EN aprovado, com LocalizedText e ID estável reports-registry-case. Nenhuma stack, URL, métrica ou permissão inventada. Estado editorial global continua pending porque o case mínimo não resolve todo o inventário técnico/mídias/case completo.
- `src/sections/ProjectsSection.tsx`: ProjectCard tipado reutilizado nas duas disposições, sem duplicação de dados mobile/desktop. Remove somente renderização de imagens/áreas reservadas e seta decorativa de títulos sem ação. CTA existente localizado “Estudo de caso • código privado” / “Case study • private code” passa a levar ao case real por href nativo. Destino article com tabIndex -1, título associado por aria-labelledby e foco visível. DS Commerce aparece após o case, separado da grade principal, com categoria educacional existente. Hint genérico sobre cases futuros removido desta apresentação porque agora há um case mínimo real; sem alterar a tradução histórica compartilhada.
- `src/styles.css`: regras de cards/case/tags delimitadas por .projects-section; grade responsiva existente preservada nos breakpoints 1000/700 px; três → duas → uma coluna. Minmax(0,1fr) e min-width:0 permitem encolhimento seguro. Removidas regras de áreas de imagem/número e antiga descrição com altura mínima artificial. Header, hero, tokens, estilos de foco/reduced motion globais e demais seções intactos.
- `scripts/verify-content.mjs`: whitelist ganha somente a âncora aprovada e exige destino focalizável; todos os links opcionais/privados, IDs, seis seções e contatos incompletos continuam verificados.
- `scripts/verify-i18n.mjs`: substitui a exigência histórica de alt de imagens removidas por ausência de img apenas em ProjectsSection, descrição localizada, paridade do case, texto aprovado e alvo do CTA. Mantém paridade geral, nomes oficiais, storage/metadados e traduções de alt no dicionário para futura apresentação autorizada.
- `tests/language.test.tsx`: verificação de imagem substituída pelo nome localizado do CTA real em cada estado/idioma; demais asserções de alternância, armazenamento, falhas e metadados mantidas.
- `tests/projects.test.tsx`: dois cenários PT/EN de ordem, projeto secundário educacional, estado não implantado, case/categoria/restrição aprovados, único link interno com destino focalizável e nome acessível, ausência de imagens e IDs duplicados, foco no CTA por Tab.
- `docs/MILESTONE_3_PLAN.md`, `PROJECT_STATUS.md`, `docs/M3_03_HANDOFF.md`: decisões posteriores, desfecho M3-02, estado desta entrega/evidências, sem alterar PRD ou sequência original.

Contratos de Project/Translation preservados; imagens candidatas continuam nos dados mas não são emitidas em img nem requisitadas por esta seção. Nenhuma dependência ou fixture de produção nova.

## Adaptação visual ao Stitch

Web export usa três cards com título, descrição, tags e ações; mobile empilha cards com superfície mais elevada. Conservados ritmo, hierarquia Manrope/Inter, ciano para natureza/CTA e dark para superfícies. Cards agora são blocos textuais completos, padding 28 px, raio 24 px (~1,5rem), borda branca 5% e fundo surface-container existente; sem caixas vazias de imagem. Categoria 10 px/1,7, título 24 px/1,25, tracking -0,025em e descrição 14 px/1,8. Tags apenas Android ou React/Spring Boot já confirmados, não tecnologias demonstrativas dos exports.

DESIGN.md conflita com configuração HTML em raio xl (1,5rem versus 0,75rem): prevalece PRD §16.2 para raio externo. Raio interno/cortes/alt de imagens não aplicável nesta apresentação temporária expressamente autorizada; não declarado implementado para M4. Case usa plano mais escuro, margens verticais 40 px e texto limitado a 76ch. DS Commerce permanece visualmente secundário por posição fora da grade, categoria explícita e ausência de nova ação. Cards sem ação não têm hover com translação ou cursor enganoso; o único CTA é sublinhado, área mínima 44 px e foco original ciano. Não foi adicionada animação; conteúdo independe de efeitos.

## Evidências e validação no navegador

Servidor Vite local: `node node_modules/vite/bin/vite.js --host 127.0.0.1 --port 4190 --strictPort`. Navegador Chromium integrado, altura 844 px, scrollbar vertical de 15 px. Inicialmente conexão recusada/timeout; servidor respondeu 200 fora da restrição de sockets do sandbox e a aba terminou de carregar. Nenhum ajuste global, de firewall ou de privacidade realizado.

Antes/depois em `.m2-review/m3-03/`:

- `before-{390,1280}-{pt-BR,en}.png`: baseline fiel reconstruída do commit HEAD 5908473 após a dificuldade inicial de conexão. Cópias de todos os src obtidas por git show em `.m2-review/m3-03/before/`; index.html altera somente caminho de entrada para servi-la pelo Vite. Nenhum checkout/arquivo aprovado foi revertido. URL local `/.m2-review/m3-03/before/index.html`. Não são capturas feitas antes da edição: representam a árvore anterior reconstruída do commit identificado.
- `after-{390,1280}-{pt-BR,en}.png`: quatro capturas completas posteriores. `viewport-*` complementa o recorte da tela; screenshots durante scroll suave podem representar posições intermediárias.
- `matrix.json`: 26 combinações com colunas, títulos, hrefs, ausência de imagens, rects e larguras. `smoke.json`: foco, hash, idiomas/metadados e menu; posições verticais lidas imediatamente podem estar em movimento.
- `case-settled-390-pt-BR.png`, `case-settled-1280-en.png`, `settled-smoke.json`: foco efetivamente visível após concluir rolagem nativa, case aproximadamente a 200 px do topo, outline solid 3 px. Evidências anteriores não foram descartadas.

| Viewport | clientWidth = scrollWidth PT-BR | clientWidth = scrollWidth EN | Colunas prioritárias |
| --- | --- | --- | --- |
| 320 | 305 | 305 | 1 |
| 390 | 375 | 375 | 1 |
| 699 | 684 | 684 | 1 |
| 700 | 685 | 685 | 1 |
| 701 | 686 | 686 | 2 |
| 720 | 705 | 705 | 2 |
| 767 | 752 | 752 | 2 |
| 768 | 753 | 753 | 2 |
| 999 | 984 | 984 | 2 |
| 1000 | 985 | 985 | 2 |
| 1001 | 986 | 986 | 3 |
| 1280 | 1265 | 1265 | 3 |
| 1920 | 1905 | 1905 | 3 |

26/26 sem excesso contra clientWidth nem corte interno de títulos, parágrafos, categorias ou CTA. Mesma sequência de títulos: RR, Audience-Counter, Web Matrículas, RR (case), DS Commerce; zero imagens e único href #reports-registry-case. Retângulos dos cards e case não se sobrepõem. Captura completa 1280 PT inspecionada visualmente: hierarquia e separação principal/case/secundário presentes, sem espaços de imagem vazios. Inspeção adicional mobile e foco nas capturas indicadas complementa a matriz, não auditoria final.

Smoke executado em 390/1280 PT/EN: Tab do CTA de projetos do hero chega ao link do case; Enter atualiza hash e foca o article, Back restaura hash anterior; marca mantém #home/foco. Outline solid 3 px observado no CTA e destino. Persistência após reload e lang/título/meta description coerentes nos quatro casos. Menu EN em 700: link #projects fecha e foca seção; aberto → 701 fecha e mantém link desktop focado; retorno a 700 recupera botão; Escape fecha e retorna botão. Nenhuma manipulação de history ou onClick nova; seis âncoras existentes preservadas. Override de viewport restaurado ao final.

Reprodução: iniciar Vite com comando acima, abrir /, escolher idioma, aplicar larguras da tabela, conferir document.documentElement.scrollWidth/clientWidth, retângulos e ausência de img em #projects; percorrer CTAs por Tab e Enter, aguardar fim do scroll suave e conferir foco no case, depois Voltar. Script local de leitura das evidências: `node .workflow/verify-m3-03-evidence.mjs`. Isso valida os dados registrados, sem alegar novo smoke ao executá-lo.

## Critérios individuais

1. Curadoria principal/secundária e dataset único: atendido; ordem testada e observada.
2. Case mínimo aprovado PT/EN com CTA real: atendido; texto exato, href e destino focalizável, sem GitHub/demo/store novo.
3. Apresentação temporária sem imagens/espaços vazios: atendido; origens preservadas e M4 explicitado. Não encerra autorização/migração futura.
4. Hierarquia/superfícies/raios Stitch: implementado e comparado qualitativamente, aguardando aceite visual do Work. Critério de imagem interna suspenso somente conforme autorização específica registrada no plano.
5. Responsividade/breakpoints/overflow: matriz real 26/26; sem corte/sobreposição conforme evidências.
6. Teclado/foco/âncoras: smoke e testes executados, com limites descritos. Histórico nativo e layout não são inferidos de jsdom.
7. Preservação de header/hero/tokens/contratos/idioma: fontes/componentes inalterados; estilos delimitados a projetos, smoke do shell e suíte preservados.
8. Zoom real 200% e reduced motion ativo: **realizados manualmente e aprovados pelo responsável em 20/10/2026**, conforme registro posterior abaixo. Histórico anterior à confirmação: não revalidados por Codex nesta entrega. Ferramenta integrada disponível oferece viewport, não zoom real/media emulation; histórico de impedimentos nativos está nos handoffs anteriores. Não houve nova tentativa nativa nem aprovação manual de M3-03; aprovações de M3-01/M3-02 não cobrem este diff. Verificação manual própria permanece pendente para o aceite transversal, sem substituir por CSS ou viewport.

## Confirmação manual posterior — 20/10/2026

O responsável declarou nesta conversa: “considere zoom real 200% e reduced motion ativo como aprovados, feitos manualmente”. Ambos os critérios ficam registrados como executados manualmente e aprovados pelo responsável para M3-03. Essa confirmação supera a pendência anterior, preservada acima como histórico, sem modificar as evidências originais.

Codex não executou nem observou a validação manual. Navegador, larguras, idiomas, procedimento e capturas adicionais não foram informados, portanto não são presumidos. Nenhum novo resultado automatizado é alegado e nenhuma aprovação de outra tarefa foi reutilizada. A confirmação cobre esses dois critérios; M3-03 continua aguardando revisão própria do Work e nova aprovação verificável, sem autorização de staging, commit ou push.

Diff e manifesto de implementação atualizados após este registro documental; manifesto não constitui aprovação. Código e evidências responsivas preservados. Formatação do status e git diff --check conferidos nesta atualização; não foram repetidos testes/build por não haver alteração de código.

## Comandos e resultados

Node direto 22.16.0/npm 10.9.2 em C:\Program Files\nodejs; PATH ajustado apenas no processo por shim Volta herdado. Sem dependências instaladas ou mudanças globais.

Primeira sequência revelou 11 falhas dos testes de idioma pela expectativa de imagem removida e falha de verify-content pela nova âncora. Não foram falhas ocultadas: expectativas atualizadas para o comportamento explicitamente aprovado, mantendo verificações de idioma e links, e novos testes adicionados. Build já passou nessa rodada. Sequência posterior completa:

- `npm run typecheck`: passou.
- `npm run lint`: passou, zero warnings.
- `npm run format`: passou; `npm run format:check` também passou na conferência final.
- `npm test`: 4 arquivos, 50 testes passaram.
- `npm run verify`: conteúdo e i18n passaram.
- `npm run build`: passou, Vite 6.4.4, 1597 módulos.
- `git diff --check`: passou.

Após delimitar a asserção sem img apenas à seção de projetos, verificações finais repetidas conforme registro desta entrega. Modo opcional histórico `verify-content --baseline=<commit pré-M2-03>` compara estrutura antiga e não é gate de M3: sua estrutura naturalmente difere da apresentação aprovada atual; não foi executado nem reportado como passando. Verificações atuais relevantes mantidas. Sem caminhos/base/imports de asset alterados; build alternativo não exigido por este diff. Mídias externas antigas não renderizadas por projetos; migração futura não executada.

## Entrega e limites

Diff completo: `.workflow/m3-03-review.patch`; snapshot de implementação: `.workflow/m3-03-implementation-snapshot.json`. Não são aprovação. Work precisa revisar esta árvore ou snapshot fiel com novos arquivos, incluindo evidências locais. `.workflow/` e `.m2-review/` ficam fora do versionamento/staging.

Sem alteração de PRD, exports, dependências, portfólio antigo, main, formulário, demais seções ou trabalhos M3-04+. Nenhuma publicação/CI remota/merge. Gates de segurança, conteúdo definitivo, case completo e imagens/permissões permanecem. **M3-03 aguardando revisão própria e nova aprovação verificável; M3 não concluído.**

Conventional Commit sugerido: `feat(projects): add curated text cards and inline private case study`.
