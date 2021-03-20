const CustomError = require("../extensions/custom-error");

const seasons = {
  winter: [11, 0, 1],
  spring: [2, 3, 4],
  summer: [5, 6, 7],
  fall: [8, 9, 10]
};

module.exports = function getSeason(date) {
  if (typeof date === 'undefined') return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== '[object Date]') throw new Error('Invalid argument');

  const month = date.getMonth();

  for (const season in seasons) {
    if (seasons[season].includes(month)) {
      return season;
    }
  }
};
