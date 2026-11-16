# M5-01 — Auditoria de acessibilidade, visual e fluxos

16/11/2026. Auditoria parcial para revisão do Work na branch `milestone/m5-quality-launch`, com base no plano aceito em `1c0e691`. O README já aparecia no status sem diff de conteúdo. Fontes do escopo: [PRD v2.3](PRD_Portfolio_Cleriston_v2.3.md), [plano M5](MILESTONE_5_PLAN.md) e [handoff de M4](MILESTONE_4_PLAN.md).

## Matriz de navegador

Chrome headless no Windows, altura de 900 px, ambas as bases e os dois idiomas por largura. A matriz reaproveita as cinco larguras da consolidação M4-08.

| Largura | Raiz PT-BR | Raiz EN | Subpath PT-BR | Subpath EN |
| --- | --- | --- | --- | --- |
| 320 | Passou | Passou | Passou | Passou |
| 390 | Passou | Passou | Passou | Passou |
| 768 | Passou | Passou | Passou | Passou |
| 1280 | Passou | Passou | Passou | Passou |
| 1920 | Passou | Passou | Passou | Passou |

O resultado da matriz cobre as asserções do script. Nos 20 cenários, a largura de rolagem igualou a largura útil, as seis seções apareceram na ordem esperada e os links internos tinham destinos. Nove imagens locais decodificaram com alt preenchido e o currículo do idioma respondeu HTTP 200 com tipo PDF. Foram conferidos o destino e aviso do LinkedIn, título e descrição presentes e o link de privacidade. A verificação de conteúdo conferiu IDs, destinos permitidos, confidencialidade de cases e ausência de links privados ou opcionais inválidos. A inspeção do PDF nesta rodada foi de entrega HTTP. A revisão de conteúdo e metadados dos dois PDFs permanece como evidência histórica em [M4-03](M4_03_HANDOFF.md).

Tab e Enter exercitaram a sequência do contato, o foco visível, o primeiro erro de campo, o estado de envio, o bloqueio de duplicidade e a aceitação simulada com foco preservado. Nos oito cenários com menu mobile, Enter abriu e Escape fechou o menu com retorno de foco. A árvore de acessibilidade do Chrome expôs a região de status com anúncio `polite`. Os 94 testes também cobrem rejeição, rede, timeout, limite, nova tentativa e liberação do LinkedIn com o formulário indisponível.

O Chrome emulou a preferência ativa `prefers-reduced-motion: reduce`; a media query retornou verdadeiro e a rolagem computada foi `auto` nos 20 cenários. O script conferiu a política normal `connect-src 'self'` nas duas bases, bloqueou o domínio do Formspree e interceptou `fetch` para devolver uma aceitação local. O monitor de rede registrou zero requisições ao Formspree.

## Inspeção visual e contraste

Inspeção humana das capturas do contato a 390 px em PT-BR e 1280 px em EN, incluindo botão e seu contorno ciano, rótulos e mensagem de estado. O HTML, DESIGN.md e as capturas web/mobile do Stitch orientaram a comparação: hierarquia com Manrope e Inter, superfícies escuras e acento ciano, formulário empilhado em tela estreita e contato em duas colunas em tela larga. Marca real, seção de aprendizado, cases, mídias autorizadas e avisos do formulário são adaptações aprovadas. A inspeção visual nova cobre o contato; a composição integral tem as evidências históricas de M3/M4.

O cálculo automatizado de contraste amostrou texto sobre superfícies opacas em títulos de projetos e cursos, aviso de privacidade e labels do formulário. As amostras atingiram os limiares aplicáveis de 3:1 ou 4,5:1. Gradientes e superfícies translúcidas ficam fora desse cálculo.

