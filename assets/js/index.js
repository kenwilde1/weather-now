import { getCurrentWeather, getForecastWeather } from "./weather.js";
import { toggleMetric, getMetric } from "./metric.js";

const populateResults = async () => {
  const results = document.querySelector(".results");
  if (!results.classList.contains("hide")) {
    results.classList.toggle("hide");
  }
  document.querySelector(".spinner-border").classList.toggle("hide");

  const userLocation = document.querySelector(".form-control").value;
  const data = await getCurrentWeather(userLocation);
  const forecast = await getForecastWeather(data.lat, data.lon);

  // modify DOM elements with current weather data
  document.querySelector(".location-date").innerHTML = data.date;
  document.querySelector(".location-name").innerHTML = data.location;
  document.querySelector(".location-flag").src = data.flagUrl;
  if (getMetric() === "metric") {
    document.querySelector(".location-temp").innerHTML = `${data.temp} °C`;
    document.querySelector(
      ".location-wind-speed"
    ).innerHTML = `${data.windSpeed} meter/sec`;
  } else {
    document.querySelector(".location-temp").innerHTML = `${data.temp} °F`;
    document.querySelector(
      ".location-wind-speed"
    ).innerHTML = `${data.windSpeed} mile/hour`;
  }

  document.querySelector(".location-description").innerHTML = data.description;

  document.querySelector(".location-sunrise").innerHTML = data.sunrise;
  document.querySelector(".location-sunset").innerHTML = data.sunset;

  // modify DOM elements with forecast data
  const days = document.querySelectorAll(".forecast-day");
  for (let [index, day] of days.entries()) {
    let metric = "°C";
    if (getMetric() !== "metric") {
      metric = "°F";
    }
    day.innerHTML = `
    <h3>${forecast[index].date}</h3>
    <p class="forecast-temp">${Math.ceil(forecast[index].temp)} ${metric}</p>
    <div class="forecast-image">
    <p>${forecast[index].description}
    <img src='./assets/images/${forecast[
      index
    ].description.toLowerCase()}.png' alt="weather" height="80" width="80" />
    </div>`;
  }

  document.querySelector(
    "#google-maps-link"
  ).href = `https://www.google.com/maps/search/${data.lat},+${data.lon}`;

  results.classList.toggle("hide");
  document.querySelector(".spinner-border").classList.toggle("hide");
  document.querySelector(".view-map").classList.toggle("hide");
};

// add event listener to search for results
document
  .querySelector("#button-addon2")
  .addEventListener("click", populateResults);

// add event listener to toggle metric button
document.querySelector("#toggle-button").addEventListener("click", (e) => {
  e.target.classList.toggle("metric");
  e.target.classList.toggle("imperial");
  toggleMetric();
});
