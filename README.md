# Cleriston Pereira — Full Stack & Mobile Developer

Portfólio v2 em React 19, TypeScript 5.7, Vite 6 e Tailwind CSS 3.4, baseado nos exports do Stitch. A fundação técnica está em revisão; o site ainda não está pronto para publicação.

## Runtime e instalação

Use Node **22.x, a partir de 22.16.0** (validado com 22.16.0 e npm 10.9.2). O `package-lock.json` deve ser preservado; use instalação reproduzível:

```sh
npm ci
npm run dev
```

Abra o endereço informado pelo Vite. Para inspecionar o build local, execute `npm run build` e `npm run preview`.

## Validação e formatação

```sh
npm run typecheck
npm run lint
npm run format:check
npm test
npm run verify:content
npm run verify:i18n
npm run build
```

`npm run format` aplica Prettier ao código próprio e às configurações. PRD, documentação de referência e exports do Stitch são excluídos da formatação. O typecheck usa modo strict e inclui `src`, `tests`, `vite.config.ts` e `vitest.config.ts`; ESLint verifica TypeScript, React Hooks, testes e configurações JavaScript. `npm test` executa Vitest uma vez (CI); `npm run test:watch` inicia execução interativa local. Testing Library/user-event exercitam a aplicação real em jsdom, com mocks isolados de matchMedia e storage. Esses testes não comprovam layout, CSS, zoom real ou histórico nativo.

## Windows e shim Volta

Neste ambiente, `node`/`npm` inicialmente resolviam para `C:\Program Files\Volta` e falhavam com `Could not determine Volta install directory`. A instalação direta em `C:\Program Files\nodejs` funciona. No PowerShell, ajuste somente o processo atual, sem modificar configurações globais:

```powershell
$env:PATH = 'C:\Program Files\nodejs;' + $env:PATH
node --version
npm --version
npm ci
npm run typecheck
npm run lint
npm run format:check
npm test
npm run verify:content
npm run verify:i18n
npm run build
```

Adapte o caminho se sua instalação direta estiver em outro diretório. Invocar apenas o npm por caminho absoluto não garante que seus subprocessos encontrem o Node correto; o PATH do processo também deve priorizar a instalação direta. O reparo global do Volta permanece fora do escopo.

## Estado e escopo

Na entrada deste lote (14/10/2026), `origin` era `https://github.com/CleristonMP/portfolio-v2.git`, a branch era `main` sem commit inicial e todos os arquivos eram não rastreados, incluindo `node_modules/`, `dist/` e `tsconfig.tsbuildinfo`. Foi preparada a branch `chore/m2-technical-foundation`, inicialmente sem commits. M2-01/M2-02 foram posteriormente aprovadas pelo Work e registradas no commit `e3fb2be`; o acompanhamento atual está em `PROJECT_STATUS.md`. O `.gitignore` exclui dependências, builds, caches, configurações locais e segredos, permitindo `.env.example` e `.env.*.example` sem credenciais. Lockfile, documentos e ZIPs do Stitch foram preservados no versionamento.

O registro inicial acima corresponde a M2-01/M2-02; o acompanhamento corrente é M2-07. A aplicação mantém seis seções e alternância PT/EN, com imagens temporariamente vinculadas ao repositório público anterior. Componentes, contratos, tokens, i18n e shell de M2-03 a M2-06 foram posteriormente aprovados e commitados.

## Pendências antes de publicar

- Validar conteúdo, stacks, contatos, links e permissões das capturas.
- Completar cases, traduções e integração real de contato.
- Migrar mídias autorizadas e validar responsividade e acessibilidade.
- Revisar M2-07 e executar CI remota somente após aprovação e push autorizado.
- Decidir destino e base path na etapa de publicação; `/portfolio/` permanece como configuração herdada, sem representar decisão de destino.

Consulte `PROJECT_STATUS.md`, `DEVELOPMENT_WORKFLOW.md`, `docs/MILESTONE_2_PLAN.md` e `docs/PRD_Portfolio_Cleriston_v2.3.md`. O portfólio antigo permanece intacto. M2-07 aguarda revisão própria do Work e M2-08 permanece pendente; não houve merge ou deploy no fluxo revisado.

## Testes e CI sem deploy — M2-07

A suíte cobre idioma/metadados/storage, skip/menu/foco/breakpoint e fronteiras de links/contatos incompletos. `npm run verify:content` mantém invariantes editoriais, IDs, URLs e renderização segura; `npm run verify:i18n` mantém paridade/nonempty PT/EN, fallback HTML, labels/alt, nomes oficiais e fixtures negativas. São verificações Node independentes e complementares ao runner, preservadas para evitar perder cobertura histórica. Comparação estrutural histórica opcional: `node scripts/verify-content.mjs --baseline=cd08a2c`.

O workflow `.github/workflows/quality.yml` roda em push/pull_request com Node 22.16.0, npm ci, typecheck, lint, format:check, testes em execução única, os dois scripts e build. Permissão apenas contents:read, checkout sem persistência de credenciais; sem deploy, Pages, releases, secrets ou pull_request_target. Checks locais não comprovam execução no GitHub: a execução remota permanece pendente até revisão, aprovação verificável e push autorizado. Nenhuma cobertura percentual arbitrária é exigida.

Vitest 5 requer Vite >=6.4 e Node >=22.12: o lockfile existente já resolvia Vite 6.4.4 e o runtime documentado é Node 22.16.0. O novo runner não exige atualizar as versões principais existentes. A versão exata instalada e resultados estão no lockfile e no handoff M2-07.
