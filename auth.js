// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()
var url_string = 'api.openweathermap.org/data/2.5/weather?q=London&appid=<ur api key from open weather website>';

var proxy = "https://cors-anywhere.herokuapp.com/"
var url_string2 = proxy + url_string;
// Open a new connection, using the GET request on the URL endpoint
request.open('GET',url_string2 , true) 
request.send();

request.onload = function() {
  // Begin accessing JSON data here
//console.log(this.response);
var data = JSON.parse(this.response)
console.log(data);
}
