# M3 — Interface — plano aprovado

Proposta criada em 15/10/2026. **PLANO APROVADO PELO RESPONSÁVEL EM 19/10/2026**, por declaração direta nesta conversa. Escopo, sequência e critérios passam a orientar M3; nenhuma implementação foi iniciada. A aprovação do planejamento não equivale ao aceite de tarefas executadas nem à autorização de commit/push deste diff documental.

## Decisões posteriores aprovadas — M3-03 (20/10/2026)

Responsável aprovou explicitamente nesta conversa: vitrine Reports Registry → Audience-Counter → Web Matrículas; DS Commerce em bloco secundário identificado como educacional; mesma ordem e dados desktop/mobile, sem filtros/novas páginas. Case textual mínimo de Reports Registry na mesma página por âncora, com os três textos PT/EN fornecidos integralmente pelo responsável (categoria, contexto e restrição de divulgação), registrados em `src/content/projects.ts` e no handoff M3-03.

**Adaptação temporária autorizada:** cards sem imagens ou espaços reservados. Capturas atuais deixam somente a apresentação; arquivos de origem não são apagados. Critério de raio/corte/alt de imagem interna fica não aplicável à apresentação textual desta entrega por essa decisão; migração, otimização, seleção e autorização específica de capturas permanecem em M4, sem declarar o requisito futuro executado. Raios externos aproximadamente 1,5rem e linguagem de superfícies Stitch continuam aplicáveis.

Sem links externos novos; URLs não verificadas ausentes e Reports Registry sem GitHub. Origem informada para mídias futuras: `https://github.com/CleristonMP/portfolio/tree/main/public/assets`, apenas proveniência, não autorização automática; não modificar o repositório anterior. Case completo continua M4, mas acesso funcional ao case textual mínimo é critério de M3-03. Não há aprovação de stack, métricas ou identificação de terceiros.

M3-01/M3-02 aprovadas e commitadas em `3474362`/`5908473`; M3-03 em implementação para revisão própria. Não altera sequência, dependências ou critérios originais da tabela abaixo, preservada como histórico do planejamento. O estado executado corrente está em PROJECT_STATUS.md; decisões abertas originais de curadoria/case abaixo são superadas somente no recorte explícito desta atualização. M3-04 e posteriores continuam pendentes.

## Entrada e fontes

M2 tecnicamente concluído e revisado; implementação final `c337da4`, formalização documental aprovada e commitada em `669f7bc5b7f56d0fd46003a4de90630963ea5522`. Esse fechamento já foi confirmado no remoto pelo Work. Entrada local limpa em main; proposta preparada na branch `docs/m3-interface-plan`, sem editar main ou executar commit/push.

Fontes: PRD v2.3 §§3–8, 10, 15 e 16; DEVELOPMENT_WORKFLOW.md; PROJECT_STATUS.md; plano M2; handoffs M2-03 a M2-08; docs/DESIGN_TOKENS.md. Design oficial: code.html, DESIGN.md e screen.png de ambos os ZIPs em design/. Figma é histórico opcional. Acessibilidade e conteúdo verdadeiro prevalecem sobre efeitos e placeholders.

## Objetivo e limites

Finalizar a interface responsiva das seções existentes com a direção editorial do Stitch: dark, ciano/violeta, Manrope/Inter, espaço negativo, camadas, glass e gradientes discretos. Reaproveitar componentes, contratos, tokens e comportamento de M2; não reconstruir o site ou instalar ferramentas sem necessidade demonstrada.

Não há subdivisão em novas fases. A sequência aprovada abaixo segue header → hero → projetos → competências → perfil → cursos → contato → footer, derivada do PRD §§4.1–4.8. IDs identificam tarefas planejadas, não entregas aceitas. A dependência de aprovação deste plano está atendida; cada tarefa ainda depende do aceite da anterior e do encaminhamento do lote correspondente. Não executar lotes simultâneos por iniciativa própria.

M3 cuida da interface e das interações necessárias à apresentação. M4 cuida de cases completos, conteúdo final, tradução editorial final, migração/otimização das mídias autorizadas e serviço real de contato. M5 cuida das auditorias finais, SEO avançado e lançamento. M3 não autoriza publicação nem resolve permissões ou advisories herdados.

## Sequência aprovada e aceite individual

