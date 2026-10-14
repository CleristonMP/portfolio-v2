# Milestone 2 — Technical Foundation

Data: 14/10/2026. Estado: M2 em andamento; M2-01 e M2-02 validadas, aprovadas pelo Work e commitadas em `e3fb2be`. M2-03 a M2-08 pendentes. Estado corrente em `PROJECT_STATUS.md`. Alinhado ao PRD v2.3 corrigido (errata da seção 17).

## Fontes e precedência

- Produto: `docs/PRD_Portfolio_Cleriston_v2.3.md`, especialmente milestones (§10), curadoria de mídias (§15), revisão dos exports (§§16.1–16.6) e errata (§17).
- Visual oficial: `DESIGN.md`, `code.html` e `screen.png` de cada ZIP em `design/`. Figma é somente referência histórica opcional; não editar ou sincronizar. Acessibilidade prevalece sobre efeitos decorativos.
- Contexto confirmado pelo responsável: M1 concluído em sua etapa de especificação; desenvolvimento exclusivo em `CleristonMP/portfolio-v2`; sem publicação nem alteração do portfólio antigo.
- O PRD corrigido consolida M1 de especificação e handoff técnico como concluído. Validação de dados, mídias, links, contatos e permissões permanece obrigatória antes da publicação, sem bloquear o início do M2. Preservar o PRD como fonte de requisitos.

## Auditoria do starter

Registro histórico anterior à implementação de M2-01/M2-02. As lacunas abaixo descrevem o starter na entrada do milestone; para o estado posterior, consultar `PROJECT_STATUS.md` e `docs/M2_01_02_HANDOFF.md`.

| Área | Evidência local | Avaliação |
|---|---|---|
| Repositório | `origin` aponta para `CleristonMP/portfolio-v2`; branch `main` sem commits; todos os arquivos não rastreados | Não há baseline versionada. `node_modules/` aparece no status; falta `.gitignore`. |
| Stack | React 19, TS ~5.7, Vite ^6, Tailwind ^3.4, Lucide | Reaproveitar; não migrar major nem adicionar framework. Lockfile existente. |
| Entrada | `main.tsx`, `App.tsx`, `content.ts`, `styles.css` | Seis seções já existem. `App` monolítico e arquivos compactados dificultam manutenção. |
| Qualidade | Scripts dev/build/preview; TS strict | Sem lint, formatação, testes ou CI. Configuração TS inclui apenas `src`. |
| Build | TypeScript e Vite passaram via Node direto | Vite 6.4.4 instalado; JS 242,17 kB (75,21 kB gzip), CSS 13,30 kB. Sem auditoria de performance. |
| Ambiente | `npm run build` falhou no shim Volta | Falha de ambiente, não de compilação. Documentar runtime reproduzível. |
| CSS | Tailwind compilado, apresentação em seletores CSS | Aviso de ausência de utilitários. Cores repetidas entre CSS e tema; falta fonte única semântica. |
| Idioma | Estado PT/EN e dicionário parcial | `html lang` não muda, metadados permanecem PT, labels e textos fixos em EN. Sem persistência. |
| Acessibilidade | Foco visível e reduced motion presentes | Menu sem `aria-expanded`/`aria-controls`, Escape e retorno de foco; sem skip link. Validação em navegador pendente. |
| Dados | Projetos/cursos em arrays `as const`; skills no JSX | Tipagem inferida não substitui contratos editoriais. Stacks ainda não comprovadas aparecem como fatos. |
| Assets | Imagens usam raw URLs do repositório antigo | Dependência externa e autorização visual pendente. Não migrar automaticamente capturas sensíveis. |
| Destino | Vite usa `/portfolio/`; README repete destino antigo | Configuração herdada não define o destino do novo site. Conforme §16.3, decidir endereço/base final somente na futura publicação; validar preview isolado agora. |
| Contato | Painel informativo, somente GitHub | Sem envio funcional; registrar como pendência M4, sem simular sucesso. |
| Visual | Paleta, fontes, gradiente, superfícies já próximos do Stitch | Fidelidade visual não validada. CSS usa tracking até -.07em, diferente da referência -.02em; cards e composição precisam comparação em M3. |

Os ZIPs foram lidos diretamente: ambos contêm HTML, prévia PNG e DESIGN.md. Tokens confirmados: base #0b0e14, primário #69daff, secundário #ac89ff, texto #ecedf6, superfícies #10131a/#161a21/#22262f; Manrope/Inter. Há inconsistências internas no DESIGN.md (raios e final do gradiente): usar tokens finais do PRD v2.3 e registrar ajustes na revisão visual. Não importar CDN Tailwind, imagens demonstrativas nem branding fictício dos exports.

