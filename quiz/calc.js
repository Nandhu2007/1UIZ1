var input = "";
var n=1
var input2 = 0;
var ans
var operator;
var x=1
function plus(){
     input2 = (input2 +  parseInt(input))
     input = ""
     document.getElementById("display").innerHTML=(input);
     operator = "add"



    
}
function multiply(){
    input2 = (input2 * parseInt(input))
    input = ""
    document.getElementById("display").innerHTML=(input);
    operator = "add"

}

function equal(){
    switch(operator){
        case("add"):{
           ans = input2 + parseInt(input);
           input2=ans;
           document.getElementById("display").innerHTML=(ans);
           break;
        }
        case("multiply"):{
            ans=input2*parseInt(input);
            input2=ans
            document.getElementById("display").innerHTML=(ans);
            break;
        }
        

    }
  
}

function number1(){
    {
        input= input + "1";
        document.getElementById("display").innerHTML=(input);
    }
}
function number2(){
    {
        input= input + "2";
        document.getElementById("display").innerHTML=(input);
    }
}
function number3(){
    {
        input= input + "3";
        document.getElementById("display").innerHTML=(input);
    }
}
function number4(){
    {
        input= input + "4";
        document.getElementById("display").innerHTML=(input);
    }
}
function number5(){
    {
        input= input + "5";
        document.getElementById("display").innerHTML=(input);
    }
}
function number6(){
    {
        input= input + "6";
        document.getElementById("display").innerHTML=(input);
    }
}
function number7(){
    {
        input= input + "7";
        document.getElementById("display").innerHTML=(input);
    }
}
function number8(){
    {
        input= input + "8";
        document.getElementById("display").innerHTML=(input);
    }
}
function number9(){
    {
        input= input + "9";
        document.getElementById("display").innerHTML=(input);
    }
}
function number0(){
    {
        input= input + "0";
        document.getElementById("display").innerHTML=(input);
    }
}