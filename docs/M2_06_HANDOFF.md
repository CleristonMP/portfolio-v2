# Handoff — M2-06 — Shell acessível

Data: 14/10/2026. Estado: **implementada; smoke de teclado desktop/mobile PT/EN executado na retomada; aguardando revisão própria do Work**. Zoom real 200% posteriormente validado manualmente e aprovado pelo responsável; registro ao final. Não aprovada, não concluída; M2 permanece aberto. Sem staging, commit, push, merge ou deploy. M2-07/M2-08 não iniciados.

## Entrada, fontes e histórico

Observado localmente: branch `chore/m2-technical-foundation`, HEAD `7af9622e1bc7cd134731a972db3a1ea604ad70f4`, árvore limpa, staging vazio, origin `https://github.com/CleristonMP/portfolio-v2.git`. Sem consulta remota adicional. M2-05 recebeu aprovação verificável nesta conversa, seguida do commit acima e push com retorno 0; isso não autoriza M2-06. M2-04 aprovada/commitada em `d59b827`; M2-03 em `73e5f7d`; baseline M2-01/02 em `e3fb2be` e correção documental em `cd08a2c`, entregas distintas.

Lidos DEVELOPMENT_WORKFLOW.md, PROJECT_STATUS.md, plano M2, PRD v2.3 e handoffs M2-04/M2-05. Nenhum AGENTS.md encontrado no repositório ou nos ancestrais consultados. Consultados DESIGN.md, trechos de navegação/fontes de code.html e screen.png web/mobile dos exports Stitch, nas cópias extraídas em `.m2-review/m2-05/`. ZIPs e referências não editados. Identidade, tokens, conteúdo e composição preservados; acessibilidade prevalece sobre decoração conforme plano.

## Arquivos e decisões de foco

- `src/App.tsx`: skip link localizado antes do header; alvo `main-content`, tabindex -1 e fechamento do menu e foco explícito sem impedir a ação nativa do link. Continua coordenando idioma/menu/seções. Callback estável de fechamento evita reinstalar listeners a cada render.
- `src/components/layout/Header.tsx`: nav com ID estável `primary-navigation`; botão com aria-expanded booleano, aria-controls e nomes PT/EN existentes. Ao abrir, efeito após render foca primeiro link mobile. Tab/Shift+Tab permanecem nativos, sem trap, role=menu, diálogo ou overlay.
- Escape fecha o menu. Quando foco está no header, retorna ao botão; quando o usuário já está fora, não rouba foco. Listener é removido no fechamento/unmount.
- Links do header fecham o menu. Se o link focado vai ficar oculto no mobile, a seção de destino recebe foco antes do fechamento, com preventScroll. A ação padrão atualiza hash/scroll/histórico. Cliques modificados/defaultPrevented não são interceptados. Escape e navegação têm destinos de foco diferentes.
- Mudança de breakpoint `(max-width: 700px)` fecha estado mobile. Nav/CTA que ficam ocultos encaminham foco ao botão; botão que fica oculto no desktop encaminha ao primeiro link. Foco em elementos que continuam visíveis permanece. O último focusin é lembrado porque o browser pode desfocar um elemento display:none antes do evento de media query. Listeners têm cleanup. O smoke precisa aguardar o estado final do evento, não apenas a atualização de dimensões.
- As seis seções em `src/sections/*.tsx`: somente tabindex -1, permitindo foco de destino, sem entrar na sequência de Tab; IDs/classes/conteúdo preservados.
- `src/content/contracts.ts` e `src/i18n/translations.ts`: chave tipada skipToContent PT/EN; nenhuma alteração editorial.
- `src/styles.css`: skip link fora da tela até foco; foco visível em main/seções usando primary existente e outline interno. Menu fechado continua display:none; nenhuma duplicação de navegação. Bloco prefers-reduced-motion preservado integralmente; sem nova animação.
- `scripts/verify-content.mjs`: permite somente o novo destino adicional #main-content, verifica alvo/foco programático, posição do skip antes do header e preserva IDs/dados/links. Comparação opcional histórica desconsidera apenas skip/alvos de foco/atributos ARIA novos do shell além das exceções anteriores de tradução/stacks.
- `scripts/verify-i18n.mjs`: substitui expectativa histórica de ausência de expanded por expanded coerente nos estados renderizados e controls com alvo existente; mantém verificações anteriores de tradução, dados, storage e metadados. Verifica skip PT e paridade/nonempty PT/EN. Renderização estática não comprova eventos; smoke é separado.
- `PROJECT_STATUS.md` e este handoff: aprovação/commit M2-05, estado parcial M2-06 e gate próprio. Handoffs anteriores preservados como históricos.

