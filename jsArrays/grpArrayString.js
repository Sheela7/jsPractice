// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

var value = myFunction(['Alf', 'Alice', 'Ben'])
function myFunction(arr){
    var result = {};
    for(let i=0; i<arr.length;i++){
        let currentWord = arr[i];
    let firstChar = currentWord[0].toLowerCase();
    let innerArr = [];
    if (result[firstChar] === undefined) {
       innerArr.push(currentWord);
      result[firstChar] = innerArr
    }else {
      result[firstChar].push(currentWord)
    }
    }
    return result;
    }
console.log(value)