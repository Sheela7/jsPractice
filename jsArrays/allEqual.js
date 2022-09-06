// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

var value = myFunction(['10',10,10,10])
function myFunction(arr){
   const result = arr.every((arrValue)=>{
        if(arrValue===arr[0]){
            return true;
        }
        else{ return false;}
    })
    return result
}
console.log(value)