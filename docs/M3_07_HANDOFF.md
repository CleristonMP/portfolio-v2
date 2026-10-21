# M3-07 — Contato — handoff para revisão

20/10/2026. **Implementada, aguardando revisão própria do Work. Sem staging, commit, push, merge ou deploy. M3 não concluído.**

## Entrada, fontes e decisões

Git observado: origin `https://github.com/CleristonMP/portfolio-v2.git`; entrada `feat/m3-06-learning`, HEAD `c61a2359b66cd42bd5bf7226e4f3d36d74286306`. README sinalizado previamente apenas por finais de linha, diff vazio; nenhum staging. Criada `feat/m3-07-contact` a partir desse estado, preservando alterações existentes. M3-06 aceita pelo Work, commit/push registrados nesta conversa. Status anterior preservado como histórico; sem nova consulta remota ou alegação de CI. Nenhum AGENTS.md encontrado no repositório ou ancestrais C:/Projects e C:/.

Lidos workflow, status, plano M3, PRD §§4.7/8, contratos, dados de contato e tokens. Consultados HTML, DESIGN.md e screens web/mobile nas cópias locais em `.m2-review/m3-01/references/`; os seis arquivos foram conferidos byte a byte contra os ZIPs originais. Screens reduzidas orientam composição qualitativa, sem equivalência pixel a pixel. PRD e exports intactos.

Decisões explicitamente aprovadas pelo responsável, acrescentadas ao plano existente sem duplicação: três campos PT/EN (nome, email, mensagem); Formspree; GitHub como acesso ao perfil, sem promessa de mensagens privadas. Destinatário privado informado nesta conversa **não reproduzido nem gravado em arquivos do projeto**, reservado à configuração do serviço em M4. Não foi criado email público por inferência. M3 entrega interface/validação local; M4 configura conta, endpoint, destinatário, envio real e antispam.

## Arquivos e implementação

- `src/components/ContactForm.tsx`: responsabilidade própria de formulário local, com três campos tipados, estado somente em memória e validação por saída do campo. Sem persistência, transportes, endpoint, SDK ou controle de demonstração. Valores não vazios são verificados por trim; email usa typeMismatch do input nativo type=email, sem expressão arbitrária adicional. Campos visited mostram erro e se corrigem durante edição. Alteração de idioma preserva valores e traduz as mensagens atuais a partir do contrato.
- `src/sections/ContactSection.tsx`: preserva #contact/tabIndex -1 e composição no App; usa ContactForm e link verificado do dataset. Nome PT/EN explícito de acesso ao perfil GitHub; ícones decorativos aria-hidden/focusable false. Não oferece email/LinkedIn/currículo desconhecidos.
- `src/content/contracts.ts` e `src/i18n/translations.ts`: contrato tipado de labels/erros/link; aviso anterior aos campos declara envio indisponível e validação apenas local. Sem mudança editorial nas outras seções.
- `src/styles.css`: regras delimitadas por .contact-section; grid, hierarquia, painel, campos e foco. Tokens globais e entregas anteriores preservados.
- `tests/contact.test.tsx`: cinco cenários pertinentes PT/EN, descritos abaixo; nenhuma asserção anterior reduzida.
- `docs/MILESTONE_3_PLAN.md`: decisões posteriores aprovadas de M3-07, preservando tabela, sequência e decisões históricas.
- `PROJECT_STATUS.md`: M3-06 aceita/commitada e M3-07 aguardando revisão, com histórico e limites.
- `docs/M3_07_HANDOFF.md`: este relatório. README continua sem diff versionável e fora do escopo.

Labels htmlFor/id estáveis; required nos três campos; nome/email com autocomplete. Erros em texto com role=alert, aria-invalid e aria-describedby do campo para mensagem específica; não dependem somente de cor. Validação local com noValidate evita bolhas nativas em idioma diferente. Textarea permite redimensionamento vertical, sem limite de altura. Nenhum autofocus ou alteração global de foco/menu/histórico.

