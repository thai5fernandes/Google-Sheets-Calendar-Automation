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




## 🔄 Automation of Synchronization between Google Sheets and Google Calendar for Tracking Internship Vacancies
- This project consists of a script developed in Google Apps Script that automates the synchronization of events between Google Sheet and Google Calendar. The script extracts information from a Google spreadsheet containing details about internship vacancies and creating corresponding events in Google Calendar, making it easier to monitor and manage the stages of the selection process.


## 🛠️ How to use

1. **Copy the Script Code:**
     - Open Google Apps Script and paste the `estagio.gs` script code onto the desktop.

2. **Save the Project:**
     - Save the project by clicking “File” and then “Save”.

3. **Initial Authorization:**
     - When you first run the script, you will need to authorize it to access your information in Google Calendar and Google Sheet. This is essential so that the script can create events in Google Calendar and access spreadsheet data.

4. **Script Execution:**
     - After authorizing, you can run the script by clicking the "Run" or "Run" button.

5. **Automatic Execution:**
     - After initial authorization, the script can be automatically executed as needed, without the need for additional authorization.


## 📊 Data Structure

The data is organized in a CSV table with the following columns:

| Column                      | Description                                                 |
|-----------------------------|-------------------------------------------------------------|
| APPLICATION DETAILS         | Internship application details                              |
| END OF THE SELECTION PROCESS | Closing details of the selection process                    |
| COMPANY NAME                | Name of the company offering an internship position         |
| STEPS                       | Stages of the selection process                             |
| INTERNSHIP AREA             | Internship area of activity                                 |
| VACANCIES SITE              | Website where the vacancy was advertised                    |
| LINKS                       | Relevant links related to the vacancy                       |
| NEXT STAGE                  | Next stage of the selection process                         |
| NEXT STAGE DATA             | Data expected for the next stage of the process             |
| SELECTION PROCESS STATUS    | Current status of the selection process                     |
| VACANCY REQUIREMENTS        | Specific requirements for the internship position            |
| NOTES                       | Observations or important details about the vacancy         |
| PRIORITY                    | Internship vacancy priority                                 |
| SYNCHRONIZATION             | Indicates whether the event has been synced to Google Calendar |
