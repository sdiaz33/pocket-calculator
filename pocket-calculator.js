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

function show(){
  let display = document.getElementById("display");
  display.innerHTML = val;
}

function resetVal(){
  document.getElementById("input").value= '';
}

/*NUMBERS*/
function combinedNumbers(num) {
  if (num === 1){
    input.value += "1";
  }
  if (num === 2){
    input.value += "1";
  }
  if (num === 3){
    input.value += "1"
  }
  if (num === 4){
    input.value += "1";
  }
  if (num === 5){
    input.value += "1";
  }
  if (num === 6){
    input.value += "1";
  }
  if (num === 7){
    input.value += "1";
  }
  if (num === 8){
    input.value += "1";
  }
  if (num === 9){
    input.value += "1";
  }
  if (num === 0){
    input.value += "1";
  }
 document.getElementById("zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine").innerHTML= values;
}

/*OPERATIONS*/
function combinedOperations() {
  val = valOne;
  valOne = val;
  if (operation == '+'){
    val = valOne + valTwo;
  }
  if (operation == '-'){
    val = valOne - valTwo;
  }
  if (operation == '*'){
    val = valOne * valTwo;
  }
  if (operation == '/'){
    val = valOne / valTwo;
  }
  show();
}

function opp(){
   var valOpp=document.getElementById("opp");
   var valOne=valOpp;
   valTwo = valOne * -1;
   valOpp.value = valTwo; // assign the value of n back to the output
}
