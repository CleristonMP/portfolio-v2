# Evolução pós-MVP — Galerias, feedback e movimento

## Plano aprovado pelo responsável — 18/11/2026

Este plano traduz a avaliação do responsável após o encerramento de M1–M5. O responsável aprovou expressamente este plano em 18/11/2026, pela declaração “Aprovado”. A aprovação abrange o escopo, a sequência EV-01 a EV-05 e seus critérios. Cada implementação terá encaminhamento e revisão próprios.

Registro corrente de 25/11/2026: EV-01 aceita pelo Work e commitada em `0987b36`; EV-02 em `7a45e9bcf862c5b9b02d898530d158de8bc87f0c`; EV-03 em `7fb2ea44e29dd9bf4b556470a617b2331e79dde6`; EV-04 em `a0d32899c8add6d0f8d7628cdc8cdf4d3313fece`, com valores de movimento aprovados pelo Work conforme o encaminhamento recebido. As esperas documentais abaixo são históricas. A troca da preferência durante uma animação conserva somente evidência de testes DOM, sem reprodução temporal no navegador. EV-05 reúne regressão, comparação de performance e artefato local, **aguardando revisão do Work; complemento de movimento reduzido em 320/768 px executado nas oito combinações**. A validação audível manual relatada em EV-02 mantém seus limites e não comprova os novos anúncios de EV-03.

Base observada: `b728674`, merge do fechamento de M5. Usar uma única branch, `evolution/media-motion-feedback`, para todas as tarefas desta evolução. Work planeja e revisa; Codex implementa e testa sem commit/push; commit/push dependem de snapshot verificável do Work. Publicação depende de autorização específica.

## Objetivo e referências

Melhorar a exploração dos projetos, a resposta das interações e a percepção de movimento, preservando a identidade visual aprovada, o conteúdo factual e a experiência PT-BR/EN.

- Avaliação e decisões do responsável nesta conversa.
- PRD v2.3 e DEVELOPMENT_WORKFLOW.md para requisitos e fluxo.
- Exports Stitch web/mobile em design/ para hierarquia, cores, tipografia e superfícies.
- Relatório M4-03 para candidatas saneadas e restrições de mídia.
- Relatórios M5-01/M5-02 para acessibilidade e performance.
- Diretório public/assets/medias/projects do repositório antigo, consultado somente em leitura. O inventário remoto atual de imagens e vídeos será confirmado na primeira tarefa.

Esta evolução propõe galeria e diálogos que estavam fora do escopo do MVP. As restrições de confidencialidade de Reports Registry e a natureza educacional de DS Commerce continuam aplicáveis.

## Experiência proposta

Cada card mantém sua capa e recebe a ação explícita “Explorar projeto”, localizada em PT/EN. A ação abre um visualizador com nome, natureza e resumo breve do projeto, mídia principal, legenda, posição na sequência, miniaturas e controles anterior/próximo. Os links de repositório, loja e case textual mantêm destinos próprios.

O visualizador usa apresentação ampla em desktop e pode ocupar a tela em mobile. Um botão de fechar permanece visível. Escape fecha e o foco retorna ao acionador. A galeria permite teclado e miniaturas; gesto de deslizar é opcional e complementa os controles. Não há avanço automático. A ampliação fica dentro do visualizador, com retorno acessível à apresentação normal.

O case textual de Reports Registry permanece na página e ganha acesso à mesma galeria. A leitura das imagens de projetos deixa de exigir navegação direta ao arquivo. A integração de DS Commerce segue o mesmo padrão, preservando sua posição secundária. A ampliação dos certificados usa o mesmo comportamento de visualização e fechamento, com seu texto de formação preservado.

Vídeos selecionados usam controles nativos e reprodução iniciada pelo visitante. Ao trocar a mídia ou fechar o visualizador, a reprodução para. A entrada da página não carrega os vídeos completos. Uma descrição textual acompanha cada vídeo; legendas são necessárias quando a compreensão depende de fala ou áudio.

O formulário mostra andamento junto ao botão e mantém erros perto dos campos. A aceitação confirmada pelo serviço abre um diálogo breve, localizado, com botão de fechar. A mensagem não promete entrega na caixa de entrada. Fechar devolve o foco ao formulário. Os valores permanecem em caso de erro e a nova tentativa exige ação explícita.

## Sequência proposta

### EV-01 — Curadoria e aprovação das mídias

Dependência: aprovação deste plano.

Inventariar imagens e vídeos dos quatro projetos; reaproveitar candidatas saneadas de M4-03; propor a ordem de apresentação e legendas PT/EN. Os nomes dos arquivos ajudam a identificar telas e não substituem a redação editorial. Apresentar o inventário e a seleção no próprio registro desta tarefa, evitando documentos paralelos.

Aceite:

- Cada mídia selecionada tem origem, identificação do conteúdo, ordem, formato, dimensões, tamanho e uso proposto.
- Cada vídeo tem duração, informação sobre áudio, necessidade de legendas e poster proposto.
- As versões exatas publicáveis têm aprovação e identificação por hash, com inspeção visual dos saneamentos.
- Código privado, identidade empresarial, documentos e dados confidenciais de terceiros continuam protegidos. Capturas de laudos bloqueadas em M4-03 exigem resolução específica antes de eventual inclusão.
- A seleção busca explicar os fluxos e não exige quantidade igual por projeto. Alternativas repetitivas podem ser omitidas com justificativa.
- Definir limites de peso de imagens/vídeos a partir do inventário e submetê-los ao Work antes da integração. Confirmar novamente acesso ao inventário remoto antes de declarar a coleta completa.

### EV-02 — Galeria acessível e integração dos projetos

Dependência: seleção, legendas e versões de EV-01 aprovadas.

Implementar um componente de galeria reutilizável e um fundamento de diálogo somente na medida necessária aos usos previstos. Preferir recursos nativos do navegador e dependências existentes. Justificar qualquer biblioteca adicional por lacuna demonstrada.

Aceite:

- Os quatro projetos abrem sua seleção correta, na ordem aprovada, com dados únicos para desktop/mobile e PT/EN.
- Título acessível, foco inicial previsível, contenção do foco, fundo sem interação e bloqueio de rolagem enquanto aberto.
- Fechamento por botão e Escape, com restauração do foco e da posição de leitura. Cliques no conteúdo não fecham o diálogo acidentalmente.
- Anterior/próximo, miniaturas e posição atual têm nomes acessíveis e comportamento definido nas extremidades. Proposta inicial: sem retorno circular, desabilitando o controle no fim/início.
- Ampliação mantém proporção e permite leitura de telas largas ou portrait, sem cortar controles ou texto para preencher espaço.
- Case Reports Registry e DS Commerce usam o mesmo inventário da galeria. Certificados abrem no visualizador com fechamento próprio.
- Links de loja/repositório continuam independentes e acessíveis. Não há links interativos aninhados em cards clicáveis.
- Vídeos param ao sair da mídia e preservam controles, descrição e legendas aplicáveis. Falha de mídia oferece mensagem localizada e navegação para as demais.
- Carregar a mídia atual e, se necessário, a próxima. Miniaturas e carregamento posterior evitam baixar a galeria inteira na entrada da página.
- Smoke em raiz/subpath, PT/EN, desktop/mobile, teclado e leitor de tela; testes de abertura, navegação, isolamento, fechamento e restauração de foco.

### EV-03 — Feedback de contato

Dependência: EV-02 aceita para reaproveitar o comportamento de diálogo.

Aceite:

- Estado de envio visível e anunciado junto ao botão, com prevenção de duplicidade mantida.
- Sucesso abre confirmação somente depois da resposta aceita pelo serviço. Nome/descrição e botão de fechar localizados.
- Escape e botão fecham, com retorno de foco previsível. Não acumular diálogos ou reabrir confirmação por trocar idioma.
- Validação, rejeição, rede, timeout e limite mantêm feedback junto ao formulário, preservando os valores no erro e a tentativa explícita.
- Mensagem de aceitação distingue resposta do serviço de recebimento na caixa de entrada.
- Testes e smoke com transporte simulado. Envios reais exigem autorização própria, apenas se necessários.

### EV-04 — Movimento e microinterações

Dependência: galerias e feedback aceitos.

Aplicar um vocabulário pequeno de movimento: entrada de conteúdo ao chegar à seção, resposta de cards/links ao foco e hover e transições da galeria e confirmação. Propor valores de duração e deslocamento para revisão visual na primeira entrega. Usar CSS e recursos existentes quando suficientes.

Aceite:

- Conteúdo permanece disponível se a inicialização da animação falhar. O hero não espera animações para apresentar seu conteúdo principal.
- Movimentos usam prioritariamente opacity/transform e preservam espaço de layout, sem tremor ou mudança involuntária de posição.
- Entradas executam uma vez por seção, sem repetição a cada pequena rolagem. Não há autoplay de mídia ou movimento decorativo contínuo.
- Estados de hover têm equivalentes adequados para teclado e toque, sem exigir hover para descobrir ações.
- prefers-reduced-motion reduz ou elimina efeitos, mantendo conteúdo, controles e feedback equivalentes.
- Abertura/fechamento animados preservam foco e isolamento durante a transição. Navegação rápida ou fechamento imediato não deixam a interface travada.
- Revisão visual contra a identidade Stitch e smoke com movimento reduzido ativo, teclado, desktop/mobile e PT/EN.

### EV-05 — Regressão e preparação de publicação

Dependência: EV-01 a EV-04 aceitas.

Aceite:

- Typecheck, lint, formato, testes pertinentes, verificadores de conteúdo/i18n e builds raiz/subpath passam.
- Contratos/verificadores acompanham o inventário real de mídia aprovado. Atualizar invariantes específicas das nove imagens do MVP, preservando validações de privacidade e integridade.
- Matriz de smoke inclui 320, 390, 768 e 1280 px, ambos idiomas/caminhos, diálogo, teclado, redução de movimento, erros de mídia e de envio simulados.
- Medir antes/depois sob as mesmas condições. Conservar os orçamentos de navegação inicial acordados em M5-02: fontes até 80 KiB, imagens até 200 KiB e JavaScript até 90 KiB. O orçamento total da galeria será definido em EV-01.
- Registrar LCP, CLS e TBT de laboratório e os limites da comparação. Não declarar INP ou resultados de campo sem medição correspondente. Avaliar qualquer regressão antes da aprovação.
- Apresentar commit, artefato e procedimento de reversão para publicação. A versão pública só muda após revisão e autorização do responsável.

## Decisões abertas na aprovação inicial — histórico

- Seleção exata de imagens/vídeos, ordem, legendas e necessidade de legendagem ou saneamento adicional em EV-01.
- Comportamento e limites da ampliação no mobile, a validar com os formatos selecionados em EV-02. Não pressupor necessidade de uma biblioteca de zoom.
- Durações e intensidade final dos efeitos após comparação visual em EV-04.
- Peso total e estratégia de entrega dos vídeos após medição do inventário. Hospedar os assets localmente no novo projeto é a proposta inicial; outra origem requer decisão.

## Limites e acompanhamento

Código limpo, nomes claros e componentização com responsabilidade definida continuam critérios de revisão de cada entrega. Os materiais originais são fonte somente de leitura. O PRD do MVP e as evidências históricas ficam preservados; este plano registra a proposta de extensão.

A investigação de LCP mobile, a triagem de dependências e o acompanhamento do Formshield de M5 continuam rastreados. Esta evolução deve considerar seus efeitos sobre performance e segurança e não declara esses itens resolvidos.

Na aprovação inicial, nenhuma tarefa deste plano havia sido implementada ou aceita; EV-01 era a primeira autorizada para encaminhamento ao Codex. Os registros de execução e o estado corrente acima reconciliam os aceites posteriores, sem substituir o histórico.

## Execução EV-01 — curadoria proposta, aguardando revisão editorial e técnica — 18/11/2026

Estado conferido na branch `evolution/media-motion-feedback`, HEAD `b728674ffbe793429375a7822a683b7864115fac`. O plano aprovado já existia localmente sem commit. README preservado byte a byte. Esta seção acrescenta a execução à sequência aprovada. EV-01 permanece em revisão; EV-02 depende de aceite da seleção, legendas e versões exatas.

### Origem e cobertura

