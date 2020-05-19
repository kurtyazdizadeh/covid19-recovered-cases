class GeoChart {
  constructor(mapElement) {
    this.drawMap = this.drawMap.bind(this);

    this.mapElement = mapElement;
    this.getStateData = null;
    this.countryMap = null;
  }
  loadGoogleChart(states, covidData) {
    google.charts.load('current', { packages: ['geochart'], 'mapsApiKey': 'AIzaSyDhYugfpMscV09jwbTry1YKDUNGhtfh9PI'});
    google.charts.setOnLoadCallback(() => {
      this.drawMap(states, covidData)
    });
  }
  drawMap(states, covidData) {
    var arrOfStates = [ ['State', 'Persons Recovered'] ];

    var { breakdowns } = covidData.stats;

    for (var state in states) {
      for(var i = 0; i < breakdowns.length; i++){
        if (
          state === breakdowns[i].location.isoCode ||
          states[state].name === breakdowns[i].location.provinceOrState
        ) {
            arrOfStates.push([states[state].name, breakdowns[i].totalRecoveredCases])
          }
      }
    }

    var chartData = google.visualization.arrayToDataTable(arrOfStates);
    var options = {
      region: 'US',
      resolution: 'provinces',
      enableRegionInteractivity: true
    };

    var chart = new google.visualization.GeoChart(this.mapElement);
    chart.draw(chartData, options);


    google.visualization.events.addListener(chart, 'select', () => {
      var selection = chart.getSelection();
      var state = "";
      if (selection.length > 0) {
        state = chartData.getValue(selection[0].row,0)
        this.getStateData(state);
      }
    })

    this.countryMap = this.mapElement.innerHTML;
  }
  onStateClick(getStateData){
    this.getStateData = getStateData;
  }
  drawStateMap(stateData) {
    var arrOfCounties = [
      ['Latitude', 'Longitude', 'County', 'People Recovered'],
    ];
    var totalStateRecovered = stateData.stats.totalRecoveredCases;

    var { breakdowns } = stateData.stats

    for (var i = 0; i < breakdowns.length; i++){
      var index = breakdowns[i];
      var { long, lat, county } = index.location;

      var longitude = long;
      var latitude = lat;
      var _county = county;
      var peopleRecovered = index.totalRecoveredCases;

      if (peopleRecovered > 0){
        arrOfCounties.push([latitude, longitude, _county+" County", peopleRecovered]);
        totalStateRecovered -= peopleRecovered;
      }
    }

    if (totalStateRecovered > 0 || stateData.stats.totalRecoveredCases === 0){
    arrOfCounties.push(
        [
          stateData.location.lat,
          stateData.location.long,
          stateData.location.provinceOrState,
          totalStateRecovered
        ]
      );
    }

    var chartData = google.visualization.arrayToDataTable(arrOfCounties);
    var options = {
      region: stateData.location.isoCode,
      resolution: 'provinces',
      displayMode: 'markers'
    }

    var mapEl = document.getElementById('map');
    var chart = new google.visualization.GeoChart(mapEl);
    chart.draw(chartData, options);

    var backButton = document.createElement('button');
    backButton.textContent = "Back to US Map";
    backButton.className = "btn btn-danger position-absolute back-button";
    backButton.addEventListener('click', this.returnToCountryMap);

    mapEl.appendChild(backButton);
  }
  onBackClick(returnToCountryMap){
    this.returnToCountryMap = returnToCountryMap;
  }
}
