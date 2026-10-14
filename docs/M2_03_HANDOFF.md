# Handoff — M2-03 — Estrutura e contratos

Data: 14/10/2026. Estado: **em execução — implementada e verificada localmente, aguardando revisão do Work**. Não há parecer de aprovação desta entrega; nenhum commit/push foi realizado. M2-04 e tarefas posteriores não foram iniciadas.

## Contexto e fontes

Entrada observada: árvore limpa na branch `chore/m2-technical-foundation`, HEAD `cd08a2c05fcb8b1420581c640bffac3ef46db452`; origin configurado para `https://github.com/CleristonMP/portfolio-v2.git`. Sem consulta remota. Nenhum AGENTS.md encontrado no repositório ou nos ancestrais consultados.

A baseline técnica aprovada é `e3fb2bebaba97462e039290083699de2b16e3e89`. A regularização documental posterior, também aprovada, é `cd08a2c05fcb8b1420581c640bffac3ef46db452`. São dois commits distintos; suas aprovações não cobrem M2-03.

Lidos DEVELOPMENT_WORKFLOW.md, PROJECT_STATUS.md, plano M2, PRD v2.3 e handoff anterior. Consultados DESIGN.md, code.html e screen.png dos dois ZIPs do Stitch, extraídos apenas para `.m2-review/m2-03/`. Materiais originais preservados. A extração mantém o starter existente; não pretende resolver as divergências de fidelidade visual previstas em M3 nem os tokens de M2-04.

## Arquivos e decisões

- `src/content/contracts.ts`: contratos explícitos para Project, Course, Skill, Profile, Contact, OptionalLink, navegação e traduções. Natureza, status funcional, visibilidade de código e revisão editorial separados; campos desconhecidos opcionais.
- `src/content/projects.ts`, `courses.ts`, `skills.ts`, `profile.ts`, `navigation.ts`: dados separados da apresentação. Slugs dos quatro projetos preservados; IDs permanentes para cursos, skills, perfil e contatos. Mesmos datasets em desktop/mobile.
- `src/i18n/translations.ts`: dicionário existente transferido sem alterar os textos, com chaves e tupla de navegação explícitas. Sem novas traduções, persistência ou metadados.
- `src/content/links.ts`: URLs ausentes, pendentes, malformadas, sem HTTPS, com credenciais ou espaços/controles não geram URL utilizável. Repositórios exigem visibilidade pública; projeto privado pode ter case autorizado, mas não link de código. Store restrita à natureza produto próprio. Confirmação editorial não equivale a teste atual de disponibilidade remota.
- `src/sections/HeroSection.tsx`, `ProjectsSection.tsx`, `SkillsSection.tsx`, `AboutSection.tsx`, `LearningSection.tsx`, `ContactSection.tsx`: seis seções extraídas mantendo elementos, classes, ordem e âncoras.
- `src/components/layout/Header.tsx`, `Footer.tsx`: layout com props tipadas, callbacks e textos existentes. `src/components/SectionHeading.tsx` reutiliza a estrutura repetida de projetos/formação sem acrescentar wrappers.
- `src/App.tsx`: compõe layout/seções e mantém apenas os estados existentes de idioma e menu. `src/content.ts` removido após migração de todos os dados.
- `scripts/verify-content.mjs`: verificações focadas com Node assert, compilador TypeScript e renderização React existentes; módulos TS executados em memória, sem runner/dependências novas. Comparação opcional com commit anterior por `git show`, sem checkout.
- `eslint.config.js`: ignora `.workflow/**`, assim como as outras evidências locais; o lint inicial encontrou scripts transitórios de revisões anteriores. Nenhuma regra de produção foi desabilitada.
- `PROJECT_STATUS.md` e `docs/M2_03_HANDOFF.md`: acompanhamento e evidências deste lote.

Reports Registry tem natureza comercial e código privado; Audience-Counter é produto próprio publicado segundo o relato registrado no PRD, com URL da loja ainda ausente; Web Matrículas é independente e não implantado; DS Commerce é educacional, implementado, sem pagamentos. A visibilidade dos demais repositórios permanece desconhecida. Os antigos valores `private`, `store-pending` e `educational` deixaram de representar conceitos diferentes no mesmo campo.

O PRD declara desconhecidas as stacks dos três primeiros projetos. Por isso React/Spring Boot foram removidos dos cards de Reports Registry e Web Matrículas; nenhum substituto foi inventado. Audience-Counter conserva Android como plataforma confirmada, sem atribuir framework. DS Commerce mantém React/Spring Boot confirmados. As skills atuais foram preservadas como rótulos sujeitos à validação de evidências de proficiência. Títulos de cursos/instituições preservados; título oficial final, ano e credencial continuam pendentes. Disponibilidade e anos de experiência não foram inventados. O GitHub de perfil já existente foi preservado com confirmação editorial da identidade fornecida; nenhum contato novo foi ativado.

## Critérios individuais

