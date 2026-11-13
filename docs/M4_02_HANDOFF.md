# M4-02 — Conteúdo final e cases reais

27/10/2026. **Implementação aguardando revisão própria do Work; não aprovada nem concluída por esta entrega.** Zoom real de 200% e preferência de redução de movimento ativa aprovados manualmente pelo responsável em 28/10/2026 para esta entrega, com os limites de evidência registrados abaixo. M4-03 não iniciada.

## Entrada e autorização

Conferência local: origin `https://github.com/CleristonMP/portfolio-v2.git`; entrada em `docs/m4-02-editorial-preparation`, HEAD `b336e8d46c27c544f2576622ae163267733073ce`, coincidente com a referência local origin de mesmo nome. Staging vazio; README sinalizado por finais de linha, sem diff versionável. Criada `feat/m4-02-content` a partir desse estado. Nenhum fetch ou nova consulta de refs/CI; referência local não comprova disponibilidade remota atual.

M4-01 aceita pelo Work e commitada em `a87dc2126e987a051b6ff810757918a5a034d1f9`; preparação/registro da aprovação editorial em `b336e8d`. São aceites anteriores, não autorização de commit/push desta árvore. A fonte literal dos textos é a proposta de cinco blocos PT/EN no chat **CODEX - Implementação**, imediatamente anterior a “eu aprovo os textos apresentados”, aprovada pelo responsável em 27/10/2026 e explicitamente encaminhada para implementação nesta unidade. A redação foi preservada; o cotejo do diff com aquela proposta é a verificação de equivalência literal. A revisão editorial integral de M4-04 continua pendente.

## Rastreabilidade editorial

| Bloco aprovado   | Evidência no plano único M4                              | Local de implementação e limites                                                                                                                                                                                                                                                                                                                                                    |
| ---------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reports Registry | Coleta bloco 1; reconciliação de projetos                | `projects.ts`: card breve preservado; case existente ampliado com contexto/autoria individual, tecnologias utilizadas, Excel/Apache POI, correções/aprendizados e confidencialidade. Quatro parágrafos PT/EN, na mesma página e no mesmo ID. Heroku é tecnologia utilizada; não declaração de hospedagem atual. Sem código, empresa identificada, clientes, documentos ou métricas. |
| Audience-Counter | Bloco 2; reconciliação de projetos                       | Descrição aprovada integral, Kotlin e Android; autoria individual com assistência parcial Gemini e aprendizado nativo explícitos. Links conferidos/autorizados na coleta para repositório e Google Play. Sem desafio artificial ou adoção presumida.                                                                                                                                |
| Web Matrículas   | Bloco 3; verificação de TypeScript no bloco 6            | Descrição aprovada integral: autoria individual sem IA, análise/UML e implementado sem operação na escola. Java, Spring Boot, React, JavaScript, TypeScript e PostgreSQL. Somente repositório conferido; sem demo.                                                                                                                                                                  |
| DS Commerce      | Bloco 4; TypeScript no bloco 6; decisão Backend/Frontend | Descrição aprovada integral: execução integral educacional do curso, sem adaptações próprias, aprendizado e ausência de pagamentos. Mesma stack aprovada de Web Matrículas. Dois links separados Backend/Frontend. Sem reivindicar autoria original da solução.                                                                                                                     |
| Perfil/método    | Bloco 5 e reconciliação `cleriston-pereira`              | `translations.ts` mantém literalmente os dois textos aprovados; `profile.ts` e `AboutSection` apresentam disponibilidade. A restrição de meio período aplica-se somente ao remoto. Desde 2019 é trajetória de estudo/desenvolvimento, sem contador de experiência profissional.                                                                                                     |
| Formações        | Bloco 7; reconciliação das quatro formações              | Mesmos quatro títulos, instituições, ordem e IDs; título resumido Udemy preservado. Anos documentais 2023/2022/2021/2023, apresentados como as frases aprovadas “Concluída/Concluído em ….” e “Completed in ….”. Nenhuma imagem ou URL de credencial adicionada.                                                                                                                    |

Não houve nova redação para hero, competências, contato, rodapé ou metadados. Demos omitidas por decisão não foram transformadas em pendências de obter URLs ou botões vazios. O plano aprovado permanece intacto; este handoff documenta a entrega, sem duplicar a coleta.

## Contratos, apresentação e estados editoriais

