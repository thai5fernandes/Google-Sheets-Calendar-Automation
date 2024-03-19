function estagio() {
  // Obtém a planilha ativa
  var planilha = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  // Obtém os valores de todas as células da planilha ativa
  var valores = planilha.getDataRange().getValues();
  // Registra os valores obtidos no console do Google Apps Script
  Logger.log(valores);

  // Obtém a agenda padrão do usuário
  var agenda = CalendarApp.getDefaultCalendar();

  // Itera sobre todas as linhas da planilha, começando da segunda linha (índice 1)
  for (var i = 1; i < valores.length; i++) {
    var linha = valores[i];
    var sincronizado = linha[14]; // Obtém o valor da coluna "O" (coluna 14) indicando se o evento já foi sincronizado

    // Verifica se a célula está vazia, indefinida ou não marcada como "Sim"
    if (sincronizado === undefined || sincronizado === "" || sincronizado.toLowerCase() !== "sim") {
      try {
        // Extrai os dados relevantes da linha da planilha
        var data_final = linha[1]; // Data final do processo seletivo
        var nome_empresa = linha[2]; // Nome da empresa
        var proxima_etapa = linha[7]; // Próxima etapa do processo seletivo
        var dataProximaEtapa = linha[8]; // Data da próxima etapa do processo seletivo
        var prioridade = linha[13]; // Prioridade do evento

        // Formata as datas para incluir apenas a parte da data (sem hora)
        var dataInicioFimProc = new Date(data_final);
        var dataFimFimProc = new Date(data_final);
        dataInicioFimProc.setHours(0, 0); // Define a hora de início para 00:00
        dataFimFimProc.setHours(23, 59); // Define a hora de término para 23:59

        var dataInicioProxEtapa = new Date(dataProximaEtapa);
        var dataFimProxEtapa = new Date(dataProximaEtapa);
        dataInicioProxEtapa.setHours(0, 0); // Define a hora de início para 00:00
        dataFimProxEtapa.setHours(23, 59); // Define a hora de término para 23:59

        // Determina a cor do evento com base na prioridade
        var cor;
        switch (prioridade) {
          case "Alto":
            cor = CalendarApp.EventColor.RED;
            break;
          case "Médio":
            cor = CalendarApp.EventColor.YELLOW;
            break;
          case "Baixo":
            cor = CalendarApp.EventColor.GREEN;
            break;
          default:
            cor = CalendarApp.EventColor.BLUE;
        }

        // Cria eventos no calendário para o fim do processo seletivo e para a próxima etapa
        var tituloFimProc = "Fim do processo seletivo - " + nome_empresa;
        var eventoFimProc = agenda.createAllDayEvent(tituloFimProc, dataInicioFimProc);
        eventoFimProc.setColor(cor);

        var tituloProxEtapa = "Proxima etapa - " + proxima_etapa + " - " + nome_empresa;
        var eventoProxEtapa = agenda.createAllDayEvent(tituloProxEtapa, dataInicioProxEtapa);
        eventoProxEtapa.setColor(cor);

        // Atualiza a coluna "O" (sincronizado) na planilha para "Sim", indicando que os eventos foram sincronizados
        planilha.getRange(i + 1, 15).setValue("Sim");
      } catch (error) {
        // Registra no console caso ocorra algum erro durante o processamento de uma linha específica
        Logger.log("Erro ao processar linha " + (i + 1) + ": " + error.message);
      }
    }
  }
}
