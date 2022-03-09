const colors = {
  blue: "#425DC7",
  red: "#F03460",
  yellow: "#FFBE00",
  green: "#2EB042",
};

function renderChartVendas() {
  const chartData = [
    {
      label: "Estornado",
      backgroundColor: colors.blue,
      borderColor: colors.blue,
      data: [0, 10, 5, 2, 20, 30, 45],
    },
    {
      label: "Cancelado",
      backgroundColor: colors.red,
      borderColor: colors.red,
      data: [0, 10, 5, 2, 20, 30, 45],
    },
    {
      label: "Não Pago",
      backgroundColor: colors.yellow,
      borderColor: colors.yellow,
      data: [34, 42, 5, 2, 20, 30, 45],
    },
    {
      label: "Pago",
      backgroundColor: colors.green,
      borderColor: colors.green,
      data: [23, 42, 52, 2, 20, 30, 45],
    },
  ];

  const labels = [
    "06/10/21",
    "07/10/21",
    "08/10/21",
    "09/10/21",
    "10/10/21",
    "11/10/21",
    "12/10/21",
  ];

  const data = {
    labels: labels,
    datasets: chartData,
  };

  const config = {
    type: "line",
    data: data,
    options: {
      plugins: {
        legend: {
          position: "bottom",
          align: "start",
          labels: {
            usePointStyle: true,
          },
        },
      },
    },
  };

  const myChart = new Chart(document.getElementById("chart-vendas"), config);
}

function renderChartPedidos() {
  const chartData = [
    {
      label: "Total de pedidos",
      backgroundColor: colors.blue,
      borderColor: colors.blue,
      data: [0, 10, 5, 2, 20, 30, 45],
    }
  ];

  const labels = [
    "06/10/21",
    "07/10/21",
    "08/10/21",
    "09/10/21",
    "10/10/21",
    "11/10/21",
    "12/10/21",
  ];

  const data = {
    labels: labels,
    datasets: chartData,
  };

  const config = {
    type: "line",
    data: data,
    options: {
      plugins: {
        legend: {
          position: "bottom",
          align: "start",
          labels: {
            usePointStyle: true,
          },
        },
      },
    },
  };

  const myChart = new Chart(document.getElementById("chart-pedidos"), config);
}

function renderChartRevendedores() {
  const chartData = [
    {
      label: "Valor total de vendas",
      backgroundColor: colors.blue,
      borderColor: colors.blue,
      data: [0, 10, 5, 22, 20, 30, 45],
    },
    {
      label: "Quantidade de pedidos",
      backgroundColor: colors.green,
      borderColor: colors.green,
      data: [0, 10, 5, 40, 20, 30, 45],
    },
    {
      label: "Comissão a pagar",
      backgroundColor: colors.red,
      borderColor: colors.red,
      data: [0, 10, 5, 16, 20, 30, 45],
    }
  ];

  const labels = [
    "06/10/21",
    "07/10/21",
    "08/10/21",
    "09/10/21",
    "10/10/21",
    "11/10/21",
    "12/10/21",
  ];

  const data = {
    labels: labels,
    datasets: chartData,
  };

  const config = {
    type: "line",
    data: data,
    options: {
      plugins: {
        legend: {
          position: "bottom",
          align: "start",
          labels: {
            usePointStyle: true,
          },
        },
      },
    },
  };

  const myChart = new Chart(document.getElementById("chart-revendedores"), config);
}

renderChartVendas();
renderChartPedidos();
renderChartRevendedores();