const number1 = document.getElementById("num1") as HTMLInputElement
const number2 = document.getElementById("num2") as HTMLInputElement

const addBtn = document.getElementById("add") as HTMLInputElement
const subtractBtn = document.getElementById("subtract") as HTMLInputElement
const multiplyBtn = document.getElementById("multiply") as HTMLInputElement
const divideBtn = document.getElementById("divide") as HTMLInputElement

const printResult = document.getElementById("result") as HTMLOutputElement

function addNumber() {
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a + b;
    printResult.textContent = result.toString();
}
addBtn.addEventListener("click", addNumber);

function subtractNumber() {
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a - b;
    printResult.textContent = result.toString();
}
subtractBtn.addEventListener("click", subtractNumber);

function multiplyNumber() {
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a * b;
    printResult.textContent = result.toString();
}
multiplyBtn.addEventListener("click", multiplyNumber);

function divideNumber() {
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a / b;
    printResult.textContent = result.toString();
}
divideBtn.addEventListener("click", divideNumber);