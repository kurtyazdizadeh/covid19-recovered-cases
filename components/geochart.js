var googleMaps_APIKey = 'AIzaSyDhYugfpMscV09jwbTry1YKDUNGhtfh9PI';

class GeoChart {
  constructor(mapElement) {
    this.drawMap = this.drawMap.bind(this);
    // this.drawStateMap = this.drawStateMap(this); <-- errors out

    this.mapElement = mapElement;
    this.getStateData = null;
  }
  loadGoogleChart(states, covidData) {
    google.charts.load('current', { packages: ['geochart'], 'mapsApiKey': googleMaps_APIKey});
    google.charts.setOnLoadCallback(() => {
      this.drawMap(states, covidData)
    });
    google.charts.setOnLoadCallback(() => {
      this.drawStateMap(stateData)
    });
  }
  drawMap(states, covidData) {
    var stateArray = [ ['State', 'Persons Recovered'] ];

    for (var state in states){
      for(var i = 0; i < covidData.stats.breakdowns.length; i++){
        if (
          state === covidData.stats.breakdowns[i].location.isoCode ||
          states[state].name === covidData.stats.breakdowns[i].location.provinceOrState
        ) {
            stateArray.push([states[state].name, covidData.stats.breakdowns[i].totalRecoveredCases])
          }
      }
    }

    var chartData = google.visualization.arrayToDataTable(stateArray);
    var options = {
      region: 'US',
      resolution: 'provinces', //to show state borders
      enableRegionInteractivity: true
    };
    var chart = new google.visualization.GeoChart(document.getElementById('map'));
    chart.draw(chartData, options);

    //event listener to grab the name of the state user clicks on the chart
    google.visualization.events.addListener(chart, 'select', () => {
      var selection = chart.getSelection();
      var state = "";
      if (selection.length > 0) {
        state = chartData.getValue(selection[0].row,0)
        this.getStateData(state);
      }
    })
  }
  onStateClick(getStateData){
    this.getStateData = getStateData;
  }
  drawStateMap(stateData) {
    var array = [
      ['Latitude', 'Longitude', 'County', 'People Recovered'],
    ];

    for (var i = 0; i < stateData.stats.breakdowns.length; i++){
      var index = stateData.stats.breakdowns[i];
      var longitude = index.location.long;
      var latitude = index.location.lat;
      var county = index.location.county;
      var peopleRecovered = index.totalRecoveredCases;

      if (peopleRecovered > 0){
        array.push([latitude, longitude, county, peopleRecovered]);
      }
    }

    if (array.length < 2){
      console.log('not enough data to display on page');
      return;
    }

    var chartData = google.visualization.arrayToDataTable(array);
    var options = {
      region: stateData.location.isoCode,
      resolution: 'provinces',
      displayMode: 'markers'
    }

    var chart = new google.visualization.GeoChart(document.getElementById('map2'));
    chart.draw(chartData, options);
  }
}