## Critérios individuais

| Critério | Resultado / evidência |
|---|---|
| 1. Skip link primeiro, localizado e funcional | Implementado; primeiro Tab PT mobile observado, Enter focou MAIN main-content com outline ciano e hash nativo. Traduções PT/EN tipadas verificadas. Smoke completo desktop/EN ainda parcial. |
| 2. Menu mobile não modal completo | Implementado; PT Space e Enter, EN Enter, nav focada ao abrir; Escape PT/EN devolveu ao botão, expanded/controls verificados. Space EN e sequência inteira de links por teclado nos dois idiomas ainda precisam de repetição final. |
| 3. Fechamento após link e foco no destino | Observado PT projects/skills e EN about: menu false, nav none, foco SECTION correspondente e hash correto. Sem retorno indevido ao botão. Outros destinos preservados no código/script, sem alegar smoke de todos. |
| 4. Desktop/mobile e foco | Cruzamento EN 390→1280 com foco em nav: menu resetado e link visível; 1280→390: botão focado após evento; botão focado mobile→desktop: primeiro link focado. CTA→mobile e repetição PT pendentes de smoke. |
| 5. Seis âncoras, hash e Voltar | IDs preservados e verificações passaram; PT projects→skills→Voltar restaurou #projects. Browser conservou foco em skills ao voltar, como comportamento nativo, sem elemento oculto. Nenhum router/pushState/replaceState. Smoke completo das seis âncoras desktop/mobile pendente. |
| 6. Foco/tokens/reduced-motion | Outline computado primary solid 3px em skip/main/link/botão/seções; captura de skip/menu. Regra reduce preservada no fonte e build; preferência reduce não emulada. Nenhuma auditoria WCAG completa. |
| 7. Verificações existentes | Typecheck, lint, format, build, conteúdo/i18n e diff check passaram, resultados abaixo. Nenhuma infraestrutura/dependência nova. |
| 8. Smoke desktop/mobile PT/EN e zoom | **Parcial, critério pendente**: mobile PT/EN e transições exercitados; desktop EN skip exercitado. Sequência completa desktop PT/EN, zoom real 200% e outros cenários acima não concluídos por interrupção de Computer Use. Viewport 390 não é zoom. |
| 9. Acompanhamento e revisão | Status/handoff atualizados; nova revisão e snapshot obrigatórios. Nenhuma autoaprovação ou encerramento de milestone. |

## Comandos e resultados

Runtime Node 22.16.0/npm 10.9.2 instalado diretamente, PATH apenas do processo; shim global Volta preservado. Comandos:

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

Checks finais com retorno 0 (conferência final após documentação registrada na entrega). Build: Vite 6.4.4, 1597 módulos, CSS 16,62 kB (4,44 gzip), JS 249,89 kB (77,59 gzip). A primeira execução de build emitiu o aviso Tailwind preexistente de ausência de utility classes; a execução final não o emitiu. Build passou no sandbox nesta execução. Não houve instalação ou alteração global. Primeira execução do verificador de conteúdo detectou o novo #main-content fora da allowlist histórica; expectativa corrigida sem afrouxar links externos/editoriais.

## Smoke e reprodução

Servidor local: `node node_modules/vite/bin/vite.js --host 127.0.0.1 --port 5177 --strictPort`; URL `http://127.0.0.1:5177/portfolio/`. Primeiro servidor no sandbox não ficou acessível ao Edge; servidor local com autorização fora da restrição de sockets funcionou. Sem publicação.

Procedimento para completar/reproduzir no Edge:

1. Em 390×844 PT, recarregar, Tab: skip; Enter: main focado. Tab/Shift+Tab pelos controles. Fechado, Tab do botão vai ao CTA hero, sem links da nav.
2. Space e Enter no botão: expanded true, primeiro link focado. Tab/Shift+Tab entre links; Escape: expanded false e botão focado. Repetir EN.
3. Ativar cada link: menu fecha, seção focada e hash correto. Navegar a outra seção e usar Voltar: hash anterior. Conferir destino visível após término do scroll suave.
4. Abrir menu com foco em nav, mudar 390→1280; aguardar expanded false. Voltar a 390; aguardar botão focado. Testar também CTA desktop focado ao reduzir e botão mobile focado ao ampliar.
5. Em 1280×900 PT/EN, percorrer toda a sequência de Tab/Shift+Tab, skip e CTA; botão mobile ausente. Alternar PT→EN→PT e recarregar; conferir lang/title/description.
6. Limpar override de viewport antes do zoom. No navegador real, Ctrl+0 e controles nativos de zoom até indicador **200%**; registrar indicador e screenshot. Conferir reflow, acesso a controles/links e foco nos dois idiomas; restaurar 100%. Nunca usar viewport reduzido como prova de zoom.

