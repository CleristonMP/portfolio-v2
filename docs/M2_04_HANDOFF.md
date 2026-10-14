# Handoff — M2-04 — Tokens canônicos

Data: 14/10/2026. Estado: **em execução — implementada/verificada localmente, aguardando revisão própria do Work**. Nenhum parecer de autoaprovação; M2 permanece aberto. Sem staging, commit, push, merge ou deploy.

## Contexto e fontes

Git local na entrada: árvore limpa, branch `chore/m2-technical-foundation`, HEAD `73e5f7d3d76f26d28597bc7f1e73e1190ae8f78f`; origin `https://github.com/CleristonMP/portfolio-v2.git`. M2-03 recebeu parecer APROVADO e foi commitada, conforme o contexto do Work e o histórico verificável desta conversa. Nenhuma aprovação anterior cobre este lote. Não houve consulta remota adicional.

Lidos workflow, status, plano M2, handoff M2-03 e PRD v2.3; nenhum AGENTS.md encontrado no repositório/ancestrais consultados. Consultados DESIGN.md, code.html e screen.png dos dois ZIPs oficiais, extraídos somente em `.m2-review/m2-04/`; originais preservados. Figma não foi editado ou sincronizado.

## Arquivos e decisões

| Arquivo | Mudança |
|---|---|
| `src/styles/tokens.css` | Fonte única: 36 cores e duas famílias tipográficas; canais RGB para opacidade compartilhada. |
| `src/styles.css` | Importa tokens antes de Tailwind; substitui literais de cor/família por variáveis, sem alterar a geometria, movimento ou seletores. |
| `tailwind.config.js` | Referencia os mesmos tokens, preservando aliases anteriores e suportando alpha; sem utilitários novos na interface. |
| `docs/DESIGN_TOKENS.md` | Inventário, papéis, transparências, espaçamentos, raios, tipografia, movimento, precedência e conflitos. |
| `PROJECT_STATUS.md` | Registra aprovação/commit posterior de M2-03, preserva histórico e coloca M2-04 aguardando revisão. |
| `docs/M2_04_HANDOFF.md` | Este registro de evidências, limitações e gate. |

Os valores canônicos já eram corretos no starter. Centralizar preserva exatamente os canais: fundo #0b0e14, primary #69daff, secondary #ac89ff, CTA final #00cffc, surface-low #10131a, surface-highest #22262f, texto #ecedf6, Manrope/Inter. Valores específicos do starter permanecem separados por papel e não são apresentados como novas decisões oficiais. Nenhuma tentativa de unificar aproximadamente cinzas, opacidades ou planos.

DESIGN.md diverge internamente sobre final do gradiente, raios e escala de espaçamento; HTMLs também divergem em xl, superfícies e durações. PRD §16.2 fecha o CTA primary → primary-container a 135 graus. Tracking do starter (-0,07em no hero), raios atuais (22px nos projetos), composição, glass e durações 200/250ms foram preservados, com refinamentos explícitos para M3. Detalhes em DESIGN_TOKENS.md. Não houve redesign.

## Critérios individuais e resultados

| Critério | Resultado / evidência |
|---|---|
| Inventário e classificação | Atendido: 353 declarações anteriores inventariadas; 36 valores de cor e duas famílias, separados entre canônicos, superfície adicional dos HTMLs e papéis do starter. |
| Fonte única CSS/Tailwind | Atendido: 38 variáveis declaradas e 38 referências distintas resolvidas. CSS/tema sem literais de cor/família fora da fonte; compilação de bg-primary/50, text-ink, font-display/body confirmou variáveis e alpha. |
| Paleta/fontes/CTA canônicos | Atendido: valores documentados e medidos no navegador; CTA linear-gradient(135deg, rgb(105,218,255), rgb(0,207,252)); hero ciano/violeta preservado. |
| Espaçamento, raio, movimento e conflitos | Atendido: documentados, sem modificar geometria ou implementar refinamentos de M3. |
| Foco, fontes e reduced-motion | Preservação verificada: foco via Tab primary solid 3px, offset 4px; fontes computadas Inter/Manrope e carregamento em index.html intacto. Bloco reduce idêntico e presente no build com scroll auto, transition/animation none !important. Limitação: preferência reduce não emulada no navegador. |
| Comparação inicial em 390/1280 | Atendido no escopo inicial: capturas antes/depois e métricas de 68 elementos por largura idênticas, sem overflow; comparação qualitativa com as duas prévias Stitch, com diferenças preexistentes documentadas. Não é aceite visual final. |
| Checks técnicos e escopo | Comandos e resultados abaixo; sem dependências, conteúdo, contratos, traduções, navegação, assets, base path ou referências alterados. |
| Revisão Work | **Pendente**: revisar árvore/snapshot novos e emitir parecer próprio; M2-04 não aprovada nem milestone concluído. |

## Validação e reprodução

Runtime direto Node 22.16.0/npm 10.9.2. Sem ajustes globais; PATH do processo contorna o shim Volta conforme README:

