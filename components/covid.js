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

    var selectedRegionEl = this.statsElement.querySelector("#selectedRegion");
    if (covidData.location.provinceOrState !== null) {
      selectedRegionEl.textContent = covidData.location.provinceOrState;
    } else {
      selectedRegionEl.textContent = "USA (Entire Country)";
    }
  }
}
