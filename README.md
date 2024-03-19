## 🔄 Automatização de Sincronização entre Google Sheets e Google Calendar para Rastreamento de Vagas de Estágio
- Este projeto consiste em um script desenvolvido em Google Apps Script que automatiza a sincronização de eventos entre o Google Planilha e o Google Agenda. O script extrai informações de uma planilha do Google contendo detalhes sobre vagas de estágio e cria eventos correspondentes no Google Agenda, facilitando o acompanhamento e gerenciamento das etapas do processo seletivo.


## 🛠️ Como Usar

1. **Copie o Código do Script:**
   - Abra o Google Apps Script e cole o código do script `estagio.gs` na área de trabalho.

2. **Salve o Projeto:**
   - Salve o projeto clicando em "File" e depois em "Save".

3. **Autorização Inicial:**
   - Na primeira execução do script, será necessário autorizá-lo a acessar suas informações no Google Agenda e Google Planilha. Isso é essencial para que o script possa criar eventos no Google Agenda e acessar os dados da planilha.

4. **Execução do Script:**
   - Após autorizar, você pode executar o script clicando no botão "Run" ou "Executar".

5. **Execução Automática:**
   - Após a autorização inicial, o script poderá ser executado automaticamente conforme necessário, sem a necessidade de autorização adicional.


## 📊 Estrutura dos Dados
Os dados são organizados em uma tabela CSV com as seguintes colunas:

| Coluna                       | Descrição                                                 |
|------------------------------|-----------------------------------------------------------|
| DATA DA CANDIDATURA          | Data de candidatura à vaga de estágio                     |
| FIM DO PROCESSO SELETIVO     | Data de encerramento do processo seletivo                 |
| NOME DA EMPRESA              | Nome da empresa que oferece a vaga de estágio             |
| ETAPAS                       | Etapas do processo seletivo                               |
| ÁREA DO ESTÁGIO              | Área de atuação do estágio                                |
| SITE DE VAGAS                | Site onde a vaga foi anunciada                            |
| LINKS                        | Links relevantes relacionados à vaga                      |
| PROXIMA ETAPA                | Próxima etapa do processo seletivo                        |
| DATA DA PRÓXIMA ETAPA        | Data prevista para a próxima etapa do processo            |
| STATUS DO PROCESSO SELETIVO  | Status atual do processo seletivo                         |
| REQUISITOS DA VAGA           | Requisitos específicos da vaga de estágio                 |
| NOTAS                        | Observações ou detalhes importantes sobre a vaga          |
| PRIORIDADE                   | Prioridade da vaga de estágio                             |
| SINCRONIZAÇÃO                | Indica se o evento foi sincronizado com o Google Calendar |
