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
