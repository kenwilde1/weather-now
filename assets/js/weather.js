import WEATHER_KEY from "./config.js";
import { convertEpochToDate, convertEpochToTime } from "./time.js";

const getCurrentWeather = async (city, lat, lon) => {
  const formattedCity = city.toString().toLowerCase();
  const metric = getMetric();
  let response;
  if (lat && lon) {
    response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${metric}&appid=${WEATHER_KEY}`
    );
  } else {
    response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${formattedCity}&units=${metric}&appid=${WEATHER_KEY}`
    );
  }

  const {
    main,
    weather,
    sys,
    wind,
    name,
    coord,
    dt,
    timezone,
  } = await response.json();
  return {
    temp: main.temp,
    description: weather[0].main,
    flagUrl: `https://www.countryflags.io/${sys.country}/flat/64.png`,
    windSpeed: `Wind: ${wind.speed}`,
    location: `${name}, ${sys.country}`,
    lat: coord.lat,
    lon: coord.lon,
    date: convertEpochToDate(dt),
    sunrise: `Sunrise: ${convertEpochToTime(sys.sunrise, timezone)} A.M`,
    sunset: `Sunset: ${convertEpochToTime(sys.sunset, timezone)} P.M`,
  };
};

const getForecastWeather = async (lat, lon) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_KEY}`
  );
  const { daily } = await response.json();
  const [, dayOne, dayTwo, dayThree, dayFour, dayFive, daySix] = daily;

  return [
    {
      date: convertEpochToDate(dayOne.dt),
      temp: dayOne.temp.day,
      description: dayOne.weather[0].main,
    },
    {
      date: convertEpochToDate(dayTwo.dt),
      temp: dayTwo.temp.day,
      description: dayThree.weather[0].main,
    },
    {
      date: convertEpochToDate(dayThree.dt),
      temp: dayThree.temp.day,
      description: dayThree.weather[0].main,
    },
    {
      date: convertEpochToDate(dayFour.dt),
      temp: dayFour.temp.day,
      description: dayFour.weather[0].main,
    },
    {
      date: convertEpochToDate(dayFive.dt),
      temp: dayFive.temp.day,
      description: dayFive.weather[0].main,
    },
    {
      date: convertEpochToDate(daySix.dt),
      temp: daySix.temp.day,
      description: daySix.weather[0].main,
    },
  ];
};

const getMetric = () => {
  const target = document.querySelector("#toggle-button");
  if (target.classList.contains("metric")) {
    return "metric";
  } else {
    return "imperial";
  }
};

export { getCurrentWeather, getForecastWeather };
