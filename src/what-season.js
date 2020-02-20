module.exports = function getSeason(date) {
  // throw 'Not implemented';
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }

  let valFirst = date.toString().split(" ");
  let valSecond = date.toDateString().split(" ");

  for (let i = 0; i < valSecond.length; i++) {
    if (valFirst[i] != valSecond[i]) {
      throw error;
    }
  }

  if (date.getMonth() < 2) {
    return "winter";
  } else if (date.getMonth() < 5) {
    return "spring";
  } else if (date.getMonth() < 8) {
    return "summer";
  } else if (date.getMonth() < 11) {
    return "autumn";
  } else return "winter";
};
