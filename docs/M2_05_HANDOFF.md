# Handoff — M2-05 — Fundação i18n

Data: 14/10/2026. Estado: **em execução — implementada e verificada localmente, aguardando revisão própria do Work**. Nenhuma autoaprovação, staging, commit, push, merge ou deploy; M2 permanece aberto. M2-06 e tarefas posteriores não foram iniciadas.

## Contexto e fontes

Na entrada: árvore limpa, branch `chore/m2-technical-foundation`, HEAD `d59b827eb7ec8242527c603e3d6f1e0a61d386d6`; origin configurado para `https://github.com/CleristonMP/portfolio-v2.git`. M2-03 foi aprovada/commitada em `73e5f7d`; M2-04, também aprovada, em `d59b827`. PROJECT_STATUS.md agora distingue o estado histórico dos handoffs e os pareceres/commits posteriores. Aprovações anteriores não cobrem esta entrega. Sem consulta remota adicional.

Lidos workflow, status, plano, PRD v2.3 e handoffs M2-03/M2-04. Nenhum AGENTS.md encontrado no repositório/ancestrais consultados. Consultados DESIGN.md, code.html e screen.png dos dois ZIPs Stitch, extraídos somente para `.m2-review/m2-05/`. Referências originais intactas; Figma não editado/sincronizado. Paleta, fontes e composição mantidas, sem refinamentos de design.

## Inventário e localização

| Área anterior | Tratamento nesta entrega |
|---|---|
| Hero: Criando/Building, frase em gradiente, domínios e instrução de rolagem | heroIntro, heroAccent, heroDomains, scrollHint no dicionário; frase anterior preservada em cada idioma. WEB/MOBILE/BACKEND mantidos como vocabulário técnico compartilhado. |
| Kickers PORTFOLIO/EXPERTISE/PROFILE/EDUCATION/CONTACT | kickers tipados pelos IDs de seção; versões PT/EN. IDs/âncoras não traduzidos. |
| Sobre: Engineering with purpose., METHOD / 01 e método condicional | aboutAccent, methodLabel e methodText localizados. |
| Contato: START A CONVERSATION, aviso e estado condicional | conversationLabel, contactNotice e contactStatus; pendências preservadas, sem ativar contato novo. |
| Footer: ↑ TOP | backToTop localizado; marca, ano dinâmico e texto já traduzido mantidos. |
| Navigation, Change language, Open menu e códigos EN/PT no Header | accessibility.navigation/changeLanguage/openMenu/closeMenu e languageSwitchCode; nome do menu acompanha seu estado atual. |
| Alt genérico em inglês para as quatro imagens | projectImageAlt com placeholder tipado como texto; substituição segura pelo nome oficial em React. |
| Skills: Mobile, Data, Software Architecture | skillLabels tipado por SkillId; português nos rótulos genéricos, nomes Java/Spring Boot/React/TypeScript/Android/JavaScript/Node.js/SQL intactos. |
| Projetos/categorias/descrições e cursos | Categorias/descrições já bilíngues mantidas; títulos oficiais, instituições e stacks preservados, sem alterar dados/verificação editorial. |
| Título e descrição da página | metadata tipado PT/EN; lang pt-BR/en sincronizado. HTML com título/descrição/idioma PT-BR coerentes como fallback. |

Chaves anteriores foram preservadas, inclusive as reservadas ainda sem uso visível. As novas chaves exigidas são explícitas no contrato; dicionários têm paridade recursiva e nenhum texto obrigatório vazio. Não foi acrescentado conteúdo editorial, disponibilidade, stack, URL ou credencial.

## Arquivos e decisões

