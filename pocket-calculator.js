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
  val = 0;
  pointCount = 0;
  decimalDigits = 0;
  notDecimal = true;
}

/*NUMBERS*/
function combinedNumbers() {
  if (values.length=val){
    values.push(0);
  }
  if (values.length<val){
   values.push(1);
  }
  if (values.length<val){
   values.push(2);
  }
  if (values.length<val){
   values.push(3);
  }
  if (values.length<val){
   values.push(4);
  }
  if (values.length<val){
    values.push(5);
  }
  if (values.length<val){
    values.push(6);
  }
  if (values.length<val){
     values.push(7);
  }
  if (values.length<val){
     values.push(8);
  }
  if (values.length<val){
     values.push(9);
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

function opp{
   var valOpp=document.getElementById("opp");
   var valOne=valOpp;
   valTwo = valOne * -1;
   valOpp.value = valTwo; // assign the value of n back to the output
}