```powershell
$env:PATH = 'C:\Program Files\nodejs;' + $env:PATH
npm run typecheck
npm run lint
npm run format
npm run build
node scripts/verify-content.mjs
git diff --check
```

Build executado: Vite 6.4.4, 1595 módulos; CSS 16,05 kB (4,30 gzip), JS 245,15 kB (76,14 gzip). Crescimento do CSS corresponde às variáveis e referências; não houve auditoria de performance. Aviso Tailwind de ausência de utilitários permanece esperado para a UI em seletores CSS. Conferência final: todos os comandos abaixo terminaram com retorno 0.

| Comando | Resultado |
|---|---|
| npm run typecheck | Passou |
| npm run lint | Passou |
| npm run format | Passou |
| npm run build | Passou; métricas acima |
| node scripts/verify-content.mjs | Passou; IDs, fatos opcionais, links e renderização segura |
| git diff --check | Passou |

Comparação binária com HEAD: **41 arquivos rastreados fora das alterações autorizadas intactos**, incluindo conteúdo/contratos/traduções, JSX, entradas/fontes, configuração TS/Vite, dependências/lockfile, PRDs, exports e handoffs anteriores. Staging vazio.

Verificação específica reproduzível no mesmo ambiente: `node .m2-review/m2-04/verify-tokens.mjs`. Usa PostCSS/Tailwind já instalados para conferir resolução de tokens, ausência de duplicação, compilação de utilitários com alpha, regra reduce no fonte/build e comparação dos JSONs antes/depois. É evidência local ignorada, não teste novo versionado nem gerador da interface. A amostra compilada está em `.m2-review/m2-04/tailwind-probe.css`; não foi adicionada ao produto. Vite compilou a importação real do arquivo de tokens.

## Evidências visuais e procedimento

Servidor local: `node node_modules/vite/bin/vite.js --host 127.0.0.1 --port 5174 --strictPort`; página `http://127.0.0.1:5174/portfolio/`. Executado com acesso local autorizado fora da restrição conhecida de sockets; sem publicação.

Capturas no Edge e JSONs de estilos/dimensões registrados antes de editar e após reload, em 1280×900 e 390×844:

- `.m2-review/m2-04/before-1280.png` e `after-1280.png`.
- `.m2-review/m2-04/before-390.png` e `after-390.png`.
- `before-1280.json`, `after-1280.json`, `before-390.json`, `after-390.json` no mesmo diretório.

Cada comparação contém 68 elementos: header/main/seções, títulos/textos, cards, skills/cursos, painel, CTA/gradiente hero, footer, tags, eyebrow e idioma. Geometria, cores, backgrounds/gradientes, fontes, tracking, raios, transições, sombras, bordas e backdrop-filter coincidiram exatamente nos JSONs antes/depois; overflow horizontal ausente. A comparação não é de todos os pixels/estados possíveis. Na captura mobile final, após percorrer os projetos para carregar as imagens lazy, as quatro imagens preexistentes estavam carregadas; suas URLs não foram alteradas. Foco por Tab observado na marca; outline e offset canônicos. Fonte computada do corpo: Inter, sans-serif; hero: Manrope, sans-serif. Link externo de fontes e pesos foram preservados, sem nova garantia de disponibilidade do serviço remoto.

Comparação qualitativa com screen.png web/mobile: preservadas identidade dark/ciano/violeta, títulos Manrope, corpo Inter, hierarquia de superfícies e gradientes. As capturas oficiais são prévias reduzidas (448×1600 e 151×1600), não renders de 1280/390; não permitem alegar equivalência pixel a pixel. As diferenças já presentes continuam: hero/copy personalizados, grades de projetos reais, seção Learning adicional, sobre sem retrato, contato informativo sem formulário. Tracking, raios, espaços e durações divergentes são registrados para M3, sem corrigir sua composição neste lote.

A regra reduced-motion foi comparada estruturalmente com a baseline e conferida no CSS compilado. A API do navegador disponível oferece viewport, sem emulação de media preference; o estado reduce não foi ativado. Não alegar smoke interativo com essa preferência, auditoria WCAG, zoom, contraste ou fidelidade final. O override temporário de viewport foi restaurado.

## Pendências e gate

Segurança de dependências, alerta de suporte ESLint, shim Volta, conteúdo, contatos, credenciais, permissão de mídias e publicação permanecem conforme registros anteriores, sem nova auditoria. Não há M2-05, persistência, metadados, melhorias de menu, formulário, cases ou migração de assets nesta entrega.

Work deve revisar a árvore local, incluindo arquivos novos; o remoto com 73e5f7d não contém M2-04. Snapshot de implementação local em `.workflow/m2-04-implementation-snapshot.json`, sem aprovação/autorização de operações Git. `.workflow/` e `.m2-review/` ficam fora do versionamento. Exige nova revisão e novo registro de aprovação verificável, sem reaproveitar pareceres anteriores. Parar aqui antes de qualquer próxima tarefa.

Mensagem sugerida: `refactor(styles): centralize canonical color and font tokens`