Não foram realizados testes de navegador, contraste, screenshots, links remotos ou auditoria de segurança de dependências. O build não comprova esses requisitos. O registro do PRD (§17) descreve o starter antes da auditoria: a compilação posteriormente passou com as dependências já instaladas, via Node direto; instalação limpa reproduzível e comando habitual ainda precisam da validação M2-02.

## Decisões propostas

Manter SPA com âncoras e uma única árvore responsiva. Sem router, backend, CMS, biblioteca de estado ou biblioteca i18n nesta etapa. Extrair progressivamente `components/`, `sections/`, `content/`, `i18n/` e `styles/`; não criar abstrações vazias. Manter Lucide. CSS variables semânticas serão consumidas pelo CSS e pelo tema Tailwind, sem reescrever toda a UI para utilitários.

Idioma padrão PT-BR, EN selecionável e persistido quando armazenamento estiver disponível. URLs por âncoras permanecem estáveis. Atualizar `document.documentElement.lang`, título e descrição; SEO avançado e idioma em URL ficam para decisão posterior. A recomendação de considerar reaproveitamento de `react-i18next` (§8) foi avaliada no starter: ele não contém essa dependência e já possui dicionário/estado simples. Reaproveitar essa base tipada; reavaliar biblioteca somente se surgir necessidade concreta.

O backlog §16.6 abrange fundação, interface e integração. A divisão operacional abaixo segue os milestones do §10: M2 entrega organização e comportamento básico verificável; fidelidade completa e cases em M3; assets aprovados e envio real em M4; lançamento em M5. Nenhum requisito do PRD é eliminado. Esta divisão detalha o planejamento e não declara os itens posteriores concluídos.

| Backlog do PRD §16.6 | Cobertura planejada |
|---|---|
| 1–2: isolamento, stack, lint, testes e build | M2-01, M2-02 e M2-07 |
| 3: tokens e fontes | M2-04; refinamento visual em M3 |
| 4–5: shell, seções e componentes responsivos | M2-03/M2-06 organizam o starter; acabamento e aceite integral de interface em M3 |
| 6: assets e estado editorial | Contratos/links opcionais em M2-03; migração e otimização de mídias autorizadas em M4 |
| 7: idiomas e formulário | Infraestrutura e textos atuais em M2-05; UI de contato em M3; traduções finais e envio em M4. Selecionar provedor estático antes da UI de integração (§8), sem inventar sucesso ou canal. |
| 8: responsividade, navegação e base path | Smoke da fundação em M2-08; validação completa da interface em M3 e auditoria final em M5 |

Na interface M3, assegurar o CTA de case funcional do Reports Registry (§15), sem link de código privado, e a seção Learning responsiva (§4.6), com títulos legíveis além de eventuais imagens de certificados. A vitrine prioriza Reports Registry, Audience-Counter e Web Matrículas, com DS Commerce alternativo/secundário (§16.4).

## Critérios transversais de código

Todas as tarefas de implementação devem seguir as regras de `DEVELOPMENT_WORKFLOW.md`: código limpo e legível para humanos, com nomes descritivos, formatação consistente e responsabilidades claras; componentização e reaproveitamento quando houver repetição real ou ganho de compreensão. Na M2-03, revisar explicitamente as seções extraídas e os padrões compartilhados, com props tipadas e dados separados da apresentação. Não criar componentes triviais ou abstrações antecipadas apenas para aumentar a decomposição. A revisão humana desses critérios é necessária mesmo quando lint e formatação passam.

## Tarefas para Codex (executar na ordem)

