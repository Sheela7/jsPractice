// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
var value = myFunction("o","School")
function myFunction(a,b){
   let count = 0;
   for(let i=0; i<b.length; i++){
    if(b.charAt(i) == a){
        count++
    }
   }
   return count
}
console.log(value)