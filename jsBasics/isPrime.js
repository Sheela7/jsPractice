//teinumber ra 1 le matra divide hunu pro
var value = myFunction(4);
function myFunction(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(value)