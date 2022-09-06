// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
var value = myFunction(10.48)
function myFunction(a){
    if(a%1 ===0){
        return true;
    }else{
        return false;
    }
}
console.log(value)