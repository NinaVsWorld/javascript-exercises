const convertToCelsius = function(fahrenheit) {
  celcius = (fahrenheit - 32) * 5/9;
  return Math.round(celcius * 10) / 10;
};

const convertToFahrenheit = function(celcius) {
  fahrenheit = celcius * 9/5 + 32;
  return Math.round(fahrenheit * 10) / 10;
};

console.log(convertToCelsius(100));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
