

// eu so preciso alterar o type do grafico que já adianta bastante



var ctx = document.getElementById('myChart').getContext('2d');

var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        // nivel do grafico de inicio ao fim
        datasets: [{
            data: [200, 300, 100, 400],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(130, 34, 227, 0.7)',
                'rgba(255, 206, 86, 0.7)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(130, 34, 227, 1)',
                'rgba(255, 206, 86, 1)'
            ]
        }],
        
        // Nome das propriedades dentro do gráfico
        labels: [
            'HTML',
            'CSS',
            'PHP',
            'JavaScript'
        ]
    },














    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// data = ;