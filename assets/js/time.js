const convertEpochToDate = (time) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let fullDate = new Date(time * 1000);
  return `${daysOfWeek[fullDate.getDay()]} ${fullDate.getDate()}`;
};

const convertEpochToTime = (time, shift) => {
  let fullDate = new Date((time + shift) * 1000);
  return `${fullDate.getHours()}:${fullDate.getMinutes()}:${fullDate.getSeconds()}`;
};

export { convertEpochToDate, convertEpochToTime };
