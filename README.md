# Cleriston Pereira — Full Stack & Mobile Developer

Estado avaliado pelo Work em 15/10/2026: **M2 tecnicamente concluído**, com implementação até `c337da4` e [CI final bem-sucedida](https://github.com/CleristonMP/portfolio-v2/actions/runs/38830919198). A formalização documental de fechamento aguarda revisão própria; os estados de espera descritos nas entregas abaixo são históricos. Próximo milestone: M3 — Interface, ainda sem implementação iniciada ou plano detalhado aprovado. O site continua sem liberação para publicação. Estado consolidado e limitações em `PROJECT_STATUS.md`.

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

Na entrada de M2-01/M2-02 (14/10/2026), `origin` era `https://github.com/CleristonMP/portfolio-v2.git`, a branch era `main` sem commit inicial e todos os arquivos eram não rastreados, incluindo `node_modules/`, `dist/` e `tsconfig.tsbuildinfo`. Foi preparada a branch `chore/m2-technical-foundation`, inicialmente sem commits. M2-01/M2-02 foram posteriormente aprovadas pelo Work e registradas no commit `e3fb2be`; o acompanhamento atual está em `PROJECT_STATUS.md`. O `.gitignore` exclui dependências, builds, caches, configurações locais e segredos, permitindo `.env.example` e `.env.*.example` sem credenciais. Lockfile, documentos e ZIPs do Stitch foram preservados no versionamento.

O registro inicial acima corresponde a M2-01/M2-02; o acompanhamento corrente é M2-08. A aplicação mantém seis seções e alternância PT/EN, com imagens temporariamente vinculadas ao repositório público anterior. Componentes, contratos, tokens, i18n e shell de M2-03 a M2-06 foram posteriormente aprovados e commitados.

## Pendências antes de publicar

- Validar conteúdo, stacks, contatos, links e permissões das capturas.
- Completar cases, traduções e integração real de contato.
- Migrar mídias autorizadas e validar responsividade e acessibilidade.
- Completar os critérios pendentes e revisar M2-08; não encerrar M2 antes do parecer do Work.
- Decidir domínio/destino na etapa de publicação; `/` é a base local padrão e `/portfolio-v2/` é somente um cenário explícito de preview.

Consulte `PROJECT_STATUS.md`, `DEVELOPMENT_WORKFLOW.md`, `docs/MILESTONE_2_PLAN.md` e `docs/PRD_Portfolio_Cleriston_v2.3.md`. O portfólio antigo permanece intacto. M2-07 foi aprovada/commitada e sua CI passou; M2-08 aguarda revisão própria do Work; não houve merge ou deploy no fluxo revisado.

## Testes e CI sem deploy — M2-07

A suíte cobre idioma/metadados/storage, skip/menu/foco/breakpoint e fronteiras de links/contatos incompletos. `npm run verify:content` mantém invariantes editoriais, IDs, URLs e renderização segura; `npm run verify:i18n` mantém paridade/nonempty PT/EN, fallback HTML, labels/alt, nomes oficiais e fixtures negativas. São verificações Node independentes e complementares ao runner, preservadas para evitar perder cobertura histórica. Comparação estrutural histórica opcional: `node scripts/verify-content.mjs --baseline=cd08a2c`.

O workflow `.github/workflows/quality.yml` roda em push/pull_request com Node 22.16.0, npm ci, typecheck, lint, format:check, testes em execução única, os dois scripts e build. Permissão apenas contents:read, checkout sem persistência de credenciais; sem deploy, Pages, releases, secrets ou pull_request_target. Checks locais não comprovam execução no GitHub: a CI de M2-07 passou para 201f0e7 (registro abaixo); mudanças de M2-08 não foram enviadas e sua execução remota não é alegada. Nenhuma cobertura percentual arbitrária é exigida.

Vitest 5 requer Vite >=6.4 e Node >=22.12: o lockfile existente já resolvia Vite 6.4.4 e o runtime documentado é Node 22.16.0. O novo runner não exige atualizar as versões principais existentes. A versão exata instalada e resultados estão no lockfile e no handoff M2-07.

## Preview local — M2-08

Base local padrão **/**. Terminal 1:

```sh
npm run build
npm run preview
```

Abra `http://127.0.0.1:4180/`. Para testar explicitamente um subdiretório, em outro terminal:

```sh
npm run build:subpath
npm run preview:subpath
```

Abra `http://127.0.0.1:4181/portfolio-v2/`. Esses scripts usam flags nativas do Vite: `--base=/portfolio-v2/ --outDir=.m2-review/m2-08/dist-subpath`. O build raiz fica em dist e o build alternativo no diretório ignorado separado; ambos podem ser servidos simultaneamente. Portas fixas com strictPort evitam testar outro servidor por engano. Encerre cada preview com Ctrl+C. Preview serve build: após editar, gere novamente. Não é servidor de produção ou decisão de hospedagem.

`npm run verify` reúne verify:content e verify:i18n, sem remover os comandos individuais. O pedido de M2-08 lista verify duas vezes; ambos foram executados. CI continua chamando os scripts individuais. Não há dependência nova.

A fixture `scripts/fixtures/i18n-smoke.html` é **somente de desenvolvimento**, não integra o build. Ela usa caminhos relativos e pode ser reproduzida com:

```sh
node node_modules/vite/bin/vite.js --host=127.0.0.1 --port=4182 --strictPort
node node_modules/vite/bin/vite.js --base=/portfolio-v2/ --host=127.0.0.1 --port=4183 --strictPort
```

Execute cada linha em um terminal separado e abra, respectivamente, `http://127.0.0.1:4182/scripts/fixtures/i18n-smoke.html` e `http://127.0.0.1:4183/portfolio-v2/scripts/fixtures/i18n-smoke.html`. Escolha preferência EN e Preparar, ou Falha na leitura e Montar; verifique aplicação/metadados. Relatos anteriores em /portfolio/ são históricos; não representam mais comandos ativos.

CSS/JS do build são locais e respeitam a base. Google Fonts e as quatro imagens atuais continuam externas, com migração/autorização pendentes em milestones posteriores. Não remover `/portfolio/` das URLs de mídia do repositório antigo: ali é nome do repositório de origem, não a base local da aplicação.

[CI M2-07 concluída com sucesso](https://github.com/CleristonMP/portfolio-v2/actions/runs/38643035949), commit `201f0e7a01bb0e2fd074675fd67c23899e200db2`; confirmação read-only em M2-08. Matriz 320/390/768/1280/1920 PT/EN nos dois previews, critérios e limitações em docs/M2_08_HANDOFF.md. Overflow de 15 px em 320 px foi corrigido por ajuste mínimo autorizado em 15/10/2026; matriz final 20/20 com scrollWidth=clientWidth, aguardando nova revisão Work; zoom real 200% e reduced motion foram posteriormente validados manualmente e aprovados pelo responsável no Google Chrome (15/10/2026), com evidência e limites no handoff; não confundir viewport ou regra CSS com esses critérios. M2 permanece aberto, aguardando Work; sem publicação.
