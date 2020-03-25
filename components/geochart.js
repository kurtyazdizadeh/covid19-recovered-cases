var googleMaps_APIKey = 'AIzaSyDhYugfpMscV09jwbTry1YKDUNGhtfh9PI';

class GeoChart {
  constructor(mapElement) {
    this.drawMap = this.drawMap.bind(this);

    this.mapElement = mapElement;
    this.stateList = {
      'US-AL': 'Alabama',
      'US-AK': 'Alaska',
      'US-AZ': 'Arizona',
      'US-AR': 'Arkansas',
      'US-CA': 'California',
      'US-CO': 'Colorado',
      'US-CT': 'Connecticut',
      'US-DE': 'Delaware',
      'US-DC': 'District Of Columbia',
      'US-FL': 'Florida',
      'US-GA': 'Georgia',
      'US-HI': 'Hawaii',
      'US-ID': 'Idaho',
      'US-IL': 'Illinois',
      'US-IN': 'Indiana',
      'US-IA': 'Iowa',
      'US-KS': 'Kansas',
      'US-KY': 'Kentucky',
      'US-LA': 'Louisiana',
      'US-ME': 'Maine',
      'US-MD': 'Maryland',
      'US-MA': 'Massachusetts',
      'US-MI': 'Michigan',
      'US-MN': 'Minnesota',
      'US-MS': 'Mississippi',
      'US-MO': 'Missouri',
      'US-MT': 'Montana',
      'US-NE': 'Nebraska',
      'US-NV': 'Nevada',
      'US-NH': 'New Hampshire',
      'US-NJ': 'New Jersey',
      'US-NM': 'New Mexico',
      'US-NY': 'New York',
      'US-NC': 'North Carolina',
      'US-ND': 'North Dakota',
      'US-OH': 'Ohio',
      'US-OK': 'Oklahoma',
      'US-OR': 'Oregon',
      'US-PA': 'Pennsylvania',
      'US-RI': 'Rhode Island',
      'US-SC': 'South Carolina',
      'US-SD': 'South Dakota',
      'US-TN': 'Tennessee',
      'US-TX': 'Texas',
      'US-UT': 'Utah',
      'US-VT': 'Vermont',
      'US-VA': 'Virginia',
      'US-WA': 'Washington',
      'US-WV': 'West Virginia',
      'US-WI': 'Wisconsin',
      'US-WY': 'Wyoming'
    }
  }
  loadGoogleChart() {
    google.charts.load(
      'current',
      {
        packages: ['geochart'],
        'mapsApiKey': googleMaps_APIKey
      }
    );
    google.charts.setOnLoadCallback(this.drawMap);

  }
  drawMap() {
    var stateArray = [
      ['State', 'Persons Recovered']
    ]

    for (var states in this.stateList){
      stateArray.push([this.stateList[states], 53])
    }

    var data = google.visualization.arrayToDataTable(stateArray);

    var options = {
      region: 'US',
      resolution: 'provinces' //metros does counties
    };

    var chart = new google.visualization.GeoChart(document.getElementById('map'));

    chart.draw(data, options);
  }
}
