class App {
  constructor(geoChart, stateList, covidStats) {
    this.geoChart = geoChart;
    this.stateList = stateList;
    this.covidStats = covidStats;
  }
  start() {
    this.geoChart.loadGoogleChart();
  }
}
