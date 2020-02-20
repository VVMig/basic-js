const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(activity) {
  //throw 'Not implemented';
  if (activity == undefined || typeof activity != "string") {
    return false;
  }

  activity = parseFloat(activity);
  k = 0.693 / HALF_LIFE_PERIOD;

  return activity <= 0 || activity > 15 || isNaN(activity)
    ? false
    : Math.ceil(Math.log(MODERN_ACTIVITY / activity) / k);
};
