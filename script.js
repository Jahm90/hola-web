const ctx = document.getElementById('myChart').getContext('2d');

// Datos iniciales
let labels = [];
let data = [];

// Crear gráfico
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Valores Aleatorios',
            data: data,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                min: 0,
                max: 100
            },
            x: {
                type: 'time',
                time: {
                    unit: 'second',
                    displayFormats: {
                        second: 'HH:mm:ss'
                    }
                }
            }
        },
        animation: false // Para evitar animaciones al actualizar
    }
});

// Actualizar datos cada 5 segundos
setInterval(() => {
    const now = new Date();
    const label = new Date(now.getTime() - (now.getSeconds() % 60) * 1000); // Rango de 1 minuto
    const randomValue = Math.floor(Math.random() * 101);

    // Agregar nuevos datos
    labels.push(label);
    data.push(randomValue);

    // Limitar el rango a los últimos 60 segundos
    if (labels.length > 12) {
        labels.shift();
        data.shift();
    }

    // Actualizar gráfico
    myChart.update();
}, 5000);