| Gravidade | Achado ou pendência | Reprodução e evidência |
| --- | --- | --- |
| Moderada | A borda em repouso dos campos de contato tem contraste insuficiente perante o painel. Critério 1.4.11. | Em `#contact`, observar os campos vazios antes do foco. A borda de 2 px é a principal indicação visual do limite. RGB `52 56 66` sobre RGB `22 26 33` dá 1,49:1 perante a referência de 3:1. A captura mobile mostra a borda em repouso. |
| Pendente | Leitor de tela e zoom real do navegador a 200%. | A execução usou Chrome headless e árvore de acessibilidade. Falta conferir leitura e anúncios em uma sessão com leitor de tela e o reflow com zoom nativo de 200%, incluindo menu e formulário nos dois idiomas e bases. |
| Pendente | Cobertura manual ampliada de WCAG e fluxos. | Ainda faltam inspeção de contrastes compostos e estados fora da amostra, revisão visual integral da página nesta versão, confirmação de destinos externos por navegação, e percurso manual completo com skip, menu aberto, transições e histórico Voltar. A matriz cobre as asserções listadas acima. |

O achado segue para priorização na etapa de correções prevista no plano. A cobertura parcial ainda não permite declarar conformidade WCAG 2.2 AA. O bloqueio automático do Formshield e o contato real na origem final continuam em M5-04.

## Reprodução e evidências locais

1. Configurar o endpoint público aprovado na variável do processo apenas para o build e gerar `npm run build` e `npm run build:subpath`. Ambos passaram.
2. Servir com `npm run preview` e `npm run preview:subpath` em loopback, portas 4180 e 4181, com a política padrão. Iniciar Chrome com depuração local em 9336 e executar `node .m2-review/m5-01/browser.mjs`. O roteiro bloqueia a rede do Formspree antes de abrir a página.
3. Consultar `.m2-review/m5-01/browser.json` para valores, destinos e resultados por célula e os PNGs por base, largura e idioma. Para repetir a checagem manual de contraste, comparar a borda dos campos e o fundo do painel antes de focar um campo.
4. `npm test` passou com 94 testes em 10 arquivos. `npm run verify` passou para conteúdo e i18n.

## Complemento de navegação e revisão visual

Em 16/11/2026, a matriz anterior foi reaproveitada. A rodada complementar passou em quatro combinações: raiz PT-BR, raiz EN, subpath PT-BR e subpath EN. Em cada uma, a página abriu a 390 px e Tab seguido de Enter ativou o skip link e focou o conteúdo principal. Com o menu aberto e o link Contato focado, a janela passou a 1280 px com foco na navegação e voltou a 390 px com foco no botão. Enter reabriu o menu, ativou Contato e focou a seção. Voltar pelo histórico do navegador saiu de `#contact`. A abertura e o acionamento dos controles usaram eventos de teclado no Chrome. O botão e o link do menu receberam foco programático para preparar as transições.

O script local `.m2-review/m5-01/followup.mjs` reproduz o percurso usando os previews e a porta de depuração descritos acima. O resultado está em `followup.json`. Foram gerados oito panoramas `full-{root,subpath}-{390,1280}-{pt,en}.png`. A inspeção humana comparou a raiz mobile em PT-BR e o subpath desktop em EN com as referências Stitch. Confirmou a hierarquia do hero, o empilhamento mobile e a grade desktop dos projetos, as superfícies escuras e o acento ciano, com as seções, cases e certificados aprovados no projeto atual. Os demais panoramas estão disponíveis para revisão. A evidência de contato simulado da matriz anterior continua válida. A sessão complementar manteve a CSP normal e interceptação local, com zero requisições observadas ao Formspree.

### Verificações manuais restantes

O Chrome headless usado nesta rodada não oferece a interface de zoom nativo nem acesso ao áudio de um leitor de tela do Windows. A matriz varia a largura da janela e o resultado de anúncio vem da árvore de acessibilidade. Para completar a cobertura manual nos dois previews e nos dois idiomas:

