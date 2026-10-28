# M4-03 — Mídias locais: preparação e integração

## Currículos públicos PT-BR/EN — implementação aguardando revisão do Work — 28/10/2026

### Correção das evidências mobile — 390 px, PT/EN, raiz e subpath

Refeitas somente as evidências mobile solicitadas, sem modificar PDFs, código ou builds. Branch `feat/m4-03-public-resumes`, HEAD `7f150829af8c12c3c2c300dea310a5f5e6793c91`; alterações anteriores preservadas. As capturas mobile antigas `footer-390-pt.png` e `footer-390-en.png` ficam como histórico e **não são usadas para demonstrar o enquadramento integral do download/foco**. As capturas desktop e as medições anteriores permanecem evidências distintas, sem estender sua cobertura.

Novas capturas de viewport **390×844**, navegador embutido, com scrollbar vertical e largura útil de **375 px**. A ferramenta retornou quatro JPEGs de **375×812 pixels**; essa é a resolução dos arquivos salvos, distinta do viewport medido, sem redimensionamento adicional pelo Codex. Cada imagem abaixo foi salva e reaberta para inspeção visual: marca/rodapé, texto completo do download, contorno ciano de foco e retorno ao início estão visíveis integralmente. Não foi necessário corrigir CSS ou comportamento da aplicação.

| Caminho base / URL da aplicação                          | Idioma | Arquivo salvo e inspecionado                                                                                           |
| -------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------- |
| `/` — `http://127.0.0.1:4196/`                           | PT-BR  | [footer-mobile-root-390-pt.jpg](C:/Projects/portfolio-v2/.m2-review/m4-03/resumes/footer-mobile-root-390-pt.jpg)       |
| `/` — `http://127.0.0.1:4196/`                           | EN     | [footer-mobile-root-390-en.jpg](C:/Projects/portfolio-v2/.m2-review/m4-03/resumes/footer-mobile-root-390-en.jpg)       |
| `/portfolio-v2/` — `http://127.0.0.1:4197/portfolio-v2/` | PT-BR  | [footer-mobile-subpath-390-pt.jpg](C:/Projects/portfolio-v2/.m2-review/m4-03/resumes/footer-mobile-subpath-390-pt.jpg) |
| `/portfolio-v2/` — `http://127.0.0.1:4197/portfolio-v2/` | EN     | [footer-mobile-subpath-390-en.jpg](C:/Projects/portfolio-v2/.m2-review/m4-03/resumes/footer-mobile-subpath-390-en.jpg) |

Procedimento: abrir o preview, selecionar idioma, trazer as nove imagens à vista para completar lazy loading e confirmar `document.fonts.status === 'loaded'`; no rodapé, pressionar **Tab a partir do link GitHub**, alcançando o download sem ativá-lo. Ajustar a rolagem por teclado com **Ctrl+End** quando necessário, mantendo o foco. Aguardar a conclusão da rolagem e comparar observações consecutivas de scrollY/retângulo do link antes de salvar, em vez de capturar imediatamente após a interação. Na tentativa EN inicial, o link terminava em y≈839 e o contorno extrapolava o viewport; após posicionar o fim da página, link e contorno ficaram completos. No subpath PT, uma observação intermediária ainda mostrava rolagem em curso; não foi usada como captura final. Nenhuma preferência de movimento/zoom foi alterada.

Nas quatro capturas finais: `scrollWidth === clientWidth === 375`, nove imagens completas com dimensões naturais e fontes carregadas; download é `activeElement`, altura 44 px, y≈768,3 até 812,3, contorno sólido 3 px com offset 4 px, inteiramente dentro de 844 px. Destinos absolutos conferidos conforme o caminho base e idioma. Retângulos e contexto em `.m2-review/m4-03/resumes/mobile-evidence.json`; sem novo download ou revalidação dos PDFs nesta rodada. Override temporário de viewport restaurado ao terminar.

Cobertura desta correção: **quatro capturas em uma única largura/altura, dois idiomas e dois caminhos**, com foco por teclado e inspeção visual dos arquivos salvos. Não representa repetição da matriz inteira, dos testes, dos builds, de zoom real/reduced motion ou auditoria completa de acessibilidade. Evidências anteriores continuam identificadas separadamente. Somente status/handoff alterados nesta rodada; formatação documental e `git diff --check` repetidos. M4-03 continua aguardando nova revisão do Work; sem staging, commit, push, merge ou deploy.

### Aprovação, entrada e rastreabilidade

Após a proposta editorial exata apresentada nesta conversa, o responsável declarou: **“Pontos 1 e 2 aprovados. Concordo com a recomendação do ponto 3”**. A aprovação abrange os textos PT/EN, as omissões propostas e dois PDFs públicos separados, com somente GitHub/LinkedIn como contatos. O encaminhamento seguinte autorizou a produção e integração local; não aprovou tecnicamente os arquivos finais nem autorizou commit/push. Texto aprovado transcrito integralmente, sem reescrita, em `scripts/resume-content.json`, fonte legível/revisável dos PDFs. Assim o Work pode revisar os textos no mesmo diff, sem depender apenas do histórico do chat. A seção anterior de proposta de currículo permanece abaixo como histórico superado somente quanto à aprovação editorial e produção aqui registrada.

Entrada: `feat/m4-03-local-media`, HEAD `7f150829af8c12c3c2c300dea310a5f5e6793c91`, coincidente com referência local origin; integração das nove mídias aceita/commitada/enviada na operação anterior. Staging vazio e nenhum diff versionável, README somente sinalizado por finais de linha; sem aprovação transitória pendente. Criada branch `feat/m4-03-public-resumes`. Workflow, plano M4, PRD v2.3, proposta de saneamento e fatos/textos M4-01/02 relidos; nenhum AGENTS.md encontrado no projeto fora de dependências. Sem consulta remota nova de refs/CI.

### Arquivos e decisões

| Versão | Arquivo local versionável                             | Páginas / bytes | SHA-256                                                            |
| ------ | ----------------------------------------------------- | --------------- | ------------------------------------------------------------------ |
| PT-BR  | `public/assets/documents/cleriston-pereira-pt-br.pdf` | 2 / 49726       | `46ee64effd2227db4a545bfdff7637f27cb685f142455ca2efb347f42c199863` |
| EN     | `public/assets/documents/cleriston-pereira-en.pdf`    | 2 / 48809       | `340d888d98353744c3696fbb585bf003db763afc3825c7b3e61c164654f8e797` |

PDFs construídos do zero com `scripts/generate-resumes.py`, ReportLab/pypdf já disponíveis no runtime documental; nenhuma dependência da aplicação instalada ou alterada. Formato A4, uma coluna, texto de corpo 10,3 pt/entrelinha 15 pt, títulos claros, margens e paginação; fontes Bitstream Vera regular/negrito incorporadas com mapa Unicode. Papel branco para leitura/impressão, acento ciano discreto; tokens/CSS da aplicação intactos. Página 1: apresentação, competências e Reports Registry; página 2: demais projetos e formações, mantendo ordem aprovada. Paginação e nome repetido no rodapé são os únicos elementos editoriais de apoio, além do texto aprovado. Nomes oficiais de cursos preservados também em EN.

Original privado não foi usado como matriz, nem teve páginas, fontes, contatos, anotações ou metadados importados. Cópia de referência permanece fora da aplicação, SHA-256 `0a1e6985c2451c6a0548172c2ba391f40df661c6b60bdb47ce5e2a037a1bb62b` inalterado. Nenhum arquivo do repositório antigo foi escrito. O novo PDF tem somente Title público e Lang; sem Author, datas, Creator, Producer pessoal, XMP, anexos, campos, ações automáticas ou camadas herdadas. As únicas anotações são dois links URI recém-criados para GitHub/LinkedIn autorizados. Sem email, telefone, localização/nascimento/nacionalidade, código privado ou identificação de terceiros. Omissões da outra atividade/cronologias não reconfirmadas/níveis de idioma/alegações não verificadas são o recorte expressamente aprovado, não declaração de falsidade do original.

Download inserido na navegação já existente do Footer, antes do retorno ao início. PT seleciona PT-BR; EN seleciona EN. Link nativo com download, type application/pdf e hreflang, nome localizado contendo formato/idioma. Caminhos relativos tipados `assets/documents/...` resolvem na raiz ou subpath sem alterar base path e sem enfraquecer getVerifiedUrl. App repassa idioma ao Footer. Profile recebe campo opcional específico de versões localizadas, mantendo contatos desconhecidos e estado editorial pending; substituído somente gate resume por resumeTechnicalReview. Nenhum destino LinkedIn foi habilitado na interface como promessa de contato funcional. Label operacional nova no dicionário; demais copy e mídias inalteradas. Nenhum modal, rota, seletor de arquivos ou serviço novo.

