// Track entries
let rightOp = null;
let leftOp = null;
let operator = null;

// Create the operations
const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};

const operate = (op, a, b) => {
  if (op == "+") return add(a, b);
  if (op == "-") return subtract(a, b);
  if (op == "*") return multiply(a, b);
  if (op == "/") return divide(a, b);
};

// Create the digits' pad
const digits = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "%", "0", "."];
const digitPad = digits.map((digit) => {
  const btn = document.createElement("button");
  btn.textContent = digit;
  return btn;
});

// Create classic operators pad
const operators = ["÷", "×", "–", "+"];
const operatorsPad = operators.map((op) => {
  const btn = document.createElement("button");
  btn.textContent = op;
  return btn;
});

// Create 'result' and 'clear' buttons
const result = document.createElement("button");
result.textContent = "=";
result.setAttribute("style", "background : rgb(46, 225, 49); color: white");
const clear = document.createElement("button");
clear.setAttribute("style", "background : rgb(249, 59, 72); color: white");
clear.textContent = "⌫";

// Append the fore-created elements to proper divs
const digitDiv = document.querySelector(".digits");
for (let digit of digitPad) {
  digitDiv.appendChild(digit);
}

const opDiv = document.querySelector(".classicOperators");
for (let op of operatorsPad) {
  opDiv.appendChild(op);
}

const resClr = document.querySelector(".result-clear");
resClr.appendChild(clear);
resClr.appendChild(result);
