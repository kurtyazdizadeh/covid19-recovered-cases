class StateList {
  constructor(stateListElement) {
    this.renderStates = this.renderStates.bind(this);

    this.stateListElement = stateListElement;
  }
  renderStates(states){
    this.list = document.querySelector('.state-list');

    for (var state in states) {
      var listItem = document.createElement('button');
      listItem.className = 'list-group-item list-group-item-action';
      listItem.textContent = states[state];

      listItem.addEventListener('click', function(){
        var prevActive = document.querySelector('.active');
        if (prevActive !== null){
          prevActive.classList.remove('active');
        }
        event.target.classList.add('active');
        console.log('clicked from list', event.target.textContent)
      });

      this.list.appendChild(listItem);
    }
  }

}
