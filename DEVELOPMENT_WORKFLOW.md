# Fluxo de desenvolvimento — Work → Codex → Revisão → Commit → Push

## Responsabilidades e referências

Work planeja, resolve decisões de produto e revisa tecnicamente. Codex implementa o escopo atribuído e produz evidências. O responsável pelo projeto decide mudanças de escopo e publicação.

Usar a edição corrigida de `docs/PRD_Portfolio_Cleriston_v2.3.md` para requisitos: milestones na seção 10, mídias na 15 e exports/tokens/arquitetura na 16; a errata está na 17. `DESIGN.md`, HTMLs e capturas dos ZIPs do Stitch são a fonte oficial de design. Figma é apenas referência histórica opcional, sem obrigação de edição ou sincronização. O plano executável está em `docs/MILESTONE_2_PLAN.md`. Não marcar etapas concluídas por aparência ou build isolado.

O M1 de especificação e handoff técnico está concluído; M2 foi iniciado com auditoria e planejamento. Dados, mídias, contatos, credenciais e permissões ainda pendentes devem ser registrados e validados antes da publicação. O aceite de cada tarefa técnica continua dependendo de seus próprios critérios.

Trabalhar somente em `CleristonMP/portfolio-v2`. Não alterar o portfólio antigo. Não publicar ou criar infraestrutura de deploy neste escopo. Reaproveitar starter, assets autorizados e dependências existentes; justificar adições.

## Regras de implementação e revisão

- **Código limpo e legível para humanos:** usar nomes descritivos, formatação consistente e funções com responsabilidade clara. Manter JSX, estilos e lógica organizados para facilitar leitura e manutenção. Evitar código comprimido manualmente, expressões excessivamente densas e comentários que apenas repetem o código; comentar decisões e restrições quando necessário. Formatação automática complementa a revisão humana de clareza.
- **Componentização e reaproveitamento quando apropriado:** extrair componentes quando houver repetição real de estrutura/comportamento ou uma responsabilidade de interface bem definida. Reutilizar padrões comuns com props claras e tipadas; manter dados separados da apresentação. Um componente pode ter uso único se tornar uma seção complexa mais compreensível. Evitar fragmentação de elementos triviais, abstrações especulativas e componentes genéricos com muitas opções sem necessidade concreta.

Essas regras se aplicam a cada entrega de código. Na revisão, verificar se a organização facilita entender e alterar o comportamento, se duplicações relevantes foram tratadas e se cada extração tem uma finalidade clara. Não impor limites arbitrários de linhas ou quantidade de componentes.

## 1. Work — definir uma entrega revisável

Cada pedido contém: objetivo, IDs de tarefas, requisitos/fontes, arquivos ou áreas permitidas, critérios de aceite, validações e itens fora de escopo. Manter rastreabilidade ao PRD ao distribuir o backlog entre milestones; registrar itens adiados e seu milestone de destino. Registrar decisões ainda abertas; não converter dados desconhecidos em fatos. Preferir pequenos lotes que possam ser revisados separadamente.

## 2. Codex — implementar e validar

1. Ler instruções locais, pedido, plano e fontes relevantes. Conferir branch, remote e estado do trabalho sem sobrescrever alterações existentes.
2. Usar branch dedicada. Caso ainda não exista commit inicial, preparar baseline com exclusões antes de versionar; nunca adicionar `node_modules`, build ou segredos. Consultar `PROJECT_STATUS.md` para o acompanhamento atual; a baseline de M2-01/M2-02 já foi registrada em `e3fb2be`.
3. Implementar apenas tarefas atribuídas, preservando identidade Stitch, dados únicos desktop/mobile, PT/EN e acessibilidade. Evitar dependências e abstrações sem necessidade.
4. Executar checks apropriados: typecheck, lint, formato, testes de comportamento e build; smoke de navegador quando a tarefa afetar interação/layout. Scripts ainda ausentes são pendências, não checks aprovados.
5. Revisar o próprio diff. Reportar arquivos, motivo, critérios atendidos, checks/resultados, riscos e pendências. Se uma verificação não puder ser executada, registrar o impedimento e não declarar sucesso.
6. Apresentar o relatório para revisão do Work sem executar `git commit` ou `git push`. Identificar automaticamente hashes, branch, milestone e demais informações disponíveis no projeto; não solicitar ao usuário dados que possam ser obtidos com segurança pelo contexto e pelo Git.

