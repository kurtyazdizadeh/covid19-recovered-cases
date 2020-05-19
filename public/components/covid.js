class CovidStats {
  constructor(statsElement) {
    this.statsElement = statsElement;
  }
  renderStats(covidData) {

    var { newlyRecoveredCases, totalRecoveredCases } = covidData.stats;
    var { provinceOrState } = covidData.location;

    var lastUpdatedDateEl = this.statsElement.querySelector('#lastUpdatedDate');
    var date = new Date(covidData.updatedDateTime).toLocaleString();
    lastUpdatedDateEl.textContent = date;

    var recentlyRecoveredEl = this.statsElement.querySelector('#recentlyRecovered');
    recentlyRecoveredEl.textContent = newlyRecoveredCases;

    var totalRecoveredEl = this.statsElement.querySelector('#totalRecovered');
    totalRecoveredEl.textContent = totalRecoveredCases;

    var selectedRegionEl = this.statsElement.querySelector('#selectedRegion');
    if (provinceOrState !== null) {
      selectedRegionEl.textContent = provinceOrState;
    } else {
      selectedRegionEl.textContent = 'USA (Entire Country)';
    }
  }
}