Aviso de indisponibilidade está antes do preenchimento e descreve o formulário. Botão submit nativamente disabled em todo estado; onSubmit sempre preventDefault protege também submissão implícita/evento cancelável. Nenhum action/method, fetch, XHR, beacon, chave, destinatário ou sucesso simulado no componente. O link GitHub abre apenas o perfil se acionado; não foi aberto no smoke. Não foi criada conta ou integração, nem feita requisição externa pelo formulário. Fontes externas herdadas continuam no shell existente; não são transporte de mensagens nem foram migradas neste lote.

## Composição e comparação Stitch

Web: painel amplo arredondado, introdução/dados de exemplo à esquerda e formulário à direita; mobile: campos empilhados sem painel externo, título menor e links sociais abaixo. Os dois HTMLs têm nome/email/mensagem, mas sem funcionamento real e com labels sem associação programática. Botões e títulos diferem entre layouts. DESIGN.md recomenda Inter/Manrope, camadas tonais, campos transparentes com borda inferior e foco ciano.

Adaptação: mesmos três campos/fluxo e aviso nos dois layouts, sem contatos/localização fictícios. Mantido painel surface-container específico do formulário também no mobile para separar aviso e campos; duas colunas desktop minmax(0,1fr), uma até 700 px, gap clamp(32px,5vw,64px). Mobile painel 24×20 px; desktop 32 px, raio 24 px. Padding vertical de contato 155 px desktop/90 px mobile preservado. Título local 32–52 px/1,15, tracking -0,025em, largura 15ch; não altera h2 globais. Bordas inferiores de 2 px delimitam controles, não seções. Labels 14 px e campos 16 px/1,6 para leitura e entrada, maiores que labels demonstrativas dos exports. Foco outline ciano 3 px/offset 4 px; erro violeta com texto associado. Não foi criado token de erro ou paleta nova. Botão indisponível usa superfície/contraste neutros, sem tratamento de ação ativa ou gradiente para sugerir envio funcional. Sem animação nova, glass ornamental ou sombras pesadas. Conflitos de tracking/raios/escala já registrados em DESIGN_TOKENS.md resolvidos apenas neste escopo.

## Proposta de aviso futuro — pendente de aprovação editorial

Texto proposto somente neste handoff, **não publicado na interface enquanto o envio não existe**:

- PT: “Quando o envio estiver habilitado, seu nome, email e mensagem serão usados para responder ao seu contato e processados pelo Formspree para encaminhamento ao responsável pelo portfólio.”
- EN: “Once sending is enabled, your name, email and message will be used to respond to your inquiry and processed by Formspree for delivery to the portfolio owner.”

Validar editorialmente e adequar ao serviço efetivamente configurado em M4 antes de ativar envio. Sem promessa de retenção, sigilo absoluto, ausência de armazenamento ou conformidade jurídica automática. A configuração e as práticas de tratamento continuam pendentes; aviso operacional atual informa apenas indisponibilidade/validação local. Não houve nova consulta externa nesta implementação; não se alega auditoria das políticas do provedor.

## Evidências e procedimento reproduzível

Vite dev `http://127.0.0.1:4190/`, comando `node node_modules/vite/bin/vite.js --host 127.0.0.1 --port 4190 --strictPort`; Chromium integrado. Artefatos locais ignorados em `.m2-review/m3-07/`:

