// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum
var value = myFunction([78, 99, 100, 101, 401], 99)
function myFunction(a,b){
  return a.reduce((sum,cur)=>{
    if(cur>b) sum= sum+cur
    return sum
  },0)
}
console.log(value)