Executado parcialmente: primeiro skip PT, foco main, Space/Enter PT, Enter EN, Escape PT/EN, Tab/Shift+Tab inicial mobile, closed Tab→CTA hero, links PT projects/skills, EN about, Voltar PT, troca PT→EN e reload EN com metadados corretos; transições EN e skip desktop EN. Sem overflow nas observações de 390/1280. Medidas imediatas após resize capturaram estado anterior ao evento; observações posteriores aguardando seletores de foco/expanded confirmaram estado final correto. Não se consideram essas leituras intermediárias como aceite final. A lembrança de focusin cobre blur anterior ao media event.

Capturas existentes, locais ignoradas:

- `.m2-review/m2-06/mobile-pt-skip.png`: skip visível/focado.
- `.m2-review/m2-06/mobile-en-menu.png`: menu EN aberto e foco no primeiro link.

Resultados detalhados de DOM/foco/metadados estão nos retornos das ferramentas desta conversa. Não foi persistido JSON completo das observações antes da interrupção; não alegar arquivo de evidência inexistente. Capturas desktop finais não foram produzidas. O fechamento do menu ao ativar o skip foi incluído no ajuste final de código e passou nos checks; esse cenário específico não recebeu novo smoke após a interrupção.

## Impedimento e gate

A skill computer-use foi lida e usada para tentar selecionar a janela Edge e executar zoom nativo. A ferramenta interrompeu o controle por não conseguir determinar a URL ativa no Windows com confiança suficiente para aplicar sua política. **Nenhum zoom real foi executado**. Não houve rejeição de aprovação de comando; foi interrupção do controle de navegador. Não foram feitas novas ações de UI após a interrupção. Override ficou em 1280×900; restauração e smoke pendente deverão ocorrer em sessão de navegador novamente autorizada/disponível.

Segurança/dependências, Volta, conteúdo, contatos, credenciais, permissões de mídia e publicação continuam pendentes conforme histórico. PRD, exports, tokens, assets, dados editoriais, base path e dependências intactos. Não é auditoria WCAG nem aceite visual M3. Sem M2-07/M2-08.

Work deve revisar a árvore completa e concluir/revisar as evidências pendentes; critério de teclado/zoom não está fechado. Snapshot de implementação local em `.workflow/m2-06-implementation-snapshot.json` não é aprovação. `.workflow/` e `.m2-review/` ficam fora do staging/versionamento. Aprovações anteriores não cobrem esta entrega; revisão própria e novo snapshot verificável são obrigatórios antes de qualquer commit/push.

Mensagem sugerida: `feat(a11y): add skip link and accessible responsive navigation`


## Retomada do smoke — 14/10/2026

Nova tentativa solicitada pelo responsável, sem alteração de código ou dependências. Os resultados desta seção atualizam o estado corrente dos cenários anteriormente pendentes; os registros anteriores foram preservados como histórico. Servidor e URL iguais aos descritos acima. Edge controlado pela extensão de navegador, com eventos reais de teclado via API documentada; zoom nativo tentado separadamente pela skill computer-use.

### Critérios revalidados individualmente

| Critério | Resultado da retomada |
|---|---|
| 1. Skip link PT/EN e primeiro Tab | Passou em 390×844 PT/EN e 1280×900 PT/EN: primeiro Tab no skip, Enter leva ao MAIN main-content, hash #main-content e outline primary 3px. |
| 2. Menu, teclado, ARIA e Escape | Passou mobile PT/EN: Space e Enter abrem; primeiro link recebe foco; Tab percorre os cinco links e chega ao idioma, Shift+Tab faz caminho inverso, sem trap. Escape fecha e retorna ao botão com nome localizado; expanded false. Tab seguinte vai ao CTA hero e ignora links ocultos. |
| 3. Links, fechamento e destino | Passou PT/EN: cada um dos cinco links mobile fecha menu, nav display:none, hash correspondente e foco SECTION projects/skills/about/learning/contact. Skip também fecha menu aberto e foca main. |
| 4. Breakpoint, desktop e CTA | Passou PT/EN: menu aberto com foco em nav, 390→1280 fecha estado e mantém link visível; 1280→390 encaminha foco ao botão; botão focado ao ampliar encaminha ao primeiro link; CTA desktop focado ao reduzir encaminha ao botão. Aguardados seletores de foco/expanded após media event. |
| 5. Seis âncoras e Voltar | Passou em desktop/mobile PT/EN: cinco destinos nav e home pela marca, hash e foco correspondente; home→Voltar restaura #contact sem escrever histórico artificial. O foco após Voltar segue comportamento nativo do browser. |
| 6. Foco visível e layout | Outline primary solid 3px observado nos controles/destinos. Sem overflow horizontal nas observações de 390/1280, nos dois idiomas. Capturas salvas. Regra reduced-motion já preservada/verificada no lote; preferência não emulada nesta retomada. |
| 7. Verificações existentes | Código não mudou nesta retomada; checks completos anteriores continuam evidência para o mesmo código. Formatação documental e git diff --check reexecutados. |
| 8. Smoke e zoom real 200% | Smoke de teclado concluído no escopo descrito; **zoom real ainda pendente**, impedimento abaixo. Não considerar o critério inteiro atendido. |
| 9. Acompanhamento/revisão | Status, handoff, diff e snapshot atualizados. Nova revisão Work obrigatória; sem aprovação/commit/push. |

