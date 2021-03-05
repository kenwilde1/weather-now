import getWeather from "./weather.js";

const handleSubmit = async () => {
  const userCity = document.querySelector(".form-control").value;
  const live = await getWeather(userCity);
  const forecast = await getForecastWeather(live.lat, live.lon);

  populateLiveWeather(live);
  populateForecastWeather(forecast);
};

const populateLiveWeather = (data) => {
  // document.querySelector(".results-container").classList.toggle("hide");
  document.querySelector(".live-weather-flag").src = data.flagUrl;
  document.querySelector(".live-weather-location").innerHTML = data.location;
  document.querySelector(".live-weather-date").innerHTML = data.date;

  document.querySelector(".live-weather-temp").innerHTML = data.temp;

  document.querySelector(".live-wind-speed").innerHTML = data.windSpeed;
  document.querySelector(".live-weather-sunrise").innerHTML = data.sunrise;
  document.querySelector(".live-weather-sunset").innerHTML = data.sunset;
};

const populateForecastWeather = (data) => {};

document
  .querySelector("#button-addon2")
  .addEventListener("click", handleSubmit);
