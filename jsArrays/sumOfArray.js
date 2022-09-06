// Write a function that takes an array of numbers as argument
// It should return the sum of the numbers

var value = myFunction([-50,0,50,200])
function myFunction(a){
    let sum=0;
    for(i=0; i<a.length;i++){
        sum += a[i];
    }
    return sum
}
console.log(value)