### Critérios e evidências reais

| Critério desta unidade                       | Resultado                                                                                                                                                                                                                                                                                                       |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Texto exato aprovado PT/EN e disponibilidade | Passa: extração integral comparada à fonte aprovada, normalizando somente espaços/quebras; preserva autoria comercial/assistida/educacional, não implantação, ausência de pagamentos e remoto em meio período sem restringir freelance.                                                                         |
| Texto selecionável/fontes incorporadas       | Passa: extração pypdf/pdfplumber, mapas Unicode e FontFile2/3 em todos os recursos de fonte; quatro páginas renderizadas e inspecionadas.                                                                                                                                                                       |
| Saneamento e links                           | Passa: dois links URI autorizados, sem anexos/campos/ações/XMP/dados pessoais; texto integral é exatamente o aprovado. Original preservado por hash.                                                                                                                                                            |
| Legibilidade visual                          | Quatro PNGs finais, 1400 px no lado maior, inspecionados sem corte, sobreposição ou glifo ausente. Corpo/hierarquia e ordem de leitura em coluna única preservados. Não é declaração de conformidade PDF/UA.                                                                                                    |
| Downloads e caminhos                         | Quatro downloads reais por Enter (PT/EN × raiz/subpath), SHA-256 idêntico ao arquivo local. Evidência browser-downloads.json.                                                                                                                                                                                   |
| Teclado, nome e foco                         | Tab/Shift+Tab percorrem download e retorno ao início; contorno sólido visível. Nome, download, hrefLang e destino testados nos dois idiomas; ausência de arquivo opcional não produz link vazio.                                                                                                                |
| Layout da integração                         | 44 medições: PT/EN × dois caminhos × 320/390/700/701/767/768/769/1000/1001/1280/1920 px, altura 900; scrollWidth === clientWidth e link sem extrapolar borda. Oito registros adicionais de Tab/Shift+Tab, total 52 em browser-layout.json. Quatro capturas footer-390/1280-pt/en.png. CSS/tokens não alterados. |
| Qualidade/builds                             | Typecheck, lint, formato, 74 testes em 10 arquivos, verify content/i18n e builds raiz/subpath passam; diff check repetido após documentos.                                                                                                                                                                      |
| Revisão e gates                              | PDFs e integração aguardam revisão técnica própria do Work e novo snapshot. M4-03 não declarada concluída; M4-04 não iniciada, foto ausente e contato real/antispam/recebimento/publicação continuam pendentes.                                                                                                 |

Evidências locais ignoradas em `.m2-review/m4-03/resumes/`: `pdf-validation.json`, `extracted-pt-br.txt`, `extracted-en.txt`, `pt-1.png`, `pt-2.png`, `en-1.png`, `en-2.png`, `browser-layout.json`, `browser-downloads.json` e quatro capturas do rodapé. [Página PT 1](C:/Projects/portfolio-v2/.m2-review/m4-03/resumes/pt-1.png), [PT 2](C:/Projects/portfolio-v2/.m2-review/m4-03/resumes/pt-2.png), [EN 1](C:/Projects/portfolio-v2/.m2-review/m4-03/resumes/en-1.png), [EN 2](C:/Projects/portfolio-v2/.m2-review/m4-03/resumes/en-2.png).

### Comandos, resultados e limites

```powershell
$env:Path = 'C:/Program Files/nodejs;' + $env:Path
$pythonRuntime = 'C:/Users/cmelo/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/python.exe'
& $pythonRuntime scripts/generate-resumes.py
& $pythonRuntime scripts/verify-resumes.py
pdftoppm -scale-to 1400 -png public/assets/documents/cleriston-pereira-pt-br.pdf .m2-review/m4-03/resumes/pt
pdftoppm -scale-to 1400 -png public/assets/documents/cleriston-pereira-en.pdf .m2-review/m4-03/resumes/en
npm run format
npm run typecheck
npm run lint
npm test
npm run verify
npm run build
npm run build:subpath
git diff --check
```

Todos os checks finais acima passam. `verify-resumes.py` verifica texto integral, ordem, links, idioma, fontes e estrutura limpa; deve rodar no runtime documental com ReportLab/pypdf/pdfplumber disponíveis. Não é requisito do navegador/servidor nem foi instalada dependência Python no projeto. O workflow existente continua usando npm e verifica presença/destinos dos dois PDFs pelo verificador de conteúdo. Testes do Footer mantêm navegação/ano/marca/contatos incompletos e acrescentam download localizado/ausência opcional. CI remota não executada desta árvore.

Uma repetição direta simultânea de Vitest teve timeout de 5000 ms em teste existente de alternância de idioma: 73 passaram/1 timeout. A execução padrão npm test passou 74/74; repetição posterior `node node_modules/vitest/vitest.mjs run --maxWorkers=1` passou 74/74, sem alterar timeout ou asserções. Cadeia npm/Node mostrou lentidão; Node direto v22.16.0/PATH somente no processo também executou typecheck/lint/verify/builds com sucesso. Sem correção global do Volta. `pdffonts` não estava disponível no PATH; inspeção das fontes foi feita pela estrutura PDF com pypdf. Recurso inicial Helvetica não incorporado foi corrigido no gerador e todas as páginas finais rerenderizadas sem erros de fontes. Primeiro preview recusou conexão antes de o servidor subir; aba limpa com preview ativo funcionou. Downloads demoraram, mas os quatro eventos terminaram com hashes corretos.

Previews somente locais: Vite preview em 4196 raiz; em 4197 com `--base=/portfolio-v2/ --outDir=.m2-review/m2-08/dist-subpath`; usados os mesmos comandos anteriores deste handoff. Sem revalidação independente de zoom real/reduced motion nesta unidade; não se reutiliza aceite manual das nove mídias como prova dos PDFs. Não houve auditoria completa de leitor de tela, PDF/UA, sistemas ATS ou links externos em sessão autenticada. LinkedIn continua perfil autorizado com authwall historicamente observado, sem promessa de mensagens abertas. Viewport temporário restaurado.

Arquivos: dois PDFs em public/assets/documents; scripts/generate-resumes.py, scripts/verify-resumes.py, scripts/resume-content.json; App, Footer, contratos/profile, traduções, testes Footer, verify-content e os dois documentos de acompanhamento. README, plano, PRD, exports, nove rasters e demais seções preservados. Sem staging, commit, push, merge ou deploy.

Conventional Commit sugerido: `feat(resume): add approved bilingual PDFs and localized downloads`.

## Retomada dos testes de navegador — 28/10/2026

Nova tentativa solicitada pelo responsável concluída no navegador embutido, com os builds finais servidos em `http://127.0.0.1:4196/` e `http://127.0.0.1:4197/portfolio-v2/`. Sem alteração adicional de código ou dos nove rasters nesta retomada. Os registros de interrupção e pendências da tentativa anterior abaixo permanecem históricos; os resultados desta seção os atualizam.

- **Matriz: passa.** 52 combinações: PT/EN × dois caminhos × 320, 390, 699, 700, 701, 767, 768, 769, 999, 1000, 1001, 1280 e 1920 px (altura 900). `scrollWidth === clientWidth` em todas, inclusive 305 px úteis no viewport 320 com scrollbar. Nenhum elemento inspecionado ultrapassou as bordas e nenhuma interseção entre cards foi detectada. Seis seções, nove imagens completas/decodificadas, dimensões naturais corretas, capas contain e figuras com proporção natural. Mídias lazy foram trazidas à vista por interação antes das medições; isso não mede performance de carregamento.
- **Capturas depois: executadas.** Oito páginas completas em 390×844 e 1280×900, PT/EN, nos dois caminhos: `after-{root,subpath}-{390,1280}-{pt,en}.png` em `.m2-review/m4-03/integration/`. Quatro capturas antes preservadas; conferência visual adicional de cards e certificados em `after-projects-1280-pt.png` e `after-learning-1280-pt.png`. As capas mantêm todos os controles; panorama e certificados têm acesso à resolução original para leitura detalhada.
- **Teclado/foco: passa nos cenários executados.** Skip por Enter foca main-content; menu abre por Space/Enter e foca primeiro link; Tab/Shift+Tab percorrem links, Escape fecha e retorna ao botão; navegação fecha e foca projects; CTA foca reports-registry-case. Transição 390→768 mantém link visível e fecha estado mobile; 768→390 recupera foco no botão. Menu fechado: Tab vai ao CTA do hero, sem percorrer links ocultos. Contornos de foco sólidos observados. Smoke localizado de skip/menu/Tab/Shift+Tab/Escape e navegação desktop repetido PT/EN nos dois caminhos.
- **Arquivos e histórico: passa.** Os cinco links de imagem original foram ativados por Enter na raiz, com dimensões naturais corretas; Voltar retorna à aplicação e ao hash anterior. Certificado repetido PT/EN nos dois caminhos. O navegador não restaurou foco ao link ao voltar do documento de imagem (activeElement body); comportamento nativo registrado, sem promessa de restauração específica ou manipulação do histórico. Nenhuma rota da aplicação criada.
- **Idioma/metadados: passa.** Alternância PT/EN, reload com preferência válida, html lang, title e description conferidos nos dois caminhos. Console da sessão: zero avisos/erros. Imagens renderizadas apontam somente para os nove assets locais; os 18 GETs e hashes já registrados complementam a inspeção, sem alegar captura completa do painel Network.
- **Zoom real 200% e reduced motion ativo:** mantida a aprovação manual específica do responsável, sem execução ou observação independente pelo Codex. Nenhuma aprovação anterior reutilizada. Override temporário de viewport restaurado ao terminar.

