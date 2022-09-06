// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
var value = firstHalf("school")
function firstHalf(a)
{
    if(a.length % 2 ==0)
    {
return a.slice(0,a.length/2)
};
}
console.log(value)
