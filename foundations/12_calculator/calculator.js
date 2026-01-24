const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((sum, current) => sum + current, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((total, current) => total * current, 1);
};

const power = function(b, e) {
	return b ** e;
};

const factorial = function(n) {
	let total = 1;
  for (let i = n; i > 0; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
