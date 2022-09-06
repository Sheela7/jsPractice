

function myFunct1(){
    myGlobal = 5;
}
function myFunct2(){
    var output = 1;
    if(typeof myGlobal != "undefined"){
        output +=myGlobal;
    }
    console.log(output)
}
myFunct1();
myFunct2();

