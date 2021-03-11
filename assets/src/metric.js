const toggleMetric = () => {
  let liveTemperature = document.querySelector(".location-temp");
  let forecastTemperatures = Array.from(
    document.querySelectorAll(".forecast-temp")
  );
  let metric = liveTemperature.innerHTML.slice(-1);
  let temp = parseFloat(liveTemperature.innerHTML.slice(0, -3)).toFixed(1);
  convertLiveTemp(metric, temp);
  convertForecastTemp(metric, forecastTemperatures);
};

const convertLiveTemp = (metric, temp) => {
  let liveTemperature = document.querySelector(".location-temp");

  if (metric === "C") {
    let fahrenheit = ((temp * 9) / 5 + 32).toFixed(1);
    liveTemperature.innerHTML = `${fahrenheit} °F`;
  } else if (metric === "F") {
    let celsius = (((temp - 32) * 5) / 9).toFixed(1);
    liveTemperature.innerHTML = `${celsius} °C`;
  }
};

const convertForecastTemp = (metric, days) => {
  days.forEach((day) => {
    let temp = parseFloat(day.innerHTML.slice(0, -3)).toFixed(1);
    if (metric === "C") {
      let fahrenheit = ((temp * 9) / 5 + 32).toFixed(1);
      day.innerHTML = `${fahrenheit} °F`;
    } else if (metric === "F") {
      let celsius = (((temp - 32) * 5) / 9).toFixed(1);
      day.innerHTML = `${celsius} °C`;
    }
  });
};

const getMetric = () => {
  const target = document.querySelector("#toggle-button");
  if (target.classList.contains("metric")) {
    return "metric";
  } else {
    return "imperial";
  }
};

export { toggleMetric, getMetric };