- `src/content/contracts.ts`: completa Translation e restringe SkillId para garantir os rótulos dos seis registros. Demais contratos editoriais preservados.
- `src/i18n/translations.ts`: textos atuais, kickers, nomes acessíveis, alt, rótulos genéricos e metadados centralizados.
- `src/i18n/language.ts`: valida pt/en, leitura/persistência protegidas e sincronização documental. O acesso ao getter localStorage fica dentro de try/catch, assim como getItem/setItem. Sem depender de navigator.language.
- `src/i18n/useLanguage.ts`: inicialização lazy pela preferência, efeito para metadados/persistência e alternância funcional. Estado em memória continua utilizável após erro de armazenamento.
- `src/App.tsx`: usa o hook; mantém o estado e comportamento original do menu.
- `src/components/layout/Header.tsx`, `Footer.tsx` e as seis seções em `src/sections/`: consomem traduções, sem mudar classes, estrutura ou adicionar controles.
- `index.html`: título estático PT-BR coerente; descrição PT-BR e carregamento das fontes preservados.
- `scripts/lib/load-project-module.mjs`: carregador TS em memória extraído do script anterior para reutilização nas duas verificações, sem runner/dependência nova.
- `scripts/verify-content.mjs`: preserva verificações de IDs, dados desconhecidos, links privados/opcionais, seções e contatos incompletos. Comparação opcional com baseline agora compara estrutura, excluindo textos/alt/aria-label intencionalmente localizados; mantém o desconto histórico das duas stacks não confirmadas de M2-03.
- `scripts/verify-i18n.mjs`: paridade/nonempty (incluindo fixtures negativas), preferências válidas/inválidas, exceções de storage, metadados, fallback HTML e renderização PT/EN de seções/controles/alt/nomes oficiais.
- `scripts/fixtures/i18n-smoke.html`: fixture de verificação local em navegador; prepara apenas a chave de idioma e permite montar a aplicação real com exceções simuladas. Não é componente/fluxo do produto, não entra no build de index.html, não instala infraestrutura de M2-07.
- `PROJECT_STATUS.md` e `docs/M2_05_HANDOFF.md`: desfecho de M2-04 e evidências/gate de M2-05.

Persistência: chave `portfolio-v2.language`; únicos valores aceitos pela aplicação são `pt` e `en`. Ausente, fr, PT, pt-BR, en-US, valores serializados indevidos e falha de leitura resultam em pt. O efeito grava somente o idioma validado, normalizando preferência inválida para pt quando a escrita é possível. A fixture escreve deliberadamente fr para testar esse caso; a aplicação não persiste fr. Nenhum outro dado é armazenado. Falha de escrita mantém a escolha somente em memória; reload sem persistência pode retornar a PT-BR, conforme esperado.

## Critérios individuais

| Critério | Resultado local / evidência |
|---|---|
| Textos e contratos PT/EN completos | Atendido para a interface atual: inventário acima, tipos explícitos, paridade recursiva e strings obrigatórias não vazias passaram. |
| Textos fixos, nomes acessíveis e alt | Atendido: seções renderizadas nos dois idiomas; controles de idioma/menu/nav e alt conferidos em script e navegador. Nomes oficiais preservados. |
| PT-BR padrão e EN selecionável | Atendido: preferência ausente → PT; sequência PT → EN → PT observada. |
| Persistência válida e inválida | Atendido: EN persistido na carga inicial/reload; PT após reload; fr → PT-BR. Testes cobrem também demais valores inválidos. |
| Falhas de armazenamento | Atendido: exceções no getter, getItem e setItem testadas em Node e na aplicação real via fixture; renderização, alternância e metadados continuaram funcionando. |
| lang/title/description e fallback | Atendido: pt-BR/en, títulos e descrições corretos na carga inicial e alternância, inclusive EN persistido; HTML estático PT-BR conferido. |
| Preservação de interface e escopo | Atendido no smoke de 390/1280 PT/EN e comparação estrutural: âncoras/datasets/styles mantidos; menu só recebeu nomes localizados. Sem aria-expanded, Escape, foco gerenciado ou outros itens M2-06. |
| Checks técnicos | Resultados e comandos abaixo; sem dependências ou infraestrutura Vitest/Testing Library/CI novas. |
| Revisão Work | **Pendente**: exige novo parecer e snapshot; implementação não aprovada/commitada e milestone não concluído. |

## Comandos e resultados

Runtime direto Node 22.16.0/npm 10.9.2, com PATH somente do processo conforme README:

```powershell
$env:PATH = 'C:\Program Files\nodejs;' + $env:PATH
npm run typecheck
npm run lint
npm run format
npm run build
node scripts/verify-content.mjs
node scripts/verify-i18n.mjs
node scripts/verify-content.mjs --baseline=cd08a2c
git diff --check
```

Typecheck, lint e format passaram. O primeiro build em sandbox falhou com EPERM em realpath de lucide-react, a restrição de filesystem já conhecida. A reexecução autorizada fora dessa restrição passou: Vite 6.4.4, 1597 módulos; CSS 16,05 kB (4,30 gzip), JS 247,86 kB (76,95 gzip). CSS compilado mantém o mesmo nome/hash `index-Cx8HXLoB.css` de M2-04. Aviso Tailwind preexistente permanece. Nenhuma configuração global foi alterada para resolver o ambiente.

Verificações de conteúdo e i18n passaram, assim como a comparação estrutural opcional com cd08a2c, `npm run format:check` e git diff --check. Todos os checks finais encerraram com retorno 0; o build passou na reexecução autorizada. A comparação estrutural não alega igualdade dos textos que este lote deve localizar; as invariantes editoriais continuam verificadas. O verificador de i18n usa o compilador TypeScript e renderização React existentes, com Node assert; não simula eventos React com runner novo. A alternância real e os efeitos foram observados no navegador.

