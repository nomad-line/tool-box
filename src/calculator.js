const equalsBtn = document.querySelector("[data-equals]");
const operationBtn = document.querySelectorAll("[data-operation]");
const numberBtn = document.querySelectorAll("[data-number]");
const deleteBtn = document.querySelector("[data-delete]");
const allClearBtn = document.querySelector("[data-all-clear]");
const previousOperandElement = document.querySelector(".previous-operand");
const currentOperandElement = document.querySelector(".current-operand");

let temp = "";
let result = 0;
numberBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    currentOperandElement.innerText += e.target.innerText;
  });
});

operationBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (temp) {
      switch (e.target.innerText) {
        case "*":
          result = Number(temp) * Number(currentOperandElement.innerText);
          console.log(temp);
          console.log(result);
          currentOperandElement.innerText = result;
          previousOperandElement.innerText = "";
          break;
        case "-":

        case "+":

        case "÷":
      }
    } else {
      temp = currentOperandElement.innerText;
      previousOperandElement.innerText = temp + " " + e.target.innerText;
      currentOperandElement.innerText = "";
    }
  });
});