Evidências locais ignoradas: `layout-root.json`, `layout-subpath.json`, `browser-smoke.json` (51 registros) e `console-retry.json`, além das capturas. Para reproduzir: servir os dois builds pelos comandos abaixo, alternar o idioma pelo controle, visitar cada imagem para disparar lazy loading, aplicar cada viewport e comparar document.documentElement.scrollWidth/clientWidth e os retângulos de cards/imagens; executar as interações descritas. Medições DOM e jsdom não comprovam zoom real nem preferência do sistema.

**Integração permanece aguardando revisão própria do Work e novo snapshot verificável.** Checks de código anteriores continuam válidos porque nenhum código foi alterado nesta retomada: 73 testes/10 arquivos, typecheck, lint, formato, verify e builds raiz/subpath. Formatação documental e diff check repetidos após este registro. Não há CI remota desta árvore. M4-03 não se autoaprova; M4-04 não iniciada. Sem staging, commit, push, merge ou deploy.

## Histórico da primeira tentativa — aprovação visual manual recebida; revisão própria pendente — 28/10/2026

**Preparação aprovada e commitada; integração desta árvore ainda não aprovada. M4-03 não concluída.** A preparação documental foi aceita pelo Work e commitada em `d2a21d6d70fbd72b803893f8f47abdf1cd960e10`, com push bem-sucedido registrado nesta conversa. Conferidos localmente branch de entrada `chore/m4-03-safe-media-preparation`, HEAD e referência local origin de mesmo nome iguais a esse commit, remote correto, staging vazio e somente README sinalizado por finais de linha sem diff versionável. Criada `feat/m4-03-local-media`, sem alterar main ou sobrescrever alterações. Nenhum fetch ou consulta de CI; não se presume resultado remoto.

O encaminhamento atual do responsável identifica explicitamente as **nove versões tecnicamente aceitas pelo Work**, com os usos abaixo. Antes de copiar, SHA-256 do manifesto conferido com `42a9f1f0c14c4c15d313c06731dbf956cd792249ff1be5ca2cb664eca6e07f9c`; cada candidate_sha256 conferido também com o recibo local da aprovação anterior. Todas as nove verificações passaram antes de criar destinos. Os candidatos não foram regenerados. Demais alternativas continuam fora da integração; a aceitação das nove não é aceite desta implementação nem liberação das outras.

### Destinos e identidade dos bytes

Copiados somente os nove WebP abaixo, **sem recompressão, corte, edição de pixels ou reintrodução de metadados**, total 532120 bytes. As dimensões/bytes e SHA-256 são os mesmos das candidatas aceitas. Matrizes, originais, ferramentas, pacote de revisão, laudo bloqueado, currículo e alternativas não entraram nos assets versionáveis. A proveniência detalhada e medidas de otimização da preparação estão preservadas no histórico abaixo e no manifesto local original; não se atribui nova economia de bytes a esta cópia.

| ID aceito    | Destino versionável                                      | Pixels / bytes    | SHA-256 dos bytes copiados                                         |
| ------------ | -------------------------------------------------------- | ----------------- | ------------------------------------------------------------------ |
| rr-search    | `public/assets/media/reports-registry/rr-search.webp`    | 840×525 / 14222   | `45f49435c739313a194eee70cb1cf8f98aa1258c7844002d8cf232f9ae6601c2` |
| rr-import    | `public/assets/media/reports-registry/rr-import.webp`    | 1440×159 / 31902  | `d3809295dfc387004f8bc45c7694640b3c3fa05b9f24c42787fa1d4fece18e3a` |
| ac-landscape | `public/assets/media/audience-counter/ac-landscape.webp` | 1440×563 / 33490  | `33f2349ad13f2b4200c878f8c7e4686494ce43d261f3844d87bb178f9aa3b202` |
| wm-classes   | `public/assets/media/webmatriculas/wm-classes.webp`      | 1440×810 / 22540  | `aa0d40054ab6f08cdc0046e8ab483e3d415b14ae109a0e2e244a5ebaf58f3293` |
| ds-catalog   | `public/assets/media/dscommerce/ds-catalog.webp`         | 992×620 / 87470   | `2693887e33dfc3ce56537f6509b6228f992b9cb82adc7f9dbc3e6782901da5c7` |
| cert-modern  | `public/assets/media/certificates/cert-modern.webp`      | 2339×1653 / 96344 | `b31d84cb2ebd9cc229176f435b42fe9cd982616b3071147ce49162c177eb0ba4` |
| cert-react   | `public/assets/media/certificates/cert-react.webp`       | 2339×1653 / 88842 | `9ee404f262032d38b9edc11a31d759eaa5a4378ef87e3f53bf35fdae28b1f362` |
| cert-spring  | `public/assets/media/certificates/cert-spring.webp`      | 2339×1653 / 90996 | `28e4d933b7076a250c66f54d7efee48e4676dd199b50dfcd58ff5a1a6f77994a` |
| cert-native  | `public/assets/media/certificates/cert-native.webp`      | 1600×1190 / 66314 | `6654381a23441ecb7cd7341da4f83cc07e1c6598acea2b03c4a100bbb827f466` |

### Integração e decisões

- Quatro capas nos cards existentes, mesma ordem/curadoria/dados. `rr-import` inserida após os quatro parágrafos do case Reports Registry na própria âncora. Quatro certificados complementam as formações, mantendo título, instituição e ano textuais. Currículo/foto não produzidos ou disponibilizados.
- `LocalMedia` tipa caminho local, largura, altura e alt PT/EN. `media.ts` concentra as nove referências e descrições; `Project.image` passa de URL legada a objeto local opcional; `Course.image` é opcional. Nenhuma URL antiga permanece no código de produção. Os caminhos públicos relativos `assets/media/...` são intencionais: a SPA permanece no diretório base e só navega por hash, resolvendo em `/` ou `/portfolio-v2/` sem mudar Vite/base path ou adicionar dependência.
- `ContentImage` reúne atributos comuns: width/height reais, alt localizado, lazy e decoding async. Todas as imagens ficam abaixo do hero; não foram antecipados downloads eager nem feitas promessas de performance. Capas têm quadro 16:9 reservado, fundo com token existente, raio 12 px e `object-fit:contain`, sem deformar os rasters ou cortar controles. O filho posicionado dentro do quadro evita que a proporção intrínseca altere sua altura antes/depois do carregamento. DS Commerce secundário limita o quadro a 640 px, mantendo o card e conteúdo existentes.
- Case e certificados usam largura responsiva/altura automática, proporção natural e links nativos localizados **“Abrir imagem em tamanho original” / “Open image at original size”** para os próprios arquivos locais. O PRD §15 prevê link para credencial/imagem local. Acesso à resolução original resolve a limitação de leitura de um panorama ou certificado reduzido sem galeria, modal, nova página da aplicação ou rota. Não são links de validação no emissor, não substituem `credential` e não alegam autenticidade adicional. Sem target novo ou controles de demonstração.
- Learning mantém a grade responsiva existente; apenas o interior de cada card usa grid para pôr a figura abaixo do índice/texto/ícone. Superfícies, raios e hierarquia reconsultados no HTML/DESIGN.md/screen.png Stitch, com as adaptações de contain/proporção natural aprovadas. Sem recolorir capturas, alterar tokens, header, hero, perfil, competências, footer ou formulário. Exportações originais preservadas.
- Removido somente `mediaVersion` dos campos sustentados pelas versões aceitas e copiadas. Projetos continuam `pending` por `finalEditorialReview`; cursos continuam `pending` por `credential` e `finalEditorialReview`. Aceite da integração continua gate desta tarefa. Nenhum registro inteiro foi confirmado por receber uma imagem; M4-04, currículo e contato real permanecem pendentes.

