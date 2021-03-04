import getWeather from "./weather.js";

const handleSubmit = async () => {
  const userCity = document.querySelector(".form-control").value;
  const data = await getWeather(userCity);
};

document
  .querySelector("#button-addon2")
  .addEventListener("click", handleSubmit);
