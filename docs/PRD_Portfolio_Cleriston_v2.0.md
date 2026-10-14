# PRD 2.0 — Portfólio Cleriston Pereira

**Projeto:** Renovação do Portfólio Full Stack & Mobile Developer  
**Versão:** 2.0 — especificação estratégica e funcional  
**Data:** 13 de outubro de 2026  
**Estado:** Direcionamento aprovado; conteúdo final e atualização do Figma pendentes  
**Repositório existente:** https://github.com/CleristonMP/portfolio  
**Site atual:** https://cleristonmp.github.io/portfolio/  
**Design de referência:** https://www.figma.com/design/cYxo7CjeHtfaOFOnAgRnmC/Portfolio---Novo-Design?node-id=0-1  
**Origem:** PRD v1.0 gerado pelo Stitch e decisões consolidadas em conversa.  

> **Nota de escopo:** Este documento revisa os requisitos e especifica ajustes ao design. O arquivo Figma original **não foi alterado**. Decisões propostas para implementação estão identificadas como tal; nomes, métricas, contatos e portfólio de projetos ainda precisam ser confirmados.

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

## 2. Auditoria do arquivo Figma — observações verificadas

**Arquivo:** `cYxo7CjeHtfaOFOnAgRnmC`, página `0:1`.

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

### 2.1 Identidade visual — divergência entre PRD v1.0 e Figma

- PRD v1.0 descreve ciano `#00D1FF`, violeta `#818CF8`, superfícies profundas como `#020617`, além de Manrope e Inter.
- Inspeção de cores sólidas encontradas nas camadas do Figma mostra exemplos `#69DAFF`, `#AC89FF`, `#0B0E14`, `#10131A`, `#161A21`, `#22262F`, `#282C36` e `#FFFFFF`.
- **Recomendação:** tratar o **Figma como referência visual primária** para os tokens iniciais, formalizando variáveis CSS/Tailwind. Confirmar tipografia e estados de interface no handoff. As cores detectadas não são, por si só, um inventário completo de estilos de texto ou efeitos.

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

## 4. Arquitetura de informação — versão 2.0

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
**Desktop:** menu horizontal com layout consistente com Figma.  
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

**Candidatos a curadoria (não seleção final):** Controlaê; TRIMBOW ULTRAS (marcar em desenvolvimento e observar autorização/segredos da empresa); projetos de estudo técnicos como emulador e outros repositórios públicos. O usuário deve validar elegibilidade, disponibilidade e links.  
**Apresentação:** três colunas em desktop quando houver espaço; empilhamento mobile; cards com alturas variáveis e foco em conteúdo real. Remover todos os cinco projetos fictícios do design.

### 4.4 Technical Arsenal

**Objetivo:** leitura rápida da experiência técnica.  
**Modelo proposto:** agrupamentos por competências efetivamente demonstráveis, por exemplo `Frontend`, `Backend`, `Mobile`, `Banco de Dados`, `Ferramentas & Deploy`.  
**Candidatos identificados a validar:** Java, JavaScript, TypeScript, React, Spring Boot, Android/Jetpack Compose, Node.js, SQL. Não afirmar domínio de GraphQL, AWS, Redis, Docker ou Cloud Ops apenas por aparecerem no design demonstrativo.  
**UI:** cards do Figma com nome e ícone, sem barras percentuais subjetivas.

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
**Design:** preservar modo escuro, tipografia e cards discretos do Figma; criar **frames próprios em Desktop e Mobile**. Não reaproveitar o placeholder de projeto para curso.  
**Estado:** conteúdo e frames não existem no design auditado; implementar após seleção de cursos.

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

### 5.1 Tokens iniciais a validar a partir do Figma

| Token proposto | Valor candidato | Nota |
|---|---|---|
| `color.accent.cyan` | `#69DAFF` | Detectado em camadas Figma; conferir uso e contraste. |
| `color.accent.violet` | `#AC89FF` | Detectado em camadas Figma. |
| `color.bg.base` | `#0B0E14` | Detectado em camadas Figma. |
| `color.bg.elevated` | `#10131A` ou `#161A21` | Papéis exatos dependem da inspeção de frames. |
| `color.border` | `#22262F` ou `#282C36` | Atribuições semânticas dependem da implementação. |
| `color.text.primary` | `#FFFFFF` | Detectado; definir texto secundário de contraste adequado. |

**Tipografia proposta pelo PRD original:** Manrope para headings e Inter para UI; verificar pesos disponíveis e detalhes reais do Figma.  
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

**M1 — Planejamento e Design (atual):** auditoria do Figma; PRD 2.0; seleção de conteúdo; ajustes nos frames; design tokens e especificação de interações; aprovação do handoff.  
**M2 — Fundação técnica:** escolher e configurar stack; lint/testes; i18n; estrutura de dados; preview.  
**M3 — Interface:** implementar header, hero, projetos, competências, perfil, cursos e contato em telas responsivas.  
**M4 — Conteúdo e integração:** publicar cases reais, assets, tradução integral e serviço de contato.  
**M5 — Qualidade e lançamento:** acessibilidade, performance, SEO, fluxos, revisão final e troca controlada de versão.

## 11. Critérios de aceite do Milestone 1

- [x] Direcionamento: clientes freelance prioritários e posições remotas secundárias.
- [x] Identidade profissional nominal definida.
- [x] Seis seções definidas com `Continuous Learning` incluída.
- [x] Inspeção dos frames desktop e mobile concluída.
- [x] Divergências entre conteúdo real e placeholders registradas.
- [x] PRD v2.0 produzido.
- [ ] Lista e permissões de projetos reais revisadas.
- [ ] Lista de cursos, status e certificados revisada.
- [ ] Biografia, anos de experiência, disponibilidade e canais de contato validados.
- [ ] Ajustes efetivamente aplicados ao arquivo Figma em ambos os layouts.
- [ ] Tokens, espaçamento, fontes, responsividade e fluxos aprovados em handoff visual.

**Status honesto do M1:** auditoria e documentação concluídas; milestone ainda **não pode ser marcado como concluído** porque faltam conteúdo validado e atualização visual.

## 12. Questões abertas para fechar o handoff

1. Quais 3–6 projetos reais são publicáveis, quais têm repositório privado e quais precisam de autorização de terceiros?
2. Quais cursos concluídos devem aparecer? Quais são cursos versus certificações externas?
3. Qual email público, LinkedIn e currículo atual usar? Há preferência de canal de contato?
4. Qual biografia profissional, duração de experiência e disponibilidade devem ser declaradas?
5. Foto real será fornecida? Em caso afirmativo, qual versão e autorização de uso?
6. Qual provedor de formulário escolher, considerando hospedagem estática e privacidade?
7. O domínio continuará no GitHub Pages padrão ou futuramente ganhará domínio próprio?

## 13. Controle de alterações v1.0 → v2.0

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

**Fontes primárias:** PRD v1.0 fornecido pelo usuário; inspeção de estruturas e textos do arquivo Figma informado; repositório `CleristonMP/portfolio`, especialmente `package.json` e `README.md`; decisões expressas na conversa. As decisões novas estão apresentadas como recomendações ou requisitos de produto, não como recursos já construídos.
