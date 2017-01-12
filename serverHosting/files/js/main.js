const CHART = document.getElementById("lineChart");
console.log(CHART);


const LABELS = [1, " ", " ", 4, 5];



let lineChart = new Chart(CHART, {
type: 'line',
data: {
    labels: LABELS,
    datasets: [
        {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false,
        }
    ]
}
});

function adddata(){ $.ajax({
  url: "js/data.json",
  dataType: "json",
  success: function(response) {
	showData(response);}
});
}

function showData(myObj){
	lineChart.data.datasets[0].data = myObj.measurements;
	lineChart.data.labels = myObj.measurements;
	lineChart.update();
}

