var googleMaps_APIKey = 'AIzaSyDhYugfpMscV09jwbTry1YKDUNGhtfh9PI';

class GeoChart {
  constructor(mapElement) {
    this.drawMap = this.drawMap.bind(this);

    this.mapElement = mapElement;
  }
  loadGoogleChart(states, data) {
    google.charts.load('current', { packages: ['geochart'], 'mapsApiKey': googleMaps_APIKey});
    google.charts.setOnLoadCallback(() => {
      this.drawMap(states, data)
    });
  }
  drawMap(states, data) {
    var stateArray = [
      ['State', 'Persons Recovered']
    ]
    for (var state in states){
      for(var i = 0; i < data.stats.breakdowns.length; i++){
        if (
          state === data.stats.breakdowns[i].location.isoCode ||
          states[state] === data.stats.breakdowns[i].location.provinceOrState
        ) {
            stateArray.push([states[state], data.stats.breakdowns[i].totalRecoveredCases])
          }
      }
    }

    var data = google.visualization.arrayToDataTable(stateArray);
    var options = {
      region: 'US',
      resolution: 'provinces', //to show state borders
      enableRegionInteractivity: true
    };
    var chart = new google.visualization.GeoChart(document.getElementById('map'));
    chart.draw(data, options);

    //event listener to grab the name of the state user clicks on the chart
    google.visualization.events.addListener(chart, 'select', () => {
      var selection = chart.getSelection();
      var state = "";
      if (selection.length > 0) {
        state = data.getValue(selection[0].row,0)
      }
      console.log(state);
    })
  }
}
