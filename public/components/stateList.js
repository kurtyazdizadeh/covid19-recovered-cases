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

      var { breakdowns } = covidData.stats;

      for (var i = 0; i < breakdowns.length; i++){
        if (states[state].name === breakdowns[i].location.proviceOrState ||
            state === breakdowns[i].location.isoCode
        ) {
          if (breakdowns[i].newlyRecoveredCases > 0)
          badge.textContent = breakdowns[i].newlyRecoveredCases;
        }
      }
      listItem.appendChild(badge);

      listItem.addEventListener('click', () => {
        if (event.target.classList.contains('active')) return;

        var prevActive = document.querySelector('.active');
        if (prevActive !== null){
          prevActive.classList.remove('active');
        }

        event.target.classList.add('active');
        this.getStateData(event.target.childNodes[0].wholeText);
      })
      this.list.appendChild(listItem);
    }
  }
  onStateClick(getStateData){
    this.getStateData = getStateData;
  }
}