| Tarefa | Fonte e entrega | Dependência | Critérios específicos de aceite |
|---|---|---|---|
| M3-01 — Header | PRD §4.1; refinar composição desktop/mobile do header existente | Plano aprovado; M2 fechado | Marca correta, links para as seis seções por meios existentes, seletor PT/EN e CTA contato utilizáveis; alinhamento/espaçamento/glass comparados aos HTMLs; skip, nomes acessíveis, expanded/controls, Escape, foco e fechamento de M2 preservados. Sem controles cortados em 320 px. Não exibir disponibilidade não confirmada. |
| M3-02 — Hero | PRD §§3, 4.2; hierarquia tipográfica, superfícies e CTAs | 01 | Um h1; cargo Full Stack & Mobile comunicado nos dois idiomas; CTAs contato/projetos com destino real; legibilidade e quebra de linhas verificadas. Comparar tracking, escala, luz e espaço com Stitch e documentar desvios necessários. Conteúdo não depende de animação; sem claims novos. |
| M3-03 — Projetos | PRD §§4.3, 15, 16.4; apresentação dos cards e acesso ao case | 02; decisões de case/curadoria abaixo | Mesmo dataset/ordem em desktop/mobile; destaque comercial/mobile preservado; três colunas quando houver espaço e empilhamento estreito; natureza/status reais legíveis. Raios aproximadamente 1,5rem e imagem interna 0,75rem conforme §16.2, com cortes e alt adequados. Código privado nunca oferece link GitHub; demo/store só com URL verificada. CTA de Reports Registry leva a conteúdo de case efetivamente disponível, sem link vazio, botão inativo ou material inventado; não declarar esse critério atendido sem decisão/material aprovado. |
| M3-04 — Competências | PRD §4.4; grade e leitura dos grupos existentes | 03 | Nomes/ícones e hierarquia comparados aos exports; dataset único; rótulos PT/EN preservados. Sem barras percentuais, tecnologias novas ou alegação de domínio baseada no exemplo Stitch. Agrupamentos só após validação editorial, sem expandir inventário por suposição. |
| M3-05 — Perfil | PRD §4.5; composição sobre/método | 04 | Texto existente legível e localizado, hierarquia/espaçamento comparados; sem branding fictício, anos de experiência ou disponibilidade inventados. Foto opcional somente se real e autorizada; sua ausência não deve produzir imagem fictícia ou espaço quebrado. |
| M3-06 — Aprendizado | PRD §4.6; seção inexistente nos exports | 05 | Depois de perfil e antes de contato; quatro formações atuais/instituições, títulos textuais legíveis; mesma base responsiva. Tipo/estado só conforme informação validada; distinguir curso de certificação profissional. Datas/links desconhecidos omitidos com estado editorial preservado. Credencial opcional só com URL verificada; não usar certificado como único texto legível. Derivar cards da linguagem Stitch, sem tratar ausência de referência como liberdade para redesign. |
| M3-07 — Contato | PRD §§4.7, 8; composição e interface do fluxo | 06; decisão de fluxo/provedor abaixo | Desktop/mobile apresentam o mesmo fluxo. Se formulário aprovado, nome/email/mensagem com labels, validação e estados visualmente definidos; assunto só se aprovado. Selecionar provedor estático antes da UI de integração (§8). Sem endpoint ou canal confirmado, não simular envio/sucesso nem oferecer submit aparentemente funcional. Entrega da integração e anti-spam reais permanece M4. Alternativa de contato só com canal verdadeiro verificado. Critério não pode ser encerrado apenas por painel de pendência sem decisão explícita sobre o fluxo. |
| M3-08 — Footer | PRD §4.8; composição final do rodapé | 07 | Marca nominal, ano automático, navegação essencial e retorno ao início funcionais PT/EN; links sociais/email somente verificados. Ausência de contato ainda não confirmado não gera âncora vazia. Revisão da composição completa e de todas as evidências transversais abaixo, sem antecipar auditoria final M5. |

Todos os itens estão **planejados/pendentes de implementação e aceite**. No caso de impedimento editorial, parar na tarefa afetada e registrar o motivo; não pular etapas ou reduzir critérios para declarar sucesso.

## Aceite transversal e comparação visual

Aplicar em cada tarefa afetada, reaproveitando evidências válidas sem repetir checks sem motivo:

