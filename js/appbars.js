
var options1 = {
    chart: {
      height: 350,
      type: 'bar',
    },
    dataLabels: {
      enabled: false
    },
    series: [],
    title: {
      text: 'Inventario',
    },
    noData: {
      text: 'Loading...'
    }
  }

  var options2 = {
    chart: {
      height: 350,
      type: 'bar',
    },
    dataLabels: {
      enabled: false
    },
    series: [],
    title: {
      text: 'Citas por médico anuales',
    },
    noData: {
      text: 'Loading...'
    }
  }

var chart1 = new ApexCharts(document.querySelector("#lineChart1"), options1);
chart1.render();

var chart2 = new ApexCharts(document.querySelector("#lineChart2"), options2);
chart2.render();

setTimeout(() => {
    

    fetch('http://localhost:2000/info/inventory')
    .then(response => response.json())
    .then(data => {
        console.log(data)
      chart1.updateSeries([{
        name: 'Stock',
        data: data
      }])
    });


    fetch('http://localhost:2000/info/dates')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      chart2.updateSeries([{
        name: 'Citas',
        data: data
      }])
    });


}, "100");