`ProjectLinkKind` admite `backendRepository` e `frontendRepository`, mantendo `repository` e demais opcionais compatíveis. `getProjectUrl` aplica a mesma proteção de código público às três categorias; confirmação, HTTPS e ausência de credenciais continuam obrigatórios. A apresentação percorre as opções tipadas e só cria links quando há URL válida. Nomes acessíveis incluem o projeto; GitHub, Google Play, Backend e Frontend são rótulos de destino, presentes nos dois dicionários. Os links usam navegação nativa na mesma aba.

`Course.completionLabel` opcional contém apenas o modelo localizado da frase; `completedYear` é a fonte única do ano. Não existe data fabricada quando faltam os campos. Os nomes próprios não são traduzidos. `Profile.availability` reaproveita o contrato existente.

Os quatro projetos permanecem `pending`, com `mediaVersion` (autorização recebida não equivale a versão final saneada/otimizada/aprovada) e `finalEditorialReview` (M4-04). Stacks, links, visibilidade pública dos três projetos e case textual foram reconciliados somente com fatos autorizados. Reports Registry continua privado e sem link de código. Natureza/status, curadoria e IDs não mudaram. As formações continuam `pending` por `credential`/`mediaVersion`: a validação manual positiva já declarada não foi invalidada, mas destino/apresentação segura ainda não foram implementados. Perfil continua `pending` pelos campos de contato/currículo; contador profissional opcional continua ausente. Seis competências e seus gates não foram modificados.

Consultados `DESIGN.md`, `code.html` e `screen.png` dos dois ZIPs Stitch, via cópias locais de referência; originais intactos. Mantidos superfícies, raios, tipografia Manrope/Inter, cores e hierarquia aprovadas em M3. A adaptação textual sem imagens continua vigente. Únicos ajustes CSS: agrupamento flexível dos links dos cards e 20 px entre os dois parágrafos de perfil. Não foram alterados breakpoints, tokens, hero, header, footer ou estilos compartilhados. Cards crescem com o texto; não há altura fixa, clipping ou ocultação global de overflow. Capturas reduzidas Stitch orientam comparação qualitativa, sem equivalência pixel a pixel.

## Arquivos da entrega

- Dados/contratos: `src/content/contracts.ts`, `projects.ts`, `profile.ts`, `courses.ts`, `links.ts`.
- Dicionário/apresentação: `src/i18n/translations.ts`, `src/sections/ProjectsSection.tsx`, `AboutSection.tsx`, `LearningSection.tsx`, `src/styles.css`.
- Verificações: `scripts/verify-content.mjs`, `scripts/verify-i18n.mjs`, `tests/content.test.tsx`, `projects.test.tsx`, `learning.test.tsx`; novo `tests/profile.test.tsx`.
- Acompanhamento: `PROJECT_STATUS.md` e este handoff.

README preservado byte a byte em relação à entrada, mesmo após Prettier; sinalização Git de finais de linha não representa alteração desta entrega. Nenhuma dependência, lockfile, base path, PRD, export Stitch, mídia ou arquivo do repositório antigo modificado. Sem staging, commit, push, merge ou deploy.

## Checks e reprodução

Node direto `C:\Program Files\nodejs\node.exe` v22.16.0, sem alterar configuração global. PATH do processo prioriza esse diretório para processos filhos. Volta continua dispensado, conforme limitação anterior. Chamadas iniciais no ambiente isolado demoraram a devolver saída; consultas posteriores confirmaram seu término. A rodada final registrada usou execução local autorizada com Node direto e todos os comandos passaram. Nenhuma configuração global foi alterada; não restou impedimento de runtime nos checks desta entrega.

```powershell
$env:Path = 'C:\Program Files\nodejs;' + $env:Path
npm run typecheck
npm run lint
npm run format
npm test
npm run verify
npm run build
npm run build:subpath
git diff --check
```

Resultados: typecheck, lint sem warnings, formatação, **68 testes em 9 arquivos**, ambos os verificadores, builds dos dois caminhos e diff check passam. Handoff, ignorado pelo comando geral de formato como os demais docs, também normalizado com `prettier --ignore-path NUL --write docs/M4_02_HANDOFF.md`. Nenhuma infraestrutura de teste nova. Saídas da rodada final ficam em `.m2-review/m4-02/checks.log`, fora do versionamento.