1. **Zoom nativo.** Abra as duas bases no Chrome visível e selecione 200% no menu do navegador. Em cada idioma, percorra header, projetos, certificados e contato. Abra e feche o menu quando exibido, avance com Tab e confira foco, rótulos, botões, leitura e rolagem horizontal. Registre largura da janela, idioma, base, percentual visível no menu e capturas de qualquer corte. Restaure 100% antes do cenário seguinte.
2. **Leitor de tela.** Use NVDA ou Narrador em uma sessão audível. Confira idioma, regiões, cabeçalhos, nome do seletor de idioma, skip link, estado expandido do menu, nomes dos links e descrição de login do LinkedIn. No formulário ativo, tente enviar vazio e confira foco e leitura do erro. Para conferir andamento e confirmação, use somente a sessão com transporte simulado. Registre navegador, leitor de tela, idioma, base e o texto efetivamente anunciado. O procedimento dispensa envio em uma sessão comum.
3. **Contraste e links externos.** Nos dois idiomas e bases, confira os pares de cores restantes, incluindo gradientes, superfícies translúcidas e estados de foco. Registre cores, proporção e captura. Abra os destinos listados em `followup.json` e registre destino e resultado visível, incluindo eventual exigência de login. A rodada complementar inventariou os URLs renderizados. A disponibilidade externa continua sem revalidação nesta rodada.

O achado de contraste de 1,49:1 nas bordas em repouso permanece para a etapa de correções. A auditoria continua parcial e aguarda nova revisão do Work.

### Revalidação dos destinos e dos pares de cores

A lista de destinos renderizados nos quatro cenários foi deduplicada. Em 16/11/2026, uma consulta HTTP GET sem autenticação, seguindo redirecionamentos, retornou 200 para sete destinos: perfil e quatro repositórios GitHub, política de privacidade do Formspree e Google Play. O LinkedIn retornou 999 para o cliente automatizado. Isso registra a barreira da consulta e mantém a evidência de M4-07 de que enviar mensagens exige login. HTTP 200 confirma a resposta do destino nessa consulta. O resultado bruto está em `.m2-review/m5-01/external-links.json`.

O cálculo complementar usou luminância relativa dos tokens atuais. As cores compartilhadas se aplicam aos dois idiomas e bases. Para gradientes, foram tomadas 101 amostras de interpolação RGB entre as pontas. Para transparência, foi calculada a composição da superfície do header a 60% sobre o fundo base.

| Par avaliado | Contraste | Limite da evidência |
| --- | --- | --- |
| Texto escuro do CTA sobre gradiente ciano | mínimo estimado 8,18:1 | Amostra dos tokens do gradiente |
| Gradiente do título sobre o fundo base | mínimo estimado 7,15:1 | Fundo base, sem composição com luz ambiente |
| Contorno ciano de foco sobre painel do formulário | 10,86:1 | Par de cores do painel e contorno |
| Texto da navegação sobre header translúcido sobre fundo base | 10,72:1 | Composição de referência, com conteúdo sob o header dependente da rolagem |

As medições acima ampliam a amostra. A verificação manual de fundos variáveis e outros estados continua pendente. O achado de 1,49:1 nas bordas em repouso foi preservado.

O roteiro acima foi encaminhado ao responsável para coletar zoom nativo e áudio do leitor de tela por base e idioma. A sessão de controle oferece leitura da árvore de acessibilidade e imagens, sem canal de áudio do Windows. Os resultados manuais do responsável permanecem pendentes de registro nesta revisão.

### Aceite manual posterior do responsável

O responsável confirmou nesta conversa que testou manualmente e aprovou o zoom de 200%, o link para o perfil no LinkedIn, o contraste e o leitor de tela. A confirmação resolve a espera pelo retorno manual nesses quatro itens. Navegador, leitor de tela, anúncios e resultados por base e idioma não foram discriminados no relato. A execução foi confirmada pelo responsável, sem observação independente pelo Codex.

O achado medido de 1,49:1 nas bordas dos campos em repouso permanece registrado para a etapa de correções, conforme o escopo de M5-01. A barreira da consulta automatizada ao LinkedIn e a exigência de login para mensagens continuam documentadas. O relatório atualizado aguarda revisão verificável do Work.