### Checks e evidências executados nesta integração

Node direto v22.16.0, PATH ajustado somente no processo; nenhuma configuração global/dependência alterada. Resultados reais em `.m2-review/m4-03/integration/checks.log`:

```powershell
$env:Path = 'C:\Program Files\nodejs;' + $env:Path
npm run typecheck
npm run lint
npm run format
npm test
npm run verify
npm run build
npm run build:subpath
npm run build
git diff --check
```

**Passaram:** typecheck; lint sem warnings; formato; **73 testes em 10 arquivos**; verificadores de conteúdo/i18n; build raiz, build subpath e repetição do build raiz solicitada; diff check. O handoff também é formatado explicitamente com Prettier, por docs/ estar no ignore geral. Artefatos finais: CSS `index-C57GpDaX.css` e JS `index-Ba0Oyn64.js` nos dois builds. Não há CI remota executada desta árvore não commitada.

As expectativas históricas de ausência de imagens foram substituídas por quantidade e destinos exatos: cinco imagens de projetos/case e quatro certificados; atributos, alt PT/EN, dimensões, carregamento, link nativo para o raster e ausência de imagem opcional sem placeholder. Testes de ordem editorial/Tab, código privado, contatos incompletos, estados do formulário indisponível, armazenamento/idioma/metadados, menu/foco e demais proteções permanecem. `verify-content` verifica os nove hashes aceitos, dimensões binárias WebP, ausência de chunks de metadados/animação e inventário local exato; whitelist de links continua restrita aos destinos autorizados e cinco arquivos originais locais usados pelos links. Não se liberaram URLs arbitrárias. jsdom/SSR não comprovam layout, carregamento lazy, histórico nativo ou zoom.

Verificações adicionais reproduzíveis, locais e ignoradas:

```powershell
node .m2-review/m4-03/integration/check-copy.mjs
& 'C:/Users/cmelo/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/python.exe' .m2-review/m4-03/integration/check-artifacts.py
& 'C:/Users/cmelo/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/python.exe' .m2-review/m4-03/integration/check-http.py
```

Comparação com o baseline `d2a21d6` passou: fatos/textos de projetos e cursos e todas as chaves anteriores PT/EN preservados, excluindo somente referências/gates de mídia e a nova label operacional. Validação dos artefatos passou: manifesto original íntegro, nove hashes origem/destino idênticos, dimensões/frames/metadados inalterados; README e arquivos alheios preservados byte a byte. Resultados em `artifact-validation.json`; destinos/proveniência em `copied-media.json` no mesmo diretório ignorado.

Previews de produção servidos somente localmente:

```powershell
node node_modules/vite/bin/vite.js preview --host=127.0.0.1 --port=4196 --strictPort
node node_modules/vite/bin/vite.js preview --base=/portfolio-v2/ --outDir=.m2-review/m2-08/dist-subpath --host=127.0.0.1 --port=4197 --strictPort
```

HTTP local executado nos **dois caminhos**: aplicação e quatro bundles JS/CSS com status 200; **18 GETs das nove mídias**, todos 200, `image/webp`, bytes/SHA-256 iguais aos aceitos. Código src e bundles não contêm `raw.githubusercontent.com` antigo ou host de amostras Stitch. Evidências em `.m2-review/m4-03/integration/http-results.json`. Isso comprova o serviço local dos arquivos, não observação completa de rede/layout/decodificação lazy pelo navegador. Google Fonts existente não é mídia migrada e não foi modificado.

### Evidências de interface e impedimento concreto

Antes das edições, capturadas quatro páginas completas em Vite dev `127.0.0.1:4195`, baseline da preparação aprovada: `before-390-pt.png`, `before-390-en.png`, `before-1280-pt.png`, `before-1280-en.png` em `.m2-review/m4-03/integration/`. Dimensões 390×844 e 1280×900. Há inspeção DOM inicial da integração em 390 px/EN, sem excesso de scrollWidth contra clientWidth naquele ponto, mas anterior ao último ajuste do quadro das capas; imagens abaixo da dobra ainda não haviam todas carregado. **Esse resultado intermediário não fecha a responsividade final.**

Ao tentar revalidar zoom real no Chrome nativo, Computer Use informou que não conseguia determinar a URL atual no Windows com confiança suficiente para aplicar a política e **interrompeu o uso de interface para o turno**. Não foram enviadas teclas de zoom, alteradas preferências ou iniciada a janela dedicada. Após a interrupção, nenhuma nova ação de interface, captura ou automação alternativa de navegador foi usada; concluíram-se apenas checks de código/artefatos e HTTP independentes da UI.

Histórico da execução automatizada anterior à confirmação manual abaixo: **não há capturas depois, matriz final desktop/mobile PT/EN, conferência visual final dentro dos componentes, smoke nativo completo ou validação própria de zoom 200%/reduced motion ativo desta integração**. Preferência reduce observada na sessão inicial: false, não ativa. Presença da regra CSS e testes DOM não suprem esses critérios. Aprovações manuais anteriores, inclusive de M4-02, não foram reutilizadas. Viewport do navegador embutido ficou em 390×844 na interrupção; não foi possível restaurá-lo por nova ação de UI neste turno. Isso deve ser retomado em nova sessão/turno, sem inferir resultados.

Matriz final a executar, **ainda pendente**, nos dois idiomas e caminhos: 320/390/768/1280/1920 e limites 699/700/701, 767/768/769, 999/1000/1001. Comparar scrollWidth/clientWidth, enquadramento contain, proporção natural, cortes, sobreposição, leitura e acesso à resolução original. Repetir captura depois 390/1280 PT/EN, teclado/foco/skip/menu/Escape, mudanças de largura, hash/Voltar, persistência e metadados. Não reaproveitar a matriz da versão sem mídias como prova desta integração. A prancha das candidatas aprovada anteriormente comprova apenas os rasters isolados, não sua apresentação atual.

### Confirmação visual manual posterior — 28/10/2026

O responsável declarou nesta conversa: “Eu fiz a validação visual e está aprovada.” A aprovação visual manual desta integração está recebida. Codex não executou nem observou independentemente essa validação. Não foram informados navegador, larguras, idiomas, caminhos, procedimento, medidas ou capturas adicionais; esses detalhes não são inferidos.

A declaração supera a pendência de aprovação visual geral da apresentação das mídias, sem criar capturas depois ou transformar a matriz planejada em medições executadas. Smoke funcional completo, cobertura discriminada por largura/idioma/caminho, zoom real 200% e reduced motion ativo não foram confirmados especificamente nessa declaração e permanecem como gates de evidência. A interrupção do Computer Use e seus resultados brutos acima permanecem históricos, não são apagados nem descritos como execução bem-sucedida.

Isso não constitui revisão técnica integral do Work nem autorização de staging, commit/push ou início de M4-04. A árvore documental atualizada exige nova revisão e snapshot próprio.

### Confirmação manual posterior de zoom e redução de movimento — 28/10/2026

O responsável declarou nesta conversa: “considere zoom real 200% e reduced motion ativo como aprovados, feitos manualmente”. Registro específico desta integração de M4-03: os dois critérios passam a constar como validados manualmente e aprovados pelo responsável. Codex não executou nem observou independentemente a validação. Navegador, larguras, idiomas, caminhos, procedimento e capturas adicionais não foram informados e não são inferidos.

A declaração supera as duas pendências iniciais e complementa a aprovação visual geral anterior. Os registros de impedimento automatizado e de ausência de confirmação específica naquela etapa permanecem históricos. A observação anterior de preferência false é da sessão automatizada, não da execução manual posterior. Não foram reutilizadas aprovações de outras entregas, viewport menor ou presença da regra CSS como substitutos.

Capturas depois, cobertura discriminada da matriz e smoke funcional completo continuam sem evidência específica. Revisão própria do Work e snapshot atualizado permanecem necessários; esta confirmação não autoriza staging, commit/push nem encerra M4-03 ou inicia M4-04.

### Situação individual histórica anterior à retomada

