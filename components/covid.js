var covid19_APIKey = '79badf971fec458f9e3012fe0a6aedc0';
var covid19_APIKey_secondary = 'd4ab57aa4805492c9519379ebd149e43';

class CovidStats {
  constructor(statsElement) {
    this.statsElement = statsElement;
  }
  renderStats(covidData) {
    var lastUpdatedDateEl = this.statsElement.querySelector("#lastUpdatedDate");
    var date = new Date(covidData.updatedDateTime).toLocaleString();
    lastUpdatedDateEl.textContent = date;

    var recentlyRecoveredEl = this.statsElement.querySelector("#recentlyRecovered");
    recentlyRecoveredEl.textContent = covidData.stats.newlyRecoveredCases;

    var totalRecoveredEl = this.statsElement.querySelector("#totalRecovered");
    totalRecoveredEl.textContent = covidData.stats.totalRecoveredCases;
  }
}
