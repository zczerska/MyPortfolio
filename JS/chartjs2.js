var ctx = document.getElementById('myChart2');
var myChart2 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [{
            label: 'comfort level: least(1) to most(5)',
            data: [0, 1, 5, 7, 6],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(75, 192, 192, 0.2)'
            
                
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(75, 192, 192, 1)',
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

