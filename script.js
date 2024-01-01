let display = document.getElementById("display");
let currentInput = "";

function appendCharacter(character) {
  currentInput += character;
  updateDisplay();
}

// New function for backspace
function backspace() {
  currentInput = currentInput.slice(0, -1); // Remove last character
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

function squareRoot() {
  try {
    let result = Math.sqrt(eval(currentInput));
    currentInput = result.toString();
    updateDisplay();
  } catch (error) {
    currentInput = "Error";
    updateDisplay();
  }
}

function square() {
  try {
    let result = Math.pow(eval(currentInput), 2);
    currentInput = result.toString();
    updateDisplay();
  } catch (error) {
    currentInput = "Error";
    updateDisplay();
  }
}

function calculateResult() {
  try {
    let result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
  } catch (error) {
    currentInput = "Error";
    updateDisplay();
  }
}

function updateDisplay() {
  display.textContent = currentInput;
}
