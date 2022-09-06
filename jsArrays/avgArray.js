// Write a function that takes an array of numbers as argument
// It should return the average of the numbers


var value = myFunction([-50,0,50,200])
function myFunction(arr){
    let sum=0;
    for(i=0; i<arr.length;i++){
        sum += arr[i];
    }
    return sum/(arr.length)
}
console.log(value)