| Critério                                                  | Situação desta integração                                                                                                                                 |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Manifesto e hashes das nove versões antes da cópia        | Passa; manifesto pinado e hashes aceitos conferidos, nenhum arquivo regenerado.                                                                           |
| Somente nove rasters locais, pixels/metadados preservados | Passa nos checks de artefatos; 532120 bytes, inventário exato, sem originais/matrizes/currículo/alternativas.                                             |
| Capas, case e certificados na estrutura existente         | Implementado/testado; apresentação visual validada manualmente e aprovada pelo responsável, sem observação independente pelo Codex.                       |
| Textos, curadoria, IDs, proporções, dimensões/alt/loading | Dados/textos/atributos verificados; contain e dimensões reservadas implementados; aprovação visual manual recebida, sem medidas adicionais informadas.    |
| Credenciais e demais gates editoriais                     | Permanecem pendentes conforme dados; apenas versões de mídia aceitas deixam `mediaVersion`.                                                               |
| Ausência de dependência de mídia legada/Stitch            | Src/bundles e inventário renderizado só referenciam mídias locais; inspeção final de requisições do navegador ainda pendente.                             |
| HTTP em / e /portfolio-v2/                                | Passa para app/bundles e 18 GETs de mídia com MIME/hash exatos. Não substitui smoke no navegador.                                                         |
| Matriz final de larguras/idiomas e capturas depois        | Aprovação visual geral manual recebida; cobertura detalhada da matriz não informada, sem capturas depois novas. Quatro capturas antes disponíveis.        |
| Teclado/foco/idioma/metadados/menu/hash/Voltar            | Proteções de código e testes existentes passam; revalidação completa no navegador desta versão **pendente**.                                              |
| Zoom real 200% e reduced motion ativo                     | Validados manualmente e aprovados pelo responsável em 28/10/2026 para esta integração; sem observação independente pelo Codex. Limites registrados acima. |
| Checks de código/testes/verificadores/builds/diff         | Passam; 73 testes, builds dos dois caminhos e repetição raiz registrados acima. CI remota não executada.                                                  |
| Currículo/foto/serviços/escopo                            | Preservados: currículo editorial não aprovado, sem PDF público ou foto; formulário indisponível, serviços não configurados, M4-04 não iniciada.           |

Arquivos: nove `public/assets/media/**/*.webp`; novos `src/content/media.ts`, `src/components/ContentImage.tsx` e `tests/media.test.tsx`; ajustes mínimos em contratos, dados projects/courses, duas seções, estilos, dicionário (label de imagem original), testes projects/learning e verificadores content/i18n; status e este handoff. PRD, plano, exports, dependências, tokens, base path e demais seções permanecem intactos.

**Não aprovar/encerrar M4-03 apenas pelos checks locais.** A árvore fica para revisão do Work com os impedimentos explícitos; completar os critérios remanescentes de navegador/capturas e considerar as confirmações manuais próprias de visual/zoom/reduce, com seus limites, antes de qualquer aceite integral. Sem staging, commit, push, merge ou deploy. Aprovação das candidatas/preparação não autoriza commit desta integração.

Conventional Commit sugerido para este diff efetivo: `feat(media): integrate accepted project and certificate rasters`.

---

## Histórico — preparação aprovada e commitada em d2a21d6

O registro original abaixo permanece histórico. As pendências de aceite das versões foram superadas somente para as nove explicitamente identificadas no encaminhamento de integração, sem liberar as demais alternativas ou o currículo. A integração e seus critérios atuais são os da seção acima.

28/10/2026. **M4-03 em andamento. Esta unidade prepara candidatas locais; não conclui migração, integração ou aceite das versões.** Revisão própria do Work necessária antes de copiar qualquer arquivo para assets versionáveis. Sem staging, commit, push, merge ou deploy.

## Entrada e fontes

Origin conferido: `https://github.com/CleristonMP/portfolio-v2.git`. Entrada em `feat/m4-02-content`, HEAD `b4c15e30bc74d846a530576756d54e0e14d2aa83`, coincidente com a referência local `origin/feat/m4-02-content`. M4-02 aceita pelo Work conforme encaminhamento, commitada e enviada com sucesso conforme operação registrada nesta conversa. Não houve consulta nova de refs remotas ou CI; nenhum resultado de CI desse commit é presumido. Staging vazio; README apenas sinalizado por finais de linha, sem diff versionável, preservado byte a byte. Criada branch dedicada `chore/m4-03-safe-media-preparation`, sem alterar main.

Lidos workflow, PRD v2.3 §§15/16, estado, plano único M4, inspeção/reconciliação M4-01 e handoff M4-02. Origem dos materiais: `CleristonMP/portfolio`, caminhos de `public/assets/medias/projects/`, `public/assets/medias/certificates/` e currículo em `public/assets/files/`, já inspecionados em M4-01. Reaproveitadas as cópias locais de `.m2-review/m4-01/inspection/` e `certificates/`; nenhuma nova obtenção remota ou alteração no repositório antigo. A árvore `b6dded70fd5aaef25cba6fe039d099f359920f3c` é evidência histórica da consulta M4-01, não uma verificação remota atual.

Autorizações dos quatro projetos, quatro certificados e currículo já recebidas foram preservadas, sem nova pergunta genérica e sem atribuir ao responsável uma seleção reduzida. A seleção/uso abaixo é **proposta técnica do Codex** para revisão; alternativas não precisam todas aparecer na interface. Código privado/trechos de Reports Registry, dados confidenciais de terceiros e destinatário privado continuam protegidos. Autorização ampla não revoga essas restrições nem aprova automaticamente cada versão produzida.

## Candidatas, cortes e uso proposto

Preparadas **20 candidatas: 16 capturas dos quatro projetos e quatro certificados**. Cada ID abaixo abre a versão WebP exata para revisão local. Projetos têm origem relativa a `public/assets/medias/projects/`; `certificates/` corresponde a `public/assets/medias/certificates/`. Coordenadas dos cortes são pixels do original, `(esquerda, topo, direita, base)`, limites finais exclusivos. Os retângulos de remoção, integridade do original e da matriz saneada constam do manifesto local, sem transcrever valores restritos.

| ID / versão local                                                                                       | Origem relativa                                                  | Corte                 | Saneamento e contexto preservado                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [rr-search](C:/Projects/portfolio-v2/.m2-review/m4-03/candidates/reports-registry/rr-search.webp)       | `reports-registry/1-frontend-react-home-page.png`                | `540, 100, 1380, 625` | Recorte elimina identidade e rodapé; sufixo operacional removido; formulário sem resultado.                      |
| [rr-tracking](C:/Projects/portfolio-v2/.m2-review/m4-03/candidates/reports-registry/rr-tracking.webp)   | `reports-registry/frontend-react-public-tracking.png`            | `710, 100, 1210, 610` | Valores operacionais e proprietário removidos; identidade fora do recorte.                                       |
| [rr-admin](C:/Projects/portfolio-v2/.m2-review/m4-03/candidates/reports-registry/rr-admin.webp)         | `reports-registry/frontend-react-admin-page.png`                 | `280, 232, 1640, 940` | Cabeçalho, saudação e identidade excluídos; badges com contagens removidos.                                      |
| [rr-import](C:/Projects/portfolio-v2/.m2-review/m4-03/candidates/reports-registry/rr-import.webp)       | `reports-registry/frontend-react-equipment-table.png`            | `20, 270, 1880, 475`  | Recorte retém importação Excel e filtros; exclui tabela inteira, total, sessão e identidade.                     |
| [rr-details](C:/Projects/portfolio-v2/.m2-review/m4-03/candidates/reports-registry/rr-details.webp)     | `reports-registry/frontend-react-equipment-details-1.png`        | `290, 160, 1620, 984` | Valores de registro, equipamento, partes, ensaio e calibração removidos; estrutura funcional preservada.         |
| [ac-direct](C:/Projects/portfolio-v2/.m2-review/m4-03/candidates/audience-counter/ac-direct.webp)       | `audience-counter/1-direct-count-view.jpg`                       | `0, 4, 1080, 2132`    | Retira barra inferior do sistema; preserva crédito e interface autêntica. Contagens são exemplos, não adoção.    |
| [ac-rows](C:/Projects/portfolio-v2/.m2-review/m4-03/candidates/audience-counter/ac-rows.webp)           | `audience-counter/counting-by-rows-view.jpg`                     | `0, 4, 1080, 2132`    | Retira barras do sistema; preserva modo, controles e crédito. Contagens de exemplo.                              |
| [ac-landscape](C:/Projects/portfolio-v2/.m2-review/m4-03/candidates/audience-counter/ac-landscape.webp) | `audience-counter/direct-count-landscape-view-1.png`             | `0, 65, 2400, 1004`   | Retira barras superior/inferior do sistema; preserva contador, controles e crédito.                              |
| [wm-admin](C:/Projects/portfolio-v2/.m2-review/m4-03/candidates/webmatriculas/wm-admin.webp)            | `webmatriculas/frontend-react-admin-page.png`                    | `0, 120, 1050, 820`   | Recorte exclui email de sessão, rodapé e ilustração; preserva navegação funcional. Mocks declarados.             |
| [wm-classes](C:/Projects/portfolio-v2/.m2-review/m4-03/candidates/webmatriculas/wm-classes.webp)        | `webmatriculas/frontend-react-classes.png`                       | `320, 80, 1760, 890`  | Área de turmas integral sem sessão/rodapé. Nomes de turmas demonstrativos preservados.                           |
| [wm-students](C:/Projects/portfolio-v2/.m2-review/m4-03/candidates/webmatriculas/wm-students.webp)      | `webmatriculas/frontend-react-students.png`                      | `490, 180, 1730, 880` | Nove cards: nomes e identificadores/datas de mocks removidos; quarta linha e sessão fora do recorte.             |
| [wm-print](C:/Projects/portfolio-v2/.m2-review/m4-03/candidates/webmatriculas/wm-print.webp)            | `webmatriculas/frontend-react-classes-pdf-printing.png`          | `456, 30, 1065, 825`  | Somente página do relatório; corpo com matrículas/nomes de mocks removido. Navegador/sessão/URL fora do recorte. |
| [ds-catalog](C:/Projects/portfolio-v2/.m2-review/m4-03/candidates/dscommerce/ds-catalog.webp)           | `dscommerce/1-frontend-react-home-page.png`                      | `455, 132, 1447, 752` | Duas linhas completas de produtos de demonstração; sem terceira linha parcial. Curso educacional.                |
| [ds-cart](C:/Projects/portfolio-v2/.m2-review/m4-03/candidates/dscommerce/ds-cart.webp)                 | `dscommerce/frontend-react-cart-page.png`                        | `455, 75, 1455, 420`  | Carrinho e controles autênticos; valores de demonstração não comprovam vendas ou pagamentos.                     |
| [ds-admin](C:/Projects/portfolio-v2/.m2-review/m4-03/candidates/dscommerce/ds-admin.webp)               | `dscommerce/frontend-react-admin-page.png`                       | `455, 0, 1450, 160`   | Email e nome de sessão de mock removidos; área funcional pouco informativa.                                      |
| [ds-product](C:/Projects/portfolio-v2/.m2-review/m4-03/candidates/dscommerce/ds-product.webp)           | `dscommerce/frontend-react-product-details.png`                  | `455, 75, 1455, 640`  | Detalhe e controles do produto demonstrativo, sem inferir integração de pagamentos.                              |
| [cert-modern](C:/Projects/portfolio-v2/.m2-review/m4-03/candidates/certificates/cert-modern.webp)       | `certificates/1-modern-developer-professional-qualification.png` | `integral`            | Linha inteira de CPF removida; título/data/código de validação e autoria preservados.                            |
| [cert-react](C:/Projects/portfolio-v2/.m2-review/m4-03/candidates/certificates/cert-react.webp)         | `certificates/2-react.png`                                       | `integral`            | Linha inteira de CPF removida; título/data/código de validação e autoria preservados.                            |
| [cert-spring](C:/Projects/portfolio-v2/.m2-review/m4-03/candidates/certificates/cert-spring.webp)       | `certificates/3-spring.png`                                      | `integral`            | Linha inteira de CPF removida; título/data/código de validação e autoria preservados.                            |
| [cert-native](C:/Projects/portfolio-v2/.m2-review/m4-03/candidates/certificates/cert-native.webp)       | `certificates/4-react-native.jpg`                                | `integral`            | Sem CPF observado; conteúdo completo e URL de credencial preservados.                                            |

