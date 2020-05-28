var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [{
            label: 'likeliness: least(1) to most(5)',
            data: [2, 5, 2, 7, 3],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(54, 162, 235, 0.2)'
            
                
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(54, 162, 235, 1)'
                
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

