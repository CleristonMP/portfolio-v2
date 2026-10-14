# Estado do projeto — Portfolio v2

Atualização: 14/10/2026. Repositório: `CleristonMP/portfolio-v2`.

## Estado atual

- M1: especificação e handoff técnico concluídos conforme PRD v2.3; validações editoriais permanecem pendentes antes da publicação.
- M2 — Technical Foundation: em andamento. M2-01/M2-02 validadas, aprovadas pelo Work e commitadas.
- Baseline inicial: `e3fb2bebaba97462e039290083699de2b16e3e89` — `chore(tooling): establish portfolio baseline and reproducible quality checks`.
- Correção documental posterior: aprovada pelo Work e commitada em `cd08a2c05fcb8b1420581c640bffac3ef46db452` — `docs(workflow): reconcile milestone status and exclude review artifacts from formatting`.
- Branch observada localmente: `chore/m2-technical-foundation`. HEAD na entrada de M2-03: `cd08a2c05fcb8b1420581c640bffac3ef46db452`; árvore limpa, sem alterações staged.
- M2-03: **validada e aprovada pelo Work**, posteriormente commitada em `73e5f7d3d76f26d28597bc7f1e73e1190ae8f78f` — `refactor(content): define editorial contracts and extract portfolio sections`. O handoff original preserva o estado anterior ao parecer; aprovação e commit estão registrados no histórico desta conversa.
- Entrada de M2-04 observada localmente: mesma branch, HEAD `73e5f7d3d76f26d28597bc7f1e73e1190ae8f78f`, árvore limpa.
- M2-04: implementada e verificada localmente, **aguardando revisão própria do Work**; estado operacional **em execução**, sem aprovação ou commit. Tokens em `docs/DESIGN_TOKENS.md`; evidências em `docs/M2_04_HANDOFF.md`.

## Sequência oficial do M2

| Tarefa                            | Estado                          | Evidência / dependência                                            |
| --------------------------------- | ------------------------------- | ------------------------------------------------------------------ |
| M2-01 — Higiene e baseline        | Validada e aprovada; commitada  | Revisão Work, baseline inicial e `docs/M2_01_02_HANDOFF.md`.       |
| M2-02 — Ferramentas reproduzíveis | Validada e aprovada; commitada  | Checks da implementação e revisão registrados no handoff anterior. |
| M2-03 — Estrutura e contratos     | Validada e aprovada; commitada  | Commit `73e5f7d`; revisão Work posterior ao handoff original.      |
| M2-04 — Tokens canônicos          | Em execução; aguardando revisão | Depende de M2-03; verificações locais em `docs/M2_04_HANDOFF.md`.  |
| M2-05 — Fundação i18n             | Pendente                        | Depende de M2-03; respeitar a ordem oficial.                       |
| M2-06 — Shell acessível           | Pendente                        | Depende de M2-04 e M2-05.                                          |
| M2-07 — Testes e CI sem deploy    | Pendente                        | Depende de M2-02 a M2-06.                                          |
| M2-08 — Preview e handoff         | Pendente                        | Depende de M2-07.                                                  |

A próxima ação é a revisão de M2-04 pelo Work, sem avanço automático para M2-05. Os critérios, a ordem e as dependências continuam em `docs/MILESTONE_2_PLAN.md`; seus registros de tarefas pendentes antecedem as implementações registradas aqui. O estado corrente está neste documento. O M2 permanece aberto.

## Fontes e fatos observados

Fontes: DEVELOPMENT_WORKFLOW.md, docs/MILESTONE_2_PLAN.md, docs/M2_01_02_HANDOFF.md e PRD vigente docs/PRD_Portfolio_Cleriston_v2.3.md. Exports web/mobile do Stitch (DESIGN.md, code.html e screen.png) consultados sem alteração.

`git status --short --branch`, `git log -2 --oneline` e `git remote -v` confirmaram localmente branch, histórico e origin configurado para https://github.com/CleristonMP/portfolio-v2.git. As aprovações anteriores são fatos do fluxo Work registrado nesta conversa e não autorizam M2-04. Não houve consulta remota ou alegação de novo push nesta entrega.

Na regularização documental anterior, PROJECT_STATUS.md e alterações em workflow, README, plano e handoff já existiam na árvore durante a sessão; o trabalho foi preservado e depois revisado/commitado. Esse histórico é distinto da entrada limpa de M2-03.

## Evidências e pendências

M2-03: typecheck, lint, formatação, build e verificação de conteúdo passaram; smoke em Edge em 1280×900 e 390×844 registrou as seis seções, alternância existente PT/EN e comportamento atual do menu. Nenhuma infraestrutura Vitest/Testing Library foi instalada. O script de invariantes usa TypeScript e React já existentes. Não houve auditoria completa de acessibilidade, fidelidade Stitch ou performance.

As stacks de Reports Registry, Audience-Counter e Web Matrículas permanecem desconhecidas. As tags React/Spring Boot de Reports Registry e Web Matrículas foram removidas para não publicar alegações sem confirmação; Android foi mantido como plataforma de Audience-Counter. Natureza, status funcional, visibilidade do código e revisão editorial são separados. Datas, credenciais, disponibilidade, experiência e contatos desconhecidos permanecem opcionais/pendentes.

O handoff anterior reportou sete vulnerabilidades (duas moderadas, cinco altas) sem triagem e aviso de fim de suporte do ESLint 9.39.5; não houve nova auditoria ou liberação de segurança. Permanecem o problema global do Volta, o aviso Tailwind e as pendências de conteúdo, permissões de mídias, contatos, links, credenciais e publicação. Imagens externas e base herdada `/portfolio/` preservadas; sua manutenção neste lote não representa autorização de publicação.

O registro original de M2-03 foi entregue sem commit/push; depois da aprovação verificável do Work, o commit `73e5f7d` foi criado e enviado conforme o retorno registrado nesta conversa. Nesta entrega M2-04, Git local confirma o commit, sem nova consulta remota nem alegação de novo push. Sem staging, commit, push, merge ou deploy de M2-04. O portfólio antigo permanece fora do escopo. A revisão deve acessar a árvore completa, incluindo tokens e documentação novos. Evidências locais em `.workflow/` e `.m2-review/` ficam fora do versionamento; nenhuma aprovação anterior é reutilizada.

## Registro de M2-04

Cores/fontes centralizadas em src/styles/tokens.css e consumidas pelo CSS e Tailwind; composição, conteúdos e comportamentos mantidos. Inventário e conflitos de Stitch/PRD/starter documentados. Comparação Edge em 390×844 e 1280×900: 68 elementos com estilos e dimensões idênticos antes/depois, sem overflow horizontal. Foco visível e gradiente CTA canônico observados; regra reduced-motion preservada no fonte e build. Emulação da preferência reduce não disponível na ferramenta de navegador; nenhuma validação de usuário com essa preferência é alegada.

Verificações e resultados finais em docs/M2_04_HANDOFF.md. Sem dependências ou infraestrutura de testes novas, sem conteúdo/i18n/menu/formulário/assets alterados. M2-05 e demais tarefas permanecem pendentes; M2 não concluído. As divergências visuais remanescentes são refinamentos de M3, não resolvidos por centralizar tokens.