Proposta para os slots existentes, sujeita a revisão exata:

- **Reports Registry:** `rr-search` para capa; `rr-import` para ilustrar a importação no case já existente. `rr-admin`, `rr-tracking` e `rr-details` são alternativas, sem nova galeria. As duas últimas exigem muitas remoções e têm menor valor visual; máscaras podem alcançar pontas de rótulos para não deixar fragmentos dos valores. Contexto de consulta/detalhe e ações permanecem reconhecíveis; nenhum conteúdo foi reconstituído ou substituído por dados inventados.
- **Audience-Counter:** `ac-landscape` como proposta de capa horizontal; `ac-direct`/`ac-rows` como alternativas portrait autênticas. Crédito do desenvolvedor preservado. Números e datas são registros de exemplo presentes nas telas; não métricas de adoção. Não preparar moldura de aparelho, montagem fictícia ou controles novos.
- **Web Matrículas:** `wm-classes` como proposta de capa; `wm-admin` alternativa sem a ilustração, sessão ou rodapé. `wm-students`/`wm-print` preservam a estrutura funcional com remoções amplas; são alternativas de baixo interesse visual após saneamento. O responsável declarou mocks: identificadores plausíveis foram tratados preventivamente, **sem afirmar que eram dados reais**.
- **DS Commerce:** `ds-catalog` como proposta de capa, com duas linhas completas; `ds-product`/`ds-cart` alternativas do fluxo educacional. `ds-admin` tem pouca informação após remover a sessão de mock. Preços/produtos não são vendas e o botão de finalizar pedido não comprova integração de pagamento. Imagens de produto permanecem no contexto da captura do curso, sem atribuir autoria original da solução ou das fotografias ao desenvolvedor.
- **Certificados:** quatro imagens integrais como comprovação opcional das formações existentes, sem substituir seus textos. A linha inteira de CPF dos três DevSuperior foi removida fisicamente dos pixels, preservando nome/autoria, título, data, assinatura/emissor e evidência de validação. Udemy mantém o título literal da credencial; o rótulo editorial resumido aprovado da aplicação não foi alterado. Validação manual individual positiva informada em M4-01 é reaproveitada como relato, sem nova consulta ao emissor ou declaração de certificação profissional independente.

`frontend-react-printing-pdf-reports.png` de Reports Registry permanece **bloqueado, sem derivada pública produzida**: é captura de documento/laudo com identidade, dados de terceiros e informações operacionais. A restrição expressa de documentos/confidencialidade prevalece. Não se atribui essa decisão ao responsável como revogação da autorização de uso; é um limite técnico desta proposta. Integridade, dimensões 1920×1080 e 315497 bytes foram registradas no manifesto. Backend/Postman/IDE, vídeos e materiais de outros projetos não foram ampliados para esta seleção nem alegados inspecionados.

## Relação com Stitch e proporções

Reconsultados `code.html`, `DESIGN.md` e `screen.png` dos dois ZIPs em cópias locais de referência; arquivos originais preservados. HTML web usa `aspect-video` nos cards; mobile usa altura de imagem e `object-cover`. DESIGN.md propõe cards com raio de 1,5rem e mídia interna de 0,75rem. As capturas reduzidas 448×1600 / 151×1600 orientam composição qualitativa, sem referência pixel a pixel.

Proposta de integração posterior: quadro comum 16:9 nos cards com **contain** para capturas funcionais, preservando proporção e sem cortar texto/controles para imitar o `object-cover` dos exemplos fictícios. `wm-classes` já é 16:9; `rr-search` e `ds-catalog` são 16:10; `ac-landscape` mantém formato mais largo. Pequenas faixas neutras do quadro seriam preferíveis a esticar ou eliminar controles. Portrait do app deve ser contido integralmente se escolhido, sem recorte arbitrário para preencher largura. Panorama `rr-import`, detalhes e certificados devem preservar sua razão natural em eventual posição já prevista, sem abrir galeria, modal ou página. Nenhuma dessas decisões foi implementada no CSS/componentes; Work deve aprovar arquivo/uso/enquadramento exatos.

Não se recoloriram screenshots para torná-las dark: as telas autênticas conservam as interfaces reais, enquanto os tokens do portfólio ficam intactos. A apresentação de perfil segue textual; foto não fornecida, sem retrato ou placeholder.

## Otimização e integridade

Ferramentas já disponíveis: Python do runtime empacotado, Pillow **12.3.0** com libwebp **1.6.0** e pypdf para leitura do currículo. Nenhuma dependência instalada, package/lockfile alterado ou IA generativa usada. Cortes e remoções determinísticos; nenhuma nova imagem ou texto inventado dentro das capturas.

Processo: decodificar original → criar raster RGB novo sem metadados → sobrescrever irreversivelmente os pixels restritos com preenchimento opaco → recortar → salvar matriz PNG saneada → reduzir proporcionalmente com Lanczos, sem ampliar → codificar WebP. Não há camadas, alpha escondido, CSS, blur, miniatura embutida, EXIF/XMP/ICC ou frames adicionais que guardem a informação removida. As matrizes PNG não contêm originais sob as máscaras. Não foram geradas imagens de diferença que permitam recuperar dados.

Limite de largura 1440 px para capturas web largas, 720 px para app portrait; imagens menores não ampliadas. Certificados mantidos nas dimensões originais para conservar texto/código. **19 codificações WebP lossless depois do redimensionamento**; isso não significa que o redimensionamento seja pixel a pixel igual ao original. Udemy é WebP qualidade 94, dimensões preservadas, cotejado visualmente com o original. Não se impôs meta arbitrária de peso em detrimento da leitura.

