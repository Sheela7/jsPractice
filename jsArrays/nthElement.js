// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

var value = myFunction([7,2,1,6,3,4,5,8,9,10],2)
function myFunction(a,n){
    let array = []


    for(i = n; i <= a.length; i += n){
      array.push(a[i-1]);

   }

  return array;
}
console.log(value)