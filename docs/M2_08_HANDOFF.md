# Handoff — M2-08 — Preview e handoff

Data: 14/10/2026. Estado corrente em 15/10/2026: **implementada, correção mínima de overflow validada localmente, aguardando nova revisão obrigatória do Work**. Overflow corrigido e matriz refeita; diagnóstico anterior preservado abaixo. Zoom real 200% e reduced motion foram posteriormente validados manualmente e aprovados pelo responsável em 15/10/2026; registro ao final. M2 não concluído; M3 não iniciado. Sem staging, commit, push, merge, release, deploy ou decisão de hospedagem.

## Entrada, fontes e histórico

Observados localmente branch `chore/m2-technical-foundation`, HEAD `201f0e7a01bb0e2fd074675fd67c23899e200db2`, árvore limpa/staging vazio e origin `https://github.com/CleristonMP/portfolio-v2.git`. Lidos DEVELOPMENT_WORKFLOW, PROJECT_STATUS, plano M2, PRD v2.3 e handoffs M2-06/M2-07; demais handoffs pertinentes já lidos no histórico e preservados. Nenhum AGENTS.md encontrado no repositório/ancestrais consultados. Consultados DESIGN.md web, code.html mobile e screen.png web do Stitch; referências e ZIPs intactos. Direção dark/ciano/violeta, Manrope/Inter, superfícies e composição mantidas, sem aceite visual final M3.

