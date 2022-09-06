// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

var value = myFunction([{a:1,b:7},{a:2,b:1},{a:5,b:3}])
function myFunction(arr){
    return arr.sort((frstVal,secval)=>{return frstVal.b-secval.b})
}
console.log(value)

