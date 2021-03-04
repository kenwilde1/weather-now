import WEATHER_KEY from "./config.js";

const getWeather = async (city) => {
  const formattedCity = city.toString().toLowerCase();
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${formattedCity}&units=metric&appid=${WEATHER_KEY}`
  );
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
    windSpeed: wind.speed,
    location: `${name}, ${sys.country}`,
    lat: coord.lat,
    lon: coord.lon,
    date: convertEpochToDate(dt),
    sunrise: `Sunrise: ${convertEpochToTime(sys.sunrise, timezone)} A.M`,
    sunset: `Sunset: ${convertEpochToTime(sys.sunset, timezone)} P.M`,
  };
};

export default getWeather;
