function refreshWeather(response) {
  let temperatureElement = document.querySelector("temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("city");

  cityElement.innetHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "4fbe9b2c44d0f8a0833d1te403cbb78o";
  let upiUrl = `https://api.shecodes.io/weather/v1/current?query${city}&key${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Lisbon");
