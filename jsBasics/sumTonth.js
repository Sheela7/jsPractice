//using while loop
// var value = sumToN(3)
// function sumToN(num){
//     result =0; //0 na halya bcz sadhi zero awxa multiply garda so
//     while(num>0){
//         result= num + result;  
//         num--;
//     }
//     return result;
// }
// console.log(value)



// //using for loop
// var value = sumToN(3)
// function sumToN(num){
//     result =0; //0 na halya bcz sadhi zero awxa multiply garda so
    
//     for(i=0;i<=num;i++){
//         result = i+result
//     }
//     return result
// }
// console.log(value)


//using recursion

function sumToN(num){
    if(num== 0){
        return 0;
    }
    return (num + sumToN(num-1));    //recursiveFunction//3+ sumToN(2) =   3+ (2+sumToN(1))=  3+2+1+sumToN(0) = 3+2+1+0
}
console.log(sumToN(3));


