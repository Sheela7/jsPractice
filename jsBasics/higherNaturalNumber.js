// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y
var value = myFunction(-5,7)
function myFunction(x, y){
if(x%y !=0){
    return myFunction(x+1,y)
}
return x
}

console.log(value)


