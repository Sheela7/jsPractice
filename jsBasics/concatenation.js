// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

var value = myFunction("sheela","sur")
function myFunction(a,b){
    if(a.includes(b)){
return b.concat(a)
    }else{
        return a.concat(b)
    }
}
console.log(value)