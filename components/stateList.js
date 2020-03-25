class StateList {
  constructor(stateListElement) {
    this.renderStatesList = this.renderStatesList.bind(this);
    this.stateListElement = stateListElement;
    this.getStateData = null;
  }
  renderStatesList (states, covidData) {
    this.list = document.querySelector('.state-list');

    for (var state in states) {
      var listItem = document.createElement('button');
      listItem.className = 'list-group-item list-group-item-action d-flex justify-content-between align-items-center';
      listItem.textContent = states[state].name;

      var badge = document.createElement('span');
      badge.className = 'badge badge-success badge-pill';

      for (var i = 0; i < covidData.stats.breakdowns.length; i++){
        if (states[state].name === covidData.stats.breakdowns[i].location.proviceOrState ||
            state === covidData.stats.breakdowns[i].location.isoCode
            ) {
              badge.textContent = covidData.stats.breakdowns[i].newlyRecoveredCases;
            }
      }
      listItem.appendChild(badge);

      listItem.addEventListener('click', () => {
        var prevActive = document.querySelector('.active');
        if (prevActive !== null){
          prevActive.classList.remove('active');
        }
        event.target.classList.add('active');
        this.getStateData(event.target.textContent);
      })
      this.list.appendChild(listItem);
    }
  }
  onStateClick(getStateData){
    this.getStateData = getStateData;
  }
}