## Smoke reproduzível e evidências

Servidor: `node node_modules/vite/bin/vite.js --host 127.0.0.1 --port 5175 --strictPort`. Página: `http://127.0.0.1:5175/portfolio/`. Fixture: `http://127.0.0.1:5175/portfolio/scripts/fixtures/i18n-smoke.html`. Servidor local autorizado fora da restrição conhecida de sockets; nenhuma publicação.

1. Na fixture, escolher Preferência ausente e Preparar e abrir aplicação: abre a página real em PT-BR.
2. Alternar PT → EN → PT. Conferir hero, kickers, método, contato, footer, skills, labels e alt, além de document.documentElement.lang, document.title e meta description.
3. Selecionar EN, recarregar: permanece EN; selecionar PT, recarregar: permanece PT.
4. Na fixture, escolher Preferência EN válida e Preparar e abrir aplicação: carga inicial já em EN, metadados sincronizados. Escolher Preferência inválida no mesmo fluxo: carga inicial PT-BR.
5. Para Falha na leitura, Falha na escrita e Falha no acesso ao storage: abrir/recarregar a fixture para restaurar o contexto, selecionar cenário e Montar aplicação com falha simulada. A fixture monta o mesmo src/main.tsx, com getter/métodos que lançam DOMException; apenas naquele documento. Alternar PT → EN → PT e conferir interface/metadados. `fixture-report` registra contadores e valor efetivamente persistido; recarregar/navegar desfaz a simulação.
6. Repetir a inspeção de layout em 1280×900 e 390×844 nos dois idiomas. Em mobile abrir/fechar menu, inclusive mudar idioma com menu aberto: nomes Abrir/Fechar menu e Open/Close menu acompanham o estado; comportamento original mantido.

Executado no Edge: todos os cenários acima. Na falha de leitura, ocorreram duas exceções de leitura na inicialização StrictMode e alternância continuou persistindo pt/en. Na falha de escrita, contador avançou de duas para quatro exceções em PT → EN → PT, sem valor persistido, com metadados/UI corretos. Na falha do getter, contador avançou de quatro para seis exceções, igualmente sem interromper a UI. Contagens são observações desta execução, não requisito de implementação. Ao final, storage normal restaurado por navegação, preferência PT válida e override de viewport restaurado.

Sem overflow horizontal nas quatro combinações de largura/idioma. As quatro imagens preexistentes carregaram nas capturas finais; nomes oficiais dos quatro projetos/quatro cursos, instituições e tecnologias mantidos. Manrope/Inter computadas, tokens, gradientes e composição preservados. Textos traduzidos podem produzir quebras de linha naturais diferentes; nenhum CSS foi alterado para forçar equivalência.

Capturas e evidências locais transitórias em `.m2-review/m2-05/`:

- `desktop-pt.png`, `desktop-en.png`, `mobile-pt.png`, `mobile-en.png`.
- `browser-evidence.json`: idioma, título, descrição, labels, alt, dimensões/overflow e resultados dos cenários de storage.

Esses arquivos ficam fora do commit. A fixture versionável permite reproduzir os cenários sem ferramentas novas; suas opções/falhas não pertencem à interface de produção. Conferência binária: **33 arquivos rastreados fora das alterações autorizadas permanecem idênticos ao HEAD**, incluindo CSS/tokens/Tailwind, dados editoriais, dependências/lockfile, TS/Vite, PRDs, ZIPs e handoffs anteriores. O build contém somente index.html, assets/index-Cx8HXLoB.css e assets/index-e_zWWiKE.js, sem fixture.

## Limitações e gate

Não é auditoria completa WCAG, de fidelidade Stitch, contraste, zoom, performance, segurança ou tradução editorial final. Os registros anteriores de vulnerabilidades sem triagem, suporte ESLint, Volta, permissões de mídias/conteúdo/contato/publicação permanecem; não houve nova auditoria ou liberação. Não há idioma em URL/router, canonical, Open Graph ou SEO avançado.

Sem staging, commit, push, merge ou deploy. Work deve revisar a árvore completa, incluindo scripts/fixture e módulos novos; remoto d59b827 não contém esta entrega. Snapshot de implementação em `.workflow/m2-05-implementation-snapshot.json`, sem parecer/autorização. Aprovações anteriores não reutilizadas; novo registro verificável obrigatório após a revisão. Parar aqui antes de M2-06.

Mensagem sugerida: `feat(i18n): localize interface and persist language with synchronized metadata`
