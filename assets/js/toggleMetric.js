const toggleMetric = () => {
  const liveTemperature = document.querySelector(".location-temp").innerHTML;
  const liveWeatherSpeed = document.querySelector(".location-wind-speed")
    .innerHTML;
  let metric = liveTemperature.slice(-1);
  // convert celsius to fahren, convert fahren to celsius

  let newString = liveTemperature.slice(0, -1);

  console.log(newString, metric);
};

const convertTemp = (metric, celsius) => {};

export default toggleMetric;
