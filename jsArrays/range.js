// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max



var value = myFunction(-5,5)
function myFunction(min,max){
  let result = []
  for(i=min;i<=max;i++){
    result.push(i)
  }return result
}
console.log(value)