// //find sum of array
// function arrSum(numArray){
//     sum = 0;
//     for(let i=0;i < numArray.length; i++){
//     // sum += numArray[i]
//     console.log(numArray[i])
//     }
//     return sum

// }

// let arr = [1,3,5,6]
// const value = arrSum(arr)
// console.log(`The sum of the given array is ${value}`)









//prev value is zero if not provided
var value = myFunction([1,2,3,4,5,6])
function myFunction(arr){
    return arr.reduce((preV,currV)=>preV+currV)
}

console.log(value)












