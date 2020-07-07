//Task1

//Task 1: Simple Programs todo for variables
//Declare four variables without assigning values and print them in console
var var1;
var var2;
var var3;
var var4;

//How to get value of the variable myvar as output
var myvar= 1;
console.log(myvar);

//Declare variables to store your first name, last name, marital status, country and age in multiple lines

var firstname;
var lastname;
var marital_status;
var country;
var age;

//Declare variables to store your first name, last name, marital status, country and age in a single line

var firstname,lastname,marital_status,country,age;

//Declare variables and assign string, boolean, undefined and null data types

var string = "I am 25 years old.";
var null_string = '';
var udefined_string=;
boolean var1 = False;

//Convert the string to integer
var str = 9;
var int_str = parseInt(str);
var int_str1= Number(str);
var int_str2 = +(str);

//Write 6 statement which provide truthy & falsey values

True && True;
True || False;
var a, b;
a>b;
a<=b;

//Task2
//Square of a number

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
let a = userInput[0];
console.log(a**2);

});

//Swapping 2 numbers
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
let a = userInput[0];
let b = userInput[1];
let temp = 0;
temp = a;
a = b;
b = temp;
console.log(a,b);

});

//Addition of 3 numbers


const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
let a = userInput[0];
let b = userInput[1];
let c = userInput[2];
let add = parseInt(a+b+c);
console.log(add);

});

//Celsius to Fahrenheit conversion
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
//start-here
var g = userInput[0];
var h = g*9/5+32;
console.log(h.toFixed(2));
});

//Meter to miles
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var g = userInput[0];
var h = g*0.000621371;
console.log(h);
});
//Pounds to kg

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var g = userInput[0];
var h = g*0.453592;
console.log(h);
});
//Calculate Batting Average
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var g = userInput[0];
var h = userInput[1];
var sum = g+h;
console.log(sum/g
});
//Calculate five test scores and print their average

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var g = userInput[0];
var h = userInput[1];
var sum = g+h;
console.log(sum/g
});

//Power of any number x ^ y.
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var g = userInput[0];
var h = userInput[1];
var pow = g**h;
console.log(pow);
});
//Calculate Simple Interest

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
var g = userInput[0].split(" ");
var p = g[0];
var t = g[1];
var r = g[2];
var sl = parseFloat(p*t*r/100);
console.log(sl);
});

//Calculate area of an equilateral triangle

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
var a = userInput[0];
var Area = (Math.sqrt(3) * a *a) / 4
console.log(Area);
});

//Area Of Isosceles Triangle

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
var b = userInput[0];
var h = userInput[1];
var Area = ((1/2)*b*h);
console.log(Area);
});
//Volume Of Sphere

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
var b = userInput[0];
var h = userInput[1];
var Area = ((1/2)*b*h);
console.log(Area);
});

//Volume Of Sphere

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
var b = userInput[0];
var cub = b**3;
var sphere = ((4/3)*(Math.PI)*(cub));
console.log(sphere);
});

//Volume Of Prism

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
var b = userInput[0];
var h = userInput[1];
var v = b*h;
console.log(v);
});

//Find area of a triangle


const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here1
  
var  A = userInput[0];
var B = userInput[1];
var c = A*B;
console.log(c);



});

