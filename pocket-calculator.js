/*this is where you'll put function to all of the buttons in the calculator so it fuctions like a calculator*/

let val = 0;
let valOne;
let valTwo;
let pointCount=0;
var decimal= false;

/*SETUP*/
function setup(){
  operation="";
  resetVal();
  show();
}

function show(val){
  document.getElementById("input").value += val;
}

function resetVal(){
  document.getElementById("input").value='0';
}

/*NUMBERS*/
function combinedNumbers(num) {
  if (num === 1){
    input.value += "1";
  }
  if (num === 2){
    input.value += "2";
  }
  if (num === 3){
    input.value += "3"
  }
  if (num === 4){
    input.value += "4";
  }
  if (num === 5){
    input.value += "5";
  }
  if (num === 6){
    input.value += "6";
  }
  if (num === 7){
    input.value += "7";
  }
  if (num === 8){
    input.value += "8";
  }
  if (num === 9){
    input.value += "9";
  }
  if (num === 0){
    input.value += "0";
  }
 document.getElementById("combinedNumbers(num)");
}

/*OPERATIONS*/
function opp(){
   var valOpp=document.getElementById("opp");
   var valOne=valOpp;
   valTwo = valOne * -1;
   valOpp.value = valTwo; // assign the value of n back to the output
}

function equals(val){
  document.getElementById("input").value = eval(val);
}
