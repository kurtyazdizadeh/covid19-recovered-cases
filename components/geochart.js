var googleMaps_APIKey = 'AIzaSyDhYugfpMscV09jwbTry1YKDUNGhtfh9PI';

class GeoChart {
  constructor(mapElement) {
    this.drawMap = this.drawMap.bind(this);

    this.mapElement = mapElement;
  }
  loadGoogleChart(stateList, data) {
    google.charts.load(
      'current',
      {
        packages: ['geochart'],
        'mapsApiKey': googleMaps_APIKey
      }
    );
    google.charts.setOnLoadCallback(() => {
      this.drawMap(stateList, data)
    });
  }
  drawMap(stateList, data) {
    var stateArray = [
      ['State', 'Persons Recovered']
    ]

    for (var states in stateList){
      for(var i = 0; i < data.stats.breakdowns.length; i++){
        if (
          states === data.stats.breakdowns[i].location.isoCode ||
          stateList[states] === data.stats.breakdowns[i].location.provinceOrState
        ) {
          stateArray.push([stateList[states], data.stats.breakdowns[i].totalRecoveredCases])
          }
      }
    }

    var data = google.visualization.arrayToDataTable(stateArray);
    var options = {
      region: 'US',
      resolution: 'provinces' //metros does counties
    };
    var chart = new google.visualization.GeoChart(document.getElementById('map'));
    chart.draw(data, options);
  }
}
