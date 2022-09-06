// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string
var value = myFunction('1234567','.')
function myFunction(a,b){
let actualString = "";
const aArray = a.split("").reverse();

for(i= 0; i<aArray.length; i++){
    
if(i !=0 && i%3 ==0){
    actualString +=b;
}
actualString +=aArray[i]
}
return actualString;
}
console.log(value)