const add = function(numberOne, numberTwo) {
  return Number(numberOne) + Number(numberTwo);
};

const subtract = function(numberOne, numberTwo) {
  return Number(numberOne) - Number(numberTwo);
	
};

const sum = function(arrayNums) {
  if (arrayNums.length === 0) {
    return 0;
  }

  result = new Number();
  arrayNums.forEach(element => {result += element});
  return result;
    
};


const multiply = function(arrayNums) {
  if (arrayNums.length === 0) {
    return 0;
  }

  result = 1;

  arrayNums.forEach(element => {result *= Number(element)});

  return result;

};

const power = function(num, power) {
  return num ** power;
	
};


const factorial = function (num) {
    if (num === 0) {
      return 1;
    } else if (num === 1) {
      return 1;
    } else {
        let result = 1;
        for (let i = num; i > 0; i--) {
          result *= i;
        }
        return result; 
    }
};


/*
const factorial = function (n) {
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};
*/
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
