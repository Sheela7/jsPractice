// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

var value = myFunction([99,1,1])
function myFunction(a){
    return a.splice(0,3)
}
console.log(value)