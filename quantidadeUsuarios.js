import { getCSS } from "./common.js";

async function graficoLinha() {
  // Código para buscar os dados da API
  const url = 'https://sua-api/dados-linha.json';
  const res = await fetch(url);
  const dados = await res.json();

  // Criar os dados para o gráfico de linha
  const data = [
    {
      x: dados.datas,
      y: dados.numero_usuarios,
      type: 'line'
    }
  ];

  // Configurar o layout do gráfico
  const layout = {
    // ...
  };

  // Criar o gráfico
  const grafico = document.createElement('div');
  grafico.className = 'grafico';
  document.getElementById('graficos-container').appendChild(grafico);
  Plotly.newPlot(grafico, data, layout);
}

graficoLinha();