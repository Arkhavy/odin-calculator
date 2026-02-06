const numberA = document.getElementById("numberA");
const numberB = document.getElementById("numberB");
const mathsOperator = document.getElementById("mathsOperator");
const clearButton = document.getElementById("clearButton");

const buttonList = Array.from(document.getElementsByTagName("button"));
const numberButtonList = Array.from(document.getElementsByClassName("number"));
const operatorButtonList = Array.from(document.getElementsByClassName("operator"));
// console.log(buttonList);
// console.log(numberButtonList);
// console.log(operatorButtonList);

/* ************************************************************************** */
/*                          operator event listeners                          */
/* ************************************************************************** */
operatorButtonList.forEach((button) => {
	if (button.textContent !== "=") {
		button.addEventListener("click", () => {
			mathsOperator.textContent = button.textContent;
		});
	} else {
		button.addEventListener("click", () => {
			const a = parseInt(numberA.textContent);
			const b = parseInt(numberB.textContent);
			console.log(operate(a, mathsOperator.textContent, b));
		})
	}
});

/* ************************************************************************** */
/*                           display event listeners                          */
/* ************************************************************************** */
numberA.selected = false;
numberB.selected = false;

numberA.addEventListener("click", () => {
	numberB.selected = false;
	numberB.style.borderColor = "rgb(240, 240, 240)";

	numberA.selected = true;
	numberA.style.borderColor = "rgb(125, 125, 125)";
});
numberB.addEventListener("click", () => {
	numberA.selected = false;
	numberA.style.borderColor = "rgb(240, 240, 240)";

	numberB.selected = true;
	numberB.style.borderColor = `rgb(125, 125, 125)`;
});

clearButton.addEventListener("click", () => {
	numberA.textContent = 0;
	numberB.textContent = 0;
});

/* ************************************************************************** */
/*                           number event listeners                           */
/* ************************************************************************** */
numberButtonList.forEach((button) => {
	button.addEventListener("click", () => {
		if (numberA.selected) {
			if (numberA.textContent === "0") {
				numberA.textContent = button.textContent;
			} else {
				numberA.textContent += button.textContent;
			}
		}
		if (numberB.selected) {
			if (numberB.textContent === "0") {
				numberB.textContent = button.textContent;
			} else {
				numberB.textContent += button.textContent;
			}
		}
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
