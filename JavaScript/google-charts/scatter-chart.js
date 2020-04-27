google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);  

function drawChart() {
	
	var data = google.visualization.arrayToDataTable([
          ['Age', 'Weight'],
          [ a,      b],
          [ 40,      50.5],
          [ 11,     14],
          [ 40,      50],
          [ 30,      30.5],
          [ 6.50,    70]
        ]);

        var options = {
          title: 'Age vs. Weight comparison',
          hAxis: {title: 'Age1', minValue: 0, maxValue: 15},
          vAxis: {title: 'Weight1', minValue: 0, maxValue: 15},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));

        chart.draw(data, options);
      }
