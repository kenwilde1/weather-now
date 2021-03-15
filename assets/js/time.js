// API returns EPOCH time, this function converts it to a user-friendly date
const convertEpochToDate = (time) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let fullDate = new Date(time * 1000);
  return `${daysOfWeek[fullDate.getDay()]} ${fullDate.getDate()}`;
};

// API returns time that is local to where the request originated
// The time needs to be relative to the location searched
// i.e if the user searches for California, any time-related data should be local to California
// There is an offset to calculate to convert this
const convertEpochToTime = (time, shift) => {
  let fullDate = new Date((time + shift) * 1000);
  return `${fullDate.getHours()}:${fullDate.getMinutes()}:${fullDate.getSeconds()}`;
};

export { convertEpochToDate, convertEpochToTime };