- `before-{390,1280}-{pt-BR,en}.png`, `before.json`: quatro capturas reais antes de editar código.
- `after-{390,1280}-{pt-BR,en}.png`, `after.json`: quatro capturas posteriores, mesmas dimensões anteriores (390×1100/1280×844). Seção maior que viewport é percorrida por rolagem vertical; captura de viewport não significa corte de conteúdo. Captura adicional de página inteira EN mobile em `after-390-en-full-page.png`.
- `matrix.json`: 26 cenários com campos vazios, viewport efetivamente aplicado antes da leitura.
- `matrix-errors.json`: 26 cenários adicionais com os três erros visíveis, sem perda de largura ou sobreposição.
- `smoke.json`: destino/foco nativo, sequência de teclado, erros, valores válidos sem envio, persistência/metadados e Escape.
- `comparison.json`: mesmas larguras/alturas amostradas das outras seções nas quatro comparações, e enquadramento antes/depois.
- `privacy-scan.json`: 85 arquivos do projeto, build e evidências textuais examinados, zero endereços do domínio do destinatário; conteúdo privado não reproduzido.

| Viewport | clientWidth = scrollWidth PT/EN |
| --- | --- |
| 320 | 305 |
| 390 | 375 |
| 699 | 684 |
| 700 | 685 |
| 701 | 686 |
| 720 | 705 |
| 767 | 752 |
| 768 | 753 |
| 999 | 984 |
| 1000 | 985 |
| 1001 | 986 |
| 1280 | 1265 |
| 1920 | 1905 |

Capturas de página inteira podem ocultar temporariamente a scrollbar durante sua produção; medidas comparativas foram feitas/restauradas com clientWidth 375/1265, não com a largura sem scrollbar. No baseline curto de contato, o fim da página limita a posição da âncora a aproximadamente 131–149 px; após incluir campos, a âncora alcança aproximadamente 100 px. A altura nova altera posições posteriores, não dimensões do footer ou outras seções.

Matriz vazia e com erros: sem excesso contra clientWidth, cortes internos medidos ou interseção entre aviso, campos e botão. Mesmos nomes/campos/ordem nos dois idiomas, breakpoint existente de 700 px preservado. Medir getBoundingClientRect/scrollWidth/clientWidth de título, aviso, labels, inputs, textarea, erros, link e botão; verificar interseções dos blocos de formulário. Repetir pelo seletor de idioma e larguras, com altura 844 px e scrollbar vertical 15 px. Não ocultado overflow global. Viewport menor e screenshots não são zoom real.

Smoke próprio: menu → Contato por Enter fecha menu e foca #contact (outline ciano solid 3 px); Tab alcança perfil GitHub, nome, email, mensagem e segue ao retorno ao início, ignorando submit desabilitado. Campos vazios e email inválido geram erros associados ao sair; valores válidos eliminam erros. Enter com valores válidos mantém #contact, botão disabled e nenhum status de sucesso. Reload preserva PT/EN/metadados e limpa valores somente em memória. Space abre menu e Escape devolve foco ao botão. Browser API não disponibilizou performance.getEntriesByType no escopo de leitura; não se declara captura de tráfego de rede. Evidência de ausência de transporte: código sem transporte, teste com fetch interceptado sem chamadas e submissão cancelada; não foi acionado serviço externo.

## Critérios individuais

1. Mesmos três campos e fluxo PT/EN desktop/mobile: implementados, matriz e testes; sem assunto/anexos ou outros campos.
2. Labels/erros/teclado: associação programática e mensagens localizadas verificadas em testes e smoke. Não equivale a auditoria completa com leitor de tela.
3. Sem envio real/sucesso fictício/destinatário exposto: transporte ausente e submit bloqueado, teste e inspeção. Destinatário não gravado; varredura final registrada abaixo.
4. Responsividade: matrizes vazia/com erros, 52 cenários, incluindo cinco larguras exigidas e limites de breakpoints; sem overflow/cortes medidos.
5. Antes/depois: oito capturas 390/1280 PT/EN e evidência adicional de página inteira; comparação qualitativa descrita.
6. Zoom real 200% e reduced motion ativo: **pendência inicial (histórico), superada pela confirmação manual posterior registrada abaixo**. Navegador integrado oferece viewport/visibilidade, sem controle documentado de zoom real ou emulação da preferência. Naquele momento, nenhuma execução nativa/manual específica M3-07 havia sido registrada, sem reutilizar aprovações anteriores. Regra global preservada e ausência de nova animação não provam preferência ativa.
7. Qualidade: resultados finais abaixo; sem autoaprovação. Contratos existentes preservados e apenas estendidos para a UI localizada; dados de contato e caminhos base intactos.