Testes preservam os cenários anteriores de idioma/storage/metadados, shell/foco, contatos incompletos, formulário indisponível, footer e competências. Casos ajustados cobrem os cinco destinos públicos autorizados, ordem de Tab, ausência de links de código no case privado, autoria assistida, natureza educacional, ausência de operação/pagamentos e anos das formações. Acrescidos: proteção Backend/Frontend para código privado/desconhecido e URL ausente/pendente/insegura; perfil localizado e frase exata de disponibilidade. Verificadores conservam invariantes de IDs, fronteiras de links e SSR seguro; expectativas históricas de dados ausentes foram substituídas pelos valores agora autorizados, sem liberar URLs arbitrárias. Paridade e conteúdo não vazio incluem os novos parágrafos e modelos de conclusão. jsdom/SSR não são evidência de layout, histórico nativo ou zoom.

Previews usados:

```powershell
node node_modules/vite/bin/vite.js preview --host=127.0.0.1 --port=4193 --strictPort
node node_modules/vite/bin/vite.js preview --base=/portfolio-v2/ --outDir=.m2-review/m2-08/dist-subpath --host=127.0.0.1 --port=4194 --strictPort
```

Build alternativo usa o script existente; nenhuma decisão de hospedagem ou publicação. A captura anterior usou Vite dev em `http://127.0.0.1:4192/`, antes das edições; as capturas posteriores e a matriz usaram builds de produção nas portas acima. Portas têm preferências de idioma independentes por origem.

## Matriz de navegador e evidências

Navegador embutido Chromium, viewport explícito, altura 900 px na matriz, scrollbar vertical de 15 px. **Cada linha executada em PT e EN, em `/` e `/portfolio-v2/`: 52 combinações.** Foram medidos `document.documentElement.scrollWidth/clientWidth`, limites horizontais/scrollWidth de seções, títulos, parágrafos, links, tags e cards, e interseções entre cards/case/cursos. Também conferidos os seis IDs, ordem dos quatro projetos, quatro cursos e metadados por idioma. Nenhum overflow detectado ou interseção entre cards. Sem novo breakpoint; incluídos limites das grades que recebem texto maior e da transição do header preservado.

| Viewport | clientWidth = scrollWidth | PT/EN nos dois caminhos |
| -------- | ------------------------- | ----------------------- |
| 320      | 305                       | Passa                   |
| 390      | 375                       | Passa                   |
| 699      | 684                       | Passa                   |
| 700      | 685                       | Passa                   |
| 701      | 686                       | Passa                   |
| 767      | 752                       | Passa                   |
| 768      | 753                       | Passa                   |
| 769      | 754                       | Passa                   |
| 999      | 984                       | Passa                   |
| 1000     | 985                       | Passa                   |
| 1001     | 986                       | Passa                   |
| 1280     | 1265                      | Passa                   |
| 1920     | 1905                      | Passa                   |

Evidências locais ignoradas em `.m2-review/m4-02/`, disponíveis na mesma árvore para o Work:

- Antes: `before-390-pt.png`, `before-390-en.png`, `before-1280-pt.png`, `before-1280-en.png` — página completa.
- Depois: `after-root-390-pt.png`, `after-root-390-en.png`, `after-root-1280-pt.png`, `after-root-1280-en.png` — página completa. Maior altura decorre da copy aprovada; composição M3 mantida.
- Case/foco: `case-focus-390-pt.png`, `case-focus-390-en.png`, `case-1280-pt.png`, `case-1280-en.png`. Capturas de viewport feitas após aguardar rolagem suave; foco no article com contorno ciano, conteúdo no fluxo sem limitar altura.
- Medições: `layout-root.json`, `layout-subpath.json`; teclado/foco: `shell.json`; console: `console.json` (nenhum warning/error retornado nos previews).

O método DOM somente de leitura foi salvo em `measure-layout.js` no mesmo diretório: pode ser executado no console dos previews para reproduzir a coleta em cada largura/idioma. A matriz usa altura 900 px; os pares completos antes/depois usam 390×844 e 1280×900, mantendo dimensões equivalentes.

Smoke funcional repetido no subpath em PT/EN: skip via Enter foca `main-content`; menu abre com Space/Enter e foca o primeiro link; Escape retorna ao botão; navegação fecha o menu e foca seção; case via Enter altera hash para `#reports-registry-case` e foca article com outline solid de 3 px. Tab/Shift+Tab alcançam os novos links; menu fechado com `display:none`/`aria-expanded=false`, Tab após botão alcança CTA do hero, sem passar por links ocultos. Transição mobile → desktop mantém foco visível na navegação; desktop → mobile recupera para botão. Voltar do case restaura `#projects` por histórico nativo; não foi acrescentada restauração artificial de foco (o navegador manteve foco no article). Persistência por reload e metadados PT/EN conferidos nos previews; falhas de storage continuam cobertas pelos testes/verificador. Nenhuma submissão foi habilitada ou disparada.

