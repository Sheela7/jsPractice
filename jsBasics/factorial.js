// var value = factorial(3)
// function factorial(num){
//     result =1; //0 na halya bcz sadhi zero awxa multiply garda so
//     while(num>0){
//         result= num* result;  
//         num--;
//     }
//     return result;
// }
// console.log(value)

function factorialRec(num){
    if(num== 0){
        return 1;
    }
    return (num* factorialRec(num-1));
}
console.log(factorialRec(3));


function Sum(num){
  
}
