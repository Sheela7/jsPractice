// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number



var value = myFunction(2000);
function myFunction(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return myFunction(num+1);
    }
  }
  return num;
}
console.log(value)