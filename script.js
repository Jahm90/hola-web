// Obtener el contenedor de la gráfica
const grafica = document.getElementById('grafica');

// Obtener el contexto del canvas
const ctx = grafica.getContext('2d');

// Definir los datos para la gráfica
const datos = {
  labels: [],
  datasets: [{
    label: 'Valor',
    data: [],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  }]
};

for (let i = 0; i < 24; i++) {
  const hora = `10:${i.toString().padStart(2, '0')}`;
  const valor = Math.floor(Math.random() * 100);
  datos.labels.push(hora);
  datos.datasets[0].data.push(valor);
}

// Crear la gráfica de línea
const graficaLinea = new Chart(ctx, {
  type: 'line',
  data: datos,
  options: {
    title: {
      display: true,
      text: 'Gráfica de línea'
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          max: 100
        }
      }]
    }
  }
});

