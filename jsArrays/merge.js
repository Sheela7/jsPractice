// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays


var value = myFunction([true, true], [1, 2], ['a', 'b'])
function myFunction(...arrays){
    return arrays.reduce((a,b)=>a.concat(b))
}
console.log(value)

//reduce returns the value that is returned from the callback function on the final iteration of the array.