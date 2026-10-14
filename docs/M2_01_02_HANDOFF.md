# Handoff — M2-01 e M2-02

Data: 14/10/2026. Estado: **validadas localmente, aguardando revisão do Work**. O milestone permanece aberto; nenhuma tarefa posterior foi executada. Nenhum commit, push ou deploy.

## Estado inicial e preservação

`git remote -v`: origin fetch/push `https://github.com/CleristonMP/portfolio-v2.git`.
`git status --short --branch`: `No commits yet on main`; todos os arquivos não rastreados, incluindo dependências, build e tsbuildinfo. Não existia baseline para `git diff`. Nenhum AGENTS.md foi encontrado no repositório ou nos diretórios ancestrais consultados.

`git switch -c chore/m2-technical-foundation` preparou a branch sem criar commit. A escrita em `.git` exigiu execução autorizada fora da restrição de filesystem; não houve alteração do remote.

Antes das edições foram guardadas cópias locais ignoradas do código e hashes SHA-256 de docs/design. A comparação posterior encontrou **zero arquivos de referência alterados**. Formatar cada cópia original com a configuração final do Prettier produziu exatamente o arquivo final em App, content, main, CSS, HTML, Vite, Tailwind e PostCSS. Isso evidencia ausência de alteração intencional no conteúdo ou comportamento; não constitui auditoria visual de navegador.

## Arquivos alterados ou criados neste lote

- `.gitignore`: dependências, builds, caches, TS gerado, logs, configuração local e segredos; exemplos de ambiente permitidos.
- `.prettierignore`, `.prettierrc.json`, `eslint.config.js`: ferramentas com exclusão dos materiais de referência; TS, Hooks e React Refresh verificados.
- `package.json`, `package-lock.json`: scripts, engine Node e dependências exclusivamente de lint/formatação. Majors da stack original preservados.
- `tsconfig.json`: inclui também `vite.config.ts`, mantendo strict/noEmit.
- `README.md`: instalação pelo lockfile, runtime, comandos, diagnóstico do Volta e escopo.
- `src/App.tsx`, `src/content.ts`, `src/main.tsx`, `src/styles.css`, `index.html`, `vite.config.ts`, `tailwind.config.js`, `postcss.config.js`: somente formatação.
- `docs/M2_01_02_HANDOFF.md`: este registro de evidências.

## Critérios de aceite

| Critério | Resultado e evidência |
|---|---|
| 1. Remote, branch e estado inicial | Passou. `git remote -v`, `git symbolic-ref --short HEAD`, `git status --short --branch`; branch `chore/m2-technical-foundation`, sem commits. |
| 2. Exclusões e materiais necessários | Passou. `git check-ignore` confirmou node_modules, dist, cache, tsbuildinfo, .env, .env.production, private.key e configuração VS Code. Exemplos .env.example/.env.production.example, lockfile, PRD e ZIP não ignorados. `git ls-files --others --exclude-standard` não listou artefatos. |
| 3. Instalação e runtime | Passou. Node direto v22.16.0/npm 10.9.2; `npm ci --cache .cache/npm --fetch-retries=0 --fetch-timeout=20000` saiu 0: 238 pacotes instalados, 239 auditados. Cache local ignorado. |
| 4. Checks | Passou. `npm run typecheck`, `npm run lint`, `npm run format:check`, `npm run build` saíram 0. Formato: All matched files use Prettier code style. Build: Vite 6.4.4, 1580 módulos; JS 242,17 kB (75,21 gzip), CSS 13,30 kB (3,82 gzip). |
| 5. Configurações TS | Passou. `node node_modules/typescript/bin/tsc --listFilesOnly` listou src/content.ts, src/App.tsx, src/main.tsx e vite.config.ts. |
| 6. Conteúdo, aparência e comportamento | Passou no escopo de alteração: comparação com Prettier dos originais confirmou somente formatação nos arquivos da aplicação e configurações existentes. Sem extração estrutural. Nenhum smoke visual foi realizado neste lote. |
| 7. Escopo M2-01/02 | Passou. Somente higiene, ferramentas, formatação e documentação. Sem testes, CI, i18n, formulário, assets, redesign ou deploy. |

## Ambiente e limitações

Os comandos de validação usaram `$env:PATH = 'C:\Program Files\nodejs;' + $env:PATH` apenas no processo. O shim Volta retornou `Could not determine Volta install directory`; Node direto funcionou. Nenhuma configuração global foi modificada. A primeira tentativa de instalação no ambiente restrito ficou sem resultado e foi interrompida; instalação com acesso autorizado ao registry e posterior npm ci concluíram.

O npm reportou **7 vulnerabilidades (2 moderadas, 5 altas)** e aviso de fim de suporte do ESLint 9.39.5. Não foi realizada triagem de advisories nem aplicado `npm audit fix`; essa avaliação fica registrada como limitação para revisão, sem alegar auditoria de segurança concluída. ESLint 9 foi usado com a linha de plugins configurada para este runtime. O build mantém o aviso preexistente de ausência de classes utilitárias Tailwind; a aplicação usa CSS próprio. Os checks solicitados passam com esses avisos.

O reparo global do Volta permanece fora do escopo. Conteúdo editorial, autorização de mídias, destino de publicação, testes e CI continuam nos gates posteriores. Work deve revisar este lote antes de avanço.

## Conventional Commit sugerido

`chore(tooling): prepare repository hygiene and reproducible quality checks`
