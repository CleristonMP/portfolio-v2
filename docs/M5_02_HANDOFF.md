# M5-02 — Performance e segurança

16/11/2026. Entrega para revisão verificável do Work na branch `milestone/m5-quality-launch`, a partir do aceite de M5-01 em `4d73367`. No início, HEAD e a referência local de origem coincidiam. O README aparecia por finais de linha e não tinha diff de conteúdo. Fontes: [PRD vigente](PRD_Portfolio_Cleriston_v2.3.md), [plano M5](MILESTONE_5_PLAN.md) e [M5-01](M5_01_HANDOFF.md).

## Correção de contraste

A borda de 2 px dos campos de nome, email e mensagem em repouso usa um token específico com RGB `102 110 125`. Contra o painel RGB `22 26 33`, o contraste passa de 1,49:1 para 3,40:1, acima do mínimo de 3:1. A espessura e o desenho com linha inferior seguem a composição aprovada. O foco continua ciano e o erro continua violeta, com contorno de foco distinto quando ambos coincidem. O token de borda dos demais controles foi preservado.

O Chrome confirmou 3,40:1 nos três campos vazios em oito cenários (390 e 1280 px, PT-BR e EN, duas bases). O contorno ciano focado mediu 10,86:1 e a borda violeta após sair do campo inválido mediu 6,46:1. O cenário de erro confirmou `aria-invalid` e o foco no primeiro campo. O estado ativo foi exercitado com uma resposta simulada por cenário e bloqueio de duplicidade. Nenhuma conexão ao Formspree foi observada. Para reprodução, usar os builds ativos isolados com o endpoint público no ambiente do processo e executar `.m2-review/m5-02/states.ps1`, que serve as duas bases nas portas 4186 e 4187 com a CSP padrão. O JSON `browser.json` inclui os valores computados e os PNGs mostram o formulário após o fluxo simulado.

## Linha de base e protocolo Lighthouse

Windows x64, Node 22.16.0, Vite 6.4.4, Chrome headless 157.0.8103.78 e Lighthouse 12.8.2 via `npm exec` com versão fixada. Os builds de medição mantêm o endpoint do formulário ausente. Medições de navegação em PT-BR inicial, com perfil limpo do Lighthouse e categoria performance. Usar `npm run build` e `npm run build:subpath`, depois executar `.m2-review/m5-02/measure.ps1 -Phase before` ou `-Phase after` para os previews padrão em loopback, portas 4180 e 4181. O roteiro confere o cabeçalho `connect-src 'self'`.

Mobile usa o preset padrão de 412 × 823, DPR 1,75, RTT de 150 ms, vazão de 1.638,4 kbit/s e CPU simulada 4×. Desktop usa `--preset=desktop`, 1350 × 940, DPR 1, RTT de 40 ms, vazão de 10.240 kbit/s e CPU 1×. Ambos usam throttling simulado, com um relatório por cenário. A fonte externa veio pela rede durante as medições. Os JSONs registram a configuração efetiva e o ambiente de cada execução.

LCP, CLS e TBT abaixo são de laboratório. O INP **não foi medido** e não há dados de campo para os previews locais. TBT é apresentado separadamente. O PRD usa como referências de campo LCP ≤ 2,5 s, INP ≤ 200 ms e CLS ≤ 0,1 no percentil 75. Uma execução por célula não sustenta atribuição causal ao CSS nem conclusão sobre o percentil 75.

| Base e perfil | LCP antes → depois (ms) | CLS antes → depois | TBT antes → depois (ms) |
| --- | ---: | ---: | ---: |
| Raiz, mobile | 3115 → 3105 | 0,014 → 0,014 | 590 → 297 |
| Raiz, desktop | 1289 → 1084 | 0,009 → 0,009 | 0 → 0 |
| Subpath, mobile | 3091 → 3226 | 0,014 → 0,014 | 1198 → 0 |
| Subpath, desktop | 1053 → 1339 | 0,009 → 0,008 | 0 → 0 |

Os quatro cenários carregaram o CSS correspondente à fase. O Lighthouse sinalizou CPU abaixo do esperado em algumas execuções mobile. A transferência observada também variou com os recursos carregados, de 62,2 a 71,2 KiB de fontes e de 101,0 a 186,7 KiB de imagens. O JavaScript transferido ficou em torno de 80,9 KiB. Os oito relatórios brutos `before-*.json` e `after-*.json` estão em `.m2-review/m5-02/`.

## Diagnóstico do LCP mobile

O elemento de LCP foi o título textual `#home h1` (“Criando soluções digitais.”) nos quatro relatórios mobile, antes e depois, em PT-BR. Na decomposição simulada do Lighthouse, o atraso de renderização respondeu por 84–85% do LCP (2.605 a 2.754 ms). O TTFB respondeu por 15–16% (471 a 486 ms), e as fases de espera e transferência de um recurso próprio do elemento foram zero.

