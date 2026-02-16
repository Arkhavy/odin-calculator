let numberA = "";
let numberB = "";
let mathsOperator = "";
let resultState = false;

const clearButton = document.getElementById("clearButton");
const backButton = document.getElementById("backButton");
const display = document.getElementById("display");

const buttonList = Array.from(document.getElementsByTagName("button"));
const numberButtonList = Array.from(document.getElementsByClassName("number"));
const operatorButtonList = Array.from(document.getElementsByClassName("operator"));

/* ************************************************************************** */
/*                              Display handling                              */
/* ************************************************************************** */
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
/*                              Operator handling                             */
/* ************************************************************************** */
function equalButtonAction() {
	// if both number exists, do operation, otherwise, do nothing
	if (numberA !== "" && numberB !== "" && numberA !== "-" && numberB !== "-") {
		const a = parseFloat(numberA);
		const b = parseFloat(numberB);
		numberA = operate(a, mathsOperator, b);
		if (numberA !== parseFloat(numberA).toFixed(4)) {
			numberA = +parseFloat(numberA).toFixed(4);
		}
		resultState = true;
		mathsOperator = "";
		numberB = "";
	}
}

function operatorButtonAction(operator) {
	if (resultState) {
		resultState = false;
	}
	if (numberA === "" || numberA === "-") {
		return;
	}
	if (numberB === "" || numberB === "-") {
		mathsOperator = operator;
	} else {
		const a = parseInt(numberA);
		const b = parseInt(numberB);
		numberA = operate(a, mathsOperator, b);
		if (numberA !== parseFloat(numberA).toFixed(4)) {
			numberA = +parseFloat(numberA).toFixed(4);
		}
		mathsOperator = operator;
		numberB = "";
	}
}

/* ************************************************************************** */
/*                               Number handling                              */
/* ************************************************************************** */
function changeSignButtonAction() {
	if (resultState) {
		clearButton.dispatchEvent(new Event("click"));
	}
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
}

function numberButtonAction(number) {
	if (resultState) {
			clearButton.dispatchEvent(new Event("click"));
	}
	if (mathsOperator === "") {
		if (numberA === "0") {
			numberA = number;
		} else {
			numberA += number;
		}
	} else {
		if (numberB === "0") {
			numberB = number;
		} else {
			numberB += number;
		}
	}
}

function dotHandling(number) {
	if (number === "" || number === "0") {
		number = "0.";
	} else if (number.charAt(number.length - 1) === ".") {
		return (number.slice(0, number.length - 1));
	} else if (number.split("").includes(".")) {
		return (number);
	} else {
		number += ".";
	}
	return (number);
}

function dotButtonAction() {
	if (resultState) {
		clearButton.dispatchEvent(new Event("click"));
	}
	if (mathsOperator === "" && numberB === "") {
		// A dot handling
		numberA = dotHandling(numberA);
	} else {
		//B dot handling
		numberB = dotHandling(numberB);
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
				changeSignButtonAction();
			} else {
				operatorButtonAction(button.textContent);
			}
			updateDisplay();
		});
	} else {
		// if equal is clicked
		button.addEventListener("click", () => {
			equalButtonAction();
			updateDisplay();
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
	resultState = false;
	updateDisplay();
});

backButton.addEventListener("click", () => {
	if (resultState) {
		clearButton.dispatchEvent(new Event("click"));
		return;
	}
	if (numberB !== "") {
		numberB = numberB.slice(0, numberB.length - 1);
	} else if (numberB === "" && mathsOperator !== "") {
		mathsOperator = "";
	} else {
		numberA = numberA.slice(0, numberA.length - 1);
	}
	updateDisplay();
});

/* ************************************************************************** */
/*                           number event listeners                           */
/* ************************************************************************** */
numberButtonList.forEach((button) => {
	button.addEventListener("click", () => {
		numberButtonAction(button.textContent);
		updateDisplay();
	});
});

dotButton.addEventListener("click", () => {
	dotButtonAction();
	updateDisplay();
});

/* ************************************************************************** */
/*                           Keyboard event listener                          */
/* ************************************************************************** */
document.addEventListener("keydown", (e) => {
	console.log(e.key);
	// number handling
	if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(e.key)) {
		numberButtonAction(e.key);
	} else if (e.key === "=" || e.key === "Enter") {
		equalButtonAction();
	} else if (["+", "-", "*", "/"].includes(e.key)) {
		operatorButtonAction(e.key);
	} else if (e.key === "_") {
		changeSignButtonAction();
	} else if (e.key === "c") {
		clearButton.dispatchEvent(new Event("click"));
	} else if (e.key === "Backspace") {
		backButton.dispatchEvent(new Event("click"));
	} else if (e.key === ".") {
		dotButtonAction();
	}
	updateDisplay();
})

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