| Critério M2-03 | Resultado local / evidência |
|---|---|
| App compõe seções extraídas | Atendido: seis módulos, Header/Footer, App coordena os dois estados existentes; comparação de markup e smoke. |
| Contratos explícitos | Atendido: interfaces readonly e tipos nomeados para todos os registros e traduções; typecheck strict passou. |
| IDs estáveis e conceitos separados | Atendido: slugs originais mantidos, IDs dos demais registros e campos independentes; script compara IDs esperados e detecta duplicatas. |
| Campos desconhecidos opcionais/pendentes | Atendido: sem stacks não comprovadas, datas, credenciais, experiência ou disponibilidade fictícias; pendingFields e OptionalLink. |
| URLs ausentes/privadas não geram links | Atendido: helpers verificados com fixtures ausentes, pendentes, protocolos inseguros, código privado/desconhecido e store incompatível; contato incompleto renderizado sem âncora. Cards continuam sem links de projetos; não foram introduzidos cases ou CTAs novos. |
| Desktop/mobile com mesmos dados e âncoras | Atendido: DOM nas duas dimensões com 4 projetos, 6 skills, 4 cursos e IDs home/projects/skills/about/learning/contact. |
| Estrutura visual e comportamentos preservados | Atendido no smoke e comparação estática, com a correção editorial explícita das duas stacks. CSS, tema, fontes, base, assets e textos existentes não alterados. Não é aceite visual completo Stitch/WCAG. |
| Revisão Work | **Pendente**: precisa de revisão da árvore completa e novo snapshot verificável antes de aprovação/commit/push. |

## Comandos e resultados

Runtime: Node direto 22.16.0, npm 10.9.2, usando somente o PATH do processo PowerShell:

```powershell
$env:PATH = 'C:\Program Files\nodejs;' + $env:PATH
npm run typecheck
npm run lint
node scripts/verify-content.mjs --baseline=cd08a2c
npm run format
npm run format:check
npm run build
git diff --check
```

Typecheck e lint passaram. Script passou para IDs únicos/estáveis, fatos editoriais ausentes, links opcionais/privados, as seis seções e renderização segura de contatos incompletos. Comparação completa do HTML estático PT com `cd08a2c` passou após descontar somente as duas stacks não confirmadas; imagens, SVGs, classes, ordem, texto e âncoras restantes coincidem. O script não modifica dados persistentes nem a árvore Git; fixtures de contato são restauradas após a verificação.

Formatação e build passaram. Vite 6.4.4: 1595 módulos; CSS 13,30 kB (3,82 gzip), arquivo `index-CBnwojVo.css` idêntico ao build anterior; JS 245,15 kB (76,14 gzip). Sem auditoria de performance. Conferência final: `npm run format:check` e `git diff --check` passaram (retorno 0). Comparação binária com HEAD confirmou 18 arquivos protegidos intactos, incluindo CSS, tema, Vite, entradas, dependências/lockfile, configuração TS, workflow, README, handoff/plano anteriores, todos os PRDs e os dois ZIPs.

## Smoke reproduzível e evidências

Servidor: `node node_modules/vite/bin/vite.js --host 127.0.0.1 --port 5173 --strictPort`; abrir `http://127.0.0.1:5173/portfolio/`. O primeiro servidor em sandbox não permitiu acesso de sockets; execução local autorizada fora dessa restrição funcionou, sem mudar configuração global ou publicar o site.

Edge, viewport 1280×900: seis seções, quatro imagens carregadas, quatro projetos, seis skills e quatro cursos; menu mobile oculto; grade com três colunas e nenhum overflow horizontal. Alternância PT → EN atualizou a interface, mantendo nomes oficiais. Link Projects navegou para #projects.

Edge, viewport 390×844: mesmos registros e seções, grade de projetos em uma coluna, nenhum overflow horizontal. Menu abriu e fechou pelo botão, exibiu labels PT/EN e fechou ao navegar para #learning. Learning ficou visível com os quatro títulos. Alternância EN → PT funcionou. Footer retornou a #home. Trocar para EN e recarregar retornou a PT, preservando a ausência de persistência atual. Não foram adicionados Escape, retorno de foco, aria-expanded ou metadados; essas melhorias continuam nos lotes próprios. Override do viewport restaurado ao final.

Capturas locais transitórias, disponíveis ao Work no mesmo ambiente: `.m2-review/m2-03/desktop-1280.png` e `.m2-review/m2-03/mobile-390.png`. Não integram o commit. O smoke cobre as dimensões acima e os comportamentos afetados; não cobre toda a matriz de M2-08, zoom, contraste, leitor de tela ou regressão pixel a pixel.

## Limitações e gate

Sem instalação de dependências, testes Vitest/Testing Library, CI, formulário, cases, migração de mídias, redesign ou tarefas M2-04+. Stacks, contatos, credenciais e permissões pendentes continuam nos dados/documentos. Imagens externas preexistentes preservadas; não houve auditoria de sensibilidade ou autorização de publicação. Advertência Tailwind preexistente permanece; problema global do Volta e sete vulnerabilidades/aviso de suporte ESLint do handoff anterior não foram reavaliados ou resolvidos neste lote.

Nenhum commit, staging, push, merge ou deploy. Revisar arquivos novos, modificados e a remoção de src/content.ts na árvore local; um remoto com cd08a2c não contém esta entrega. Snapshot de implementação registrado em `.workflow/m2-03-implementation-snapshot.json`, reproduzível por `node .workflow/review-snapshot.mjs` (método local de SHA-256 de JSON canônico dos arquivos, bytes brutos e blobs sem filtros). Inclui arquivos novos, alterados e remoção; não é parecer nem autorização. Work deve revisar a árvore e produzir nova aprovação verificável própria. Aprovações anteriores não são reutilizadas. Parar aqui até o parecer do Work.

Mensagem sugerida: `refactor(content): define editorial contracts and extract portfolio sections`
