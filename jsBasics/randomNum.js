// //random fraction number
// function randomFraction(){
//     return Math.random();

// }
// console.log(randomFraction());



// //random whole number between 0 and 9
// var randomNumber = Math.floor(Math.random()*20);
// function randomWholeNum(){
//     return Math.floor(Math.random()*10);
// }
// console.log(randomWholeNum());


//generating random whole number within a range

const arr1 = ['a','b'];
let arr2;
(function(){
    arr2=[...arr1];
    arr1[0] = 's'
})();
console.log(arr2)
console.log(arr1)