M2-07 foi aprovada/commitada após seu handoff original. CI [38643035949](https://github.com/CleristonMP/portfolio-v2/actions/runs/38643035949) confirmada read-only por `gh run view 38643035949 --repo CleristonMP/portfolio-v2 --json status,conclusion,headSha,url`: completed/success para o SHA exato acima. Acesso inicial por web e CLI em sandbox falhou por rede; consulta CLI autorizada fora da restrição funcionou. Nenhum workflow foi disparado/reexecutado nesta entrega. CI de M2-07 não valida arquivos novos de M2-08 ainda não enviados.

## Arquivos e decisões

- `vite.config.ts`: base padrão / substitui /portfolio/. Plugin React e demais opções preservados.
- `package.json`: verify agrega verify:content e verify:i18n, preservando individuais; preview local em 127.0.0.1:4180 com strictPort; build:subpath e preview:subpath usam somente CLI Vite existente, base /portfolio-v2/, output separado ignorado e porta 4181. Sem dependências/lockfile alterados.
- `scripts/fixtures/i18n-smoke.html`: redirect relativo por new URL('../../', window.location.href) e import ../../src/main.tsx. Funciona em dev nas duas bases. Não foi incluída no build de produção.
- README: comandos reproduzíveis de build/preview/dev/fixture para os dois caminhos, limites de fontes/mídias externas, histórico M2-07/CI e gate M2-08.
- PROJECT_STATUS: registra aprovação/commit/CI M2-07, M2-08 aguardando Work com pendências, preserva histórico.
- Este handoff: matriz, evidências, resultados, limitações e revisão própria.

A CLI Vite suporta [base explícita no build](https://vite.dev/guide/build.html#public-base-path). Primeira tentativa `npm run build -- --base=/portfolio-v2/ --outDir ...` perdeu flags neste npm/PowerShell e tratou output como root, falhando por entry inexistente. Não é erro da aplicação; scripts explícitos evitam o problema e foram executados com sucesso. Nenhum ajuste global de shell, Git ou Volta.

Busca de caminhos antigos em src/scripts/tests/configuração/documentação ativa: somente a configuração e dois usos na fixture precisavam mudar. `/portfolio/` nas URLs raw.githubusercontent.com é o nome do repositório de origem das mídias, preservado intencionalmente. Handoffs anteriores com servidores /portfolio/ são relatos históricos intactos, não instruções ativas.

## Builds e previews reproduzíveis

Node direto 22.16.0/npm 10.9.2; PATH somente do processo conforme README.

```powershell
$env:PATH = 'C:\Program Files\nodejs;' + $env:PATH
npm run build
npm run preview
# http://127.0.0.1:4180/
```

Em outro terminal:

```powershell
$env:PATH = 'C:\Program Files\nodejs;' + $env:PATH
npm run build:subpath
npm run preview:subpath
# http://127.0.0.1:4181/portfolio-v2/
```

Script alternativo executa `tsc -b && vite build --base=/portfolio-v2/ --outDir=.m2-review/m2-08/dist-subpath`; preview usa a mesma base/output com --host=127.0.0.1 --port=4181 --strictPort. Raiz em dist, alternativo separado; ambos servidos simultaneamente sem sobrescrever um ao outro. Ctrl+C encerra cada servidor. Sem exposição pública/infraestrutura de publicação.

HTML/JS/CSS dos dois previews retornaram HTTP 200 e MIME apropriado, com prefixos /assets/ ou /portfolio-v2/assets/. CSS e JS têm os mesmos hashes nos dois builds e em M2-07: index-C-fp12Nq.css e index-ishzC4jI.js. HTML altera somente URLs locais de entrada para a base escolhida. Fontes Google Fonts e quatro imagens raw.githubusercontent.com continuam externas, com migração/licença/sensibilidade pendentes em M4. Carregamento observado não garante disponibilidade futura ou offline.

## Matriz de navegador — rodada inicial (histórico)

Navegador integrado disponível; Edge/Chrome não apareceram no inventário de Browser Use desta sessão. Viewport explícito: 320/390×844; 768/1280/1920×900. PT/EN selecionados por controle existente, reload em cada combinação, navegação para projetos/PageDown para carregar lazy images e retorno ao home. Capturas fullPage e JSON incremental. Todas as 20 combinações exibiram seis IDs, mesmos quatro projetos/quatro cursos/seis skills, quatro imagens carregadas (complete e naturalWidth>0), fontes computadas Inter/Manrope, status de fontes loaded, CSS local e metadados correspondentes ao idioma.

| Largura | / PT | / EN | /portfolio-v2/ PT | /portfolio-v2/ EN |
|---|---|---|---|---|
| 320 | Overflow 15 px | Overflow 15 px | Overflow 15 px | Overflow 15 px |
| 390 | Passou | Passou | Passou | Passou |
| 768 | Passou | Passou | Passou | Passou |
| 1280 | Passou | Passou | Passou | Passou |
| 1920 | Passou | Passou | Passou | Passou |

Passou aqui significa carregamento, dados, idioma/metadados, ausência de overflow horizontal comparando scrollWidth com clientWidth (390 a 1920 px) e conteúdo/render capturado, sem equivalência pixel a pixel ao Stitch ou auditoria completa de legibilidade/acessibilidade. Capturas representativas de 320 PT e 768 EN inspecionadas: cards, textos, grades e composição sem regressão aparente; CSS/JS e dados intactos reforçam que a alteração é de caminho. O outline de foco presente nas capturas é comportamento esperado de navegação por teclado, não mudança visual permanente.

## Teclado, foco e navegação

Nos dois builds e idiomas, em 390/1280:

- Primeiro Tab no skip localizado; Enter foca main-content e preserva hash nativo.
- Space/Enter abrem menu mobile e focam primeiro link; Tab/Shift+Tab exercitados; Escape fecha com foco no botão e nome/expanded coerentes.
- Menu fechado: Tab do botão vai ao CTA hero, sem passar pelos links ocultos.
- Cinco destinos projects/skills/about/learning/contact: fechamento, hash e foco na seção correspondente; home pela marca; Voltar restaura hash anterior sem manipular histórico. As observações registram o foco nativo que pode permanecer na seção anterior, sempre visível.
- Menu aberto/nav focada em 390→1280: estado fecha/link permanece visível; 1280→390: foco no botão; botão focado ao ampliar: primeiro link; CTA desktop focado ao reduzir: botão.
- Desktop Tab pelos cinco links, idioma, CTA contato e CTA hero; Shift+Tab no sentido inverso. CTAs hero/header levam a contact; CTA de projetos e footer home exercitados na matriz.
- Preferência PT/EN sobrevive a reload em cada cenário; lang/title/meta description preservados. Alternância nos previews observada; nenhuma persistência ou tradução alterada.

Fixture dev conferida nos dois caminhos, via servidores 4182/4183 documentados no README: preferência EN → Preparar redireciona para a raiz correta da base; Falha na leitura → Montar importa App, exibe PT-BR e seis seções, sem caminho antigo. Logs de erro do navegador vazios ao final da matriz e após fixtures. São fixtures de desenvolvimento, não rotas de produto.

## Zoom real e redução de movimento — pendências

**Zoom real 200%: não executado nesta entrega, pendente.** Inventário Browser Use retornou apenas navegador integrado/MCP Apps, sem Edge/Chrome controlável. Capabilities consultadas: browser visibility/viewport e tab pageAssets/webmcp; nenhum controle de zoom nativo. Não foi aplicado CSS zoom, transform, deviceScaleFactor ou viewport como substituto. Viewport temporário foi restaurado ao final. Sem indicador/screenshot de 200%, não declarar aprovação.

**Prefers-reduced-motion ativado: não executado, pendente.** Consulta real matchMedia('(prefers-reduced-motion: reduce)').matches retornou false nas observações, com scrollBehavior smooth. Ferramenta não expõe emulação de preferência; não se alterou CSS para fingir media query ativada nem preferência global. Regra reduce permanece intacta em fonte/build, mas isso só comprova presença, não comportamento com preferência ativa.

A confirmação manual de zoom 200% pelo responsável em M2-06 é evidência histórica do mesmo shell/CSS/JS, sem detalhamento de navegador/idiomas/capturas, em outro caminho/ambiente. Não foi reutilizada como aceite M2-08. As limitações anteriores de controle nativo permanecem contexto, sem alegar nova tentativa nativa bem-sucedida. Para completar: em navegador com controles acessíveis, registrar indicador real 200%, reflow/foco/PT/EN nos previews e restaurar zoom; ativar preferência reduce por emulação/usuário, confirmar matchMedia true e scroll auto/transições desligadas, depois restaurar preferência. Somente então revisar esses critérios com Work.

## Comandos e resultados

| Comando | Resultado |
|---|---|
| npm run typecheck | Passou |
| npm run lint | Passou |
| npm run format | Passou |
| npm test | Passou: 48 testes / 3 arquivos, Vitest 5.0.4 |
| npm run verify (primeira execução) | Passou: conteúdo + i18n |
| npm run verify (segunda execução solicitada) | Passou novamente |
| npm run build | Passou: Vite 6.4.4, 1597 módulos, HTML 0,97 kB, CSS 16,62 kB, JS 249,89 kB |
| npm run build:subpath | Passou: mesmos módulos/CSS/JS, HTML 1,00 kB |
| git diff --check | Passou |

Checks/builds/servidores executados com autorização local fora da restrição conhecida de subprocessos/sockets; sem publicação. Scripts históricos de conteúdo/i18n e suíte permanecem com asserções intactas. Alias verify foi adicionado porque o comando genérico solicitado não existia; não substitui ou reduz as verificações. Nenhuma dependência ou lockfile alterados. Conferência adicional HTTP/JSON por `node .workflow/verify-m2-08-preview.mjs`, evidência local ignorada: 20 combinações únicas, dados compartilhados, imagens/fontes/CSS e recursos locais passaram; a conferência final de overflow contra clientWidth falhou nos quatro cenários de 320 px, conforme diagnóstico abaixo.

## Evidências, critérios e gate

Diretório local ignorado `.m2-review/m2-08/`:

- `browser-evidence.json`: matriz e eventos, dimensões/overflow, idioma/metadados, datasets, imagens, fontes computadas, foco/outline, expanded/nav e preferência reduce observada.
- `root-{320,390,768,1280,1920}-{pt,en}.png` e `subpath-{...}-{pt,en}.png`: 20 capturas fullPage.
- `root-focused-{pt,en}.png` e `subpath-focused-{pt,en}.png`: foco no main após skip.
- `fixture-evidence.json`: redirect/mount nas duas bases dev.
- `preview-http.json`: HTML/JS/CSS locais HTTP 200/MIME correto.
- `overflow-details.json`: scrollWidth/clientWidth/bodyWidth das 20 combinações; diagnóstico final de overflow.

| Critério | Estado |
|---|---|
| 1. Base / e alternativa explícita | Atendido localmente, sem decisão de hospedagem |
| 2. Dependências do caminho antigo | Configuração/fixture/README ativos ajustados; relatos históricos e mídia de origem preservados |
| 3. Builds/previews e assets | Atendido nos dois caminhos, recursos locais 200, mídia/fontes externas distinguidas |
| 4. Matriz de larguras/idiomas | Correção autorizada posteriormente: **20 combinações sem overflow**, evidências finais na seção de correção abaixo |
| 5. Teclado/foco/menu/âncoras/Voltar | Exercitados nos builds, ambos idiomas; evidências descritas |
| 5. Zoom 200% e reduce ativado | Validação manual aprovada pelo responsável em 15/10/2026; limites da captura descritos abaixo |
| 6. Checks | Passaram, incluindo verify duas vezes e build alternativo |
| 7. Documentação, histórico e revisão | Atualizados; M2-08 aguarda Work, M2 não concluído |

Permanecem segurança de dependências (sete advisories herdados sem liberação), Volta, conteúdo/contatos/stacks/credenciais/permissões, mídias externas e publicação; acabamento/aceite visual completo em M3, curadoria/integração/migração em M4, auditoria final em M5. Nenhuma dessas tarefas foi antecipada.

Work deve revisar árvore completa/diff/snapshot novos, incluindo este arquivo novo. Snapshot `.workflow/m2-08-implementation-snapshot.json` é evidência de implementação, não aprovação; `.workflow/`/`.m2-review/` fora do versionamento/staging. Aprovações anteriores não cobrem M2-08. Parar aqui antes de qualquer próximo trabalho; nenhum commit/push.

Mensagem sugerida: `fix(preview): support both bases and prevent narrow viewport overflow`

## Defeito encontrado na conferência final de overflow — histórico anterior à correção

A medição inicial em browser-evidence.json usa scrollWidth > innerWidth e registrou false nas 20 combinações. Ela não desconta a barra vertical; **não deve ser usada para aprovar ausência de overflow em 320 px**. A medição complementar correta contra document.documentElement.clientWidth está em overflow-details.json e atualiza a matriz/estado corrente deste handoff. Não se alteraram registros brutos anteriores para simular resultado diferente.

Reprodução nos dois previews, PT/EN: viewport width 320; innerWidth 320, clientWidth 305, scrollWidth 320, bodyWidth 320. Excesso horizontal de 15 px. Em 390/768/1280/1920, scrollWidth = clientWidth, sem excesso. Causa provável: body min-width:320px existente em src/styles.css força 320 CSS px mesmo quando scrollbar deixa só 305 disponíveis. A regra é idêntica ao HEAD e não foi introduzida por mudar a base. O caso deve ser revisado pelo Work; nenhum ajuste de CSS/redesign foi feito para esconder a falha, nenhum overflow-x:hidden aplicado.

Critério 320 px permanece **não atendido**, separado dos impedimentos de zoom/reduce. O checker local preserva a asserção scrollWidth <= clientWidth e retorna falha para esses quatro casos; isso não muda os resultados de typecheck/lint/testes/build. M2-08 e M2 não podem ser concluídos com esses critérios pendentes.

## Validação manual posterior — Google Chrome — 15/10/2026

O responsável confirmou zoom real de 200% manualmente e, após receber o procedimento de reduced motion, informou: “o navegador usado foi o Google Chrome. fiz todos os testes. resultado: aprovado.” Zoom e reduced motion ficam registrados como **validados manualmente e aprovados pelo responsável**, sem converter essa confirmação em aprovação integral do Work ou autorização de Git.

Captura fornecida pelo responsável preservada em `.m2-review/m2-08/manual-chrome-reduced-motion.png` (evidência local ignorada). Ela mostra Google Chrome em `localhost:5173/#learning`, interface EN, DevTools Rendering com `prefers-reduced-motion: reduce`, Console com `matchMedia('(prefers-reduced-motion: reduce)').matches` → true e `getComputedStyle(document.documentElement).scrollBehavior` → auto. Isso comprova preferência ativa e estilo computado nesse cenário, além do foco visível na seção Learning.

Os demais testes propostos (interações, idiomas/caminhos e zoom) são confirmados por declaração direta do responsável; Codex não os executou nem observou independentemente. A imagem não mostra indicador de zoom 200%, caminho /portfolio-v2/, ambos previews nas portas 4180/4181 ou todos os idiomas/interações. Esses detalhes não são inferidos da captura. A evidência visual é de dev em 5173; a abrangência adicional é relato manual do responsável.

Os registros anteriores de impedimento de automação permanecem históricos. **Overflow de 15 px em 320 px continua não atendido**, sem confirmação de correção ou alteração de CSS. M2-08 aguarda revisão própria do Work com novo snapshot; M2 permanece aberto. Sem staging, commit, push ou avanço para M3.

## Correção mínima autorizada de overflow — 15/10/2026

O responsável autorizou somente o ajuste mínimo necessário ao critério vigente de M2-08, mantendo proibidos redesign, M3, commit e push. A alteração adicional de produção é **uma linha removida em src/styles.css**: body min-width:320px. Sem overflow-x:hidden/clip, sem clipping global, sem alteração de fonte, token, espaçamento, breakpoint, conteúdo, contrato ou comportamento.

Causa confirmada por antes/depois: em viewport 320 com scrollbar vertical de 15px, clientWidth era 305 e o min-width forçava body/scrollWidth=320. Removida a restrição, minWidth computado=0px e bodyWidth=scrollWidth=clientWidth=305. html/body mantêm overflow-x:visible. Nos demais tamanhos, bodyWidth/clientWidth/scrollWidth continuam exatamente iguais aos registros anteriores. O elemento body block passa a respeitar naturalmente a largura disponível; não foi adicionada regra para ocultar o excesso.

### Matriz final após correção

Navegador integrado, builds reais servidos nos mesmos localhost 4180 e 4181. PT/EN em cada caminho/largura, reload, projetos/PageDown e retorno ao home. Comparação obrigatória **scrollWidth com clientWidth**, não innerWidth:

| Viewport | clientWidth = scrollWidth | / PT | / EN | /portfolio-v2/ PT | /portfolio-v2/ EN |
|---|---|---|---|---|---|
| 320×844 | 305 | Passou | Passou | Passou | Passou |
| 390×844 | 375 | Passou | Passou | Passou | Passou |
| 768×900 | 753 | Passou | Passou | Passou | Passou |
| 1280×900 | 1265 | Passou | Passou | Passou | Passou |
| 1920×900 | 1905 | Passou | Passou | Passou | Passou |

As 20 combinações preservam seis seções/dados/fontes computadas Inter/Manrope. Inspeção de limites horizontais de headings/parágrafos/links/botões do shell/footer não encontrou elementos fora da largura útil nem scrollWidth próprio excedente nessa amostra. Captura de menu 320 PT inspecionada: marca, idioma, botão, links e CTAs legíveis/acessíveis; sem corte horizontal. Não é auditoria completa WCAG ou de cada pixel.

Em 320 PT/EN, nos dois caminhos, reexecutados primeiro Tab/skip, foco main, abertura Space, Tab/Shift+Tab, Escape e retorno ao botão, Tab com menu fechado até CTA hero, abertura Enter, navegação learning com fechamento/foco e CTA contact com foco no destino. Outline primary solid 3px observado; nenhum erro de console. Viewport temporário restaurado.

Algumas observações iniciais de imagens lazy ainda tinham complete=false antes de carregar o último card. O checker preservou a asserção e falhou nessa primeira leitura. Em vez de afrouxá-la, foram visitadas explicitamente as quatro imagens nas sete combinações afetadas; novas leituras confirmaram todas complete=true/naturalWidth>0, mantendo a largura correta. Leituras iniciais e rechecks separados permanecem como evidências. Não houve erro de URL ou alteração de mídia.

### Evidências e checks da correção

Arquivos locais ignorados em `.m2-review/m2-08/overflow-fix/`:

- `evidence.json`: 20 combinações e eventos de foco, incluindo clientWidth/scrollWidth/bodyWidth/minWidth/overflow-x, limites de textos/controles, metadados/dados/imagens/fontes.
- `images-rechecked.json`: sete releituras de lazy images após visita explícita; sem sobrescrever os registros anteriores.
- `root-{largura}-{pt,en}.png`/`subpath-{largura}-{pt,en}.png`: 20 capturas fullPage; variantes `-loaded.png` das sete releituras.
- `menu-320-pt.png`: captura de foco/menu na largura corrigida.
- `first-320.png`: primeira conferência após remover a restrição.

Procedimento local reproduzível: mesmos scripts build/preview deste documento; repetir a matriz no browser e conferir document.documentElement.scrollWidth === document.documentElement.clientWidth. Checker das evidências finais: `node .workflow/verify-m2-08-overflow-fix.mjs` **passou**, incluindo comparação com baseline, controles sem clipping global, foco e imagens carregadas. O checker anterior que lê overflow-details.json continua representando o diagnóstico histórico e não é a validação final da correção.

| Comando da rodada de correção | Resultado |
|---|---|
| npm run typecheck | Passou |
| npm run lint | Passou |
| npm run format | Passou |
| npm test | Passou: 48 testes em 3 arquivos |
| npm run verify | Passou: verify:content e verify:i18n |
| npm run build | Passou |
| npm run build:subpath | Passou |
| git diff --check | Passou |
| node .workflow/verify-m2-08-overflow-fix.mjs | Passou |

Ambos builds: Vite 6.4.4/1597 módulos, CSS 16,60kB (4,43gzip), JS 249,89kB (77,59gzip). Novos arquivos compilados index-IvK-WFhD.css/index-D2jJ7sGh.js, iguais entre as duas bases. Código JS/TS de produção não alterado; somente CSS body mudou. Builds e checks fora da restrição conhecida do ambiente, sem instalação/dependências/configuração global novas.

A aprovação manual anterior de zoom/reduce pelo responsável permanece registrada com seus limites e antecede este ajuste. Essa rodada revalida o overflow e os comportamentos afetados; não alega nova execução automatizada de zoom/preferência. Regra reduced-motion intacta. **Critério de overflow agora atendido localmente; implementação completa exige nova revisão Work**, novo snapshot e eventual aprovação verificável. Nenhuma autoaprovação do milestone, staging, commit, push ou avanço M3.

### Reconferência da árvore compartilhada — 15/10/2026

Na entrada desta execução, a remoção de `body min-width:320px`, o diagnóstico e as evidências da correção já estavam presentes; foram preservados. Reexecutados typecheck, lint, format (arquivos sem mudanças de formatação), 48 testes, verify, os dois builds e git diff --check: todos passaram. O checker `node .workflow/verify-m2-08-overflow-fix.mjs` também passou.

Matriz medida novamente no navegador integrado, nos previews 4180/4181, para PT/EN e larguras 320/390/768/1280/1920: nas 20 combinações, bodyWidth = scrollWidth = clientWidth, respectivamente 305/375/753/1265/1905. `min-width` computado do body = 0px e overflow-x de html/body = visible. Em 320 PT no subpath, abertura do menu focou Projetos e Escape fechou/devolveu foco a Abrir menu, sem overflow. Override restaurado e aba temporária encerrada. Esta reconferência não é nova aprovação operacional do Work; a entrega continua aguardando revisão, sem commit/push.
