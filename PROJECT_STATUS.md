# Estado do projeto — Portfolio v2

Atualização: 14/10/2026. Repositório: `CleristonMP/portfolio-v2`.

## Estado atual

- M1: especificação e handoff técnico concluídos conforme PRD v2.3; validações editoriais permanecem pendentes antes da publicação.
- M2 — Technical Foundation: em andamento. M2-01/M2-02 validadas, aprovadas pelo Work e commitadas.
- Baseline inicial: `e3fb2bebaba97462e039290083699de2b16e3e89` — `chore(tooling): establish portfolio baseline and reproducible quality checks`.
- Correção documental posterior: aprovada pelo Work e commitada em `cd08a2c05fcb8b1420581c640bffac3ef46db452` — `docs(workflow): reconcile milestone status and exclude review artifacts from formatting`.
- Branch observada localmente: `chore/m2-technical-foundation`. HEAD na entrada de M2-03: `cd08a2c05fcb8b1420581c640bffac3ef46db452`; árvore limpa, sem alterações staged.
- M2-03: implementada e verificada localmente, **aguardando revisão do Work**. Estado operacional: **em execução** até o parecer; não aprovada nem commitada. Evidências em `docs/M2_03_HANDOFF.md`.

## Sequência oficial do M2

| Tarefa                            | Estado                          | Evidência / dependência                                                                                          |
| --------------------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| M2-01 — Higiene e baseline        | Validada e aprovada; commitada  | Revisão Work, baseline inicial e `docs/M2_01_02_HANDOFF.md`.                                                     |
| M2-02 — Ferramentas reproduzíveis | Validada e aprovada; commitada  | Checks da implementação e revisão registrados no handoff anterior.                                               |
| M2-03 — Estrutura e contratos     | Em execução; aguardando revisão | Depende de M2-02. Implementação e verificações locais em `docs/M2_03_HANDOFF.md`; exige nova revisão e snapshot. |
| M2-04 — Tokens canônicos          | Pendente                        | Depende de M2-03; não iniciada.                                                                                  |
| M2-05 — Fundação i18n             | Pendente                        | Depende de M2-03; respeitar a ordem oficial.                                                                     |
| M2-06 — Shell acessível           | Pendente                        | Depende de M2-04 e M2-05.                                                                                        |
| M2-07 — Testes e CI sem deploy    | Pendente                        | Depende de M2-02 a M2-06.                                                                                        |
| M2-08 — Preview e handoff         | Pendente                        | Depende de M2-07.                                                                                                |

A próxima ação é a revisão de M2-03 pelo Work, sem avanço automático. Os critérios, a ordem e as dependências continuam em `docs/MILESTONE_2_PLAN.md`; seus registros de M2-03 pendente antecedem esta implementação. O estado corrente está neste documento. O M2 permanece aberto.

## Fontes e fatos observados

Fontes: DEVELOPMENT_WORKFLOW.md, docs/MILESTONE_2_PLAN.md, docs/M2_01_02_HANDOFF.md e PRD vigente docs/PRD_Portfolio_Cleriston_v2.3.md. Exports web/mobile do Stitch (DESIGN.md, code.html e screen.png) consultados sem alteração.

`git status --short --branch`, `git log -2 --oneline` e `git remote -v` confirmaram localmente branch, histórico e origin configurado para https://github.com/CleristonMP/portfolio-v2.git. As aprovações anteriores são fatos do fluxo Work registrado nesta conversa e não autorizam M2-03. Não houve consulta remota ou alegação de novo push nesta entrega.

Na regularização documental anterior, PROJECT_STATUS.md e alterações em workflow, README, plano e handoff já existiam na árvore durante a sessão; o trabalho foi preservado e depois revisado/commitado. Esse histórico é distinto da entrada limpa de M2-03.

## Evidências e pendências

M2-03: typecheck, lint, formatação, build e verificação de conteúdo passaram; smoke em Edge em 1280×900 e 390×844 registrou as seis seções, alternância existente PT/EN e comportamento atual do menu. Nenhuma infraestrutura Vitest/Testing Library foi instalada. O script de invariantes usa TypeScript e React já existentes. Não houve auditoria completa de acessibilidade, fidelidade Stitch ou performance.

As stacks de Reports Registry, Audience-Counter e Web Matrículas permanecem desconhecidas. As tags React/Spring Boot de Reports Registry e Web Matrículas foram removidas para não publicar alegações sem confirmação; Android foi mantido como plataforma de Audience-Counter. Natureza, status funcional, visibilidade do código e revisão editorial são separados. Datas, credenciais, disponibilidade, experiência e contatos desconhecidos permanecem opcionais/pendentes.

O handoff anterior reportou sete vulnerabilidades (duas moderadas, cinco altas) sem triagem e aviso de fim de suporte do ESLint 9.39.5; não houve nova auditoria ou liberação de segurança. Permanecem o problema global do Volta, o aviso Tailwind e as pendências de conteúdo, permissões de mídias, contatos, links, credenciais e publicação. Imagens externas e base herdada `/portfolio/` preservadas; sua manutenção neste lote não representa autorização de publicação.

Sem commit, push, merge ou deploy de M2-03. O portfólio antigo permanece fora do escopo. A revisão deve acessar a árvore local completa, incluindo arquivos novos e a remoção de src/content.ts. Evidências locais em `.workflow/` e `.m2-review/` ficam fora do versionamento; nenhuma aprovação anterior é reutilizada.
