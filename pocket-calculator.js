/*this is where you'll put function to all of the buttons in the calculator so it fuctions like a calculator*/

let val = 0;
let valOne;
let valTwo;
let pointCount=0;
let operation;
let newDigit;
let notDecimal = true;
let decimalDigits=0;
let keepNum=false;

const calculator = {
  defaultValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
}

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
  pointCount=0;
  decimalDigits=0;
  notDecimal=true;
}

function equals() {
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

function vals {
  1
  2
  3
  4
  5
  6
  7
  8
  9
  0
}

function opposite{
   var b=document.getElementById("output+/-");
   var n1=b;
   n2 = n1 * -1;
   b.value = n2; // assign the value of n back to the output
}



// function combinedValue(newDigit) {
//   // if (!keepVal){
//   //   resetVal();
//   // }
//   if (notDecimal){
//     val=val*10+newDigit;
//   } else {
//     decimalDigits++;
//     val+=newDigit/Math.pow(10, decimalDigits);
//   }
//   show();
// }
//
// function point() {
//   if (pointCount==0){
//     notDecimal=false;
//     show();
//     display.innerHTML+=".";
//   } else {
//     val="ERROR";
//     show();
//   }
//   pointCount++;
// }
//
// function useOperation(op){
//   operation = op;
//   valOne = val;
//   resetVal();
//   display.innerHTML=op;
// }
//
//
// function show(){
//   let display = document.getElementById("display");
//   display.innerHTML = val;
// }
