// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word
var value = myFunction('bnchmf')
function myFunction(str){
    let answer = "";
    for(i=0; i<str.length;i++){
        let index = str.charCodeAt(i)
        index ++;
        answer +=  String.fromCharCode(index)
    }
 return answer
}
console.log(value)