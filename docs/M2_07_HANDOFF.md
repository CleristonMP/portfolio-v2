# Handoff — M2-07 — Testes e CI sem deploy

Data: 14/10/2026. Estado: **implementada, aguardando revisão própria do Work**. CI remota explicitamente pendente até revisão, aprovação verificável e push autorizado. Nenhuma autoaprovação, staging, commit, push, merge, deploy ou M2-08. M2 permanece aberto.

## Entrada e fontes

Git local: branch `chore/m2-technical-foundation`, HEAD `b71c5dd84aa81b674a5c47ed4e1ec2eea5d98917`, árvore limpa, staging vazio, origin `https://github.com/CleristonMP/portfolio-v2.git`. M2-06 recebeu parecer verificável Work e foi commitada/enviada posteriormente ao handoff original, conforme esta conversa; confirmação manual de zoom foi aceita no parecer com limitação documental. M2-05 em 7af9622, M2-04 em d59b827, M2-03 em 73e5f7d; baseline inicial e correção documental continuam distintos. Sem nova consulta remota.

Lidos workflow, status, plano M2, PRD vigente v2.3 e handoffs M2-03 a M2-06. Nenhum AGENTS.md encontrado no repositório/ancestrais consultados. Código, dados, traduções, estilos/tokens, assets, base path e exports Stitch preservados; não há alteração visual/produtiva neste lote. Fontes técnicas consultadas: [Vitest](https://vitest.dev/guide/) e [Testing Library](https://testing-library.com/docs/react-testing-library/setup/).

## Arquivos e dependências

- `package.json`/`package-lock.json`: somente seis novas dependências diretas de desenvolvimento: Vitest 5.0.4, @testing-library/react 16.3.3, @testing-library/dom 10.4.2, @testing-library/user-event 14.6.8, @testing-library/jest-dom 6.9.1 e jsdom 26.1.0. Versões exatas/transitivas no lockfile. React/TypeScript/Vite/Tailwind e demais dependências existentes não mudam de major. Nenhuma dependência runtime adicionada.
- Vitest executa o runner; Testing Library React/DOM fornece render e consultas por papel/nome; user-event fornece teclado/click/Tab realistas no DOM; jest-dom fornece asserções semânticas de foco/nome/atributos; jsdom fornece ambiente DOM. Vitest 5 usa o Vite 6.4.4 já resolvido e Node 22.16.0 documentado. jsdom 26 é compatível com esse runtime.
- `vitest.config.ts`: reaproveita configuração Vite por merge, sem alterar plugin/base; ambiente jsdom, setup explícito, glob somente tests, restauração de spies/globals.
- `tests/setup.ts`: limpeza React, restauração de mocks/globals e reset de storage/metadados a cada caso. Sem requisições de mídia/fontes nem navegador novo.
- `tests/media.ts`: MediaQueryList com estado, listeners/change e remoção; cada teste instala instância isolada. Representa o breakpoint do shell, sem alegar layout/CSS. Falhas de storage são spies no getter ou nos métodos nativos, restaurados entre testes.
- `tests/language.test.tsx`: App real; PT→EN→PT, nomes acessíveis/textos/alt, metadados, preferência válida na inicialização/remount, ausente/inválida, getter/getItem/setItem que lançam exceção sem interromper render/alternância.
- `tests/shell.test.tsx`: PT/EN, primeiro Tab/skip/main, Space/Enter, nomes/expanded/controls, foco no primeiro link, Tab/Shift+Tab, Escape, cada destino e fechamento, skip com menu aberto, Escape sem roubar foco fora do header, breakpoint com nav/botão/CTA e blur anterior ao media event.
- `tests/content.test.tsx`: contatos ausentes/incompletos/URLs pendentes/inseguras sem links fabricados; dados de fixture restaurados em finally; URLs privadas/públicas/opcionais e natureza compatível. URLs de exemplo existem apenas em testes.
- `tsconfig.json`: inclui tests e vitest.config.ts além de src/vite.config.ts; `npm run typecheck` verifica testes/configurações em strict. ESLint inclui testes com globals browser e regras Hooks; format inclui TS/TSX/YAML.
- `.github/workflows/quality.yml`: push e pull_request, Ubuntu, Node 22.16.0, timeout 15 minutos, cache npm, npm ci, typecheck/lint/format:check/test/scripts/build. `contents: read` apenas e checkout `persist-credentials: false`. Sem pull_request_target, secrets, ambiente privilegiado, deploy/Pages/releases ou publicação.
- README/PROJECT_STATUS/este handoff: comandos, limites, desfecho M2-06 e gate de M2-07. Histórico e handoffs anteriores preservados.

## Reaproveitamento das verificações

`scripts/verify-content.mjs` e `scripts/verify-i18n.mjs` permanecem intactos. Seus invariantes de IDs únicos/estáveis, fatos desconhecidos, dados/links privados/opcionais, paridade e strings não vazias PT/EN (incluindo fixtures negativas), fallback HTML, labels/alt e nomes oficiais continuam no pipeline como `verify:content`/`verify:i18n`. A comparação opcional histórica permanece disponível. Não foram copiados todos esses asserts para o runner; o runner acrescenta interação React e efeitos que renderização estática não comprova. Alguma sobreposição de links/metadados é intencional para validar a fronteira renderizada real.

Comandos: `npm test` = vitest run (uma execução CI), `npm run test:watch` = vitest interativo. Sem cobertura percentual imposta, snapshots ornamentais, E2E ou ferramentas de navegador novas.

## Critérios individuais

| Critério | Resultado local / evidência |
|---|---|
| 1. Ferramentas compatíveis e verificadas | Vitest/Testing Library/jsdom como devDependencies; lockfile atualizado; testes/configs em typecheck/lint/format. Instalação reproduzível e checks na seção seguinte. |
| 2. Comportamento observável | Suíte monta App real e cobre idioma/storage/metadados/skip/menu/foco/breakpoint/links; consultas por papel/nome e user-event. Fixtures/mocks restaurados. Sem mudança de produção para fazer teste passar. |
| 3. Invariantes e scripts | Ambos scripts preservados e executados, sem perda de cobertura histórica; paridade/dados continuam gate independente. |
| 4. Execução única/interativa | npm test e test:watch documentados; sem infraestrutura E2E ou meta arbitrária de cobertura. |
| 5. CI sem deploy | YAML parseado e estrutura/permissões/gatilhos/runtime/comandos conferidos localmente; revisão do fonte sem publicação/segredos. Não equivale a execução GitHub. |
| 6. Equivalente local ao pipeline | npm ci seguido de todos os checks; resultados finais abaixo. |
| 7. Acompanhamento e revisão | README/status/handoff atualizados; aprovação/commit M2-06 distinguido do histórico; M2-07 aguarda revisão e snapshot próprios. CI remota permanece pendente. |

## Validação, resultados e ambiente

Runtime direto Node 22.16.0/npm 10.9.2, PATH apenas do processo. Shim global Volta permanece intacto. Instalação inicial em sandbox ficou sem retorno de rede e foi interrompida; instalação pelo registro npm fora da restrição foi autorizada. Primeira seleção Vitest 3.2.7 revelou alertas novos críticos; foi substituída antes da entrega por Vitest 5.0.4, mantendo as majors existentes. Não foi usado audit fix/force. Uma execução exploratória de Vitest 3 ainda ativa durante a troca falhou por arquivos de worker substituídos; foi encerrada e não conta como validação. Vitest 5 em instalação consistente passou; sequência final começa por npm ci.

```powershell
$env:PATH = 'C:\Program Files\nodejs;' + $env:PATH
npm ci
npm run typecheck
npm run lint
npm run format:check
npm test
npm run verify:content
npm run verify:i18n
npm run build
git diff --check
```

| Comando | Resultado |
|---|---|
| npm ci | Passou: 312 pacotes instalados, 313 auditados; sete advisories herdados, sem críticos. |
| npm run typecheck | Passou; src/testes/configs strict. |
| npm run lint | Passou; zero warnings. |
| npm run format:check | Passou. |
| npm test | Passou: 3 arquivos, 48 testes, Vitest 5.0.4. |
| npm run verify:content | Passou: invariantes, URLs e renderização segura. |
| npm run verify:i18n | Passou: paridade/nonempty, storage, metadados, labels/alt. |
| npm run build | Passou: Vite 6.4.4, 1597 módulos; CSS 16,62 kB (4,44 gzip), JS 249,89 kB (77,59 gzip). |
| git diff --check | Passou após normalização LF do lockfile gerado pelo npm. |
| Parse/conferência local do workflow | Passou; limitações abaixo. |

Sequência final executada fora da restrição conhecida do sandbox. Build mantém exatamente os nomes/hashes CSS `index-C-fp12Nq.css` e JS `index-ishzC4jI.js` registrados em M2-06. A primeira conferência whitespace detectou CRLF no lockfile gerado pelo npm; foi normalizado para LF com igualdade do JSON verificada, sem alterar resolução/integridades. O lockfile no HEAD tinha 4.196 finais CRLF; a conversão integral para LF explica o diff textual grande. Comparação JSON confirmou zero mudanças de versão entre todos os pacotes já presentes no lockfile anterior; somente novos pacotes de testes foram acrescentados. Instalação pelo lockfile final e suíte reconferidas após a normalização. Sem mudança global de Git/runtime.

Adicional: `npm run format` aplicado apenas aos arquivos próprios/configurações, referências excluídas; parse YAML e asserts locais com js-yaml já transitivo do ESLint, sem instalar validador adicional. Reprodução no mesmo ambiente: `node .workflow/verify-m2-07-workflow.mjs`; evidência transitória ignorada. Isso verifica YAML, steps, gatilhos, Node/permissões e ausência de opções privilegiadas; não executa Actions, runner Linux, cache ou downloads das actions. A execução remota deve ser observada somente depois de aprovação/push autorizado.

## Limitações e pendências

jsdom não é engine de layout: estes testes não comprovam display:none/media CSS, ausência de links ocultos no Tab real, geometria, contraste, zoom, scroll suave ou histórico nativo/Voltar. Asserções de breakpoint comprovam resposta a eventos/foco; sem CSS de produção, controles desktop/mobile coexistem no DOM simulado. Visibilidade e sequência real seguem evidências de navegador M2-06; zoom manual foi declarado pelo responsável e aceito no parecer, sem inventar captura. Remount verifica releitura da preferência, sem alegar reload real de navegador.

Sete advisories herdados permanecem (duas moderadas/cinco altas, cadeia Tailwind); a instalação final não reportou críticos. Não houve liberação de segurança nem atualização major da stack para resolvê-los. Avisos de dependência transitiva whatwg-encoding, conteúdo/contatos/credenciais/permissões/mídias/publicação e Volta continuam documentados. Nenhum defeito de produção confirmado exigiu mudança de escopo. Não há aceite visual M3 ou auditoria completa WCAG/performance/segurança.

Work deve acessar a árvore completa, incluindo arquivos novos de testes/configuração/workflow. Diff e snapshot locais incluem novos/alterados; `.workflow/`/`.m2-review/` fora do staging. Snapshot de implementação não é aprovação. Nenhum registro anterior é reutilizado, nenhum commit/push autorizado por esta entrega. M2-08 permanece pendente; M2 não concluído.

Mensagem sugerida: `test(foundation): add behavioral tests and read-only quality CI`
