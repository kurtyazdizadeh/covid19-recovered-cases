class App {
  constructor(geoChart, stateList, covidStats) {
    this.handleGetCovidStatsError = this.handleGetCovidStatsError.bind(this);
    this.handleGetCovidStatsSuccess = this.handleGetCovidStatsSuccess.bind(this);
    this.getCovidStats = this.getCovidStats.bind(this);
    this.handleGetStateDataError = this.handleGetStateDataError.bind(this);
    this.handleGetStateDataSuccess = this.handleGetStateDataSuccess.bind(this);
    this.getStateData = this.getStateData.bind(this);
    this.returnToCountryMap = this.returnToCountryMap.bind(this);

    this.geoChart = geoChart;
    this.stateList = stateList;
    this.covidStats = covidStats;

    this.states = {
      'US-AL': {name: 'Alabama'},
      'US-AK': {name: 'Alaska'},
      'US-AZ': {name: 'Arizona'},
      'US-AR': {name: 'Arkansas'},
      'US-CA': {name: 'California'},
      'US-CO': {name: 'Colorado'},
      'US-CT': {name: 'Connecticut'},
      'US-DE': {name: 'Delaware'},
      'US-FL': {name: 'Florida'},
      'US-GA': {name: 'Georgia'},
      'US-HI': {name: 'Hawaii'},
      'US-ID': {name: 'Idaho'},
      'US-IL': {name: 'Illinois'},
      'US-IN': {name: 'Indiana'},
      'US-IA': {name: 'Iowa'},
      'US-KS': {name: 'Kansas'},
      'US-KY': {name: 'Kentucky'},
      'US-LA': {name: 'Louisiana'},
      'US-ME': {name: 'Maine'},
      'US-MD': {name: 'Maryland'},
      'US-MA': {name: 'Massachusetts'},
      'US-MI': {name: 'Michigan'},
      'US-MN': {name: 'Minnesota'},
      'US-MS': {name: 'Mississippi'},
      'US-MO': {name: 'Missouri'},
      'US-MT': {name: 'Montana'},
      'US-NE': {name: 'Nebraska'},
      'US-NV': {name: 'Nevada'},
      'US-NH': {name: 'New Hampshire'},
      'US-NJ': {name: 'New Jersey'},
      'US-NM': {name: 'New Mexico'},
      'US-NY': {name: 'New York'},
      'US-NC': {name: 'North Carolina'},
      'US-ND': {name: 'North Dakota'},
      'US-OH': {name: 'Ohio'},
      'US-OK': {name: 'Oklahoma'},
      'US-OR': {name: 'Oregon'},
      'US-PA': {name: 'Pennsylvania'},
      'US-RI': {name: 'Rhode Island'},
      'US-SC': {name: 'South Carolina'},
      'US-SD': {name: 'South Dakota'},
      'US-TN': {name: 'Tennessee'},
      'US-TX': {name: 'Texas'},
      'US-UT': {name: 'Utah'},
      'US-VT': {name: 'Vermont'},
      'US-VA': {name: 'Virginia'},
      'US-WA': {name: 'Washington'},
      'US-WV': {name: 'West Virginia'},
      'US-WI': {name: 'Wisconsin'},
      'US-WY': {name: 'Wyoming'}
    }

    this.covidData = null;
    this.currentMapData = null;
  }
  start() {
    this.stateList.onStateClick(this.getStateData);
    this.geoChart.onStateClick(this.getStateData);
    this.geoChart.onBackClick(this.returnToCountryMap);
    this.getCovidStats();
    window.addEventListener('resize', () => {
      if (this.currentMapData === 'Country'){
        this.returnToCountryMap();
      } else {
        this.geoChart.drawStateMap(this.currentMapData);
        this.covidStats.renderStats(this.currentMapData);
      }
    });
  }
  getCovidStats(){
    $.ajax({
      method: "GET",
      url: "/api/covid-country/",
    })
      .done(this.handleGetCovidStatsSuccess)
      .fail(this.handleGetCovidStatsError);

  }
  handleGetCovidStatsSuccess(data){
    this.covidData = data;
    this.geoChart.loadGoogleChart(this.states, this.covidData);
    this.currentMapData = 'Country';
    this.covidStats.renderStats(this.covidData);
    this.stateList.renderStatesList(this.states, this.covidData);
  }
  handleGetCovidStatsError(error){
    this.geoChart.mapElement.innerHTML = "";

    var errorContainer = document.createElement('div');
    errorContainer.classList = "d-flex align-items-center justify-content-center text-center text-danger h-100";
    var errorMessage = document.createElement('h3');
    errorMessage.innerText = 'Error retrieving map data from API.\nPlease refresh the page and try again.';
    errorContainer.appendChild(errorMessage);

    this.geoChart.mapElement.appendChild(errorContainer);

    console.error(error);
  }
  getStateData(state){
    for (var key in this.states) {
      if (this.states[key]["name"] === state) {
        var stateCode = key;
        var stateAbbreviation = stateCode.substring(3);
      }
    }

    if (this.states[stateCode].data){
      if (this.currentMapData !== 'Country') {
        if (this.states[stateCode].data.location.isoCode === this.currentMapData.location.isoCode) return;
      }
      this.geoChart.drawStateMap(this.states[stateCode].data);
      this.currentMapData = this.states[stateCode].data;
      this.covidStats.renderStats(this.states[stateCode].data);
      return;
    }


    this.geoChart.mapElement.innerHTML = "";
    var spinnerContainer = document.createElement('div');
    spinnerContainer.classList = 'd-flex align-items-center justify-content-center h-100';
    var spinner = document.createElement('div');
    spinner.classList = 'spinner';

    spinnerContainer.appendChild(spinner);
    this.geoChart.mapElement.appendChild(spinnerContainer);

    $.ajax({
      method: "GET",
      url: `/api/covid-state/${stateAbbreviation}`,
    })
      .done(this.handleGetStateDataSuccess)
      .fail(this.handleGetStateDataError);
  }

  handleGetStateDataSuccess(data){
    var stateCode = data.location.isoCode;
    this.states[stateCode].data = data;

    this.geoChart.drawStateMap(this.states[stateCode].data);
    this.currentMapData = this.states[stateCode].data;
    this.covidStats.renderStats(this.states[stateCode].data);
  }
  handleGetStateDataError(error){
    this.geoChart.mapElement.innerHTML = "";

    var errorContainer = document.createElement('div');
    errorContainer.classList = "d-flex align-items-center justify-content-center text-center text-danger h-100";
    var errorMessage = document.createElement('h3');
    errorMessage.innerText = "Error retrieving state data from API\nPlease refresh the page and try again.";
    errorContainer.appendChild(errorMessage);

    this.geoChart.mapElement.appendChild(errorContainer);

    console.error(error);
  }

  returnToCountryMap(){
    this.geoChart.mapElement.innerHTML = "";
    this.geoChart.drawMap(this.states, this.covidData);
    this.currentMapData = 'Country';
    this.covidStats.renderStats(this.covidData);
  }
}
