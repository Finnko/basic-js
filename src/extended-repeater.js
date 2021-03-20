const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options = {}) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '',
  } = options;

  let additionStr = '';

  if (addition !== '') {
    additionStr = `${addition + additionSeparator}`.repeat(additionRepeatTimes - 1) + addition;
  }

  return `${str + additionStr + separator}`.repeat(repeatTimes - 1) + str + additionStr;
};
