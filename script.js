let numberA = "";
let numberB = "";
let mathsOperator = "";

const clearButton = document.getElementById("clearButton");
const display = document.getElementById("display");

const buttonList = Array.from(document.getElementsByTagName("button"));
const numberButtonList = Array.from(document.getElementsByClassName("number"));
const operatorButtonList = Array.from(document.getElementsByClassName("operator"));

function updateDisplay() {
	if (numberA !== "") {
		display.textContent = `${numberA}`;
		if (mathsOperator !== "") {
			display.textContent += ` ${mathsOperator}`;
			if (numberB !== "") {
				display.textContent += ` ${numberB}`;
			}
		}
	} else {
		display.textContent = "";
	}
}

/* ************************************************************************** */
/*                          operator event listeners                          */
/* ************************************************************************** */
operatorButtonList.forEach((button) => {
	if (button.textContent !== "=") {
		// if any operator beside equal is clicked
		button.addEventListener("click", () => {
			if (button.textContent === "+-") {
				if (mathsOperator === "") {
					// A negation handling
					if (numberA === "") {
						numberA = "-";
					} else if (numberA === "-") {
						numberA = "";
					}
				} else {
					// B negation handling
					if (numberB === "") {
						numberB = "-";
					} else if (numberB === "-") {
						numberB = "";
					}
				}
			} else {
				if (numberA === "" || numberA === "-") {
					updateDisplay();
					return;
				}
				if (numberB === "" || numberB === "-") {
					mathsOperator = button.textContent;
				} else {
					const a = parseInt(numberA);
					const b = parseInt(numberB);
					numberA = operate(a, mathsOperator, b);
					mathsOperator = button.textContent;
					numberB = "";
				}
			}
			updateDisplay();
		});
	} else {
		// if equal is clicked
		button.addEventListener("click", () => {
			// if both number exists, do operation, otherwise, do nothing
			if (numberA !== "" && numberB !== "" && numberA !== "-" && numberB !== "-") {
				const a = parseInt(numberA);
				const b = parseInt(numberB);
				numberA = operate(a, mathsOperator, b);
				mathsOperator = "";
				numberB = "";
				updateDisplay();
			}
		});
	}
});

/* ************************************************************************** */
/*                           display event listeners                          */
/* ************************************************************************** */
clearButton.addEventListener("click", () => {
	numberA = "";
	numberB = "";
	mathsOperator = "";
	result = "";
	updateDisplay();
});

/* ************************************************************************** */
/*                           number event listeners                           */
/* ************************************************************************** */
numberButtonList.forEach((button) => {
	button.addEventListener("click", () => {
		if (mathsOperator === "") {
			if (numberA === "0") {
				numberA = button.textContent;
			} else {
				numberA += button.textContent;
			}
		} else {
			if (numberB === "0") {
				numberB = button.textContent;
			} else {
				numberB += button.textContent;
			}
		}
		updateDisplay();
	});
});

/* ************************************************************************** */
/*                                ADD function                                */
/* ************************************************************************** */
function add(a, b) {
	return (a + b);
}
/* ************************************************************************** */
/*                             SUBSTRACT function                             */
/* ************************************************************************** */
function substract(a, b) {
	return (a - b);
}

/* ************************************************************************** */
/*                              MULTIPLY function                             */
/* ************************************************************************** */
function multiply(a, b) {
	return (a * b);
}

/* ************************************************************************** */
/*                               DIVIDE function                              */
/* ************************************************************************** */
function divide(a, b) {
	return (a / b);
}

/* ************************************************************************** */
/*                              OPERATE function                              */
/* ************************************************************************** */
/**
 * Function meant to call ADD, SUBSTRACT, MULTIPLY and DIVIDE function according
 * to the operator given by the user
*/
function operate(a, operator, b) {
	switch(operator){
		case "+": return (add(a, b));
		case "-": return (substract(a, b));
		case "*": return (multiply(a, b));
		case "/": return (divide(a, b));
		default: return ("ERROR: Invalid operator");
	}
}
