// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array
var value = myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])
function myFunction(a,b){
    const concatedArray= [...a, ...b];
  var uniqueArray = [];
  concatedArray.forEach((element) => {
    if(uniqueArray.indexOf(element)==-1){
        uniqueArray.push(element)
        
    }
  });
const sortedArray = sortArray(uniqueArray)
  return sortedArray;

}

[3,2,6,1,7,3,9]
function sortArray(arr){
  var arrLength = arr.length
  for(i=0;i<arrLength;i++){
    for(j=0;j<(arrLength-1);j++){
if(arr[j]>arr[j+1]){
  let temp = arr[j];
  arr[j]=arr[j+1]
  arr[j+1]=temp
}
    }
  }
  return arr;
}
console.log(value)