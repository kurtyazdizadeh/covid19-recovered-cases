var mapEl = document.querySelector('#map');
var stateListEl = document.querySelector('#stateList');
var statsEl = document.querySelector('#stats');


var geoChart = new GeoChart(mapEl);
var stateList = new StateList(stateListEl);
var covidStats = new CovidStats(statsEl);

var app = new App(geoChart, stateList, covidStats);

app.start();
