# Evolução pós-MVP — Galerias, feedback e movimento

## Plano aprovado pelo responsável — 18/11/2026

Este plano traduz a avaliação do responsável após o encerramento de M1–M5. O responsável aprovou expressamente este plano em 18/11/2026, pela declaração “Aprovado”. A aprovação abrange o escopo, a sequência EV-01 a EV-05 e seus critérios. Cada implementação terá encaminhamento e revisão próprios.

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

## Decisões ainda abertas

- Seleção exata de imagens/vídeos, ordem, legendas e necessidade de legendagem ou saneamento adicional em EV-01.
- Comportamento e limites da ampliação no mobile, a validar com os formatos selecionados em EV-02. Não pressupor necessidade de uma biblioteca de zoom.
- Durações e intensidade final dos efeitos após comparação visual em EV-04.
- Peso total e estratégia de entrega dos vídeos após medição do inventário. Hospedar os assets localmente no novo projeto é a proposta inicial; outra origem requer decisão.

## Limites e acompanhamento

Código limpo, nomes claros e componentização com responsabilidade definida continuam critérios de revisão de cada entrega. Os materiais originais são fonte somente de leitura. O PRD do MVP e as evidências históricas ficam preservados; este plano registra a proposta de extensão.

A investigação de LCP mobile, a triagem de dependências e o acompanhamento do Formshield de M5 continuam rastreados. Esta evolução deve considerar seus efeitos sobre performance e segurança e não declara esses itens resolvidos.

Nenhuma tarefa deste plano foi implementada ou aceita. EV-01 é a primeira tarefa autorizada para encaminhamento ao Codex.

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