## Comandos, resultados e limites

Runtime Node direto 22.16.0/npm 10.9.2, C:/Program Files/nodejs no PATH somente do processo para contornar shim Volta herdado. Sem configuração global, dependência, lockfile ou base path alterados.

Sequência final após ajuste de legibilidade da função de validação:

- `npm run typecheck`: passou, incluindo testes/configurações.
- `npm run lint`: passou, zero warnings.
- `npm run format`: passou; verificação de formato repetida após atualização documental.
- `npm test`: 59 testes em 7 arquivos passaram, incluindo os cinco novos cenários de contato.
- `npm run verify`: conteúdo e i18n passaram.
- `npm run build`: passou, Vite 6.4.4, 1598 módulos; CSS index-DeDPIXQ8.css 23,29 kB, JS index-DVAd_3d9.js 252,91 kB.
- `git diff --check`: passou, repetido na entrega final.

Varredura de privacidade em 85 arquivos (versionáveis, build e evidências textuais): zero endereços do domínio do destinatário. Nenhum valor privado usado em fixtures, documentação, capturas ou cliente. Medições dos dois JSONs de matriz também verificadas localmente: 26/26 em cada, campos name/email/message, disabled true e clientWidth=scrollWidth=viewport−15. Quatro comparações mantêm larguras/alturas das outras seções. Sem comandos falhos na sequência final de qualidade; limitação da API de inspeção de recursos registrada acima.

Testes DOM não comprovam CSS, layout, histórico, zoom ou preferência ativa. Cinco testes novos cobrem aviso anterior aos campos, labels/ordem, bloqueio por clique/Enter/evento cancelável, fetch sem chamadas, required/email, correção e tradução de erros mantendo valores. Nenhuma asserção anterior reduzida. Scripts de invariantes e i18n continuam executados, incluindo paridade profunda do novo contrato. Sem mudança de assets/caminhos, build alternativo não exigido; não se alega nova matriz subpath ou CI remota.

M4 ainda precisa configurar serviço/destinatário privado, avaliar antispam e limites, implementar transporte, validar erros/sucesso reais e comprovar recebimento. GitHub é somente perfil público; não garante orçamento/recrutamento nem substitui um inbox verificado. Aviso futuro permanece pendente de aprovação editorial. Demais pendências editoriais, mídias/permissões, segurança e publicação preservadas. M3-08 não iniciada.

Diff e snapshot em `.workflow/m3-07-review.patch` e `.workflow/m3-07-implementation-snapshot.json`; não constituem aprovação. Work deve revisar a árvore completa e evidências locais. .workflow e .m2-review fora do versionamento. **M3-07 aguardando revisão própria, sem staging, commit ou push.**

Conventional Commit sugerido: `feat(contact): add localized unavailable form with local validation`.

## Confirmação manual posterior — 21/10/2026

O responsável declarou nesta conversa: “considere zoom real 200% e reduced motion ativo como aprovados, feitos manualmente”. Ambos os critérios ficam registrados como executados manualmente e aprovados pelo responsável para M3-07. A confirmação supera a pendência inicial acima, preservada como histórico. Codex não observou a execução; navegador, larguras, idiomas, passos e capturas adicionais não foram informados e não são inferidos. Aprovações de outras tarefas não foram reutilizadas.

Atualização somente documental, sem alterar implementação ou evidências anteriores. A confirmação desses dois critérios não substitui a revisão integral do Work nem a aprovação editorial do aviso futuro; integração, antispam e recebimento continuam pendentes de M4. Sem autorização de staging, commit ou push. Diff e snapshot de implementação atualizados para nova revisão, sem criar registro de aprovação.