- Comparar HTMLs e DESIGN.md para propriedades/estrutura; screen.png como referência qualitativa reduzida (448×1600 web, 151×1600 mobile), não como prova pixel a pixel de 1280/390. Capturar antes/depois em 390/1280, PT/EN. Registrar origem do ajuste, desvio justificado e resultado, sem arquivos de referência modificados.
- Verificar 320, 390, 768, 1280 e 1920 px nos dois idiomas para a área alterada; no fechamento, conferir composição completa. Sem overflow horizontal contra clientWidth, texto cortado ou controles inacessíveis. Desktop/mobile compartilham dados e seis IDs estáveis.
- Preservar `/` e `/portfolio-v2/`, idioma persistido, metadados, nomes/alt localizados, skip, teclado, foco, menu e Voltar. Revalidar zoom real 200% e reduced motion quando o ajuste afetar esses comportamentos; registrar método, limites e evidência manual quando aplicável. Não substituir zoom por viewport ou preferência ativa por presença da regra CSS.
- Usar fonte semântica existente de cores/fontes. Resolver por tarefa os conflitos documentados em DESIGN_TOKENS.md (raios, tracking, espaço, glass, duração) com referência explícita. Não aplicar cegamente 400ms a tudo ou mudar contraste apenas por aparência; legibilidade/foco prevalecem. Sem novo design system, animações ornamentais ou biblioteca desnecessária.
- Código claro, responsabilidade delimitada e componentes reaproveitados quando apropriado; sem duplicação desktop/mobile. Dados desconhecidos continuam opcionais/pendentes, sem transformar placeholders em fatos públicos.
- Executar typecheck, lint, format:check, npm test, verify e build, além de diff check. Manter asserções relevantes; ajustar testes somente em função de comportamento aprovado, nunca para encobrir regressão. Validar build alternativo quando caminhos/assets forem afetados e na consolidação final. CI continua somente de qualidade.

## Decisões abertas antes de executar as tarefas afetadas

1. **Curadoria da vitrine (03):** §16.4 prioriza Reports Registry, Audience-Counter e Web Matrículas, com DS Commerce alternativo/secundário; starter mostra quatro cards. Work precisa confirmar disposição do quarto sem criar filtros/páginas não solicitados.
2. **Reports Registry (03):** confirmar quais fatos e imagens são divulgáveis e qual apresentação mínima de case funcionará em M3 (sem escolher modal, rota ou página por suposição). Cases completos continuam M4, mas o requisito do CTA funcional do §15 precisa de uma decisão explícita antes do aceite de 03.
3. **Competências/perfil/cursos (04–06):** confirmar claims, biografia, eventual foto, títulos oficiais, tipos/estados e credenciais conforme necessário. Preservar conteúdo existente verificável; omitir opcionais desconhecidos. Sem inclusão automática de tecnologias/certificações ou números.
4. **Contato (07):** confirmar canal público, fluxo e provedor compatível com SPA estática, privacidade e estados da UI antes de integração. A falta de provedor não bloqueia planejamento/header/hero, mas impede declarar completo o fluxo ainda indefinido. Não resolver agora via serviço/dependência escolhido unilateralmente.
5. **Copy (02 e demais):** rascunhos do PRD e textos atuais precisam de aprovação editorial se forem alterados. PT/EN equivalentes, sem promessas novas. A validação editorial definitiva é gate de M4/publicação.

## Revisão, fechamento e próximo passo

Com o plano aprovado pelo responsável, Work resolve decisões da tarefa a encaminhar. Codex implementa/testa apenas o lote autorizado, sem commit/push; Work revisa árvore completa e evidências; aprovação operacional exige snapshot canônico próprio em .workflow/, fora do versionamento. Só então Codex pode commitar/enviar o conjunto aprovado conforme o workflow. Nenhuma aprovação M2 é reutilizada.

Para fechar M3: todas as tarefas aprovadas e critérios validados, decisões necessárias resolvidas, nenhuma implementação aguardando revisão/commit/push e CI correspondente verificada. Evidências visuais/funcionais consolidadas no acompanhamento sem duplicar este plano. Pendências genuínas de M4/M5 são transferidas explicitamente, sem usar transferência para encerrar critério obrigatório incompleto de M3.

Próximo passo desta entrega documental: revisar o diff com o registro da aprovação e formalizá-lo conforme o workflow, sem commit/push nesta atualização. Primeira tarefa prevista para encaminhamento: **M3-01 — Header**, sem implementação iniciada. Decisões editoriais abertas continuam pendentes nas tarefas afetadas; a aprovação do plano não fornece dados ou permissões ausentes. M4 permanece o próximo milestone após M3, sem tarefa de implementação autorizada por este documento.
