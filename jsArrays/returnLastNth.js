// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

var value = myFunction([1,2,3,4,5,6,7,8],3)
function myFunction(a,n){
    return a.splice(-n)
}
console.log(value)