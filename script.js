// Track entries
let rightOp = null;
let leftOp = null;
let result = null;

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

// Create the digits' pad
const digits = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "%", "0", "."];
const digitPad = digits.map((digit) => {
  const btn = document.createElement("button");
  btn.textContent = digit;
  return btn;
});

// Create classic operators pad
const operators = ["÷", "×", "-", "+"];
const operatorsPad = operators.map((op) => {
  const btn = document.createElement("button");
  btn.textContent = op;
  return btn;
});

// Create 'result', 'clear' and 'backspace' buttons
const equal = document.createElement("button");
equal.textContent = "=";
equal.setAttribute(
  "style",
  "background : rgb(46, 225, 49); color: white; flex: 2",
);

const clear = document.createElement("button");
clear.setAttribute(
  "style",
  "background : rgb(255, 60, 79); color: white; flex: 1",
);
clear.textContent = "✖";

const backspace = document.createElement("button");
backspace.setAttribute(
  "style",
  "background : rgb(255, 185, 63); color: white; flex: 1",
);
backspace.textContent = "⬅";

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
resClr.appendChild(backspace);
resClr.appendChild(clear);
resClr.appendChild(equal);

// Create the logic to take and display the user input
const inputDisplay = document.querySelector(".input-display");
let userInput = "";
digitDiv.addEventListener("click", (event) => {
  resultDisplay.textContent = "";
  const entry = event.target.textContent;
  // Check if input after the last operator is decimal
  let op = [...userInput].find((a) => operators.includes(a));
  let isDecimal;
  if (op) {
    isDecimal = userInput.split(op)[1].includes(".");
  } else {
    isDecimal = userInput.includes(".");
  }

  // Check if the last entry is an operator
  const isLastOp = operators.includes(userInput[userInput.length - 1]);
  if (entry == "." && (!userInput || isLastOp)) {
    // Append leading 0 if input is empty with or last entry is an operator
    userInput = userInput + "0.";
  } else if (entry == "." && isDecimal) {
    // Prevent additional decimal dot in the input
  } else {
    switch (entry) {
      case "1":
        userInput = userInput + "1";
        break;
      case "2":
        userInput = userInput + "2";
        break;
      case "3":
        userInput = userInput + "3";
        break;
      case "4":
        userInput = userInput + "4";
        break;
      case "5":
        userInput = userInput + "5";
        break;
      case "6":
        userInput = userInput + "6";
        break;
      case "7":
        userInput = userInput + "7";
        break;
      case "8":
        userInput = userInput + "8";
        break;
      case "9":
        userInput = userInput + "9";
        break;
      case "0":
        userInput = userInput + "0";
        break;
      case ".":
        userInput = userInput + ".";
        break;
      default:
        break;
    }
  }
  inputDisplay.textContent = userInput;
});

// Create the logic to clear input
function clearInput() {
  userInput = "";
  inputDisplay.textContent = "";
}
clear.addEventListener("click", clearInput);

// Create the logic for backspace
backspace.addEventListener("click", () => {
  userInput = userInput.slice(0, -1);
  inputDisplay.textContent = userInput;
});

// Create logic for computation.
function compute(input) {
  let arr = [];
  // Addition.
  if (input.includes("+")) {
    arr = input.split("+");
    leftOp = Number(arr[0]);
    rightOp = Number(arr[1]);
    result = add(leftOp, rightOp);
  }
  // Subtraction
  if (input.includes("-")) {
    arr = input.split("-");
    leftOp = Number(arr[0]);
    rightOp = Number(arr[1]);
    result = subtract(leftOp, rightOp);
  }
  // Multiplication
  if (input.includes("×")) {
    arr = input.split("×");
    leftOp = Number(arr[0]);
    rightOp = Number(arr[1]);
    result = multiply(leftOp, rightOp);
  }
  // Division
  if (input.includes("÷")) {
    arr = input.split("÷");
    leftOp = Number(arr[0]);
    rightOp = Number(arr[1]);
    result = divide(leftOp, rightOp);
  }
}

// Create logic for operators
opDiv.addEventListener("click", (event) => {
  resultDisplay.textContent = "";
  key = event.target.textContent;
  // Prevent 2 consecutive or leading operator inputs.
  const lastInput = userInput[userInput.length - 1];
  if (userInput) {
    // Check if the input is already a valid operation
    const isValidOp =
      [...userInput].some((a) => operators.includes(a)) &&
      !operators.includes(lastInput);
    switch (key) {
      case "+":
        if (operators.includes(lastInput)) {
          // Update the last entry if it's an operator.
          userInput = userInput.slice(0, -1) + "+";
        } else {
          if (isValidOp) {
            // Compute the input if it's a valid operation.
            compute(userInput);
            userInput = String(result);
          }
          userInput = userInput + "+";
        }
        break;
      case "-":
        if (operators.includes(lastInput)) {
          userInput = userInput.slice(0, -1) + "-";
        } else {
          if (isValidOp) {
            compute(userInput);
            userInput = String(result);
          }
          userInput = userInput + "-";
        }
        break;
      case "×":
        if (operators.includes(lastInput)) {
          userInput = userInput.slice(0, -1) + "×";
        } else {
          if (isValidOp) {
            compute(userInput);
            userInput = String(result);
          }
          userInput = userInput + "×";
        }
        break;
      case "÷":
        if (operators.includes(lastInput)) {
          userInput = userInput.slice(0, -1) + "÷";
        } else {
          if (isValidOp) {
            compute(userInput);
            userInput = String(result);
          }
          userInput = userInput + "÷";
        }
        break;
      default:
        break;
    }
  }
  inputDisplay.textContent = userInput;
});

// Add logic to get and display result.
const resultDisplay = document.querySelector(".result-display");
equal.addEventListener("click", () => {
  // Check if the input is a valid operation and perform the operation.
  const lastInput = userInput[userInput.length - 1];
  const isValidOp =
    [...userInput].some((a) => operators.includes(a)) &&
    !operators.includes(lastInput);
  if (isValidOp) {
    compute(userInput);
    userInput = "";
    inputDisplay.textContent = userInput;
    resultDisplay.textContent = result;
  }
});
