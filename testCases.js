/* ************************************************************************** */
/*                                 TEST CASES                                 */
/* ************************************************************************** */

/* ******************************** ADD tests ******************************* */
function addTest() {
	console.log("ADD test");
	console.log(`Test 0: 1 + 1 | ${operate(1, "+", 1)} = 2`);
	console.log(`Test 1: -1 + 1 | ${operate(-1, "+", 1)} = 0`);
	console.log(`Test 2: -1 + -1 | ${operate(-1, "+", -1)} = -2`);
	console.log(`Test 3: 10 + 10 | ${operate(10, "+", 10)} = 20`);
	console.log(`Test 4: 2 + 3 | ${operate(2, "+", 3)} = 5`);
	console.log(`Test 5: 0 + 0 | ${operate(0, "+", 0)} = 0`);
	console.log(`Test 6: 0 + 1 | ${operate(0, "+", 1)} = 1`);
	console.log(`Test 7: 1 + 0 | ${operate(1, "+", 0)} = 1`);
}

/* ***************************** SUBSTRACT tests **************************** */
function substractTest() {
	console.log("SUBSTRACT test");
	console.log(`Test 0: 1 - 1 | ${operate(1, "-", 1)} = 0`);
	console.log(`Test 1: -1 - 1 | ${operate(-1, "-", 1)} = -2`);
	console.log(`Test 2: -1 - -1 | ${operate(-1, "-", -1)} = 0`);
	console.log(`Test 3: 10 - 10 | ${operate(10, "-", 10)} = 0`);
	console.log(`Test 4: 2 - 3 | ${operate(2, "-", 3)} = -1`);
	console.log(`Test 5: 0 - 0 | ${operate(0, "-", 0)} = 0`);
	console.log(`Test 6: 0 - 1 | ${operate(0, "-", 1)} = -1`);
	console.log(`Test 7: 1 - 0 | ${operate(1, "-", 0)} = 1`);
}

/* ***************************** MULTIPLY tests ***************************** */
function multiplyTest() {
	console.log("MULTIPLY test");
	console.log(`Test 0: 1 * 1 | ${operate(1, "*", 1)} = 1`);
	console.log(`Test 1: -1 * 1 | ${operate(-1, "*", 1)} = -1`);
	console.log(`Test 2: -1 * -1 | ${operate(-1, "*", -1)} = 1`);
	console.log(`Test 3: 10 * 10 | ${operate(10, "*", 10)} = 100`);
	console.log(`Test 4: 2 * 3 | ${operate(2, "*", 3)} = 6`);
	console.log(`Test 5: 0 * 0 | ${operate(0, "*", 0)} = 0`);
	console.log(`Test 6: 0 * 1 | ${operate(0, "*", 1)} = 0`);
	console.log(`Test 7: 1 * 0 | ${operate(1, "*", 0)} = 0`);
}

/* ****************************** DIVIDE tests ****************************** */
function divideTest() {
	console.log("DIVIDE test");
	console.log(`Test 0: 1 / 1 | ${operate(1, "/", 1)} = 1`);
	console.log(`Test 1: -1 / 1 | ${operate(-1, "/", 1)} = -1`);
	console.log(`Test 2: -1 / -1 | ${operate(-1, "/", -1)} = 1`);
	console.log(`Test 3: 10 / 10 | ${operate(10, "/", 10)} = 1`);
	console.log(`Test 4: 3 / 2 | ${operate(3, "/", 2)} = 1.5`);
	console.log(`Test 5: 0 / 0 | ${operate(0, "/", 0)} = NaN/ERROR`);
	console.log(`Test 6: 0 / 1 | ${operate(0, "/", 1)} = 0`);
	console.log(`Test 7: 1 / 0 | ${operate(1, "/", 0)} = Infinity/ERROR`);
}

/* ******************************* ERROR tests ****************************** */
function invalidOperatorTest() {
	console.log("Invalid Operator test");
	console.log(`Test 0: 6 + 3 | ${operate(6, "+", 3)} = 9`);
	console.log(`Test 1: 6 - 3 | ${operate(6, "-", 3)} = 3`);
	console.log(`Test 2: 6 * 3 | ${operate(6, "*", 3)} = 18`);
	console.log(`Test 3: 6 / 3 | ${operate(6, "/", 3)} = 2`);
	console.log(`Test 4: op = | ${operate(6, "=", 3)} = ERROR`);
	console.log(`Test 5: op empty | ${operate(6, "", 3)} = ERROR`);
	console.log(`Test 6: op a | ${operate(6, "a", 3)} = ERROR`);
	console.log(`Test 7: op z | ${operate(6, "z", 3)} = ERROR`);
	console.log(`Test 8: op ? | ${operate(6, "?", 3)} = ERROR`);

}

/* ******************************* tests calls ****************************** */
addTest();
substractTest();
multiplyTest();
divideTest();
invalidOperatorTest();