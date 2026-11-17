# M5 — Qualidade e lançamento — plano aprovado

## Estado corrente — fechamento de M5 proposto para revisão do Work — 17/11/2026

M5-01 a M5-05 foram revisadas e aprovadas pelo Work, com entregas registradas nos commits abaixo. O responsável autorizou o lançamento da versão já pública e o smoke final, executado sem novos envios reais. Esta formalização documental aguarda revisão própria do Work. Os estados de espera na sequência original, nos relatórios e nos registros anteriores são históricos anteriores aos respectivos aceites.

### Aceites e evidências consolidados

| Tarefa | Entrega aceita e commits                                                                                                                    | Evidências                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| M5-01  | Auditoria em `4d73367`, com achado de contraste encaminhado a M5-02                                                                         | [Relatório](M5_01_HANDOFF.md) e [CI](https://github.com/CleristonMP/portfolio-v2/actions/runs/43920893770). Zoom de 200%, LinkedIn, contraste e leitor de tela aprovados manualmente pelo responsável. O relato não discrimina todos os cenários e não foi observado independentemente pelo Codex.                                                                                                                                                                                                                                                                                                                                               |
| M5-02  | Contraste corrigido e triagem em `d98db99`                                                                                                  | [Relatório](M5_02_HANDOFF.md) e [CI](https://github.com/CleristonMP/portfolio-v2/actions/runs/43926703078). Borda em repouso com 3,40:1 e orçamentos de transferência atendidos. Investigação de LCP e atualizações de dependências permanecem em acompanhamento.                                                                                                                                                                                                                                                                                                                                                                                |
| M5-03  | Metadados em `43c5bc4`, build isolado em `80bd942` e publicação manual em `0c295df`, integrados pelo PR #4 em `9f61546`                     | [CI da candidata](https://github.com/CleristonMP/portfolio-v2/actions/runs/43949877514) e [publicação inicial](https://github.com/CleristonMP/portfolio-v2/actions/runs/43969328931). Validação pública de HTTPS, redirecionamentos, recursos, metadados PT-BR/EN, canonical e Open Graph. OpenGraph.xyz exibiu título e descrição em PT-BR e imagem do Reports Registry.                                                                                                                                                                                                                                                                        |
| M5-04  | Build com contato em `d7c61a3`, vínculo manual em `3120679`, integrados pelo PR #5 em `fa67e14`. Registro e decisão Formshield em `82af7fa` | [Build](https://github.com/CleristonMP/portfolio-v2/actions/runs/43980146644), [CI do build](https://github.com/CleristonMP/portfolio-v2/actions/runs/43980146418), [CI do merge](https://github.com/CleristonMP/portfolio-v2/actions/runs/44145810678) e [CI documental](https://github.com/CleristonMP/portfolio-v2/actions/runs/44151333977). Os 25 testes de contato com transporte simulado passaram em PT-BR/EN, com avisos de `act(...)` nos testes de concorrência. `M504-01` e `M504-02` foram aceitos pelo Formspree e recebidos na caixa de entrada, conforme confirmação do responsável. LinkedIn disponível com indicação de login. |
| M5-05  | Formalização do lançamento e smoke em `eb5cb57`                                                                                             | [Registro detalhado](../PROJECT_STATUS.md) e [publicação vigente](https://github.com/CleristonMP/portfolio-v2/actions/runs/44146209728). O responsável autorizou formalizar a versão já pública sem novo deploy. Smoke desktop PT-BR 1280 px e mobile EN 390 px, sem novos envios reais.                                                                                                                                                                                                                                                                                                                                                         |

### Versão lançada e reversão

A versão lançada é `43c5bc48485ddd3dfd554f3a8b7de53e278cdafe`, compilada por `d7c61a3c5ba10c67741aeff43e0ef8a8349c1528` em `/portfolio-v2/` com o endpoint público aprovado. A execução `43980146644` gerou o artefato `14282062874`, digest `sha256:cee6662dfa0402fdbf97b1ab0b7229d8ca03c2eb56c2decf1c14eb63816bfe94`. A publicação manual `44146209728` verificou o artefato e concluiu o deployment `7862146951`. A revisão de prontidão confirmou hashes idênticos do HTML e do JavaScript principal entre artefato e origem pública.

O smoke final confirmou formulário habilitado, aviso e política de privacidade, LinkedIn com login e PDFs localizados. Os metadados acompanharam o idioma e canonical/og:url permaneceram estáveis. O Tab avançou de Nome a Email no desktop, e Enter/Escape abriram/fecharam o menu mobile. Não houve overflow horizontal nos dois cenários. Os redirecionamentos retornaram 301 e os recursos consultados retornaram 200 com MIME esperado. A URL antiga permaneceu operacional. A cobertura complementar reaproveita as matrizes e evidências dos relatórios, com seus limites.

A referência de reversão é a mesma candidata compilada sem `VITE_FORMSPREE_ENDPOINT`, pelo build `80bd942`, execução `43954024000`, artefato `14268827928`. Na consulta anterior, estava disponível com expiração informada para 17/11/2026 às 17h52 de Fortaleza. Sua disponibilidade não foi revalidada nesta formalização. O workflow vigente exige ajuste aprovado para selecionar esse build. Se o artefato expirar, reproduzir `43c5bc4` com Node 22.16.0, `npm ci` e `npm run build:subpath`, sem a variável do endpoint. Verificar o novo SHA de build, execução, artefato e digest antes da publicação autorizada. A reversão deixa o formulário indisponível e mantém o LinkedIn com indicação de login.

### Acompanhamento após o lançamento

- **Performance.** Manter a investigação do LCP mobile de laboratório (3.105 ms na raiz e 3.226 ms no subpath). Repetir medições controladas com traces e mediana de pelo menos três execuções para isolar fontes, CSS e JavaScript. INP não foi medido e não há dados de campo nos relatórios locais. Os valores do PRD são referências, e o aceite de M5-02 não encerra a investigação.
- **Dependências.** A triagem de 16/11/2026 encontrou nove entradas moderadas em desenvolvimento e zero no recorte de produção consultado. Submeter ao Work a atualização do Vite, da cadeia minimatch/TypeScript ESLint e de postcss-selector-parser e repetir os checks afetados. As atualizações e a revisão da política da hospedagem/fontes externas continuam pendentes, conforme M5-02.
- **Formshield.** Manter a configuração ativa e acompanhar entrada e spam no serviço. A classificação automática permanece não verificada. A decisão expressa de não bloquear o lançamento e os critérios de reavaliação estão preservados abaixo.

Não foi identificado requisito obrigatório sem aceite ou decisão suficiente para propor o fechamento. O aceite desta formalização documental cabe ao Work.

## Registro histórico — plano aprovado pelo responsável — 13/11/2026

O responsável aprovou nesta conversa a sequência abaixo e solicitou sua formalização. O diff documental aguarda revisão verificável do Work. A primeira tarefa após essa revisão e o encaminhamento de execução é **M5-01 — Auditoria de acessibilidade, visual e fluxos**.

## Base, fontes e fluxo

- Base `2c04d4d`, merge do encerramento de M4 na `main`. Todas as tarefas de M5 usam a branch única `milestone/m5-quality-launch`.
- Requisitos em [PRD v2.3](PRD_Portfolio_Cleriston_v2.3.md), especialmente §§6–8, 10 e 15–16. As referências visuais são o HTML, o `DESIGN.md` e o `screen.png` dos dois exports Stitch em `design/`, com as adaptações já aprovadas no portfólio.
- O [handoff de M4](MILESTONE_4_PLAN.md) fornece a base de 94 testes, matrizes de navegador, builds em `/` e `/portfolio-v2/`, verificação do LinkedIn e quatro recebimentos confirmados (`M407-01` a `M407-04`). A auditoria final exige novas evidências de acessibilidade, performance, segurança e funcionamento na origem final.
- Cada tarefa terá diff, critérios e evidências identificados. O Work revisa a árvore exata ou o snapshot correspondente antes de commit e push, conforme o [workflow](../DEVELOPMENT_WORKFLOW.md). A autorização de publicação pertence ao responsável.

## Sequência e critérios de aceite

### M5-01 — Auditoria de acessibilidade, visual e fluxos

Usar os builds existentes em `/` e `/portfolio-v2/` e reaproveitar a matriz de M4 como ponto de partida.

- **Aceite.** Verificar WCAG 2.2 AA com checagens automáticas e manuais de contraste, teclado, foco, menu, formulário, leitor de tela, zoom real de 200% e movimento reduzido. Conferir PT-BR/EN, cases, mídias, PDFs e links. Comparar hierarquia, tipografia, superfícies e composição desktop/mobile com as referências Stitch e as adaptações aprovadas.
- **Evidências.** Matriz por idioma, largura e caminho, capturas, passos reproduzíveis e achados por gravidade. Exercitar o formulário com transporte simulado e manter o bloqueio de conexões externas nos previews normais.

### M5-02 — Performance e segurança

Partir da linha de base de M5-01, corrigir os achados priorizados pelo Work e repetir os cenários afetados.

- **Aceite.** Medir performance com Lighthouse em mobile e desktop sob condições comparáveis e acordar orçamentos para fontes, mídia e JavaScript. Usar LCP, INP e CLS do PRD como referência, identificando resultados de laboratório e dados reais quando disponíveis. Triar avisos de dependências e revisar o bundle, a privacidade dos arquivos públicos e a política de conexões.
- **Evidências.** Relatórios antes/depois, condições de medição, orçamentos acordados e decisão registrada por achado relevante.

### M5-03 — Origem final e SEO

Depende da decisão de domínio e hospedagem. Preparar a configuração da versão candidata.

- **Aceite.** Conferir base path, HTTPS, redirecionamentos e carregamento direto dos recursos. Validar títulos e descrições localizados, canonical, Open Graph e, conforme a estratégia aprovada, sitemap, robots e dados estruturados `Person` com dados confirmados.
- **Evidências.** Configuração revisável e verificações HTTP/HTML na origem candidata.

### M5-04 — Contato na origem final

Depende de M5-03 e de autorização específica para o teste real.

- **Aceite.** Conferir aviso, estados do formulário e LinkedIn alternativo com aviso de login. Em envio sintético autorizado, registrar a aceitação pelo Formspree e o recebimento confirmado pelo responsável no destinatário já configurado. Para o Formshield, buscar um procedimento suportado e registrar evidência de classificação automática. Se seguir sem método reproduzível, submeter a pendência ao Work e ao responsável para decisão explícita antes do lançamento.
- **Evidências.** Origem, janela, quantidade e identificadores sintéticos autorizados, resultado observado pelo formulário, confirmação de recebimento e evidência do bloqueio automático ou limitação documentada. Preservar o endereço privado do destinatário.

### M5-05 — Revisão final e lançamento controlado

Depende do aceite das tarefas anteriores e das decisões sobre pendências de publicação.

- **Aceite.** Identificar o commit e o artefato aprovados, conferir a CI correspondente e preparar a troca de versão e a reversão. Após autorização específica de publicação, executar smoke na URL pública.
- **Evidências.** Commit e artefato, resultado da CI, autorização, resultado do smoke e referência utilizável para rollback.

## Decisão de origem final — M5-03

O responsável aprovou GitHub Pages padrão no repositório `CleristonMP/portfolio-v2`, canonical `https://cleristonmp.github.io/portfolio-v2/` e manutenção da URL anterior `https://cleristonmp.github.io/portfolio/`. O artefato candidato é o de `npm run build:subpath`, com base `/portfolio-v2/`. O build raiz continua disponível para validação local.

O HTML inicial entrega canonical absoluto e Open Graph em PT-BR, com `og:url` igual ao canonical. A imagem social reutiliza a captura autorizada do Reports Registry, com URL absoluta, dimensões e texto alternativo. A sincronização existente mantém `lang`, título e descrição em PT-BR e EN no navegador. A página tem uma URL indexável e uma prévia social estática em PT-BR. Sitemap, robots.txt e dados `Person` ficam fora desta entrega.

Após autorização de publicação de um candidato, verificar certificado TLS e conteúdo misto, registrar a cadeia HTTP para HTTPS e a variante sem barra final, e abrir diretamente CSS, JavaScript, WebP e PDFs para conferir status e MIME. Conferir o portfólio anterior no caminho original e validar a imagem no consumidor de Open Graph. O smoke local não comprova HTTPS, redirecionamentos ou indexação na origem pública.

Em 16/11/2026, passaram `npm run verify` e os builds de raiz e subpath. Os dois previews locais serviram o HTML com canonical e `og:url` iguais e a CSP `connect-src 'self'`. JS, CSS, WebP e os dois PDFs retornaram HTTP 200 com MIME esperado em cada base. Evidência local em `.m2-review/m5-03/http.json`. A entrega aguarda revisão verificável do Work.

## Decisão sobre Formshield — M5-04

Em 17/11/2026, o responsável aceitou a recomendação do Work de manter o Formshield ativo na configuração atual. A classificação automática de spam permanece não verificada e a falta dessa evidência deixa de bloquear o lançamento. Os testes de M5-04 confirmaram a entrega de mensagens legítimas. Após o lançamento, acompanhar a caixa de entrada e a pasta de spam do Formspree e reavaliar a proteção se houver spam recorrente ou mensagens legítimas classificadas como spam. A publicação final segue sujeita ao aceite e à autorização de M5-05.

## Registro histórico — decisão de contato anteriormente em aberto

- **Contato real.** Autorizar origem, janela, quantidade e identificadores sintéticos. O responsável confirma o recebimento pelo destinatário já configurado.

Resolvida em M5-04. O responsável autorizou os dois envios na origem final e confirmou o recebimento de `M504-01` (PT-BR desktop, 17/11/2026 às 15h21min29s de Fortaleza) e `M504-02` (EN mobile, às 15h21min44s). Não há novo envio solicitado para o fechamento.
