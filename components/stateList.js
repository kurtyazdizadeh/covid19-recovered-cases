class StateList {
  constructor(stateListElement) {
    this.renderStates = this.renderStates.bind(this);
    this.stateListElement = stateListElement;
    this.getStateData = null;
  }
  renderStates (states) {
    this.list = document.querySelector('.state-list');

    for (var state in states) {
      var listItem = document.createElement('button');
      listItem.className = 'list-group-item list-group-item-action';
      listItem.textContent = states[state].name;

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
