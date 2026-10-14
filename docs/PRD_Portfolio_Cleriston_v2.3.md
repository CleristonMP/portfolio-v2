# PRD 2.3 — Portfólio Cleriston Pereira

**Projeto:** Renovação do Portfólio Full Stack & Mobile Developer  
**Versão:** 2.3 — especificação consolidada a partir dos exports do Google Stitch  
**Data:** 14 de outubro de 2026  
**Estado:** Milestone 1 de especificação concluído; Milestone 2 iniciado. Restam validações de conteúdo, assets, compilação e publicação.  
**Repositório existente:** https://github.com/CleristonMP/portfolio  
**Site atual:** https://cleristonmp.github.io/portfolio/  
**Fonte oficial do design:** exports do Google Stitch: `stitch_portfolio_web_design.zip` e `stitch_portfolio_mobile_design.zip` (`code.html`, `DESIGN.md` e `screen.png` em cada pacote).
**Referência histórica opcional:** [Figma exportado do Stitch](https://www.figma.com/design/cYxo7CjeHtfaOFOnAgRnmC/Portfolio---Novo-Design?node-id=0-1) — não é requisito de implementação nem será atualizado.  
**Origem:** PRD v1.0 gerado pelo Stitch e decisões consolidadas em conversa.  

> **Nota de escopo:** O `DESIGN.md`, os HTMLs e as capturas exportados do Stitch são a fonte de verdade visual. Não há necessidade de editar ou sincronizar o Figma. As informações ainda não verificadas (links, métricas, contatos, permissões, detalhes técnicos e credenciais) continuam pendentes antes da publicação.

## 1. Resumo executivo

Criar uma nova versão do portfólio profissional de **Cleriston Pereira — Full Stack & Mobile Developer**, priorizando a geração de negócios freelance e preservando a atratividade para recrutadores de posições remotas. A experiência deve converter visitas em contatos qualificados e demonstrar competência mediante casos reais, clareza de comunicação e qualidade da engenharia.

### 1.1 Público-alvo e prioridades

- **Primário:** clientes freelance, founders, pequenas e médias empresas e equipes que contratam desenvolvedores independentes para projetos web/mobile ou colaboração recorrente.
- **Secundário:** recrutadores, tech leads e empresas contratando profissionais remotos.
- **Orientação editorial sugerida:** aproximadamente 70% para discurso comercial e 30% para empregabilidade; não representa uma métrica real de visitantes ou conversão.

### 1.2 Proposta de valor

Construção de soluções web e mobile com engenharia cuidadosa, aplicações de negócio, foco em manutenção, boa experiência de uso e entrega consistente. Evitar títulos profissionais, resultados comerciais e alegações de senioridade que não tenham evidência.

### 1.3 Resultados esperados

- Facilitar solicitações de projetos, conversas comerciais e oportunidades remotas.
- Explicar competências técnicas com base em aplicações e decisões reais.
- Ser rápido, acessível, responsivo e consistente em português e inglês.
- Substituir a experiência antiga sem indisponibilizar prematuramente a versão publicada.

## 2. Auditoria histórica do design exportado e comparação com Stitch

**Origem histórica desta auditoria:** Figma `cYxo7CjeHtfaOFOnAgRnmC`, página `0:1`. Esta inspeção inicial foi posteriormente complementada e superada pelos exports oficiais do Stitch (seção 16). Os apontamentos abaixo são contexto histórico e não definem obrigações de editar o Figma.

| Tema | Layout desktop | Layout mobile | Consequência |
|---|---|---|---|
| Dimensões da composição | 1280 × 4744 px | 390 × 4126 px | São referências, não breakpoints exclusivos. |
| Header | Marca `CLERISTON_PEREIRA`, links para projetos, skills, about, courses e contato | Marca `CLERISTON_PEREIRA`, CTA Contact | Normalizar navegação e definir acesso ao idioma. |
| Hero | `Full Stack Developer`, tagline, CTA `Explore Works` | `Full Stack Developer`, CTA `View My Work` | Ajustar copy à proposta de valor e harmonizar CTA. |
| Projetos | Três cards fictícios: **Nebula Dashboard**, **Aether Protocol**, **Atlas Core** | Dois cards fictícios: **Nexus Engine**, **Vortex Vault** | Fonte única de projetos; conteúdo idêntico com apresentação adaptável. |
| Competências | Grade com Java, JavaScript, React, Node.js, SQL/NoSQL e Cloud Ops | Quatro cartões: JavaScript, Java, React e SQL | O conjunto deve ser editorialmente consistente; mobile pode reduzir densidade, não inventar outro inventário. |
| Sobre | Título `The Philosophy of Kinetic Logic`, bloco de manifesto e `06+ Years Expertise` | `The Philosophy`, manifesto textual sem retrato evidente nessa seção | Substituir branding fictício e validar métrica; foto só se houver imagem autorizada. |
| Cursos | Link `COURSES` no menu, mas nenhuma seção correspondente | Nenhuma seção | Criar sexta seção nos dois layouts e revisar navegação. |
| Contato | `Execute Connection`, email `hello@kinetic.architect`, base `Berlin, Germany`; não foi identificado formulário nessa seção | Formulário com `Identity`, `Endpoint`, `Payload` e `Execute Connection` mais links sociais | Definir **um mesmo fluxo funcional** em desktop e mobile, com form ou alternativa confiável. |
| Footer | `KINETIC_ARCHITECT`, copyright 2024 | `KINETIC_ARCHITECT`, copyright 2024 | Corrigir marca e ano dinâmico. |

### 2.1 Identidade visual — diferenças históricas e decisão final

- PRD v1.0 descreve ciano `#00D1FF`, violeta `#818CF8`, superfícies profundas como `#020617`, além de Manrope e Inter.
- Inspeção de cores sólidas encontradas nas camadas do Figma mostra exemplos `#69DAFF`, `#AC89FF`, `#0B0E14`, `#10131A`, `#161A21`, `#22262F`, `#282C36` e `#FFFFFF`.
- **Decisão final:** usar os tokens do `DESIGN.md` exportado pelo Stitch (seção 16.2), não os valores inferidos das camadas do Figma.

### 2.2 Problemas de alinhamento encontrados

1. **Divergência estrutural:** conteúdo desktop/mobile não corresponde aos mesmos dados.
2. **Identidade fragmentada:** `CLERISTON_PEREIRA` convive com `KINETIC_ARCHITECT` e `Kinetic Logic`.
3. **Conteúdo demonstrativo:** projetos e contatos fictícios não podem seguir para produção.
4. **Cursos ausentes:** menu desktop antecipa seção não desenhada.
5. **Contato desigual:** formulário mobile e contato simples desktop precisam de uma especificação única.
6. **Dados de autoridade não verificados:** `06+ Years Expertise`, localização Berlin e métricas de projetos.
7. **Responsividade incompleta como especificação:** dois layouts de referência não validam, sozinhos, tablet, 320/360/430 px, keyboard ou zoom de 200%.

## 3. Diretrizes editoriais e identidade

- Nome profissional: **Cleriston Pereira**.
- Descrição principal: **Full Stack & Mobile Developer** (localizar com naturalidade no português).
- Não utilizar `Kinetic Architect`, `Cyanide Logic`, `Berlin, Germany` ou endereços de email fictícios como dados públicos.
- A estética dark, ciano/violeta e o tratamento editorial premium devem permanecer.
- Mostrar atuação profissional concreta em vez de autopromoção abstrata.
- Não alegar funcionalidades, escala, métricas, impacto, remuneração, certificações ou experiência não comprovados.
- Tom: competente, objetivo, acessível e orientado ao problema do cliente; evitar jargões ornamentais excessivos.

**Proposta de hero em inglês (rascunho):**

> Building digital solutions that solve real problems.  
> I develop modern web and mobile applications, combining thoughtful architecture, reliable engineering, and a focus on delivering real business value.

**Proposta de hero em português (rascunho):**

> Soluções digitais para problemas reais.  
> Desenvolvo aplicações web e mobile com arquitetura bem pensada, engenharia confiável e foco em gerar valor para o negócio.

**CTA principal:** `Let's Work Together` / `Vamos conversar sobre seu projeto`.  
**CTA secundário:** `Explore My Work` / `Conheça meus projetos`.  
**Observação:** o CTA principal pode levar ao formulário da seção Contato; confirmar microcopy final antes do fechamento do Milestone 1.

## 4. Arquitetura da informação — versão consolidada 2.3

A página principal terá **seis seções editoriais**, além de header e footer:

1. `#home` — **Hero**
2. `#projects` — **Selected Works / Projetos em Destaque**
3. `#skills` — **Technical Arsenal / Competências Técnicas**
4. `#about` — **Philosophy & Profile / Sobre e Método de Trabalho**
5. `#learning` — **Continuous Learning & Certifications / Aprendizado Contínuo e Certificações**
6. `#contact` — **Execute Connection / Contato**

A navegação deve ter rótulos claros e manter âncoras estáveis; texto visível pode ser mais humano do que o branding técnico do Stitch. Em telas estreitas, não sacrificar o acesso a projetos, cursos, contato ou idiomas.

### 4.1 Header / Navigation

**Obrigatório:** nome/marca profissional, navegação funcional, idioma PT/EN, CTA contato, foco visível, acessibilidade por teclado.  
**Desktop:** menu horizontal adaptado do HTML web do Stitch.  
**Mobile:** navegação compacta acessível; se um menu expansível for adotado, controlar `aria-expanded`, foco e fechamento.  
**Não assumir:** disponibilidade comercial em tempo integral; badge `Available for Projects` depende de estado configurável e verdadeiro.

### 4.2 Hero

**Objetivo:** comunicar em poucos segundos o que faz, para quem e qual ação visitante deve realizar.  
**Conteúdo:** cargo, proposta de valor, CTAs para contato e projetos; opcionalmente sinalização real de disponibilidade remota/freelance.  
**Critérios:** heading único `<h1>`, legível em mobile, sem dependência de animação para compreensão.

### 4.3 Selected Works

**Objetivo:** comprovar capacidade de execução.  
**Regras de conteúdo por projeto:**

- Nome, categoria (`Web`, `Mobile`, `Backend`, `Desktop`), status real (`Publicado`, `Em desenvolvimento`, `Estudo`).
- Contexto/problema, público, contribuição do desenvolvedor, decisões técnicas, stack comprovado, resultado observável ou aprendizado.
- Imagem ou captura verdadeira, com descrição alternativa pertinente.
- Links para código e demonstração **apenas quando existentes e públicos**; projetos privados poderão exibir case técnico sem código.
- Nunca usar métricas arbitrárias ou alegações de clientes e sistemas sem autorização.

**Curadoria preliminar informada pelo desenvolvedor (ordem sugerida de destaque):**

1. **Reports Registry** — projeto comercial remunerado, desenvolvido para empresa de dois engenheiros eletricistas. Sistema para registrar laudos de equipamentos elétricos e permitir a clientes consultar validade, data de inspeção e informações relevantes. **Projeto âncora** para clientes freelance. Não publicar nome/logotipo da empresa, dados de clientes, documentos ou capturas sem autorização.
2. **Audience-Counter** — aplicativo Android publicado na Google Play e utilizado por outras pessoas, conforme relato do desenvolvedor. **Projeto âncora mobile**; confirmar link da loja, stack, telas, estatísticas verificáveis e nomenclatura oficial.
3. **Web Matrículas** — solução implementada de gestão de matrículas, classes e turmas escolares; não entrou em operação na escola. Demonstrar capacidade de construir produto de negócio, deixando explícita a ausência de adoção.
4. **DS Commerce** — aplicação web full stack construída na Formação Desenvolvedor Moderno, da DevSuperior, com backend Spring Boot e frontend React. **Projeto acadêmico robusto**; indicar essa origem e que a integração com meio de pagamento não foi implementada.
5. **Audio Transcriber** — solução pessoal de transcrição de áudios via API, criada para reduzir trabalho manual. Projeto descontinuado devido ao custo da API; pode ser um case de identificação e solução de problema real, marcado como descontinuado.
6. **Projeto Spring + Ionic (Udemy)** — aplicação de bootcamp/curso, com backend Spring e frontend Ionic. Nome e escopo funcionais ainda não foram fornecidos; só publicar depois de verificar.
7. **CATALOG** — projeto do bootcamp Spring–React; apresentar como projeto educacional, com diferenciais e stack conferidos.

**Projetos adicionais que já estavam sendo considerados:** Controlaê (produto próprio, verificar fase de publicação e melhor posicionamento), TRIMBOW ULTRAS (em desenvolvimento, com restrições de confidencialidade e autorização da empresa), projetos de emuladores/estudo. **Não incluir automaticamente**: validar se contribuem mais que os sete casos acima.

**Seleção inicial recomendada:** três cards prioritários — Reports Registry, Audience-Counter e Web Matrículas ou DS Commerce (escolha dependente de material visual, acesso e qualidade técnica demonstrável). Organizar os demais em uma grade adicional ou página/visualização expandida. Não confundir prioridade editorial com ordenação temporal.

**Apresentação:** três colunas em desktop quando houver espaço; empilhamento mobile; cards com alturas variáveis e foco em conteúdo real. Remover todos os cinco projetos fictícios do design.

### 4.4 Technical Arsenal

**Objetivo:** leitura rápida da experiência técnica.  
**Modelo proposto:** agrupamentos por competências efetivamente demonstráveis, por exemplo `Frontend`, `Backend`, `Mobile`, `Banco de Dados`, `Ferramentas & Deploy`.  
**Candidatos identificados a validar:** Java, JavaScript, TypeScript, React, Spring Boot, Android/Jetpack Compose, Node.js, SQL. Não afirmar domínio de GraphQL, AWS, Redis, Docker ou Cloud Ops apenas por aparecerem no design demonstrativo.  
**UI:** cards inspirados nos exports do Stitch, com nome e ícone, sem barras percentuais subjetivas.

### 4.5 Philosophy & Profile

**Objetivo:** dar contexto humano e profissional ao desenvolvedor, explicar método de trabalho e independência na entrega.  
**Conteúdo:** apresentação breve, princípios de engenharia, forma de colaboração, experiência demonstrável, possibilidade de atuação remota.  
**Imagem:** foto profissional real, caso autorizada e disponível.  
**Regra:** `06+ Years Expertise` só deve aparecer após confirmação; caso contrário retirar o contador e utilizar uma descrição qualitativa.

### 4.6 Continuous Learning & Certifications — NOVA

**Objetivo:** complementar credibilidade e demonstrar atualização técnica sem competir com projetos.  
**Posição:** depois de Profile e antes de Contact.  
**Conteúdo de cada item:** título real, instituição, ano (quando conhecido), tipo (`Curso concluído`, `Certificação`, `Em andamento`), link verificável opcional.  
**Curadoria:** exibir quantidade reduzida de itens relevantes, com opção de acessar lista completa/LinkedIn caso necessário; diferenciar certificado de conclusão de certificação profissional.  
**Design:** preservar modo escuro, tipografia e cards discretos do Stitch; implementar uma seção React responsiva comum às duas larguras. Não reaproveitar o placeholder de projeto para curso.  
**Quatro cursos principais informados pelo desenvolvedor, na ordem de relevância:**

| Ordem | Formação / curso | Instituição | Natureza | Observação |
|---|---|---|---|---|
| 1 | Formação Desenvolvedor Moderno | DevSuperior | Formação / curso | A formação mais completa realizada pelo desenvolvedor; associada ao projeto DS Commerce. |
| 2 | Bootcamp React | DevSuperior | Bootcamp | Confirmar título oficial, datas e credencial. |
| 3 | Bootcamp Spring | DevSuperior | Bootcamp | Confirmar título oficial, datas e credencial. |
| 4 | Desenvolvimento com React Native | Udemy | Curso | Confirmar nome oficial e certificado de conclusão. |

**Estado:** o usuário apresentou esses cursos como suas principais formações concluídas; datas, nomes oficiais e URLs dos certificados permanecem pendentes. Não os classificar como certificações profissionais independentes. A UI deve permitir adicionar ou atualizar credenciais posteriormente. Frames ainda não existem no design auditado.

### 4.7 Execute Connection

**Objetivo:** receber pedidos de orçamento/projeto e contatos de recrutadores, minimizando fricção.  
**Campos mínimos propostos:** Nome, email, mensagem. O assunto ou tipo (`Projeto freelance`, `Oportunidade remota`, `Outro`) é opcional e pode ajudar triagem sem transformar o contato em um formulário longo.  
**Requisitos:** labels acessíveis, validação, confirmação de sucesso, estado de envio/erro, prevenção de spam, política de privacidade concisa quando aplicável, nenhuma chave sensível no bundle.  
**Serviço:** avaliar formulário gerenciado ou endpoint seguro compatível com hospedagem estática; não pressupor backend disponível no GitHub Pages.  
**Alternativa:** email/link de contato que funcione mesmo se a integração externa estiver indisponível.  
**Consistência:** mobile e desktop apresentam os mesmos campos e fluxo; somente layout muda.

### 4.8 Footer

Marca profissional correta, copyright com ano atual automatizado, links GitHub/LinkedIn/email e navegação essencial. Remover referência a 2024 e branding de amostra.

## 5. Design system e requisitos visuais

### 5.1 Tokens de referência (valores finais detalhados na seção 16.2)

| Token proposto | Valor candidato | Nota |
|---|---|---|
| `color.accent.cyan` | `#69DAFF` | Confirmado no `DESIGN.md` do Stitch; verificar contraste. |
| `color.accent.violet` | `#AC89FF` | Confirmado no `DESIGN.md` do Stitch. |
| `color.bg.base` | `#0B0E14` | Confirmado no `DESIGN.md` do Stitch. |
| `color.bg.elevated` | `#10131A` ou `#161A21` | Papéis exatos dependem da inspeção de frames. |
| `color.border` | `#22262F` ou `#282C36` | Atribuições semânticas dependem da implementação. |
| `color.text.primary` | `#FFFFFF` | Detectado; definir texto secundário de contraste adequado. |

**Tipografia confirmada pelo `DESIGN.md`:** Manrope para headings e Inter para UI; validar pesos e carregamento no navegador.  
**Interações:** hover, focus-visible, active, loading, disabled; animação discreta e respeito a `prefers-reduced-motion`.  
**Responsividade:** 360–430 px, 768–1024 px e 1280–1920 px como faixas de teste; adicionalmente verificar 320 px quando possível.

## 6. Requisitos funcionais

- **RF-01:** navegação por âncoras, funcional com teclado e botão Voltar.
- **RF-02:** internacionalização PT-BR e EN para títulos, CTAs, texto, estados e metadados apropriados.
- **RF-03:** projetos derivados de um dataset tipado e único para desktop/mobile.
- **RF-04:** ícones e links externos com rotulagem acessível; indicar indisponibilidade de demo sem links vazios.
- **RF-05:** seção Cursos com estados, credenciais e curadoria real.
- **RF-06:** formulário de contato funcional com validação, tratamento de erros, anti-spam e consentimento quando exigível.
- **RF-07:** links sociais e email válidos.
- **RF-08:** navegação e foco coerentes em layouts responsivos.
- **RF-09:** conteúdo profissional e disponibilidade mantidos em configuração simples, sem editar JSX para cada atualização.

## 7. Requisitos não funcionais e medição

- **Acessibilidade:** alvo WCAG 2.2 AA; testar contraste efetivo inclusive estados de foco, navegação por teclado, nomes acessíveis, zoom e redução de movimento. O PRD v1 indicava WCAG 2.1 AA; esta é uma recomendação de atualização.
- **Performance:** otimizar LCP, INP e CLS nas avaliações Core Web Vitals. Não assumir a meta rígida `FCP < 0.8 s` ou `CLS = 0` do PRD v1 como garantia universal; definir orçamentos mensuráveis com Lighthouse e dispositivos reais. Referências usuais: LCP ≤ 2,5 s, INP ≤ 200 ms e CLS ≤ 0,1 no percentil 75.
- **SEO:** title/description localizados, canonical adequado à URL final, Open Graph, sitemap e robots conforme necessidade, dados estruturados `Person` sem afirmações não verificadas.
- **Segurança:** HTTPS, links externos seguros, proteção de credenciais e verificação do endpoint de contato.
- **Qualidade:** TypeScript estrito, lint, testes unitários para regras críticas, testes de navegação e formulário, auditoria mobile/desktop e links.
- **Privacidade:** mínima coleta de dados; comunicar destino e finalidade das mensagens recebidas.

## 8. Arquitetura técnica proposta

**Decisão inicial recomendada:** React + TypeScript + Vite + Tailwind CSS, com componentes desacoplados e site estático publicado via GitHub Pages. Não há requisito confirmado que justifique servidor SSR no MVP. Alternativa Next.js somente se surgir motivo técnico real.  
**Internacionalização:** considerar reaproveitar lógica/traduções existentes do `react-i18next` após auditoria do código atual.  
**Deploy:** testar preview em branch/ambiente separado; manter produção antiga até a aprovação do novo release.  
**Formulário:** selecionar provedor de envio compatível com SPA estática antes de desenvolver UI de integração.

**Estrutura indicativa (sujeita à revisão de código):**

```text
src/
  app/
  components/
    layout/
    ui/
  sections/
    Hero/
    Projects/
    Skills/
    About/
    Learning/
    Contact/
  content/
    projects.ts
    courses.ts
    profile.ts
  i18n/
  styles/
  assets/
```

## 9. Backlog priorizado

| ID | Prioridade | Item | Evidência de pronto |
|---|---|---|---|
| P1 | Alta | Revisar identidade e copy PT/EN | Sem textos/contatos fictícios; narrativa aprovada. |
| P2 | Alta | Selecionar cases reais e seus links | Dataset revisado, com status e permissões. |
| P3 | Alta | Corrigir divergência de projetos e skills entre layouts | Mesmo conteúdo representado em ambas as composições. |
| P4 | Alta | Adicionar `Continuous Learning` nos dois layouts | Frames desktop e mobile com itens reais/estado vazio. |
| P5 | Alta | Unificar experiência de contato | Fluxo, campos, feedback e integração definidos. |
| P6 | Alta | Definir tokens semânticos e tipografia | Tokens documentados, contraste validado. |
| P7 | Alta | Revisar navegação e seletor de idioma | Header/foco/âncoras testáveis em mobile e desktop. |
| P8 | Média | Revisar experiência tablet/ultrawide | Regras de layout e quebra definidas. |
| P9 | Média | Definir assets de projetos e foto | Imagens autorizadas e otimizáveis. |
| P10 | Média | Preparar conteúdo SEO e metadados | Títulos, descrições e preview definidos. |

## 10. Plano de milestones

**M1 — Planejamento e Design (especificação concluída):** revisão histórica do Figma, análise dos exports originais do Stitch, PRD 2.3, curadoria inicial, design tokens e definição das interações. Não requer edição do Figma. Validações editoriais continuam obrigatórias antes da publicação.  
**M2 — Fundação técnica (iniciado):** validar o starter React + Vite + TypeScript + Tailwind, instalar dependências, executar build/testes, configurar lint, i18n, estrutura de dados, preview e fluxo Codex + Work. Não considerar o starter validado antes do build.  
**M3 — Interface:** implementar header, hero, projetos, competências, perfil, cursos e contato em telas responsivas.  
**M4 — Conteúdo e integração:** publicar cases reais, assets, tradução integral e serviço de contato.  
**M5 — Qualidade e lançamento:** acessibilidade, performance, SEO, fluxos, revisão final e troca controlada de versão.

## 11. Critérios de aceite do Milestone 1

- [x] Direcionamento: clientes freelance prioritários e posições remotas secundárias.
- [x] Identidade profissional nominal definida.
- [x] Seis seções definidas com `Continuous Learning` incluída.
- [x] Inspeção dos frames desktop e mobile concluída.
- [x] Divergências entre conteúdo real e placeholders registradas.
- [x] PRD consolidado na versão 2.3.
- [x] Inventário inicial de projetos reais recebido (sete projetos descritos).
- [ ] Links, detalhes técnicos, provas visuais e permissões de publicação dos projetos revisados.
- [x] Quatro cursos prioritários e suas instituições definidos.
- [ ] Nomes oficiais, datas e certificados dos cursos verificados.
- [ ] Biografia, anos de experiência, disponibilidade e canais de contato validados.
- [x] Edição do Figma dispensada: fontes de referência são os exports HTML, `DESIGN.md` e `screen.png` do Stitch.
- [ ] Tokens, espaçamento, fontes, responsividade e fluxos aprovados em handoff visual.

**Status do M1:** especificação e handoff técnico concluídos com base no Stitch. A validação de dados, mídias, links e contatos permanece aberta e bloqueia somente a publicação, não o início do M2.

## 12. Questões abertas para fechar o handoff

1. Quais dos projetos listados podem ser publicados com capturas, quais possuem repositório/demonstração e quais precisam de autorização de terceiros?
2. Quais são as URLs das quatro credenciais, títulos oficiais e anos de conclusão?
3. Qual email público, LinkedIn e currículo atual usar? Há preferência de canal de contato?
4. Qual biografia profissional, duração de experiência e disponibilidade devem ser declaradas?
5. Foto real será fornecida? Em caso afirmativo, qual versão e autorização de uso?
6. Qual provedor de formulário escolher, considerando hospedagem estática e privacidade?
7. O domínio continuará no GitHub Pages padrão ou futuramente ganhará domínio próprio?

## 13. Histórico de alterações v1.0 → v2.3

- Substituído foco genérico de “arquiteto técnico” pelo posicionamento profissional real.
- Alterada prioridade editorial para freelance, sem excluir trabalho remoto.
- Corrigida a identidade para Cleriston Pereira.
- Adicionada sexta seção `Continuous Learning & Certifications`.
- Registradas diferenças do Figma mobile/desktop e necessidade de dataset único.
- Reclassificados projetos, contatos e métricas do Stitch como placeholders.
- Acrescentados requisitos de conteúdo verificável, disponibilidade real, privacidade e manutenção.
- Recomendado Vite + React + TypeScript + Tailwind com deploy estático; ainda sujeito à confirmação técnica.
- Atualizados critérios de qualidade e separados requisitos medíveis de garantias irreais.

---

**Fontes primárias:** PRD v1.0 fornecido pelo usuário; exports web/mobile do Stitch (`code.html`, `DESIGN.md`, `screen.png`); inspeção histórica do Figma; repositório `CleristonMP/portfolio`, especialmente `package.json` e `README.md`; decisões expressas na conversa. As decisões novas estão apresentadas como recomendações ou requisitos de produto, não como recursos já construídos.


## 14. Decisões editoriais da curadoria (atualização v2.1)

- **Narrativa principal:** trabalho comercial real (Reports Registry) + produto mobile publicado (Audience-Counter) + amplitude de aplicações web/full-stack (Web Matrículas, DS Commerce).
- **Origem honesta dos cases:** classificar explicitamente `Comercial`, `Produto próprio`, `Projeto independente sem implantação`, `Projeto educacional`, `Projeto pessoal descontinuado`.
- **Não atribuir métricas não fornecidas:** números de downloads, usuários, ganho de produtividade e porcentagens de performance só depois de verificar.
- **Não inventar stacks:** Reports Registry, Audience-Counter e Web Matrículas precisam de inventário técnico; DS Commerce tem Java/Spring Boot e React confirmados pelo relato; Audio Transcriber usou API de transcrição mas provedor e arquitetura final devem ser confirmados.
- **Próxima ação de design:** substituir cards fictícios por três projetos reais, criar a seção Learning com quatro cursos, manter desktop e mobile na mesma base de conteúdo, adicionar identificação discreta da natureza dos projetos.
- **Atenção comercial:** não permitir que projetos de curso dominem a primeira dobra de Selected Works; a história de trabalho remunerado deve ser facilmente encontrada.


## 15. Curadoria de mídias — seleção para implementação (v2.3)

**Origem:** `https://github.com/CleristonMP/portfolio/tree/main/public/assets/medias/projects/`. A seleção abaixo é uma recomendação editorial baseada na listagem dos arquivos e em seus nomes. **Ainda não constitui auditoria visual pixel a pixel:** antes de publicar, conferir cortes, resoluções, dados identificáveis e conteúdo das imagens. A produção não deve depender de links `raw.githubusercontent.com` do repositório antigo: copiar/otimizar os assets selecionados para o novo projeto.

| Projeto | Capa candidata | Evidências para a página de case | Uso editorial |
|---|---|---|---|
| Reports Registry | `reports-registry/frontend-react-public-tracking.png` | `frontend-react-equipment-table.png`, `frontend-react-equipment-details-1.png`, `frontend-react-printing-pdf-reports.png`, `frontend-react-admin-page.png` | Principal case comercial; código privado, **sem link GitHub**. Cuidar de dados de contratantes/equipamentos. |
| Audience-Counter | `audience-counter/1-direct-count-view.jpg` | `counting-by-rows-view.jpg`, `direct-count-landscape-view-1.png`, `audience-counter-app-video.mp4` | Produto Android publicado; link Play Store apenas após validação. |
| Web Matrículas | `webmatriculas/frontend-react-admin-page.png` | `frontend-react-students.png`, `frontend-react-classes.png`, `frontend-react-classes-pdf-printing.png` | Solução pronta, sem implantação; não atribuir usuários reais. |
| DS Commerce | `dscommerce/1-frontend-react-home-page.png` | `frontend-react-cart-page.png`, `frontend-react-admin-page.png`, `frontend-react-product-details.png` | Case educacional Full Stack; não dizer que pagamentos estão integrados. |
| Audio Transcriber | `audio-transcriber/1-audio-transcriber-mobile-app-home.jpeg` | `frontend-web-audio-transcriber-app-home.png`, `frontend-web-audio-transcriber-app-transcription-screen.png`, `app-audio-transcriber-video.mp4` | Automação pessoal; projeto descontinuado devido ao custo da API. |
| CATALOG | `catalog/1-frontend-react-home-page.png` | `frontend-react-admin-products-listing.png`, `frontend-react-product-details.png` | Case educacional. |
| Spring + Ionic | `spring-ionic/1-frontend-ionic-android-emulator.png` | `frontend-ionic-web-home-page.png`, `frontend-ionic-android-cart-page.png`, `spring-ionic-app-main-video.mp4` | Case educacional mobile/híbrido. |

### Certificados priorizados

Origem: `public/assets/medias/certificates/`:

1. `1-modern-developer-professional-qualification.png` — Formação Desenvolvedor Moderno, DevSuperior.
2. `2-react.png` — Bootcamp React, DevSuperior.
3. `3-spring.png` — Bootcamp Spring, DevSuperior.
4. `4-react-native.jpg` — desenvolvimento com React Native, Udemy.

Manter as outras cinco imagens de certificados como conteúdo secundário, opcional. Para a interface, usar cards com nome real da formação, emissor e link para a credencial/imagem local; evitar usar imagem de certificado como único elemento legível, por acessibilidade.

### Regras de conversão e consistência

- O CTA `View Case Study` deve funcionar para o Reports Registry mesmo que não haja repositório público ou demonstração acessível.
- `GitHub` e `Live Demo` só devem aparecer quando URL concreta, acessível e autorizada for confirmada. Não usar botões inativos.
- Desktop e mobile devem utilizar a mesma lista de projetos e origem de dados; o layout mobile não deve esconder o terceiro projeto apenas por limitação do modelo Stitch.
- Criar filtros ou etiquetas sem inflar claims: `Commercial`, `Published App`, `Independent`, `Educational`, `Discontinued`.
- Reproduzir fotos/telas autênticas dos aplicativos; não substituir por imagens genéricas ou fictícias.
- Evitar métricas especulativas. Usuários ativos, produtividade e downloads somente com evidência.
- Validar a responsividade de imagens (`object-fit`, proporção, texto legível) e controlar peso dos vídeos.

### Limite de implementação desta etapa

Este documento inclui **o inventário e a seleção preliminar dos caminhos de mídia**, não uma substituição efetivamente concluída na aplicação. A edição do Figma foi descartada; os ajustes serão realizados diretamente nos componentes React, com os exports do Stitch como referência.


## 16. Revisão dos exports originais do Stitch (v2.3)

**Arquivos inspecionados:** `stitch_portfolio_web_design.zip` e `stitch_portfolio_mobile_design.zip`, cada qual com `code.html`, `DESIGN.md` e `screen.png`. Ambos os `DESIGN.md` são idênticos. Este material passa a ser a referência visual e de tokens para implementação, sem necessidade de editar o Figma.

### 16.1 Comparação do código exportado

| Item | Desktop/Web | Mobile | Diretriz |
|---|---|---|---|
| H1 | Full Stack Developer | Full Stack Developer | Preservar direção, personalizar apresentação |
| Projetos fictícios | Nebula Dashboard, Aether Protocol, Atlas Core | Nexus Engine, Vortex Vault | Substituir por fonte única de dados reais |
| Projetos por layout | 3 | 2 | Exibir mesma curadoria, mudando apenas disposição |
| Skills | Java, JavaScript, React, Node.js, SQL/NoSQL, Cloud Ops | JavaScript, Java, React, SQL | Mesmos grupos e dados nas duas versões |
| Contato | Execute Connection | Get In Touch | Mesma funcionalidade, textos localizados |
| Âncora dos projetos | `#works` | `#projects` | Usar `#projects` em toda a aplicação |
| Estilos | Tailwind via CDN + configurações embutidas | Tailwind via CDN + configurações embutidas | Extrair tokens para CSS e tema Tailwind compilado |
| Formulário | Inputs e textarea sem action/method | Inputs e textarea sem action/method | Implementar validação e mecanismo de envio real |
| Links | Vários placeholders `href="#"` | Vários placeholders `href="#"` | Sem links vazios em produção |
| Imagens | URLs externas de demonstração do Stitch | URLs externas de demonstração do Stitch | Substituir por assets locais otimizados |
| Cursos | Não possui seção | Não possui seção | Criar Continuous Learning responsiva |

**Visuais exportados:** `screen.png` desktop mede 448×1600 px e mobile 151×1600 px; são imagens prévias reduzidas e não substituem HTML nem avaliação responsiva no navegador. O HTML de ambos deve servir como guia estrutural, não como código de produção pronto.

### 16.2 Tokens canônicos extraídos de DESIGN.md

- Background/foundation: `#0b0e14`.
- Accent primary: `#69daff`; accent secondary: `#ac89ff`; gradiente CTA segue para `#00cffc` a 135 graus.
- Surface-container-low: `#10131a`; surface-container-highest: `#22262f`; texto sobre fundo: `#ecedf6`.
- Titulação: Manrope, com tracking negativo em displays; corpo e labels: Inter.
- Padrão: bastante espaço negativo, assimetria controlada, contraste tipográfico, superfícies em camadas, ghost borders discretos quando necessários, glassmorphism apenas em elementos apropriados.
- Cards de projetos: cantos de aproximadamente 1,5rem, imagens internas 0,75rem; botões primários pill.
- Transições previstas: cerca de 400 ms ease-out, respeitando `prefers-reduced-motion`.
- **Conflito resolvido:** as cores anteriores do PRD v1 eram aproximadas; os valores deste `DESIGN.md` prevalecem. Objetivos de acessibilidade e contraste prevalecem sobre efeitos puramente decorativos.

### 16.3 Arquitetura de implementação

Uma única SPA/landing page React + TypeScript + Vite + Tailwind CSS, com layout responsivo. Usar dados tipados para `projects`, `courses`, `skills` e contatos. Separar `components/`, `sections/`, `content/`, `i18n/` e `styles/`, sem criar dois sites. A implementação será preparada em repositório separado `CleristonMP/portfolio-v2` (proposta de organização), preservando o site atual. Na futura publicação, decidir entre manter o endereço `/portfolio/` ou outro destino e configurar o `base` do Vite conforme o repositório efetivamente publicado. Reaproveitar estratégia de internacionalização PT-BR/EN; links de contato só ficam ativos após verificação.

### 16.4 Curadoria de material real

**Primeira vitrine:** Reports Registry (comercial, código privado e fora do GitHub; imagens divulgáveis conforme autorização do desenvolvedor), Audience-Counter (Android, publicado), e Web Matrículas (implementado, não implantado). DS Commerce é candidato alternativo para terceiro card e ganha seção secundária. Nenhum card de projeto privado deve oferecer link de código; usar `View Case Study`. Indicadores de adoção ou métricas comerciais precisam de evidências antes de publicação.

**Cursos:** Formação Desenvolvedor Moderno, Bootcamp React, Bootcamp Spring (DevSuperior), Desenvolvimento com React Native (Udemy). Arquivos existentes do portfólio são candidatos para mídia de credencial; conferir legibilidade e dados pessoais antes de exibição.

### 16.5 Critérios de aceite para encerrar Milestone 1

- [x] Exports do Stitch inventariados e comparados.
- [x] Fonte de verdade de cores/tipografia identificada.
- [x] Diferenças e inconsistências Desktop/Mobile documentadas.
- [x] Projetos e cursos candidatos com mídias existentes identificados.
- [x] Estratégia de migração HTML → React definida.
- [ ] Validar capturas reais selecionadas (visual, sensibilidade e licenças) antes de publicá-las.
- [ ] Confirmar dados de contato, URLs externas, detalhes finais do case e currículo.
- [ ] Aprovação de escopo editorial final antes da publicação (pode ocorrer paralelamente ao início de M2).

### 16.6 Backlog inicial do Milestone 2

1. Usar o novo repositório `portfolio-v2` para desenvolvimento (quando criado), mantendo intacto o `portfolio` antigo e seu GitHub Pages.
2. Inicializar Vite + React + TypeScript, lint, testes mínimos e pipeline de build.
3. Configurar Tailwind com tokens de `DESIGN.md` e fontes Manrope/Inter.
4. Implementar shell e seções Hero, Projects, Arsenal, Philosophy, Learning, Contact e Footer.
5. Extrair layouts em componentes acessíveis e responsivos; mobile-first, sem duplicar conteúdo.
6. Migrar e otimizar assets reais; gerir estado editorial e links opcionais.
7. Implementar internacionalização PT-BR/EN e experiência acessível de formulário.
8. Testar responsividade (390, 768, 1280 e larguras extremas), navegação e build no base path.


## 17. Errata editorial da versão 2.3

Esta edição substitui a versão 2.3 anteriormente entregue com cabeçalho incorreto (2.2), referências duplicadas a versões e instruções obsoletas de edição do Figma. **Não altera o escopo técnico já decidido:** a fonte oficial de design é o Stitch; o Figma passa a ser apenas registro histórico. O M2 foi iniciado com um starter não validado por build e será conduzido via Codex + ChatGPT Work após auditoria.
