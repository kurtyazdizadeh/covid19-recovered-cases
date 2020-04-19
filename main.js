var mapEl = document.getElementById('map');
var stateListEl = document.getElementById('stateList');
var statsEl = document.getElementById('stats');

var geoChart = new GeoChart(mapEl);
var stateList = new StateList(stateListEl);
var covidStats = new CovidStats(statsEl);

var app = new App(geoChart, stateList, covidStats);

app.start();
