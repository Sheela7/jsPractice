// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting
var value = myFunction(193278)
function myFunction(a){
var digits = a.toString().split('');
var actualValue = digits.map(Number)
console.log(actualValue)
}