Em desktop PT/EN, Tab percorreu marca → cinco links de navegação → idioma → CTA contato → CTA hero; Shift+Tab confirmou caminho inverso. Botão mobile ficou fora da sequência. Os demais links de conteúdo mantêm comportamento nativo; não é auditoria completa de todos os elementos ou leitor de tela.

PT→EN→PT, reload com cada preferência válida, html lang/title/meta description observados corretos. Seis âncoras exercitadas nos quatro cenários. Observações persistidas incrementalmente em `.m2-review/m2-06/retry-smoke.json`, incluindo label do cenário, idioma, metadados, hash, elemento focado, outline, expanded, display da nav, viewport, devicePixelRatio e overflow. Arquivo permite distinguir os eventos executados das inferências; nenhum resultado de zoom 200% foi acrescentado.

Capturas adicionais: `retry-desktop-en.png`, `retry-desktop-pt.png`, `retry-mobile-pt.png`, `retry-mobile-en.png` no mesmo diretório. Capturas de viewport representam o estado observado durante o fluxo de âncoras, sem alegar comparação pixel a pixel ou inspeção integral de todos os pixels da página.

### Segunda tentativa de zoom nativo

O override de viewport foi **removido com viewport.reset() antes da tentativa**, registrado no JSON. A listagem nativa retornou exatamente uma janela Edge com título `Cleriston Pereira | Desenvolvedor Full Stack & Mobile`. Ao solicitar a observação dessa janela para confirmar URL/estado antes de pressionar as teclas de zoom, Computer Use interrompeu novamente o controle porque não conseguiu determinar a URL ativa no Windows com confiança suficiente para aplicar sua política.

Não foi enviado Ctrl+0, Ctrl+mais ou qualquer alteração de zoom nativo; **200% não executado nem aprovado**. A interrupção ocorreu antes de qualquer alteração, portanto não há zoom a restaurar. Não foram realizadas novas ações de UI após a interrupção. O viewport foi restaurado previamente, corrigindo a limitação de override deixado na rodada anterior. Não se trata de rejeição de aprovação de comando; é bloqueio do controle nativo por sua política de verificação de URL.

Próxima pendência específica: validar zoom real pela UI do Edge em sessão que permita confirmar URL, registrar indicador 200%, reflow/foco/acesso aos controles nos dois idiomas e restaurar 100%. A redução de viewport e DPR 1 observados não substituem esse procedimento. M2-06 segue aguardando revisão própria com esse critério pendente; não avançar para M2-07/M2-08.

## Validação manual posterior — zoom real 200%

O responsável confirmou nesta conversa: “fiz manualmente o zoom real de 200%. está aprovado”. **Critério de zoom: validado manualmente e aprovado pelo responsável.** A confirmação é posterior às duas tentativas automatizadas impedidas e atualiza o estado corrente do critério 8; os relatos anteriores foram preservados como histórico.

Fonte da evidência: declaração direta do responsável. Codex não executou ou observou essa validação. Não foram fornecidos detalhes de navegador, idiomas exercitados, procedimento ou capturas da execução manual; nenhum desses detalhes é presumido, nem há alegação de screenshot/automação de zoom. O JSON de smoke continua contendo somente as observações automatizadas efetivamente executadas.

Estado corrente: smoke automatizado registrado e zoom manual confirmado; **aguardando revisão própria do Work sobre a implementação e o snapshot atualizados**. A aprovação desse critério pelo responsável não gera aprovação integral do Work, registro review-approval.json, staging, commit ou push. M2 permanece aberto e M2-07/M2-08 não iniciados.
