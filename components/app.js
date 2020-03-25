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
    this.covidData = data;
    this.geoChart.loadGoogleChart(this.states, this.covidData);
    this.covidStats.renderStats(this.covidData);
  }
  handleGetCovidStatsError(error){
    console.error(error);
  }
}
