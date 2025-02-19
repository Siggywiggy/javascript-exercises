const convertToCelsius = function(number) {
  return Number((number * (9/5 + 32)).toFixed(1));
};

const convertToFahrenheit = function(number) {
  return Number(((number - 32) * (5/9)).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
