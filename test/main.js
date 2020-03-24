var covid19_APIKey = '79badf971fec458f9e3012fe0a6aedc0';
var covid19_APIKey_secondary = 'd4ab57aa4805492c9519379ebd149e43';
var googleMaps_APIKey = 'AIzaSyDhYugfpMscV09jwbTry1YKDUNGhtfh9PI';


$.ajax({
  type: "GET",
  url: "https://api.smartable.ai/coronavirus/stats/US",

  // Request headers
  beforeSend: function (xhrObj) {
    xhrObj.setRequestHeader("Cache-Control", "no-cache");
    xhrObj.setRequestHeader("Subscription-Key", covid19_APIKey);
  },
})
  .done(function (data) {
    alert("success");
    console.log("COVID-19 data", data);
  })
  .fail(function (error) {
    alert("error");
    console.log(error);
  });



  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Popularity'],
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700]
    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('chart'));

    chart.draw(data, options);
  }


  google.charts.load(
    'current',
    {
      packages: ['geochart'],
      'mapsApiKey': googleMaps_APIKey
    }
  );
  google.charts.setOnLoadCallback(drawChart);
