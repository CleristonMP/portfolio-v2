# Evolução pós-MVP — Galerias, feedback e movimento

## Plano aprovado pelo responsável — 18/11/2026

Este plano traduz a avaliação do responsável após o encerramento de M1–M5. O responsável aprovou expressamente este plano em 18/11/2026, pela declaração “Aprovado”. A aprovação abrange o escopo, a sequência EV-01 a EV-05 e seus critérios. Cada implementação terá encaminhamento e revisão próprios.

Registro posterior de 25/11/2026: EV-01 aceita pelo Work e commitada em `0987b36`; EV-02 revisada, aprovada e commitada em `7a45e9bcf862c5b9b02d898530d158de8bc87f0c`, coincidente com a referência local `origin/evolution/media-motion-feedback`. A espera de EV-02 registrada abaixo é histórica. EV-03 revisada e aprovada pelo Work, commitada em `7fb2ea44e29dd9bf4b556470a617b2331e79dde6`. A espera documental de EV-03 abaixo é histórica. EV-04 implementada com checks automáticos e smoke normal/reduzido executados localmente; correção demonstrada de Escape repetido e evidências no registro de execução. A troca da preferência durante uma animação permanece sem reprodução temporal no navegador. Revisão verificável e aceite visual ainda necessários. EV-05 não iniciada. A validação audível manual relatada em EV-02 mantém seus limites e não comprova os novos anúncios de EV-03.

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
