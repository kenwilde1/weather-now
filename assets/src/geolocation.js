const getDeviceCoordinates = async () => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser or is not enabled.");
  } else {
    const pos = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    return {
      lon: pos.coords.longitude,
      lat: pos.coords.latitude,
    };
  }
};

export default getDeviceCoordinates;
