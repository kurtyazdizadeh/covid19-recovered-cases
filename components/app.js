class App {
  constructor(geoChart, stateList, covidStats) {
    this.handleGetCovidStatsError = this.handleGetCovidStatsError.bind(this);
    this.handleGetCovidStatsSuccess = this.handleGetCovidStatsSuccess.bind(this);
    this.getCovidStats = this.getCovidStats.bind(this);

    this.geoChart = geoChart;
    this.stateList = stateList;
    this.covidStats = covidStats;

    this.states = {
      'US-AL': 'Alabama',
      'US-AK': 'Alaska',
      'US-AZ': 'Arizona',
      'US-AR': 'Arkansas',
      'US-CA': 'California',
      'US-CO': 'Colorado',
      'US-CT': 'Connecticut',
      'US-DE': 'Delaware',
      // 'US-DC': 'District Of Columbia',
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
  start() {
    this.getCovidStats();
    this.stateList.renderStates(this.states);
  }
  getCovidStats(){
    $.ajax({
      method: "GET",
      url: "https://api.smartable.ai/coronavirus/stats/US",
      beforeSend: function(xhrObj) {
        xhrObj.setRequestHeader("Cache-Control", "no-cache");
        xhrObj.setRequestHeader("Subscription-Key", covid19_APIKey);
      },
    })
      .done(this.handleGetCovidStatsSuccess)
      .fail(this.handleGetCovidStatsError);
  }
  handleGetCovidStatsSuccess(data){
    this.covidStats = data;
    this.geoChart.loadGoogleChart(this.states, this.covidStats)
  }
  handleGetCovidStatsError(error){
    console.error(error);
  }
}
