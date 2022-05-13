(function () {
  document.getElementById("temperature-button").addEventListener("click", convertTemp);
})();

function convertTemp() {
  let uom = document.querySelectorAll(".temperature-uom");
  let tempValue = document.getElementById("temperature-value");
  let value = Number(tempValue.value);
  let output;
  uom.forEach(function (unit) {
    if (unit.checked && unit.value == "c") {
      output = fahrenheitToCelsius(value);
      makeResult(`${value} Fahrenheit is ${output} Celsius`);
    }
    if (unit.checked && unit.value == "f") {
      output = celsiusToFahrenheit(value);
      makeResult(`${value} Celsius is ${output} Fahrenheit`);
    }
  });
  tempValue.value = "";
}

function fahrenheitToCelsius(value) {
  return Math.ceil(((value - 32) * 5) / 9);
}

function celsiusToFahrenheit(value) {
  return Math.ceil((value / 5) * 9 + 32);
}

function makeResult(message) {
  clearInitialMessage();
  let resultLanding = document.getElementById("temperature-results");
  let newResult = document.createElement("p");
  newResult.classList.add("added-temp-result");
  newResult.innerText = message;
  resultLanding.appendChild(newResult);
}

function clearInitialMessage() {
  let initialMessage = document.getElementById("no-temp-results");
  if (initialMessage) {
    initialMessage.remove();
  }
}

function resetResults() {
  clearInitialMessage();
  let resultLanding = document.getElementById("temperature-results");
  resultLanding.innerHTML = "";
  let newResult = document.createElement("p");
  newResult.id = "no-temp-results";
  newResult.innerText = "No Conversions Yet";
  resultLanding.appendChild(newResult);
}
