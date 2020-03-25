class App {
  constructor(geoChart, stateList, covidStats) {
    this.handleGetCovidStatsError = this.handleGetCovidStatsError.bind(this);
    this.handleGetCovidStatsSuccess = this.handleGetCovidStatsSuccess.bind(this);
    this.getCovidStats = this.getCovidStats.bind(this);
    this.handleGetStateDataError = this.handleGetStateDataError.bind(this);
    this.handleGetStateDataSuccess = this.handleGetStateDataSuccess.bind(this);
    this.getStateData = this.getStateData.bind(this);

    this.geoChart = geoChart;
    this.stateList = stateList;
    this.covidStats = covidStats;

    this.states = {
      'US-AL': {name: 'Alabama'},
      'US-AK': {name: 'Alaska'},
      'US-AZ': {name: 'Arizona'},
      'US-AR': {name: 'Arkansas'},
      'US-CA': {name: 'California'},
      'US-CO': {name: 'Colorado'},
      'US-CT': {name: 'Connecticut'},
      'US-DE': {name: 'Delaware'},
      'US-FL': {name: 'Florida'},
      'US-GA': {name: 'Georgia'},
      'US-HI': {name: 'Hawaii'},
      'US-ID': {name: 'Idaho'},
      'US-IL': {name: 'Illinois'},
      'US-IN': {name: 'Indiana'},
      'US-IA': {name: 'Iowa'},
      'US-KS': {name: 'Kansas'},
      'US-KY': {name: 'Kentucky'},
      'US-LA': {name: 'Louisiana'},
      'US-ME': {name: 'Maine'},
      'US-MD': {name: 'Maryland'},
      'US-MA': {name: 'Massachusetts'},
      'US-MI': {name: 'Michigan'},
      'US-MN': {name: 'Minnesota'},
      'US-MS': {name: 'Mississippi'},
      'US-MO': {name: 'Missouri'},
      'US-MT': {name: 'Montana'},
      'US-NE': {name: 'Nebraska'},
      'US-NV': {name: 'Nevada'},
      'US-NH': {name: 'New Hampshire'},
      'US-NJ': {name: 'New Jersey'},
      'US-NM': {name: 'New Mexico'},
      'US-NY': {name: 'New York'},
      'US-NC': {name: 'North Carolina'},
      'US-ND': {name: 'North Dakota'},
      'US-OH': {name: 'Ohio'},
      'US-OK': {name: 'Oklahoma'},
      'US-OR': {name: 'Oregon'},
      'US-PA': {name: 'Pennsylvania'},
      'US-RI': {name: 'Rhode Island'},
      'US-SC': {name: 'South Carolina'},
      'US-SD': {name: 'South Dakota'},
      'US-TN': {name: 'Tennessee'},
      'US-TX': {name: 'Texas'},
      'US-UT': {name: 'Utah'},
      'US-VT': {name: 'Vermont'},
      'US-VA': {name: 'Virginia'},
      'US-WA': {name: 'Washington'},
      'US-WV': {name: 'West Virginia'},
      'US-WI': {name: 'Wisconsin'},
      'US-WY': {name: 'Wyoming'}
    }

    this.countries = [
      ['Country'],
      ['Afghanistan'],
      ['Åland Islands'],
      ['Albania'],
      ['Algeria'],
      ['American Samoa'],
      ['Andorra'],
      ['Angola'],
      ['Anguilla'],
      ['Antarctica'],
      ['Antigua and Barbuda'],
      ['Argentina'],
      ['Armenia'],
      ['Aruba'],
      ['Australia'],
      ['Austria'],
      ['Azerbaijan'],
      ['Bahamas'],
      ['Bahrain'],
      ['Bangladesh'],
      ['Barbados'],
      ['Belarus'],
      ['Belgium'],
      ['Belize'],
      ['Benin'],
      ['Bermuda'],
      ['Bhutan'],
      ['Bolivia (Plurinational State of)'],
      ['Bonaire, Sint Eustatius and Saba'],
      ['Bosnia and Herzegovina'],
      ['Botswana'],
      ['Bouvet Island'],
      ['Brazil'],
      ['British Indian Ocean Territory'],
      ['Brunei Darussalam'],
      ['Bulgaria'],
      ['Burkina Faso'],
      ['Burundi'],
      ['Cabo Verde'],
      ['Cambodia'],
      ['Cameroon'],
      ['Canada'],
      ['Cayman Islands'],
      ['Central African Republic'],
      ['Chad'],
      ['Chile'],
      ['China'],
      ['Christmas Island'],
      ['Cocos (Keeling) Islands'],
      ['Colombia'],
      ['Comoros'],
      ['Congo'],
      ['Congo (Democratic Republic of the)'],
      ['Cook Islands'],
      ['Costa Rica'],
      ['Côte d\'Ivoire'],
      ['Croatia'],
      ['Cuba'],
      ['Curaçao'],
      ['Cyprus'],
      ['Czechia'],
      ['Denmark'],
      ['Djibouti'],
      ['Dominica'],
      ['Dominican Republic'],
      ['Ecuador'],
      ['Egypt'],
      ['El Salvador'],
      ['Equatorial Guinea'],
      ['Eritrea'],
      ['Estonia'],
      ['Ethiopia'],
      ['Falkland Islands (Malvinas)'],
      ['Faroe Islands'],
      ['Fiji'],
      ['Finland'],
      ['France'],
      ['French Guiana'],
      ['French Polynesia'],
      ['French Southern Territories'],
      ['Gabon'],
      ['Gambia'],
      ['Georgia'],
      ['Germany'],
      ['Ghana'],
      ['Gibraltar'],
      ['Greece'],
      ['Greenland'],
      ['Grenada'],
      ['Guadeloupe'],
      ['Guam'],
      ['Guatemala'],
      ['Guernsey'],
      ['Guinea'],
      ['Guinea-Bissau'],
      ['Guyana'],
      ['Haiti'],
      ['Heard Island and McDonald Islands'],
      ['Holy See'],
      ['Honduras'],
      ['Hong Kong'],
      ['Hungary'],
      ['Iceland'],
      ['India'],
      ['Indonesia'],
      ['Iran (Islamic Republic of)'],
      ['Iraq'],
      ['Ireland'],
      ['Isle of Man'],
      ['Israel'],
      ['Italy'],
      ['Jamaica'],
      ['Japan'],
      ['Jersey'],
      ['Jordan'],
      ['Kazakhstan'],
      ['Kenya'],
      ['Kiribati'],
      ['Korea (Democratic People\'s Republic of)'],
      ['Korea (Republic of)'],
      ['Kuwait'],
      ['Kyrgyzstan'],
      ['Lao People\'s Democratic Republic'],
      ['Latvia'],
      ['Lebanon'],
      ['Lesotho'],
      ['Liberia'],
      ['Libya'],
      ['Liechtenstein'],
      ['Lithuania'],
      ['Luxembourg'],
      ['Macao'],
      ['Macedonia (the former Yugoslav Republic of)'],
      ['Madagascar'],
      ['Malawi'],
      ['Malaysia'],
      ['Maldives'],
      ['Mali'],
      ['Malta'],
      ['Marshall Islands'],
      ['Martinique'],
      ['Mauritania'],
      ['Mauritius'],
      ['Mayotte'],
      ['Mexico'],
      ['Micronesia (Federated States of)'],
      ['Moldova (Republic of)'],
      ['Monaco'],
      ['Mongolia'],
      ['Montenegro'],
      ['Montserrat'],
      ['Morocco'],
      ['Mozambique'],
      ['Myanmar'],
      ['Namibia'],
      ['Nauru'],
      ['Nepal'],
      ['Netherlands'],
      ['New Caledonia'],
      ['New Zealand'],
      ['Nicaragua'],
      ['Niger'],
      ['Nigeria'],
      ['Niue'],
      ['Norfolk Island'],
      ['Northern Mariana Islands'],
      ['Norway'],
      ['Oman'],
      ['Pakistan'],
      ['Palau'],
      ['Palestine, State of'],
      ['Panama'],
      ['Papua New Guinea'],
      ['Paraguay'],
      ['Peru'],
      ['Philippines'],
      ['Pitcairn'],
      ['Poland'],
      ['Portugal'],
      ['Puerto Rico'],
      ['Qatar'],
      ['Réunion'],
      ['Romania'],
      ['Russian Federation'],
      ['Rwanda'],
      ['Saint Barthélemy'],
      ['Saint Helena, Ascension and Tristan da Cunha'],
      ['Saint Kitts and Nevis'],
      ['Saint Lucia'],
      ['Saint Martin (French part)'],
      ['Saint Pierre and Miquelon'],
      ['Saint Vincent and the Grenadines'],
      ['Samoa'],
      ['San Marino'],
      ['Sao Tome and Principe'],
      ['Saudi Arabia'],
      ['Senegal'],
      ['Serbia'],
      ['Seychelles'],
      ['Sierra Leone'],
      ['Singapore'],
      ['Sint Maarten (Dutch part)'],
      ['Slovakia'],
      ['Slovenia'],
      ['Solomon Islands'],
      ['Somalia'],
      ['South Africa'],
      ['South Georgia and the South Sandwich Islands'],
      ['South Sudan'],
      ['Spain'],
      ['Sri Lanka'],
      ['Sudan'],
      ['Suriname'],
      ['Svalbard and Jan Mayen'],
      ['Swaziland'],
      ['Sweden'],
      ['Switzerland'],
      ['Syrian Arab Republic'],
      ['Taiwan, Province of China[a]'],
      ['Tajikistan'],
      ['Tanzania, United Republic of'],
      ['Thailand'],
      ['Timor-Leste'],
      ['Togo'],
      ['Tokelau'],
      ['Tonga'],
      ['Trinidad and Tobago'],
      ['Tunisia'],
      ['Turkey'],
      ['Turkmenistan'],
      ['Turks and Caicos Islands'],
      ['Tuvalu'],
      ['Uganda'],
      ['Ukraine'],
      ['United Arab Emirates'],
      ['United Kingdom of Great Britain and Northern Ireland'],
      ['United States of America'],
      ['United States Minor Outlying Islands'],
      ['Uruguay'],
      ['Uzbekistan'],
      ['Vanuatu'],
      ['Venezuela (Bolivarian Republic of)'],
      ['Viet Nam'],
      ['Virgin Islands (British)'],
      ['Virgin Islands (U.S.)'],
      ['Wallis and Futuna'],
      ['Western Sahara'],
      ['Yemen'],
      ['Zambia'],
      ['Zimbabwe']
    ];

    this.covidData = null;
  }
  start() {
    this.stateList.onStateClick(this.getStateData);
    this.geoChart.onStateClick(this.getStateData);
    this.getCovidStats();
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
    this.covidData = data;
    this.geoChart.loadGoogleChart(this.states, this.covidData);
    this.covidStats.renderStats(this.covidData);
    this.stateList.renderStatesList(this.states, this.covidData);
  }
  handleGetCovidStatsError(error){
    console.error(error);
  }
  getStateData(state){
    for (var key in this.states) {
      if (this.states[key]["name"] === state) {
        var stateCode = key;
      }
    }

    if (this.states[stateCode].hasOwnProperty('data')){
      this.geoChart.drawStateMap(this.states[stateCode].data);
      return; //avoid ajax call
    }


    $.ajax({
      method: "GET",
      url: "https://api.smartable.ai/coronavirus/stats/"+stateCode,
      beforeSend: function (xhrObj) {
        xhrObj.setRequestHeader("Cache-Control", "no-cache");
        xhrObj.setRequestHeader("Subscription-Key", covid19_APIKey);
      },
    })
      .done(this.handleGetStateDataSuccess)
      .fail(this.handleGetStateDataError);
  }


  handleGetStateDataSuccess(data){
    var stateCode = data.location.isoCode;
    this.states[stateCode].data = data;

    //METHOD repaint state map with markers
    this.geoChart.drawStateMap(this.states[stateCode].data);
  }
  handleGetStateDataError(error){
    console.error(error);
  }
}
