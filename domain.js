var request =  new XMLHttpRequest()
var url_string = "https://dog.ceo/api/breeds/list/all";
var proxy =  "https://cors-anywhere.herokuapp.com/"
var url_string2 = proxy + url_string;
request.open("GET",url_string2,true)
request.send();
request.onload = function(){
	var data = JSON.parse(this.response)
	console.log(data);
}