| ID           | Original: pixels / bytes | Candidata WebP: pixels / bytes | Redução total |
| ------------ | ------------------------ | ------------------------------ | ------------- |
| rr-search    | 1920×1080 / 62452        | 840×525 / 14222                | 77.23%        |
| rr-tracking  | 1920×1080 / 70713        | 500×510 / 10366                | 85.34%        |
| rr-admin     | 1920×1080 / 121471       | 1360×708 / 20580               | 83.06%        |
| rr-import    | 1920×1080 / 209829       | 1440×159 / 31902               | 84.8%         |
| rr-details   | 1920×1080 / 192245       | 1330×824 / 23100               | 87.98%        |
| ac-direct    | 1080×2263 / 187706       | 720×1419 / 117164              | 37.58%        |
| ac-rows      | 1080×2263 / 231969       | 720×1419 / 160342              | 30.88%        |
| ac-landscape | 2400×1080 / 75762        | 1440×563 / 33490               | 55.8%         |
| wm-admin     | 1920×1080 / 107227       | 1050×700 / 8960                | 91.64%        |
| wm-classes   | 1920×1080 / 107401       | 1440×810 / 22540               | 79.01%        |
| wm-students  | 1920×1080 / 181650       | 1240×700 / 11884               | 93.46%        |
| wm-print     | 1920×1080 / 166955       | 609×795 / 2760                 | 98.35%        |
| ds-catalog   | 1920×1080 / 170412       | 992×620 / 87470                | 48.67%        |
| ds-cart      | 1920×1080 / 34961        | 1000×345 / 11718               | 66.48%        |
| ds-admin     | 1920×1080 / 25743        | 995×160 / 5356                 | 79.19%        |
| ds-product   | 1920×1080 / 86398        | 1000×565 / 45396               | 47.46%        |
| cert-modern  | 2339×1653 / 172768       | 2339×1653 / 96344              | 44.24%        |
| cert-react   | 2339×1653 / 160787       | 2339×1653 / 88842              | 44.75%        |
| cert-spring  | 2339×1653 / 162111       | 2339×1653 / 90996              | 43.87%        |
| cert-native  | 1600×1190 / 246166       | 1600×1190 / 66314              | 73.06%        |

Totais das **20 fontes selecionadas**, excluídos currículo e laudo bloqueado: **2774726 → 949746 bytes (65.77% de redução)**. A economia inclui recorte, remoção de conteúdo, redução dimensional e formato; não é benchmark isolado do codec nem ganho medido da aplicação, que ainda não consome estes arquivos. Matrizes PNG e comparações são artefatos de revisão, não assets de produção.

Originais foram reabertos somente em leitura; SHA-256 bruto e OID Git `blob` (sem filtros) registrados por arquivo. Os quatro blobs dos certificados e o do currículo foram comparados com os IDs documentados em M4-01, com coincidência. Para as demais capturas, hashes identificam as cópias locais inspecionadas/reaproveitadas, sem alegar nova validação da árvore remota. Matrizes saneadas foram comparadas com o original recortado: pixels fora das áreas declaradas permanecem idênticos antes do resize. Uniformidade dos preenchimentos e reabertura dos arquivos foram verificadas; 19 WebP decodificam exatamente para os pixels RGB preparados para codificação. Essa prova estrutural complementa, mas não substitui, a inspeção visual e revisão humana de suficiência das áreas removidas.

### Assinaturas das versões candidatas

SHA-256 dos bytes brutos finais; aprovação posterior deve identificar estas versões ou exigir nova preparação/revisão se houver alteração.

| ID           | SHA-256 WebP                                                       |
| ------------ | ------------------------------------------------------------------ |
| rr-search    | `45f49435c739313a194eee70cb1cf8f98aa1258c7844002d8cf232f9ae6601c2` |
| rr-tracking  | `bba3f6b30beccd97a19798f9439dccfa0dde0f32d7404dd796ed9414f783474a` |
| rr-admin     | `e1b5e68ba83bc6e8cd9d210dfab3504e8417d6a28b2a39a433828b6c6b1fe0c3` |
| rr-import    | `d3809295dfc387004f8bc45c7694640b3c3fa05b9f24c42787fa1d4fece18e3a` |
| rr-details   | `21be311b80d122758f851a13a27a9e369bd52c2cf592dcd99a233e202db58274` |
| ac-direct    | `16104576fd9787fa6a69caaab8c7d04d59e04b743f862248e711e6f09a86396e` |
| ac-rows      | `5fcf2eaae65ab9946e883af6ab7e9f2af1ff91a57748c5aadffa56a8327a68e5` |
| ac-landscape | `33f2349ad13f2b4200c878f8c7e4686494ce43d261f3844d87bb178f9aa3b202` |
| wm-admin     | `ac13362c35ca28ea0882e57d62ac765da1d6e783bc24e91fac7eee77c3c108a6` |
| wm-classes   | `aa0d40054ab6f08cdc0046e8ab483e3d415b14ae109a0e2e244a5ebaf58f3293` |
| wm-students  | `a0a0065e7d13694ebd453a05737e6bb136e0293990e0c941b71898445ba24799` |
| wm-print     | `1a7aa5209555209857d0a5b6b10f371267e9a2636b06b7b61be80f89b1cb2eee` |
| ds-catalog   | `2693887e33dfc3ce56537f6509b6228f992b9cb82adc7f9dbc3e6782901da5c7` |
| ds-cart      | `416f934e3730a47f0f8f382f80d83311d8981f44d9ab93b726c5dcda33a0f145` |
| ds-admin     | `577e86d2e58390555af4771a985cdd91e157f5e9a3eed4fcdd3c131859937dfa` |
| ds-product   | `7d83d47ca8c8e0a1f85675613c344577230b42755a8388193880f46de75a7b74` |
| cert-modern  | `b31d84cb2ebd9cc229176f435b42fe9cd982616b3071147ce49162c177eb0ba4` |
| cert-react   | `9ee404f262032d38b9edc11a31d759eaa5a4378ef87e3f53bf35fdae28b1f362` |
| cert-spring  | `28e4d933b7076a250c66f54d7efee48e4676dd199b50dfcd58ff5a1a6f77994a` |
| cert-native  | `6654381a23441ecb7cd7341da4f83cc07e1c6598acea2b03c4a100bbb827f466` |

Manifesto completo (origem, SHA-256/OID original, cortes, máscaras sem valores sensíveis, dimensões, bytes, hashes PNG/WebP e codec): [manifest.json](C:/Projects/portfolio-v2/.m2-review/m4-03/manifest.json). SHA-256 do manifesto: `42a9f1f0c14c4c15d313c06731dbf956cd792249ff1be5ca2cb664eca6e07f9c`. Não é registro de aprovação.

## Comparações e pacote local

Todos os 20 resultados foram abertos para inspeção visual e comparados aos originais da coleta nesta preparação. Título/data/validação dos certificados e crédito do app continuaram legíveis; nenhuma identidade empresarial, dado de sessão ou valor operacional de Reports Registry foi observado nas candidatas finais. A primeira rodada deixou fragmentos nas bordas de máscaras; esses rascunhos foram sobrescritos após ampliar as regiões, e as candidatas finais foram novamente inspecionadas. O manifesto e hashes acima referem-se somente à versão corrigida.

- [Prancha das 20 versões saneadas](C:/Projects/portfolio-v2/.m2-review/m4-03/safe-review-sheet.png).
- [Pacote de revisão — somente 20 WebP, manifesto e prancha](C:/Projects/portfolio-v2/.m2-review/m4-03/safe-candidates-review.zip), 1439179 bytes, SHA-256 `9f07722bfa0988a8a73359d520eee3f1668fa64cf50443cb5fd3ce0258c3d824`. ZIP validado, sem originais, currículo ou laudo bloqueado.
- Comparações individuais: `.m2-review/m4-03/comparisons/<ID>.png`, lado a lado **raster já saneado antes da codificação × WebP final**. Exemplos: [Reports Registry](C:/Projects/portfolio-v2/.m2-review/m4-03/comparisons/rr-search.png), [app](C:/Projects/portfolio-v2/.m2-review/m4-03/comparisons/ac-landscape.png), [Web Matrículas](C:/Projects/portfolio-v2/.m2-review/m4-03/comparisons/wm-classes.png), [DS Commerce](C:/Projects/portfolio-v2/.m2-review/m4-03/comparisons/ds-catalog.png), [certificado](C:/Projects/portfolio-v2/.m2-review/m4-03/comparisons/cert-modern.png). Comparações não incluem valores removidos nem o original sensível.
- Matrizes PNG saneadas em `.m2-review/m4-03/sanitized-masters/<grupo>/<ID>.png`; resultados estruturais em [validation.json](C:/Projects/portfolio-v2/.m2-review/m4-03/validation.json).

