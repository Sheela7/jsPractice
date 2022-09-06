
// Write a function that takes an array of strings as argument
// Return the longest string
var longestWord = "";
var value = myFunction(['I', 'need', 'candy'])
function myFunction(arr){
   for(var i=0; i<arr.length;i++){
    if(arr[i].length>longestWord.length){
        longestWord=arr[i];
    }
   }
return longestWord;
}
console.log(value)