Fontes estavam `loaded` na matriz. As páginas não renderizam imagens de projetos/certificados/foto: URLs legadas de dados não foram migradas, acessadas como novas mídias ou removidas. Links externos reutilizam exatamente os destinos conferidos/autorizados em M4-01; esta unidade verificou hrefs e acesso por teclado, **não repetiu uma auditoria de disponibilidade remota**.

## Validação manual posterior — 28/10/2026

O responsável declarou nesta conversa: “considere zoom real 200% e reduced motion ativo como aprovados, feitos manualmente”. Registro específico de M4-02, posterior à implementação apresentada. Ambos os critérios passam a constar como validados manualmente e aprovados pelo responsável. Codex não executou nem observou independentemente a validação; navegador, larguras, idiomas, procedimento e capturas adicionais não foram informados e não são inferidos.

Histórico preservado: na entrega inicial de 27/10/2026, ambos estavam pendentes porque o navegador de automação oferecia somente visibility/viewport, sem controle de zoom real ou emulação de preferência. O valor false de matchMedia observado naquela sessão permanece evidência bruta daquela sessão, sem contradizer ou comprovar a execução manual posterior. Viewport menor e presença da regra CSS não foram usados como substitutos. Aprovações de outras entregas não foram reutilizadas.

Esta confirmação não constitui aprovação integral da implementação pelo Work, registro verificável de revisão ou autorização de staging, commit/push. A árvore atualizada exige nova revisão e snapshot próprio; M4-03 não iniciada.

## Critérios individuais e limites

| Critério do encaminhamento                                                                 | Situação e evidência                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Equivalência aos cinco blocos PT/EN aprovados; autoria/educacional; meio período só remoto | Implementado; cotejo da proposta com diff, testes de projetos/perfil/formações e paridade. Aceite desta implementação continua do Work; M4-04 não encerrada.                                      |
| Case e links reais/autorizados, privado sem código, labels/foco                            | Passa nos limites descritos: case nativo PT/EN, hrefs exatos da coleta, helper/testes para três categorias de código e foco observado. Sem inferir disponibilidade remota atual.                  |
| Matriz de larguras/idiomas, limites e composição                                           | Passa nas 52 combinações; medidas e capturas acima. Checagem geométrica automatizada complementa inspeção visual, sem auditoria final M5.                                                         |
| Capturas antes/depois 390/1280 PT/EN                                                       | Executadas; oito capturas completas locais e detalhes do case.                                                                                                                                    |
| Persistência, metadados, skip, teclado, menu/Escape, âncoras/Voltar                        | Smoke e testes passam, com histórico/foco nativos descritos acima; shell e metadados sem alteração de código.                                                                                     |
| Zoom real 200%                                                                             | Validado manualmente e aprovado pelo responsável em 28/10/2026 para M4-02; sem observação independente pelo Codex. Método e dimensões não informados, conforme registro posterior acima.          |
| Reduced motion ativo                                                                       | Validado manualmente e aprovado pelo responsável em 28/10/2026 para M4-02; sem observação independente pelo Codex. Preferência ativa declarada pelo responsável, sem inferir detalhes adicionais. |
| Checks, testes, verificadores, builds raiz/subpath e diff check                            | Passam; comandos e resultados acima. CI remota não executada nesta árvore não commitada.                                                                                                          |
| Fronteiras e acompanhamento                                                                | Status/handoff atualizados, sem autoaceite; plano/PRD/exports/código alheio/mídias/formulário/dependências preservados.                                                                           |

Para liberar o aceite integral, Work deverá revisar esta árvore e as evidências atualizadas, incluindo o registro manual próprio de zoom real 200% e reduced motion ativo, com seus limites. A confirmação manual supera as duas pendências iniciais; não substitui a revisão técnica nem dispensa os gates dos próximos lotes. Versões seguras de mídias/certificados/currículo e foto opcional ficam em M4-03; revisão editorial integral em M4-04; Formspree/aviso/antispam/recebimento e gate funcional de LinkedIn em M4-05/06/07. Publicação e auditorias finais continuam em M5.

Conventional Commit sugerido a partir do diff: `feat(content): implement approved bilingual project cases and profile`.
