// grabs user's device coordinates
// if disabled or not supported, informs the User
const getDeviceCoordinates = async () => {
  const rejected = () => {
    alert("Geolocation is not supported by your browser or is not enabled.");
    document.querySelector(".how-to-container").classList.remove("hide");
    document.querySelector(".spinner-border").classList.toggle("hide");
    return;
  };

  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser or is not enabled.");
  } else {
    const pos = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, rejected);
    });

    return {
      lon: pos.coords.longitude,
      lat: pos.coords.latitude,
    };
  }
};

export default getDeviceCoordinates;
