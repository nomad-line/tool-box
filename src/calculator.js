const equalsBtn = document.querySelector("[data-equals]");
const operationBtn = document.querySelectorAll("[data-operation]");
const numberBtn = document.querySelectorAll("[data-number]");
const deleteBtn = document.querySelector("[data-delete]");
const allClearBtn = document.querySelector("[data-all-clear]");
const previousOperandElement = document.querySelector(".previous-operand");
const currentOperandElement = document.querySelector(".current-operand");

let temp = "";
let result = 0;

const handleOperation = (operation) => {
  switch (operation) {
    case "*":
      result = Number(temp) * Number(currentOperandElement.innerText);
      currentOperandElement.innerText = result;
      previousOperandElement.innerText = "";
      break;
    case "-":
      result = Number(temp) - Number(currentOperandElement.innerText);
      currentOperandElement.innerText = result;
      previousOperandElement.innerText = "";
      break;

    case "+":
      result = Number(temp) + Number(currentOperandElement.innerText);
      currentOperandElement.innerText = result;
      previousOperandElement.innerText = "";
      break;
    case "÷":
      result = Number(temp) / Number(currentOperandElement.innerText);
      currentOperandElement.innerText = result;
      previousOperandElement.innerText = "";
      break;
  }
};
// click event
numberBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (currentOperandElement.innerText === "0" || result) {
      currentOperandElement.innerText = e.target.innerText;
      result = 0;
      return;
    }
    currentOperandElement.innerText += e.target.innerText;
  });
});

operationBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (
      temp &&
      previousOperandElement.innerText[
        previousOperandElement.innerText.length - 1
      ] === e.target.innerText
    ) {
      handleOperation(e.target.innerText);
    } else {
      temp = currentOperandElement.innerText;
      previousOperandElement.innerText = temp + " " + e.target.innerText;
      currentOperandElement.innerText = "";
    }
  });
});

allClearBtn.addEventListener("click", () => {
  temp = "";
  result = 0;
  previousOperandElement.innerText = "";
  currentOperandElement.innerText = 0;
});

deleteBtn.addEventListener("click", () => {
  currentOperandElement.innerText = currentOperandElement.innerText.slice(
    0,
    -1
  );
});

equalsBtn.addEventListener("click", (e) => {
  handleOperation(
    previousOperandElement.innerText[
      previousOperandElement.innerText.length - 1
    ]
  );
});

// keydown event

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    equalsBtn.click();
    return;
  }
  if (e.key === "Backspace") {
    deleteBtn.click();
    return;
  }
  if (e.key === "Delete") {
    allClearBtn.click();
    return;
  }
  if ((e.key >= 0 && e.key < 10) || e.key === ".") {
    numberBtn.forEach((i) => {
      if (i.innerText === e.key) i.click();
      return;
    });
    return;
  }

  if (e.key === "*" || e.key === "/" || e.key === "-" || e.key === "+") {
    operationBtn.forEach((i) => {
      if (i.dataset.operation === e.key) i.click();
      return;
    });
    return;
  }
});
