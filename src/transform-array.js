const CustomError = require("../extensions/custom-error");

const operations = ['--double-prev', '--double-next', '--discard-prev', '--discard-next'];

module.exports = function transform(arr) {
  if (arr.length === 0) return [];

  if (!Array.isArray(arr)) {
    throw new Error('Error');
  }

  return arr
    .reduce((acc, item, index, array) => {
      if (item === operations[0]) {
        acc.push(acc[index - 1]);
        return acc;
      }

      if (item === operations[1]) {
        acc.push(array[index + 1]);
        return acc;
      }

      if (array[index + 1] === operations[2] || array[index - 1] === operations[3]) {
        acc.push(null);
        return acc;
      }

      acc.push(item);
      return acc;
    }, [])
    .filter(item => {
      return item !== undefined && item !== null && !operations.includes(item);
    })
};
