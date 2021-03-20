const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || typeof sampleActivity !== 'undefined' || sampleActivity > 15 || sampleActivity < 0) return false;

  const k = 0.693 / HALF_LIFE_PERIOD;

  return Math.trunc(Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / k);
};
