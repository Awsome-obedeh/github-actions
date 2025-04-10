function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) throw new Error('Cannot divide by zero');
    return a / b;
  }
  
  function modulus(a, b) {
    return a % b;
  }
  
  function power(a, b) {
    return Math.pow(a, b);
  }
  
  function average(a, b) {
    return (a + b) / 2;
  }
  
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    modulus,
    power,
    average
  };

//   a function is simply a reusable block of code that can be called during the execution
// of a program
// 2+2