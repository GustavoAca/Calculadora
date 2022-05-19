//Seleção dos elementos
const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

//Logica 
class Calculator {
  constructor(previousOperationText, currentOperationText) {
    this.previousOperationText = previousOperationText;
    this.currentOperationText = currentOperationText;
    this.currrentOperation = "";
  }
  //add digit to calculator screen
  addDigit(digit) {

    //check if current operation already has a dot
    if (digit === "." && this.currentOperationText.innerText.includes(".")) {
      return;
    }

    this.currentOperation = digit;
    this.updateScreen();
  }

  //process all calculator operations
  processOperation(operation) {
    //check if current is empty
    if (this, currentOperationText.innerText === "" && operation !== "C") {
      //change operation
      if (this.previousOperationText.innerText !== "") {
        this.changeOperation(operation)


      }
      return;
    }

    //get current and previous value
    let operationValue;
    const previous = +this.previousOperationText.innerText.split(" ")[0];
    const current = +this.currentOperationText.innerText;



    switch (operation) {
      case "+":
        operationValue = previous + current;
        this.updateScreen(operationValue, operation, current, previous);
        break
      case "-":
        operationValue = previous - current;
        this.updateScreen(operationValue, operation, current, previous);
        break
      case "/":
        operationValue = previous / current;
        this.updateScreen(operationValue, operation, current, previous);
        break
      case "*":
        operationValue = previous * current;
        this.updateScreen(operationValue, operation, current, previous);
        break
        case "DEL":
        this.processDelOperator();
        break
        case "CE":
        this.processClearCurrentOperation();
         break
         case "C":
        this.processClearOperation();
         break
         case "=":
        this.processEqualOperator();
         break
      default:
        return;
    }
  }


  //change values of the calculator screen
  updateScreen(
    operationValue = null,
    operation = null,
    current = null,
    previous = null
  ) {

    if (operationValue === null) {
      this.currentOperationText.innerText += this.currentOperation;
    } else {
      //check if value is zero, if it isjust add current value
      if (previous === 0) {
        operationValue = current;
      }
      //Add current value to previous
      this.previousOperationText.innerText = `${operationValue} ${operation}`;
      this.currentOperationText.innerText = "";
    }
  }
  //change math operation
  changeOperation(operation) {
    const mathOperations = ["*", "-", "+", "/"];

    if (!mathOperations.includes(operation)) {
      return;
    }
    //1223 * 
    // 1223 OPERATION
    this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation;
  }
  //delete the last digit
  processDelOperator(){
    this.currentOperationText.innerText = this. currentOperationText.innerText.slice(0, -1);
  }

  //Clear current operation
  processClearCurrentOperation(){
    this.currentOperationText.innerText = "";
  }

  //clear all operations
  processClearOperation(){
    this.currentOperationText.innerText = "";
    this.previousOperationText.innerText = "";
  }
  
  //PROCESSO OR OPERATION
  processEqualOperator(){

    const operation = previousOperationText.innerText.split(" ")[1];
    this.processOperation(operation);
  }
}

//instancia de objeto
const calc = new Calculator(previousOperationText, currentOperationText);



//eventos para fazer funcionar
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {

    //pego o valor dos botoes
    const value = e.target.innerText;

    //converte o valor em numero ou não
    if (+value >= 0 || value === ".") {
      console.log(value);
      calc.addDigit(value);

    } else {
      calc.processOperation(value);
    }

  });
});

//DARK-MODE

function changeMode(){
  changeClasses() 
  changeText()
}

function changeClasses(){
button.classList.toggle(darkModeClass)
h3.classList.toggle(darkModeClass)
fundo.classList.toggle(darkModeClass)
body.classList.toggle(darkModeClass)
botaoigual.classList.toggle(darkModeClass)
botaoIgual.classList.toggle(darkModeClass)


}

function changeText(){
   const lightMode = 'Light Mode'
   const darkMode = 'Dark Mode'

   if(button.classList.contains(darkModeClass)){
           button.innerHTML = lightMode
           return
   }
   button.innerHTML = darkMode 
}

const darkModeClass = 'dark-mode'
const button = document.getElementById('mode-selector')
const h3 = document.getElementsByTagName('h3')[0]
const body = document.getElementsByTagName('body')[0]
const fundo = document.getElementById('calc');




button.addEventListener('click', changeMode)