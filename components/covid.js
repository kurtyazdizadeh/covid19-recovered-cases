var covid19_APIKey = '79badf971fec458f9e3012fe0a6aedc0';
var covid19_APIKey_secondary = 'd4ab57aa4805492c9519379ebd149e43';

class CovidStats {
  constructor(statsElement) {
    this.statsElement = statsElement;
  }

}



// $.ajax({
//   type: "GET",
//   url: "https://api.smartable.ai/coronavirus/stats/US",

//   // Request headers
//   beforeSend: function (xhrObj) {
//     xhrObj.setRequestHeader("Cache-Control", "no-cache");
//     xhrObj.setRequestHeader("Subscription-Key", "79badf971fec458f9e3012fe0a6aedc0");
//   },
// })
//   .done(function (data) {
//     alert("success");
//     console.log("COVID-19 data", data);
//   })
//   .fail(function (error) {
//     alert("error");
//     console.log(error);
//   });
