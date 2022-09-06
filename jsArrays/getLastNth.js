// Write a function that takes an array (a) as argument
// Extract the last 3 elements of 'a'
// Return the resulting array

var value = myFunction([99,1,1])
function myFunction(a){
    return a.splice(-3)
}
console.log(value)