const convertToCelsius = function(val) {
  var celsius = (val - 32) * 5 / 9;
  return Number(celsius.toFixed(1));
};

const convertToFahrenheit = function(val) {
  var farenheit = (9/5 * val) + 32;
  return Number(farenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
