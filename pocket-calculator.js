/*this is where you'll put function to all of the buttons in the calculator so it fuctions like a calculator*/

const calculator = {
  defaultValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function number0{
  displayValue: '0';
}

function number1{
  displayValue: '1';
}

function number2{
  displayValue: '2';
}

function number3{
  displayValue: '3';
}
function number4{
  displayValue: '4';
}

function number5{
  displayValue: '5';
}

function number6{
  displayValue: '6';
}

function number7{
  displayValue: '7';
}

function number8{
  displayValue: '8';
}

function number9{
  displayValue: '9';
}


$("#opp").click(function(opposite){
   var b=document.getElementById("output");
   var n=b.value;
   n = n * -1;
   b.value = n; // assign the value of n back to the output
});