Somente artefatos seguros são vinculados para revisão. Originais com restrições continuam na inspeção local ignorada, fora do pacote, da aplicação e da documentação pública. O pequeno texto das pranchas não substitui abrir o arquivo individual na resolução indicada.

## Currículo — proposta editorial precisa, sem nova versão pública

Original autorizado lido sem alteração: uma página, 105229 bytes, OID `0b76a3c6e5b64ce6ed79388d3b962e888e93511d`, SHA-256 `0a1e6985c2451c6a0548172c2ba391f40df661c6b60bdb47ce5e2a037a1bb62b`. Leitura auxiliar confirmou nove anotações e metadados de produção/criação; inspeção visual/render anterior de M4-01 reaproveitada, com a limitação de substituição de fontes já registrada. Nenhum novo PDF ou render público foi produzido, nem linkado o PDF bruto. Não se transcreve o conteúdo integral, contato restrito, dados pessoais ou identidade de terceiros.

Proposta para aprovação editorial do responsável/Work **antes** de produzir uma versão pública:

1. **Cabeçalho e contatos:** usar nome profissional Cleriston Pereira e cargo Full Stack & Mobile Developer já aprovados. Remover destinatário privado, telefone, dados pessoais de localização/nascimento/nacionalidade e perfis não autorizados tanto do texto visível quanto de hyperlinks/anotações. Manter somente os dois perfis GitHub/LinkedIn autorizados; não prometer mensagens abertas.
2. **Resumo/disponibilidade:** reaproveitar os fatos/textos aprovados em M4-02 para autodidatismo, estudo/desenvolvimento desde 2019 e método. Disponibilidade: “Disponível para freelance; trabalho remoto somente em meio período.” / “Available for freelance projects; remote work on a part-time basis only.” Não calcular anos profissionais ou transportar senioridade de outra atividade para desenvolvimento.
3. **Experiência anterior:** preservar o original privado como fonte. Propor omitir da nova versão pública o bloco de outra atividade, vínculos, datas e resultados que não foram reconfirmados para este posicionamento. Isso é proposta de recorte editorial, não afirmação de que o histórico é falso nem edição silenciosa dele. Se o responsável preferir mantê-lo, a redação/cronologia exatas desse bloco precisam de aprovação específica antes de produção; não inferir continuidade ou vínculo atual.
4. **Formações:** propor os quatro títulos/instituições e ordem já aprovados, com apenas conclusões documentadas 2023/2022/2021/2023. Omitir intervalos de início não reconfirmados e a cronologia inconsistente identificada em M4-01; não inverter datas por suposição. Incluir a formação React Native somente com nome resumido/instituição/ano já confirmados. Certificados não são certificações profissionais independentes.
5. **Tecnologias e alegações:** restringir ao inventário reconciliado/aprovado, distinguindo curso de projeto próprio, assistência parcial e estado não implantado/sem pagamento. Omitir níveis de idioma, domínio, resultados e outras alegações opcionais que não tenham sido reconfirmadas. Não importar dados ou experiência por simples presença no PDF antigo.
6. **Arquivo público futuro:** produzir a partir do texto editorial aprovado, com fonte incorporada, texto selecionável/ordem de leitura e links públicos conferidos. Remover/recriar as nove anotações em vez de transportar contatos antigos; limpar metadados pessoais, ações/attachments e camadas ocultas. Reabrir e extrair texto/links do PDF final para comprovar ausência do destinatário e demais dados, além de renderizar/inspecionar cada página. Não usar retângulos visuais sobre o PDF original. Aprovar versão exata e eventual PT/EN antes do download público.

Nenhum dado novo é pedido para viabilizar alegações opcionais: o recorte de omissão acima é uma proposta concreta, ainda sem aprovação editorial. Autorização de uso já recebida permanece válida; não equivale a aprovação de uma atualização ainda não produzida. Foto permanece opcional e não fornecida.

## Verificações e reprodução desta unidade

```powershell
$pythonRuntime = 'C:/Users/cmelo/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/python.exe'
& $pythonRuntime .m2-review/m4-03/tools/prepare_safe_media.py
& $pythonRuntime .m2-review/m4-03/tools/validate_safe_media.py
node node_modules/prettier/bin/prettier.cjs --write PROJECT_STATUS.md
node node_modules/prettier/bin/prettier.cjs --ignore-path NUL --write docs/M4_03_HANDOFF.md
npm run format:check
git diff --check
git check-ignore .m2-review/m4-03/manifest.json .m2-review/m4-03/safe-candidates-review.zip
```

Processadores e saídas ficam ignorados; nenhuma biblioteca adicionada ao projeto. Preparação/validação passaram: 20 imagens decodificáveis; hashes, dimensões/bytes, remoção efetiva nos rasters, ausência de metadados/frames ocultos, invariantes de pixels e integridade das fontes conferidos. Todos os arquivos versionados, exceto a atualização autorizada de PROJECT_STATUS.md, foram protegidos por comparação SHA-256 bruto, incluindo README/PRD/plano/exports/código/contratos/dados/dependências. Sem alteração de assets versionáveis ou staging.

Formatação dos dois documentos, `npm run format:check` e `git diff --check` passam. Não se executaram testes, typecheck, lint, build ou smoke de integração nesta unidade sem alteração da aplicação. Checks de M4-02 permanecem históricos, não são apresentados como nova execução nem prova de carregamento de mídias ainda não integradas. Scripts de preparação/validação de artefatos não são infraestrutura de testes da aplicação.

## Critérios individuais, responsáveis e gates

| Critério                                                                      | Situação desta preparação                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Git, branch dedicada, alterações existentes preservadas                       | Conferido; baseline b4c15e3; somente status/handoff são diff documental. README com sinalização anterior e bytes preservados; staging vazio.                                                                                  |
| Autorizações herdadas e restrições específicas                                | Preservadas; nenhuma nova pergunta genérica. Documentação da coleta não duplicada; exceção do laudo privado explicitada sem atribuir seleção reduzida ao responsável.                                                         |
| Origem/integridade e reaproveitamento                                         | Fontes locais M4-01 reaproveitadas; hashes/OIDs e medições por arquivo no manifesto. Nenhum arquivo antigo editado ou novo download.                                                                                          |
| Saneamento efetivo das candidatas                                             | Executado em pixels RGB antes do encoding, sem recuperação por camadas/metadados/alpha; inspeção visual final realizada. Work ainda precisa aprovar suficiência e versões exatas.                                             |
| Contexto, autoria e mocks                                                     | Mantidos nos limites dos recortes; sem conteúdo fictício, código privado ou inferência de dados reais. Credencial/autoria preservadas; candidatas excessivamente ocultadas explicitadas como alternativas de menor utilidade. |
| Otimização e comparação visual                                                | 20 versões, medições/hashes acima; PNG saneado e WebP comparados, sem forçar proporção ou peso. Revisão de legibilidade dentro dos componentes ainda pendente.                                                                |
| Currículo e foto                                                              | PDF original fora da aplicação, sem versão pública; proposta editorial acima aguardando aprovação. Foto ausente, apresentação textual preservada.                                                                             |
| Aprovação técnica das versões exatas                                          | **Pendente — Work/responsável**, por IDs/hashes e usos propostos antes de integrar. Autorização de uso não é esse aceite.                                                                                                     |
| Integração aos componentes/dados/assets                                       | **Não executada**, conforme escopo. Posterior unidade M4-03, após aceite das versões. Não marcar `mediaVersion` confirmado agora.                                                                                             |
| Alt PT/EN, dimensões reservadas, carregamento e rede/build / e /portfolio-v2/ | **Pendentes da integração posterior**; verificar src/srcset/path, ausência de dependência raw externa, layout, leitura, foco/idiomas e seleção final. Nenhuma prova atual de rede/build é alegada.                            |
| Fechamento de M4-03 e próximos lotes                                          | **Não concluída**; nova revisão própria necessária. M4-04, serviços, Formspree/contato real e publicação não iniciados.                                                                                                       |

Decisões para esta revisão: aprovar ou corrigir **versões por ID/hash e uso/enquadramento proposto**, sem precisar revogar as demais autorizações; aprovar/ajustar a proposta editorial de saneamento/atualização do currículo antes de produzi-lo. Se uma candidata mudar após revisão, recalcular hash e revisar a versão nova antes da integração. M4-03 só poderá fechar após integrar/validar os critérios futuros do plano.

Conventional Commit sugerido para o **diff documental efetivo**: `docs(media): prepare M4-03 safe candidate review and integration gates`.
