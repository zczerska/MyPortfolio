var ctx = document.getElementById('myChart3');
var myChart3 = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['Plain', 'With Icons'],
        datasets: [{
            label: 'Button Preference: Icons vs Plain',
            data: [74, 26],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
				'rgba(75, 192, 192, 0.2)'
            
                
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
				'rgba(75, 192, 192, 1)'           
                
            ],
            borderWidth: 1
        }]
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