## 3. Work — revisão técnica

Comparar diff e evidências com os critérios: escopo, PRD, visual, dados editoriais, teclado, idiomas, responsividade, legibilidade humana e componentização apropriada. Aplicar as regras de implementação e revisão acima. Build não comprova fidelidade, acessibilidade ou funcionamento do contato. Solicitar correções concretas e repetir apenas os checks afetados. Aceite deve registrar evidência; critérios pendentes impedem fechar a tarefa correspondente.

Emitir um parecer explícito:

- `APPROVED`: alterações revisadas e critérios aplicáveis atendidos; identificar o conjunto aprovado e a branch autorizada.
- `CHANGES_REQUESTED`: correções necessárias, com indicação concreta dos critérios não atendidos.
- `BLOCKED`: revisão ou validação impedida; registrar motivo e o que falta para prosseguir.

Enquanto não houver aprovação da entrega, Codex realiza as correções solicitadas sem criar commits. Cada rodada de correção exige nova revisão. Aprovar um plano ou workflow não equivale a aprovar as alterações de uma implementação.

## 4. Commit e push — após aprovação da entrega

Após `APPROVED`, Codex poderá executar `git commit` e `git push` na branch autorizada, conforme esta política, desde que não exista restrição explícita na tarefa ou nas instruções do responsável. Restrições como “não fazer commit/push nesta entrega” continuam válidas até serem explicitamente retiradas; o parecer técnico não as revoga.

Antes das operações, confirmar que:

- A aprovação corresponde exatamente às alterações que serão commitadas, incluindo arquivos novos.
- Não existem alterações novas ou não revisadas no conjunto a enviar; alterações alheias permanecem fora do commit.
- Somente arquivos relacionados à tarefa e revisados estão selecionados; conferir o diff staged.
- Os critérios de validação continuam atendidos.
- Remote e branch de destino correspondem ao autorizado, sem conflitos ou erros nas operações do Git.

Se o código ou qualquer arquivo do conjunto aprovado mudar após a revisão, suspender a autorização até nova revisão. Não resolver conflitos alterando o conteúdo aprovado e prosseguir sem novo parecer. Registrar um commit por mudança coerente; interromper e reportar erros de Git, sem sobrescrever histórico ou alterações para contorná-los.

Usar Conventional Commits: `tipo(escopo): descrição objetiva`. Tipos usuais: `feat`, `fix`, `refactor`, `test`, `docs`, `build`, `ci`, `chore`. Usar `!`/`BREAKING CHANGE` somente para quebra real.

Se a mensagem não for fornecida, Codex **deve gerá-la automaticamente a partir do conteúdo efetivamente aprovado**, não do plano inteiro, sem pedir ao usuário uma mensagem que possa derivar. Se o commit ainda não estiver autorizado, entregar a mensagem sugerida no handoff.

Exemplos: `docs(workflow): define milestone 2 plan and review flow`; `chore(tooling): configure lint and formatting checks`; `fix(i18n): update document language when switching locale`.

Commits e pushes aprovados não autorizam automaticamente merge na `main`, criação de release ou deploy em produção. M2-01/M2-02 foram entregues inicialmente sem commit/push e depois liberadas pelo parecer do Work registrado na conversa. Cada nova entrega deve seguir o mesmo fluxo de implementação sem commit/push até aprovação verificável própria.

## Formato do handoff

- Tarefas e critérios: estado individual e evidência.
- Alterações: o que mudou e por quê.
- Validação: comando ou procedimento, resultado e limitações.
- Pendências: responsável e gate futuro, quando conhecido.
- Revisão Work: parecer, conjunto de alterações revisado e branch autorizada, quando aplicável.
- Commit: mensagem sugerida ou hash caso executado com autorização.
- Push: destino e resultado da operação, quando executado; registrar eventuais erros ou pendências.

Nenhuma tarefa está concluída até validar seus critérios. Nunca relatar push, CI remota, deploy ou publicação sem evidência da execução correspondente.
