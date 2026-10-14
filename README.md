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
npm run build
```

`npm run format` aplica Prettier ao código próprio e às configurações. PRD, documentação de referência e exports do Stitch são excluídos da formatação. O typecheck usa modo strict e inclui `src` e `vite.config.ts`; ESLint verifica TypeScript, React Hooks e configurações JavaScript. Nenhum teste ou CI foi adicionado neste lote.

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
npm run build
```

Adapte o caminho se sua instalação direta estiver em outro diretório. Invocar apenas o npm por caminho absoluto não garante que seus subprocessos encontrem o Node correto; o PATH do processo também deve priorizar a instalação direta. O reparo global do Volta permanece fora do escopo.

## Estado e escopo

Na entrada deste lote (14/10/2026), `origin` era `https://github.com/CleristonMP/portfolio-v2.git`, a branch era `main` sem commit inicial e todos os arquivos eram não rastreados, incluindo `node_modules/`, `dist/` e `tsconfig.tsbuildinfo`. Foi preparada a branch `chore/m2-technical-foundation`, ainda sem commits. O `.gitignore` exclui dependências, builds, caches, configurações locais e segredos, permitindo `.env.example` e `.env.*.example` sem credenciais. Lockfile, documentos e ZIPs do Stitch permanecem candidatos ao versionamento.

Este lote cobre apenas M2-01 e M2-02. A aplicação mantém seis seções e alternância PT/EN, com imagens temporariamente vinculadas ao repositório público anterior. A extração de componentes pertence a M2-03.

## Pendências antes de publicar

- Validar conteúdo, stacks, contatos, links e permissões das capturas.
- Completar cases, traduções e integração real de contato.
- Migrar mídias autorizadas e validar responsividade e acessibilidade.
- Implementar testes e CI no lote previsto.
- Decidir destino e base path na etapa de publicação; `/portfolio/` permanece como configuração herdada, sem representar decisão de destino.

Consulte `DEVELOPMENT_WORKFLOW.md`, `docs/MILESTONE_2_PLAN.md` e `docs/PRD_Portfolio_Cleriston_v2.3.md`. O portfólio antigo permanece intacto. Não houve commit, push ou deploy.
