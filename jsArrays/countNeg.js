
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array


var value = myFunction([4,-3,2,1,0])
function myFunction(a){
    count = 0;
    a.forEach((element) => {
        if(element<0){
            count +=1
        }

    });
    return count;
}
console.log(value)