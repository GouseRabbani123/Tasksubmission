var request = new XMLHttpRequest()//creating  html request variable and assiging a new xmlhttprequest object to it.
var url_string = 'https://dog.ceo/api/breeds/list/all';
request.open('GET',url_string,true)
request.send();
request.onload = function(){
var data = JSON.parse(this.response)
console.log(data);
}