Consultado em leitura o [diretório original](https://github.com/CleristonMP/portfolio/tree/b6dded70fd5aaef25cba6fe039d099f359920f3c/public/assets/medias/projects), commit `b6dded70fd5aaef25cba6fe039d099f359920f3c`, árvore completa (truncated=false), igual à origem de M4-03. Inventário dos quatro projetos: Reports Registry 30 imagens, Audience-Counter 6 imagens e 3 vídeos, Web Matrículas 17 imagens e DS Commerce 12 imagens. Não há vídeos nos outros três diretórios. Os demais projetos do repositório ficam fora da curadoria aprovada. A API foi consultada novamente ao finalizar para confirmar o inventário.

Reaproveitadas doze candidatas WebP de M4-03, sem regenerar pixels. Conferidos SHA-256 das candidatas e fontes locais e Git blob das fontes contra a árvore remota. Cinco já integram o MVP (rr-search, rr-import, ac-landscape, wm-classes, ds-catalog). As sete adicionais precisam de aprovação exata própria. Cada uma foi aberta em resolução natural nesta rodada, além da prancha saneada de M4-03. A inspeção trata apenas categorias de informação removida; nomes/valores restritos não são reproduzidos.

### Seleção em ordem narrativa e legendas propostas

As linhas abaixo definem a ordem dentro de cada projeto, na curadoria editorial Reports Registry → Audience-Counter → Web Matrículas → DS Commerce. A primeira imagem mantém a capa do MVP, exceto Web Matrículas, cuja capa continua wm-classes mesmo com wm-admin abrindo a narrativa da galeria. Origem relativa a `public/assets/medias/projects/<projeto>/`. A versão revisável de cada ID está em `.m2-review/m4-03/candidates/<projeto>/<ID>.webp`; origem absoluta, dimensões, bytes e hashes também estão no manifesto local `.m2-review/ev-01/selection.json`.

| Projeto / ID                    | Arquivo de origem                    | Versão proposta          | Legenda PT-BR                                                               | Caption EN                                                                 |
| ------------------------------- | ------------------------------------ | ------------------------ | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| reports-registry / rr-search    | `1-frontend-react-home-page.png`     | WebP 840×525 / 14222 B   | Consulta pública por rastreio ou número de série, sem dados identificáveis. | Public lookup by tracking or serial number, with identifying data removed. |
| reports-registry / rr-admin     | `frontend-react-admin-page.png`      | WebP 1360×708 / 20580 B  | Áreas de gestão do sistema, com identidade e contagens removidas.           | System management areas, with identity and counts removed.                 |
| reports-registry / rr-import    | `frontend-react-equipment-table.png` | WebP 1440×159 / 31902 B  | Controles de importação Excel e filtros, sem exibir registros.              | Excel import controls and filters, without displaying records.             |
| audience-counter / ac-landscape | `direct-count-landscape-view-1.png`  | WebP 1440×563 / 33490 B  | Contagem direta em orientação horizontal.                                   | Direct counting in landscape orientation.                                  |
| audience-counter / ac-direct    | `1-direct-count-view.jpg`            | WebP 720×1419 / 117164 B | Contagem direta e histórico de demonstração em orientação vertical.         | Direct counting and demonstration history in portrait orientation.         |
| audience-counter / ac-rows      | `counting-by-rows-view.jpg`          | WebP 720×1419 / 160342 B | Contagem por fileiras em orientação vertical, com valores de demonstração.  | Row-based counting in portrait orientation, with demonstration values.     |
| webmatriculas / wm-admin        | `frontend-react-admin-page.png`      | WebP 1050×700 / 8960 B   | Navegação para turmas, alunos e usuários.                                   | Navigation to classes, students and users.                                 |
| webmatriculas / wm-classes      | `frontend-react-classes.png`         | WebP 1440×810 / 22540 B  | Consulta e gestão de turmas com dados demonstrativos.                       | Class lookup and management with demonstration data.                       |
| webmatriculas / wm-students     | `frontend-react-students.png`        | WebP 1240×700 / 11884 B  | Gestão de alunos com identificadores de demonstração removidos.             | Student management with demonstration identifiers removed.                 |
| dscommerce / ds-catalog         | `1-frontend-react-home-page.png`     | WebP 992×620 / 87470 B   | Catálogo demonstrativo do projeto educacional.                              | Demonstration catalog from the educational project.                        |
| dscommerce / ds-product         | `frontend-react-product-details.png` | WebP 1000×565 / 45396 B  | Detalhes de um produto de demonstração.                                     | Details of a demonstration product.                                        |
| dscommerce / ds-cart            | `frontend-react-cart-page.png`       | WebP 1000×345 / 11718 B  | Carrinho de demonstração; integração de pagamentos não implementada.        | Demonstration cart; payment integration was not implemented.               |

Uso proposto: cada item é uma etapa da futura galeria; ampliar com proporção natural/contain, preservando controles e crédito, sem recortes adicionais para preencher quadros. rr-import é panorâmico e exige ampliação legível em EV-02. wm-students mantém a estrutura funcional e os controles, com as áreas dos mocks removidas. Não há afirmação de dados reais nos demais projetos nem de adoção pelos números de demonstração. As capturas permanecem no idioma original do aplicativo; legendas PT/EN localizam sua apresentação.

### Vídeo e poster propostos — Audience-Counter, posição 4

Origem [direct-count-landscape-video.mp4](https://github.com/CleristonMP/portfolio/blob/b6dded70fd5aaef25cba6fe039d099f359920f3c/public/assets/medias/projects/audience-counter/direct-count-landscape-video.mp4): MP4 H.264, 2340×1080, 20,274 s, 2.989.520 B, faixa AAC. A análise de volume da faixa completa resultou em média/máximo de −91 dBFS, compatível com silêncio à precisão dessa medição. Não houve audição humana. Candidata local [ac-direct-demo.mp4](../.m2-review/ev-01/ac-direct-demo.mp4): MP4 H.264, 1560×720, 20.292 s, 24 fps, 236686 B, sem áudio, sem tags herdadas de criação/dispositivo, faststart e quadro integral. A conversão removeu a faixa de áudio e metadados e reduziu resolução, sem inventar conteúdo. Barras do sistema e crédito permanecem. Economia de bytes de 92.08%.

Legenda PT-BR: “Demonstração da contagem direta: incrementar, reduzir, salvar e zerar; valores ilustrativos.”

Caption EN: “Direct counting demonstration: increment, decrement, save and reset; illustrative values.”

Poster [ac-direct-demo-poster.webp](../.m2-review/ev-01/ac-direct-demo-poster.webp): primeiro quadro da candidata, WebP lossless 1560×720, 67612 B. Evita solicitar o vídeo para montar a miniatura. A proposta é vídeo sem áudio com descrição textual equivalente, sem legenda de fala necessária nesta versão. Revisar essa decisão de acessibilidade e a legibilidade na aprovação. Se áudio com informação for mantido em versão futura, exigir audição e legendas correspondentes antes de integração.

Inspeção visual temporal da fonte e da candidata por pranchas de um quadro por segundo, incluindo início/fim e ações de incremento, decremento, salvamento e reinício. Todos os quadros foram decodificados pela conversão. A inspeção visual foi amostral, não quadro a quadro. As pranchas e probes estão em `.m2-review/ev-01/`; FFmpeg 9.0, sem dependências adicionadas. O Work deve revisar também a reprodução contínua do arquivo exato antes do aceite.

### Identidade das versões exatas propostas — SHA-256

| ID                                   | SHA-256                                                            |
| ------------------------------------ | ------------------------------------------------------------------ |
| rr-search                            | `45f49435c739313a194eee70cb1cf8f98aa1258c7844002d8cf232f9ae6601c2` |
| rr-admin                             | `e1b5e68ba83bc6e8cd9d210dfab3504e8417d6a28b2a39a433828b6c6b1fe0c3` |
| rr-import                            | `d3809295dfc387004f8bc45c7694640b3c3fa05b9f24c42787fa1d4fece18e3a` |
| ac-landscape                         | `33f2349ad13f2b4200c878f8c7e4686494ce43d261f3844d87bb178f9aa3b202` |
| ac-direct                            | `16104576fd9787fa6a69caaab8c7d04d59e04b743f862248e711e6f09a86396e` |
| ac-rows                              | `5fcf2eaae65ab9946e883af6ab7e9f2af1ff91a57748c5aadffa56a8327a68e5` |
| wm-admin                             | `ac13362c35ca28ea0882e57d62ac765da1d6e783bc24e91fac7eee77c3c108a6` |
| wm-classes                           | `aa0d40054ab6f08cdc0046e8ab483e3d415b14ae109a0e2e244a5ebaf58f3293` |
| wm-students                          | `a0a0065e7d13694ebd453a05737e6bb136e0293990e0c941b71898445ba24799` |
| ds-catalog                           | `2693887e33dfc3ce56537f6509b6228f992b9cb82adc7f9dbc3e6782901da5c7` |
| ds-product                           | `7d83d47ca8c8e0a1f85675613c344577230b42755a8388193880f46de75a7b74` |
| ds-cart                              | `416f934e3730a47f0f8f382f80d83311d8981f44d9ab93b726c5dcda33a0f145` |
| ac-direct-demo (MP4)                 | `5e0fbdebf9a1403e638e1b0be703901f199c587ab016c006a28a446426f98041` |
| ac-direct-demo-poster                | `06d632dddc8131ca09948b2fab92be91eac84dd86a8d0142caa5fa01e55597da` |
| ac-direct-demo (fonte, não integrar) | `6385e9de2b4bed3d0c70aadb8788e29454d9e04854f64b0e67a7c0f284958607` |

### Restrições e omissões justificadas

- Reports Registry: rr-search exclui identidade e rodapé e remove sufixo operacional; rr-admin exclui saudação/identidade e contagens; rr-import exclui toda a tabela, sessão e dados operacionais, retendo controles de importação e filtros. As remoções já estão incorporadas nos pixels das candidatas. As fontes exigem esses saneamentos e não devem ser integradas. rr-tracking e rr-details foram omitidas por excesso de máscaras e menor clareza. Os dois laudos, incluindo a versão com assinatura digital, continuam excluídos por documentos/identidade/dados de terceiros, sem resolução específica. Capturas de backend, Postman e IDE ficam excluídas por código privado e potencial conteúdo restrito. Demais cadastros/listas repetem fluxos e exigiriam saneamento adicional antes de eventual escolha.
- Audience-Counter: omitidas variantes de contagem horizontal com valores diferentes, mantendo uma capa, os dois modos portrait e um vídeo curto. Vídeo portrait completo: 94,535 s, 14.994.462 B. Vídeo horizontal por fileiras: 42,129 s, 7.344.682 B. Ambos têm AAC e foram medidos, mas não selecionados nem alegados visualmente/auditivamente inspecionados. O vídeo direto explica interação e salvamento com menor duração. Contagens/datas visíveis são demonstração, sem inferir uso real.
- Web Matrículas: omitidos login, cadastros, detalhes, paginação e usuários por repetição e identificadores adicionais a tratar. wm-print omissa por baixa utilidade após mascaramento. Preservada a declaração de mocks; as fontes sem saneamento não são substitutas das candidatas. A galeria não altera a condição de sistema não implantado.
- DS Commerce: catálogo → produto → carrinho explica o fluxo educacional. Login, administração, formulários/listas/paginação e backend omitidos por repetição e desvio do fluxo principal. Nenhuma captura de carrinho comprova pagamentos implementados. Não há vídeo deste projeto no inventário consultado.

### Orçamentos propostos ao Work

Os doze WebP somam 565668 B. Com poster (67612 B) e vídeo (236686 B), a seleção totaliza 869966 B (0.830 MiB), contando as cinco imagens já usadas nos cards uma única vez. São 12 imagens de galeria, um vídeo e um poster. Os certificados existentes continuam no inventário do MVP e na futura ampliação prevista no plano; não foram recurados nesta tarefa.

Proposta de teto: 200 KiB por imagem ampliada; 80 KiB por poster; 16 KiB por miniatura dedicada; 3 MiB e 30 s por vídeo; 1 MiB para imagens/poster da galeria; 4 MiB para o inventário dos quatro projetos, vídeo e derivados incluídos. Para o inventário completo com certificados/PDFs já aprovados, teto de 5 MiB. Miniaturas ainda não produzidas precisam caber nesses totais. A seleção atual atende aos recortes medidos; totais finais dependem dos derivados de EV-02.

Conservar navegação fria inicial de M5-02: fontes ≤80 KiB, imagens ≤200 KiB e JS ≤90 KiB. Nenhuma galeria pode antecipar todos os downloads. Proposta: capas existentes lazy; carregar somente a imagem atual e eventualmente a próxima ao abrir o visualizador; vídeo apenas após escolha explícita, preload=none, controles nativos e sem autoplay. Os tetos de inventário não autorizam download integral na entrada. EV-05 mede transferência e regressões sob condições comparáveis, preservando a investigação de LCP.

### Evidências, reprodução e gates

Evidências locais ignoradas: `source-tree.json` (inventário remoto), `selection.json` (fontes, integridade, versões, legendas e totais), `*.probe.json`, `ac-direct-video-contact-sheet.jpg`, `ac-direct-demo-review.jpg`, MP4 e poster. Para reproduzir, consultar a árvore do commit indicado, conferir os blobs das origens e os SHA-256 acima, abrir as doze candidatas de M4-03 e o vídeo/poster locais. O script local `record-curation.mjs` valida fontes/candidatas e registra o manifesto. As candidatas raster de M4-03 permanecem intactas.

EV-01 permanece aguardando aprovação editorial das legendas/ordem e revisão técnica dos hashes, saneamentos, reprodução contínua do vídeo e orçamentos propostos. Não há bloqueio de acesso ao inventário. Nenhum arquivo foi copiado para assets versionáveis, nem houve implementação de galeria. O plano original aprovado foi preservado como prefixo desta execução. README, código, mídias públicas e portfólio antigo preservados. Sem staging, commit, push ou publicação.

### Complemento — reprodução contínua do vídeo — 18/11/2026

Arquivo conferido antes e depois: `.m2-review/ev-01/ac-direct-demo.mp4`, 236.686 B, SHA-256 `5e0fbdebf9a1403e638e1b0be703901f199c587ab016c006a28a446426f98041`. Candidata, poster, imagens e orçamentos anteriores preservados. O procedimento usou o navegador embutido do Codex e um player HTML com controles nativos, servido somente em `http://127.0.0.1:4199/` pelo script local ignorado `playback-server.mjs`. A primeira tentativa local expirou por restrição de rede; o servidor foi reiniciado com o acesso local necessário e a reprodução seguinte funcionou.

Com o vídeo parado em 0 s, acionado Play uma única vez. Sem pausa, busca ou alteração de velocidade, os estados observados avançaram por 4,1064; 8,8486; 13,2255 e 18,2361 s até 20,291667 s. No término, `ended=true`, `paused=true`, `error=null`, `readyState=4` e dimensões naturais 1560×720. O console consultado não registrou erros ou avisos. A reprodução contínua do início ao fim foi executada no navegador. Não houve travamento observado nas amostras de progresso.

A inspeção visual dos estados durante essa execução mostrou início com contador zero, valores e histórico mudando no trecho intermediário, e fim com contador zero e histórico preservado. Esses estados, somados às pranchas temporais anteriores, sustentam a correspondência com as descrições PT-BR e EN propostas, incluindo incrementar, reduzir, salvar e zerar. As descrições não prometem demonstrar o modo por fileiras neste vídeo. Controles, títulos, contagem e crédito permaneceram reconhecíveis nos quadros inspecionados. Quadros extraídos diretamente em 8,85 s e 20,25 s confirmaram a legibilidade nessa resolução, sem alteração do MP4.

Limite: o controle oferece capturas sucessivas e estado do player, sem uma observação humana contínua entre capturas. A execução técnica completa está confirmada; a aprovação visual contínua de transições/legibilidade permanece para o responsável ou Work. Para essa confirmação, abrir o [arquivo exato](../.m2-review/ev-01/ac-direct-demo.mp4) em um player local, reproduzir uma vez desde 0 até o término, sem saltos, e confirmar que início/fim, transições e textos são legíveis e condizem com as duas descrições acima. Se houver defeito, informar o instante aproximado. Nenhum aceite manual foi presumido. Evidências locais adicionais em `playback-observations.json`, `playback-check-8s.png` e `playback-check-end.png`. EV-01 segue para nova revisão do Work.

### Confirmação visual posterior do responsável — 24/11/2026

O responsável confirmou nesta conversa que reproduziu o arquivo exato `ac-direct-demo.mp4` até o fim e aprovou sua legibilidade e transições. O SHA-256 foi reconferido nesta data e permanece `5e0fbdebf9a1403e638e1b0be703901f199c587ab016c006a28a446426f98041`. A confirmação atende à pendência de revisão visual contínua descrita no complemento anterior, preservado como histórico. A execução manual foi relatada pelo responsável, sem observação independente pelo Codex. Candidatas e orçamentos preservados. EV-01 continua aguardando revisão editorial e técnica do Work, incluindo seleção, legendas, saneamentos e orçamentos; esta confirmação não constitui aceite integral da tarefa.

## Execução EV-02 — galeria acessível e integração — aguardando revisão do Work — 24/11/2026

### Base e decisões

Início conferido em `0987b364e10d9159dc10602dfc835a38744c21e8`, branch `evolution/media-motion-feedback`, sem diff versionável pendente ou aprovação aguardando commit/push. README já sinalizado por finais de linha e preservado byte a byte nesta entrega, SHA-256 `7c1e98ebfacda6e8350212c0211638172b661a4a1d8057ee0c4a1a8ddc1917f9`. O Work aceitou em EV-01 as versões exatas, ordem, legendas e orçamentos deste plano, incluindo o vídeo com confirmação visual do responsável. Esse aceite supera os registros históricos de espera de EV-01 e não aprova esta implementação.

`GalleryViewer` usa `dialog.showModal()` em portal, com título, natureza/resumo e nomes acessíveis localizados. A modalidade nativa isola o fundo. Foi acrescentado tratamento explícito das extremidades de Tab/Shift+Tab após o smoke inicial encontrar passagem de foco para fora dos controles na sessão automatizada. O foco inicial vai ao botão de fechar. Botão e Escape desmontam o visualizador, restauram os estilos de rolagem e devolvem foco ao acionador sem deslocar a posição de leitura. Não há fechamento por clique no conteúdo, navegação por rota ou alteração do histórico.

`galleries.ts` fornece um único inventário para desktop/mobile, com a ordem e as legendas aprovadas. Cada card tem “Explorar projeto” / “Explore project”. O case Reports Registry abre a mesma coleção diretamente na importação, posição 3; DS Commerce usa o mesmo visualizador mantendo sua posição secundária. Os links de loja/repositórios e o case textual permanecem independentes. Os quatro certificados abrem coleções individuais, sem navegação direta para o arquivo ou criação de URLs de validação.

Ampliação exibe a imagem em resolução natural dentro de uma região rolável e focável, com instrução PT/EN e retorno à apresentação normal. Imagens panorâmicas permitem rolagem horizontal e certificados/portrait permitem rolagem vertical. Os controles de mídia não retornam circularmente. Miniaturas têm nome acessível, estado pressionado e número visível. O vídeo usa controles nativos e `preload="none"`, sem autoplay; só é montado após seleção da posição 4 de Audience-Counter. Ao mudar de mídia ou fechar, pausa e libera a origem. Erro principal exibe mensagem PT/EN e mantém navegação/fechamento disponíveis. Thumbnail indisponível mantém o botão nomeado e o número visível.

### Integridade, derivados e orçamento

Antes de copiar, as doze candidatas de imagem e o vídeo/poster foram conferidos contra os SHA-256 aceitos neste plano. Cinco imagens já presentes foram reutilizadas. Copiadas somente sete imagens adicionais, vídeo e poster exatos para `public/assets/media/`. As nove mídias anteriores, incluindo certificados, mantiveram seus hashes. Fontes de origem continuam registradas em EV-01, sem dependência de URLs legadas ou cópia de originais privados.

Foram produzidas 17 miniaturas WebP a partir das versões saneadas, até 240×160 preservando proporção, sem recorte, áudio ou metadados de origem. FFmpeg 9.0, `scale=240:160:force_original_aspect_ratio=decrease`, libwebp quality 75 e `map_metadata=-1`. Peso total 35.768 B, maior arquivo 4.022 B, abaixo de 16 KiB cada. `scripts/gallery-media-integrity.json` registra origem saneada, SHA-256 da fonte e do derivado, dimensões e bytes de cada miniatura. A geração é reproduzível por `.m2-review/ev-02/prepare-assets.mjs`. Amostras de miniaturas de Reports Registry, Web Matrículas, certificado e poster foram inspecionadas visualmente, preservando as áreas saneadas.

Inventário final: 34 WebP (17 versões de imagens/poster e 17 miniaturas) e um MP4, 1.248.230 B. Com os dois PDFs existentes: 1.346.765 B, abaixo de 5 MiB. Seleção dos quatro projetos com poster/vídeo e todas as miniaturas (incluindo as de certificados): 905.734 B, abaixo de 4 MiB; imagens/poster/miniaturas desse recorte: 669.048 B, abaixo de 1 MiB. Vídeo exato de 236.686 B e 20,292 s atende aos tetos de 3 MiB/30 s; poster de 67.612 B atende a 80 KiB. As imagens ampliadas mantêm o teto de 200 KiB.

O JavaScript do build final tem 85.456 B gzip, abaixo do orçamento inicial de 90 KiB. Essa medição de arquivo não representa transferência de rede de navegação fria. Capas/fontes existentes foram preservadas, e o SSR fechado não contém miniaturas, mídia ampliada ou vídeo. A galeria carrega a mídia selecionada e suas miniaturas ao abrir, sem pré-carregar a coleção inteira de imagens ampliadas. Não há antecipação de vídeo. EV-05 continua responsável pelas medições comparáveis de navegação e regressão de LCP/CLS/TBT; fontes até 80 KiB e imagens iniciais até 200 KiB continuam como orçamento. Nenhuma conclusão nova de INP/campo.

### Critérios e evidências

| Critério EV-02                                       | Resultado e evidência                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Inventário, ordem, legendas e capas                  | Atendido. `galleries.ts`, hashes exatos e testes/verificadores. A mesma coleção é usada no card/case; capas anteriores preservadas.                                                                                                                                                                                                                                                                                                                                         |
| Modalidade, foco inicial, contenção, fundo e rolagem | Atendido nos cenários executados. Modal nativo, árvore acessível restrita ao visualizador, 12 alternâncias Tab/Shift+Tab por idioma/base após o ajuste das extremidades. `keyboard.json` registra foco contido, posição anunciada, ampliação por Space, Escape e retorno ao acionador.                                                                                                                                                                                      |
| Fechamento e posição de leitura                      | Atendido. Botão e Escape, sem fechamento por conteúdo. A matriz final registra foco restaurado, rolagem desbloqueada e mesma posição de leitura com acionadores visíveis.                                                                                                                                                                                                                                                                                                   |
| Navegação e miniaturas                               | Atendido. Sem retorno circular, controles das extremidades desabilitados, posição localizada e miniaturas selecionáveis. Testes PT/EN e percurso das 13 mídias de projetos em cada idioma/base, 52 posições inspecionadas.                                                                                                                                                                                                                                                  |
| Ampliação e certificados                             | Atendido nos cenários executados. Portrait/panorama/certificados preservam proporções, rolagem acessível por teclado e retorno normal. Os quatro certificados foram abertos em cada idioma/base (16 aberturas), sem URL nova.                                                                                                                                                                                                                                               |
| Vídeo e falhas de mídia                              | Atendido nos cenários executados. No navegador, vídeo selecionado com `readyState=0`, parado e `preload=none`; Space inicia e fechar remove o player. Testes cobrem pausa/liberação ao trocar/fechar e erro. Falhas reais simuladas no build raiz EN, retirando temporariamente apenas cópias ignoradas de rr-admin e do MP4, mostraram alerta localizado e navegação para outra mídia. Cópias restauradas e hashes HTTP reconferidos. Testes verificam a mensagem PT e EN. |
| Carregamento e caminhos                              | Atendido nos recortes verificados. 70 respostas HTTP, 35 assets em cada base, com status 200, MIME esperado e SHA-256 exato. CSP dos previews preservada em `connect-src 'self'`. Não houve envio pelo formulário. A inspeção DOM não é uma captura completa de rede; transferência inicial será medida em EV-05.                                                                                                                                                           |
| Smoke responsivo e teclado                           | Atendido nos cenários executados. 28 combinações: PT/EN × raiz/subpath × 320, 390, 699, 700, 701, 768 e 1280 px, altura 900. Documento e diálogo sem overflow horizontal externo, inclusive com scrollbar vertical. Regiões ampliadas têm sua própria rolagem. `matrix.json`, quatro arquivos `*-media.json`, `certificates.json` e `keyboard.json`.                                                                                                                        |
| Leitor de tela                                       | Atendido por confirmação manual expressa do responsável em 24/11/2026. A árvore acessível foi inspecionada em dialog-accessibility.txt. A execução audível não foi observada independentemente pelo Codex, e o relato não discrimina leitor, navegador ou resultados por idioma/base.                                                                                                                                                                                       |

Roteiro encaminhado para o smoke audível: abrir cada preview em PT e EN com NVDA ou Narrador, acionar Explorar projeto por teclado, conferir anúncio de título/resumo, posição, anterior/próximo e legenda, selecionar imagem/vídeo e certificado, ampliar e fechar com Escape. Confirmar que o fundo não entra na leitura e que o foco retorna ao acionador. Registrar leitor, navegador, base/idioma e o que foi efetivamente anunciado.

Confirmação posterior em 24/11/2026: o responsável declarou “validação audível por leitor de tela aprovada manualmente”. A declaração atende à pendência de execução manual. Leitor, navegador, anúncios e resultados por idioma/base não foram discriminados no relato. A aprovação foi recebida do responsável, sem observação independente de áudio pelo Codex. A revisão própria do Work permanece necessária para o aceite de EV-02.

Capturas locais ignoradas em `.m2-review/ev-02/`: `root-en-1280-portrait-zoom.jpg`, `root-pt-390-panorama-zoom.jpg`, `subpath-en-390-certificate-zoom.jpg`, `subpath-en-390-dialog.jpg` e `subpath-pt-1280-commerce.jpg`. As três primeiras documentam a inspeção de ampliação anterior ao complemento de resumo e ao ajuste de foco; as duas últimas foram refeitas nos builds finais. Sem alegar zoom nativo de 200% ou teste audível. Não foram adicionadas animações; o conteúdo independe de efeitos.

### Checks, arquivos e reprodução

Passaram `npm run typecheck`, `npm run lint`, `npm test` (106 testes/11 arquivos), `npm run verify`, `npm run build` e `npm run build:subpath`, com Node direto 22.16.0 e PATH apenas do processo. O check global de formato inicialmente apontou 26 arquivos com CRLF. Foram normalizados somente finais de linha desses arquivos do projeto, mantendo o conteúdo equivalente ao HEAD, sem diff versionável adicional; README preservado. `format-baseline.json` registra o diagnóstico. PROJECT_STATUS foi formatado na atualização autorizada desta entrega. Após o registro, passaram `npm run format:check`, Prettier explícito do plano (normalmente ignorado pelo script global) e `git diff --check`.

Servir com `npm run preview` (127.0.0.1:4180) e `npm run preview:subpath` (127.0.0.1:4181/portfolio-v2/), sem configurar endpoint para este smoke. Repetir as interações da matriz acima. `node .m2-review/ev-02/verify-http.mjs` confere status/MIME/hashes e CSP, com resultados em `http.json`. `measurements.json` registra bytes, gzip e hash do README. Os testes DOM simulam somente os métodos modais ausentes em jsdom e o transporte existente; layout, isolamento nativo e vídeo são evidências de navegador, com os limites declarados. Não há CI remota desta árvore.

Arquivos principais: `GalleryViewer.tsx`, `ContentImage.tsx`, contratos, `galleries.ts`, traduções, ProjectsSection/LearningSection, estilos delimitados da galeria, testes de galeria/projetos/mídia/formações, verificadores de conteúdo/i18n e manifesto de integridade. Novos assets limitados às nove cópias exatas e 17 miniaturas. Nenhuma dependência adicionada. Formulário/feedback e animações ficam para EV-03/04. EV-02 aguarda revisão verificável do Work, sem staging, commit, push, merge, deploy ou novos envios reais.

Conventional Commit sugerido: `feat(gallery): add accessible project and certificate viewers`.

## Execução EV-03 — Feedback de contato — 24/11/2026

### Base, escopo e decisões

Base local e referência de origem em `7a45e9bcf862c5b9b02d898530d158de8bc87f0c`, na branch única `evolution/media-motion-feedback`. EV-02 aceita pelo Work e registrada no commit citado; suas esperas anteriores são históricas. Não havia diff versionável nem staging pendente, somente as sinalizações de finais de linha já conhecidas. README preservado byte a byte (SHA-256 `7c1e98ebfacda6e8350212c0211638172b661a4a1d8057ee0c4a1a8ddc1917f9`).

O transporte, endpoint aprovado, timeout de 10 segundos, privacidade, validação e campos permanecem os existentes. O botão passa a exibir o andamento já localizado; a região `role=status` junto ao botão permanece. A confirmação abre exclusivamente no resultado `accepted`, com título e fechamento PT/EN e a descrição existente: “O serviço aceitou sua mensagem.” / “The service accepted your message.” Não há promessa de recebimento na caixa de entrada. A regressão de Enter no campo Nome identificou blur após a limpeza aceita, que disparava erro required indevido ao focar o modal. Esse blur é ignorado somente no estado accepted; editar inicia idle e mantém as validações existentes para a próxima tentativa. A abertura é um estado explícito do evento de aceitação, sem efeito dependente do idioma; fechar e trocar idioma não a reabre.

Extraído de EV-02 apenas `ModalDialog`: portal, diálogo nativo/top layer, foco inicial, contenção dos extremos de Tab, isolamento, bloqueio de rolagem com compensação de scrollbar e restauração. `GalleryViewer` mantém dados, mídia, controles e sua aparência. `ContactConfirmation` contém somente o título, descrição e fechamento. Se uma resposta chegar durante uma galeria aberta, a confirmação aguarda seu fechamento; não empilha modais. Ao fechar a confirmação, o foco volta ao botão de envio. Se o visitante saiu do contato durante a espera, o botão é trazido à área visível; galerias conservam sua restauração de posição anterior.

Comparação com os dois HTMLs, DESIGN.md e screen.png de Stitch: não existe uma confirmação de envio específica nos exports. A adaptação usa Manrope/Inter, superfície baixa, botão de superfície elevada, raio de 16 px, backdrop escuro com blur de 12 px e foco ciano dos tokens existentes. O contraste de contorno já aprovado em M5 é preservado; não se aplica a regra decorativa de borda tênue a controles que precisam de identificação. Não foram adicionadas animações, tokens, mídias, dependências ou alterações no layout do contato e da galeria.

### Critérios e evidências

| Critério EV-03                            | Resultado local e evidência                                                                                                                                                                                                                                                                                                          |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Andamento visível/anunciado e duplicidade | Botão e status exibem sending durante a espera. Testes PT/EN verificam uma única chamada mesmo com submit repetido; campos somente leitura durante envio. `matrix.json` registra o texto observado no navegador.                                                                                                                     |
| Confirmação somente após accepted         | Antes da resposta não há diálogo; aceitação limpa os campos e abre título/descrição/fechar localizados. Falhas e configuração ausente/inválida não abrem confirmação. Testes e oito cenários de aceitação.                                                                                                                           |
| Foco, isolamento, fechamento e retorno    | Foco inicial no fechamento; Tab/Shift+Tab contidos; :modal verdadeiro, body overflow hidden e fundo sem interação. Escape na raiz e botão no subpath restauraram foco/rolagem. `background.json`, `matrix.json` e `dialog-accessibility.txt`.                                                                                        |
| Sem acúmulo ou reabertura por idioma      | Testes de rerender PT→EN com diálogo aberto preservam a instância e o foco; após fechar, EN→PT não reabre. Smoke das oito combinações confirmou ausência de reabertura após troca. `queued-confirmation.json`: galeria e confirmação nunca abertas simultaneamente; retorno ao envio visível (top 444, bottom 500, viewport 844 px). |
| Erros, valores e tentativa explícita      | Rejeição, rede, timeout e limite continuam no formulário e retêm campos. Testes mantêm nova tentativa aceita, timeout sem AbortSignal.timeout e prevenção de duplicidade; falha não dispara retry automático. Dezesseis cenários de navegador em `failures.json`, sem diálogo, sem estado sending preso, sem overflow.               |
| Aceitação não promete entrega             | Descrição restrita à aceitação pelo serviço, em ambos idiomas. Nenhum envio real ou nova comprovação de recebimento.                                                                                                                                                                                                                 |
| Galerias preservadas                      | Os 12 testes existentes de galeria passaram. Smoke adicional em quatro combinações verificou abertura/fechamento, foco restaurado, seleção explícita de vídeo sem autoplay, remoção ao trocar mídia e abertura de certificado: `gallery-regression.json`. Não repete toda a auditoria de EV-02.                                      |

Matriz final de aceitação, altura 844 px: 390 e 1280 × PT-BR/EN × `http://127.0.0.1:4180/` e `http://127.0.0.1:4181/portfolio-v2/` (oito combinações). ScrollWidth = clientWidth: 390/1280 com modal aberto; 375/1265 depois de fechar, com scrollbar. Dialog scrollWidth = clientWidth: 364/478 px. Sem corte de título, descrição, botão ou foco nas oito capturas finais inspecionadas. A rodada final envia por Enter dentro do Nome e confirma ausência de erros espúrios e retorno ao botão visível; a rodada anterior havia exercitado Enter/Space no botão. Não equivale a auditoria em todas as larguras do projeto.

Falhas: rejeição/rede/limite/timeout × PT/EN × duas bases = 16 cenários, distribuídos entre raiz PT 390/EN 1280 e subpath PT 1280/EN 390. Nenhum mostrou diálogo nem overflow; valores mantidos e aria-disabled removido ao terminar. Timeout observado após o temporizador real de 10 segundos no navegador. A cobertura de sucesso após retry e contagem exata de chamadas é dos testes DOM com fetch simulado.

### Procedimento reproduzível e arquivos de evidência

Usado Node direto 22.16.0, PATH alterado somente no processo, sem corrigir o shim global. Gerar `npm run build` e `npm run build:subpath` com o endpoint público aprovado na variável de processo `VITE_FORMSPREE_ENDPOINT`. Não se configura destinatário ou credencial no build.

Para o smoke, `node .m2-review/ev-03/prepare-smoke.mjs` insere um mock apenas no HTML/JS ignorados dos dois builds. Ele substitui fetch antes da aplicação, não registra payload e não encaminha requisições: scenario accepted/rejected/network/limited/timeout vem do parâmetro `?simulation=...`; accepted é o padrão. A simulação responde após 1800 ms; timeout aguarda o abort existente em 10 segundos. A CSP dos previews continua `connect-src 'self'`. Servir com `npm run preview` e `npm run preview:subpath`. Reiniciar os servidores depois de reconstruir, recarregar e conferir o bundle final `index-bPWSLx2W.js`; o preview iniciado antes do rebuild conservava o HTML anterior, e a matriz de aceitação final foi refeita após reinício/reload explícito, conferindo o nome do bundle.

Passos: selecionar idioma; preencher apenas valores sintéticos; Enter/Space no envio; ler o andamento; aguardar aceitação; conferir foco, Tab/Shift+Tab, Escape/botão, retorno e troca de idioma. Repetir com os quatro cenários de falha, preservando valores. Para concorrência entre modais, enviar e abrir Reports Registry durante a espera; aguardar accepted, fechar galeria, fechar confirmação e conferir o botão de envio visível. Ao terminar, `node .m2-review/ev-03/prepare-smoke.mjs --restore` restaura os HTMLs originais dos builds e remove os scripts de simulação; previews encerrados.

Evidências locais ignoradas em `.m2-review/ev-03/`: `matrix.json`, `failures.json`, `queued-confirmation.json`, `gallery-regression.json`, `background.json` e `dialog-accessibility.txt`. Oito PNGs `{root|subpath}-{pt|en}-{390|1280}-confirmation.png`, com foco no fechamento, conferidos visualmente. A tentativa `discarded-progress-unsettled.png` mostrou o hero antes de estabilizar a rolagem; não é evidência visual do andamento. O andamento é comprovado pelos estados DOM coletados e testes. Cópias dos documentos anteriores preservadas no mesmo diretório. A primeira tentativa de acesso ao preview isolado terminou em timeout; servidores locais foram reiniciados com acesso permitido e nova aba funcionou. Nenhuma configuração global ou política de segurança foi alterada.

As evidências de falhas, galeria e enfileiramento foram coletadas com `index-CIRuvc4V.js`, antes do ajuste isolado de blur após accepted; seus trechos de transporte, erros e fundamento modal são idênticos aos da última build. Foram preservadas e reaproveitadas para esses comportamentos, enquanto aceitação/foco/idioma/capturas foram repetidos nas oito combinações com `index-bPWSLx2W.js`. A matriz intermediária `matrix-before-final-root-refresh.json` registra HTML antigo em cache na raiz e não é evidência de aprovação; foi substituída em `matrix.json` após conferir o bundle correto.

### Checks e limites

Passaram typecheck, lint, npm test (110 testes/11 arquivos), verify (conteúdo/i18n), build raiz e build:subpath. A suíte final inclui 41 casos de contato/galeria, incluindo retorno a um botão fora da viewport e aceitação por Enter a partir do Nome e do botão, em PT/EN. O resultado completo está em tests.json. JSDOM simula showModal/close e medidas de foco; seus testes não provam layout nem isolamento nativo. A contagem de timers de transporte foi preservada, escoando apenas as tarefas de foco de jsdom após abrir a confirmação. Passaram também npm run format:check, Prettier explícito do plano (ignorado pelo check global) e git diff --check. Após restaurar os HTMLs originais, GET de HTML/JS/CSS nas duas bases retornou 200 com MIME correto, sem script de simulação e com CSP inalterada, conforme http.json.

A árvore acessível nativa expôs somente título/descrição/fechamento da confirmação PT e o foco esperado. Não foi executada validação audível de EV-03; a confirmação manual de EV-02 não é reutilizada para esses novos anúncios. Zoom nativo de 200% e preferência ativa de redução de movimento não foram reexecutados. Não há nova animação; a execução específica de movimento fica para EV-04 e regressão para EV-05. Nenhuma CI remota desta árvore, nenhum envio real, staging, commit, push, merge ou deploy.

Arquivos: ContactForm, ContactConfirmation e ModalDialog; adaptação de GalleryViewer; contrato/dicionário PT/EN; CSS isolado da confirmação/import; testes de contato; este plano e PROJECT_STATUS. Nenhuma dependência nova. EV-03 **aguarda revisão verificável própria do Work**; EV-04/05 não iniciadas.

Conventional Commit sugerido: `feat(contact): add accessible accepted-message confirmation`.

## Execução EV-04 — Movimento e microinterações — 24/11/2026

### Base e escopo

Branch existente `evolution/media-motion-feedback`, HEAD e referência local de origem coincidentes em `7fb2ea44e29dd9bf4b556470a617b2331e79dde6`. EV-03 revisada e aprovada pelo Work, com commit/push já realizados; a espera anterior é histórica. Não havia diff versionável nem staging pendente antes de iniciar. README preservado byte a byte, SHA-256 `7c1e98ebfacda6e8350212c0211638172b661a4a1d8057ee0c4a1a8ddc1917f9`; sinalizações anteriores de finais de linha preservadas. Nenhuma branch nova, dependência, mídia ou alteração editorial.

Entradas usam IntersectionObserver e Web Animations API, sem classes que ocultem conteúdo. Ao chegar à seção, somente seu container anima; a seção é desobservada e registrada uma vez por montagem. Hero excluído e imediatamente disponível. Falta/falha das APIs deixa os estilos estáticos legíveis. Remontar a aplicação inicia uma nova visita; alternar idioma e rolar repetidamente não reinicializa o hook.

O fundamento ModalDialog mantém o diálogo nativo aberto, fundo inerte, foco contido e body bloqueado durante a saída. Fechamento passa pelo mesmo ciclo em Escape e botão. A abertura é cancelada ao fechar imediatamente; solicitações repetidas não acumulam saídas. Resolução, rejeição/cancelamento ou fallback de 240 ms concluem o fechamento, com limpeza no unmount e retorno já aprovado. O vídeo pausa ao iniciar o fechamento, antes da remoção final; a limpeza da mídia permanece. A confirmação aceita continua aguardando a saída completa da galeria. Mudança para preferência reduzida cancela animações em curso e encerra saída imediatamente.

### Valores propostos, ainda sem aprovação visual definitiva

| Uso                                                  | Duração | Deslocamento / efeito                                                     |
| ---------------------------------------------------- | ------- | ------------------------------------------------------------------------- |
| Entrada de conteúdo ao chegar à seção                | 280 ms  | translateY 8→0 px; opacity 0,7→1                                          |
| Abertura de galeria/confirmação                      | 180 ms  | translateY 6→0 px; opacity 0→1                                            |
| Saída de galeria/confirmação                         | 140 ms  | Da apresentação atual até translateY 6 px e opacity 0; fallback em 240 ms |
| Troca de imagem/vídeo na galeria                     | 160 ms  | opacity 0,7→1, sem zoom ou alteração do enquadramento                     |
| Cards com ações (projetos/formações) e cor dos links | 180 ms  | Elevação de 2 px em hover/focus-within; superfície/cor dos tokens atuais  |

Easing proposto: `cubic-bezier(0.2, 0, 0, 1)`. Sem stagger, autoplay, movimento contínuo ou atraso do hero. Backdrop continua estático até o encerramento, conservando o isolamento enquanto o painel sai. As animações não persistem estilos inline ao terminar/cancelar. CSS limita movimentos de cards a no-preference e hover de ponteiro a hover:hover; foco tem tratamento equivalente. Ações permanecem sempre visíveis para toque. Skills informativas não ganham tabindex ou aparência de botão. Sublinhado/foco continuam disponíveis com movimento reduzido.

Referências consultadas: HTML, DESIGN.md e screen.png web/mobile extraídos em `.m2-review/m2-05/stitch_portfolio_{web|mobile}_design/`, correspondentes aos exports em design/. DESIGN.md propõe hover de 400 ms Ease-Out-Expo e HTMLs usam duration-400, scale e respostas de cor. A proposta reduz o intervalo para 180 ms e evita scale de capturas/efeitos decorativos contínuos, priorizando leitura e resposta rápida. Tipografia, cores, raios, composição e adaptações M3 permanecem nas regras existentes. Comparação visual da interface animada **não executada**, por impedimento de controle descrito abaixo; imagens de referência estáticas não provam fidelidade ou qualidade de movimento.

### Critérios da primeira rodada — histórico de 24/11/2026

| Critério                                             | Evidência executada                                                                                                                                | Estado restante                                                                     |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Conteúdo disponível sem inicialização; hero imediato | Testes de observer ausente, constructor com falha, animate com falha, hero fora da seleção e conteúdo visível                                      | Smoke real dessas falhas pendente                                                   |
| Entradas uma vez por seção, sem layout animado       | Teste de interseções repetidas dispara somente uma entrada por seção. Código anima opacity/transform de containers, sem mudar dimensões            | Conferir scrollWidth/clientWidth, leitura e estabilidade no navegador               |
| Cards/links em hover/foco e toque                    | CSS delimitado, foco/sublinhado e controles existentes mantidos; sem controles novos                                                               | Comparação visual e toque/teclado reais pendentes                                   |
| Movimento reduzido ativo e mudanças em execução      | Testes com MediaQueryList simulado ativo e evento change: sem novas animações, cancelamento das existentes e fechamento imediato                   | Preferência nativa/emulada do navegador ainda não ativada/verificada                |
| Abertura/saída mantêm foco, isolamento e rolagem     | Testes de fechamento imediato/repetido, foco durante saída e retorno, animação que não termina, cancelamento e unmount sem timer retido            | Isolamento nativo, teclado e interrupções rápidas no navegador pendentes            |
| Galeria, vídeo e confirmação enfileirada             | Testes novos pausam vídeo antes de remover o modal e abrem confirmação somente depois de concluir a saída da galeria. Regressões EV-02/03 mantidas | Smoke PT/EN e duas bases pendente; evidências de EV-03 não aprovam novas transições |
| Checks e orçamento                                   | 120 testes/12 arquivos, typecheck, lint, verificadores, builds raiz/subpath e formato passaram                                                     | Aceite visual/técnico do Work e smoke faltantes; EV-05 não iniciada                 |

### Impedimento inicial de navegador e roteiro de continuidade — histórico

O navegador integrado informou somente capacidades visibility/viewport, sem emulação de prefers-reduced-motion. Foi aplicada a skill computer-use para tentar emulação nativa nos DevTools do Google Chrome. Chrome foi localizado/iniciado pela API de controle e recebeu a URL local de teste. A ferramenta encerrou o controle ao pressionar Enter porque não conseguiu determinar a URL atual do navegador com confiança suficiente para aplicar sua política. A navegação não foi confirmada. Ações de interface foram interrompidas, sem contornar o bloqueio com outro mecanismo. Nenhuma captura de resultados EV-04, medição DOM de layout ou verificação com preferência ativa é alegada nesta rodada. Não foram salvos screenshots da nova guia ou informações da conta. Os previews foram encerrados e os HTMLs restaurados.

Para continuidade em sessão de navegador disponível, ou coleta manual do responsável:

1. Com Node 22.16.0 direto e PATH somente do processo, definir o endpoint público já aprovado em VITE_FORMSPREE_ENDPOINT e executar build e build:subpath. Executar `node .m2-review/ev-04/prepare-smoke.mjs` e servir `npm run preview` e `npm run preview:subpath`. O helper modifica só builds ignorados; substitui fetch antes do App, não encaminha mensagens nem registra payload. CSP normal continua connect-src 'self'.
2. Matriz pendente: `http://127.0.0.1:4180/` e `http://127.0.0.1:4181/portfolio-v2/` × PT/EN × 390/1280 px, com e sem redução de movimento (16 combinações). Usar `?simulation=accepted&language=pt` ou language=en e recarregar explicitamente; confirmar bundle `index-PsrT9EBK.js`. A escolha de idioma inicial do helper usa apenas a preferência local válida do App.
3. Em movimento normal, rolar a cada seção, voltar e repetir: hero sempre presente, cada seção entra apenas uma vez. O helper registra chamadas nativas de animate em `document.documentElement.dataset.motionAudit`, para inspeção local, sem substituir a API real. Conferir ausência de cortes/overflow contra clientWidth, foco, hover, toque e composição. Registrar capturas e observações de duração/intensidade para decisão visual do Work.
4. Abrir galeria por teclado; Tab/Shift+Tab, Escape e botão durante a abertura e após estabilizar; repetir rapidamente. Conferir :modal/body bloqueado até terminar saída, fundo sem interação e foco/posição recuperados. Selecionar/reproduzir vídeo, fechar/trocar e confirmar interrupção. Enviar somente o transporte simulado, abrir galeria durante os 1800 ms da resposta, aguardar accepted, fechar galeria e confirmação, sem empilhamento ou foco preso.
5. Nos DevTools Rendering, escolher prefers-reduced-motion:reduce. Confirmar `matchMedia('(prefers-reduced-motion: reduce)').matches === true` e preferência CSS efetiva; recarregar e repetir os fluxos. Confirmar ausência de novas animações e transitions none. Ativar reduce durante abertura/saída e durante uma entrada, conferindo cancelamento/limpeza e controles equivalentes. Restaurar emulação ao terminar. Não confundir o mock de MediaQueryList dos testes com essa evidência.
6. Repetir com `entrance=missing`, `entrance=throw` e `entrance=animation-fails`, parâmetros do helper que simulam falta/falha da inicialização. Todas as seções e controles devem continuar visíveis. Registrar o cenário exato, idioma/base/largura e resultado, sem assumir aprovação por ausência de erro no build.
7. Finalizar com `node .m2-review/ev-04/prepare-smoke.mjs --restore`, encerrando previews e preservando evidências ignoradas. Nunca repetir envios reais para validar movimento.

### Checks, impacto e entrega

Passaram `npm run typecheck`, `npm run lint`, `npm run verify`, `npm run build`, `npm run build:subpath` e Vitest completo (120 testes/12 arquivos; `node node_modules/vitest/vitest.mjs run --reporter=json --outputFile=.m2-review/ev-04/tests.json`). Os dez testes novos de movimento cobrem fallback, uma entrada por seção, redução ativa/evento, saída pendente/repetida, limpeza/fallback, vídeo e enfileiramento. Mocks representam Animation.finished/cancel, observer e preferência; não constituem prova de layout, animação real ou acessibilidade nativa. As tarefas de foco de jsdom são escoadas antes de conferir que não restou timer de saída.

`measurements.json`: JS 279.263 B bruto / 86.691 B gzip (84,66 KiB), abaixo do teto estático de 90 KiB gzip; aumento bruto de 2.686 B sobre a evidência HTTP de EV-03 (276.577 B). CSS 30.172 B bruto / 6.478 B gzip. Fontes/mídias não alteradas. Isso não mede transferência real inicial, CWV, custo de renderização ou impacto de blur/composição; comparação completa nas mesmas condições permanece em EV-05. Os acompanhamentos de LCP mobile, dependências e Formshield de M5 permanecem intactos.

Evidências locais ignoradas: `.m2-review/ev-04/tests.json`, `measurements.json`, helper `prepare-smoke.mjs` e cópias dos documentos anteriores. Helper preparado, sem smoke concluído. Artefatos dos dois builds restaurados sem script de simulação. O erro de controle do computador é o impedimento concreto para a cobertura manual. Passaram npm run format:check, Prettier explícito do plano e git diff --check após a atualização documental.

Arquivos: App liga o hook de entradas; motion.ts/useSectionEntrances centralizam execução opcional; CSS motion delimitado; ModalDialog compartilha o ciclo animado; GalleryViewer anima a mídia e adota o fechamento comum; ContactConfirmation usa o mesmo fechamento; testes/motion e documentos de acompanhamento. Nenhuma dependência nova. EV-04 **aguarda revisão do Work, com critérios de navegador pendentes**. Não está aceita ou concluída; valores propostos sem aprovação visual definitiva. EV-05 não iniciada. Sem staging, commit, push, merge, deploy, mensagens reais ou mudanças em main/portfólio antigo/versão publicada.

Conventional Commit sugerido: `feat(motion): add progressive section and dialog transitions`.

### Retomada da validação — 25/11/2026 — aguardando revisão do Work

O Chrome foi recuperado pela API de controle de computador, sem contornar a interrupção anterior. O navegador integrado continuou sem capacidade de emulação de mídia; foi usado para movimento normal. No Chrome, a preferência real emulada pelos DevTools foi mantida ativa durante os cenários reduzidos. Não se substituiu matchMedia para produzir essa evidência. Algumas ações por índice não tinham geometria; usaram-se capturas atuais e os controles nativos settable dos DevTools. Atalhos que não mudaram o estado foram abandonados, sem atribuir sucesso. Os previews foram reiniciados após a interrupção e depois do rebuild; somente páginas explicitamente recarregadas e com o bundle conferido fundamentam a rodada final.

#### Falha demonstrada e correção restrita

Com movimento normal, abrir Audience-Counter e pressionar Escape duas vezes rapidamente retirava o diálogo da camada modal antes de terminar a animação de saída. As amostras nativas registravam modal=false enquanto body permanecia hidden; portanto, o teste DOM anterior não era prova suficiente de isolamento no navegador. `rapid-before-fix.json` preserva o registro anterior.

ModalDialog agora previne o comportamento nativo de Escape no keydown e encaminha o fechamento ao ciclo existente. O onCancel continua como fallback. Solicitações repetidas usam a proteção já existente, sem nova saída nem remoção antecipada. A regressão em tests/motion verifica Escape normal/repetido com default prevenido, cancel adicional, foco e desbloqueio ao terminar. Nenhuma outra alteração de produção nesta retomada.

Após rebuild, o bundle final é `index-BKdLfqem.js`; CSS permanece `index-_cmeKoNo.css`. `rapid-final-matrix.json`: três ciclos rápidos por combinação, 24 saídas concluídas; todas as amostras de saída mantêm modal=true/bodyOverflow=hidden. Foco volta ao acionador e body é liberado ao remover o diálogo. `exit-focus-matrix.json`: Escape seguido de Tab nas oito combinações manteve o foco em Próxima mídia/Next media dentro do modal durante a saída. A verificação final espera detached, não apenas hidden: opacity próxima de zero pode satisfazer hidden antes da limpeza final.

#### Matriz e resultados efetivamente executados

Raiz: `http://127.0.0.1:4180/`. Subpath: `http://127.0.0.1:4181/portfolio-v2/`. Cada linha abaixo foi executada em ambas as bases.

| Idioma | Largura | Movimento normal — navegador integrado, altura 844 px            | Redução ativa — Chrome, altura observada         | Resultado                                |
| ------ | ------- | ---------------------------------------------------------------- | ------------------------------------------------ | ---------------------------------------- |
| PT-BR  | 390     | Galeria, Escape repetido, Tab na saída e confirmação enfileirada | 824 px; galeria e confirmação após mock accepted | Sem overflow; foco/controles disponíveis |
| EN     | 390     | Mesmo fluxo localizado                                           | 824 px; galeria e confirmação após mock accepted | Sem overflow; foco/controles disponíveis |
| PT-BR  | 1280    | Mesmo fluxo localizado                                           | 876 px; galeria e confirmação após mock accepted | Sem overflow; foco/controles disponíveis |
| EN     | 1280    | Mesmo fluxo localizado                                           | 876 px; galeria e confirmação após mock accepted | Sem overflow; foco/controles disponíveis |

Movimento normal: scrollWidth=clientWidth em 375/1265 px na página com scrollbar e em 390/1280 px com modal aberto. As alturas diferem entre os navegadores porque o Chrome Responsive usou altura disponível; não se apresenta equivalência de altura ou pixel a pixel. Redução ativa: oito medições de galeria e oito de confirmação registram matches=true, nenhuma chamada de animate (a=0), transitionDuration=0s, um único modal, body hidden e foco no fechamento. scrollWidth=clientWidth em 390/1280 px com modal. O Chrome Responsive confirmou pointer:coarse=true e hover:hover=false; é toque emulado, sem aparelho físico. Ações não dependem de hover. O fechamento por botão devolveu foco ao acionador/formulário; `reduced-return-root-en-1280.jpg` mostra o envio visível e focado após fechar. A confirmação não reabriu ao trocar idioma antes da próxima tentativa explícita.

`once-matrix.json`: nas oito combinações normais, percorrer os cinco títulos de seção, voltar por Início/Top e repetir gerou exatamente uma entrada para projects/skills/about/learning/contact. Nenhuma entrada para home; hero com opacity=1/transform=none nas leituras iniciais disponíveis. `fallback-matrix.json`: missing, throw e animation-fails × oito combinações = 24 cenários com seis seções de altura positiva, hero legível, galeria utilizável, foco retornado e sem overflow/rolagem presa. Esses registros antecedem a correção isolada de Escape; hook, estilos e fallbacks são idênticos ao build final. O fechamento normal afetado foi repetido no build final em todas as combinações.

`queued-final-matrix.json`: oito aceitações simuladas; abrir Reports Registry durante a espera de 1800 ms, aguardar accepted, fechar a galeria, conferir uma única confirmação, Tab e Escape repetido. Sem empilhamento; retorno ao envio e rolagem liberada. `reduced-confirm.json`: quatro aceitações simuladas adicionais no Chrome, uma por idioma/base, com cada confirmação conferida em 390 e 1280 px; nenhum envio externo. Enfileiramento reduzido não foi repetido no navegador; a variante sem animação permanece coberta pelo fundamento modal e testes DOM, sem declarar uma matriz extra executada.

`video-playback.json`: no subpath EN 1280, selecionar explicitamente a quarta mídia do Audience-Counter e acionar Play nativo. Reprodução observada em 12,1802 s, paused=false/readyState=4. Escape: paused=true em 12,2067 s enquanto :modal=true e body hidden; depois o vídeo foi removido e o foco retornou ao acionador. A seleção sem autoplay já foi exercitada na matriz normal inicial. Não se afirma reprodução contínua nos dezesseis cenários; o aceite anterior de legibilidade do arquivo permanece em EV-01.

`hover-focus.json`: ponteiro real do navegador integrado sobre Reports Registry, sem foco dentro, produziu translateY(-2px), com transições 0,18s. Tab a partir do acionador de Audience-Counter levou ao GitHub, outline solid e focus-within elevando esse card sem hover. Cards informativos de skills não receberam controles. Isso complementa o toque emulado do Chrome; não constitui teste em dispositivo físico.

#### Evidências de movimento e comparação visual

Evidências ignoradas em `.m2-review/ev-04/retry/`. `normal-matrix.json` e os PNGs normal-* pertencem ao primeiro build, antes da correção; `rapid-final-matrix.json`, `queued-final-matrix.json`, `exit-focus-matrix.json`, final-_, exit-_ e reduced-final-_/reduced-confirm-_ usam o build corrigido. A instrumentação chama a API nativa e registra requestAnimationFrame, currentTime, opacity, transform, :modal e bloqueio do body em dataset DOM; não retarda nem fabrica a animação. Os JSONs incluem os quadros intermediários, cancelamento da abertura e conclusão da saída. Screenshots são quadros reais, não gravações contínuas ou animações sintetizadas.

Os dezesseis PNGs final-* foram abertos e inspecionados: títulos, descrições, fechamento e foco da confirmação disponíveis, enquadramento preservado e rolagem vertical interna da galeria quando necessário. As capturas exit-subpath-pt-390.png e exit-subpath-en-1280.png mostram transparência intermediária e foco em Próxima mídia/Next media, acompanhadas das amostras de saída. Os dezesseis JPGs reduzidos foram conferidos nos retornos nativos antes de salvar. Sem alegar que um screenshot isolado mede a duração completa.

Comparação com os screen.png web/mobile, DESIGN.md e regras de transição dos HTMLs já consultados: superfícies dark, acentos ciano/violeta, Manrope/Inter, raios e hierarquia existentes foram preservados. Os exports estáticos não possuem esta galeria/confirmação e não comprovam seu movimento. O hover de 400 ms Ease-Out-Expo da referência foi adaptado para 180 ms e deslocamento de 2 px, sem scale da mídia. A entrada de 8 px/280 ms não desloca o fluxo; a saída de 6 px/140 ms revelou o conteúdo por transparência mantendo isolamento. A avaliação de intensidade/duração continua proposta, dependente de revisão visual do Work/responsável.

#### Critérios reconciliados e limites restantes

| Critério                                      | Evidência atual                             | Situação para revisão                                                     |
| --------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------- |
| Hero imediato, entradas únicas e falha segura | once-matrix, fallback-matrix, testes DOM    | Executado; falhas usam simulação explícita do helper                      |
| Hover/foco/toque, sem overflow                | hover-focus, matrizes normais e reduzidas   | Executado com ponteiro e toque emulado; sem aparelho físico               |
| Galeria/confirmação com redução ativa         | reduced-final-matrix e reduced-confirm      | Executado nas oito combinações; sem animação/transição nova               |
| Escape repetido e foco/isolamento na saída    | Regressão corrigida; rapid-final/exit-focus | Repetido após a correção nas oito combinações normais                     |
| Vídeo e confirmação enfileirada               | video-playback e queued-final-matrix        | Reprodução e pausa reais em um cenário; fila nas oito combinações normais |
| Trocar preferência durante animação em curso  | Testes DOM de change/cancel/finish          | **Pendente de reprodução temporal no navegador**                          |
| Aceite visual dos valores propostos           | Capturas e amostras reais para revisão      | **Pendente do Work/responsável**                                          |

O controle disponível do navegador integrado não expõe emulação de mídia. No Chrome, cada ação exige observar a interface atual; selecionar a preferência nos DevTools entre observações não permite assegurar a mudança dentro dos 140–280 ms de uma animação. Não se ampliaram durações nem se substituiu matchMedia para chamar isso de execução real. Para validação manual complementar: abrir DevTools Rendering antes do fluxo; com no-preference, iniciar galeria/saída e alternar imediatamente para reduce; conferir cancelamento, ausência de modal/rolagem presos e retorno de foco. Repetir durante uma entrada. Registrar idioma/base e resultado observado. Esse caso não recebe aceite com base nos testes DOM. Não houve nova validação audível ou zoom nativo de 200% nesta retomada.

Console do navegador integrado sem erros/avisos ao final. No Chrome, avisos de unload apontavam para content.js de extensão, e houve 404 de favicon.ico na raiz do servidor do subpath; não são resultados de transporte do formulário nem foram corrigidos nesta tarefa. Requisições lazy que falharam enquanto os previews estavam encerrados foram descartadas como evidência de carregamento e repetidas após reinício/reload. A CSP connect-src 'self' permaneceu; o mock substitui fetch antes da aplicação, sem registrar payload ou encaminhar requisições. Emulação de dispositivo/DevTools encerrada e viewport do navegador integrado restaurado.

#### Checks após a correção e entrega

Typecheck e lint passaram. Vitest completo: 120 testes/12 arquivos em `retry/tests.json`, incluindo a regressão de Escape repetido. Build raiz e subpath passaram, com JS 279.314 B bruto / 86.709 B gzip (84,68 KiB, abaixo de 90 KiB); CSS 30.172 B / 6.478 B gzip, sem novas fontes/mídias. Medidas estáticas não representam CWV ou performance em campo; EV-05 permanece responsável pela comparação completa. O histórico inicial de bloqueio foi preservado, sem atribuir àquela rodada os resultados novos. Chrome nativo 157.0.8103.79; Node 22.16.0. A medição estática final fica em `retry/measurements.json`.

Passaram também `npm run verify` (conteúdo/i18n), `npm run format:check`, Prettier explícito deste plano com `--ignore-path .gitignore` (docs é ignorado pelo check global) e `git diff --check`. Somente os documentos e os dois arquivos da correção foram alvos de formatação; README não foi reescrito. Os HTMLs dos builds foram restaurados pelo helper `--restore`, sem script de simulação, e os previews encerrados. Diff completo incluindo arquivos novos em `.m2-review/ev-04/review.diff`; inventário de hashes locais em `files.json`, destinado à revisão, sem produzir ou modificar aprovação do Work.

EV-04 permanece **aguardando revisão verificável do Work**, com o limite temporal e o aceite visual explicitamente pendentes. Sem início de EV-05, nova dependência, alteração editorial ou mídia. README preservado; nenhum staging, commit, push, merge, deploy ou envio real. Os acompanhamentos de LCP mobile, dependências e Formshield de M5 permanecem abertos.

## Execução EV-05 — regressão e preparação de publicação, aguardando revisão do Work — 25/11/2026

### Origem, aceites e limites desta unidade

Branch existente `evolution/media-motion-feedback`, HEAD e referência local de origem `a0d32899c8add6d0f8d7628cdc8cdf4d3313fece`, conforme o encaminhamento. Antes de agir, o diff versionável e o índice estavam vazios; as sinalizações anteriores de finais de linha foram preservadas. Não havia aprovação transitória aguardando consumo. Nenhuma branch nova, checkout de main ou alteração no portfólio antigo. EV-01/02/03 aceitas nos commits registrados no estado corrente; EV-04 e seus valores de movimento aceitos pelo Work em `a0d3289`. Os registros anteriores de espera conservam seu valor histórico.

Esta entrega altera somente este plano e PROJECT_STATUS.md. Código, dados, traduções, fontes, mídias, PDFs, workflows e configurações permanecem iguais à versão aceita. Nenhum defeito de produção novo foi demonstrado que exigisse correção. A troca de preferência durante uma animação continua coberta somente por testes DOM; não se declara reprodução temporal no navegador nem se amplia sua duração para facilitar o teste.

### Inventário, integridade e privacidade

`inventory.json` confere os 35 arquivos de `scripts/gallery-media-integrity.json` por SHA-256, dimensões e bytes, além dos dois PDFs contra os hashes previamente aceitos em M5-02. `ffprobe` das ferramentas existentes inspecionou dimensões, duração, áudio e chaves de metadados. Não reapareceram chaves de autoria, localização ou comentários restritos. O MP4 conserva metadados técnicos de contêiner/encoder. Não foram editados ou regenerados pixels; a inspeção visual de saneamento e a autorização das versões exatas de EV-01/M4-03 são reaproveitadas, sem alegar nova inspeção dos originais.

| Recorte                                                                                                | Medição                          | Teto aprovado | Resultado |
| ------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------- | --------- |
| Cada imagem de conteúdo/certificado                                                                    | Todas até 200 KiB                | 200 KiB       | Atendido  |
| Poster                                                                                                 | 67.612 B                         | 80 KiB        | Atendido  |
| 17 miniaturas                                                                                          | 35.768 B no total; maior 4.022 B | 16 KiB cada   | Atendido  |
| Vídeo                                                                                                  | 236.686 B; 20,292 s; sem áudio   | 3 MiB / 30 s  | Atendido  |
| Imagens/poster/miniaturas dos projetos, incluindo miniaturas de certificados neste recorte conservador | 669.048 B                        | 1 MiB         | Atendido  |
| Projetos, poster, vídeo e todas as miniaturas                                                          | 905.734 B                        | 4 MiB         | Atendido  |
| Inventário completo, incluindo certificados/PDFs                                                       | 1.346.765 B                      | 5 MiB         | Atendido  |

Inventário: 34 WebP, um MP4 e dois PDFs, sem originais ou alternativas não aprovadas. Hash do vídeo `5e0fbdebf9a1403e638e1b0be703901f199c587ab016c006a28a446426f98041`; poster `06d632dddc8131ca09948b2fab92be91eac84dd86a8d0142caa5fa01e55597da`. Demais hashes em `inventory.json` e no manifesto versionado existente. Nenhum dado de formulário foi persistido ou registrado, nenhum destinatário privado foi incorporado. A proteção de código privado/terceiros é preservada pela integridade das versões saneadas e pelos verificadores existentes.

### Checks e recursos nos dois caminhos

Node 22.16.0 direto, PATH ajustado somente no processo; npm/lockfile existentes. Passaram `npm run typecheck`, `npm run lint`, `npm run format:check`, Vitest completo (120 testes/12 arquivos, `tests.json`), `npm run verify`, `npm run build` e `npm run build:subpath`. O endpoint público aprovado foi definido no ambiente do processo de build, sem destinatário ou credenciais. Não houve instalação de dependência ou alteração de teste para enfraquecer uma asserção. Os verificadores continuam conferindo IDs, inventário real, hashes, contratos, traduções e regras de links privados/opcionais.

Raiz em `dist`, subpath em `.m2-review/m2-08/dist-subpath`. JS `index-BKdLfqem.js`, 279.314 B / 86.709 B gzip, SHA-256 `166dbb7ec8678d5c0787b0c9cb17958fc98cea4907a323eed41d787b4061177a`; CSS `index-_cmeKoNo.css`, 30.172 B / 6.478 B gzip, SHA-256 `9ec6cf144a9b672a34976add1193fb87d5480156fc11404baa1796cd1ff7a9db`. Esses hashes são iguais aos da evidência final EV-04, condição para o reaproveitamento descrito abaixo.

`http-assets.json`: 37 assets × duas bases = 74 respostas 200, SHA-256 e MIME corretos (WebP, MP4, PDF). Os testes HTTP usaram GET, sem POST. Os arquivos do build não contêm fixture de teste, sourcemap ou material original. A instrumentação do smoke foi servida somente em memória pelo servidor local, sem modificar os builds em disco ou o pacote de revisão. A política `connect-src 'self'` permaneceu nos previews; nenhuma liberação de conexão Formspree foi realizada.

### Matriz de navegador e evidências reaproveitadas

Smoke novo no navegador integrado: `http://127.0.0.1:4180/` e `http://127.0.0.1:4181/portfolio-v2/`, altura 844 px, parâmetros locais `?simulation=accepted&language=pt` ou `language=en`. `smoke-server.mjs` intercepta o transporte antes da aplicação; só retorna respostas simuladas e registra cenário/contagem, sem payload. Requisições POST ao servidor são bloqueadas. A navegação inicial não abre diálogo nem cria vídeo.

| Largura | PT-BR raiz | EN raiz   | PT-BR subpath | EN subpath | Redução ativa                             |
| ------- | ---------- | --------- | ------------- | ---------- | ----------------------------------------- |
| 320     | Executado  | Executado | Executado     | Executado  | Complemento executado; quatro combinações |
| 390     | Executado  | Executado | Executado     | Executado  | Reaproveitada EV-04, quatro combinações   |
| 768     | Executado  | Executado | Executado     | Executado  | Complemento executado; quatro combinações |
| 1280    | Executado  | Executado | Executado     | Executado  | Reaproveitada EV-04, quatro combinações   |

`smoke-normal.json`: em cada uma das 16 células, conferir seis IDs/ordem, idioma/metadados, abrir os quatro projetos, Tab/Shift+Tab, ampliar/retornar, avançar e escolher a última miniatura, confirmar limite sem retorno circular, fechar com Escape repetido e esperar o diálogo ser removido. Um certificado por célula, distribuído para cobrir os quatro títulos em cada idioma/base. Confirmar envio simulado, andamento, segunda tecla Enter sem duplicidade, foco inicial/contenção da confirmação, Escape e retorno ao formulário. Resultado: um modal por vez, foco dentro enquanto aberto, body bloqueado e liberado ao fechar, foco exato no acionador, posição de rolagem restituída com tolerância de 1 px. Vídeo somente após seleção, pausado, sem autoplay e preload=none.

Página com scrollbar: scrollWidth=clientWidth em 305/375/753/1265 px; modal aberto: igualdade em 320/390/768/1280 px. Nenhum overflow da página ou controles inacessíveis foi observado. As miniaturas mantêm rolagem horizontal interna intencional; a imagem panorâmica usa contain e ampliação com rolagem para leitura, sem corte dos pixels. O diálogo permite rolagem vertical e mantém o fechamento visível; uma captura após avançar pode mostrar somente parte da introdução já rolada, sem perda de conteúdo.

Foram salvos 32 PNGs `{base}-{idioma}-{largura}-{gallery|confirmation}.png`. Inspeção visual nova de oito arquivos representativos: root-pt-320-gallery, root-en-390-gallery, subpath-pt-768-gallery, root-pt-1280-gallery, subpath-en-768-gallery, root-pt-390-confirmation, subpath-en-320-confirmation e subpath-en-1280-confirmation. Texto/foco/fechamento e proporções disponíveis. Os demais arquivos ficam para revisão do Work; sua existência não é declarada como inspeção visual individual. As superfícies dark, ciano/violeta, Manrope/Inter e hierarquia permanecem as aprovadas em M3/EV-04. Reaproveitada a comparação com HTML, DESIGN.md e screen.png dos dois exports descrita em EV-04; os exports não possuem a galeria/confirmação desta evolução. Nenhum refinamento visual ou movimento novo em EV-05.

`smoke-errors.json`: 16 casos — rejeição, rede, limite e timeout × raiz PT 320/EN 768 e subpath PT 768/EN 320. Cada caso manteve os três valores, anunciou a mensagem localizada pelo status, encerrou o andamento e reabilitou tentativa explícita, sem sucesso modal e sem overflow. Timeout efetivo de 10 s no transporte existente. Uma chamada por caso, nenhuma repetição automática. A tentativa posterior explícita e falhas de storage continuam cobertas pelos testes existentes e pelas evidências EV-03, sem se atribuir uma nova matriz de navegador não executada.

`media-errors.json`: quatro falhas de imagem (PT 320/EN 768, ambas as bases) e quatro de vídeo (768, PT/EN, ambas as bases), por 404 local deliberado. Acionar Play nativo no vídeo provocou a requisição; a falha anunciou mensagem localizada e permitiu selecionar a mídia anterior/seguinte. Imagem recuperada, alerta removido, fechamento/foco disponíveis. A leitura da recuperação raiz EN foi repetida com seletor correto em viewport restaurado de 1280 px; o JSON distingue esse reteste da falha original em 768. Não houve falha real no asset aprovado. Capturas de erros de imagem, vídeo e rede acompanham os registros.

Reaproveitamento explícito do mesmo JS/CSS final, sem contar como nova execução:

- `.m2-review/ev-04/retry/rapid-final-matrix.json`, `exit-focus-matrix.json` e `queued-final-matrix.json`: oito combinações 390/1280 × PT/EN × duas bases, Escape imediato/repetido, foco/isolamento durante saída e confirmação accepted enfileirada, sem empilhar diálogos. Os três ciclos por combinação preservaram modalidade nativa e body bloqueado até a remoção.
- `reduced-final-matrix.json` e `reduced-confirm.json`, no mesmo diretório: Chrome 157.0.8103.79, DevTools Rendering com preferência efetiva reduce; matches=true, zero novas chamadas de animate, transitionDuration=0s, galeria/confirmação com foco e isolamento em 390/1280 (alturas 824/876). Toque emulado, sem aparelho físico. Não substitui a extensão em 320/768.
- `video-playback.json`: reprodução nativa explícita e pausa durante a saída no subpath EN 1280. Integridade do MP4 e confirmação manual de reprodução contínua EV-01 permanecem válidas. `once-matrix.json`, `fallback-matrix.json`, `hover-focus.json`: hero imediato, entradas únicas, inicialização ausente/com falha, hover/foco/toque, já aceitos em EV-04. A regressão DOM completa foi repetida em EV-05.

#### Impedimento inicial e roteiro reduzido — histórico, superado no complemento abaixo

O navegador integrado oferece viewport/visibility, sem emulação de preferência de mídia. Tentou-se usar DevTools no Chrome nativo para complementar 320/768. Ao abrir uma guia temporária, a ferramenta informou detecção de entrada manual do usuário na janela e interrompeu o controle. Nenhum resultado reduzido novo foi produzido. O controle nativo não foi retomado, contornado por outro canal ou substituído por matchMedia falso. Não foram salvas capturas da conta/nova guia como evidência. A sessão do usuário foi preservada.

Para concluir quando houver sessão manual disponível: iniciar `node .m2-review/ev-05/smoke-server.mjs`; abrir ambas as URLs com os parâmetros de idioma; DevTools Rendering → prefers-reduced-motion:reduce; comprovar `matchMedia('(prefers-reduced-motion: reduce)').matches === true`; em 320 e 768 px, executar galeria/certificado, teclado, fechar imediatamente/repetir, ampliar/retornar, selecionar vídeo e fechar, confirmação accepted e fila durante galeria. Registrar um único :modal, foco, body bloqueado/liberado e scrollWidth/clientWidth, sem transições novas. Repetir PT/EN × duas bases, capturar estados e restaurar emulação. Transporte permanece simulado. Essa extensão e sua revisão **impedem declarar o smoke integral/EV-05 aceito** nesta unidade. Trocar preferência no meio da animação continua com limite DOM já aceito/documentado em EV-04, sem nova alegação de navegador. Sem novo teste audível ou zoom nativo nesta rodada.

### Performance comparável e transferência inicial observada

Baseline isolada: `git archive` de `b728674ffbe793429375a7822a683b7864115fac` em `.m2-review/ev-05/baseline/`, sem worktree, troca de branch ou modificação da árvore atual. package.json/lockfile são idênticos entre baseline e candidata; ferramentas instaladas foram reaproveitadas. Builds tsc/Vite com o mesmo endpoint público habilitado, mesmos recursos de fonte e base raiz/subpath. Os 14 arquivos da baseline subpath são byte a byte idênticos à cópia local do artefato publicado de M5-04 em `.m2-review/m5-04/dist/`.

Lighthouse 12.8.2 já disponível no cache local; Node 22.16.0, Vite 6.4.4, Chrome 157.0.8103.79 no Windows x64 (headless reporta 157.0.0.0). `measure.mjs` inicia quatro previews Vite: candidata 4180/4181 e baseline 4182/4183, todos com connect-src 'self'. Executa serialmente baseline/candidata alternadas, três rodadas por base/perfil, total 24. PT-BR inicial, perfis Chrome novos, cache frio/reset padrão do Lighthouse, sem service worker/cache reaproveitado. Sem atividade de smoke paralela às medições. Fonts Google usam a rede externa existente, não uma cópia ou fonte substituta.

Procedimento: `node .m2-review/ev-05/measure.mjs`, CLI Lighthouse com `--only-categories=performance --output=json --save-assets --chrome-flags="--headless=new --no-first-run --disable-extensions" --quiet`; desktop acrescenta `--preset=desktop`. Mobile 412×823 DPR 1,75, RTT 150 ms/1.638,4 kbit/s/CPU 4×; desktop 1350×940 DPR 1, RTT 40 ms/10.240 kbit/s/CPU 1×. Throttling simulado pelo Lighthouse, não rede física nesses valores. Os JSONs preservam a configuração completa e horários. `summarize.mjs` calcula medianas, compara requests/devtoolslog e grava `comparison.json`.

| Base / perfil     | LCP baseline → candidata, ms (mediana de 3) | CLS baseline → candidata | TBT baseline → candidata, ms |
| ----------------- | ------------------------------------------- | ------------------------ | ---------------------------- |
| Raiz / mobile     | 2.847,1 → 2.675,8                           | 0 → 0                    | 0 → 0                        |
| Raiz / desktop    | 1.053,5 → 1.028,8                           | 0,00927 → 0,00927        | 0 → 0                        |
| Subpath / mobile  | 2.919,8 → 2.928,0                           | 0 → 0                    | 0 → 0                        |
| Subpath / desktop | 1.043,9 → 1.045,3                           | 0,00927 → 0,00927        | 0 → 0                        |

Nenhum warning/runtimeError do Lighthouse. TBT pontual máximo 11,5 ms na baseline e 6 ms na candidata; não se ocultam esses valores pela mediana zero. LCP mobile candidato variou 2.038,3–3.039,1 ms na raiz e 2.113,7–2.928,8 ms no subpath. Benchmark de CPU variou 594–3.169 entre execuções; cache frio e parâmetros iguais não eliminam variação do host/rede. Os deltas de +8,3 ms mobile subpath/+1,3 ms desktop subpath não sustentam regressão relevante nem causalidade. A redução na raiz também não comprova otimização. O LCP mobile **continua acima da referência de 2,5 s nas medianas**, mantendo o acompanhamento de M5 e a necessidade de investigação controlada. Nenhuma correção de performance fora do escopo foi aplicada.

Elemento LCP em todos os relatórios: h1 do hero (`div#root > main#main-content > section#home > h1`), não mídia da galeria. Os dados apontam render delay dominante e CSS externo de fontes/CSS local como recursos bloqueantes; por exemplo, candidata raiz mobile 1: TTFB 457,6 ms e render delay 2.218,2 ms (~83%). Não isolam causa suficiente para atribuir o atraso às galerias ou a uma única fonte. São **métricas de laboratório**. INP **não medido**; TBT é identificado separadamente. Não existem novos dados de campo nesta entrega.

| Recurso inicial | Máximo baseline        | Máximo candidata       | Teto    | Resultado |
| --------------- | ---------------------- | ---------------------- | ------- | --------- |
| Fontes          | 73.546 B / 71,82 KiB   | 73.546 B / 71,82 KiB   | 80 KiB  | Atendido  |
| Imagens         | 191.189 B / 186,71 KiB | 191.189 B / 186,71 KiB | 200 KiB | Atendido  |
| JavaScript      | 82.770 B / 80,83 KiB   | 87.185 B / 85,14 KiB   | 90 KiB  | Atendido  |

São somas **observadas em network-requests.transferSize**, incluindo overhead HTTP, confirmadas pelos logs de rede; não se usa gzip de arquivo isolado como prova. JS/CSS/HTML responderam gzip; WOFF2/WebP sem compressão de transporte adicional. CacheEvents=0, fromDiskCache=false e sem service worker nos registros. Vite comprime localmente; GitHub Pages pode ter outra negociação/cache, portanto isso não certifica transferência futura na origem pública. O aumento JS é 4.415 B transferidos. Mobile candidato somou 103.406 B de imagens; desktop 191.189 B. Lazy loading e tempo da coleta explicam quais capas/certificados entram; não se interpreta a diferença variável de imagens da baseline como economia implementada.

Nas 24 navegações: zero pedidos iniciais para vídeo, poster, miniaturas, PDFs ou as sete imagens exclusivas de ampliação. Capas e rr-import já usados na página podem ser baixados por seus usos existentes, mesmo que também pertençam à galeria. Nenhuma requisição de transporte ao Formspree. O 404 de favicon.ico existe tanto na baseline quanto na candidata, já registrado em EV-04; não é erro de mídia do inventário nem foi ampliado o escopo para alterá-lo.

### Candidata, artefato e reversão

- Código de origem: `a0d32899c8add6d0f8d7628cdc8cdf4d3313fece`; as alterações EV-05 ainda não commitadas são somente documentais. Não existe SHA futuro atribuído a elas.
- Pacote **local**, não CI: `.m2-review/ev-05/portfolio-v2-ev05-a0d3289-subpath.tar`, 40 arquivos, 1.695.744 B; SHA-256 `88e8e79574e65c60cf5190a3d75b95b21056314c5951f732fbf77bf16b962af3`. `artifact.json` registra hashes de cada arquivo, versão/configuração e comparação com rollback. Build `/portfolio-v2/`, endpoint público habilitado, sem mock/fixture no pacote. `package-review.mjs` documenta o empacotamento local e a conferência HTTP. Abrir/extrair somente em área de revisão, servir com bloqueio de conexão externa se exercitar contato e nunca enviar sem autorização.
- Referência publicada anterior, conforme evidência histórica M5: candidata `43c5bc48485ddd3dfd554f3a8b7de53e278cdafe`, build `d7c61a3c5ba10c67741aeff43e0ef8a8349c1528`, [execução 43980146644](https://github.com/CleristonMP/portfolio-v2/actions/runs/43980146644), artefato CI `14282062874`, digest `sha256:cee6662dfa0402fdbf97b1ab0b7229d8ca03c2eb56c2decf1c14eb63816bfe94`; [publicação 44146209728](https://github.com/CleristonMP/portfolio-v2/actions/runs/44146209728). Esses são identificadores históricos, não hash do tar local. Não foi reconsultada disponibilidade/expiração do artefato remoto ou nova CI nesta rodada.
- Reversão futura autorizada: preferir o artefato anterior se disponível, verificando run/SHA/digest e vínculo de publicação. A cópia local conferida contém 14 arquivos; reproduzi-la isoladamente a partir de `43c5bc4`, Node 22.16.0, `npm ci`, endpoint público aprovado no ambiente e `npm run build:subpath`, caso necessário. A reprodução em `b728674`, cujo código de aplicação é idêntico a `43c5bc4`, já resultou em igualdade byte a byte com essa cópia. Validar novamente hashes/configuração antes de promover um novo artefato CI.
- Após essa reversão, o formulário do MVP continua habilitado (endpoint presente), com aceitação inline e sem nova confirmação modal; LinkedIn com indicação de login permanece. Galerias e movimento da evolução desaparecem, mantendo o conteúdo/mídias do MVP. Não confundir com o artefato ainda mais antigo sem endpoint mencionado no histórico de M5.
- Workflows atuais continuam presos aos SHAs/build do MVP e publicação exclusivamente manual na branch padrão. Não publicam esta candidata automaticamente. A eventual promoção da evolução exige aprovação verificável, commit/push autorizado, build CI do SHA exato, conferência de execução/artefato/digest, ajuste revisado do vínculo manual e autorização de publicação. Nada disso foi disparado em EV-05.

### Situação individual e entrega

| Critério EV-05                                                      | Situação                            | Evidência / limite                                                                            |
| ------------------------------------------------------------------- | ----------------------------------- | --------------------------------------------------------------------------------------------- |
| Contratos, hashes, privacidade e tetos                              | Executado                           | inventory.json, manifesto existente e verificadores; saneamento visual aprovado reaproveitado |
| Checks e dois builds                                                | Passaram                            | 120 testes, typecheck/lint/formato/verify/builds e diff check                                 |
| Smoke normal 16 células, teclado, certificados, vídeo e confirmação | Executado                           | smoke-normal.json, capturas e regressões EV-04 identificadas                                  |
| Erros de envio e mídia simulados                                    | Executado                           | 16 transportes e oito falhas de mídia; nenhum envio real                                      |
| Movimento reduzido ativo na matriz                                  | Executado, aguardando revisão       | EV-04 390/1280 reaproveitada; oito combinações 320/768 executadas no complemento abaixo       |
| Medianas antes/depois e orçamentos iniciais                         | Executado, dentro dos tetos         | 24 relatórios/logs; variação do host/rede e LCP mobile remanescente                           |
| Download sob demanda                                                | Executado                           | Zero pedido inicial de vídeo/mídia exclusiva de galeria/miniaturas/PDF nas 24 coletas         |
| Artefato local e reversão identificados                             | Executado                           | artifact.json, tar e baseline idêntica à cópia local publicada; CI nova não executada         |
| Aceite / publicação                                                 | **Aguardando Work; sem publicação** | Revisão do diff/evidências/artefato e autorização posterior                                   |

Evidências locais ignoradas em `.m2-review/ev-05/`: `inventory.json`, `http-assets.json`, `tests.json`, `smoke-normal.json`, `smoke-errors.json`, `media-errors.json`, PNGs, `comparison.json`, `lighthouse-runs.json`, pasta `lighthouse/` com 24 relatórios e logs/traces, scripts reprodutíveis, `artifact.json` e tar. Evidências EV-04 são referenciadas por nome e versão, sem duplicar o relatório ou atribuir execução nova. Somente dois documentos versionáveis; diff local para revisão em `review.diff`. README SHA-256 preservado: `7c1e98ebfacda6e8350212c0211638172b661a4a1d8057ee0c4a1a8ddc1917f9`.

LCP mobile, encaminhamentos da triagem de dependências e acompanhamento Formshield permanecem abertos. A decisão de manter Formshield ativo sem comprovar classificação automática não foi alterada. Recebimentos M504-01/M504-02 são evidência histórica; nenhum envio foi repetido. EV-05 **aguarda revisão verificável do Work**, com complemento reduzido executado e descrito abaixo, sem aceite automático. Nenhum staging, commit, push, merge, deploy ou alteração em main/portfólio antigo/versão pública.

Conventional Commit sugerido, derivado do diff documental: `docs(evolution): record EV-05 regression and publication readiness`.

### Complemento EV-05 — movimento reduzido efetivamente ativo em 320/768 — 25/11/2026

Retomada restrita à cobertura antes interrompida. Branch e HEAD permanecem `evolution/media-motion-feedback` / `a0d32899c8add6d0f8d7628cdc8cdf4d3313fece`; índice vazio, mesmos dois documentos pendentes de revisão. Nenhuma aprovação foi criada ou atualizada. Inventário, Lighthouse, builds e artefato anteriores foram reaproveitados; não houve repetição de performance ou alteração de produção.

#### Método e comprovação da preferência

O Chrome não estava aberto; uma sessão de teste foi iniciada pela API de controle. Não houve nova interrupção por uso manual. DevTools confirmou reduce=true em 320 px, mas a matriz final usou o navegador integrado para permitir controle dos fluxos. Como esse navegador não expõe emulação de mídia, foi usada a preferência real do Windows: Configurações → Acessibilidade → Efeitos visuais → Efeitos de animação, originalmente Ativado, temporariamente Desativado. `matchMedia('(prefers-reduced-motion: reduce)').matches` retornou true no navegador integrado, sem substituir a função ou fabricar seu resultado. Todas as oito cargas iniciais e leituras subsequentes registram essa preferência. Ao terminar, a opção original Ativado foi restaurada e a leitura no mesmo navegador retornou false. `reduced-method.json` registra método/restauração; não foram salvas telas da conta/configurações como evidência pública.

Previews: raiz `http://127.0.0.1:4180/`, subpath `http://127.0.0.1:4181/portfolio-v2/`. Mesmo JS/CSS e altura 844 px. Helper ignorado `smoke-reduced-server.mjs`, derivado do servidor anterior, injeta em memória somente simulação de transporte e auditoria. A CSP connect-src 'self' permanece e POST é bloqueado; fetch simulado nunca encaminha mensagens. A auditoria delega Element.animate e HTMLMediaElement.pause às implementações nativas sem mudar argumentos, tempos ou resultado, registrando apenas contagem/estado e dados do player, sem payload dos campos. Eventos de pause podem ser descartados quando o próprio cleanup remove src e chama load; por isso a evidência final registra o resultado síncrono da chamada nativa pause, não depende somente da propagação do evento após remoção.

#### Matriz final executada

| Base           | Idioma | Viewport | Página: scrollWidth/clientWidth | Documento com modal: scrollWidth/clientWidth | Preferência / animação                | Resultado |
| -------------- | ------ | -------- | ------------------------------- | -------------------------------------------- | ------------------------------------- | --------- |
| /              | PT-BR  | 320×844  | 305/305                         | 320/320                                      | reduce=true; 0 chamadas; transição 0s | Passou    |
| /              | EN     | 320×844  | 305/305                         | 320/320                                      | reduce=true; 0 chamadas; transição 0s | Passou    |
| /              | PT-BR  | 768×844  | 753/753                         | 768/768                                      | reduce=true; 0 chamadas; transição 0s | Passou    |
| /              | EN     | 768×844  | 753/753                         | 768/768                                      | reduce=true; 0 chamadas; transição 0s | Passou    |
| /portfolio-v2/ | PT-BR  | 320×844  | 305/305                         | 320/320                                      | reduce=true; 0 chamadas; transição 0s | Passou    |
| /portfolio-v2/ | EN     | 320×844  | 305/305                         | 320/320                                      | reduce=true; 0 chamadas; transição 0s | Passou    |
| /portfolio-v2/ | PT-BR  | 768×844  | 753/753                         | 768/768                                      | reduce=true; 0 chamadas; transição 0s | Passou    |
| /portfolio-v2/ | EN     | 768×844  | 753/753                         | 768/768                                      | reduce=true; 0 chamadas; transição 0s | Passou    |

Em cada célula: abrir Reports Registry por Enter; Tab e Shift+Tab; ampliar/retornar; Escape duas vezes; esperar a remoção e conferir foco no acionador e rolagem restituída (tolerância 1 px). Abrir um certificado por Enter, fechar pelo botão e conferir foco no acionador. Distribuição: PT 320 Formação Desenvolvedor Moderno, PT 768 Bootcamp React, EN 320 Bootcamp Spring e EN 768 React Native, repetida nas duas bases; os títulos próprios foram preservados. Um único modal por vez, foco dentro, body hidden enquanto aberto, liberado após fechar, sem overflow da página ou do diálogo. Rolagem interna da imagem/miniaturas continua intencional; textos e controles permanecem acessíveis.

Audience-Counter: selecionar explicitamente a quarta mídia, conferir controles nativos, preload=none, paused=true e ausência de autoplay; acionar Play nativo. Os oito registros contêm play/playing e pause-call com paused=true e reduce=true. Em 320, trocar para a mídia anterior pausa o vídeo; em 768, Escape fecha diretamente durante reprodução, pausando antes da remoção. Tempos da pausa observada: 0,0616–0,2123 s após o início, não o fim natural do clipe. Foco retorna a Explorar projeto/Explore project — Audience-Counter, sem vídeo ou bloqueio de rolagem remanescente.

Formulário: preencher apenas dados sintéticos, enviar pelo teclado para o mock accepted (1.800 ms) e abrir Reports Registry durante a espera. Esperar a conclusão do andamento: a galeria permanece como único modal e a confirmação aguarda. Escape na galeria libera uma única confirmação localizada; Tab/Shift+Tab permanecem dentro; Escape repetido fecha e devolve foco a Enviar mensagem/Send message, com body liberado. Uma chamada simulada por carga final, sem envio externo. As tentativas preliminares para ajustar a leitura do helper não entram nas oito linhas finais; nenhuma delas fez envio real. Um seletor de propriedade preload não exposto pela leitura DOM foi substituído pela leitura do atributo, sem mudança da aplicação. `reduced-attempt.json` conserva uma coleta preliminar; `reduced-complement.json` é a matriz final.

#### Evidências, formato e limites preservados

Oito linhas completas em `.m2-review/ev-05/reduced-complement.json`, método/restauração em `reduced-method.json` e 32 PNGs `reduced-{base}-{idioma}-{largura}-{certificate|video|queued|confirmation}.png`. Foram abertos e inspecionados oito representativos, cobrindo as oito combinações: root-pt-320-certificate, root-en-320-confirmation, root-pt-768-certificate, root-en-768-confirmation, subpath-pt-320-certificate, subpath-en-320-video, subpath-pt-768-queued e subpath-en-768-confirmation. Fechamento, foco visível, proporções e texto disponíveis. Não se declara inspeção individual dos demais PNGs. Console do navegador integrado sem erros/avisos ao final; avisos de unload/content.js observados no Chrome pertencem à extensão, sem atribuí-los à aplicação.

Não houve correção de produto nem alteração de código, dados, mídias ou PDFs. Artefato local e README conservam os hashes anteriores; os relatórios de performance e inventário não foram regenerados. Repetidos somente Prettier dos dois documentos e git diff --check; passaram. Os demais checks anteriores continuam aplicáveis porque suas entradas não mudaram. Viewport restaurado, guias de teste e previews encerrados. O sistema teve a preferência original restaurada e comprovada no navegador.

O complemento elimina a pendência de cobertura estática reduzida em 320/768 para revisão, mas não é autoaceite de EV-05. Trocar a preferência no meio de uma animação permanece limitado aos testes DOM já registrados em EV-04. Sem nova validação audível, zoom nativo ou aparelho físico. Evidências reduzidas 390/1280 continuam as reaproveitadas de EV-04. LCP mobile, dependências e Formshield conservam seus acompanhamentos. Somente PROJECT_STATUS.md e este plano têm diff versionável, aguardando nova revisão verificável do Work; sem staging, commit, push, merge, deploy ou envios reais.
