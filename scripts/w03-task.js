/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  let number1 = Number(document.getElementById("add1").value);
  let number2 = Number(document.getElementById("add2").value);

  document.getElementById("sum").value = add(number1, number2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
  return number1 - number2;
}

function subtractNumbers() {
  let number1 = Number(document.getElementById("subtract1").value);
  let number2 = Number(document.getElementById("subtract2").value);

  document.getElementById("difference").value = subtract(number1, number2);
}

document
  .querySelector("#subtractNumbers")
  .addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => {
  return number1 * number2;
};

let multiplyNumbers = () => {
  let number1 = Number(document.getElementById("factor1").value);
  let number2 = Number(document.getElementById("factor2").value);

  document.getElementById("product").value = multiply(number1, number2);
};

document
  .querySelector("#multiplyNumbers")
  .addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
let divide = (number1, number2) => {
  return number1 / number2;
};

function divideNumbers() {
  let number1 = Number(document.getElementById("dividend").value);
  let number2 = Number(document.getElementById("divisor").value);

  document.getElementById("quotient").value = divide(number1, number2);
}

document
  .querySelector("#divideNumbers")
  .addEventListener("click", divideNumbers);

/* Decision Structure */
let date = new Date();
let year = new Date().getFullYear();
document.getElementById("year").textContent = year;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [...Array(13).keys()].map((x) => x + 1);
document.getElementById("array").innerHTML = numbersArray;

/* Output Odds Only Array */
document.getElementById("odds").innerHTML = numbersArray.filter(
  (x) => x % 2 !== 0
);

/* Output Evens Only Array */
document.getElementById("evens").innerHTML = numbersArray.filter(
  (x) => x % 2 === 0
);

/* Output Sum of Org. Array */
document.getElementById("sumOfArray").innerHTML = numbersArray.reduce(
  (n1, n2) => n1 + n2
);

/* Output Multiplied by 2 Array */
let multiplied = numbersArray.map((x) => x * 2);
document.getElementById("multiplied").innerHTML = multiplied;

/* Output Sum of Multiplied by 2 Array */
document.getElementById("sumOfMultiplied").innerHTML = multiplied.reduce(
  (n1, n2) => n1 + n2
);
