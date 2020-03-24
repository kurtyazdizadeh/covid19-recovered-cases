var googleMaps_APIKey = 'AIzaSyDhYugfpMscV09jwbTry1YKDUNGhtfh9PI';

class GeoChart {
  constructor(mapElement) {
    this.mapElement = mapElement;
  }
  loadGoogleChart() {
    google.charts.load(
      'current',
      {
        packages: ['geochart'],
        'mapsApiKey': googleMaps_APIKey
      }
    );
    google.charts.setOnLoadCallback(this.drawMap);

  }
  drawMap() {
    var data = google.visualization.arrayToDataTable([
      ['State', 'Persons Recovered'],
      ['California', 200],
      ['NV', 300],
      ['FL', 400],
      ['TX', 500],
      ['AZ', 600],
      ['NY', 700]
    ]);

    var options = {
      region: 'US',
      resolution: 'provinces' //metros does counties
    };

    var chart = new google.visualization.GeoChart(document.getElementById('map'));

    chart.draw(data, options);
  }
}
