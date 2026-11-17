# M5 — Qualidade e lançamento — plano aprovado

## Estado corrente — plano aprovado pelo responsável — 13/11/2026

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

## Decisões em aberto

- **Contato real.** Autorizar origem, janela, quantidade e identificadores sintéticos. O responsável confirma o recebimento pelo destinatário já configurado.