| ID | Entrega | Critérios de aceite e validação | Depende de |
|---|---|---|---|
| M2-01 | Higiene e baseline | Criar `.gitignore` para dependências, build, caches e segredos, preservando exemplo de ambiente; status não inclui artefatos. Preservar materiais e lockfile. Preparar branch `chore/m2-technical-foundation`; tratar ausência de commit inicial explicitamente. Nenhum push/deploy. | Revisão deste plano |
| M2-02 | Ferramentas reproduzíveis | Documentar versão Node compatível com dependências e comandos; adicionar typecheck, lint e formatação com configuração mínima ESLint/TS/React e Prettier. Instalação pelo lockfile, typecheck, lint, verificação de formato e build passam. Configurações TS também verificadas. Não atualizar majors. | 01 |
| M2-03 | Estrutura e contratos | App passa a compor seções extraídas sem perda de conteúdo/âncoras. Contratos explícitos para projetos, cursos, skills, perfil/contatos e tradução; IDs estáveis, natureza e estado editorial separados. Campos desconhecidos permanecem opcionais/pendentes; URLs ausentes não geram links. Testar invariantes de IDs e links; desktop/mobile usam mesmos dados. | 02 |
| M2-04 | Tokens canônicos | Cores/fontes em fonte semântica única; tema Tailwind referencia variáveis. Documentar espaçamento, raio e movimento, incluindo conflitos dos exports. Preservar ciano/violeta, dark, Manrope/Inter e reduced motion. Comparação inicial com referências em 390 e 1280 px registrada; não declarar fidelidade final. | 03 |
| M2-05 | Fundação i18n | PT/EN cobrem todo texto de interface, labels, alt e metadados da página; nomes oficiais preservados. Alternância atualiza lang/title/description; reload mantém escolha; armazenamento indisponível não quebra a página. Testes de paridade de chaves e alternância observável passam. | 03 |
| M2-06 | Shell acessível | Skip link funcional; seis IDs preservados; menu com nome localizado, expanded/controls, Escape e retorno de foco; fechar após navegação e evitar foco em links ocultos. Teclado, Voltar, foco visível e zoom 200% validados. Sem trap de foco desnecessário para menu não modal. | 04, 05 |
| M2-07 | Testes e CI sem deploy | Usar Vitest + Testing Library com ambiente DOM para comportamentos acima, sem snapshots ornamentais. Pipeline de PR/push roda instalação pelo lockfile, typecheck, lint, formato, testes e build; nenhuma permissão de publicação ou workflow de deploy. Execução local passa; execução remota permanece pendente até autorização de push. | 02–06 |
| M2-08 | Preview e handoff | Base local `/`; validar também build/preview sob `/portfolio-v2/` por opção explícita, com assets/âncoras funcionando. Não escolher domínio definitivo. Smoke em 320, 390, 768, 1280 e 1920 px sem overflow horizontal; PT/EN, teclado, zoom e reduced motion registrados. Atualizar README e relatório com evidência, limitações e commit sugerido. | 07 |

Testes automatizados focam comportamento: idioma, menu, metadados e renderização segura de dados incompletos. Não testar implementação privada nem exigir cobertura percentual arbitrária.

## Acompanhamento corrente

M2-01/M2-02: **validadas e aprovadas** conforme revisão anterior confirmada pelo Work. Nesta sessão, Git local confirmou a branch `chore/m2-technical-foundation`, HEAD `e3fb2bebaba97462e039290083699de2b16e3e89` e a referência local `origin/chore/m2-technical-foundation` no mesmo commit. Não houve consulta remota nem repetição dos checks da implementação. As alterações documentais pendentes na entrada foram preservadas; o estado limpo após o lote é informação histórica confirmada pelo Work.

Próxima tarefa oficial: **M2-03 — Estrutura e contratos**, ainda **pendente**, sem implementação nesta entrega. Esta atualização não altera a sequência, as dependências ou os critérios da tabela acima. Evidências e pendências permanecem no handoff; acompanhamento consolidado em `PROJECT_STATUS.md`.

## Gate de conclusão

Cada tarefa deve informar estado `pendente`, `em execução`, `validada` ou `bloqueada`, comandos/checks executados, resultado e evidência visual quando aplicável. Todos os critérios acima precisam passar; CI remota não deve ser declarada validada por execução local. Work revisa diff e evidências antes do fechamento do milestone. M2-01 e M2-02 estão **validadas e aprovadas**, com commit `e3fb2bebaba97462e039290083699de2b16e3e89`; M2-03 a M2-08 estão **pendentes**. O milestone permanece aberto.

Contatos, credenciais, stacks não comprovadas, autorização de capturas e domínio final não bloqueiam a fundação: devem permanecer explicitamente pendentes e não virar alegações ou integrações fictícias. Formulário real, otimização definitiva de mídia, cases completos, Lighthouse e aceite WCAG completo pertencem aos gates posteriores.

## Primeiro pedido de implementação — registro histórico

Executar somente M2-01 e M2-02 conforme este plano e DEVELOPMENT_WORKFLOW.md. Preservar PRD/ZIPs e código funcional existente. Entregar diff, comandos/resultados, pendências e Conventional Commit derivado. Não publicar, enviar ao remoto ou modificar o repositório antigo.

Esse primeiro pedido já foi implementado e aprovado; a autorização posterior do Work liberou o lote revisado para commit/push. O commit está registrado acima. A próxima tarefa oficial é M2-03 — Estrutura e contratos, sem antecipar as tarefas seguintes. Esta atualização documental não inicia sua implementação.