Nos dois relatórios finais, o diagnóstico de recursos que bloqueiam a renderização listou a folha de estilos do Google Fonts e o CSS da aplicação. O tempo de inicialização de JavaScript estimado pelo Lighthouse foi de 402 ms na raiz e 367 ms no subpath. Esses dados apontam para o caminho de renderização do título como foco da investigação. A contribuição individual de fontes, CSS e execução de JavaScript ainda precisa ser isolada. O TBT final variou de 297 ms na raiz a 0 ms no subpath, embora o subpath tenha apresentado LCP maior. A amostra também registrou aviso de CPU lenta no cenário mobile da raiz.

**Encaminhamento.** É necessária uma rodada adicional de laboratório antes de propor uma correção de LCP neste lote. Repetir cada base mobile com cache frio, mesma configuração e carga de máquina estável, guardar os traces e comparar a mediana de pelo menos três execuções. Inspecionar a ordem de chegada das folhas e fontes, a execução inicial do JavaScript e o momento em que o título é renderizado. Se a hipótese de bloqueio por fontes se confirmar, isolar essa variável em uma comparação controlada antes de propor a mudança. O resultado atual é de laboratório, sem dados de campo e sem INP medido.

## Orçamentos acordados

Valores de transferência em navegação fria conforme `network-requests` do Lighthouse, em cada base e preset. Medir mídia e fontes sem carregamento forçado ao abrir a página. Registrar o inventário completo de mídia separadamente.

| Recurso ou recorte | Limite | Resultado final | Atendimento |
| --- | ---: | ---: | --- |
| Fontes na navegação inicial | ≤ 80 KiB | 71,2 KiB | Atende |
| Imagens na navegação inicial | ≤ 200 KiB | 186,7 KiB | Atende |
| Inventário dos nove WebP públicos | ≤ 550 KiB | 519,6 KiB | Atende |
| Inventário dos dois PDFs acionados pelo usuário | ≤ 110 KiB | 96,2 KiB | Atende |
| JavaScript na navegação inicial | ≤ 90 KiB | 80,9 KiB | Atende |

Para navegação inicial, a tabela usa o maior valor dos quatro relatórios finais (raiz e subpath, mobile e desktop). Os limites foram atendidos em todos os cenários medidos. Para inventário, foram somados os bytes dos arquivos públicos.

## Triagem defensiva — 16/11/2026

`npm audit --json` encontrou nove entradas moderadas na árvore de desenvolvimento, agrupadas abaixo pelas três causas. `npm audit --omit=dev --json` retornou zero no recorte de dependências de produção consultado. Os relatórios JSON completos estão em `.m2-review/m5-02/`.

| Achado | Impacto no contexto e encaminhamento |
| --- | --- |
| Vite 6.4.4 | Aviso de acesso a arquivos protegidos no servidor de desenvolvimento. Priorizar atualização para versão corrigida e validação do build e CI com o Work. Os previews desta auditoria serviram artefatos estáticos em loopback. [Advisory Vite](https://github.com/advisories/GHSA-8g5g-mxqh-grgj) |
| minimatch e cadeia TypeScript ESLint | Disponibilidade da ferramenta diante de padrões glob não confiáveis. Impacto concentrado em lint e CI. Submeter atualização da cadeia e repetir lint e CI. [Advisory minimatch](https://github.com/advisories/GHSA-g3hv-75wg-m249) |
| postcss-selector-parser | Potencial consumo excessivo de CPU ao processar seletores. Impacto concentrado no processamento de CSS. Submeter atualização transitiva e repetir builds. [Advisory postcss-selector-parser](https://github.com/advisories/GHSA-rj75-hqrm-r3gf) |
| Bundle e privacidade | A inspeção focou configuração do endpoint público, armazenamento de idioma e inventário publicado. Há nove WebP (532.120 bytes) e dois PDFs (98.535 bytes). Os PDFs correspondem por SHA-256 às versões verificadas em M4-03, com a evidência de integridade em `pdf-integrity.json`. A validação estrutural e visual das versões é reaproveitada de [M4-03](M4_03_HANDOFF.md). Decisões de mídia e permissões aprovadas continuam como referência. |
| Política de conexões e fontes | A CSP `connect-src 'self'` dos previews foi confirmada. O HTML carrega a folha de fontes de Google Fonts e o navegador solicita as fontes, uma dependência externa distinta do transporte via fetch. Levar a política da hospedagem final e a escolha de fontes externas à revisão apropriada. O formulário só configura o endpoint público aprovado, usa credenciais omitidas e rejeita redirecionamentos. |

As atualizações de dependências e as melhorias de performance aguardam priorização. Origem final, SEO e validação real do contato permanecem nas tarefas previstas.

A inspeção dos quatro diretórios de build encontrou um bundle JavaScript em cada, com aproximadamente 264 kB sem compressão, nenhuma sourcemap publicada e nenhuma ocorrência do padrão de endereço de email na busca textual do JavaScript. A versão padrão mantém o identificador público aprovado como constante, mas o valor de configuração fica ausente. Essa inspeção semântica e por padrões tem cobertura delimitada e não é uma prova geral de ausência de segredos.

## Verificações da entrega

Passaram typecheck, lint, os 94 testes, os verificadores de conteúdo e i18n, os builds nos dois caminhos, a verificação de formato dos arquivos editados e `git diff --check`. A entrega aguarda revisão verificável do Work. Conventional Commit sugerido: `fix(a11y): improve contact field border contrast`.
